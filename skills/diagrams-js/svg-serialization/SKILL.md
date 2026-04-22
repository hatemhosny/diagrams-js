---
name: diagrams-js/svg-serialization
description: >
  SVG export and import for diagrams. Render diagrams to SVG with embedded metadata for round-trip
  serialization. Import previously exported SVG images back into editable diagrams.
  Alternative to JSON serialization with self-contained visual + data format.
type: core
library: diagrams-js
library_version: "0.0.9"
requires:
  - diagrams-js/getting-started
  - diagrams-js/provider-nodes
sources:
  - "hatemhosny/diagrams-js:docs/docs/guides/rendering.mdx"
  - "hatemhosny/diagrams-js:docs/docs/guides/json.mdx"
  - "hatemhosny/diagrams-js:src/plugins/built-in/svg.ts"
---

This skill builds on diagrams-js/getting-started and diagrams-js/provider-nodes. Read them first for foundational concepts.

# diagrams-js — SVG Serialization

Export diagrams to SVG format with embedded metadata and import them back. SVG serves as both a visual image and a self-contained data format, enabling round-trip editing without separate JSON files.

## Setup

```typescript
import { Diagram } from "diagrams-js";
import { EC2 } from "diagrams-js/aws/compute";

const diagram = Diagram("My Architecture");
diagram.add(EC2("Server"));

// Render to SVG (includes embedded metadata by default)
const svg = await diagram.render();
```

## Core Patterns

### Export to SVG

```typescript
const diagram = Diagram("Web Architecture", {
  direction: "TB",
  theme: "pastel",
});

const web = diagram.add(EC2("Web Server"));
const db = diagram.add(RDS("Database"));
web.to(db);

// Render to SVG with embedded metadata
const svg = await diagram.render();

// Or use the explicit SVG exporter
const svg2 = await diagram.export("svg");

// Save to file
await diagram.save("architecture.svg");
```

### Import from SVG

Restore a diagram from an SVG string using the static `Diagram.fromSVG()` method:

```typescript
import { Diagram } from "diagrams-js";

const svg = await fs.readFile("diagram.svg", "utf8");

// Restore the full diagram with all nodes, edges, and options
const diagram = await Diagram.fromSVG(svg);
const restoredSvg = await diagram.render();
```

### Merge SVG into Existing Diagram

Import an SVG into an existing diagram via the plugin system:

```typescript
const diagram = Diagram("Merged Architecture");
await diagram.import(svgString, "svg");
```

## SVG Data Attributes

The embedded metadata includes:

- **`data-diagram-json`** (root `<svg>`): Base64-encoded full diagram JSON
- **`data-diagram-version`**: Format version for compatibility
- **`data-node-id`**, **`data-node-label`**: Per-node identifiers
- **`data-node-provider`**, **`data-node-service`**, **`data-node-type`**: Provider metadata
- **`data-node-metadata`**: Base64-encoded custom metadata
- **`data-cluster-label`**, **`data-cluster-nodes`**: Cluster information

These attributes enable DOM querying and third-party tooling.

## Clean SVG Without Metadata

To generate an SVG without embedded data:

```typescript
const cleanSvg = await diagram.render({ embedData: false });
```

This is useful when:

- Distributing diagrams to external parties
- Embedding in contexts where smaller file size matters
- Publishing to documentation where metadata is unnecessary

## Round-trip Consistency

SVG serialization preserves all diagram data:

```typescript
const original = Diagram("Test", { direction: "TB", theme: "blues" });
original.add(EC2("Server", { nodeId: "srv" }));
original.cluster("VPC").add(EC2("Web"));

// Export as SVG
const svg = await original.render();

// Import back
const restored = await Diagram.fromSVG(svg);

// Verify equivalence
const json1 = original.toJSON();
const json2 = restored.toJSON();
// json1 === json2
```

## Comparison: JSON vs SVG Serialization

| Feature        | JSON                  | SVG                         |
| -------------- | --------------------- | --------------------------- |
| Human-readable | Yes                   | Partial (markup)            |
| Visual preview | No                    | Yes (it's the image)        |
| File size      | Small                 | Larger (contains image)     |
| DOM queryable  | No                    | Yes (data attributes)       |
| Round-trip     | Yes                   | Yes                         |
| Best for       | Version control, APIs | Distribution, documentation |

## Common Mistakes

### CRITICAL Trying to import plain SVG without embedded data

Wrong:

```typescript
const plainSvg = `<svg xmlns="http://www.w3.org/2000/svg"><text>Hello</text></svg>`;
const diagram = await Diagram.fromSVG(plainSvg);
// Throws: Invalid diagram SVG: missing or corrupted embedded diagram data
```

Correct:

```typescript
// Only SVGs exported/rendered by diagrams-js can be imported
const svg = await diagram.render();
const restored = await Diagram.fromSVG(svg);
```

Source: source code - svg.ts `extractDiagramData` validation

### HIGH Assuming embedData defaults to false

Wrong:

```typescript
const svg = await diagram.render();
// Surprised that SVG contains visible data attributes?
// embedData defaults to true
```

Correct:

```typescript
// Default behavior: embed metadata
const svg = await diagram.render(); // Contains data-diagram-json

// Opt-out when needed
const clean = await diagram.render({ embedData: false });
```

Source: source code - Diagram.ts render() embedData check

### MEDIUM Using diagram.export("svg") expecting different output from render()

Wrong:

```typescript
const rendered = await diagram.render();
const exported = await diagram.export("svg");
// These are identical; export just calls render({ format: "svg" })
```

Correct:

```typescript
// Both produce the same SVG with embedded metadata
const svg = await diagram.render();
// Use render() directly; export is a convenience for plugin consistency
```

Source: source code - svg.ts exporter implementation

## See also

- diagrams-js/json-serialization — JSON export/import guide
- diagrams-js/rendering-export — Output formats and rendering options
- diagrams-js/diagrams-js-plugin-system — Plugin architecture
