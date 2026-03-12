import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import * as Joi from "joi";

import { DatabaseModule } from "../database/database.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ArticlesController } from "./articles.controller";
import { ArticlesService } from "./articles.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
      }),
    }),
    DatabaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        host: configService.get<string>("POSTGRES_HOST") as string,
        port: configService.get<number>("POSTGRES_PORT") as number,
        user: configService.get<string>("POSTGRES_USER") as string,
        password: configService.get<string>("POSTGRES_PASSWORD") as string,
        database: configService.get<string>("POSTGRES_DB") as string,
      }),
    }),
  ],
  controllers: [AppController, ArticlesController],
  providers: [AppService, ArticlesService],
})
export class AppModule {}
