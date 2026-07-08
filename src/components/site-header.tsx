"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anchor, BookOpen, ClipboardCheck, GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 pt-[env(safe-area-inset-top)] backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2 font-bold tracking-tight">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Anchor className="h-5 w-5" />
          </span>
          <span className="truncate text-lg sm:text-xl">pull</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex min-h-[44px] items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === href || pathname.startsWith(`${href}/`)
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </nav>

          <ThemeToggle className="sm:hidden" />

          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex min-h-[44px] items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium",
                  pathname === href || pathname.startsWith(`${href}/`)
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
