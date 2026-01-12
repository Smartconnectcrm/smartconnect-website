import { NextResponse, type NextRequest } from "next/server"

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.smartconnectcrm.eu").replace(/\/+$/, "")

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

    `frame-ancestors 'self'`,
    `form-action 'self'`,
    `frame-src 'self' https:`,

    `img-src 'self' data: blob: https:`,
    `font-src 'self' data: https:`,

    `script-src-attr 'none'`,
    `style-src-attr 'none'`,

    `style-src 'self' 'nonce-${nonce}' https:`,
    `script-src 'self' 'nonce-${nonce}' https:`,

    `connect-src 'self' https: wss:`,

    `media-src 'self' https: blob:`,
    `worker-src 'self' blob:`,
    `manifest-src 'self'`,

    `report-to csp-endpoint`,
    `report-uri ${reportPath}`,

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

  // Skip Next internals + obvious static files + Vercel internals
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/_vercel/") ||
    pathname.startsWith("/__nextjs_original-stack-frame") ||
    pathname.startsWith("/__nextjs_error_feedback") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/site.webmanifest"
  ) {
    return NextResponse.next()
  }

  const res = NextResponse.next()

  const nonce = makeNonce()
  res.headers.set("x-nonce", nonce)

  if (!isProd() && isHtmlRequest(req)) {
    res.headers.set("Cache-Control", "no-store, max-age=0")
  }

  res.headers.set("X-Content-Type-Options", "nosniff")
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=(), usb=()")

  if (isProd()) {
    res.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload")
  }

  const enableCsp = isProd() && CSP_MODE !== "off"
  if (enableCsp) {
    const csp = buildCsp(nonce)
    const { reportTo, reportingEndpoints } = buildReportingHeaders()
    res.headers.set("Report-To", reportTo)
    res.headers.set("Reporting-Endpoints", reportingEndpoints)

    if (CSP_MODE === "report") res.headers.set("Content-Security-Policy-Report-Only", csp)
    else res.headers.set("Content-Security-Policy", csp)
  }

  void SITE_URL
  return res
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|_vercel|favicon.ico|robots.txt|sitemap.xml|site.webmanifest).*)"],
}
