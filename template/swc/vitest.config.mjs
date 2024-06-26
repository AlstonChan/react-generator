/// <reference types="vitest" />

import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.mjs"],
  },
  resolve: {
    alias: [
      { find: "$Styles", replacement: resolve(__dirname, "src/styles/") },
      { find: "$Components", replacement: resolve(__dirname, "src/components/") },
      { find: "$Lib", replacement: resolve(__dirname, "src/lib/") },
      { find: "$Public", replacement: resolve(__dirname, "public/") },
      { find: "$Routes", replacement: resolve(__dirname, "src/routes/") },
    ],
  },
});
