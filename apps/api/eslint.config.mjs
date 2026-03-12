// @ts-check
import tseslint from "typescript-eslint";
import { config as nestjsConfig } from "@ai-starter/eslint-config/nestjs";

export default tseslint.config(
  {
    ignores: ["eslint.config.mjs"],
  },
  ...nestjsConfig,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
);
