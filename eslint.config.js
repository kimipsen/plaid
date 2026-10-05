// @ts-check
const eslint = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = defineConfig([
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "plaid",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "plaid",
          style: "kebab-case",
        },
      ],
      // Constructor injection is kept for now; `ng g @angular/core:inject` can convert it later.
      "@angular-eslint/prefer-inject": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      // templateAccessibility is not enabled: its fixes (focusability, key handlers) would change behaviour.
      angular.configs.templateRecommended,
    ],
    rules: {
      "@angular-eslint/template/eqeqeq": ["error", { allowNullOrUndefined: true }],
    },
  }
]);
