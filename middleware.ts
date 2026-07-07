import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LANDING_HOST_PREFIX = "landing.";
const LANDING_SEGMENT = "/landing";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host.startsWith(LANDING_HOST_PREFIX)) {
    const { pathname } = request.nextUrl;

    // Root path on the landing host serves the dedicated landing route.
    // Any other path is passed through unmodified so the landing host can
    // still reach shared routes (e.g. /api/*, /get-a-quote) without being
    // forced under /landing.
    if (pathname === "/") {
      const url = request.nextUrl.clone();
      url.pathname = LANDING_SEGMENT;
      return NextResponse.rewrite(url);
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
