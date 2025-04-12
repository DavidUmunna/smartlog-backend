import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"],
    rules: {
      "linebreak-style": ["error", "unix"], // LF for line breaks (Unix)
      "quotes": ["error", "double", { "avoidEscape": true }], // Single quotes
      "semi": ["error", "always"], // Always require semicolons
      "space-before-blocks": ["error", "always"], // Space before blocks
      "space-before-function-paren": ["error", "always"], // Space before function parentheses
      "space-infix-ops": ["error", { "int32Hint": false }], // Space around operators
      "keyword-spacing": ["error", { "before": true, "after": true }], // Space before/after catch
      "no-magic-numbers": ["off"], // Avoid magic numbers
      "brace-style": ["error", "1tbs", { "allowSingleLine": true }], // One true brace style
      "no-unused-vars": ["error", { "args": "none" }], // Ignore unused function arguments
      "no-console": "off", // Warn on console statements
      "eqeqeq": ["error", "always"], // Enforce strict equality (===)
      "no-multiple-empty-lines": ["error", { "max": 1 }], // No more than 1 empty line in a row
      "consistent-return": "error", // Enforce consistent return statements
      "strict": ["error", "global"], // Always use strict mode
      "prefer-destructuring": ["error", { "array": true, "object": true }, { "enforceForRenamedProperties": true }], // Prefer destructuring
      "no-else-return": "error", // Avoid else after return
      "no-var": "error", // No `var`, prefer `let` and `const`
      "indent": ["error", 2], // Enforce 2 spaces indentation
      "arrow-spacing": ["error", { "before": true, "after": true }], // Space around arrow functions
      "no-empty-function": "error", // No empty functions allowed
      "camelcase": "error", // Enforce camelCase naming
      "no-underscore-dangle": "error", // No underscores at the start or end of variable names
      "func-names": ["error", "always"], // Enforce named function expressions
      "object-shorthand": ["error", "always"], // Use object shorthand
      "no-debugger": "error", // Disallow debugger statements
    }
  },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.node } },
  tseslint.configs.recommended,
]);
