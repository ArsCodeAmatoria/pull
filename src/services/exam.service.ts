import "server-only";

import { prisma } from "@/lib/prisma";

/** Official written exam for a curriculum module, with any DB-authored questions. */
export async function getModuleExam(moduleCode: string) {
  const moduleExam = await prisma.curriculumModuleExam.findFirst({
    where: { module: { code: moduleCode, deletedAt: null }, deletedAt: null },
    orderBy: { sortOrder: "asc" },
    include: {
      module: true,
      exam: {
        include: {
          questions: {
            where: { deletedAt: null },
            orderBy: { sortOrder: "asc" },
          },
        },
      },
    },
  });

  return moduleExam;
}

export async function listAttempts(employeeId: string, examId: string) {
  return prisma.examResult.findMany({
    where: { employeeId, examId, deletedAt: null },
    orderBy: { startedAt: "desc" },
  });
}

export async function getBestAttempt(employeeId: string, examId: string) {
  const attempts = await prisma.examResult.findMany({
    where: {
      employeeId,
      examId,
      deletedAt: null,
      status: { in: ["SUBMITTED", "GRADED"] },
    },
    orderBy: { score: "desc" },
    take: 1,
  });
  return attempts[0] ?? null;
}

export async function startAttempt(employeeId: string, examId: string) {
  return prisma.examResult.create({
    data: {
      employeeId,
      examId,
      status: "IN_PROGRESS",
      startedAt: new Date(),
    },
  });
}

export type SubmitAttemptInput = {
  resultId: string;
  employeeId: string;
  answers: Record<string, string>;
  durationSeconds: number;
  passingScore: number;
  /**
   * Score computed client-side against src/data/questions.json. Used when the
   * exam has no ExamQuestion rows yet (Pull's current default — see docs).
   */
  clientScore?: { score: number; maxScore: number };
};

export async function submitAttempt(input: SubmitAttemptInput) {
  const result = await prisma.examResult.findFirst({
    where: { id: input.resultId, employeeId: input.employeeId, deletedAt: null },
    include: { exam: { include: { questions: { where: { deletedAt: null } } } } },
  });

  if (!result) {
    throw new Error("Exam attempt not found.");
  }

  let score: number;
  let maxScore: number;

  if (result.exam.questions.length > 0) {
    maxScore = result.exam.questions.reduce((sum, q) => sum + q.points, 0);
    score = result.exam.questions.reduce((sum, question) => {
      const selectedIndex = Number(input.answers[question.id]);
      return selectedIndex === question.correctIndex
        ? sum + question.points
        : sum;
    }, 0);
  } else if (input.clientScore) {
    score = input.clientScore.score;
    maxScore = input.clientScore.maxScore;
  } else {
    throw new Error(
      "This exam has no questions loaded yet and no client-computed score was provided.",
    );
  }

  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  const passed = percentage >= input.passingScore;

  return prisma.examResult.update({
    where: { id: result.id },
    data: {
      status: "GRADED",
      score,
      maxScore,
      passed,
      answers: input.answers,
      durationSeconds: input.durationSeconds,
      submittedAt: new Date(),
      gradedAt: new Date(),
    },
  });
}
