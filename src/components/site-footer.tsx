"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { SiteDisclaimer } from "@/components/site-disclaimer";
import { useTranslations } from "@/i18n/locale-context";
import { DEFAULT_TRACK, practiceTestHref, slidesIndexHref } from "@/lib/tracks";

export function SiteFooter() {
  const pathname = usePathname();
  const { t } = useTranslations();
  const slidesHref = slidesIndexHref(DEFAULT_TRACK);

  if (
    pathname.startsWith("/slides/present") ||
    pathname.startsWith("/slides/cast") ||
    pathname === "/instructor/login" ||
    pathname.startsWith("/join")
  ) {
    return null;
  }

  return (
    <footer className="mt-auto bg-background pb-[env(safe-area-inset-bottom)]">
      <PageShell className="flex flex-col gap-8 py-10 lg:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 text-lg text-muted-foreground lg:text-xl">
            <span>{t("footer.tagline")}</span>
          </div>
          <div className="flex flex-col gap-4 font-display text-2xl uppercase tracking-wide lg:flex-row lg:items-center lg:gap-8 lg:text-xl">
            <Link href={slidesHref} className="min-h-[48px] border-2 border-foreground bg-card px-3 leading-[48px] text-foreground shadow-[3px_3px_0_#000] lg:leading-normal">
              {t("nav.slides")}
            </Link>
            <Link
              href={practiceTestHref(DEFAULT_TRACK)}
              className="min-h-[48px] border-2 border-foreground bg-card px-3 leading-[48px] text-foreground shadow-[3px_3px_0_#000] lg:leading-normal"
            >
              {t("footer.practiceTest")}
            </Link>
            <Link href="/disclaimer" className="min-h-[48px] border-2 border-foreground bg-card px-3 leading-[48px] text-foreground shadow-[3px_3px_0_#000] lg:leading-normal">
              {t("footer.certification")}
            </Link>
          </div>
        </div>
        <SiteDisclaimer className="max-w-3xl" />
      </PageShell>
    </footer>
  );
}
