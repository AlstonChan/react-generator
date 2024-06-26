import globals from "globals";
import pluginJs from "@eslint/js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";

export default [
  { ignores: ["src/**/*.test.js"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    settings: {
      react: { version: "detect" },
    },
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    ...reactRecommended,
    languageOptions: {
      ...reactRecommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
      ...reactRecommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
];
