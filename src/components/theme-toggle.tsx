"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import { useTranslations } from "@/i18n/locale-context";

export function ThemeToggle({ className }: { readonly className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslations();
  const next = theme === "dark" ? "light" : "dark";
  const label = next === "dark" ? t("nav.darkMode") : t("nav.lightMode");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "mono min-h-[36px] shrink-0 px-2.5 text-[var(--steel)] transition-colors hover:text-foreground",
        className
      )}
      aria-label={label}
      title={label}
      suppressHydrationWarning
    >
      {next === "dark" ? t("nav.dark") : t("nav.light")}
    </button>
  );
}
