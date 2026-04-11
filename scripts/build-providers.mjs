#!/usr/bin/env node

/**
 * Build script for providers
 * Compiles all TypeScript provider files to JavaScript using esbuild
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";
import { execSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");
const SRC_PROVIDERS_DIR = path.join(ROOT_DIR, "src", "providers");
const DIST_DIR = path.join(ROOT_DIR, "dist");
const DIST_PROVIDERS_DIR = path.join(DIST_DIR, "providers");

// Get providers list from directory
function getProviders() {
  if (!fs.existsSync(SRC_PROVIDERS_DIR)) return [];
  return fs
    .readdirSync(SRC_PROVIDERS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

/**
 * Build a single provider directory
 */
async function buildProvider(provider) {
  const srcDir = path.join(SRC_PROVIDERS_DIR, provider);
  const destDir = path.join(DIST_PROVIDERS_DIR, provider);

  if (!fs.existsSync(srcDir)) {
    console.warn(`  Warning: Source directory not found: ${srcDir}`);
    return;
  }

  // Get all .ts files
  const files = fs.readdirSync(srcDir).filter((f) => f.endsWith(".ts"));

  if (files.length === 0) {
    console.log(`  No files to build`);
    return;
  }

  // Build each file
  for (const file of files) {
    const entry = path.join(srcDir, file);
    const outdir = destDir;

    try {
      await build({
        entryPoints: [entry],
        bundle: true,
        platform: "neutral",
        format: "esm",
        target: "es2022",
        outdir,
        outExtension: { ".js": ".js" },
        loader: { ".png": "dataurl" },
        minify: true,
        sourcemap: false,
        external: ["../../Node.js", "../../index.js"],
      });

      // Rewrite imports to point to the main bundle
      const outFile = path.join(outdir, file.replace(".ts", ".js"));
      let content = fs.readFileSync(outFile, "utf-8");

      // Replace imports from ../../Node.js to point to the providers index
      // Provider index files import from ../../Node.js -> should point to ../../index.js
      content = content.replace(/from\s*["']\.\.\/\.\.\/Node\.js["']/g, 'from "../../index.js"');

      fs.writeFileSync(outFile, content);
    } catch (err) {
      console.error(`  ✗ Failed to build ${file}: ${err.message}`);
    }
  }
}

/**
 * Build providers index
 */
async function buildProvidersIndex() {
  const entry = path.join(SRC_PROVIDERS_DIR, "index.ts");
  if (!fs.existsSync(entry)) {
    console.log("  No index.ts found");
    return;
  }

  try {
    await build({
      entryPoints: [entry],
      bundle: false,
      platform: "neutral",
      format: "esm",
      target: "es2022",
      outdir: DIST_PROVIDERS_DIR,
    });
  } catch (err) {
    console.error(`  ✗ Failed to build index: ${err.message}\n`);
  }
}

async function buildTypes() {
  try {
    execSync("npx tsgo");
    await fs.promises.cp(path.join("temp", "providers"), path.join("dist", "providers"), {
      recursive: true,
    });
    await fs.promises.rm("temp", { recursive: true });
  } catch (err) {
    console.error(`  ✗ Failed to build types: ${err.message}\n`);
  }
}

/**
 * Update package.json exports
 */
function updatePackageExports() {
  const packageJsonPath = path.join(ROOT_DIR, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

  // Start with core exports
  const exports = {
    ".": {
      import: "./dist/index.js",
      types: "./dist/index.d.ts",
    },
    "./package.json": "./package.json",
  };

  const providers = getProviders();

  for (const provider of providers) {
    const providerDir = path.join(SRC_PROVIDERS_DIR, provider);
    if (!fs.existsSync(providerDir)) continue;

    // Provider index (without /providers/ prefix for cleaner imports)
    exports[`./${provider}`] = {
      types: `./dist/providers/${provider}/index.d.ts`,
      import: `./dist/providers/${provider}/index.js`,
      browser: `./dist/providers/${provider}/index.js`,
      default: `./dist/providers/${provider}/index.js`,
    };

    // Provider service modules (without /providers/ prefix)
    const files = fs.readdirSync(providerDir);
    for (const file of files) {
      if (file.endsWith(".ts") && file !== "index.ts") {
        const serviceName = file.replace(".ts", "");
        exports[`./${provider}/${serviceName}`] = {
          types: `./dist/providers/${provider}/${file.replace(".ts", ".d.ts")}`,
          import: `./dist/providers/${provider}/${serviceName}.js`,
          browser: `./dist/providers/${provider}/${serviceName}.js`,
          default: `./dist/providers/${provider}/${serviceName}.js`,
        };
      }
    }
  }

  // Update package.json
  packageJson.exports = exports;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");

  console.log("✓ package.json exports updated");
  console.log(`  Added ${Object.keys(exports).length - 2} provider exports`);
}

/**
 * Main build function
 */
async function main() {
  // Ensure dist/providers directory exists
  if (!fs.existsSync(DIST_PROVIDERS_DIR)) {
    fs.mkdirSync(DIST_PROVIDERS_DIR, { recursive: true });
  }

  const providers = getProviders();

  // Build each provider
  for (const provider of providers) {
    await buildProvider(provider);
  }

  // Build index
  await buildProvidersIndex();

  // Build types
  await buildTypes();

  // Update package.json exports
  updatePackageExports();

  console.log("\n✓ All providers built successfully!");
  console.log(`  Output: ${DIST_PROVIDERS_DIR}`);
}

main().catch(console.error);
