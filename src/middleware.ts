import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Content Security Policy (conservative, enterprise-safe)
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ")
  )

  // Enforce HTTPS (HSTS)
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  )

  // Prevent MIME sniffing
  response.headers.set("X-Content-Type-Options", "nosniff")

  // Referrer policy
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  // Disable unnecessary browser features
  response.headers.set(
    "Permissions-Policy",
    [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "interest-cohort=()",
    ].join(", ")
  )

  return response
}

export const config = {
  matcher: "/:path*",
}
