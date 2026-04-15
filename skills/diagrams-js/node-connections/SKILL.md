---
name: diagrams-js/node-connections
description: >
  Connecting nodes with .to() (forward), .from() (reverse), .with() (undirected).
  Using Edge() for styling with color, style, label, forward, reverse options.
  Chaining connections and connecting to multiple targets with arrays.
type: core
library: diagrams-js
library_version: "0.0.9"
requires:
  - diagrams-js/getting-started
  - diagrams-js/provider-nodes
sources:
  - "hatemhosny/diagrams-js:docs/docs/guides/node.mdx"
  - "hatemhosny/diagrams-js:docs/docs/guides/edge.mdx"
  - "hatemhosny/diagrams-js:src/Node.ts"
  - "hatemhosny/diagrams-js:src/Edge.ts"
---

This skill builds on diagrams-js/getting-started and diagrams-js/provider-nodes. Read them first for foundational concepts.

# diagrams-js — Node Connections

Connect nodes to show data flow and relationships. Use .to() for forward direction, .from() for reverse, .with() for undirected. Style connections with Edge().

## Setup

```typescript
import { Diagram, Edge } from "diagrams-js";
import { EC2 } from "diagrams-js/aws/compute";
import { RDS } from "diagrams-js/aws/database";

const diagram = Diagram("Connections");

const web = diagram.add(EC2("Web"));
const db = diagram.add(RDS("Database"));

// Forward connection
web.to(db);

const svg = await diagram.render();
```

## Core Patterns

### Forward Connections (.to)

```typescript
import { Diagram } from "diagrams-js";
import { EC2, Lambda } from "diagrams-js/aws/compute";
import { RDS } from "diagrams-js/aws/database";

const diagram = Diagram("Flow");

const web = diagram.add(EC2("Web"));
const api = diagram.add(Lambda("API"));
const db = diagram.add(RDS("Database"));

// Chain connections: web -> api -> db
web.to(api).to(db);

// Multiple targets
web.to([api, db]);
```

### Reverse Connections (.from)

```typescript
const diagram = Diagram("Reverse Flow");

const db = diagram.add(RDS("Database"));
const replica = diagram.add(RDS("Replica"));

// db << replica (arrow from replica pointing to db)
// Creates edge with dir=back
replica.from(db);
```

### Undirected Connections (.with)

```typescript
const diagram = Diagram("Bidirectional");

const primary = diagram.add(EC2("Primary"));
const standby = diagram.add(EC2("Standby"));

// No arrows, bidirectional relationship
primary.with(standby);
```

### Edge Styling

```typescript
import { Diagram, Edge } from "diagrams-js";

const diagram = Diagram("Styled");

const web = diagram.add(EC2("Web"));
const db = diagram.add(RDS("Database"));

// Colored edge
web.to(Edge({ color: "blue" }), db);

// Dashed edge
web.to(Edge({ style: "dashed" }), db);

// Labeled edge
web.to(Edge({ label: "queries" }), db);

// Combined styling
web.to(
  Edge({
    color: "red",
    style: "dashed",
    label: "auth",
  }),
  db,
);
```

### Edge Direction Control

```typescript
// Forward arrow only
Edge({ forward: true });

// Reverse arrow only
Edge({ reverse: true });

// Bidirectional arrows
Edge({ forward: true, reverse: true });

// No arrows (undirected)
Edge({});
```

### Multiple Targets with forEach

```typescript
const diagram = Diagram("Load Balanced");

const lb = diagram.add(ALB("LB"));
const workers = [
  diagram.add(EC2("Worker 1")),
  diagram.add(EC2("Worker 2")),
  diagram.add(EC2("Worker 3")),
];

// Connect load balancer to all workers
lb.to(workers);

// Connect all workers to database
const db = diagram.add(RDS("Database"));
workers.forEach((w) => w.to(db));
```

## Common Mistakes

### HIGH Confusing .to() and .from() direction

Wrong:

```typescript
// Want: db << api (arrow from api to db)
db.to(api); // Wrong! Creates db -> api (arrow from db to api)
```

Correct:

```typescript
// Want: db << api (arrow from api to db)
db.from(api); // Correct! Creates api -> db with dir=back
```

.to() creates arrow FROM source TO target (left to right in LR layout).
.from() creates arrow pointing BACK from target TO source (use when target is to the left).

Source: migration guide and docs/guides/node.mdx

### CRITICAL Using Python >> operator syntax

Wrong:

```typescript
(web >> api) >> database; // Python syntax
```

Correct:

```typescript
web.to(api).to(database); // TypeScript syntax
```

TypeScript uses method calls, not operators. Python >> becomes .to(), << becomes .from(), - becomes .with().

Source: migration guide

### CRITICAL Trying to connect nodes not added to diagram

Wrong:

```typescript
const web = EC2("Web"); // Created but NOT added to diagram!
const db = diagram.add(RDS("Database"));
web.to(db); // Error: Node is not registered with a diagram
```

Correct:

```typescript
const web = diagram.add(EC2("Web")); // Added to diagram
const db = diagram.add(RDS("Database"));
web.to(db); // Works!
```

Nodes must be registered with diagram before connecting. Always use diagram.add() or cluster.add().

Source: source code - Node.ts ~connect() method throws error

### HIGH Passing wrong argument order with Edge

Wrong:

```typescript
web.to(db, Edge({ color: "red" })); // Wrong order
```

Correct:

```typescript
web.to(Edge({ color: "red" }), db); // Correct: Edge first, then target
```

When styling with Edge, pass it as first argument: node.to(Edge({...}), target).

Source: docs/guides/edge.mdx

## See also

- diagrams-js/clusters-grouping — Organizing connected nodes into groups
- diagrams-js/python-migration — Converting Python operator syntax
