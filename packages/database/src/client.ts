import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { databaseSchema } from "./schema";

export type Database = NodePgDatabase<typeof databaseSchema>;

export function createPoolFromEnv() {
  return new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT
      ? Number(process.env.POSTGRES_PORT)
      : undefined,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  });
}

export function createDatabase(pool: Pool): Database {
  return drizzle(pool, { schema: databaseSchema });
}
