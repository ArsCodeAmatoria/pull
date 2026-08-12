import { Pool } from "pg";

let pool: Pool | null = null;

export function ccaPool() {
  const connectionString = process.env.CCA_DATABASE_URL;
  if (!connectionString) {
    throw new Error("CCA_DATABASE_URL is not set");
  }
  if (!pool) {
    pool = new Pool({
      connectionString,
      max: 4,
      ssl: connectionString.includes("localhost") ? undefined : { rejectUnauthorized: false },
    });
  }
  return pool;
}

export function usesDirectCca() {
  const db = process.env.CCA_DATABASE_URL ?? "";
  if (!/^(postgres|postgresql):\/\//.test(db)) return false;
  const api = process.env.CCA_API_URL ?? "";
  if (process.env.VERCEL) {
    return !api || api.includes("127.0.0.1") || api.includes("localhost");
  }
  return api.length === 0;
}
