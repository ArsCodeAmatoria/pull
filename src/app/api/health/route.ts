import { NextResponse } from "next/server";

import { hasDatabaseConfig, hasSupabaseConfig } from "@/lib/env";

export const dynamic = "force-dynamic";

export async function GET() {
  let database = false;
  let databaseError: string | null = null;

  if (!hasDatabaseConfig()) {
    databaseError = "DATABASE_URL is not set";
  } else {
    try {
      const { prisma } = await import("@/lib/prisma");
      await prisma.$queryRaw`select 1`;
      database = true;
    } catch (error) {
      database = false;
      const message =
        error instanceof Error ? error.message : "Unknown database error";
      // Never return connection strings — only a short classification.
      databaseError = message
        .replace(/postgres(?:ql)?:\/\/[^\s]+/gi, "[redacted]")
        .slice(0, 180);
    }
  }

  return NextResponse.json({
    ok: true,
    supabase: hasSupabaseConfig(),
    database,
    databaseError,
    serviceRole: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
  });
}
