import type { Locale } from "@/i18n/config";
import { en, type Dictionary } from "@/i18n/dictionaries/en";
import { es } from "@/i18n/dictionaries/es";

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export function formatMessage(template: string, vars: Record<string, string | number>): string {
  return Object.entries(vars).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, String(value)),
    template
  );
}
