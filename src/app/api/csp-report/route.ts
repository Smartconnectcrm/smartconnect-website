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
  if (depth > 4) return "[omitted]" // cap recursion
  if (value === null) return null

  const t = typeof value
  if (t === "string") return (value as string).slice(0, 200)
  if (t === "number" || t === "boolean") return value

  if (Array.isArray(value)) {
    // keep only first few entries
    return value.slice(0, 3).map((v) => redactDeep(v, depth + 1))
  }

  if (t !== "object") return "[omitted]"

  const v = value as Record<string, unknown>
  const out: Record<string, unknown> = {}

  for (const [k, val] of Object.entries(v)) {
    const key = k.toLowerCase()

    // URLs & location-identifiers
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
 * Optional: super-light in-memory throttle (best-effort).
 * Note: Edge instances are ephemeral; this is only a small guard.
 */
const bucket = new Map<string, { ts: number; n: number }>()

function allow(ip: string) {
  const now = Date.now()
  const w = 60_000 // 1 min window
  const limit = 60 // max 60/min per IP (adjust)

  const cur = bucket.get(ip)
  if (!cur || now - cur.ts > w) {
    bucket.set(ip, { ts: now, n: 1 })
    return true
  }
  if (cur.n >= limit) return false
  cur.n++
  return true
}

function asRecord(value: unknown): Record<string, unknown> | null {
  if (typeof value !== "object" || value === null) return null
  return value as Record<string, unknown>
}

function getString(obj: Record<string, unknown>, key: string): string | undefined {
  const v = obj[key]
  return typeof v === "string" ? v : undefined
}

export async function POST(req: Request) {
  try {
    // Best-effort IP (varies by platform/proxy)
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown"

    if (!allow(ip)) {
      // Still no-store, still 204-ish behavior (or 429 if you prefer)
      return noStore({ status: 204 })
    }

    const contentType = req.headers.get("content-type") ?? ""

    // Cap body size to reduce abuse (read as text, then slice)
    const raw = (await req.text()).slice(0, 50_000)
    const parsed = safeJsonParse(raw)

    /**
     * Normalize to a compact safe log object.
     * Keep only fields that are useful for CSP tuning without collecting URLs.
     */
    let reportForLog: unknown = null

    // Modern Reporting API: application/reports+json
    // Example: [{ type, age, url, user_agent, body: { ... } }]
    if (contentType.includes("application/reports+json") && Array.isArray(parsed)) {
      const first = parsed[0] as unknown
      const firstRec = asRecord(first)

      const type = firstRec ? getString(firstRec, "type") : undefined
      const body = firstRec ? (firstRec["body"] as unknown) : null

      reportForLog = {
        type: type ?? "unknown",
        body: redactDeep(body),
      }
    }
    // Legacy: application/csp-report
    // Example: { "csp-report": { ... } }
    else {
      const obj = asRecord(parsed)

      if (obj) {
        const legacy = Object.prototype.hasOwnProperty.call(obj, "csp-report")
          ? (obj["csp-report"] as unknown)
          : obj

        reportForLog = redactDeep(legacy)
      } else {
        reportForLog = { note: "unparsed" }
      }
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
