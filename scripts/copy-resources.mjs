#!/usr/bin/env node
/**
 * Script to copy resources from diagrams-js to docs static folder
 * This ensures icons are available for the documentation website
 */

import { copyFileSync, mkdirSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const sourceDir = join(__dirname, "..", "resources");
const targetDir = join(__dirname, "..", "docs", "static", "resources");

function copyRecursive(src, dest) {
  const stat = statSync(src);

  if (stat.isDirectory()) {
    mkdirSync(dest, { recursive: true });
    const entries = readdirSync(src);
    for (const entry of entries) {
      copyRecursive(join(src, entry), join(dest, entry));
    }
  } else {
    copyFileSync(src, dest);
  }
}

console.log("Copying resources to docs/static/resources...");
copyRecursive(sourceDir, targetDir);
console.log("Resources copied successfully!");

const libSrcDir = join(__dirname, "..", "dist");
const libTargetDir = join(__dirname, "..", "docs", "static", "lib");

console.log("Copying library to docs/static/lib...");
copyRecursive(libSrcDir, libTargetDir);
console.log("Library copied successfully!");
