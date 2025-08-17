import vue from "eslint-plugin-vue";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,ts,vue}"],
    ignores: ["node_modules", "dist", "**/*.d.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json"
      },
    },
    plugins: {
      vue,
      "@typescript-eslint": ts,
    },
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
];
