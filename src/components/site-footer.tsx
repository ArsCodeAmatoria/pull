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
    <footer className="mt-auto pb-[env(safe-area-inset-bottom)]">
      <PageShell className="flex flex-col gap-8 py-10 lg:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md text-sm text-muted-foreground lg:text-base">
            <span>{t("footer.tagline")}</span>
          </div>
          <div className="flex flex-col gap-3 text-sm font-medium lg:flex-row lg:items-center lg:gap-6">
            <Link href={slidesHref} className="min-h-[44px] text-foreground hover:text-accent lg:min-h-0">
              {t("nav.slides")}
            </Link>
            <Link
              href={practiceTestHref(DEFAULT_TRACK)}
              className="min-h-[44px] text-foreground hover:text-accent lg:min-h-0"
            >
              {t("footer.practiceTest")}
            </Link>
            <Link href="/disclaimer" className="min-h-[44px] text-foreground hover:text-accent lg:min-h-0">
              {t("footer.certification")}
            </Link>
          </div>
        </div>
        <SiteDisclaimer className="max-w-3xl text-sm text-muted-foreground" />
      </PageShell>
    </footer>
  );
}
