"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardCheck, Menu, Presentation, QrCode, X } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { useTranslations } from "@/i18n/locale-context";
import { DEFAULT_TRACK, practiceTestHref, slidesIndexHref } from "@/lib/tracks";
import { instructorLogoutAction } from "@/lib/cca/actions";
import { BrandLogo } from "@/components/brand-logo";

export type SiteHeaderAuthState = {
  isAuthed: boolean;
  canViewReports: boolean;
  isInstructor?: boolean;
  instructorName?: string;
  mustChangePassword?: boolean;
};

export function SiteHeader({
  authState = { isAuthed: false, canViewReports: false },
}: {
  readonly authState?: SiteHeaderAuthState;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslations();
  const slidesHref = slidesIndexHref(DEFAULT_TRACK);
  const practiceHref = practiceTestHref(DEFAULT_TRACK);
  const instructor = Boolean(authState.isInstructor);
  const authed = Boolean(authState.isAuthed);
  const onAuthPage = pathname === "/instructor/login" || pathname.startsWith("/join");

  const navItems = authed
    ? [
        { href: slidesHref, label: t("nav.slides"), icon: Presentation, match: (path: string) => path.startsWith("/slides") },
        {
          href: practiceHref,
          label: t("nav.practice"),
          icon: ClipboardCheck,
          match: (path: string) => path.startsWith("/practice"),
        },
        ...(instructor
          ? [
              {
                href: "/admin",
                label: t("nav.classDay"),
                icon: QrCode,
                match: (path: string) => path === "/admin" || path.startsWith("/admin/roster"),
              },
              {
                href: "/admin/cca",
                label: t("nav.admin"),
                icon: ClipboardCheck,
                match: (path: string) => path.startsWith("/admin/cca") || path.startsWith("/admin/packets"),
              },
            ]
          : []),
      ]
    : [];

  if (
    pathname.startsWith("/slides/present") ||
    pathname.startsWith("/slides/cast") ||
    pathname === "/instructor/login"
  ) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 shrink-0 overflow-x-hidden pt-[env(safe-area-inset-top)]">
      <PageShell className="flex min-w-0 items-center justify-between gap-2 py-3 lg:gap-3 lg:py-3.5">
        {onAuthPage ? (
          <span className="sr-only">Ridgetechone</span>
        ) : (
          <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5" aria-label="Ridgetechone">
            <BrandLogo className="h-9 w-auto lg:h-10" />
            <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline lg:text-base">
              Ridgetechone
            </span>
          </Link>
        )}

        <div className="flex min-w-0 items-center gap-1 lg:gap-2">
          <LanguageSwitcher className={onAuthPage ? "flex" : "hidden lg:flex"} />

          <nav className="hidden min-w-0 max-w-full items-center gap-0.5 overflow-x-auto whitespace-nowrap lg:flex xl:gap-1">
            {navItems.map(({ href, label, icon: Icon, match }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex min-h-[40px] items-center gap-1.5 rounded-md px-2.5 text-sm font-medium tracking-tight xl:gap-2 xl:px-3",
                  match(pathname)
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {Icon ? <Icon className="h-4 w-4 shrink-0 opacity-70" /> : null}
                {label}
              </Link>
            ))}
            {authed ? (
              <form action={instructorLogoutAction}>
                <button
                  type="submit"
                  className="flex min-h-[40px] items-center px-2.5 text-sm font-medium text-muted-foreground hover:text-foreground xl:px-3"
                >
                  {t("nav.signOut")}
                </button>
              </form>
            ) : onAuthPage ? null : (
              <Link
                href="/instructor/login"
                className="flex min-h-[40px] items-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                {t("nav.login")}
              </Link>
            )}
          </nav>

          {onAuthPage ? null : (
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </PageShell>

      {mobileOpen ? (
        <PageShell className="border-t border-border pb-5 pt-3 lg:hidden">
          <div className="mb-3 flex justify-end">
            <LanguageSwitcher />
          </div>
          <div className="flex flex-col gap-1">
            {navItems.map(({ href, label, icon: Icon, match }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex min-h-[48px] items-center gap-3 rounded-md px-2 text-base font-medium",
                  match(pathname) ? "bg-secondary text-foreground" : "text-muted-foreground"
                )}
              >
                {Icon ? <Icon className="h-5 w-5 opacity-70" /> : null}
                {label}
              </Link>
            ))}
            {authed ? (
              <form action={instructorLogoutAction}>
                <button
                  type="submit"
                  className="flex min-h-[48px] w-full items-center px-2 text-base font-medium text-muted-foreground"
                >
                  {t("nav.signOut")}
                </button>
              </form>
            ) : onAuthPage ? null : (
              <Link
                href="/instructor/login"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[48px] items-center px-2 text-base font-medium text-foreground"
              >
                {t("nav.login")}
              </Link>
            )}
          </div>
        </PageShell>
      ) : null}
    </header>
  );
}
