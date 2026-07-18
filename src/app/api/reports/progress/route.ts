import { NextResponse } from "next/server";

import { requirePermission } from "@/lib/auth/session";
import {
  getCompanyProgressReport,
  progressReportToCsv,
} from "@/services/reports.service";

export async function GET() {
  const profile = await requirePermission("reports");

  if (!profile.companyId) {
    return NextResponse.json({ error: "No company associated with this account." }, { status: 400 });
  }

  const rows = await getCompanyProgressReport(profile.companyId);
  const csv = progressReportToCsv(rows);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="pull-progress-report.csv"`,
    },
  });
}
