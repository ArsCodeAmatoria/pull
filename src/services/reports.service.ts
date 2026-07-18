import "server-only";

import { prisma } from "@/lib/prisma";
import { getSystemCurriculum } from "@/services/curriculum.service";

export type LearnerProgressRow = {
  employeeId: string;
  name: string;
  email: string;
  completedLessons: number;
  totalLessons: number;
  percentComplete: number;
  examsPassed: number;
  examsAttempted: number;
  lastActivityAt: Date | null;
};

export async function getCompanyProgressReport(
  companyId: string,
): Promise<LearnerProgressRow[]> {
  const curriculum = await getSystemCurriculum();
  if (!curriculum) return [];

  const lessonIds = new Set(
    curriculum.modules.flatMap((module) =>
      module.lessons.map((lesson) => lesson.id),
    ),
  );
  const examIds = curriculum.modules.flatMap((module) =>
    module.exams.map((moduleExam) => moduleExam.examId),
  );

  const employees = await prisma.employee.findMany({
    where: {
      companyId,
      deletedAt: null,
      appAccess: { in: ["PULL", "BOTH"] },
    },
    include: {
      user: true,
      curriculumEnrolments: {
        where: { curriculumId: curriculum.id, deletedAt: null },
        include: { progress: { where: { deletedAt: null } } },
      },
      examResults: {
        where: { examId: { in: examIds }, deletedAt: null },
      },
    },
    orderBy: [{ user: { lastName: "asc" } }, { user: { firstName: "asc" } }],
  });

  const totalLessons = lessonIds.size;

  return employees.map((employee) => {
    const enrolment = employee.curriculumEnrolments[0];
    const completedLessons = enrolment
      ? enrolment.progress.filter(
          (row) => row.status === "COMPLETED" && lessonIds.has(row.lessonId),
        ).length
      : 0;

    const examResults = employee.examResults;
    const passedExamIds = new Set(
      examResults.filter((row) => row.passed).map((row) => row.examId),
    );
    const attemptedExamIds = new Set(examResults.map((row) => row.examId));

    const activityDates = [
      ...(enrolment?.progress.map((row) => row.completedAt ?? row.startedAt) ??
        []),
      ...examResults.map((row) => row.submittedAt ?? row.startedAt),
    ].filter((value): value is Date => Boolean(value));

    return {
      employeeId: employee.id,
      name: `${employee.user.firstName} ${employee.user.lastName}`.trim(),
      email: employee.user.email,
      completedLessons,
      totalLessons,
      percentComplete:
        totalLessons > 0
          ? Math.round((completedLessons / totalLessons) * 100)
          : 0,
      examsPassed: passedExamIds.size,
      examsAttempted: attemptedExamIds.size,
      lastActivityAt: activityDates.length
        ? new Date(Math.max(...activityDates.map((d) => d.getTime())))
        : null,
    };
  });
}

export async function getLearnerProgressRow(
  employeeId: string,
): Promise<LearnerProgressRow | null> {
  const employee = await prisma.employee.findFirst({
    where: { id: employeeId, deletedAt: null },
    select: { companyId: true },
  });
  if (!employee) return null;

  const rows = await getCompanyProgressReport(employee.companyId);
  return rows.find((row) => row.employeeId === employeeId) ?? null;
}

function csvEscape(value: unknown): string {
  const str = String(value ?? "");
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export function progressReportToCsv(rows: LearnerProgressRow[]): string {
  const header = [
    "Name",
    "Email",
    "Completed Lessons",
    "Total Lessons",
    "Percent Complete",
    "Exams Passed",
    "Exams Attempted",
    "Last Activity",
  ];

  const lines = rows.map((row) =>
    [
      row.name,
      row.email,
      row.completedLessons,
      row.totalLessons,
      `${row.percentComplete}%`,
      row.examsPassed,
      row.examsAttempted,
      row.lastActivityAt ? row.lastActivityAt.toISOString() : "",
    ]
      .map(csvEscape)
      .join(","),
  );

  return [header.join(","), ...lines].join("\n");
}
