"use server";

import { revalidatePath } from "next/cache";

import { requireAuth } from "@/lib/auth/session";
import { startAttempt, submitAttempt } from "@/services/exam.service";

export async function startExamAttemptAction(examId: string) {
  const profile = await requireAuth();
  if (!profile.employeeId) {
    return { error: "No Pull-eligible company membership found.", resultId: null };
  }

  const result = await startAttempt(profile.employeeId, examId);
  return { error: null, resultId: result.id };
}

export async function submitExamAttemptAction(input: {
  moduleCode: string;
  resultId: string;
  answers: Record<string, string>;
  durationSeconds: number;
  passingScore: number;
  clientScore: { score: number; maxScore: number };
}) {
  const profile = await requireAuth();
  if (!profile.employeeId) {
    return { error: "No Pull-eligible company membership found.", result: null };
  }

  try {
    const result = await submitAttempt({
      resultId: input.resultId,
      employeeId: profile.employeeId,
      answers: input.answers,
      durationSeconds: input.durationSeconds,
      passingScore: input.passingScore,
      clientScore: input.clientScore,
    });

    revalidatePath(`/curriculum/${input.moduleCode}`);
    revalidatePath("/dashboard");
    revalidatePath("/reports");

    return {
      error: null,
      result: {
        id: result.id,
        score: result.score,
        maxScore: result.maxScore,
        passed: result.passed,
      },
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Unable to submit exam.",
      result: null,
    };
  }
}
