import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";

import { ArticlesService } from "./articles.service";

@Controller("articles")
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getAll() {
    return this.articlesService.getAll();
  }

  @Get(":id")
  getById(@Param("id", ParseIntPipe) id: number) {
    return this.articlesService.getById(id);
  }
}
