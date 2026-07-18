import "server-only";

import { prisma } from "@/lib/prisma";
import type {
  CurriculumLesson,
  CurriculumModule,
  LessonProgressStatus,
} from "@/generated/prisma/client";

/** System-wide (companyId null) curriculum shared by every Pull company. */
export const SYSTEM_CURRICULUM_CODE = "TOWER_CRANE_RIGGER";

export type SystemCurriculum = NonNullable<
  Awaited<ReturnType<typeof getSystemCurriculum>>
>;

export type SystemCurriculumModule = SystemCurriculum["modules"][number];

export async function getSystemCurriculum() {
  return prisma.curriculum.findFirst({
    where: { code: SYSTEM_CURRICULUM_CODE, companyId: null, deletedAt: null },
    include: {
      modules: {
        where: { deletedAt: null },
        orderBy: { sortOrder: "asc" },
        include: {
          lessons: {
            where: { deletedAt: null },
            orderBy: { sortOrder: "asc" },
          },
          exams: {
            where: { deletedAt: null },
            orderBy: { sortOrder: "asc" },
            include: { exam: true },
          },
        },
      },
    },
  });
}

export async function getModuleByCode(moduleCode: string) {
  const curriculum = await getSystemCurriculum();
  if (!curriculum) return null;
  const moduleRow = curriculum.modules.find((item) => item.code === moduleCode);
  if (!moduleRow) return null;
  return { curriculum, module: moduleRow };
}

export async function getLessonByContentKey(
  moduleCode: string,
  contentKey: string,
) {
  const result = await getModuleByCode(moduleCode);
  if (!result) return null;
  const lesson = result.module.lessons.find(
    (item) => item.contentKey === contentKey,
  );
  if (!lesson) return null;
  return { curriculum: result.curriculum, module: result.module, lesson };
}

/** Ensures the employee has an enrolment in the system curriculum; creates one if missing. */
export async function ensureEnrolment(employeeId: string, companyId: string) {
  const curriculum = await getSystemCurriculum();
  if (!curriculum) {
    throw new Error(
      "System curriculum not found. Run the Pull LMS curriculum seed migration first.",
    );
  }

  const enrolment = await prisma.curriculumEnrolment.upsert({
    where: {
      curriculumId_employeeId: { curriculumId: curriculum.id, employeeId },
    },
    create: { curriculumId: curriculum.id, employeeId, companyId },
    update: {},
  });

  return { curriculum, enrolment };
}

export type LessonWithStatus = CurriculumLesson & {
  status: LessonProgressStatus;
};

export type ModuleProgress = {
  module: CurriculumModule;
  lessons: LessonWithStatus[];
  completedCount: number;
  totalCount: number;
  examCode: string | null;
  examTitle: string | null;
};

export async function listModulesWithProgress(
  employeeId: string,
  companyId: string,
) {
  const { curriculum, enrolment } = await ensureEnrolment(
    employeeId,
    companyId,
  );

  const progressRows = await prisma.lessonProgress.findMany({
    where: { enrolmentId: enrolment.id, deletedAt: null },
  });
  const statusByLessonId = new Map(
    progressRows.map((row) => [row.lessonId, row.status]),
  );

  const modules: ModuleProgress[] = curriculum.modules.map((moduleRow) => {
    const lessons: LessonWithStatus[] = moduleRow.lessons.map((lesson) => ({
      ...lesson,
      status: statusByLessonId.get(lesson.id) ?? "NOT_STARTED",
    }));

    return {
      module: moduleRow,
      lessons,
      completedCount: lessons.filter((item) => item.status === "COMPLETED")
        .length,
      totalCount: lessons.length,
      examCode: moduleRow.exams[0]?.exam.code ?? null,
      examTitle: moduleRow.exams[0]?.exam.title ?? null,
    };
  });

  return { curriculum, enrolment, modules };
}

export async function markLessonStarted(
  employeeId: string,
  companyId: string,
  lessonId: string,
) {
  const { enrolment } = await ensureEnrolment(employeeId, companyId);

  const existing = await prisma.lessonProgress.findUnique({
    where: { enrolmentId_lessonId: { enrolmentId: enrolment.id, lessonId } },
  });

  if (existing) {
    if (existing.status === "NOT_STARTED") {
      await prisma.lessonProgress.update({
        where: { id: existing.id },
        data: {
          status: "IN_PROGRESS",
          startedAt: existing.startedAt ?? new Date(),
        },
      });
    }
    return;
  }

  await prisma.lessonProgress.create({
    data: {
      enrolmentId: enrolment.id,
      lessonId,
      status: "IN_PROGRESS",
      startedAt: new Date(),
    },
  });
}

export async function markLessonCompleted(
  employeeId: string,
  companyId: string,
  lessonId: string,
) {
  const { curriculum, enrolment } = await ensureEnrolment(
    employeeId,
    companyId,
  );

  await prisma.lessonProgress.upsert({
    where: { enrolmentId_lessonId: { enrolmentId: enrolment.id, lessonId } },
    create: {
      enrolmentId: enrolment.id,
      lessonId,
      status: "COMPLETED",
      startedAt: new Date(),
      completedAt: new Date(),
    },
    update: { status: "COMPLETED", completedAt: new Date() },
  });

  const allLessonIds = curriculum.modules.flatMap((moduleRow) =>
    moduleRow.lessons.map((lesson) => lesson.id),
  );

  if (allLessonIds.length === 0) return;

  const completedCount = await prisma.lessonProgress.count({
    where: {
      enrolmentId: enrolment.id,
      status: "COMPLETED",
      lessonId: { in: allLessonIds },
      deletedAt: null,
    },
  });

  if (completedCount >= allLessonIds.length) {
    await prisma.curriculumEnrolment.update({
      where: { id: enrolment.id },
      data: { completedAt: new Date() },
    });
  } else if (enrolment.completedAt) {
    await prisma.curriculumEnrolment.update({
      where: { id: enrolment.id },
      data: { completedAt: null },
    });
  }
}
