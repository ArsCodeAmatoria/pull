"use client";

import { StandardLogo } from "@/components/standards/standard-logo";
import { useTranslations } from "@/i18n/locale-context";
import { HOME_SOURCE_GROUPS } from "@/lib/home-sources";

export function HomeSources() {
  const { t } = useTranslations();

  return (
    <section className="py-8 lg:py-12">
      <h2 className="site-title-sm mb-6 lg:mb-8">{t("home.sourcesTitle")}</h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
        {HOME_SOURCE_GROUPS.map((group) => (
          <div key={group.id} className="min-w-0 space-y-3">
            <h3 className="text-sm font-semibold tracking-tight text-foreground">
              {t(group.headingKey)}
            </h3>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={`${group.id}-${item.href}`}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-w-0 items-center gap-2.5 text-base leading-snug text-muted-foreground underline-offset-4 hover:text-foreground hover:underline lg:text-lg"
                  >
                    {item.logo ? (
                      <StandardLogo id={item.logo} className="h-4 w-auto shrink-0 opacity-90" />
                    ) : null}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
