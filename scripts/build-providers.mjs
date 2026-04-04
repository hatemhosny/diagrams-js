#!/usr/bin/env node

/**
 * Build script for providers
 * Compiles all TypeScript provider files to JavaScript using esbuild
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");
const SRC_PROVIDERS_DIR = path.join(ROOT_DIR, "src", "providers");
const DIST_PROVIDERS_DIR = path.join(ROOT_DIR, "dist", "providers");

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
  console.log(`Building ${provider}...`);

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
        external: [
          "../../Node.js",
          "../../../Node.js",
          "../../../../Node.js",
          "../*.mjs",
          "../../*.mjs",
          "../../../*.mjs",
        ],
      });

      // Rewrite imports to point to the main bundle
      const outFile = path.join(outdir, file.replace(".ts", ".js"));
      let content = fs.readFileSync(outFile, "utf-8");

      // Replace imports from ../../Node.js to point to the main bundle
      content = content.replace(/from\s+["']\.\.\/\.\.\/Node\.js["']/g, 'from "../../index.mjs"');

      // Replace imports from ../../../Node.js to point to main bundle
      content = content.replace(
        /from\s+["']\.\.\/\.\.\/\.\.\/Node\.js["']/g,
        'from "../../../index.mjs"',
      );

      // Replace imports from ../../../../Node.js to point to main bundle
      content = content.replace(
        /from\s+["']\.\.\/\.\.\/\.\.\/\.\.\/Node\.js["']/g,
        'from "../../../../index.mjs"',
      );

      fs.writeFileSync(outFile, content);
      console.log(`  ✓ Built ${file}`);
    } catch (err) {
      console.error(`  ✗ Failed to build ${file}: ${err.message}`);
    }
  }

  console.log(`  ✓ ${provider} built\n`);
}

/**
 * Build providers index
 */
async function buildProvidersIndex() {
  console.log("Building providers index...");

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
    console.log("  ✓ providers/index.js built\n");
  } catch (err) {
    console.error(`  ✗ Failed to build index: ${err.message}\n`);
  }
}

/**
 * Generate package.json exports
 */
function generateExports() {
  console.log("Generating package.json exports...\n");

  const exports = {
    ".": {
      import: "./dist/index.mjs",
      types: "./dist/index.d.mts",
    },
    "./package.json": "./package.json",
  };

  const providers = getProviders();

  for (const provider of providers) {
    const providerDir = path.join(SRC_PROVIDERS_DIR, provider);
    if (!fs.existsSync(providerDir)) continue;

    // Provider index
    exports[`./providers/${provider}`] = {
      import: `./dist/providers/${provider}/index.js`,
      types: `./src/providers/${provider}/index.ts`,
    };

    // Provider service modules
    const files = fs.readdirSync(providerDir);
    for (const file of files) {
      if (file.endsWith(".ts") && file !== "index.ts") {
        const serviceName = file.replace(".ts", "");
        exports[`./providers/${provider}/${serviceName}`] = {
          import: `./dist/providers/${provider}/${serviceName}.js`,
          types: `./src/providers/${provider}/${file}`,
        };
      }
    }
  }

  const output = JSON.stringify({ exports }, null, 2);
  fs.writeFileSync(path.join(ROOT_DIR, "package-exports.json"), output);

  console.log("✓ Exports written to package-exports.json");
  console.log("\nCopy the 'exports' field into your package.json to enable:");
  console.log('  import { EC2 } from "diagrams-ts/providers/aws/compute"');
}

/**
 * Main build function
 */
async function main() {
  console.log("Building providers...\n");

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

  // Generate exports
  generateExports();

  console.log("\n✓ All providers built successfully!");
  console.log(`\nBuilt files are in: ${DIST_PROVIDERS_DIR}`);
}

main().catch(console.error);
