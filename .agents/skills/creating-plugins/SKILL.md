---
name: diagrams-js/creating-plugins
description: >-
  Create custom plugins for diagrams-js to extend import/export capabilities.
  Package structure, plugin API, best practices, and real-world examples.
  Use context.lib for runtime exports and context.loadResourcesList for resource discovery.
type: feature
library: diagrams-js
library_version: "0.2.4"
sources:
  - "hatemhosny/diagrams-js:src/plugins/types.ts"
  - "hatemhosny/plugin-docker-compose:src/index.ts"
---

# Creating diagrams-js Plugins

Create custom plugins to extend diagrams-js with import/export formats, metadata providers, and hooks. Plugins enable integration with infrastructure-as-code tools, CI/CD pipelines, and cloud providers.

## Plugin Architecture

### Core Principles

1. **Never import from `diagrams-js`** - Access runtime exports via `context.lib` to avoid multiple library instances. Type imports are allowed
2. **Use `context.loadResourcesList()`** - Dynamically discover provider icons and resources
3. **Convert to/from JSON** - Use diagrams-js JSON format as the intermediary for imports
4. **Factory Functions** - You may create plugins as factory functions if configuration may be needed

### Package Structure

```
plugin-my-format/
├── package.json          # Plugin metadata and dependencies
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Build configuration
├── README.md             # Documentation
├── src/
│   └── index.ts          # Plugin implementation
├── tests/
│   └── index.test.ts     # Test suite
└── skills/
    └── plugin-my-format/
        └── SKILL.md  # AI agent skill documentation
```

## Quick Start

### Minimal Plugin Package

```typescript
// src/index.ts
import type {
  DiagramsPlugin,
  ImporterCapability,
  ExporterCapability,
  Diagram,
  ImportContext,
  ExportContext,
} from "diagrams-js";

export interface MyPluginConfig {
  /** Optional configuration */
  format?: string;
}

export function createMyPlugin(config?: MyPluginConfig): DiagramsPlugin {
  return {
    name: "my-format",
    version: "1.0.0",
    apiVersion: "1.0",
    runtimeSupport: {
      node: true,
      browser: true,
      deno: true,
      bun: true,
    },
    capabilities: [
      // Importer capability
      {
        type: "importer",
        name: "my-format",
        extensions: [".my"],
        mimeTypes: ["text/plain"],

        canImport: async (source: string | string[]): Promise<boolean> => {
          const sources = Array.isArray(source) ? source : [source];
          return sources.every((s) => s.startsWith("MYFORMAT:"));
        },

        import: async (
          source: string | string[],
          diagram: Diagram,
          context: ImportContext,
        ): Promise<void> => {
          // Access diagrams-js exports via context.lib - NEVER import directly
          const { Node } = context.lib;

          const sources = Array.isArray(source) ? source : [source];

          for (const src of sources) {
            // Parse your format
            const data = parseMyFormat(src);

            // Create nodes
            for (const item of data.items) {
              const node = diagram.add(Node(item.name));
              node.metadata = { source: item };
            }
          }
        },
      } as ImporterCapability,

      // Exporter capability
      {
        type: "exporter",
        name: "my-format",
        extension: ".my",
        mimeType: "text/plain",

        export: async (diagram: Diagram, context: ExportContext): Promise<string> => {
          const json = diagram.toJSON();
          return formatAsMyFormat(json);
        },
      } as ExporterCapability,
    ],
  };
}

// Pre-created instance for convenience
export const myPlugin = createMyPlugin();
```

### Package Configuration

```json
{
  "name": "@diagrams-js/plugin-my-format",
  "version": "1.0.0",
  "description": "My format plugin for diagrams-js",
  "keywords": ["diagrams-js", "plugin"]
  "type": "module",
  "exports": {
    ".": "./dist/index.js",
    "./package.json": "./package.json"
  },
  "files": ["dist", "LICENSE", "README.md", ".agents/skills"],
  "peerDependencies": {
    "diagrams-js": "^0.2.4"
  },
  "devDependencies": {
    "diagrams-js": "file:../diagrams-js",
    "typescript": "^6.0.2",
    "vite-plus": "^0.1.14",
    "vitest": "^3.0.0"
  },
  "scripts": {
    "build": "vp pack src/index.ts && vp check --fix",
    "test": "vp test",
    "check": "vp check"
  }
}
```

## Import/Export Best Practices

### Import: Convert to JSON Format

**Recommended approach**: Parse your format, convert to diagrams-js JSON, then use built-in JSON importer:

```typescript
import: async (source, diagram, context) => {
  // Parse your format
  const data = parseMyFormat(source);

  // Convert to diagrams-js JSON format
  const json: DiagramJSON = {
    name: data.name,
    nodes: data.items.map((item) => ({
      id: item.id,
      label: item.name,
      provider: "onprem",
      service: "container",
      type: "Docker",
      metadata: { source: item },
    })),
    edges: data.connections.map((conn) => ({
      from: conn.source,
      to: conn.target,
    })),
  };

  // Use built-in JSON importer - properly resolves icons
  await diagram.import(JSON.stringify(json), "json");
},
```

