import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"], rules: {
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double", { "avoidEscape": true }],
    "semi": ["error", "always"],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "always"],
    "space-infix-ops": ["error", { "int32Hint": false }],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "no-magic-numbers": ["off"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "no-unused-vars": ["error", { "args": "none" }],
    "no-console": "off",
    "eqeqeq": ["error", "always"],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "consistent-return": "error",
    "strict": ["error", "global"],
    "prefer-destructuring": ["error", { "array": true, "object": true }, { "enforceForRenamedProperties": true }],
    "no-else-return": "error",
    "no-var": "error",
    "indent": ["error", 2],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "no-empty-function": "error",
    "camelcase": "error",
    "no-underscore-dangle": "error",
    "func-names": ["error", "always"],
    "object-shorthand": ["error", "always"],
    "no-debugger": "error",
  }},
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  tseslint.configs.recommended,
]);
