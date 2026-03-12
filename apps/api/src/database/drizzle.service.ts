import { createDatabase, Database } from "@ai-starter/database";
import { Inject, Injectable } from "@nestjs/common";
import type { Pool } from "pg";

import { CONNECTION_POOL } from "./database.module-definition";

@Injectable()
export class DrizzleService {
  public db: Database;

  constructor(@Inject(CONNECTION_POOL) private readonly pool: Pool) {
    this.db = createDatabase(this.pool);
  }
}
