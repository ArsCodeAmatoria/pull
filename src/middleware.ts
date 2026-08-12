import { type NextRequest, NextResponse } from "next/server";

const PUBLIC_EXACT = new Set(["/instructor/login", "/join", "/disclaimer", "/login"]);

function isPublicPath(pathname: string) {
  if (PUBLIC_EXACT.has(pathname)) return true;
  if (pathname.startsWith("/api/cca")) return true;
  if (pathname.startsWith("/api/health")) return true;
  if (pathname.startsWith("/callback")) return true;
  return false;
}

function hasCcaSession(request: NextRequest) {
  return Boolean(request.cookies.get("pull_instructor")?.value || request.cookies.get("pull_day")?.value);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/login" || pathname === "/signup") {
    const url = request.nextUrl.clone();
    url.pathname = "/instructor/login";
    url.search = "";
    return NextResponse.redirect(url);
  }

  const authed = hasCcaSession(request);

  if (pathname === "/instructor/login" && authed && request.method === "GET") {
    const next = request.nextUrl.searchParams.get("next");
    const url = request.nextUrl.clone();
    url.pathname = next?.startsWith("/") && !next.startsWith("//") ? next : "/";
    url.search = "";
    return NextResponse.redirect(url);
  }

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  if (!authed) {
    const url = request.nextUrl.clone();
    url.pathname = "/instructor/login";
    url.search = "";
    if (pathname !== "/") {
      url.searchParams.set("next", `${pathname}${request.nextUrl.search}`);
    }
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Skip Next internals + public PWA/static files. Auth middleware must not
     * run on /sw.js or the service worker gets an HTML login redirect.
     */
    "/((?!_next/static|_next/image|favicon.ico|sw\\.js|manifest\\.webmanifest|robots\\.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
