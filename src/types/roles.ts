/**
 * Application roles — kept in a Prisma-free module so middleware
 * and client components never import the Prisma runtime.
 * Values must stay in sync with `enum UserRole` in prisma/schema.prisma.
 *
 * Pull and Proven share this schema. ASSESSOR and STUDENT were added for
 * Pull LMS; SUPERVISOR/APPRENTICE/OPERATOR are Proven-only roles that a
 * shared user may still hold on the Employee record.
 */
export const USER_ROLES = [
  "SUPER_ADMIN",
  "COMPANY_ADMIN",
  "INSTRUCTOR",
  "SUPERVISOR",
  "ASSESSOR",
  "APPRENTICE",
  "STUDENT",
  "OPERATOR",
  "READ_ONLY",
] as const;

export type UserRole = (typeof USER_ROLES)[number];

export function isUserRole(value: unknown): value is UserRole {
  return (
    typeof value === "string" &&
    (USER_ROLES as readonly string[]).includes(value)
  );
}

/**
 * App-level product access, mirrors `enum AppAccess` in prisma/schema.prisma.
 * An Employee's appAccess must be PULL or BOTH to use Pull.
 */
export const APP_ACCESS_VALUES = ["PULL", "PROVEN", "BOTH"] as const;

export type AppAccess = (typeof APP_ACCESS_VALUES)[number];

export function isAppAccess(value: unknown): value is AppAccess {
  return (
    typeof value === "string" &&
    (APP_ACCESS_VALUES as readonly string[]).includes(value)
  );
}

export function hasPullAccess(appAccess: AppAccess | null | undefined): boolean {
  return appAccess === "PULL" || appAccess === "BOTH";
}
