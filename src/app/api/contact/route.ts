import { NextResponse } from "next/server"
import { createTransport } from "nodemailer"

type ContactPayload = {
  name?: string
  email?: string
  subject?: string
  message?: string
  company?: string // honeypot
  startedAt?: number | string
}

type JsonInit = { status?: number; headers?: Record<string, string> }

const WINDOW_SEC = 10 * 60 // 10 minutes
const MAX_REQ = 5 // per IP per window

// Strict-mode knobs (tune safely)
const STRICT_URL_MAX = 0 // 0 = block any URL in message
const STRICT_MAX_UPPERCASE_RATIO = 0.6
const STRICT_MIN_MESSAGE_LEN = 8
const STRICT_MAX_MESSAGE_LEN = 4000

function jsonNoStore<T>(body: T, init?: JsonInit) {
  return NextResponse.json(body, {
    status: init?.status ?? 200,
    headers: {
      "Cache-Control": "no-store",
      ...(init?.headers ?? {}),
    },
  })
}

function getIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for") || ""
  const first = xff.split(",")[0]?.trim()
  const xri = req.headers.get("x-real-ip")?.trim()
  return first || xri || "unknown"
}

function cleanHeaderValue(v: string, maxLen: number) {
  return v.replace(/[\r\n]+/g, " ").trim().slice(0, maxLen)
}

function isProbablyEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

function normalizeText(s: string) {
  return (s || "").replace(/\s+/g, " ").trim()
}

function shannonEntropy(s: string) {
  if (!s) return 0
  const freq = new Map<string, number>()
  for (const ch of s) freq.set(ch, (freq.get(ch) ?? 0) + 1)
  const len = s.length
  let ent = 0
  for (const c of freq.values()) {
    const p = c / len
    ent -= p * Math.log2(p)
  }
  return ent
}

function maxRunLength(s: string) {
  if (!s) return 0
  let max = 1
  let run = 1
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) run++
    else run = 1
    if (run > max) max = run
  }
  return max
}

function letterRatio(s: string) {
  const t = s || ""
  if (!t.length) return 0
  const letters = (t.match(/[A-Za-zÀ-ÖØ-öø-ÿ]/g) ?? []).length
  return letters / t.length
}