### Export: Use .export('json') Method

```typescript
export: async (diagram, context) => {
  // Get diagram as JSON
  const json = await diagram.export('json');

  // Convert to your format
  return json.nodes
    .map((n) => `${n.label}: ${n.metadata?.source?.type || "unknown"}`)
    .join("\n");
},
```

## Resource Discovery

### Using context.loadResourcesList()

Access the resource discovery system to find provider icons:

```typescript
export function createMyPlugin(config?: MyPluginConfig): DiagramsPlugin {
  let findResource: (query: string) => Array<{
    provider: string;
    type: string;
    resource: string;
  }>;

  return {
    name: "my-format",
    version: "1.0.0",
    apiVersion: "1.0",
    runtimeSupport: { node: true, browser: true, deno: true, bun: true },

    // Initialize plugin and load resource discovery
    initialize: async (_config, context) => {
      const module = await context.loadResourcesList();
      if (module?.findResource) {
        findResource = module.findResource;
      }
    },

    capabilities: [
      {
        type: "importer",
        name: "my-format",
        extensions: [".my"],
        mimeTypes: ["text/plain"],

        import: async (source, diagram, context) => {
          // Use findResource to map identifiers to provider icons
          const matches = findResource("postgres");
          // Returns: [{ provider: "onprem", type: "database", resource: "Postgresql" }, ...]

          const json: DiagramJSON = {
            name: "My Diagram",
            nodes: [
              {
                id: "db",
                label: "Database",
                // Use discovered provider info
                provider: matches[0]?.provider || "onprem",
                service: matches[0]?.type || "database",
                type: matches[0]?.resource || "Postgresql",
              },
            ],
          };

          await diagram.import(JSON.stringify(json), "json");
        },
      } as ImporterCapability,
    ],
  };
}
```

## Plugin Types

### Importer Plugin

```typescript
{
  type: "importer",
  name: "terraform",
  extensions: [".tf", ".tfvars"],
  mimeTypes: ["text/plain"],

  canImport: async (source: string | string[]): Promise<boolean> => {
    // Return true if source can be parsed as Terraform
    const sources = Array.isArray(source) ? source : [source];
    return sources.every((s) => s.includes('resource "'));
  },

  import: async (source, diagram, context) => {
    const { Node, Cluster } = context.lib;

    // Parse Terraform and create nodes/clusters
    const parsed = parseTerraform(source);

    for (const resource of parsed.resources) {
      const node = diagram.add(Node(resource.name));
      node.metadata = { terraform: resource };
    }
  },
}
```

### Exporter Plugin

```typescript
{
  type: "exporter",
  name: "kubernetes",
  extension: ".yaml",
  mimeType: "text/yaml",

  export: async (diagram, context) => {
    const json = diagram.toJSON();

    // Generate Kubernetes manifests
    const manifests = json.nodes.map((node) => ({
      apiVersion: "apps/v1",
      kind: "Deployment",
      metadata: { name: node.label },
      spec: {
        replicas: node.metadata?.replicas || 1,
        template: {
          spec: {
            containers: [{ name: node.label, image: node.metadata?.image }],
          },
        },
      },
    }));

    return YAML.stringify(manifests);
  },
}
```

### Metadata Provider Plugin

```typescript
{
  type: "metadata",
  provider: "aws",
  nodeTypes: ["EC2", "RDS", "Lambda"],

  getMetadata: async (nodeType, nodeConfig, context) => {
    // Fetch metadata from cloud provider API
    return {
      provider: "aws",
      pricing: { hourly: 0.192, monthly: 140.16 },
      specifications: { cpu: 4, memory: "16GB" },
    };
  },
}
```

### Hook Plugin

```typescript
{
  type: "hook",
  hooks: [
    {
      event: "before:export",
      handler: async (data, context) => {
        console.log(`Exporting to ${data.format}...`);
        return data;
      },
    },
    {
      event: "after:export",
      handler: async (data, context) => {
        console.log("Export complete!");
        return data;
      },
    },
  ],
}
```

## Critical Patterns

### CRITICAL: Never Import Runtime Exports

**Wrong** - Creates multiple library instances:

```typescript
import { Node, Edge, Diagram } from "diagrams-js"; // ❌ NEVER DO THIS

export const myPlugin = {
  import: async (source, diagram) => {
    const node = diagram.add(Node("name"));
  },
};
```

**Correct** - Use context.lib:

```typescript
import type { Node, Edge, Diagram } from "diagrams-js"; // ✅ Type-only import

export const myPlugin = () => ({
  import: async (source, diagram, context) => {
    const { Node } = context.lib; // ✅ Access via context
    const node = diagram.add(Node("name"));
  },
});
```

