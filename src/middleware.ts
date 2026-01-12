import { NextResponse, type NextRequest } from "next/server"

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.smartconnectcrm.eu").replace(/\/+$/, "")

/**
 * CSP modes:
 * - off     → no CSP
 * - report  → report-only
 * - enforce → blocking CSP
 */
const CSP_MODE = (process.env.CSP_MODE ?? "off").toLowerCase()

const isProd = () => process.env.NODE_ENV === "production"

function makeNonce() {
  const bytes = new Uint8Array(16)
  crypto.getRandomValues(bytes)
  return btoa(String.fromCharCode(...bytes))
}

function buildCsp(nonce: string) {
  const reportPath = "/api/csp-report"

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
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https:`,

    `connect-src 'self' https: wss:`,
    `media-src 'self' https: blob:`,
    `worker-src 'self' blob:`,
    `manifest-src 'self'`,

    `report-to csp-endpoint`,
    `report-uri ${reportPath}`,

    `upgrade-insecure-requests`,
  ].join("; ")
}

function buildReportingHeaders() {
  const reportPath = "/api/csp-report"

  return {
    reportTo: JSON.stringify({
      group: "csp-endpoint",
      max_age: 10886400,
      endpoints: [{ url: reportPath }],
      include_subdomains: true,
    }),
    reportingEndpoints: `csp-endpoint="${reportPath}"`,
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Skip Next internals & static assets
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
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

  // Dev: prevent stale HTML
  if (!isProd()) {
    res.headers.set("Cache-Control", "no-store, max-age=0")
  }

  // Security headers
  res.headers.set("X-Content-Type-Options", "nosniff")
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  res.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=()"
  )

  if (isProd()) {
    res.headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload"
    )
  }

  if (isProd() && CSP_MODE !== "off") {
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
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
