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

    // Only redirect actual page navigations — not sub-resource requests
    // (videos, images, fonts) that the landing page itself loads from this
    // same host. Without this check, every asset the page references was
    // bouncing through a redirect round-trip before loading, which is
    // exactly the kind of self-inflicted latency this host is supposed to
    // avoid. Any other path that IS a navigation is off-target for this
    // single-purpose ad host — send it to the real site instead of letting
    // full-nav pages leak through the isolated landing domain.
    if (request.headers.get("sec-fetch-dest") === "document") {
      const url = request.nextUrl.clone();
      url.protocol = "https";
      url.host = CANONICAL_HOST;
      return NextResponse.redirect(url, 308);
    }

    return NextResponse.next();
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
