"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, ClipboardCheck, Frown, GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/lessons", label: "Lessons", icon: BookOpen },
  { href: "/practice-test", label: "Practice Test", icon: ClipboardCheck },
  { href: "/certification", label: "Certification", icon: GraduationCap },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background pt-[env(safe-area-inset-top)]">
      <PageShell className="flex items-center justify-between gap-4 py-4 lg:py-5">
        <Link href="/" className="flex items-center gap-3 font-display font-bold">
          <Frown className="h-8 w-8 text-foreground lg:h-9 lg:w-9" strokeWidth={2.25} />
          <span className="text-2xl tracking-[0.15em] lg:text-3xl">pull</span>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex min-h-[48px] items-center gap-2 px-4 font-display text-sm font-semibold uppercase tracking-wider lg:text-base",
                  pathname === href || pathname.startsWith(`${href}/`)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </PageShell>

      {mobileOpen && (
        <PageShell className="pb-5 lg:hidden">
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
