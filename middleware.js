import { NextResponse } from 'next/server'

export function middleware(request) {
  if (request.nextUrl.pathname === '/test-isr-redirect') {
    return NextResponse.redirect(new URL('/isr', request.url))
  }
  if (request.nextUrl.pathname === '/take-me-home') {
    return NextResponse.rewrite(new URL('/', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/isr/:path*', '/home/:path*'],
}
