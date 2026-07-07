import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LANDING_HOST_PREFIX = "landing.";
const LANDING_SEGMENT = "/landing";
const CANONICAL_HOST = "www.everlastingrenovationsinc.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host.startsWith(LANDING_HOST_PREFIX)) {
    const { pathname } = request.nextUrl;

    // Root path on the landing host serves the dedicated landing route.
    if (pathname === "/") {
      const url = request.nextUrl.clone();
      url.pathname = LANDING_SEGMENT;
      return NextResponse.rewrite(url);
    }

    // Any other path is off-target for this single-purpose ad host — send
    // it to the real site instead of letting full-nav pages leak through
    // the isolated landing domain.
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
