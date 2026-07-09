"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { SiteDisclaimer } from "@/components/site-disclaimer";
import { CheckCircle2, ClipboardList, HardHat, Users } from "lucide-react";
import { useTranslations } from "@/i18n/locale-context";
import { DEFAULT_TRACK, practiceTestHref, slidesIndexHref } from "@/lib/tracks";

export function CertificationPageContent() {
  const { t } = useTranslations();

  const evaluationSteps = [
    {
      icon: ClipboardList,
      title: t("certification.writtenExam"),
      description: t("certification.writtenExamText"),
    },
    {
      icon: HardHat,
      title: t("certification.practicalEval"),
      description: t("certification.practicalEvalText"),
    },
    {
      icon: Users,
      title: t("certification.evaluatorReview"),
      description: t("certification.evaluatorReviewText"),
    },
    {
      icon: CheckCircle2,
      title: t("certification.certDecision"),
      description: t("certification.certDecisionText"),
    },
  ];

  return (
    <PageShell className="py-8 lg:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-lg text-muted-foreground">
        <Link href="/">{t("common.home")}</Link> / <span className="text-foreground">{t("certification.breadcrumb")}</span>
      </nav>

      <header className="space-y-4 pb-8">
        <Badge>{t("certification.badge")}</Badge>
        <h1>{t("certification.title")}</h1>
        <p className="text-lg text-muted-foreground">{t("certification.subtitle")}</p>
      </header>

      <SiteDisclaimer className="max-w-3xl pb-4" />

      <div className="mt-4 space-y-3 bg-foreground/5 p-5">
        <p className="text-lg font-semibold">{t("certification.openNoteTitle")}</p>
        <p className="text-muted-foreground">{t("certification.openNote")}</p>
      </div>

      <div className="mt-4 space-y-3 border border-foreground/10 p-5">
        <p className="text-lg font-semibold">{t("certification.qualifiedCertifierTitle")}</p>
        <p className="text-muted-foreground">{t("certification.qualifiedCertifierNote")}</p>
      </div>

      <div className="mt-4 space-y-3 bg-foreground/5 p-5">
        <p className="text-lg font-semibold">{t("certification.practiceNoteTitle")}</p>
        <p className="text-muted-foreground">{t("certification.practiceNote")}</p>
      </div>

      <section className="space-y-8 py-10">
        <h2>{t("certification.evaluationProcess")}</h2>
        {evaluationSteps.map(({ icon: Icon, title, description }) => (
          <div key={title} className="space-y-3">
            <Icon className="h-8 w-8" />
            <h3 className="text-xl">{title}</h3>
            <p className="text-lg text-muted-foreground">{description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4 py-10">
        <h2>{t("certification.beforeEval")}</h2>
        <ul className="list-inside list-disc space-y-3 text-lg text-muted-foreground">
          <li>{t("certification.before1")}</li>
          <li>{t("certification.before2")}</li>
          <li>{t("certification.before3")}</li>
          <li>{t("certification.before4")}</li>
        </ul>
      </section>

      <div className="flex flex-col gap-3 pb-10">
        <Button asChild size="lg">
          <Link href={slidesIndexHref(DEFAULT_TRACK)}>{t("certification.reviewLessons")}</Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href={practiceTestHref(DEFAULT_TRACK)}>{t("certification.takePracticeTest")}</Link>
        </Button>
      </div>
    </PageShell>
  );
}
