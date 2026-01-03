import { NextResponse } from "next/server"

export const runtime = "nodejs"

type ScanResponse = [cursor: number, keys: string[]]

type PipelineItem = { result: unknown; error?: string }

type ContactLog = {
  t: string
  traceId?: string
  ip?: string
  emailHash?: string
  subject?: string
  action?: string
  reason?: string
}

function isContactLog(x: unknown): x is ContactLog {
  if (typeof x !== "object" || x === null) return false
  const v = x as Record<string, unknown>
  return typeof v.t === "string"
}

function safeJsonParse(value: unknown): unknown {
  if (typeof value !== "string") return null
  try {
    return JSON.parse(value) as unknown
  } catch {
    return null
  }
}

export async function GET(req: Request) {
  const auth = req.headers.get("authorization")
  const expected = `Bearer ${process.env.ADMIN_API_KEY ?? ""}`

  if (!auth || auth !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const url = process.env.KV_REST_API_URL
  const token = process.env.KV_REST_API_TOKEN
  if (!url || !token) {
    return NextResponse.json({ error: "KV not configured" }, { status: 500 })
  }

  // Get last 50 contact logs keys
  const scanRes = await fetch(`${url}/scan/0?match=contact:log:*&count=50`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  })

  if (!scanRes.ok) {
    return NextResponse.json(
      { error: "KV scan failed" },
      { status: 502 }
    )
  }

  const scanJson = (await scanRes.json()) as unknown

  const keys =
    Array.isArray(scanJson) &&
    scanJson.length >= 2 &&
    Array.isArray(scanJson[1])
      ? (scanJson as ScanResponse)[1]
      : []

  if (!keys.length) return NextResponse.json([])

  const pipeline = keys.map((k) => ["GET", k] as const)

  const pipeRes = await fetch(`${url}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pipeline),
    cache: "no-store",
  })

  if (!pipeRes.ok) {
    return NextResponse.json(
      { error: "KV pipeline failed" },
      { status: 502 }
    )
  }

  const pipeJson = (await pipeRes.json()) as unknown
  const items: PipelineItem[] = Array.isArray(pipeJson) ? (pipeJson as PipelineItem[]) : []

  const logs = items
    .map((item) => safeJsonParse(item.result))
    .filter(isContactLog)
    .sort((a, b) => b.t.localeCompare(a.t))

  return NextResponse.json(logs)
}
