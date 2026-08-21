import { type NextRequest, NextResponse } from "next/server";

function shouldRedirectHome(pathname: string) {
  if (
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password" ||
    pathname === "/reset-password" ||
    pathname === "/join" ||
    pathname === "/callback" ||
    pathname === "/disclaimer" ||
    pathname === "/certification"
  ) {
    return true;
  }

  return (
    pathname.startsWith("/instructor") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/reports") ||
    pathname.startsWith("/curriculum")
  );
}

export function proxy(request: NextRequest) {
  if (shouldRedirectHome(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sw\\.js|manifest\\.webmanifest|robots\\.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
