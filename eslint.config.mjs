// eslint.config.mjs
import js from "@eslint/js";
import next from "eslint-config-next";

export default [
  // 1. ignore build stuff
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "out/**",
    ],
  },

  // 2. base + next
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [
      js.configs.recommended,
      next,
      // if you want stricter:
      // "next/core-web-vitals",
    ],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      // your custom rules here
      // "react/jsx-key": "off",
    },
  },
];
