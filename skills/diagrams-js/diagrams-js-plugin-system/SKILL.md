---
name: diagrams-js/diagrams-js-plugin-system
description: >-
  Extend diagrams-js with custom import/export formats, metadata providers, and hooks.
  Create plugins for Docker Compose, Terraform, cloud provider metadata, and more.
type: feature
library: diagrams-js
---

# diagrams-js Plugin System

The diagrams-js plugin system enables extending the library with custom:

- **Importers**: Import from external formats (Docker Compose, Terraform, etc.)
- **Exporters**: Export to external formats
- **Metadata Providers**: Attach cloud provider metadata (pricing, specs) to nodes
- **Hooks**: Execute custom code at lifecycle events

## When to Use This Skill

Use this skill when you need to:

- Import diagrams from infrastructure-as-code files (Terraform, CloudFormation, etc.)
- Export diagrams to deployment configurations
- Attach cloud provider metadata (AWS pricing, Azure specs, etc.) to nodes
- Extend diagrams-js functionality with custom formats or behaviors
- Create integrations with CI/CD pipelines or documentation tools

## Quick Start

### Creating a Simple Plugin

```typescript
// Create a custom exporter plugin
// Note: Use context.lib to access diagrams-js exports instead of importing
const myExporter = () => ({
  name: "my-exporter",
  version: "1.0.0",
  apiVersion: "1.0",
  runtimeSupport: {
    node: true,
    browser: true,
    deno: true,
    bun: true,
  },
  capabilities: [
    {
      type: "exporter",
      name: "my-format",
      extension: ".my",
      mimeType: "text/plain",
      export: async (diagram, context) => {
        // Access library exports via context.lib
        const { Node, Edge } = context.lib;
        return `Diagram: ${diagram.name}`;
      },
    },
  ],
});

// Use the plugin (import only needed for Diagram creation)
import { Diagram } from "diagrams-js";

const diagram = Diagram("My Architecture");

// Register plugins explicitly
await diagram.registerPlugins([myExporter]);

// Export to custom format
const result = await diagram.export("my-format");
console.log(result); // "Diagram: My Architecture"
```

### Built-in Plugins

Built-in plugins (JSON and SVG) are automatically registered when you call plugin-related methods:

```typescript
const diagram = Diagram("My Architecture");

// Built-in JSON plugin auto-registers on first use
const json = await diagram.export("json"); // Works without explicit registration
const json2 = diagram.toJSON(); // Also works

// Built-in SVG plugin auto-registers on first use
const svg = await diagram.export("svg"); // Works without explicit registration
const restored = await Diagram.fromSVG(svg); // Re-import from SVG
```

## Plugin Capabilities

### Importer

Import diagrams from external formats:

```typescript
const dockerComposePlugin = () => ({
  name: "docker-compose",
  version: "1.0.0",
  apiVersion: "1.0",
  runtimeSupport: { node: true, browser: true, deno: true, bun: true },
  capabilities: [
    {
      type: "importer",
      name: "docker-compose",
      extensions: [".yml", ".yaml"],
      mimeTypes: ["text/yaml"],
      canImport: async (source) => {
        return source.includes("services:");
      },
      import: async (source, diagram, context) => {
        // Use context.loadYaml() instead of bundling yaml parser
        const yaml = await context.loadYaml();
        const compose = yaml.load(source);

        // Access Node from context.lib instead of importing
        const { Node } = context.lib;

        // Create nodes for each service
        for (const [name, service] of Object.entries(compose.services)) {
          const node = diagram.add(Node(name));
          node.metadata = { image: service.image };
        }
      },
    },
  ],
});

// Usage
const diagram = Diagram("My App");
await diagram.registerPlugins([dockerComposePlugin]);

// Import single source
await diagram.import(yamlContent, "docker-compose");

// Import multiple sources - each in its own cluster
await diagram.import([compose1, compose2, compose3], "docker-compose");
```

### Exporter

Export diagrams to external formats:

