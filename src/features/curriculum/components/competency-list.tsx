import {
  COMPETENCY_INTRO,
  type CurriculumCompetencyGroup,
} from "@/data/curriculum-competencies";

type CompetencyListProps = {
  readonly group: CurriculumCompetencyGroup;
  readonly showTitle?: boolean;
};

export function CompetencyList({ group, showTitle = true }: CompetencyListProps) {
  return (
    <section aria-labelledby={`competencies-${group.moduleCode}`}>
      {showTitle ? (
        <h3 id={`competencies-${group.moduleCode}`} className="text-xl font-bold lg:text-2xl">
          {group.title}
        </h3>
      ) : (
        <h2 id={`competencies-${group.moduleCode}`} className="mb-4">
          Competencies
        </h2>
      )}
      <p className="mt-3 text-base text-muted-foreground lg:text-lg">{COMPETENCY_INTRO}</p>
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
};

export function CompetencyCatalog({ groups, total }: CompetencyCatalogProps) {
  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2>Competencies</h2>
        <p className="text-base text-muted-foreground lg:text-lg">
          Total competencies: {total}
        </p>
      </div>
      {groups.map((group) => (
        <CompetencyList key={group.moduleCode} group={group} />
      ))}
    </div>
  );
}
