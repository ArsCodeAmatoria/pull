"use client";

import { StandardLogo } from "@/components/standards/standard-logo";
import { SectionKicker } from "@/components/section-kicker";
import { useTranslations } from "@/i18n/locale-context";
import { HOME_SOURCE_GROUPS } from "@/lib/home-sources";

export function HomeSources() {
  const { t } = useTranslations();

  return (
    <section className="border-t border-[var(--line)] py-16 lg:py-24">
      <SectionKicker>{t("home.sourcesKicker")}</SectionKicker>
      <h2 className="site-title-sm mb-4 max-w-[12ch]">{t("home.sourcesTitle")}</h2>
      <p className="mb-10 max-w-2xl text-[var(--copy)]">{t("home.sourcesNote")}</p>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
        {HOME_SOURCE_GROUPS.map((group) => (
          <div key={group.id} className="min-w-0">
            <h3 className="mb-2">{t(group.headingKey)}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={`${group.id}-${item.href}`}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 border-t border-[var(--line)] py-3 text-[var(--copy)] hover:text-[var(--crown)]"
                  >
                    {item.logo ? (
                      <StandardLogo id={item.logo} className="h-4 w-auto shrink-0 opacity-90" />
                    ) : (
                      <span />
                    )}
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
