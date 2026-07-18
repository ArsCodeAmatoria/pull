"use client";

import { useTranslations } from "@/i18n/locale-context";
import { cn } from "@/lib/utils";

type Props = {
  readonly className?: string;
};

export function SiteDisclaimer({ className }: Props) {
  const { t } = useTranslations();

  return (
    <aside
      className={cn("space-y-1.5 text-sm leading-relaxed text-muted-foreground", className)}
      aria-label={t("disclaimer.ariaLabel")}
    >
      <p>{t("disclaimer.educational")}</p>
    </aside>
  );
}
