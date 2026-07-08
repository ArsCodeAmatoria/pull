"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardCheck, GraduationCap, Presentation } from "lucide-react";
import { CourseCoverImage } from "@/components/course-cover-image";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { useTranslations } from "@/i18n/locale-context";
import { getLocalizedLesson, stripLessonTitlePrefix } from "@/lib/lessons-i18n";
import { NAV_LESSONS } from "@/lib/lessons";

export function HomePageContent() {
  const { t, locale } = useTranslations();

  const features = [
    {
      icon: BookOpen,
      title: t("home.modulesTitle"),
      text: t("home.modulesText"),
      href: "/lessons",
      cta: t("home.modulesCta"),
    },
    {
      icon: ClipboardCheck,
      title: t("home.practiceTitle"),
      text: t("home.practiceText"),
      href: "/practice-test",
      cta: t("home.practiceCta"),
    },
    {
      icon: Presentation,
      title: t("home.slidesTitle"),
      text: t("home.slidesText"),
      href: "/slides",
      cta: t("home.slidesCta"),
    },
    {
      icon: GraduationCap,
      title: t("home.certTitle"),
      text: t("home.certText"),
      href: "/certification",
      cta: t("home.certCta"),
    },
  ];

  return (
    <PageShell>
      <section className="py-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="space-y-6 lg:space-y-8">
            <p className="category-label">{t("home.category")}</p>
            <h1>{t("home.title")}</h1>
            <p className="text-xl text-muted-foreground lg:text-2xl">{t("home.subtitle")}</p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row lg:gap-4">
              <Button asChild size="lg" className="sm:flex-1 lg:flex-none">
                <Link href="/lessons">
                  {t("home.startLessons")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="sm:flex-1 lg:flex-none">
                <Link href="/practice-test">{t("home.takePracticeTest")}</Link>
              </Button>
            </div>
          </div>
          <CourseCoverImage
            fill
            priority
            className="relative aspect-[4/3] min-h-[220px] lg:aspect-auto lg:min-h-[420px]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 2xl:grid-cols-4">
          {features.map(({ icon: Icon, title, text, href, cta }) => (
            <Link
              key={href}
              href={href}
              className="group flex min-w-0 flex-col gap-4 p-5 transition-colors hover:bg-foreground/4 lg:p-6"
            >
              <Icon className="h-8 w-8 shrink-0 text-foreground" strokeWidth={1.75} aria-hidden />
              <div className="flex min-h-0 flex-1 flex-col gap-2">
                <h2 className="text-balance text-xl font-bold leading-snug tracking-wide lg:text-[1.35rem]">
                  {title}
                </h2>
                <p className="text-balance text-base leading-relaxed text-muted-foreground lg:text-lg">
                  {text}
                </p>
              </div>
              <span className="mt-auto pt-2 font-display text-sm font-semibold uppercase tracking-wide text-foreground group-hover:underline">
                {cta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6 py-10 lg:py-16">
        <h2>{t("home.courseModules")}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {NAV_LESSONS.filter((l) => l.kind === "module")
            .slice(0, 9)
            .map((lesson) => {
              const localized = getLocalizedLesson(lesson, locale);
              return (
                <Link key={lesson.slug} href={`/lessons/${lesson.slug}`} className="block min-h-[52px] py-2">
                  <p className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                    {localized.badge}
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-snug lg:text-xl">
                    {stripLessonTitlePrefix(localized.title, lesson.kind)}
                  </p>
                </Link>
              );
            })}
        </div>
        <Button asChild variant="secondary" size="lg" className="mt-4 lg:mt-8">
          <Link href="/lessons">{t("home.viewAllLessons", { count: NAV_LESSONS.length })}</Link>
        </Button>
      </section>
    </PageShell>
  );
}
