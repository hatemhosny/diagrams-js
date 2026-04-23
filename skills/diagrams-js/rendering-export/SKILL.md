---
name: diagrams-js/rendering-export
description: >
  Rendering diagrams to multiple formats. SVG output as string, PNG/JPG as Uint8Array (requires sharp in Node.js),
  DOT format as Graphviz source, JSON for serialization. Data URLs for embedding. Saving files with diagram.save().
type: core
library: diagrams-js
library_version: "0.5.0"
requires:
  - diagrams-js/getting-started
sources:
  - "hatemhosny/diagrams-js:docs/docs/guides/rendering.mdx"
  - "hatemhosny/diagrams-js:docs/docs/guides/json-serialization.mdx"
  - "hatemhosny/diagrams-js:src/Diagram.ts"
---

This skill builds on diagrams-js/getting-started. Read it first for foundational concepts.

# diagrams-js — Rendering & Export

Render diagrams to SVG, PNG, JPG, DOT, or JSON formats. SVG output embeds diagram metadata by default for round-trip import. Get data URLs for embedding. Save to files in Node.js or trigger downloads in browsers. Export/import diagrams as JSON or SVG for cloud architecture provisioning and tool integration.

## Setup

```typescript
import { Diagram } from "diagrams-js";
import { EC2 } from "diagrams-js/aws/compute";

const diagram = Diagram("My Diagram");
diagram.add(EC2("Server"));

// Render to SVG
const svg = await diagram.render();
```

## Core Patterns

### Render to SVG (Default)

```typescript
const svg = await diagram.render();
// Returns: SVG string

// Explicit format option
const svg = await diagram.render({ format: "svg" });
```

### Render to PNG (Node.js only, requires sharp)

```bash
npm install sharp
```

```typescript
import { writeFileSync } from "fs";

const png = await diagram.render({ format: "png" });
// Returns: Uint8Array

writeFileSync("diagram.png", Buffer.from(png));
```

### Render to JPG (Node.js only, requires sharp)

```typescript
const jpg = await diagram.render({ format: "jpg" });
// Returns: Uint8Array

writeFileSync("diagram.jpg", Buffer.from(jpg));
```

### Render as Data URL

```typescript
// SVG as data URL
const svgDataUrl = await diagram.render({ dataUrl: true });
// Returns: data:image/svg+xml;base64,...

// PNG as data URL
const pngDataUrl = await diagram.render({ format: "png", dataUrl: true });
// Returns: data:image/png;base64,...

// Use in HTML
const img = document.createElement("img");
img.src = svgDataUrl;
document.body.appendChild(img);
```

### Render to DOT Format

```typescript
const dot = await diagram.render({ format: "dot" });
// Returns: Graphviz DOT source as string
```

### Save to File

```typescript
// Auto-detects format from extension
await diagram.save("diagram.svg");
await diagram.save("diagram.png");

// With options
await diagram.save("diagram.png", {
  format: "png",
  width: 1200,
  height: 800,
});
```

### Export to JSON

Serialize diagrams to JSON for infrastructure-as-code, version control, or tool integration:

```typescript
// Export to JSON object
const json = diagram.toJSON();
console.log(JSON.stringify(json, null, 2));
```

JSON structure includes nodes with provider/type/resource for automatic icon resolution, edges, clusters, and all diagram options.

### Import from JSON

Restore diagrams from JSON using the static `Diagram.fromJSON()` method:

```typescript
import { Diagram } from "diagrams-js";

const json = {
  name: "My Architecture",
  nodes: [
    { id: "web", label: "Web Server", provider: "aws", type: "compute", resource: "EC2" },
    { id: "db", label: "Database", provider: "aws", type: "database", resource: "RDS" },
  ],
  edges: [{ from: "web", to: "db", label: "SQL" }],
};

const diagram = await Diagram.fromJSON(json);
const svg = await diagram.render();
```

### PNG/JPG Dimensions and Scale

```typescript
const png = await diagram.render({
  format: "png",
  width: 800, // Output width in pixels
  height: 600, // Output height in pixels
  scale: 2, // Scale factor (default: 2)
});
```

### SVG Data Embedding

By default, SVG output includes embedded diagram metadata, allowing re-import:

```typescript
const svg = await diagram.render();
// Contains data-diagram-json attribute with full diagram data

// Re-import later
const restored = await Diagram.fromSVG(svg);
```

