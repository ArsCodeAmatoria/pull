import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileCheck2, TrendingUp } from "lucide-react";

import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { requirePermission } from "@/lib/auth/session";
import { listModulesWithProgress } from "@/services/curriculum.service";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your Pull curriculum progress at a glance.",
};

export default async function DashboardPage() {
  const profile = await requirePermission("dashboard");

  if (!profile.employeeId || !profile.companyId) {
    return (
      <PageShell className="py-10 lg:py-16">
        <h1>Dashboard</h1>
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
  const percentComplete =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  const completedModules = modules.filter(
    (m) => m.totalCount > 0 && m.completedCount === m.totalCount,
  ).length;
  const nextModule = modules.find(
    (m) => m.totalCount === 0 || m.completedCount < m.totalCount,
  );

  return (
    <PageShell className="min-w-0 overflow-x-hidden py-10 lg:py-16">
      <div className="min-w-0 space-y-4 lg:max-w-3xl">
        <span className="category-label">Welcome back</span>
        <h1 className="break-words">{profile.firstName}&apos;s dashboard</h1>
        <p className="text-xl text-muted-foreground lg:text-2xl">
          {curriculum.title} — track your lesson progress and official exams.
        </p>
      </div>

      <div className="mt-8 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-3 lg:max-w-3xl">
        <div className="flex min-w-0 items-center gap-4 bg-foreground/5 p-5">
          <BookOpen className="h-8 w-8 shrink-0" />
          <div className="min-w-0">
            <div className="text-3xl font-bold tabular-nums">{percentComplete}%</div>
            <div className="text-sm text-muted-foreground">Curriculum complete</div>
          </div>
        </div>
        <div className="flex min-w-0 items-center gap-4 bg-foreground/5 p-5">
          <TrendingUp className="h-8 w-8 shrink-0" />
          <div className="min-w-0">
            <div className="text-3xl font-bold tabular-nums">
              {completedLessons}/{totalLessons}
            </div>
            <div className="text-sm text-muted-foreground">Lessons complete</div>
          </div>
        </div>
        <div className="flex min-w-0 items-center gap-4 bg-foreground/5 p-5">
          <FileCheck2 className="h-8 w-8 shrink-0" />
          <div className="min-w-0">
            <div className="text-3xl font-bold tabular-nums">
              {completedModules}/{modules.length}
            </div>
            <div className="text-sm text-muted-foreground">Modules complete</div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
        {nextModule ? (
          <Button asChild size="lg" className="h-auto max-w-full whitespace-normal py-3 text-left">
            <Link href={`/curriculum/${nextModule.module.code}`} className="max-w-full">
              <span className="line-clamp-2">Continue: {nextModule.module.title}</span>
            </Link>
          </Button>
        ) : (
          <Button asChild size="lg">
            <Link href="/curriculum">Review curriculum</Link>
          </Button>
        )}
        <Button asChild variant="secondary" size="lg" className="shrink-0">
          <Link href="/curriculum">View all modules</Link>
        </Button>
      </div>

      <div className="mt-12 min-w-0">
        <h2 className="mb-4">Modules</h2>
        <div className="space-y-2">
          {modules.map(({ module, completedCount, totalCount }) => (
            <Link
              key={module.id}
              href={`/curriculum/${module.code}`}
              className="flex min-w-0 items-start justify-between gap-4 bg-foreground/5 p-4 transition-opacity hover:opacity-90 sm:items-center"
            >
              <span className="min-w-0 flex-1 text-lg font-medium break-words">
                {module.title}
              </span>
              <span className="shrink-0 text-base tabular-nums text-muted-foreground">
                {completedCount}/{totalCount}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
