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
    minify: true,
    sourcemap: false,
  },
  optimizeDeps: {
    include: ["@viz-js/viz"],
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
    ignorePatterns: ["**/docs/**", "**/scripts/**"],
  },
  fmt: {
    ignorePatterns: ["docs/docs/nodes"],
  },
  resolve: {
    alias: {
      "(\\.\\./.*)\\.js$": "$1.ts",
      "(\\./.*)\\.js$": "$1.ts",
    },
  },
});
