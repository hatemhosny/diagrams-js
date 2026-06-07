/**
 * Compare resources between diagrams-js and diagrams-py repositories.
 * Exits with code 1 if there are new or updated files, 0 otherwise.
 *
 * Usage:
 *   node scripts/compare-resources.mjs [js-dir] [py-dir] [--output <file>]
 *
 * Defaults:
 *   js-dir: ./resources
 *   py-dir: ./diagrams-py/resources
 */

import { existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from "fs";
import { dirname, join, relative, resolve } from "path";

/**
 * Recursively collect all files under a directory, returning a map of
 * relative paths (forward slashes) to file sizes.
 */
function getResourceFiles(dir) {
  const files = {};
  const stack = [dir];

  while (stack.length > 0) {
    const current = stack.pop();
    const entries = readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (entry.isFile()) {
        const relPath = relative(dir, fullPath).replace(/\\/g, "/");
        files[relPath] = statSync(fullPath).size;
      }
    }
  }

  return files;
}

function main() {
  const args = process.argv.slice(2);

  let jsDir = resolve("./resources");
  let pyDir = resolve("./diagrams-py/resources");
  let outputFile = null;

  // Parse positional args and flags
  const positional = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--output" || args[i] === "-o") {
      outputFile = args[i + 1];
      i++;
    } else {
      positional.push(args[i]);
    }
  }

  if (positional[0]) jsDir = resolve(positional[0]);
  if (positional[1]) pyDir = resolve(positional[1]);

  if (!existsSync(pyDir)) {
    const result = {
      has_changes: false,
      new_files: [],
      updated_files: [],
      new_count: 0,
      updated_count: 0,
    };
    const json = JSON.stringify(result, null, 2);
    console.log(json);
    if (outputFile) {
      mkdirSync(dirname(outputFile), { recursive: true });
      writeFileSync(outputFile, json);
    }
    process.exit(0);
  }

  const jsFiles = getResourceFiles(jsDir);
  const pyFiles = getResourceFiles(pyDir);

  const newFiles = [];
  const updatedFiles = [];

  for (const [relPath, size] of Object.entries(pyFiles)) {
    if (!(relPath in jsFiles)) {
      newFiles.push(relPath);
    } else if (jsFiles[relPath] !== size) {
      updatedFiles.push(relPath);
    }
  }

  const result = {
    has_changes: newFiles.length > 0 || updatedFiles.length > 0,
    new_files: newFiles,
    updated_files: updatedFiles,
    new_count: newFiles.length,
    updated_count: updatedFiles.length,
  };

  const json = JSON.stringify(result, null, 2);
  console.log(json);

  if (outputFile) {
    mkdirSync(dirname(outputFile), { recursive: true });
    writeFileSync(outputFile, json);
  }

  process.exit(result.has_changes ? 1 : 0);
}

main();
