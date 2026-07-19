import { NextResponse } from "next/server";

import { hasDatabaseConfig, hasSupabaseConfig } from "@/lib/env";

export const dynamic = "force-dynamic";

export async function GET() {
  let database = false;
  if (hasDatabaseConfig()) {
    try {
      const { prisma } = await import("@/lib/prisma");
      await prisma.$queryRaw`select 1`;
      database = true;
    } catch {
      database = false;
    }
  }

  return NextResponse.json({
    ok: true,
    supabase: hasSupabaseConfig(),
    database,
    serviceRole: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
  });
}
