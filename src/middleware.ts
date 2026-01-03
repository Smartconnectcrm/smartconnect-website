import { NextResponse, type NextRequest } from "next/server"

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.smartconnectcrm.eu").replace(
  /\/+$/,
  ""
)

/**
 * CSP modes:
 * - "off"     -> no CSP headers at all
 * - "report"  -> Content-Security-Policy-Report-Only
 * - "enforce" -> Content-Security-Policy
 */
const CSP_MODE = (process.env.CSP_MODE ?? "off").toLowerCase()

function isProd() {
  return process.env.NODE_ENV === "production"
}

function makeNonce() {
  const bytes = new Uint8Array(16)
  crypto.getRandomValues(bytes)
  let str = ""
  bytes.forEach((b) => (str += String.fromCharCode(b)))
  return btoa(str)
}

function buildCsp(nonce: string) {
  const reportPath = "/api/csp-report"
  const isReport = CSP_MODE === "report"

  return [
    `default-src 'self'`,
    `base-uri 'self'`,
    `object-src 'none'`,
    `frame-ancestors 'none'`,
    `form-action 'self'`,

    // If you embed external iframes later, tighten per need
    `frame-src 'self' https:`,

    `img-src 'self' data: blob: https:`,
    `font-src 'self' data: https:`,

    // Tighten inline attributes (prevents onClick="..." and style="...")
    `script-src-attr 'none'`,
    `style-src-attr 'none'`,

    // Nonce-based styles (no unsafe-inline)
    `style-src 'self' 'nonce-${nonce}' https:`,

    // Strong scripts with nonce + strict-dynamic
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https:`,

    // WebSockets allowed
    `connect-src 'self' https: wss:`,

    `media-src 'self' https: blob:`,
    `worker-src 'self' blob:`,
    `manifest-src 'self'`,

    // Reporting (modern + legacy)
    `report-to csp-endpoint`,
    `report-uri ${reportPath}`,

    // Helpful for tuning during report-only
    ...(isReport ? [`report-sample`] : []),

    `upgrade-insecure-requests`,
  ].join("; ")
}

function isHtmlRequest(req: NextRequest) {
  const accept = req.headers.get("accept") || ""
  return accept.includes("text/html")
}

function buildReportingHeaders() {
  const reportPath = "/api/csp-report"

  const reportTo = JSON.stringify({
    group: "csp-endpoint",
    max_age: 10886400,
    endpoints: [{ url: reportPath }],
    include_subdomains: true,
  })

  const reportingEndpoints = `csp-endpoint="${reportPath}"`

  return { reportTo, reportingEndpoints }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Hard-skip Next internals + dev tooling routes
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/__nextjs_original-stack-frame") ||
    pathname.startsWith("/__nextjs_error_feedback") ||
    pathname.startsWith("/favicon") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/site.webmanifest"
  ) {
    return NextResponse.next()
  }

  const res = NextResponse.next()

  // Nonce header for layout/provider
  const nonce = makeNonce()
  res.headers.set("x-nonce", nonce)

  // ✅ Avoid killing caching in production unless you intentionally want it.
  // In dev, no-store helps avoid stale HTML; in prod, let Vercel handle caching.
  if (!isProd() && isHtmlRequest(req)) {
    res.headers.set("Cache-Control", "no-store, max-age=0")
  }

  // Base security headers
  res.headers.set("X-Frame-Options", "DENY")
  res.headers.set("X-Content-Type-Options", "nosniff")
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=(), usb=()")

  if (isProd()) {
    res.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload")
  }

  // CSP only in production and only if enabled
  const enableCsp = isProd() && CSP_MODE !== "off"
  if (enableCsp) {
    const csp = buildCsp(nonce)

    const { reportTo, reportingEndpoints } = buildReportingHeaders()
    res.headers.set("Report-To", reportTo)
    res.headers.set("Reporting-Endpoints", reportingEndpoints)

    if (CSP_MODE === "report") {
      res.headers.set("Content-Security-Policy-Report-Only", csp)
    } else {
      res.headers.set("Content-Security-Policy", csp)
    }
  }

  void SITE_URL
  return res
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|_next/webpack-hmr|favicon.ico).*)"],
}
