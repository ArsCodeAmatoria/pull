import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { requirePermission } from "@/lib/auth/session";
import { ExamView } from "@/features/curriculum/components/exam-view";
import { getModuleExam } from "@/services/exam.service";
import { listModulesWithProgress } from "@/services/curriculum.service";
import { getTrackQuestions } from "@/lib/tracks";

type PageProps = {
  params: Promise<{ moduleCode: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { moduleCode } = await params;
  return { title: `${moduleCode.replaceAll("_", " ")} — Exam` };
}

export default async function CurriculumModuleExamPage({ params }: PageProps) {
  const { moduleCode } = await params;
  const profile = await requirePermission("exams");
  const employeeId = profile.employeeId;
  const companyId = profile.companyId;

  if (!employeeId || !companyId) {
    notFound();
  }

  const { modules } = await listModulesWithProgress(employeeId, companyId);
  const moduleProgress = modules.find((item) => item.module.code === moduleCode);
  if (!moduleProgress) {
    notFound();
  }

  const allLessonsComplete =
    moduleProgress.totalCount > 0 &&
    moduleProgress.completedCount === moduleProgress.totalCount;

  if (!allLessonsComplete) {
    redirect(`/curriculum/${moduleCode}`);
  }

  const moduleExam = await getModuleExam(moduleCode);
  if (!moduleExam) {
    notFound();
  }

  const questionBank = getTrackQuestions("rigger-competency");

  return (
    <ExamView
      moduleCode={moduleCode}
      examId={moduleExam.exam.id}
      examTitle={moduleExam.exam.title}
      passingScore={moduleExam.exam.passingScore}
      timeLimitMin={moduleExam.exam.timeLimitMin}
      questionBank={questionBank}
    />
  );
}
