import { defineConfig } from "vite-plus";

export default defineConfig({
  // staged: {
  //   "*": "vp check --fix",
  // },
  pack: {
    entry: "src/index.ts",
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
  },
  fmt: {},
  resolve: {
    alias: {
      "(\\.\\./.*)\\.js$": "$1.ts",
      "(\\./.*)\\.js$": "$1.ts",
    },
  },
});
