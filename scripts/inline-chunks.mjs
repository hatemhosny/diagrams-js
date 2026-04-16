#!/usr/bin/env node

/**
 * Post-build script to convert chunk imports to data URLs
 * This embeds the chunk as a base64 data URL instead of a relative path
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");
const DIST_DIR = path.join(ROOT_DIR, "dist");

/**
 * Convert chunk files to data URLs in the main bundle
 */
function chunksToDataUrls() {
  const indexPath = path.join(DIST_DIR, "index.js");

  if (!fs.existsSync(indexPath)) {
    console.error("index.js not found in dist/");
    process.exit(1);
  }

  let indexContent = fs.readFileSync(indexPath, "utf-8");

  // Find chunk imports (e.g., import{t as e}from"./chunk-XXXX.js";)
  const chunkImportRegex = /from["']\.\/chunk-([^"']+\.js)["'];?/g;

  let match;
  let chunksProcessed = 0;

  while ((match = chunkImportRegex.exec(indexContent)) !== null) {
    const fullMatch = match[0];
    const chunkFileName = match[1];
    const chunkName = "chunk-" + chunkFileName;
    const chunkPath = path.join(DIST_DIR, chunkName);

    if (!fs.existsSync(chunkPath)) {
      console.warn(`⚠ Chunk file not found: ${chunkName}`);
      continue;
    }

    // Read chunk content and convert to base64 data URL
    const chunkContent = fs.readFileSync(chunkPath, "utf-8");
    const base64Content = Buffer.from(chunkContent, "utf-8").toString("base64");
    const dataUrl = `data:application/javascript;base64,${base64Content}`;

    // Replace the relative import with the data URL
    const newImport = `from"${dataUrl}";`;
    indexContent = indexContent.replace(fullMatch, newImport);

    // Delete the chunk file since it's now embedded
    fs.unlinkSync(chunkPath);

    chunksProcessed++;
    console.log(
      `✓ Converted ${chunkName} to data URL (${Math.round((dataUrl.length / 1024) * 100) / 100} kB)`,
    );
  }

  // Write the updated index.js
  fs.writeFileSync(indexPath, indexContent);

  if (chunksProcessed > 0) {
    console.log(`✓ Converted ${chunksProcessed} chunk file(s) to data URLs`);
  } else {
    console.log("ℹ No chunk files found to process");
  }
}

chunksToDataUrls();
