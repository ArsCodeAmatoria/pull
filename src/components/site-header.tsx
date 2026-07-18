"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, ClipboardCheck, Frown, GraduationCap, LayoutDashboard, Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { useTranslations } from "@/i18n/locale-context";
import { DEFAULT_TRACK, slidesIndexHref } from "@/lib/tracks";
import { signOutAction } from "@/lib/auth/actions";

export type SiteHeaderAuthState = {
  isAuthed: boolean;
  canViewReports: boolean;
};

export function SiteHeader({
  authState = { isAuthed: false, canViewReports: false },
}: {
  readonly authState?: SiteHeaderAuthState;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslations();
  const lessonsHref = slidesIndexHref(DEFAULT_TRACK);

  const navItems = [
    { href: lessonsHref, label: t("nav.lessons"), match: (path: string) => path.startsWith("/slides") },
    {
      href: "/curriculum",
      label: t("nav.curriculum"),
      icon: ClipboardCheck,
      match: (path: string) => path.startsWith("/curriculum"),
    },
    { href: "/certification", label: t("nav.cert"), icon: GraduationCap, match: (path: string) => path.startsWith("/certification") },
    {
      href: "/dashboard",
      label: t("nav.dashboard"),
      icon: LayoutDashboard,
      match: (path: string) => path.startsWith("/dashboard"),
    },
    ...(authState.canViewReports
      ? [
          {
            href: "/reports",
            label: t("nav.reports"),
            icon: BarChart3,
            match: (path: string) => path.startsWith("/reports"),
          },
        ]
      : []),
  ];

  if (pathname.startsWith("/slides/present") || pathname.startsWith("/slides/cast")) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 overflow-x-hidden bg-background pt-[env(safe-area-inset-top)]">
      <PageShell className="flex min-w-0 items-center justify-between gap-2 py-3 lg:gap-3 lg:py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-display font-bold">
          <Frown className="h-7 w-7 text-foreground lg:h-8 lg:w-8" strokeWidth={2.25} />
          <span className="text-xl tracking-[0.12em] lg:text-2xl">pull</span>
        </Link>

        <div className="flex min-w-0 items-center gap-1 lg:gap-2">
          <LanguageSwitcher className="hidden lg:flex" />

          <nav className="hidden min-w-0 max-w-full items-center gap-0.5 overflow-x-auto whitespace-nowrap lg:flex xl:gap-1">
            {navItems.map(({ href, label, icon: Icon, match }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex min-h-[40px] items-center gap-1.5 px-2 font-display text-xs font-semibold uppercase tracking-wide xl:gap-2 xl:px-3 xl:text-sm",
                  match(pathname) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {Icon ? <Icon className="h-4 w-4 shrink-0" /> : null}
                {label}
              </Link>
            ))}
            <form action={signOutAction}>
              <button
                type="submit"
                className="flex min-h-[40px] items-center px-2 font-display text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground xl:px-3 xl:text-sm"
              >
                {t("nav.signOut")}
              </button>
            </form>
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

      {mobileOpen ? (
        <PageShell className="pb-5 lg:hidden">
          <div className="mb-4 flex justify-end">
            <LanguageSwitcher />
          </div>
          <div className="flex flex-col gap-2">
            {navItems.map(({ href, label, icon: Icon, match }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex min-h-[52px] items-center gap-3 font-display text-lg font-semibold uppercase tracking-wide",
                  match(pathname) ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {Icon ? <Icon className="h-6 w-6" /> : null}
                {label}
              </Link>
            ))}
            <form action={signOutAction}>
              <button
                type="submit"
                className="flex min-h-[52px] items-center font-display text-lg font-semibold uppercase tracking-wide text-muted-foreground"
              >
                {t("nav.signOut")}
              </button>
            </form>
          </div>
        </PageShell>
      ) : null}
    </header>
  );
}
