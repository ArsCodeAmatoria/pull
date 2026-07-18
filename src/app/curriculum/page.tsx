import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import {
  CURRICULUM_COMPETENCY_GROUPS,
  TOTAL_CURRICULUM_COMPETENCIES,
} from "@/data/curriculum-competencies";
import { requirePermission } from "@/lib/auth/session";
import { CompetencyCatalog } from "@/features/curriculum/components/competency-list";
import { ModuleList } from "@/features/curriculum/components/module-list";
import { listModulesWithProgress } from "@/services/curriculum.service";

export const metadata: Metadata = {
  title: "Curriculum",
  description: "Your Tower Crane Rigger curriculum — modules, lessons, and official exams.",
};

export default async function CurriculumPage() {
  const profile = await requirePermission("curriculum");

  if (!profile.employeeId || !profile.companyId) {
    return (
      <PageShell className="py-10 lg:py-16">
        <h1>Curriculum</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your account isn&apos;t linked to a company yet. Contact your
          administrator to get Pull access.
        </p>
      </PageShell>
    );
  }

  const { curriculum, modules } = await listModulesWithProgress(
    profile.employeeId,
    profile.companyId,
  );

  const totalLessons = modules.reduce((sum, m) => sum + m.totalCount, 0);
  const completedLessons = modules.reduce((sum, m) => sum + m.completedCount, 0);

  return (
    <PageShell className="py-10 lg:py-16">
      <div className="space-y-4 lg:max-w-3xl">
        <span className="category-label">Your curriculum</span>
        <h1>{curriculum.title}</h1>
        <p className="text-xl text-muted-foreground lg:text-2xl">
          {curriculum.description}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3 lg:max-w-xl">
        <div className="bg-foreground/5 p-4 lg:p-6">
          <div className="text-3xl font-bold lg:text-4xl">
            {completedLessons}/{totalLessons}
          </div>
          <div className="mt-1 text-sm text-muted-foreground lg:text-base">
            Lessons complete
          </div>
        </div>
        <div className="bg-foreground/5 p-4 lg:p-6">
          <div className="text-3xl font-bold lg:text-4xl">{modules.length}</div>
          <div className="mt-1 text-sm text-muted-foreground lg:text-base">Modules</div>
        </div>
        <div className="bg-foreground/5 p-4 lg:p-6">
          <div className="text-3xl font-bold lg:text-4xl">
            {TOTAL_CURRICULUM_COMPETENCIES}
          </div>
          <div className="mt-1 text-sm text-muted-foreground lg:text-base">
            Competencies
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-4">Modules</h2>
        <ModuleList modules={modules} />
      </div>

      <div className="mt-14">
        <CompetencyCatalog
          groups={CURRICULUM_COMPETENCY_GROUPS}
          total={TOTAL_CURRICULUM_COMPETENCIES}
        />
      </div>

      <div className="mt-10">
        <Button asChild variant="secondary" size="lg">
          <Link href="/dashboard">Go to dashboard</Link>
        </Button>
      </div>
    </PageShell>
  );
}
