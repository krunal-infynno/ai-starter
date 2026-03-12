import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title"),
  content: text("content"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
