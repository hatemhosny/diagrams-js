#!/usr/bin/env node

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { PROVIDERS, UPPER_WORDS, TITLE_WORDS, ALIASES, type Provider } from "./config.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");
const RESOURCES_DIR = path.join(ROOT_DIR, "resources");
const PROVIDERS_DIR = path.join(ROOT_DIR, "src", "providers");

function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("");
}

function upOrTitle(provider: string, word: string): string {
  const upperWords = UPPER_WORDS[provider] || [];
  const titleWords = TITLE_WORDS[provider] || {};

  if (upperWords.includes(word.toLowerCase())) {
    return word.toUpperCase();
  }
  if (titleWords[word.toLowerCase()]) {
    return titleWords[word.toLowerCase()];
  }
  return toPascalCase(word);
}

function generateClassName(provider: string, filename: string): string {
  const base = path.basename(filename, ".png");
  const parts = base.split("-");
  return parts.map((part) => upOrTitle(provider, part)).join("");
}

function generateProviderIndex(provider: string): string {
  const pascalProvider = toPascalCase(provider);

  return `import { Node } from "../../Node.js";

export function _${pascalProvider}(label?: string, options?: Record<string, unknown>) {
  const node = Node(label ?? "${pascalProvider}", options);
  (node as unknown as Record<string, unknown>)["~provider"] = "${provider}";
  (node as unknown as Record<string, unknown>)["~iconDir"] = "${provider}";
  return node;
}

export function ${pascalProvider}(label?: string, options?: Record<string, unknown>) {
  const node = _${pascalProvider}(label ?? "${pascalProvider}", options);
  (node as unknown as Record<string, unknown>)["~icon"] = "${provider}.png";
  return node;
}
`;
}

function generateModule(provider: string, serviceType: string, iconFiles: string[]): string {
  const pascalProvider = toPascalCase(provider);
  const pascalServiceType = toPascalCase(serviceType);

  const classMetas = iconFiles
    .filter((file) => !file.includes("rounded"))
    .map((file) => ({
      name: generateClassName(provider, file),
      icon: file,
      importName: file.replace(/\.[^/.]+$/, "").replace(/[^a-zA-Z0-9]/g, "_"),
    }));

  const aliases = ALIASES[provider]?.[serviceType] || {};

  // Generate imports for all icons
  let code = `import { _${pascalProvider} } from "./index.js";
`;

  for (const meta of classMetas) {
    code += `import ${meta.importName}Icon from "../../../resources/${provider}/${serviceType}/${meta.icon}";\n`;
  }

  code += `
function _${pascalServiceType}(label?: string, options?: Record<string, unknown>) {
  const node = _${pascalProvider}(label, options);
  (node as unknown as Record<string, unknown>)["~type"] = "${serviceType}";
  return node;
}

`;

  for (const meta of classMetas) {
    code += `export function ${meta.name}(label?: string, options?: Record<string, unknown>) {
  const node = _${pascalServiceType}(label ?? "${meta.name}", options);
  (node as unknown as Record<string, unknown>)["~resource"] = "${meta.name}";
  (node as unknown as Record<string, unknown>)["~iconDataUrl"] = ${meta.importName}Icon;
  return node;
}

`;
  }

  const aliasEntries = Object.entries(aliases).filter(([className, alias]) => className !== alias);
  if (aliasEntries.length > 0) {
    code += "// Aliases\n";
    for (const [className, alias] of aliasEntries) {
      code += `export const ${alias} = ${className};\n`;
    }
    code += "\n";
  }

  return code;
}

