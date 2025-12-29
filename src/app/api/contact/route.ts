import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type RateEntry = { count: number; resetAt: number }

// NOTE: In-memory rate limit works per server instance (good baseline).
// For stronger, shared limiting across all instances, use Vercel KV/Upstash.
const RATE = new Map<string, RateEntry>()

const WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQ = 5 // per IP per window

function getIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for") || ""
  const ip = xff.split(",")[0]?.trim()
  return ip || "unknown"
}

function rateLimit(ip: string) {
  const now = Date.now()
  const current = RATE.get(ip)

  if (!current || now > current.resetAt) {
    RATE.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return { ok: true, remaining: MAX_REQ - 1 }
  }

  if (current.count >= MAX_REQ) {
    return { ok: false, remaining: 0, retryAfterMs: current.resetAt - now }
  }

  current.count += 1
  RATE.set(ip, current)
  return { ok: true, remaining: MAX_REQ - current.count }
}

function jsonNoStore(body: any, init?: { status?: number; headers?: Record<string, string> }) {
  return NextResponse.json(body, {
    status: init?.status ?? 200,
    headers: {
      "Cache-Control": "no-store",
      ...(init?.headers ?? {}),
    },
  })
}

function cleanHeaderValue(v: string, maxLen: number) {
  // Prevent header injection via CR/LF
  return v.replace(/[\r\n]+/g, " ").trim().slice(0, maxLen)
}

export async function POST(req: Request) {
  const traceId = `sc-${Date.now()}-${Math.random().toString(16).slice(2)}`

  try {
    const ip = getIp(req)

    // 1) Rate limit
    const rl = rateLimit(ip)
    if (!rl.ok) {
      return jsonNoStore(
        { error: "Too many requests. Please try again later.", traceId },
        {
          status: 429,
          headers: { "Retry-After": String(Math.ceil((rl.retryAfterMs ?? 0) / 1000)) },
        }
      )
    }

    const body = await req.json()
    const { name, email, subject, message, company, startedAt } = body ?? {}

    // 2) Honeypot check (bots fill hidden fields)
    if (company && String(company).trim().length > 0) {
      return jsonNoStore({ success: true, traceId })
    }

    // 3) Timing check: if submitted too fast, likely bot
    const started = Number(startedAt)
    if (!Number.isFinite(started) || Date.now() - started < 1200) {
      return jsonNoStore({ success: true, traceId })
    }

    // Basic required fields
    const emailStr = String(email ?? "").trim().slice(0, 160)
    const subjectStr = cleanHeaderValue(String(subject ?? ""), 160)
    const messageStr = String(message ?? "").trim().slice(0, 4000)
    const nameStr = cleanHeaderValue(String(name ?? ""), 120)

    if (!emailStr || !subjectStr || !messageStr) {
      return jsonNoStore({ error: "Missing fields", traceId }, { status: 400 })
    }

    // 4) Send email via SMTP (Google Workspace)
    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || "587")
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS

    if (!host || !user || !pass) {
      return jsonNoStore({ error: "SMTP not configured", traceId }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: false, // STARTTLS on 587
      auth: { user, pass },
      requireTLS: true,
      tls: {
        minVersion: "TLSv1.2",
      },
      connectionTimeout: 12_000,
      greetingTimeout: 12_000,
      socketTimeout: 20_000,
    })

    // Optional but useful during setup (comment out later if you prefer)
    await transporter.verify()

    const to = process.env.CONTACT_TO_EMAIL || user

    // IMPORTANT: keep "from" as your authenticated workspace sender to satisfy DMARC.
    // Use replyTo for the visitor.
    await transporter.sendMail({
      from: {
        name: "SmartConnect CRM UG (haftungsbeschränkt)",
        address: user,
      },
      to,
      replyTo: emailStr,
      subject: `[Website Anfrage] ${subjectStr}`,
      text: `Name: ${nameStr || "-"}
E-Mail: ${emailStr}
IP: ${ip}
Trace: ${traceId}

Nachricht:
${messageStr}
`,
      headers: {
        "X-Entity-Ref-ID": traceId,
      },
    })

    // 5) Optional: auto-reply to sender
    if (process.env.CONTACT_AUTOREPLY_ENABLED === "true") {
      await transporter.sendMail({
        from: {
          name: "SmartConnect CRM UG (haftungsbeschränkt)",
          address: user,
        },
        to: emailStr,
        subject: "Eingangsbestätigung: Ihre Anfrage",
        text: `Vielen Dank für Ihre Nachricht.

Wir haben Ihre Anfrage erhalten und melden uns zeitnah zurück.

SmartConnect CRM UG (haftungsbeschränkt)
Otto-Braun-Str. 12, 40595 Düsseldorf
E-Mail: admin@smartclientcrm.com
Telefon: +49 211 87973999233

Trace: ${traceId}
`,
        headers: {
          "X-Entity-Ref-ID": traceId,
        },
      })
    }

    return jsonNoStore({ success: true, traceId, remaining: rl.remaining })
  } catch (err) {
    return jsonNoStore({ error: "Send failed" }, { status: 500 })
  }
}
