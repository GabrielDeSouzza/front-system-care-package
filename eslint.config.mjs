// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
    "plugin:@typescript-eslint/recommended", // ou "plugin:@typescript-eslint/strict"
    "next/core-web-vitals",
    "next/typescript"
  ),
  {ignores: ["**/node_modules/*", "**/.next/*", "**/src/generated/*"]}, 
];
