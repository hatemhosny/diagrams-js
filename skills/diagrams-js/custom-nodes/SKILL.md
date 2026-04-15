---
name: diagrams-js/custom-nodes
description: >
  Creating nodes with external icons using Custom() function. Support for remote URLs (browsers),
  local files (Node.js), and data URLs. Customize appearance with shape, width, height, margin options.
  Async icon loading with automatic injection into SVG output.
type: core
library: diagrams-js
library_version: "0.0.9"
requires:
  - diagrams-js/getting-started
sources:
  - "hatemhosny/diagrams-js:docs/docs/guides/custom-nodes.mdx"
  - "hatemhosny/diagrams-js:src/Custom.ts"
---

This skill builds on diagrams-js/getting-started. Read it first for foundational concepts.

# diagrams-js — Custom Nodes

Create nodes with custom icons from URLs, local files, or data URLs. Useful for services not in standard providers or proprietary components.

## Setup

```typescript
import { Diagram, Custom } from "diagrams-js";

const diagram = Diagram("Custom Services");

// Remote URL
const service = diagram.add(Custom("My Service", "https://example.com/icon.png"));

const svg = await diagram.render();
```

## Core Patterns

### Remote URL Icon

```typescript
import { Diagram, Custom } from "diagrams-js";

const diagram = Diagram("External Services");

const rabbitmq = diagram.add(Custom("Message Queue", "https://example.com/rabbitmq.png"));

const redis = diagram.add(Custom("Cache", "https://example.com/redis.png"));

rabbitmq.to(redis);
```

### Local File Icon (Node.js only)

```typescript
import { Diagram, Custom } from "diagrams-js";

const diagram = Diagram("Local Services");

const service = diagram.add(Custom("Internal API", "./assets/internal-api.png"));
```

### Data URL Icon

```typescript
import { Diagram, Custom } from "diagrams-js";

const diagram = Diagram("Embedded Icons");

const iconData = "data:image/png;base64,iVBORw0KGgo...";
const service = diagram.add(Custom("Service", iconData));
```

### Custom Node Options

```typescript
const node = diagram.add(
  Custom("Service", "https://example.com/icon.png", {
    shape: "box",
    width: "1.2",
    height: "1.2",
    fixedsize: "true",
    margin: "0.1,0.1",
    labelloc: "b",
    imagescale: "true",
  }),
);
```

### With Clusters

```typescript
const diagram = Diagram("Services");

const external = diagram.cluster("External Services");

const stripe = external.add(Custom("Stripe", "https://example.com/stripe.png"));

const twilio = external.add(Custom("Twilio", "https://example.com/twilio.png"));

stripe.to(twilio);
```

## Common Mistakes

### HIGH Using local file path in browser

Wrong:

```typescript
// In browser
const node = Custom("Service", "./local/icon.png");
// Fails: Browser cannot access local file system
```

Correct:

```typescript
// In browser - use remote URL or data URL
const node = Custom("Service", "https://example.com/icon.png");

// Or embed as data URL
const node = Custom("Service", "data:image/png;base64,...");
```

Browser cannot access local file system. Use remote URLs, data URLs, or load file server-side and pass data URL.

Source: docs/guides/custom-nodes.mdx

### MEDIUM Not handling icon load failure

Wrong:

```typescript
const node = diagram.add(Custom("Service", "https://bad-url/icon.png"));
// Icon silently missing if fetch fails
```

Correct:

```typescript
// Check browser console for warnings
// Or pre-load icon and use data URL

async function loadIcon(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

const iconData = await loadIcon("https://example.com/icon.png");
const node = diagram.add(Custom("Service", iconData));
```

Remote icon fetch can fail (CORS, 404, network). Check console warnings or pre-load as data URL.

Source: source code - Custom.ts \_fetchRemoteIcon()

## See also

- diagrams-js/browser-integration — Browser-specific considerations
- diagrams-js/nodejs-integration — Local file access in Node.js
