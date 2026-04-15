---
name: diagrams-js/diagram-configuration
description: >
  Configuring diagram appearance and layout. Set direction (TB/BT/LR/RL), theme (pastel/neutral/blues/greens/orange),
  curve style (ortho/curved/spline/polyline). Apply custom Graphviz attributes via graphAttr, nodeAttr, edgeAttr.
  Enable autolabel for automatic node type prefixes.
type: core
library: diagrams-js
library_version: "0.0.9"
requires:
  - diagrams-js/getting-started
sources:
  - "hatemhosny/diagrams-js:docs/docs/guides/diagram.mdx"
  - "hatemhosny/diagrams-js:src/Diagram.ts"
  - "hatemhosny/diagrams-js:src/types.ts"
---

This skill builds on diagrams-js/getting-started. Read it first for foundational concepts.

# diagrams-js — Diagram Configuration

Configure diagram layout direction, visual theme, edge curve style, and custom Graphviz attributes.

## Setup

```typescript
import { Diagram } from "diagrams-js";
import { EC2 } from "diagrams-js/aws/compute";

const diagram = Diagram("My Diagram", {
  direction: "TB",
  theme: "pastel",
  curvestyle: "ortho",
});

const server = diagram.add(EC2("Server"));
const svg = await diagram.render();
```

## Core Patterns

### Direction Control

```typescript
const diagram = Diagram("My Diagram", {
  direction: "LR", // Left to Right (default)
  // direction: "TB" // Top to Bottom
  // direction: "BT" // Bottom to Top
  // direction: "RL" // Right to Left
});
```

### Theme Selection

```typescript
const diagram = Diagram("My Diagram", {
  theme: "pastel", // Default - soft blues, greens, purples
  // theme: "neutral" // Grayscale
  // theme: "blues" // Blue palette
  // theme: "greens" // Green palette
  // theme: "orange" // Orange/warm palette
});
```

### Curve Style

```typescript
const diagram = Diagram("My Diagram", {
  curvestyle: "ortho", // Orthogonal lines (default)
  // curvestyle: "curved"  // Curved lines
  // curvestyle: "spline"  // Spline curves
  // curvestyle: "polyline" // Polyline
});
```

### Custom Graphviz Attributes

```typescript
const diagram = Diagram("My Diagram", {
  graphAttr: {
    fontsize: "15",
    bgcolor: "transparent",
  },
  nodeAttr: {
    style: "filled",
    fillcolor: "lightblue",
  },
  edgeAttr: {
    color: "red",
    style: "dashed",
  },
});
```

### Auto-label Nodes

```typescript
const diagram = Diagram("My Diagram", {
  autolabel: true, // Prefixes labels with node type
});

// Results in "EC2\nWeb Server" label
const server = diagram.add(EC2("Web Server"));
```

## Common Mistakes

### HIGH Using invalid direction value

Wrong:

```typescript
const diagram = Diagram("Test", { direction: "top-down" });
```

Correct:

```typescript
const diagram = Diagram("Test", { direction: "TB" });
```

Valid values: "TB", "BT", "LR", "RL". Constructor throws for invalid values.

Source: source code - Diagram.ts lines 252-255

### HIGH Using invalid theme name

Wrong:

```typescript
const diagram = Diagram("Test", { theme: "dark" });
```

Correct:

```typescript
const diagram = Diagram("Test", { theme: "neutral" });
```

Valid themes: "pastel", "neutral", "blues", "greens", "orange". Constructor validates against THEMES object.

Source: source code - Diagram.ts lines 262-267

### HIGH Using invalid curve style

Wrong:

```typescript
const diagram = Diagram("Test", { curvestyle: "rounded" });
```

Correct:

```typescript
const diagram = Diagram("Test", { curvestyle: "curved" });
```

Valid values: "ortho", "curved", "spline", "polyline". Maps to Graphviz splines attribute.

Source: source code - Diagram.ts lines 257-260

## See also

- diagrams-js/rendering-export — Output formats and rendering options
- diagrams-js/clusters-grouping — Visual organization with clusters
