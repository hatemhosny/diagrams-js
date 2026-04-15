---
name: diagrams-js/browser-integration
description: >
  Using diagrams-js in browsers with CDN (esm.sh), bundlers, and import maps.
  DOM insertion of SVG, data URLs for embedding in img tags, file downloads with diagram.save().
  ESM-only - requires type="module".
type: framework
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

# diagrams-js — Browser Integration

Use diagrams-js directly in browsers without build steps. Load from CDN, display in DOM, generate download links.

## Setup

### CDN with Import Map

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

  const diagram = Diagram("Browser Demo");
  const server = diagram.add(EC2("Server"));

  const svg = await diagram.render();
  document.body.innerHTML = svg;
</script>
```

## Core Patterns

### Display in DOM

```html
<div id="diagram"></div>

<script type="module">
  import { Diagram } from "diagrams-js";
  import { EC2 } from "diagrams-js/aws/compute";

  const diagram = Diagram("My Diagram");
  diagram.add(EC2("Server"));

  const svg = await diagram.render();
  document.getElementById("diagram").innerHTML = svg;
</script>
```

### Download as File

```html
<button id="download">Download SVG</button>

<script type="module">
  import { Diagram } from "diagrams-js";
  import { EC2 } from "diagrams-js/aws/compute";

  const diagram = Diagram("My Diagram");
  diagram.add(EC2("Server"));

  document.getElementById("download").onclick = async () => {
    await diagram.save("diagram.svg");
  };
</script>
```

### Use Data URL for Image

```html
<img id="diagram-img" />

<script type="module">
  import { Diagram } from "diagrams-js";
  import { EC2 } from "diagrams-js/aws/compute";

  const diagram = Diagram("My Diagram");
  diagram.add(EC2("Server"));

  const dataUrl = await diagram.render({ dataUrl: true });
  document.getElementById("diagram-img").src = dataUrl;
</script>
```

### With Framework (React Example)

```jsx
import { useEffect, useState } from "react";
import { Diagram } from "diagrams-js";
import { EC2 } from "diagrams-js/aws/compute";

function ArchitectureDiagram() {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    async function render() {
      const diagram = Diagram("Architecture");
      diagram.add(EC2("Server"));
      const svgString = await diagram.render();
      setSvg(svgString);
    }
    render();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
}
```

## Common Mistakes

### CRITICAL Trying to use Node.js fs APIs in browser

Wrong:

```typescript
import { writeFileSync } from "fs"; // ERROR in browser - fs not available
writeFileSync("diagram.svg", svg);
```

Correct:

```typescript
// Browser - triggers file download
await diagram.save("diagram.svg");

// Or create download link
const dataUrl = await diagram.render({ dataUrl: true });
const link = document.createElement("a");
link.href = dataUrl;
link.download = "diagram.svg";
link.click();
```

Browser cannot use Node.js fs module. Use diagram.save() for downloads or data URLs for embedding.

Source: docs/guides/rendering.mdx

### HIGH Not using type="module" on script tag

Wrong:

```html
<script src="diagrams-js"></script>
```

Correct:

```html
<script type="module">
  import { Diagram } from "diagrams-js";
</script>
```

diagrams-js is ESM-only. Must use type="module" or import map with module scripts.

Source: docs/getting-started/installation.mdx

## See also

- diagrams-js/custom-nodes — External icons in browsers (CORS considerations)
- diagrams-js/rendering-export — Data URLs and rendering options
