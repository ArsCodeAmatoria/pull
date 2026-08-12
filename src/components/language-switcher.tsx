"use client";

import { cn } from "@/lib/utils";
import { localeLabels, type Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/locale-context";

export function LanguageSwitcher({ className }: { readonly className?: string }) {
  const { locale, setLocale, isPending } = useLocale();
  const otherLocale: Locale = locale === "en" ? "es" : "en";

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => setLocale(otherLocale)}
      className={cn(
        "min-h-[36px] shrink-0 rounded-md px-2.5 text-xs font-semibold tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:opacity-50",
        className
      )}
      aria-label={`Switch to ${localeLabels[otherLocale]}`}
      title={`${localeLabels[locale]} — click for ${localeLabels[otherLocale]}`}
    >
      {locale.toUpperCase()}
    </button>
  );
}
