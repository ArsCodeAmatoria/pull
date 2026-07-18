import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { PageShell } from "@/components/page-shell";
import type { Locale } from "@/i18n/config";
import { getLocalizedLesson } from "@/lib/lessons-i18n";
import { getLocale } from "@/lib/get-locale";
import { getLesson } from "@/lib/lessons";
import { MarkCompleteButton } from "@/features/curriculum/components/mark-complete-button";
import { requirePermission } from "@/lib/auth/session";
import { markLessonStartedAction } from "@/app/actions/curriculum-actions";
import {
  getLessonByContentKey,
  listModulesWithProgress,
} from "@/services/curriculum.service";

type PageProps = {
  params: Promise<{ moduleCode: string; contentKey: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { contentKey } = await params;
  const lesson = getLesson(contentKey);
  return { title: lesson ? lesson.title : "Lesson" };
}

export default async function CurriculumLessonPage({ params }: PageProps) {
  const { moduleCode, contentKey } = await params;
  const profile = await requirePermission("curriculum");
  const employeeId = profile.employeeId;
  const companyId = profile.companyId;

  if (!employeeId || !companyId) {
    notFound();
  }

  const record = await getLessonByContentKey(moduleCode, contentKey);
  const lesson = getLesson(contentKey);
  if (!record || !lesson) {
    notFound();
  }

  const progress = await listModulesWithProgress(employeeId, companyId);
  const moduleProgress = progress.modules.find((item) => item.module.code === moduleCode);
  const lessonStatus =
    moduleProgress?.lessons.find((item) => item.id === record.lesson.id)?.status ??
    "NOT_STARTED";

  await markLessonStartedAction(moduleCode, record.lesson.id);

  const locale = await getLocale();
  const localized = getLocalizedLesson(lesson, locale);
  const Content = lesson.component;

  return (
    <PageShell className="py-8 lg:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-lg text-muted-foreground lg:text-xl">
        <Link href="/curriculum">Curriculum</Link> /{" "}
        <Link href={`/curriculum/${moduleCode}`}>{record.module.title}</Link> /{" "}
        <span className="text-foreground">{localized.badge}</span>
      </nav>

      <header className="space-y-4 pb-8 lg:max-w-4xl">
        <Badge>{localized.badge}</Badge>
        <h1>{localized.title}</h1>
      </header>

      <div className="min-w-0 overflow-x-auto">
        <Content locale={locale as Locale} />
      </div>

      <div className="mt-12 flex flex-col items-start gap-4 border-t border-foreground/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href={`/curriculum/${moduleCode}`}
          className="flex items-center gap-2 font-display text-lg font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to module
        </Link>
        <MarkCompleteButton
          moduleCode={moduleCode}
          lessonId={record.lesson.id}
          initiallyComplete={lessonStatus === "COMPLETED"}
        />
      </div>
    </PageShell>
  );
}
