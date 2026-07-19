import "server-only";

import { createAdminClient } from "@/lib/supabase/admin";
import { parseUserRole } from "@/lib/auth/permissions";
import type { AppAccess, UserRole } from "@/types/roles";

export type PullAccessRecord = {
  userId: string;
  authUserId: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
  isActive: boolean;
  createdAt: string;
  employeeId: string;
  companyId: string;
  role: UserRole;
  appAccess: AppAccess;
  status: string;
  companyName: string;
  companySlug: string;
  companyDeletedAt: string | null;
};

/**
 * Resolve Pull-eligible employment via the service role.
 * Used when cookie-scoped PostgREST/Prisma lookups fail (RLS/pooler issues)
 * but the auth user is already verified.
 */
export async function resolvePullAccessViaAdmin(
  authUserId: string,
): Promise<PullAccessRecord | null> {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) return null;

  try {
    const admin = createAdminClient();

    const { data: appUser } = await admin
      .from("users")
      .select(
        "id, auth_user_id, email, first_name, last_name, avatar_url, is_active, created_at",
      )
      .eq("auth_user_id", authUserId)
      .is("deleted_at", null)
      .maybeSingle();

    if (!appUser?.id) return null;

    const { data: employee } = await admin
      .from("employees")
      .select("id, role, status, app_access, company_id")
      .eq("user_id", appUser.id)
      .is("deleted_at", null)
      .in("app_access", ["PULL", "BOTH"])
      .order("created_at", { ascending: true })
      .limit(1)
      .maybeSingle();

    if (!employee?.id || !employee.company_id) return null;

    const appAccess = employee.app_access as AppAccess;
    if (appAccess !== "PULL" && appAccess !== "BOTH") return null;

    const { data: company } = await admin
      .from("companies")
      .select("id, name, slug, deleted_at")
      .eq("id", employee.company_id)
      .maybeSingle();

    if (!company || company.deleted_at) return null;

    return {
      userId: appUser.id,
      authUserId: appUser.auth_user_id,
      email: appUser.email,
      firstName: appUser.first_name ?? "",
      lastName: appUser.last_name ?? "",
      avatarUrl: appUser.avatar_url ?? null,
      isActive: appUser.is_active !== false,
      createdAt: appUser.created_at,
      employeeId: employee.id,
      companyId: employee.company_id,
      role: parseUserRole(employee.role),
      appAccess,
      status: employee.status,
      companyName: company.name,
      companySlug: company.slug,
      companyDeletedAt: company.deleted_at,
    };
  } catch {
    return null;
  }
}
