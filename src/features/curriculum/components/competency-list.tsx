import type { CurriculumCompetencyGroup } from "@/data/curriculum-competencies";
import { getCompetencyIntro } from "@/data/curriculum-competencies-i18n";
import type { Locale } from "@/i18n/config";

type CompetencyListProps = {
  readonly group: CurriculumCompetencyGroup;
  readonly showTitle?: boolean;
  readonly locale?: Locale;
  readonly intro?: string;
};

export function CompetencyList({
  group,
  showTitle = true,
  locale = "en",
  intro,
}: CompetencyListProps) {
  const introText = intro ?? getCompetencyIntro(locale);

  return (
    <section aria-labelledby={`competencies-${group.moduleCode}`}>
      {showTitle ? (
        <h3 id={`competencies-${group.moduleCode}`} className="text-xl font-bold lg:text-2xl">
          {group.title}
        </h3>
      ) : (
        <h2 id={`competencies-${group.moduleCode}`} className="mb-4">
          {locale === "es" ? "Competencias" : "Competencies"}
        </h2>
      )}
      <p className="mt-3 text-base text-muted-foreground lg:text-lg">{introText}</p>
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-base lg:text-lg">
        {group.competencies.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </section>
  );
}

type CompetencyCatalogProps = {
  readonly groups: readonly CurriculumCompetencyGroup[];
  readonly total: number;
  readonly locale?: Locale;
  readonly title?: string;
  readonly totalLabel?: string;
};

export function CompetencyCatalog({
  groups,
  total,
  locale = "en",
  title,
  totalLabel,
}: CompetencyCatalogProps) {
  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2>{title ?? (locale === "es" ? "Competencias de este curso" : "Competencies in this course")}</h2>
        <p className="text-base text-muted-foreground lg:text-lg">
          {totalLabel ??
            (locale === "es" ? `Competencias cubiertas: ${total}` : `Covered competencies: ${total}`)}
        </p>
      </div>
      {groups.map((group) => (
        <CompetencyList key={group.moduleCode} group={group} locale={locale} />
      ))}
    </div>
  );
}
