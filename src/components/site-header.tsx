"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/i18n/locale-context";
import { DEFAULT_TRACK, practiceTestHref, slidesIndexHref } from "@/lib/tracks";
import { BrandLogo } from "@/components/brand-logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslations();
  const slidesHref = slidesIndexHref(DEFAULT_TRACK);
  const practiceHref = practiceTestHref(DEFAULT_TRACK);

  const navItems = [
    { href: slidesHref, label: t("nav.slides"), match: (path: string) => path.startsWith("/slides") },
    { href: practiceHref, label: t("nav.practice"), match: (path: string) => path.startsWith("/practice") },
  ];

  if (pathname.startsWith("/slides/present") || pathname.startsWith("/slides/cast")) {
    return null;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex h-[calc(var(--header)+env(safe-area-inset-top,0px))] items-center justify-between gap-4 px-[var(--pad)] pt-[env(safe-area-inset-top)]">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label="Pull">
          <BrandLogo className="h-8 w-8 lg:h-9 lg:w-9" />
          <span className="brand-mark">Pull</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle className="hidden sm:flex" />
          <LanguageSwitcher className="hidden sm:flex" />
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map(({ href, label, match }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "mono px-2 py-2 text-foreground",
                  match(pathname) ? "text-foreground" : "text-[var(--steel)] hover:text-foreground"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href={slidesHref}
            className="btn-header hidden border border-foreground bg-foreground px-3 py-3 font-mono text-[0.64rem] font-medium uppercase tracking-[0.1em] text-background hover:border-[var(--crown)] hover:bg-[var(--crown)] hover:text-foreground sm:inline-flex"
          >
            {t("home.lessonsShort")}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-foreground lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[var(--line)] bg-[var(--paper)] px-[var(--pad)] pb-8 pt-4 lg:hidden">
          <div className="mb-4 flex justify-end gap-2 sm:hidden">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
          <nav className="flex flex-col">
            {navItems.map(({ href, label, match }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "border-t border-[var(--line)] py-4 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-none tracking-tight",
                  match(pathname) ? "text-foreground" : "text-[var(--steel)]"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