### CRITICAL: Use context.loadResourcesList()

**Wrong** - Hardcoding provider paths:

```typescript
import: async (source, diagram, context) => {
  const node: DiagramNodeJSON = {
    id: "db",
    label: "Database",
    provider: "aws", // ❌ Hardcoded
    service: "database",
    type: "Postgresql",
  };
};
```

**Correct** - Dynamic discovery:

```typescript
let findResource: (query: string) => ResourceInfo[];

export const myPlugin = () => ({
  initialize: async (_config, context) => {
    const module = await context.loadResourcesList();
    findResource = module.findResource;
  },

  import: async (source, diagram, context) => {
    const matches = findResource("postgres"); // ✅ Dynamic lookup
    const node: DiagramNodeJSON = {
      id: "db",
      label: "Database",
      provider: matches[0]?.provider || "onprem",
      service: matches[0]?.type || "database",
      type: matches[0]?.resource || "Postgresql",
    };
  },
});
```

## Real-World Example: Docker Compose Plugin

See `@diagrams-js/plugin-docker-compose` for a complete reference implementation:

```typescript
// Key patterns from docker-compose plugin:

export function createDockerComposePlugin(config?: DockerComposePluginConfig): DiagramsPlugin {
  let findResource: (query: string) => ResourceInfo[];

  return {
    name: "docker-compose",
    version: "1.0.0",
    apiVersion: "1.0",
    runtimeSupport: { node: true, browser: true, deno: true, bun: true },

    // Load resource discovery on initialization
    initialize: async (_config, context) => {
      const module = await context.loadResourcesList();
      if (module?.findResource) {
        findResource = module.findResource;
      }
    },

    capabilities: [
      {
        type: "importer",
        name: "docker-compose",
        extensions: [".yml", ".yaml"],
        mimeTypes: ["text/yaml", "application/x-yaml"],

        import: async (source, diagram, context) => {
          // Parse YAML
          const compose = yaml.load(source) as ComposeFile;

          // Convert to diagrams-js JSON
          const json: DiagramJSON = {
            name: compose.name,
            nodes: Object.entries(compose.services).map(([name, service]) => {
              // Use findResource to map image to provider icon
              const matches = findResource(service.image);

              return {
                id: name,
                label: name,
                provider: matches[0]?.provider || "onprem",
                service: matches[0]?.type || "container",
                type: matches[0]?.resource || "Docker",
                metadata: { compose: service },
              };
            }),
            edges: [],
          };

          // Import via JSON format
          await diagram.import(JSON.stringify(json), "json");
        },
      } as ImporterCapability,

      {
        type: "exporter",
        name: "docker-compose",
        extension: ".yml",
        mimeType: "text/yaml",

        export: async (diagram, context) => {
          const json = diagram.toJSON();

          // Convert to Docker Compose YAML
          const compose: ComposeFile = {
            version: "3.8",
            services: {},
          };

          for (const node of json.nodes) {
            compose.services[node.label] = {
              image: node.metadata?.compose?.image || "",
              ports: node.metadata?.compose?.ports || [],
            };
          }

          return yaml.dump(compose);
        },
      } as ExporterCapability,
    ],
  };
}
```

## Testing

```typescript
// tests/index.test.ts
import { describe, it, expect } from "vitest";
import { Diagram } from "diagrams-js";
import { createMyPlugin } from "../src/index.js";

describe("My Plugin", () => {
  it("should import from my format", async () => {
    const diagram = Diagram("Test");
    const plugin = createMyPlugin();

    await diagram.registerPlugins([plugin]);
    await diagram.import("MYFORMAT:\nname: Test\nitems:\n  - id: 1\n    name: Server", "my-format");

    const json = diagram.toJSON();
    expect(json.nodes).toHaveLength(1);
    expect(json.nodes[0].label).toBe("Server");
  });

  it("should export to my format", async () => {
    const diagram = Diagram("Test");
    const { Node } = await import("diagrams-js");

    diagram.add(Node("Server"));
    await diagram.registerPlugins([createMyPlugin()]);

    const result = await diagram.export("my-format");
    expect(result).toContain("Server");
  });
});
```

## Publishing

1. **Build**: `npm run build`
2. **Test**: `npm test`
3. **Version**: `npm version patch|minor|major`
4. **Publish**: `npm publish --access public`

### NPM Keywords for Discoverability

Add `diagrams-js` to your `package.json` keywords to make your plugin discoverable:

```json
{
  "name": "@diagrams-js/plugin-my-format",
  "keywords": ["diagrams-js", "diagrams", "architecture", "plugin", "import", "export"]
}
```

Users can then find your plugin by searching npm for `diagrams-js`.

## See Also

- `diagrams-js-plugin-system` - Plugin system overview and API
- `plugin-docker-compose` - Complete reference implementation
- diagrams-js documentation: https://diagrams-js.hatemhosny.dev
