"use client";

import { Frown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageShell } from "@/components/page-shell";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname.startsWith("/slides/present") || pathname.startsWith("/slides/cast")) {
    return null;
  }

  return (
    <footer className="mt-auto bg-background pb-[env(safe-area-inset-bottom)]">
      <PageShell className="flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:py-12">
        <div className="flex items-center gap-3 text-lg text-muted-foreground lg:text-xl">
          <Frown className="h-5 w-5" strokeWidth={2.25} />
          <span>pull — rigging course</span>
        </div>
        <div className="flex flex-col gap-4 font-display text-lg font-semibold uppercase tracking-wide lg:flex-row lg:gap-8 lg:text-base">
          <Link href="/lessons" className="min-h-[48px] leading-[48px] text-foreground lg:leading-normal">
            Lessons
          </Link>
          <Link href="/slides" className="min-h-[48px] leading-[48px] text-foreground lg:leading-normal">
            Slides
          </Link>
          <Link href="/practice-test" className="min-h-[48px] leading-[48px] text-foreground lg:leading-normal">
            Practice Test
          </Link>
          <Link href="/certification" className="min-h-[48px] leading-[48px] text-foreground lg:leading-normal">
            Certification
          </Link>
        </div>
      </PageShell>
    </footer>
  );
}
