---
name: diagrams-js/getting-started
description: >
  Installation and first steps with diagrams-js. Install via npm/yarn/pnpm/bun or CDN.
  Create diagrams with Diagram(), add nodes with diagram.add(), render with await diagram.render().
  Covers ES modules, import maps, and basic diagram lifecycle.
type: lifecycle
library: diagrams-js
library_version: "0.0.9"
sources:
  - "hatemhosny/diagrams-js:docs/docs/getting-started/quickstart.mdx"
  - "hatemhosny/diagrams-js:docs/docs/getting-started/installation.mdx"
  - "hatemhosny/diagrams-js:src/Diagram.ts"
---

# diagrams-js — Getting Started

Create cloud architecture diagrams as code using TypeScript. 2000+ node classes across 17+ providers (AWS, Azure, GCP, Kubernetes, etc.). Works in browsers, Node.js, Deno, and Bun.

## Setup

### NPM Installation

```bash
npm install diagrams-js
```

### Browser with CDN

```html
<script type="importmap">
  {
    "imports": {
      "diagrams-js": "https://esm.sh/diagrams-js",
      "diagrams-js/": "https://esm.sh/diagrams-js/"
    }
  }
</script>

<script type="module">
  import { Diagram } from "diagrams-js";
  import { EC2 } from "diagrams-js/aws/compute";

  const diagram = Diagram("My Architecture");
  const server = diagram.add(EC2("Web Server"));
  const svg = await diagram.render();
  document.body.innerHTML = svg;
</script>
```

### Basic Diagram

```typescript
import { Diagram } from "diagrams-js";
import { EC2 } from "diagrams-js/aws/compute";
import { RDS } from "diagrams-js/aws/database";

const diagram = Diagram("Web Architecture", {
  direction: "TB", // Top to Bottom
});

const web = diagram.add(EC2("Web Server"));
const db = diagram.add(RDS("Database"));

web.to(db);

const svg = await diagram.render();
console.log(svg); // SVG string
```

## Core Patterns

### Installation with Package Managers

```bash
# npm
npm install diagrams-js

# yarn
yarn add diagrams-js

# pnpm
pnpm add diagrams-js

# bun
bun add diagrams-js
```

### First Diagram

```typescript
import { Diagram } from "diagrams-js";

const diagram = Diagram("My First Diagram");
diagram.add(Node("Server"));

const svg = await diagram.render();
```

### Using Cloud Provider Nodes

```typescript
import { Diagram } from "diagrams-js";
import { EC2, Lambda } from "diagrams-js/aws/compute";
import { RDS } from "diagrams-js/aws/database";
import { S3 } from "diagrams-js/aws/storage";
import { ALB } from "diagrams-js/aws/network";

const diagram = Diagram("AWS Architecture", { direction: "TB" });

const lb = diagram.add(ALB("Load Balancer"));
const web = diagram.add(EC2("Web Server"));
const api = diagram.add(Lambda("API"));
const db = diagram.add(RDS("Database"));
const storage = diagram.add(S3("Storage"));

lb.to(web).to(api);
api.to([db, storage]);

const svg = await diagram.render();
```

### Rendering and Using Output

```typescript
// In Node.js - save to file
import { writeFileSync } from "fs";

const svg = await diagram.render();
writeFileSync("diagram.svg", svg);

// In browser - display in DOM
const svg = await diagram.render();
document.getElementById("diagram").innerHTML = svg;
```

## Common Mistakes

### HIGH Not awaiting diagram.render()

Wrong:

```typescript
const svg = diagram.render();
console.log(svg); // Promise, not string
```

Correct:

```typescript
const svg = await diagram.render();
console.log(svg); // SVG string
```

Returns a Promise that resolves to SVG string, PNG/JPG Uint8Array, or DOT string depending on format option.

Source: source code - Diagram.ts render() returns Promise

### HIGH Using wrong import path for providers

Wrong:

```typescript
import { EC2 } from "diagrams-js/providers/aws/compute";
```

Correct:

```typescript
import { EC2 } from "diagrams-js/aws/compute";
```

Provider paths use subpath imports without "/providers/" prefix.

Source: migration guide and package.json exports

### CRITICAL Assuming nodes auto-register with diagram

Wrong:

```typescript
const web = EC2("Web Server"); // Not added to diagram!
const db = diagram.add(RDS("Database"));
web.to(db); // Error: Node is not registered
```

Correct:

```typescript
const web = diagram.add(EC2("Web Server"));
const db = diagram.add(RDS("Database"));
web.to(db); // Works
```

Unlike Python diagrams, TypeScript requires explicit diagram.add() for each node.

Source: migration guide from Python

## See also

- diagrams-js/diagram-configuration — Customize direction, theme, curve style
- diagrams-js/rendering-export — Output formats (PNG, JPG, DOT, data URLs)
- diagrams-js/provider-nodes — 2000+ pre-built node classes from cloud providers
- diagrams-js/json-serialization — JSON export/import for infrastructure-as-code
