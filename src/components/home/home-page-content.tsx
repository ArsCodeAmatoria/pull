"use client";

import Link from "next/link";
import { ClipboardCheck, GraduationCap, Presentation } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { useTranslations } from "@/i18n/locale-context";
import { HomeSources } from "@/components/home/home-sources";
import { isTrackAvailable, practiceTestHref, slidesIndexHref, TRACK_SLUGS } from "@/lib/tracks";

export function HomePageContent() {
  const { t } = useTranslations();

  const tracks = [
    {
      slug: TRACK_SLUGS[0],
      title: t("tracks.rigger.title"),
      description: t("tracks.rigger.description"),
      available: isTrackAvailable(TRACK_SLUGS[0]),
    },
    {
      slug: TRACK_SLUGS[1],
      title: t("tracks.intermediate.title"),
      description: t("tracks.intermediate.description"),
      available: isTrackAvailable(TRACK_SLUGS[1]),
    },
    {
      slug: TRACK_SLUGS[2],
      title: t("tracks.pro.title"),
      description: t("tracks.pro.description"),
      available: isTrackAvailable(TRACK_SLUGS[2]),
    },
  ] as const;

  return (
    <PageShell>
      <section className="py-10 lg:py-16">
        <div className="max-w-3xl space-y-6 lg:space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="category-label">{t("home.category")}</p>
            <Badge variant="secondary">{t("home.openLabel")}</Badge>
          </div>
          <h1>{t("home.title")}</h1>
          <p className="text-xl text-muted-foreground lg:text-2xl">{t("home.subtitle")}</p>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {tracks.map(({ slug, title, description, available }) => (
            <article
              key={slug}
              className={`flex min-w-0 flex-col gap-5 p-5 lg:gap-6 lg:p-7 ${
                slug === TRACK_SLUGS[2] ? "md:col-span-2 md:max-w-xl md:justify-self-center" : ""
              }`}
            >
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-wide lg:text-3xl">{title}</h2>
                <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">{description}</p>
              </div>
              {available ? (
                <div className="mt-auto grid min-w-0 grid-cols-2 gap-2">
                  <Button asChild size="sm" className="min-w-0 px-2.5 whitespace-normal leading-snug">
                    <Link href={slidesIndexHref(slug)} className="flex min-w-0 items-center justify-center gap-1.5">
                      <Presentation className="h-4 w-4 shrink-0" aria-hidden />
                      <span>{t("home.lessonsShort")}</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="secondary"
                    size="sm"
                    className="min-w-0 px-2.5 whitespace-normal leading-snug"
                  >
                    <Link href={practiceTestHref(slug)} className="flex min-w-0 items-center justify-center gap-1.5">
                      <ClipboardCheck className="h-4 w-4 shrink-0" aria-hidden />
                      <span>{t("home.testShort")}</span>
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="mt-auto space-y-2">
                  <p className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-highlight-secondary lg:text-base">
                    <span aria-hidden className="text-3xl leading-none lg:text-4xl">*</span>
                    {t("tracks.comingSoon")}
                  </p>
                  <p className="text-sm font-medium text-muted-foreground lg:text-base">
                    {t("tracks.comingSoonDetail")}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="py-10 lg:py-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <GraduationCap className="h-8 w-8 text-foreground" strokeWidth={1.75} aria-hidden />
          <div className="space-y-2">
            <h2 className="text-xl font-bold lg:text-2xl">{t("home.certTitle")}</h2>
            <p className="text-lg text-muted-foreground lg:text-xl">{t("home.certText")}</p>
          </div>
          <Button asChild variant="secondary" size="sm">
            <Link href="/certification">{t("home.certCta")}</Link>
          </Button>
        </div>
      </section>

      <HomeSources />
    </PageShell>
  );
}
