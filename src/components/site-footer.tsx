"use client";

import { Frown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { SiteDisclaimer } from "@/components/site-disclaimer";
import { useTranslations } from "@/i18n/locale-context";
import { DEFAULT_TRACK, practiceTestHref, slidesIndexHref } from "@/lib/tracks";

export function SiteFooter() {
  const pathname = usePathname();
  const { t } = useTranslations();
  const lessonsHref = slidesIndexHref(DEFAULT_TRACK);

  if (pathname.startsWith("/slides/present") || pathname.startsWith("/slides/cast")) {
    return null;
  }

  return (
    <footer className="mt-auto border-t border-foreground/10 bg-background pb-[env(safe-area-inset-bottom)]">
      <PageShell className="flex flex-col gap-8 py-10 lg:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 text-lg text-muted-foreground lg:text-xl">
            <Frown className="h-5 w-5" strokeWidth={2.25} />
            <span>{t("footer.tagline")}</span>
          </div>
          <div className="flex flex-col gap-4 font-display text-lg font-semibold uppercase tracking-wide lg:flex-row lg:gap-8 lg:text-base">
            <Link href={lessonsHref} className="min-h-[48px] leading-[48px] text-foreground lg:leading-normal">
              {t("nav.lessons")}
            </Link>
            <Link href={practiceTestHref(DEFAULT_TRACK)} className="min-h-[48px] leading-[48px] text-foreground lg:leading-normal">
              {t("footer.practiceTest")}
            </Link>
            <Link href="/certification" className="min-h-[48px] leading-[48px] text-foreground lg:leading-normal">
              {t("footer.certification")}
            </Link>
          </div>
        </div>
        <SiteDisclaimer className="max-w-3xl" />
      </PageShell>
    </footer>
  );
}
