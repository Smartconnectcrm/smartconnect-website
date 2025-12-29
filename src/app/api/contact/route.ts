import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type RateEntry = { count: number; resetAt: number }

// NOTE: In-memory rate limit works per server instance (good baseline).
// For stronger, shared limiting across all instances, use Vercel KV/Upstash.
const RATE = new Map<string, RateEntry>()

const WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQ = 5 // per IP per window

function getIp(req: Request) {
  // Vercel commonly provides x-forwarded-for
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

export async function POST(req: Request) {
  try {
    const ip = getIp(req)

    // 1) Rate limit
    const rl = rateLimit(ip)
    if (!rl.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((rl.retryAfterMs ?? 0) / 1000)),
          },
        }
      )
    }

    const body = await req.json()
    const { name, email, subject, message, company, startedAt } = body ?? {}

    // 2) Honeypot check (bots fill hidden fields)
    if (company && String(company).trim().length > 0) {
      // Pretend success to avoid helping spammers
      return NextResponse.json({ success: true })
    }

    // 3) Timing check: if submitted too fast, likely bot
    const started = Number(startedAt)
    if (!Number.isFinite(started) || Date.now() - started < 1200) {
      return NextResponse.json({ success: true })
    }

    // Basic required fields
    const emailStr = String(email ?? "").trim().slice(0, 160)
    const subjectStr = String(subject ?? "").trim().slice(0, 160)
    const messageStr = String(message ?? "").trim().slice(0, 4000)
    const nameStr = String(name ?? "").trim().slice(0, 120)

    if (!emailStr || !subjectStr || !messageStr) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    // 4) Send email via SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER

    await transporter.sendMail({
      from: `"SmartConnect Website" <${process.env.SMTP_USER}>`,
      to,
      replyTo: emailStr,
      subject: `[Website Anfrage] ${subjectStr}`,
      text: `Name: ${nameStr || "-"}
E-Mail: ${emailStr}
IP: ${ip}

Nachricht:
${messageStr}
`,
    })

    // 5) Optional: auto-reply to sender (enable with env var)
    if (process.env.CONTACT_AUTOREPLY_ENABLED === "true") {
      await transporter.sendMail({
        from: `"SmartConnect CRM UG" <${process.env.SMTP_USER}>`,
        to: emailStr,
        subject: "Eingangsbestätigung: Ihre Anfrage",
        text: `Vielen Dank für Ihre Nachricht.

Wir haben Ihre Anfrage erhalten und melden uns zeitnah zurück.

SmartConnect CRM UG (haftungsbeschränkt)
Düsseldorf, Deutschland
E-Mail: admin@smartclientcrm.com
Telefon: +49 211 87973999233
`,
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Send failed" }, { status: 500 })
  }
}
