import type { Metadata } from "next";
import { Download } from "lucide-react";

import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { requirePermission } from "@/lib/auth/session";
import { getCompanyProgressReport } from "@/services/reports.service";

export const metadata: Metadata = {
  title: "Reports",
  description: "Curriculum progress and exam results for your company.",
};

export default async function ReportsPage() {
  const profile = await requirePermission("reports");

  if (!profile.companyId) {
    return (
      <PageShell className="py-10 lg:py-16">
        <h1>Reports</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          No company associated with this account.
        </p>
      </PageShell>
    );
  }

  const rows = await getCompanyProgressReport(profile.companyId);

  return (
    <PageShell className="py-10 lg:py-16">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-4">
          <span className="category-label">Company reports</span>
          <h1>Curriculum progress</h1>
          <p className="text-xl text-muted-foreground lg:text-2xl">
            {rows.length} {rows.length === 1 ? "learner" : "learners"} with Pull access.
          </p>
        </div>
        <Button asChild size="lg">
          <a href="/api/reports/progress" download>
            <Download className="mr-2 h-5 w-5" />
            Download CSV
          </a>
        </Button>
      </div>

      <div className="mt-10 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Lessons</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Exams passed</TableHead>
              <TableHead>Exams attempted</TableHead>
              <TableHead>Last activity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="py-10 text-center text-muted-foreground">
                  No learners with Pull access yet.
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => (
                <TableRow key={row.employeeId}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="text-muted-foreground">{row.email}</TableCell>
                  <TableCell>
                    {row.completedLessons}/{row.totalLessons}
                  </TableCell>
                  <TableCell>{row.percentComplete}%</TableCell>
                  <TableCell>{row.examsPassed}</TableCell>
                  <TableCell>{row.examsAttempted}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {row.lastActivityAt
                      ? new Date(row.lastActivityAt).toLocaleDateString()
                      : "—"}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </PageShell>
  );
}
