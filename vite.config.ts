import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: "src/index.ts",
    outExtensions: () => ({
      js: ".js",
      dts: ".d.ts",
    }),
    dts: {
      tsgo: true,
    },
    exports: true,
    format: ["esm"],
  },
  optimizeDeps: {
    include: ["@viz-js/viz"],
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
    ignorePatterns: ["**/docs/**"],
  },
  fmt: {},
  resolve: {
    alias: {
      "(\\.\\./.*)\\.js$": "$1.ts",
      "(\\./.*)\\.js$": "$1.ts",
    },
  },
});
