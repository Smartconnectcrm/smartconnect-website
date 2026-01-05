import { NextResponse } from "next/server"
import { createTransport } from "nodemailer"

export const runtime = "nodejs"

type ContactPayload = {
  name?: string
  email?: string
  subject?: string
  message?: string
  company?: string // honeypot
  startedAt?: number | string
}

type JsonInit = { status?: number; headers?: Record<string, string> }

/* -----------------------------
   Rate limit config
------------------------------ */
const WINDOW_SEC = 10 * 60 // 10 minutes
const MAX_REQ = 5 // per IP per window

/* -----------------------------
   Strict-mode knobs
------------------------------ */
const STRICT_URL_MAX = 0
const STRICT_MAX_UPPERCASE_RATIO = 0.6
const STRICT_MIN_MESSAGE_LEN = 8
const STRICT_MAX_MESSAGE_LEN = 4000

/* -----------------------------
   Helpers
------------------------------ */
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
  if (!s.length) return 0
  const letters = (s.match(/[A-Za-zÀ-ÖØ-öø-ÿ]/g) ?? []).length
  return letters / s.length
}

function noiseRatio(s: string) {
  if (!s.length) return 1
  const noise = (s.match(/[^A-Za-zÀ-ÖØ-öø-ÿ0-9\s.,;:!?'"()\-\u2013\u2014]/g) ?? [])
    .length
  return noise / s.length
}

function uppercaseRatio(s: string) {
  const letters = s.match(/[A-Za-zÀ-ÖØ-öø-ÿ]/g) ?? []
  if (!letters.length) return 0
  const upper = letters.filter(
    (c) => c === c.toUpperCase() && c !== c.toLowerCase()
  ).length
  return upper / letters.length
}

function countUrls(s: string) {
  const re =
    /\b((https?:\/\/|www\.)[^\s]+|[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.[a-z]{2,})(\/[^\s]*)?\b/gi
  return (s.match(re) ?? []).length
}

function containsBadWords(s: string) {
  const bad = [
    "viagra",
    "casino",
    "porn",
    "loan",
    "crypto",
    "bitcoin",
    "binance",
    "airdrop",
    "forex",
    "seo service",
    "backlink",
    "guest post",
    "marketing agency",
    "telegram",
    "whatsapp",
  ]
  const t = s.toLowerCase()
  return bad.some((w) => t.includes(w))
}

function looksLikeGibberishStrict(text: string) {
  const t = normalizeText(text)
  if (t.length < STRICT_MIN_MESSAGE_LEN) return true
  if (maxRunLength(t) >= 10) return true
  if (letterRatio(t) < 0.45) return true
  if (noiseRatio(t) > 0.18) return true
  if (t.length > 30 && shannonEntropy(t) > 5.2) return true
  if (uppercaseRatio(t) > STRICT_MAX_UPPERCASE_RATIO && t.length > 30) return true
  return false
}

/* -----------------------------
   Upstash helpers (safe)
------------------------------ */
async function upstashPipelineSafe(commands: Array<[string, ...Array<string | number>]>) {
  try {
    const url = process.env.KV_REST_API_URL
    const token = process.env.KV_REST_API_TOKEN
    if (!url || !token) return null

    const res = await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commands),
      cache: "no-store",
    })

    if (!res.ok) return null
    return (await res.json()) as Array<{ result: unknown }>
  } catch {
    return null
  }
}

async function rateLimit(ip: string) {
  const key = `rl:contact:${ip}`
  const res = await upstashPipelineSafe([
    ["INCR", key],
    ["TTL", key],
  ])

  if (!res) return { ok: true as const, remaining: MAX_REQ }

  const count = Number(res[0]?.result ?? 0)
  const ttl = Number(res[1]?.result ?? -1)

  if (count === 1 || ttl < 0) {
    await upstashPipelineSafe([["EXPIRE", key, WINDOW_SEC]])
  }

  if (count > MAX_REQ) {
    return { ok: false as const, retryAfterSec: ttl > 0 ? ttl : WINDOW_SEC }
  }

  return { ok: true as const, remaining: MAX_REQ - count }
}

/* -----------------------------
   Main handler
------------------------------ */
export async function POST(req: Request) {
  const traceId = `sc-${Date.now()}-${Math.random().toString(16).slice(2)}`

  try {
    const ip = getIp(req)
    const rl = await rateLimit(ip)
    if (!rl.ok) {
      return jsonNoStore(
        { error: "Too many requests", traceId },
        { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
      )
    }

    const body = (await req.json()) as ContactPayload
    const { name, email, subject, message, company, startedAt } = body ?? {}

    if (company && company.trim()) {
      return jsonNoStore({ success: true, traceId })
    }

    const started = Number(startedAt)
    if (!Number.isFinite(started) || Date.now() - started < 1200) {
      return jsonNoStore({ success: true, traceId })
    }

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

    if (
      countUrls(messageStr) > STRICT_URL_MAX ||
      containsBadWords(subjectStr + messageStr) ||
      looksLikeGibberishStrict(messageStr)
    ) {
      return jsonNoStore({ success: true, traceId })
    }

    /* -----------------------------
       SMTP
    ------------------------------ */
    const host = process.env.SMTP_HOST ?? ""
    const port = Number(process.env.SMTP_PORT || "587")
    const user = process.env.SMTP_USER ?? ""
    const pass = process.env.SMTP_PASS ?? ""

    if (!host || !user || !pass) {
      return jsonNoStore({ error: "SMTP not configured", traceId }, { status: 500 })
    }

    const transporter = createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      requireTLS: port !== 465,
      tls: { minVersion: "TLSv1.2" },
    })

    await transporter.sendMail({
      from: { name: "SmartConnect CRM UG (haftungsbeschränkt)", address: user },
      to: process.env.CONTACT_TO_EMAIL || user,
      replyTo: emailStr,
      subject: `[Website Anfrage] ${subjectStr}`,
      text: `Name: ${nameStr || "-"}
E-Mail: ${emailStr}
IP: ${ip}
Trace: ${traceId}

${messageStr}`,
      headers: { "X-Entity-Ref-ID": traceId },
    })

    return jsonNoStore({ success: true, traceId })
  } catch {
    return jsonNoStore({ error: "Send failed" }, { status: 500 })
  }
}
