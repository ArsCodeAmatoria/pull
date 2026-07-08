"use client";

import { createContext, useContext, useMemo, useTransition, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { setLocaleCookie } from "@/app/actions/set-locale";
import { type Locale } from "@/i18n/config";
import { type Dictionary } from "@/i18n/dictionaries/en";
import { formatMessage } from "@/i18n/get-dictionary";

type LocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  t: (path: string, vars?: Record<string, string | number>) => string;
  isPending: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function resolvePath(dict: Dictionary, path: string): string | undefined {
  const parts = path.split(".");
  let current: unknown = dict;
  for (const part of parts) {
    if (current == null || typeof current !== "object" || !(part in current)) return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === "string" ? current : undefined;
}

type Props = {
  readonly locale: Locale;
  readonly dictionary: Dictionary;
  readonly children: ReactNode;
};

export function LocaleProvider({ locale, dictionary, children }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const value = useMemo<LocaleContextValue>(() => {
    const t = (path: string, vars?: Record<string, string | number>) => {
      const raw = resolvePath(dictionary, path);
      if (!raw) return path;
      return vars ? formatMessage(raw, vars) : raw;
    };

    const setLocale = (next: Locale) => {
      if (next === locale) return;
      startTransition(async () => {
        await setLocaleCookie(next);
        router.refresh();
      });
    };

    return { locale, dictionary, setLocale, t, isPending };
  }, [dictionary, isPending, locale, router]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useTranslations() {
  const { t, dictionary, locale } = useLocale();
  return { t, dictionary, locale };
}
