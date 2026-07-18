#!/usr/bin/env node
/**
 * Copies prisma/schema.prisma from the sibling PROVEN repo into this repo.
 *
 * Pull and Proven share a single Supabase Postgres database, so both apps
 * must run from the exact same Prisma schema. Proven is the source of truth
 * — run this script after any schema change in PROVEN, then `npm run db:generate`.
 */
import { copyFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");

const sourcePath = resolve(repoRoot, "..", "PROVEN", "prisma", "schema.prisma");
const destPath = join(repoRoot, "prisma", "schema.prisma");

if (!existsSync(sourcePath)) {
  console.error(`Could not find Proven schema at ${sourcePath}`);
  console.error(
    "Expected Pull and Proven to be sibling directories, e.g. ~/pull and ~/PROVEN.",
  );
  process.exit(1);
}

copyFileSync(sourcePath, destPath);
console.log(`Synced schema.prisma from ${sourcePath}`);
console.log("Run `npm run db:generate` to regenerate the Prisma client.");
