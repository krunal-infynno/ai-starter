import { config as nestConfig } from "@ai-starter/eslint-config/nestjs";

/** @type {import("eslint").Linter.Config[]} */
const config = [
  ...nestConfig,
  {
    ignores: ["eslint.config.mjs"],
  },
];

export default config;
