import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('payload-token')?.value

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

// Limit middleware execution strictly to custom frontend routes
export const config = {
  matcher: ['/dashboard/:path*', '/login'],
}
