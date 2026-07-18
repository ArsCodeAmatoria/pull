import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileCheck2 } from "lucide-react";

import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { requirePermission } from "@/lib/auth/session";
import { LessonList } from "@/features/curriculum/components/lesson-list";
import { listModulesWithProgress } from "@/services/curriculum.service";

type PageProps = {
  params: Promise<{ moduleCode: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { moduleCode } = await params;
  return { title: moduleCode.replaceAll("_", " ") };
}

export default async function CurriculumModulePage({ params }: PageProps) {
  const { moduleCode } = await params;
  const profile = await requirePermission("curriculum");

  if (!profile.employeeId || !profile.companyId) {
    notFound();
  }

  const { modules } = await listModulesWithProgress(
    profile.employeeId,
    profile.companyId,
  );

  const moduleProgress = modules.find((item) => item.module.code === moduleCode);
  if (!moduleProgress) {
    notFound();
  }

  const { module, lessons, completedCount, totalCount, examTitle } = moduleProgress;
  const allLessonsComplete = totalCount > 0 && completedCount === totalCount;

  return (
    <PageShell className="py-10 lg:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 text-lg text-muted-foreground">
        <Link href="/curriculum">Curriculum</Link> /{" "}
        <span className="text-foreground">{module.title}</span>
      </nav>

      <div className="space-y-4 lg:max-w-3xl">
        <span className="category-label">
          {completedCount} / {totalCount} lessons complete
        </span>
        <h1>{module.title}</h1>
        {module.description ? (
          <p className="text-xl text-muted-foreground lg:text-2xl">{module.description}</p>
        ) : null}
      </div>

      <div className="mt-10">
        <h2 className="mb-4">Lessons</h2>
        <LessonList moduleCode={module.code} lessons={lessons} />
      </div>

      {examTitle ? (
        <div className="mt-10 flex flex-col items-start gap-4 bg-foreground/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <FileCheck2 className="h-8 w-8 shrink-0" />
            <div>
              <p className="text-lg font-bold">{examTitle}</p>
              <p className="text-base text-muted-foreground">
                {allLessonsComplete
                  ? "You've finished every lesson — take the official exam."
                  : "Complete all lessons in this module before taking the official exam."}
              </p>
            </div>
          </div>
          {allLessonsComplete ? (
            <Button asChild size="lg">
              <Link href={`/curriculum/${module.code}/exam`}>Start exam</Link>
            </Button>
          ) : (
            <Button size="lg" disabled>
              Start exam
            </Button>
          )}
        </div>
      ) : null}

      <div className="mt-10">
        <Button asChild variant="secondary" size="lg">
          <Link href="/curriculum">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to curriculum
          </Link>
        </Button>
      </div>
    </PageShell>
  );
}
