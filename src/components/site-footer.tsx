"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { useTranslations } from "@/i18n/locale-context";
import { DEFAULT_TRACK, practiceTestHref, slidesIndexHref } from "@/lib/tracks";

export function SiteFooter() {
  const pathname = usePathname();
  const { t } = useTranslations();
  const slidesHref = slidesIndexHref(DEFAULT_TRACK);

  if (pathname.startsWith("/slides/present") || pathname.startsWith("/slides/cast")) {
    return null;
  }

  return (
    <footer className="mt-auto pb-[env(safe-area-inset-bottom)]">
      <PageShell className="flex flex-col gap-10 py-12 lg:py-16">
        <p className="font-[family-name:var(--font-display)] text-[clamp(3.2rem,12vw,9rem)] font-bold uppercase leading-[0.85] tracking-[-0.03em] text-[var(--paper)]">
          Pull
        </p>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl space-y-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--paper)_55%,transparent)] lg:text-base">
            <p>{t("footer.tagline")}</p>
            <p>{t("footer.notice")}</p>
          </div>
          <div className="flex flex-col gap-3 font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] lg:flex-row lg:items-center lg:gap-8">
            <Link href={slidesHref} className="min-h-[44px] hover:text-[var(--crown)] lg:min-h-0">
              {t("nav.slides")}
            </Link>
            <Link
              href={practiceTestHref(DEFAULT_TRACK)}
              className="min-h-[44px] hover:text-[var(--crown)] lg:min-h-0"
            >
              {t("footer.practiceTest")}
            </Link>
          </div>
        </div>
      </PageShell>
    </footer>
  );
}
