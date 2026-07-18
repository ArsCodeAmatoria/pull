"use server";

import { revalidatePath } from "next/cache";

import { requireAuth } from "@/lib/auth/session";
import {
  markLessonCompleted,
  markLessonStarted,
} from "@/services/curriculum.service";

export async function markLessonStartedAction(
  moduleCode: string,
  lessonId: string,
) {
  const profile = await requireAuth();
  if (!profile.employeeId || !profile.companyId) {
    return { error: "No Pull-eligible company membership found." };
  }

  await markLessonStarted(profile.employeeId, profile.companyId, lessonId);
  revalidatePath(`/curriculum/${moduleCode}`);
  return { error: null };
}

export async function markLessonCompleteAction(
  moduleCode: string,
  lessonId: string,
) {
  const profile = await requireAuth();
  if (!profile.employeeId || !profile.companyId) {
    return { error: "No Pull-eligible company membership found." };
  }

  await markLessonCompleted(profile.employeeId, profile.companyId, lessonId);
  revalidatePath("/curriculum");
  revalidatePath(`/curriculum/${moduleCode}`);
  revalidatePath("/dashboard");
  return { error: null };
}