function generateProvider(provider: Provider): void {
  console.log(`Generating ${provider}...`);

  const providerDir = path.join(PROVIDERS_DIR, provider);
  const resourceDir = path.join(RESOURCES_DIR, provider);

  if (!fs.existsSync(resourceDir)) {
    console.warn(`  Warning: Resource directory not found: ${resourceDir}`);
    return;
  }

  if (!fs.existsSync(providerDir)) {
    fs.mkdirSync(providerDir, { recursive: true });
  }

  const indexContent = generateProviderIndex(provider);
  fs.writeFileSync(path.join(providerDir, "index.ts"), indexContent);
  console.log(`  Created index.ts`);

  const oldInitPath = path.join(providerDir, "__init__.ts");
  if (fs.existsSync(oldInitPath)) {
    fs.unlinkSync(oldInitPath);
  }

  const entries = fs.readdirSync(resourceDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const serviceType = entry.name;
      const serviceDir = path.join(resourceDir, serviceType);

      const files = fs.readdirSync(serviceDir);
      const pngFiles = files.filter((f) => f.endsWith(".png")).sort();

      if (pngFiles.length === 0) {
        continue;
      }

      const moduleContent = generateModule(provider, serviceType, pngFiles);
      const moduleFile = path.join(providerDir, `${serviceType}.ts`);
      fs.writeFileSync(moduleFile, moduleContent);
      console.log(`  Created ${serviceType}.ts (${pngFiles.length} classes)`);
    }
  }

  console.log(`  ✓ ${provider} generated successfully`);
}

function generateProvidersIndex(): void {
  let code = `// Auto-generated providers index
// Do not edit manually

export * from "../index.js";
`;

  const indexPath = path.join(PROVIDERS_DIR, "index.ts");
  fs.writeFileSync(indexPath, code);
  console.log("Generated providers/index.ts");
}

interface ResourceInfo {
  provider: string;
  type: string;
  resource: string;
}

function generateResourcesList(): void {
  console.log("Generating resources-list.ts...");

  const allResources: ResourceInfo[] = [];

  for (const provider of PROVIDERS) {
    const resourceDir = path.join(RESOURCES_DIR, provider);

    if (!fs.existsSync(resourceDir)) {
      continue;
    }

    const entries = fs.readdirSync(resourceDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const serviceType = entry.name;
        const serviceDir = path.join(resourceDir, serviceType);

        const files = fs.readdirSync(serviceDir);
        const pngFiles = files.filter((f) => f.endsWith(".png") && !f.includes("rounded")).sort();

        for (const file of pngFiles) {
          const resourceName = generateClassName(provider, file);
          allResources.push({
            provider,
            type: serviceType,
            resource: resourceName,
          });
        }
      }
    }
  }

  // Build index for O(1) exact match lookups
  const indexEntries: Array<[string, number]> = [];
  allResources.forEach((r, idx) => {
    indexEntries.push([r.resource.toLowerCase(), idx]);
  });

  let code = `// Auto-generated resources-list module
// Do not edit manually

export interface ResourceInfo {
  provider: string;
  type: string;
  resource: string;
}

export const allResources: ResourceInfo[] = ${JSON.stringify(allResources, null, 2)};

// Index for O(1) exact match lookups
const resourceIndex: Map<string, number> = new Map(${JSON.stringify(indexEntries)});

export function findResource(query: string): ResourceInfo[] {
  const lowerQuery = query.toLowerCase();

  // Check for exact match first (O(1) lookup)
  const exactMatchIndex = resourceIndex.get(lowerQuery);
  if (exactMatchIndex !== undefined) {
    return [allResources[exactMatchIndex]];
  }

  // Fall back to partial match search
  return allResources.filter((r) =>
    r.resource.toLowerCase().includes(lowerQuery)
  );
}
`;

  const filePath = path.join(PROVIDERS_DIR, "resources-list.ts");
  fs.writeFileSync(filePath, code);
  console.log(`  Created resources-list.ts (${allResources.length} resources)`);
}

function main(): void {
  const args = process.argv.slice(2);

  if (!fs.existsSync(PROVIDERS_DIR)) {
    fs.mkdirSync(PROVIDERS_DIR, { recursive: true });
  }

  if (args.length === 0) {
    console.log("Generating all providers...\n");
    for (const provider of PROVIDERS) {
      generateProvider(provider);
      console.log();
    }
    generateProvidersIndex();
    generateResourcesList();
    console.log("\n✓ All providers generated successfully!");
  } else {
    const provider = args[0];
    if (!PROVIDERS.includes(provider as Provider)) {
      console.error(`Error: Unknown provider "${provider}"`);
      console.error(`Valid providers: ${PROVIDERS.join(", ")}`);
      process.exit(1);
    }
    generateProvider(provider as Provider);
    generateProvidersIndex();
    generateResourcesList();
  }
}

main();
