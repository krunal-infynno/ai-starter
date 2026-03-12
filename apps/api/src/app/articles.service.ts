import { databaseSchema, eq } from "@ai-starter/database";
import { Injectable, NotFoundException } from "@nestjs/common";

import { DrizzleService } from "../database/drizzle.service";

@Injectable()
export class ArticlesService {
  constructor(private readonly drizzleService: DrizzleService) {}

  getAll() {
    return this.drizzleService.db.select().from(databaseSchema.articles);
  }

  async getById(id: number) {
    const articles = await this.drizzleService.db
      .select()
      .from(databaseSchema.articles)
      .where(eq(databaseSchema.articles.id, id));

    const article = articles.pop();

    if (!article) {
      throw new NotFoundException();
    }

    return article;
  }
}
