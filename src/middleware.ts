import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('payload-token')?.value

  // Intercept default Payload CMS login and bounce users to the custom portal
  if (pathname === '/admin/login') {
    const loginUrl = new URL('/login', request.url)
    // Pass original redirect query if coming from a deep admin page
    const originalRedirect = request.nextUrl.searchParams.get('redirect')
    if (originalRedirect) {
      loginUrl.searchParams.set('redirect', originalRedirect)
    }
    return NextResponse.redirect(loginUrl)
  }

  // Protected Routes: Require an active Payload session token
  const isProtectedRoute = pathname.startsWith('/dashboard')

  // Auth Routes: Accessible only when NOT logged in
  const isAuthRoute = pathname === '/login'

  // Redirect unauthenticated users trying to access protected routes to /login
  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Redirect already authenticated users away from /login straight to /dashboard
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

// Ensure the matcher covers /admin/login alongside your custom frontend paths
export const config = {
  matcher: ['/dashboard/:path*', '/login', '/admin/login'],
}
