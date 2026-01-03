import { NextResponse } from "next/server"

type JsonInit = { status?: number; headers?: Record<string, string> }

function noStore(init?: JsonInit) {
  return new NextResponse(null, {
    status: init?.status ?? 204,
    headers: {
      "Cache-Control": "no-store",
      ...(init?.headers ?? {}),
    },
  })
}

function safeJsonParse(text: string): unknown {
  try {
    return JSON.parse(text) as unknown
  } catch {
    return null
  }
}

/**
 * Deep redaction:
 * - remove url-like / referrer-like / document-like keys anywhere
 * - keep only safe primitives
 * - truncate strings
 * - cap depth to avoid huge logs
 */
function redactDeep(value: unknown, depth = 0): unknown {
  if (depth > 4) return "[omitted]"
  if (value === null) return null

  const t = typeof value
  if (t === "string") return (value as string).slice(0, 200)
  if (t === "number" || t === "boolean") return value

  if (Array.isArray(value)) {
    return value.slice(0, 3).map((v) => redactDeep(v, depth + 1))
  }

  if (t !== "object") return "[omitted]"

  const v = value as Record<string, unknown>
  const out: Record<string, unknown> = {}

  for (const [k, val] of Object.entries(v)) {
    const key = k.toLowerCase()

    if (
      key.includes("url") ||
      key.includes("uri") ||
      key.includes("referrer") ||
      key.includes("document") ||
      key.includes("source") ||
      key.includes("blocked") ||
      key.includes("location")
    ) {
      out[k] = "[redacted]"
      continue
    }

    out[k] = redactDeep(val, depth + 1)
  }

  return out
}

/**
 * Super-light in-memory throttle (best-effort).
 * Edge instances are ephemeral; this is only a small guard.
 *
 * Important improvements:
 * - Use a stable client key even if IP is missing
 * - Prune old entries to avoid unbounded Map growth
 */
const bucket = new Map<string, { ts: number; n: number }>()
let lastPrune = 0

function getClientKey(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    ""

  if (ip) return `ip:${ip}`

  // Fallback key when IP is unavailable (common on some proxies)
  const ua = req.headers.get("user-agent") ?? "ua:unknown"
  const al = req.headers.get("accept-language") ?? "al:unknown"
  return `fp:${ua.slice(0, 80)}|${al.slice(0, 40)}`
}

function prune(now: number) {
  // prune at most every 2 minutes
  if (now - lastPrune < 120_000) return
  lastPrune = now

  const maxAge = 5 * 60_000 // keep 5 minutes of entries
  for (const [k, v] of bucket.entries()) {
    if (now - v.ts > maxAge) bucket.delete(k)
  }
}

function allow(key: string, now: number) {
  const w = 60_000 // 1 min window
  const limit = 60 // max 60/min per client key

  const cur = bucket.get(key)
  if (!cur || now - cur.ts > w) {
    bucket.set(key, { ts: now, n: 1 })
    return true
  }
  if (cur.n >= limit) return false
  cur.n++
  return true
}

export async function POST(req: Request) {
  try {
    const now = Date.now()
    prune(now)

    const key = getClientKey(req)
    if (!allow(key, now)) {
      // Always return 204 to reduce retries; just skip logging.
      return noStore({ status: 204 })
    }

    const contentType = req.headers.get("content-type") ?? ""

    // Cap body size to reduce abuse
    const raw = (await req.text()).slice(0, 50_000)
    const parsed = safeJsonParse(raw)

    let reportForLog: unknown = null

    // application/reports+json -> [{ type, age, url, user_agent, body: {...} }]
    if (contentType.includes("application/reports+json") && Array.isArray(parsed)) {
      const first = parsed[0] as any
      reportForLog = {
        type: typeof first?.type === "string" ? first.type : "unknown",
        body: redactDeep(first?.body ?? null),
      }
    }
    // legacy application/csp-report -> { "csp-report": {...} }
    else if (parsed && typeof parsed === "object") {
      const obj = parsed as any
      const legacy = obj["csp-report"] ?? obj
      reportForLog = redactDeep(legacy)
    } else {
      reportForLog = { note: "unparsed" }
    }

    console.warn("[CSP REPORT]", {
      contentType,
      report: reportForLog,
    })

    return noStore()
  } catch {
    return noStore()
  }
}