function noiseRatio(s: string) {
  const t = s || ""
  if (!t.length) return 1
  const noise = (t.match(/[^A-Za-zÀ-ÖØ-öø-ÿ0-9\s.,;:!?'"()\-\u2013\u2014]/g) ?? [])
    .length
  return noise / t.length
}

function uppercaseRatio(s: string) {
  const letters = s.match(/[A-Za-zÀ-ÖØ-öø-ÿ]/g) ?? []
  if (!letters.length) return 0
  const upper = letters.filter((c) => c === c.toUpperCase() && c !== c.toLowerCase()).length
  return upper / letters.length
}

function countUrls(s: string) {
  // catches http(s)://, www., and plain domains like example.com
  const re =
    /\b((https?:\/\/|www\.)[^\s]+|[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.[a-z]{2,})(\/[^\s]*)?\b/gi
  return (s.match(re) ?? []).length
}

function containsBadWords(s: string) {
  // keep conservative; you can add more later
  const bad = [
    "viagra",
    "casino",
    "porn",
    "sex",
    "loan",
    "crypto",
    "bitcoin",
    "binance",
    "airdrop",
    "investment",
    "forex",
    "whatsapp",
    "telegram",
    "t.me",
    "seo service",
    "backlink",
    "guest post",
    "paid traffic",
    "rank on google",
    "marketing agency",
  ]
  const t = s.toLowerCase()
  return bad.some((w) => t.includes(w))
}

function looksLikeGibberishStrict(text: string) {
  const t = normalizeText(text)
  if (!t) return true

  if (t.length < STRICT_MIN_MESSAGE_LEN) return true

  const ent = shannonEntropy(t)
  const run = maxRunLength(t)
  const lr = letterRatio(t)
  const nr = noiseRatio(t)

  // repeats / keyboard smash
  if (run >= 10) return true
  if (lr < 0.45) return true
  if (nr > 0.18) return true
  if (t.length > 30 && ent > 5.2) return true

  // ALL CAPS marketing spam
  if (uppercaseRatio(t) > STRICT_MAX_UPPERCASE_RATIO && t.length > 30) return true

  return false
}

/**
 * Upstash REST helper (works with KV_REST_API_URL / KV_REST_API_TOKEN).
 */
async function upstashPipeline(commands: Array<[string, ...Array<string | number>]>) {
  const url = process.env.KV_REST_API_URL
  const token = process.env.KV_REST_API_TOKEN
  if (!url || !token) throw new Error("KV not configured")

  const res = await fetch(`${url}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
    cache: "no-store",
  })

  if (!res.ok) throw new Error(`Upstash error: ${res.status}`)
  return (await res.json()) as Array<{ result: any; error?: string }>
}

async function rateLimit(ip: string) {
  const key = `rl:contact:${ip}`
  const results = await upstashPipeline([
    ["INCR", key],
    ["TTL", key],
  ])

  const count = Number(results[0]?.result ?? 0)
  const ttl = Number(results[1]?.result ?? -1)

  if (count === 1 || ttl < 0) {
    await upstashPipeline([["EXPIRE", key, WINDOW_SEC]])
  }

  if (count > MAX_REQ) {
    const retryAfter = ttl > 0 ? ttl : WINDOW_SEC
    return { ok: false as const, remaining: 0, retryAfterSec: retryAfter }
  }

  return { ok: true as const, remaining: Math.max(0, MAX_REQ - count) }
}

/**
 * Strict mode: store a small audit log in KV (no PII beyond hashed email).
 * Opt-in by setting CONTACT_AUDIT_LOG_ENABLED="true"
 */
async function auditLog(entry: {
  traceId: string
  ip: string
  email: string
  subject: string
  action: "sent" | "blocked" | "error" | "honeypot" | "timing"
  reason?: string
}) {
  if (process.env.CONTACT_AUDIT_LOG_ENABLED !== "true") return

  const crypto = await import("crypto")
  const emailHash = crypto.createHash("sha256").update(entry.email.toLowerCase()).digest("hex")

  const key = `contact:log:${Date.now()}:${entry.traceId}`
  const value = JSON.stringify({
    t: new Date().toISOString(),
    traceId: entry.traceId,
    ip: entry.ip,
    emailHash,
    subject: entry.subject.slice(0, 160),
    action: entry.action,
    reason: entry.reason?.slice(0, 200),
  })

  // keep logs for 30 days
  await upstashPipeline([
    ["SET", key, value],
    ["EXPIRE", key, 30 * 24 * 60 * 60],
  ])
}

export async function POST(req: Request) {
  const traceId = `sc-${Date.now()}-${Math.random().toString(16).slice(2)}`

  try {
    const ip = getIp(req)

    // 1) Rate limit (Upstash-backed)
    const rl = await rateLimit(ip)
    if (!rl.ok) {
      await auditLog({
        traceId,
        ip,
        email: "unknown",
        subject: "unknown",
        action: "blocked",
        reason: "rate_limit",
      })
      return jsonNoStore(
        { error: "Too many requests. Please try again later.", traceId },
        { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
      )
    }

    const body = (await req.json()) as ContactPayload
    const { name, email, subject, message, company, startedAt } = body ?? {}

    // 2) Honeypot (silent accept)
    if (company && String(company).trim().length > 0) {
      await auditLog({
        traceId,
        ip,
        email: String(email ?? ""),
        subject: String(subject ?? ""),
        action: "honeypot",
        reason: "honeypot_filled",
      })
      return jsonNoStore({ success: true, traceId, remaining: rl.remaining })
    }

    // 3) Timing check (silent accept)
    const started = Number(startedAt)
    if (!Number.isFinite(started) || Date.now() - started < 1200) {
      await auditLog({
        traceId,
        ip,
        email: String(email ?? ""),
        subject: String(subject ?? ""),
        action: "timing",
        reason: "too_fast_or_missing_startedAt",
      })
      return jsonNoStore({ success: true, traceId, remaining: rl.remaining })
    }

    // Required fields
    const emailStr = String(email ?? "").trim().slice(0, 160)
    const subjectStr = cleanHeaderValue(String(subject ?? ""), 160)
    const messageStr = String(message ?? "").trim().slice(0, STRICT_MAX_MESSAGE_LEN)
    const nameStr = cleanHeaderValue(String(name ?? ""), 120)

    if (!emailStr || !subjectStr || !messageStr) {
      return jsonNoStore({ error: "Missing fields", traceId }, { status: 400 })
    }

    if (!isProbablyEmail(emailStr)) {
      return jsonNoStore({ error: "Invalid email", traceId }, { status: 400 })
    }

    // -----------------------
    // STRICT MODE FILTERS
    // -----------------------
    const urlCount = countUrls(messageStr)
    if (urlCount > STRICT_URL_MAX) {
      await auditLog({
        traceId,
        ip,
        email: emailStr,
        subject: subjectStr,
        action: "blocked",
        reason: `url_count:${urlCount}`,
      })
      // silent accept
      return jsonNoStore({ success: true, traceId, remaining: rl.remaining })
    }

    if (containsBadWords(`${subjectStr} ${messageStr}`)) {
      await auditLog({
        traceId,
        ip,
        email: emailStr,
        subject: subjectStr,
        action: "blocked",
        reason: "keyword_block",
      })
      return jsonNoStore({ success: true, traceId, remaining: rl.remaining })
    }

    if (looksLikeGibberishStrict(messageStr)) {
      await auditLog({
        traceId,
        ip,
        email: emailStr,
        subject: subjectStr,
        action: "blocked",
        reason: "gibberish",
      })
      return jsonNoStore({ success: true, traceId, remaining: rl.remaining })
    }

    // Optional: enforce message length (after spam filters)
    if (messageStr.length < STRICT_MIN_MESSAGE_LEN) {
      await auditLog({
        traceId,
        ip,
        email: emailStr,
        subject: subjectStr,
        action: "blocked",
        reason: "too_short",
      })
      return jsonNoStore({ success: true, traceId, remaining: rl.remaining })
    }

    // 5) SMTP config
    const host = process.env.SMTP_HOST ?? ""
    const port = Number(process.env.SMTP_PORT || "587")
    const user = process.env.SMTP_USER ?? ""
    const pass = process.env.SMTP_PASS ?? ""

    if (!host || !user || !pass) {
      await auditLog({
        traceId,
        ip,
        email: emailStr,
        subject: subjectStr,
        action: "error",
        reason: "smtp_not_configured",
      })
      return jsonNoStore({ error: "SMTP not configured", traceId }, { status: 500 })
    }

    const transporter = createTransport({
      host,
      port,
      secure: false,
      auth: { user, pass },
      requireTLS: true,
      tls: { minVersion: "TLSv1.2" },
      connectionTimeout: 12_000,
      greetingTimeout: 12_000,
      socketTimeout: 20_000,
    })

    await transporter.verify()

    const to = (process.env.CONTACT_TO_EMAIL || user).trim()

    await transporter.sendMail({
      from: { name: "SmartConnect CRM UG (haftungsbeschränkt)", address: user },
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
      headers: { "X-Entity-Ref-ID": traceId },
    })

    if (process.env.CONTACT_AUTOREPLY_ENABLED === "true") {
      await transporter.sendMail({
        from: { name: "SmartConnect CRM UG (haftungsbeschränkt)", address: user },
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
        headers: { "X-Entity-Ref-ID": traceId },
      })
    }

    await auditLog({
      traceId,
      ip,
      email: emailStr,
      subject: subjectStr,
      action: "sent",
    })

    return jsonNoStore({ success: true, traceId, remaining: rl.remaining })
  } catch {
    return jsonNoStore({ error: "Send failed" }, { status: 500 })
  }
}
