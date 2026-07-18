import { isUserRole, type UserRole, USER_ROLES } from "@/types/roles";

export type { UserRole };
export { USER_ROLES };

export const ALL_ROLES: UserRole[] = [...USER_ROLES];

export const ROLE_LABELS: Record<UserRole, string> = {
  SUPER_ADMIN: "Super Admin",
  COMPANY_ADMIN: "Company Admin",
  INSTRUCTOR: "Instructor",
  SUPERVISOR: "Supervisor",
  ASSESSOR: "Assessor",
  APPRENTICE: "Apprentice",
  STUDENT: "Student",
  OPERATOR: "Operator",
  READ_ONLY: "Read Only",
};

/** Permission keys used for Pull nav + route guards. */
export type Permission =
  | "dashboard"
  | "curriculum"
  | "lessons"
  | "exams"
  | "reports"
  | "profile"
  | "settings";

/**
 * Pull's role model collapses onto four capability groups. SUPERVISOR,
 * APPRENTICE, and OPERATOR are Proven-only roles that a shared user may
 * still carry on their Employee record — they map onto the nearest Pull
 * equivalent below instead of getting their own permission set.
 */
type PermissionGroup = "ADMIN" | "STAFF" | "LEARNER" | "READ_ONLY";

const GROUP_PERMISSIONS: Record<PermissionGroup, readonly Permission[]> = {
  ADMIN: [
    "dashboard",
    "curriculum",
    "lessons",
    "exams",
    "reports",
    "profile",
    "settings",
  ],
  STAFF: [
    "dashboard",
    "curriculum",
    "lessons",
    "exams",
    "reports",
    "profile",
    "settings",
  ],
  LEARNER: ["dashboard", "curriculum", "lessons", "exams", "profile", "settings"],
  READ_ONLY: ["dashboard", "curriculum", "lessons", "profile", "settings"],
};

const ROLE_GROUP: Record<UserRole, PermissionGroup> = {
  SUPER_ADMIN: "ADMIN",
  COMPANY_ADMIN: "ADMIN",
  INSTRUCTOR: "STAFF",
  ASSESSOR: "STAFF",
  SUPERVISOR: "STAFF", // mapped: Proven supervisors get Pull instructor-level access
  STUDENT: "LEARNER",
  APPRENTICE: "LEARNER", // mapped: Proven apprentices get Pull student-level access
  READ_ONLY: "READ_ONLY",
  OPERATOR: "READ_ONLY", // mapped: Proven operators get Pull read-only access
};

const ROLE_PERMISSIONS: Record<UserRole, readonly Permission[]> = Object.fromEntries(
  USER_ROLES.map((role) => [role, GROUP_PERMISSIONS[ROLE_GROUP[role]]]),
) as Record<UserRole, readonly Permission[]>;

/**
 * Route prefixes that require a specific permission once authenticated.
 * Paths not listed here are still auth-gated (entire site requires login)
 * but do not enforce a named permission beyond session + Pull appAccess.
 */
export const ROUTE_PERMISSIONS: { prefix: string; permission: Permission }[] = [
  { prefix: "/dashboard", permission: "dashboard" },
  { prefix: "/reports", permission: "reports" },
  { prefix: "/exams", permission: "exams" },
  { prefix: "/curriculum", permission: "curriculum" },
  { prefix: "/settings", permission: "settings" },
  { prefix: "/profile", permission: "profile" },
];

export const AUTH_ROUTES = [
  "/login",
  "/signup",
  "/forgot-password",
  "/reset-password",
  "/callback",
] as const;

/** Only auth + health are reachable without a session. */
export const PUBLIC_ROUTES = [...AUTH_ROUTES, "/api/health"] as const;

export function hasPermission(role: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role].includes(permission);
}

export function canWrite(role: UserRole): boolean {
  return role !== "READ_ONLY" && role !== "OPERATOR";
}

export function isAdminRole(role: UserRole): boolean {
  return role === "SUPER_ADMIN" || role === "COMPANY_ADMIN";
}

export function parseUserRole(value: unknown): UserRole {
  return isUserRole(value) ? value : "READ_ONLY";
}

export function isAuthPath(pathname: string): boolean {
  return AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

/** Entire product requires authentication except auth/health routes. */
export function isProtectedPath(pathname: string): boolean {
  if (pathname.startsWith("/api/health")) return false;
  return !isAuthPath(pathname);
}

export function getPermissionForPath(pathname: string): Permission | null {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  for (const route of ROUTE_PERMISSIONS) {
    if (normalized === route.prefix || normalized.startsWith(`${route.prefix}/`)) {
      return route.permission;
    }
  }

  return null;
}

export function getDefaultRouteForRole(role: UserRole): string {
  if (hasPermission(role, "dashboard")) return "/dashboard";
  return "/curriculum";
}

export function getNavPermissions(role: UserRole): readonly Permission[] {
  return ROLE_PERMISSIONS[role];
}
