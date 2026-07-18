"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { COMPANY_COOKIE } from "@/lib/auth/company-cookie";
import { requireAuth } from "@/lib/auth/session";
import { hasDatabaseConfig } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import {
  signupSchema,
  type SignupInput,
} from "@/lib/validations";
import type { UserRole } from "@/types/roles";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

/**
 * Creates a company workspace and signs the founder in as COMPANY_ADMIN
 * with appAccess BOTH — so they can also be added to Proven later without
 * a second signup. Solo learners with no organization can still use this
 * flow; their "company" is just their own name.
 */
export async function signupCompanyAction(input: SignupInput) {
  const parsed = signupSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  if (!hasDatabaseConfig()) {
    return { error: "Database is not configured." };
  }

  const data = parsed.data;
  const supabase = await createClient();
  const admin = createAdminClient();

  const baseSlug = slugify(data.companyName);
  let slug = baseSlug || "learner";
  let attempt = 0;

  while (
    await prisma.company.findFirst({
      where: { slug, deletedAt: null },
    })
  ) {
    attempt += 1;
    slug = `${baseSlug}-${attempt}`;
  }

  const company = await prisma.company.create({
    data: {
      name: data.companyName,
      slug,
    },
  });

  const role: UserRole = "COMPANY_ADMIN";

  const { data: authData, error: authError } = await admin.auth.admin.createUser(
    {
      email: data.email,
      password: data.password,
      email_confirm: true,
      user_metadata: {
        first_name: data.firstName,
        last_name: data.lastName,
        role,
        company_id: company.id,
      },
      app_metadata: {
        role,
        company_id: company.id,
      },
    },
  );

  if (authError || !authData.user) {
    await prisma.company.update({
      where: { id: company.id },
      data: { deletedAt: new Date() },
    });
    return { error: authError?.message ?? "Unable to create account" };
  }

  const user = await prisma.user.upsert({
    where: { authUserId: authData.user.id },
    create: {
      authUserId: authData.user.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      employees: {
        create: {
          companyId: company.id,
          role,
          appAccess: "BOTH",
          status: "ACTIVE",
          title: "Company Admin",
        },
      },
    },
    update: {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      isActive: true,
      deletedAt: null,
    },
  });

  const existingEmployee = await prisma.employee.findFirst({
    where: {
      userId: user.id,
      companyId: company.id,
      deletedAt: null,
    },
  });

  if (!existingEmployee) {
    await prisma.employee.create({
      data: {
        userId: user.id,
        companyId: company.id,
        role,
        appAccess: "BOTH",
        status: "ACTIVE",
        title: "Company Admin",
      },
    });
  }

  const { error: signInError } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (signInError) {
    return {
      error:
        "Account created, but automatic sign-in failed. Please sign in manually.",
    };
  }

  redirect("/dashboard");
}

export async function touchLastLoginAction() {
  const authUser = await (await createClient()).auth.getUser();
  const authUserId = authUser.data.user?.id;
  if (!authUserId) return;
  await prisma.user
    .update({
      where: { authUserId },
      data: { lastLoginAt: new Date() },
    })
    .catch(() => undefined);
}

export async function switchCompanyAction(companyId: string) {
  const profile = await requireAuth();
  const allowed = profile.memberships.some(
    (membership) => membership.companyId === companyId,
  );

  if (!allowed && profile.role !== "SUPER_ADMIN") {
    return { error: "You do not have access to that company." };
  }

  const cookieStore = await cookies();
  cookieStore.set(COMPANY_COOKIE, companyId, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });

  revalidatePath("/", "layout");
  return { error: null };
}
