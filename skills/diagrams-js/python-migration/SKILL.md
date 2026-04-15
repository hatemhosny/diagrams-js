---
name: diagrams-js/python-migration
description: >
  Migrating from Python diagrams library to TypeScript. Converting context managers to function calls,
  >> operator to .to(), << operator to .from(), - operator to .with(), Cluster syntax, import paths.
  Key differences: explicit diagram.add(), async render(), no destroy().
type: lifecycle
library: diagrams-js
library_version: "0.0.9"
requires:
  - diagrams-js/getting-started
sources:
  - "hatemhosny/diagrams-js:docs/docs/guides/migration.mdx"
---

This skill builds on diagrams-js/getting-started. Read it first for foundational concepts.

# diagrams-js — Python Migration

Migrate from Python diagrams to TypeScript diagrams-js. Key syntax differences: context managers become function calls, operators become methods, explicit add() and async render().

## Setup

### Python vs TypeScript Side by Side

**Python:**

```python
from diagrams import Diagram
from diagrams.aws.compute import EC2

with Diagram("My Diagram", show=False):
    EC2("Web Server")
```

**TypeScript:**

```typescript
import { Diagram } from "diagrams-js";
import { EC2 } from "diagrams-js/aws/compute";

const diagram = Diagram("My Diagram");
diagram.add(EC2("Web Server"));
const svg = await diagram.render();
```

## Core Patterns

### Creating Diagrams

**Python:**

```python
from diagrams import Diagram
from diagrams.aws.compute import EC2

with Diagram("My Diagram", show=False):
    EC2("Web Server")
```

**TypeScript:**

```typescript
import { Diagram } from "diagrams-js";
import { EC2 } from "diagrams-js/aws/compute";

const diagram = Diagram("My Diagram");
diagram.add(EC2("Web Server"));
const svg = await diagram.render();
```

### Adding Nodes

**Python:**

```python
web = EC2("Web Server")  # Auto-registered
```

**TypeScript:**

```typescript
const web = diagram.add(EC2("Web Server")); // Explicit registration
```

### Connections

**Python:**

```python
web >> api >> database
api >> storage
```

**TypeScript:**

```typescript
web.to(api).to(database);
api.to(storage);
```

### Reverse Connections

**Python:**

```python
database << api
```

**TypeScript:**

```typescript
database.from(api);
```

### Undirected Connections

**Python:**

```python
primary - replica
```

**TypeScript:**

```typescript
primary.with(replica);
```

### Multiple Connections

**Python:**

```python
lb >> [web1, web2, web3]
[worker1, worker2] >> database
```

**TypeScript:**

```typescript
lb.to([web1, web2, web3]);
[worker1, worker2].forEach((w) => w.to(database));
```

### Clusters

**Python:**

```python
from diagrams import Cluster

with Diagram("Services"):
    with Cluster("Web Tier"):
        web1 = EC2("web1")
        web2 = EC2("web2")
```

**TypeScript:**

```typescript
const diagram = Diagram("Services");

const webTier = diagram.cluster("Web Tier");
const web1 = webTier.add(EC2("web1"));
const web2 = webTier.add(EC2("web2"));
```

### Edge Styling

**Python:**

```python
from diagrams import Edge

web >> Edge(color="red") >> db
```

**TypeScript:**

```typescript
import { Edge } from "diagrams-js";

web.to(Edge({ color: "red" }), db);
```

### Custom Nodes

**Python:**

```python
from diagrams.custom import Custom

Custom("Product", "https://mywebsite.com/icon.png")
```

**TypeScript:**

```typescript
import { Custom } from "diagrams-js";

diagram.add(Custom("Product", "https://mywebsite.com/icon.png"));
```

### Import Paths

| Python                                  | TypeScript                                       |
| --------------------------------------- | ------------------------------------------------ |
| `from diagrams.aws.compute import EC2`  | `import { EC2 } from "diagrams-js/aws/compute"`  |
| `from diagrams.aws.database import RDS` | `import { RDS } from "diagrams-js/aws/database"` |
| `from diagrams.gcp.compute import GCE`  | `import { GCE } from "diagrams-js/gcp/compute"`  |
| `from diagrams.k8s.compute import Pod`  | `import { Pod } from "diagrams-js/k8s/compute"`  |

## Common Mistakes

### CRITICAL Using Python context manager (with statement)

Wrong:

```typescript
with Diagram("Test"):  // Python syntax - invalid in TypeScript
    EC2("Web")
```

Correct:

```typescript
const diagram = Diagram("Test");
diagram.add(EC2("Web"));
const svg = await diagram.render();
```

TypeScript uses function calls, not Python context managers. Create diagram with Diagram(), add nodes with diagram.add().

Source: docs/guides/migration.mdx

### HIGH Forgetting explicit render() call

Wrong:

```typescript
const diagram = Diagram("Test");
diagram.add(EC2("Web"));
// Missing await diagram.render()
```

Correct:

```typescript
const diagram = Diagram("Test");
diagram.add(EC2("Web"));
const svg = await diagram.render();
```

Python auto-renders when context exits. TypeScript requires explicit render() call and await.

Source: docs/guides/migration.mdx

### CRITICAL Using Python list >> node syntax

Wrong:

```typescript
[web1, web2] >> database; // Python syntax
```

Correct:

```typescript
[web1, web2].forEach((w) => w.to(database));
```

TypeScript arrays don't have >> operator. Use forEach with method calls.

Source: docs/guides/migration.mdx

### HIGH Not importing nodes from correct paths

Wrong:

```typescript
import { EC2 } from "diagrams-js/aws"; // Missing category
```

Correct:

```typescript
import { EC2 } from "diagrams-js/aws/compute";
```

Provider paths are specific: diagrams-js/{provider}/{category}

Source: migration guide

## See also

- diagrams-js/provider-nodes — Provider import paths
- diagrams-js/node-connections — Connection method syntax
- diagrams-js/clusters-grouping — Cluster creation syntax