To generate a clean SVG without embedded data:

```typescript
const cleanSvg = await diagram.render({ embedData: false });
```

### Import from SVG

Restore a diagram from a previously rendered or exported SVG:

```typescript
// Direct static method
const restored = await Diagram.fromSVG(svgString);

// Or merge into existing diagram via plugin
const diagram = Diagram("Merged");
await diagram.import(svgString, "svg");
```

### SVG DOM Manipulation

Add CSS classes and data attributes to nodes, edges, and clusters for interactive SVGs:

```typescript
const server = diagram.add(
  Node("Server", {
    className: "server-node",
    dataAttrs: { team: "backend" },
  }),
);

const db = diagram.add(
  Node("DB", {
    className: "db-node",
    dataAttrs: { team: "data" },
  }),
);

server.to(
  Edge({
    className: "critical",
    dataAttrs: { latency: "50ms" },
  }),
  db,
);

const cluster = diagram.cluster("VPC", {
  className: "prod-cluster",
  dataAttrs: { region: "us-east-1" },
});
```

After rendering and inserting into the DOM, query elements with `getElement()`:

```typescript
const svg = await diagram.render();
document.body.innerHTML = svg;

const el = server.getElement(); // queries document
el?.addEventListener("click", () => console.log("Clicked!"));

// Or query within a specific SVG string/element
const el2 = server.getElement(svg);
```

### The `after:layout` Hook

The `after:layout` hook fires after Graphviz produces the SVG string but before PNG/JPG conversion. Use it for SVG post-processing that should also affect raster output.

```typescript
import { HookEvent } from "diagrams-js";

const svgPlugin = () => ({
  name: "svg-post-processor",
  version: "1.0.0",
  apiVersion: "1.0",
  runtimeSupport: { node: true, browser: true, deno: true, bun: true },
  capabilities: [
    {
      type: "hook",
      hooks: [
        {
          event: HookEvent.AFTER_LAYOUT,
          handler: async ({ svg, diagram, format }) => {
            // Modify SVG string
            const modified = svg.replace(/stroke="#7b8894"/g, 'stroke="red"');
            return { svg: modified, diagram, format };
          },
        },
      ],
    },
  ],
});
```

## Common Mistakes

### CRITICAL Trying to render PNG without sharp installed

Wrong:

```typescript
// sharp not installed
const png = await diagram.render({ format: "png" });
// Throws: Failed to convert SVG to PNG. Make sure 'sharp' is installed
```

Correct:

```bash
npm install sharp
```

```typescript
const png = await diagram.render({ format: "png" });
```

PNG/JPG rendering requires sharp package in Node.js. Browser uses Canvas API.

Source: source code - Diagram.ts \_svgToPngNode() error message

### HIGH Assuming render() always returns string

Wrong:

```typescript
const data = await diagram.render({ format: "png" });
fs.writeFileSync("out.png", data); // Error: data is Uint8Array, not string
```

Correct:

```typescript
const data = await diagram.render({ format: "png" });
fs.writeFileSync("out.png", Buffer.from(data));
```

Returns string for SVG/DOT, Uint8Array for PNG/JPG. Always check format or use Buffer.from() for binary.

Source: source code - Diagram.ts render() overload types

### MEDIUM Calling save() without filepath in browser

Wrong:

```typescript
await diagram.save(); // Uses default filename from diagram name
```

Correct:

```typescript
await diagram.save("my-diagram.svg");
```

In browser, always specify filename for clarity. In Node.js, default filename is derived from diagram name.

Source: source code - Diagram.ts save() method

### HIGH Forgetting to await Diagram.fromJSON()

Wrong:

```typescript
const diagram = Diagram.fromJSON(json); // Missing await
const svg = await diagram.render(); // Error: diagram is a Promise
```

Correct:

```typescript
const diagram = await Diagram.fromJSON(json);
const svg = await diagram.render();
```

`Diagram.fromJSON()` is async because it dynamically loads provider modules. Always use `await`.

Source: source code - Diagram.ts `fromJSON` is async

## See also

- diagrams-js/nodejs-integration — File system operations and sharp setup
- diagrams-js/browser-integration — Browser-specific rendering and downloads
- diagrams-js/json-serialization — Complete JSON export/import guide
