---
name: diagrams-js/json-serialization
description: >
  JSON export and import for diagrams. Serialize diagrams to JSON for cloud architecture provisioning,
  infrastructure-as-code integration, and tool interoperability. Import JSON with automatic icon resolution.
type: core
library: diagrams-js
library_version: "0.0.9"
requires:
  - diagrams-js/getting-started
  - diagrams-js/provider-nodes
sources:
  - "hatemhosny/diagrams-js:docs/docs/guides/json-serialization.mdx"
  - "hatemhosny/diagrams-js:src/json.ts"
---

This skill builds on diagrams-js/getting-started and diagrams-js/provider-nodes. Read them first for foundational concepts.

# diagrams-js — JSON Serialization

Export diagrams to JSON format and import them back. Enables cloud architecture provisioning, infrastructure-as-code integration, version control, and tool interoperability. SVG output also supports round-trip serialization via embedded metadata.

## Setup

```typescript
import { Diagram } from "diagrams-js";
import { EC2 } from "diagrams-js/aws/compute";

const diagram = Diagram("My Architecture");
diagram.add(EC2("Server"));

// Export to JSON
const json = diagram.toJSON();
```

## Core Patterns

### Export to JSON

```typescript
const diagram = Diagram("Web Architecture", {
  direction: "TB",
  theme: "pastel",
});

const web = diagram.add(EC2("Web Server"));
const db = diagram.add(RDS("Database"));
web.to(db);

// Serialize to JSON
const json = diagram.toJSON();

// Save to file
import { writeFileSync } from "fs";
writeFileSync("diagram.json", JSON.stringify(json, null, 2));
```

### Import from JSON

```typescript
import { Diagram } from "diagrams-js";

const json = {
  name: "My Architecture",
  nodes: [
    {
      id: "web",
      label: "Web Server",
      provider: "aws",
      service: "compute",
      type: "EC2",
    },
    {
      id: "db",
      label: "Database",
      provider: "aws",
      service: "database",
      type: "RDS",
    },
  ],
  edges: [{ from: "web", to: "db", label: "SQL" }],
};

const diagram = await Diagram.fromJSON(json);
const svg = await diagram.render();
```

### Import from JSON String

```typescript
const jsonString = readFileSync("diagram.json", "utf8");
const diagram = await Diagram.fromJSON(jsonString);
```

### JSON Structure

```json
{
  "$schema": "https://diagrams-js.hatemhosny.dev/schema/diagram.json",
  "name": "Architecture",
  "direction": "TB",
  "theme": "pastel",
  "nodes": [
    {
      "id": "n1",
      "label": "Web Server",
      "provider": "aws",
      "service": "compute",
      "type": "EC2"
    }
  ],
  "edges": [
    {
      "from": "n1",
      "to": "n2",
      "label": "HTTPS",
      "direction": "forward"
    }
  ],
  "clusters": [
    {
      "label": "Public Subnet",
      "nodes": ["n1"],
      "clusters": []
    }
  ]
}
```

### Infrastructure as Code Integration

Generate diagrams from infrastructure definitions:

```typescript
// Terraform/CDK/pulumi state
const infrastructure = {
  resources: [
    { type: "aws_instance", name: "web", subnet: "public" },
    { type: "aws_db_instance", name: "db", subnet: "private" },
  ],
};

// Convert to diagram JSON
const json = {
  name: "Infrastructure",
  nodes: infrastructure.resources.map((r) => ({
    id: r.name,
    label: r.name,
    provider: "aws",
    service: getService(r.type),
    type: getResourceType(r.type),
  })),
};

const diagram = await Diagram.fromJSON(json);
await diagram.save("infrastructure.svg");
```

### Custom Providers Override

Override or supplement providers when importing:

```typescript
import { EC2, Lambda } from "diagrams-js/aws/compute";

const diagram = await Diagram.fromJSON(json, {
  providers: [{ EC2, Lambda }],
});
```

## Common Mistakes

### CRITICAL Forgetting to await Diagram.fromJSON()

Wrong:

```typescript
const diagram = Diagram.fromJSON(json); // Missing await
const svg = await diagram.render(); // Error: diagram is Promise
```

Correct:

```typescript
const diagram = await Diagram.fromJSON(json);
const svg = await diagram.render();
```

`Diagram.fromJSON()` is async because it dynamically loads provider modules.

Source: source code - json.ts `fromJSON` returns Promise

### HIGH Missing required 'nodes' array

Wrong:

```typescript
const diagram = await Diagram.fromJSON({ name: "Test" });
// Throws: Invalid diagram JSON: 'nodes' array is required
```

Correct:

```typescript
const diagram = await Diagram.fromJSON({
  name: "Test",
  nodes: [], // Required, even if empty
});
```

Source: source code - json.ts validation

### MEDIUM Assuming iconUrl is required for icons

Wrong:

```typescript
const json = {
  nodes: [{ id: "web", label: "Server", iconUrl: "data:image/png;base64,..." }],
};
// Works but embeds large data URLs
```

Correct:

```typescript
const json = {
  nodes: [
    {
      id: "web",
      label: "Server",
      provider: "aws",
      service: "compute",
      type: "EC2",
    },
  ],
};
// Icons resolved from provider/service/type - clean JSON
```

Use provider/service/type fields for automatic icon resolution. Avoid embedding icon data URLs unless using Custom nodes.

Source: source code - provider-loader.ts dynamic imports

## SVG Serialization (Alternative)

In addition to JSON, diagrams can be serialized through SVG. Every SVG produced by `diagram.render()` automatically embeds the full diagram metadata:

```typescript
const diagram = Diagram("Web Architecture");
diagram.add(EC2("Web Server"));

// SVG contains embedded metadata by default
const svg = await diagram.render();

// Re-import directly from SVG
const restored = await Diagram.fromSVG(svg);
```

Use SVG serialization when you want a single file that is both a visual diagram and an editable data source. Use `embedData: false` to generate a clean SVG without metadata.

## See also

- diagrams-js/rendering-export — Output formats and rendering
- diagrams-js/provider-nodes — Using cloud provider nodes
- diagrams-js/diagram-configuration — Diagram options and themes