```typescript
const terraformPlugin = () => ({
  name: "terraform",
  version: "1.0.0",
  apiVersion: "1.0",
  runtimeSupport: { node: true, browser: true, deno: true, bun: true },
  capabilities: [
    {
      type: "exporter",
      name: "terraform",
      extension: ".tf",
      mimeType: "text/plain",
      export: async (diagram, context) => {
        let tf = `# Terraform generated from ${diagram.name}\n\n`;

        for (const node of diagram.toJSON().nodes) {
          tf += `resource "aws_instance" "${node.id}" {\n`;
          tf += `  # Configuration...\n`;
          tf += `}\n\n`;
        }

        return tf;
      },
    },
  ],
});

// Usage
const terraform = await diagram.export("terraform");
```

### Metadata Provider

Attach cloud provider metadata to nodes:

```typescript
const awsMetadataPlugin = () => ({
  name: "aws-metadata",
  version: "1.0.0",
  apiVersion: "1.0",
  runtimeSupport: { node: true, browser: true, deno: true, bun: true },
  capabilities: [
    {
      type: "metadata",
      provider: "aws",
      nodeTypes: ["EC2", "RDS", "Lambda"],
      getMetadata: async (nodeType, config, context) => {
        // Fetch pricing/specs from AWS API
        return {
          provider: "aws",
          specifications: {
            cpu: 4,
            memory: "16GB",
          },
          pricing: {
            hourly: 0.192,
            monthly: 140.16,
          },
        };
      },
    },
  ],
});

// Usage
const diagram = Diagram("My App");
await diagram.registerPlugins([awsMetadataPlugin]);

const ec2 = diagram.add(EC2("Web Server"));

// Attach metadata to all EC2 nodes
await diagram.attachMetadata("aws", "EC2");

// Access metadata
console.log(ec2.metadata.pricing.monthly); // 140.16
```

### Hooks

Execute code at lifecycle events:

```typescript
const loggingPlugin = () => ({
  name: "logging",
  version: "1.0.0",
  apiVersion: "1.0",
  runtimeSupport: { node: true, browser: true, deno: true, bun: true },
  capabilities: [
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
    },
  ],
});
```

#### Available Hook Events

- `before:import` / `after:import` - Import operations
- `before:export` / `after:export` - Export operations
- `before:render` / `after:render` - Rendering
- `before:serialize` / `after:deserialize` - JSON serialization
- `node:create` - Node creation
- `edge:create` - Edge creation
- `cluster:create` - Cluster creation
- `metadata:attach` - Metadata attachment

## Plugin Dependencies

Plugins can declare dependencies on other plugins:

```typescript
const advancedPlugin = () => ({
  name: "advanced",
  version: "1.0.0",
  apiVersion: "1.0",
  runtimeSupport: { node: true, browser: true, deno: true, bun: true },
  dependencies: ["base-plugin"], // Depends on base-plugin
  capabilities: [
    {
      type: "exporter",
      name: "advanced-format",
      extension: ".adv",
      mimeType: "text/plain",
      export: async (diagram, context) => {
        // Can access base-plugin's capabilities
        const baseExporter = context.getExporter("base-format");
        const base = await baseExporter.export(diagram, context);
        return `Advanced: ${base}`;
      },
    },
  ],
});

// Register in correct order (dependencies first)
const diagram = Diagram("Test");
await diagram.registerPlugins([basePlugin, advancedPlugin]);
```

## Plugin Registry

Access the plugin registry to query capabilities:

```typescript
const diagram = Diagram("Test");
await diagram.registerPlugins([myPlugin]);

// List all capabilities
const caps = diagram.registry.listCapabilities();
console.log(caps.importers); // ["docker-compose", ...]
console.log(caps.exporters); // ["terraform", "json", ...]

// Get specific plugin
const importer = diagram.registry.getImporter("docker-compose");
const exporter = diagram.registry.getExporter("terraform");
const provider = diagram.registry.getMetadataProvider("aws");

// List all registered plugins
const plugins = diagram.registry.listPlugins();
```

## Best Practices

### 1. Use Factory Functions

Always create plugins as factory functions:

```typescript
// ✅ Good
const myPlugin = (config) => ({
  name: "my-plugin",
  // ...
});

