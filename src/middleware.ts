import { NextResponse, type NextRequest } from "next/server"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.smartconnectcrm.eu"

// CSP modes:
// - "enforce" -> Content-Security-Policy
// - "report"  -> Content-Security-Policy-Report-Only
// - "off"     -> no CSP headers (recovery / troubleshooting)
const CSP_MODE = process.env.CSP_MODE ?? "report"

// Where the browser should send CSP violation reports:
const CSP_REPORT_ENDPOINT = "/api/csp-report"

function buildCsp() {
  // Conservative CSP compatible with Next.js App Router.
  // Tighten later using nonces/hashes once stable.
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "manifest-src 'self'",
    "upgrade-insecure-requests",
    `report-uri ${CSP_REPORT_ENDPOINT}`,
  ].join("; ")
}

export function middleware(_request: NextRequest) {
  const res = NextResponse.next()

  // -----------------------------
  // CSP (safe rollout)
  // -----------------------------
  const csp = buildCsp()
  if (CSP_MODE === "enforce") {
    res.headers.set("Content-Security-Policy", csp)
  } else if (CSP_MODE === "report") {
    res.headers.set("Content-Security-Policy-Report-Only", csp)
  }
  // CSP_MODE === "off" => no CSP headers

  // -----------------------------
  // A+ security headers
  // -----------------------------
  res.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload")
  res.headers.set("X-Frame-Options", "DENY")
  res.headers.set("X-Content-Type-Options", "nosniff")
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  res.headers.set("Cross-Origin-Opener-Policy", "same-origin")
  res.headers.set("Cross-Origin-Resource-Policy", "same-origin")
  res.headers.set(
    "Permissions-Policy",
    ["camera=()", "microphone=()", "geolocation=()", "interest-cohort=()"].join(", ")
  )

  // Reporting API (optional; complements report-uri)
  res.headers.set("Reporting-Endpoints", `csp="${SITE_URL}${CSP_REPORT_ENDPOINT}"`)
  res.headers.set(
    "Report-To",
    JSON.stringify({
      group: "csp",
      max_age: 10886400,
      endpoints: [{ url: `${SITE_URL}${CSP_REPORT_ENDPOINT}` }],
    })
  )

  return res
}

// Apply headers to NON-root pages only, and exclude Next internals + API routes.
// Important: using ".+" (not ".*") prevents matching "/" which can break Next hydration with CSP.
export const config = {
  matcher: ["/((?!api|_next|favicon.ico|sitemap.xml|robots.txt).+)"],
}
