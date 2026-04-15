---
name: diagrams-js/nodejs-integration
description: >
  Using diagrams-js in Node.js with npm installation. File system saving, PNG/JPG rendering with sharp package.
  Local icon files for Custom nodes. Buffer handling for binary output formats.
type: core
library: diagrams-js
library_version: "0.0.9"
requires:
  - diagrams-js/getting-started
sources:
  - "hatemhosny/diagrams-js:docs/docs/getting-started/installation.mdx"
  - "hatemhosny/diagrams-js:docs/docs/guides/rendering.mdx"
  - "hatemhosny/diagrams-js:README.md"
---

This skill builds on diagrams-js/getting-started. Read it first for foundational concepts.

# diagrams-js — Node.js Integration

Use diagrams-js in Node.js environments. File system operations, PNG/JPG rendering with sharp, local icon files.

## Setup

### Installation

```bash
npm install diagrams-js

# For PNG/JPG rendering
npm install sharp
```

### Basic Usage

```typescript
import { Diagram } from "diagrams-js";
import { EC2 } from "diagrams-js/aws/compute";
import { writeFileSync } from "fs";

const diagram = Diagram("My Architecture");
diagram.add(EC2("Server"));

const svg = await diagram.render();
writeFileSync("diagram.svg", svg);
```

## Core Patterns

### Save to File

```typescript
import { Diagram } from "diagrams-js";
import { writeFileSync } from "fs";

const diagram = Diagram("My Diagram");
// ... add nodes

// Save SVG
const svg = await diagram.render();
writeFileSync("output.svg", svg);

// Or use diagram.save()
await diagram.save("output.svg");
```

### Render PNG with sharp

```bash
npm install sharp
```

```typescript
import { Diagram } from "diagrams-js";
import { writeFileSync } from "fs";

const diagram = Diagram("My Diagram");
// ... add nodes

const png = await diagram.render({ format: "png" });
// Returns Uint8Array

writeFileSync("output.png", Buffer.from(png));
```

### Render JPG with sharp

```typescript
const jpg = await diagram.render({ format: "jpg" });
writeFileSync("output.jpg", Buffer.from(jpg));
```

### Local Icon Files

```typescript
import { Diagram, Custom } from "diagrams-js";

const diagram = Diagram("Custom Icons");

// Load icon from local file system
const service = diagram.add(Custom("Internal Service", "./assets/icon.png"));

const svg = await diagram.render();
```

### PNG with Custom Dimensions

```typescript
const png = await diagram.render({
  format: "png",
  width: 1200,
  height: 800,
  scale: 2,
});

writeFileSync("output.png", Buffer.from(png));
```

## Common Mistakes

### MEDIUM Writing Uint8Array directly without Buffer

Wrong:

```typescript
const png = await diagram.render({ format: "png" });
fs.writeFileSync("out.png", png); // May fail in some Node versions
```

Correct:

```typescript
const png = await diagram.render({ format: "png" });
fs.writeFileSync("out.png", Buffer.from(png));
```

fs.writeFile needs Buffer for Uint8Array in some Node.js versions. Always wrap with Buffer.from().

Source: docs/guides/rendering.mdx

## See also

- diagrams-js/rendering-export — All rendering formats and options
- diagrams-js/custom-nodes — Local file icons