// ❌ Avoid
const myPlugin = {
  name: "my-plugin",
  // ...
};
```

### 2. Declare Runtime Support

Always declare which runtimes your plugin supports:

```typescript
runtimeSupport: {
  node: true,      // Works in Node.js
  browser: false,  // Doesn't work in browsers (uses fs)
  deno: false,     // Not tested in Deno
  bun: false,      // Not tested in Bun
}
```

### 3. Use Context-Provided Utilities

For YAML parsing and other common needs, use the utilities provided in the plugin context instead of bundling your own dependencies:

```typescript
// ✅ Good: Use context.loadYaml() - no bundling needed
import: async (source, diagram, context) => {
  const yaml = await context.loadYaml();
  const parsed = yaml.load(source);
  // ...
}

// ❌ Avoid: Bundling your own YAML parser
import: async (source, diagram, context) => {
  const yaml = await import("yaml"); // Adds bundle size
  const parsed = yaml.parse(source);
  // ...
}
```

This approach:

- Reduces plugin bundle size
- Ensures consistent parsing across plugins
- Works across all runtimes automatically

### 4. Validate Configuration

Use `requiredConfig` and `initialize`:

```typescript
const apiPlugin = () => ({
  name: "api-plugin",
  version: "1.0.0",
  apiVersion: "1.0",
  requiredConfig: ["apiKey", "region"],
  async initialize(config, context) {
    if (!config.apiKey) {
      throw new Error("apiKey is required");
    }
    // Set up API client
  },
  // ...
});

// Usage with config
const diagram = Diagram("Test");
await diagram.registerPlugins([[apiPlugin, { apiKey: "xxx", region: "us-west-2" }]]);
```

## Common Patterns

### Docker Compose Import

```typescript
const dockerComposePlugin = () => ({
  name: "docker-compose",
  version: "1.0.0",
  apiVersion: "1.0",
  runtimeSupport: { node: true, browser: true, deno: true, bun: true },
  capabilities: [
    {
      type: "importer",
      name: "docker-compose",
      extensions: [".yml", ".yaml"],
      canImport: async (source) => {
        return source.includes("services:");
      },
      import: async (source, diagram, context) => {
        // Use context.loadYaml() instead of bundling yaml parser
        const yaml = await context.loadYaml();
        const compose = yaml.load(source);

        // Access Node from context.lib
        const { Node } = context.lib;

        const sources = Array.isArray(source) ? source : [source];

        for (let i = 0; i < sources.length; i++) {
          const compose = yaml.load(sources[i]);

          // Multiple sources: each gets its own cluster
          if (sources.length > 1) {
            const cluster = diagram.cluster(compose.name || `compose-${i}`);

            for (const [name, service] of Object.entries(compose.services)) {
              const node = cluster.add(Node(name));
              node.metadata = { image: service.image };
            }
          } else {
            // Single source: add directly
            for (const [name, service] of Object.entries(compose.services)) {
              const node = diagram.add(Node(name));
              node.metadata = { image: service.image };
            }
          }
        }
      },
    },
  ],
});
```

### Cloud Provider Metadata

```typescript
const awsMetadataPlugin = (config) => ({
  name: "aws-metadata",
  version: "1.0.0",
  apiVersion: "1.0",
  runtimeSupport: { node: true, browser: true, deno: true, bun: true },
  requiredConfig: ["apiKey"],
  async initialize(cfg, context) {
    // Validate API key
    if (!cfg.apiKey) {
      throw new Error("AWS API key is required");
    }
  },
  capabilities: [
    {
      type: "metadata",
      provider: "aws",
      nodeTypes: ["EC2", "RDS", "Lambda", "S3"],
      getMetadata: async (nodeType, nodeConfig, context) => {
        // Fetch from AWS Pricing API
        const pricing = await fetchAWSPricing(nodeType, nodeConfig);

        return {
          provider: "aws",
          region: config.region || "us-east-1",
          instanceType: nodeConfig.instanceType,
          specifications: {
            cpu: pricing.vcpu,
            memory: pricing.memory,
            storage: pricing.storage,
          },
          pricing: {
            onDemand: pricing.onDemand,
            reserved: pricing.reserved,
            spot: pricing.spot,
          },
          availabilityZones: pricing.azs,
          compliance: ["SOC2", "PCI-DSS"],
        };
      },
    },
  ],
});
```

## Further Reading
