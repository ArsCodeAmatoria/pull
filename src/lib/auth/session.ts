import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import type { Company, Employee, User } from "@/generated/prisma/client";
import { COMPANY_COOKIE } from "@/lib/auth/company-cookie";
import {
  getDefaultRouteForRole,
  getPermissionForPath,
  hasPermission,
  type Permission,
} from "@/lib/auth/permissions";
import { hasDatabaseConfig, hasSupabaseConfig } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { resolvePullAccessViaAdmin } from "@/lib/auth/pull-access";
import { tryCreateClient } from "@/lib/supabase/server";
import type { AppAccess, UserRole } from "@/types/roles";

export type CompanyMembership = {
  employeeId: string;
  companyId: string;
  companyName: string;
  companySlug: string;
  role: UserRole;
  appAccess: AppAccess;
};

/** Session shape used by Pull UI — maps User + selected Employee (Pull-eligible only). */
export type SessionProfile = {
  id: string;
  employeeId: string | null;
  authUserId: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl: string | null;
  role: UserRole;
  appAccess: AppAccess | null;
  isActive: boolean;
  companyId: string | null;
  company: Company | null;
  createdAt: Date;
  user: User;
  employee: (Employee & { company: Company }) | null;
  memberships: CompanyMembership[];
};

function toSessionProfile(
  user: User & {
    employees: (Employee & { company: Company })[];
  },
  preferredCompanyId?: string | null,
): SessionProfile {
  // Only employees granted Pull access are eligible to appear in Pull's session.
  const pullEmployees = user.employees.filter(
    (item) =>
      item.company.deletedAt === null &&
      (item.appAccess === "PULL" || item.appAccess === "BOTH"),
  );

  const preferred =
    (preferredCompanyId
      ? pullEmployees.find((item) => item.companyId === preferredCompanyId)
      : null) ?? pullEmployees[0] ?? null;

  const memberships: CompanyMembership[] = pullEmployees.map((item) => ({
    employeeId: item.id,
    companyId: item.companyId,
    companyName: item.company.name,
    companySlug: item.company.slug,
    role: item.role as UserRole,
    appAccess: item.appAccess as AppAccess,
  }));

  return {
    id: user.id,
    employeeId: preferred?.id ?? null,
    authUserId: user.authUserId,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    avatarUrl: user.avatarUrl,
    role: (preferred?.role ?? "READ_ONLY") as UserRole,
    appAccess: (preferred?.appAccess ?? null) as AppAccess | null,
    isActive: user.isActive && (!preferred || preferred.status === "ACTIVE"),
    companyId: preferred?.companyId ?? null,
    company: preferred?.company ?? null,
    createdAt: user.createdAt,
    user,
    employee: preferred,
    memberships,
  };
}

function sessionFromAdminAccess(
  access: NonNullable<Awaited<ReturnType<typeof resolvePullAccessViaAdmin>>>,
): SessionProfile {
  const company = {
    id: access.companyId,
    name: access.companyName,
    slug: access.companySlug,
    deletedAt: access.companyDeletedAt
      ? new Date(access.companyDeletedAt)
      : null,
  } as Company;

  const employee = {
    id: access.employeeId,
    userId: access.userId,
    companyId: access.companyId,
    role: access.role,
    appAccess: access.appAccess,
    status: access.status,
    company,
  } as Employee & { company: Company };

  const user = {
    id: access.userId,
    authUserId: access.authUserId,
    email: access.email,
    firstName: access.firstName,
    lastName: access.lastName,
    avatarUrl: access.avatarUrl,
    isActive: access.isActive,
    createdAt: new Date(access.createdAt),
  } as User;

  return {
    id: access.userId,
    employeeId: access.employeeId,
    authUserId: access.authUserId,
    email: access.email,
    firstName: access.firstName,
    lastName: access.lastName,
    avatarUrl: access.avatarUrl,
    role: access.role,
    appAccess: access.appAccess,
    isActive: access.isActive && access.status === "ACTIVE",
    companyId: access.companyId,
    company,
    createdAt: new Date(access.createdAt),
    user,
    employee,
    memberships: [
      {
        employeeId: access.employeeId,
        companyId: access.companyId,
        companyName: access.companyName,
        companySlug: access.companySlug,
        role: access.role,
        appAccess: access.appAccess,
      },
    ],
  };
}

export async function getAuthUser() {
  const supabase = await tryCreateClient();
  if (!supabase) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return null;
  }

  return user;
}

export async function getCurrentProfile(): Promise<SessionProfile | null> {
  const authUser = await getAuthUser();
  if (!authUser) return null;

  const cookieStore = await cookies();
  const preferredCompanyId = cookieStore.get(COMPANY_COOKIE)?.value;

  if (hasDatabaseConfig()) {
    try {
      const user = await prisma.user.findFirst({
        where: { authUserId: authUser.id, deletedAt: null },
        include: {
          employees: {
            where: { deletedAt: null },
            include: { company: true },
            orderBy: { createdAt: "asc" },
          },
        },
      });

      if (user) {
        const profile = toSessionProfile(user, preferredCompanyId);
        if (profile.employeeId) return profile;
      }
    } catch {
      // Fall through to service-role lookup.
    }
  }

  const access = await resolvePullAccessViaAdmin(authUser.id);
  if (!access) return null;
  return sessionFromAdminAccess(access);
}

export async function requireAuth(): Promise<SessionProfile> {
  if (!hasSupabaseConfig()) {
    redirect("/login?error=config");
  }

  const authUser = await getAuthUser();
  if (!authUser) {
    redirect("/login");
  }

  const profile = await getCurrentProfile();
  if (!profile || !profile.employeeId) {
    const supabase = await tryCreateClient();
    await supabase?.auth.signOut();
    redirect("/login?error=no_pull_access");
  }

  if (!profile.isActive) {
    const supabase = await tryCreateClient();
    await supabase?.auth.signOut();
    redirect("/login?error=inactive");
  }

  return profile;
}

export async function requirePermission(
  permission: Permission,
): Promise<SessionProfile> {
  const profile = await requireAuth();
  if (!hasPermission(profile.role, permission)) {
    redirect(getDefaultRouteForRole(profile.role));
  }
  return profile;
}

export async function requireRole(
  roles: UserRole | UserRole[],
): Promise<SessionProfile> {
  const profile = await requireAuth();
  const allowed = Array.isArray(roles) ? roles : [roles];
  if (!allowed.includes(profile.role)) {
    redirect(getDefaultRouteForRole(profile.role));
  }
  return profile;
}

export async function requireCompanyId(): Promise<{
  profile: SessionProfile;
  companyId: string;
}> {
  const profile = await requireAuth();

  if (!profile.companyId) {
    redirect("/dashboard?error=no_company");
  }

  return { profile, companyId: profile.companyId };
}

export async function getCompanyScope(): Promise<string | null> {
  const profile = await getCurrentProfile();
  return profile?.companyId ?? null;
}

export function assertPathAccess(role: UserRole, pathname: string): boolean {
  const permission = getPermissionForPath(pathname);
  if (!permission) return true;
  return hasPermission(role, permission);
}
