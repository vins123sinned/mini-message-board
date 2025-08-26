import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], extends: ["js/recommended", "prettier"], languageOptions: { globals: globals.browser} },
]);
