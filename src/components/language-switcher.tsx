"use client";

import { cn } from "@/lib/utils";
import { localeLabels, type Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/locale-context";

export function LanguageSwitcher({ className }: { readonly className?: string }) {
  const { locale, setLocale, isPending } = useLocale();

  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-0.5 font-display text-xs font-semibold uppercase tracking-wide",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {(["en", "es"] as const satisfies readonly Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          disabled={isPending}
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            "min-h-[36px] min-w-[2.25rem] px-2 transition-colors disabled:opacity-50",
            locale === code ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
          title={localeLabels[code]}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
