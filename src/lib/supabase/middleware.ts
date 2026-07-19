import { createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";

import {
  AUTH_ROUTES,
  getDefaultRouteForRole,
  getPermissionForPath,
  hasPermission,
  parseUserRole,
} from "@/lib/auth/permissions";

function isAuthRoute(pathname: string) {
  return AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

function isPublicAsset(pathname: string) {
  return (
    pathname === "/sw.js" ||
    pathname === "/manifest.webmanifest" ||
    pathname === "/robots.txt" ||
    pathname === "/favicon.ico"
  );
}

function isOpenWithoutAuth(pathname: string) {
  return (
    isPublicAsset(pathname) ||
    pathname.startsWith("/api/health") ||
    pathname.startsWith("/callback") ||
    isAuthRoute(pathname)
  );
}

/** Preserve Supabase cookie mutations when returning a redirect. */
function redirectWithSession(url: URL, sessionResponse: NextResponse) {
  const redirectResponse = NextResponse.redirect(url);
  sessionResponse.cookies.getAll().forEach(({ name, value }) => {
    redirectResponse.cookies.set(name, value);
  });
  return redirectResponse;
}

async function resolvePullEmployeeViaServiceRole(authUserId: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return null;

  const admin = createSupabaseClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: appUser } = await admin
    .from("users")
    .select("id, is_active")
    .eq("auth_user_id", authUserId)
    .is("deleted_at", null)
    .maybeSingle();

  if (!appUser?.id) return null;

  const { data: employee } = await admin
    .from("employees")
    .select("role, status, app_access")
    .eq("user_id", appUser.id)
    .in("app_access", ["PULL", "BOTH"])
    .is("deleted_at", null)
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();

  if (!employee) return null;
  return { appUser, employee };
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const { pathname } = request.nextUrl;

  // Never run auth against static PWA/public assets — otherwise /sw.js becomes
  // a login redirect and service-worker registration breaks.
  if (isPublicAsset(pathname)) {
    return supabaseResponse;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // Without Supabase config, still force the login surface so the site
    // never serves learning content anonymously in misconfigured deploys.
    if (!isOpenWithoutAuth(pathname)) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("error", "config");
      return NextResponse.redirect(url);
    }
    return supabaseResponse;
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) => {
          const remember = request.cookies.get("pull_remember_me")?.value;
          // Keep explicit clears (maxAge: 0). Only fill maxAge when unset.
          const maxAge =
            options?.maxAge === 0
              ? 0
              : remember === "0"
                ? undefined
                : (options?.maxAge ?? 60 * 60 * 24 * 30);
          supabaseResponse.cookies.set(name, value, {
            ...options,
            maxAge,
          });
        });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (pathname.startsWith("/api/health") || pathname.startsWith("/callback")) {
    return supabaseResponse;
  }

  if (!user && !isAuthRoute(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", pathname);
    return redirectWithSession(url, supabaseResponse);
  }

  // Only redirect signed-in users away from auth pages on normal navigations.
  // Server Actions POST to the current route (e.g. touchLastLoginAction on
  // /login); redirecting those breaks the action with
  // "An unexpected response was received from the server."
  if (
    user &&
    isAuthRoute(pathname) &&
    pathname !== "/reset-password" &&
    request.method === "GET"
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return redirectWithSession(url, supabaseResponse);
  }

  if (user && !isAuthRoute(pathname)) {
    // Prefer cookie-scoped reads; fall back to service role for the same
    // auth user when RLS/pooler prevents seeing the employee row.
    let appUser: { id: string; is_active: boolean | null } | null = null;
    let employee: {
      role: string | null;
      status: string | null;
      app_access: string | null;
    } | null = null;

    const { data: scopedUser } = await supabase
      .from("users")
      .select("id, is_active")
      .eq("auth_user_id", user.id)
      .is("deleted_at", null)
      .maybeSingle();

    appUser = scopedUser;

    if (appUser?.id) {
      const { data: scopedEmployee } = await supabase
        .from("employees")
        .select("role, status, app_access")
        .eq("user_id", appUser.id)
        .in("app_access", ["PULL", "BOTH"])
        .is("deleted_at", null)
        .order("created_at", { ascending: true })
        .limit(1)
        .maybeSingle();
      employee = scopedEmployee;
    }

    if (!employee) {
      const viaAdmin = await resolvePullEmployeeViaServiceRole(user.id);
      if (viaAdmin) {
        appUser = viaAdmin.appUser;
        employee = viaAdmin.employee;
      }
    }

    const role = parseUserRole(
      employee?.role ?? user.app_metadata?.role ?? user.user_metadata?.role,
    );
    const isActive =
      appUser?.is_active !== false &&
      (!employee || employee.status === "ACTIVE");

    if (!isActive) {
      await supabase.auth.signOut();
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("error", "inactive");
      return redirectWithSession(url, supabaseResponse);
    }

    if (!employee) {
      await supabase.auth.signOut();
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("error", "no_pull_access");
      return redirectWithSession(url, supabaseResponse);
    }

    const permission = getPermissionForPath(pathname);
    if (permission && !hasPermission(role, permission)) {
      const url = request.nextUrl.clone();
      url.pathname = getDefaultRouteForRole(role);
      return redirectWithSession(url, supabaseResponse);
    }
  }

  return supabaseResponse;
}
