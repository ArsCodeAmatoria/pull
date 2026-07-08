"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, ClipboardCheck, Frown, GraduationCap, Menu, Presentation, X } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTranslations } from "@/i18n/locale-context";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslations();

  const navItems = [
    { href: "/lessons", label: t("nav.lessons"), icon: BookOpen },
    { href: "/slides", label: t("nav.slides"), icon: Presentation },
    { href: "/practice-test", label: t("nav.test"), icon: ClipboardCheck },
    { href: "/certification", label: t("nav.cert"), icon: GraduationCap },
  ];

  if (pathname.startsWith("/slides/present") || pathname.startsWith("/slides/cast")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 bg-background pt-[env(safe-area-inset-top)]">
      <PageShell className="flex items-center justify-between gap-2 py-3 lg:gap-3 lg:py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-display font-bold">
          <Frown className="h-7 w-7 text-foreground lg:h-8 lg:w-8" strokeWidth={2.25} />
          <span className="text-xl tracking-[0.12em] lg:text-2xl">pull</span>
        </Link>

        <div className="flex min-w-0 items-center gap-1 lg:gap-2">
          <LanguageSwitcher className="hidden lg:flex" />
          <ThemeToggle />

          <nav className="hidden shrink-0 items-center gap-0.5 whitespace-nowrap lg:flex xl:gap-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex min-h-[40px] items-center gap-1.5 px-2 font-display text-xs font-semibold uppercase tracking-wide xl:gap-2 xl:px-3 xl:text-sm",
                  pathname === href || pathname.startsWith(`${href}/`)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4 shrink-0 xl:h-[18px] xl:w-[18px]" />
                {label}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </PageShell>

      {mobileOpen && (
        <PageShell className="pb-5 lg:hidden">
          <div className="mb-4 flex justify-end">
            <LanguageSwitcher />
          </div>
          <div className="flex flex-col gap-2">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex min-h-[52px] items-center gap-3 font-display text-lg font-semibold uppercase tracking-wide",
                  pathname === href || pathname.startsWith(`${href}/`)
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                <Icon className="h-6 w-6" />
                {label}
              </Link>
            ))}
          </div>
        </PageShell>
      )}
    </header>
  );
}
