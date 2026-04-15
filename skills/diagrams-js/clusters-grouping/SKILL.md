---
name: diagrams-js/clusters-grouping
description: >
  Grouping nodes with diagram.cluster() and nested clusters via cluster.cluster().
  Adding nodes to clusters with cluster.add(). Visual organization with themed backgrounds.
  Connecting nodes across clusters.
type: core
library: diagrams-js
library_version: "0.0.9"
requires:
  - diagrams-js/getting-started
  - diagrams-js/provider-nodes
sources:
  - "hatemhosny/diagrams-js:docs/docs/guides/clusters.mdx"
  - "hatemhosny/diagrams-js:src/Cluster.ts"
---

This skill builds on diagrams-js/getting-started and diagrams-js/provider-nodes. Read them first for foundational concepts.

# diagrams-js — Clusters & Grouping

Organize diagrams visually by grouping related nodes into clusters. Support for nested clusters with automatic themed backgrounds.

## Setup

```typescript
import { Diagram } from "diagrams-js";
import { ECS } from "diagrams-js/aws/compute";
import { RDS } from "diagrams-js/aws/database";

const diagram = Diagram("Clustered Services");

const webCluster = diagram.cluster("Web Tier");
const web = webCluster.add(ECS("Web Server"));

const dbCluster = diagram.cluster("Database Tier");
const db = dbCluster.add(RDS("Database"));

web.to(db);

const svg = await diagram.render();
```

## Core Patterns

### Basic Cluster

```typescript
import { Diagram } from "diagrams-js";
import { ECS } from "diagrams-js/aws/compute";

const diagram = Diagram("Services");

const cluster = diagram.cluster("Web Services");
const web1 = cluster.add(ECS("web1"));
const web2 = cluster.add(ECS("web2"));
```

### Nested Clusters

```typescript
const diagram = Diagram("Production");

const prod = diagram.cluster("Production");

const webTier = prod.cluster("Web Tier");
const web1 = webTier.add(ECS("web1"));
const web2 = webTier.add(ECS("web2"));

const dbTier = prod.cluster("Database Tier");
const primary = dbTier.add(RDS("Primary"));
const replica = dbTier.add(RDS("Replica"));
```

### Connecting Across Clusters

```typescript
const diagram = Diagram("Full Stack");

const frontend = diagram.cluster("Frontend");
const web = frontend.add(EC2("Web"));

const backend = diagram.cluster("Backend");
const api = backend.add(EC2("API"));

const data = diagram.cluster("Data");
const db = data.add(RDS("DB"));

web.to(api).to(db);
```

### Cluster with Multiple Node Types

```typescript
const diagram = Diagram("AWS Architecture");

const lb = diagram.add(ALB("Load Balancer"));

const webCluster = diagram.cluster("Web Tier");
const web1 = webCluster.add(ECS("web1"));
const web2 = webCluster.add(ECS("web2"));

const dbCluster = diagram.cluster("Database Tier");
const primary = dbCluster.add(RDS("Primary"));
const replica = dbCluster.add(RDS("Replica"));

lb.to([web1, web2]);
web1.to(primary);
web2.to(primary);
primary.with(replica);
```

## Common Mistakes

### HIGH Calling diagram.add() instead of cluster.add()

Wrong:

```typescript
const vpc = diagram.cluster("VPC");
const server = diagram.add(EC2("Server"));
// Server added to diagram, NOT to the VPC cluster!
```

Correct:

```typescript
const vpc = diagram.cluster("VPC");
const server = vpc.add(EC2("Server"));
// Server is inside the VPC cluster with themed background
```

Must use cluster.add() to place nodes inside cluster. diagram.add() adds to diagram root.

Source: docs/guides/clusters.mdx

### CRITICAL Using Python Cluster context manager syntax

Wrong:

```python
with Cluster("VPC"):
    server = EC2("Server")
```

Correct:

```typescript
const vpc = diagram.cluster("VPC");
const server = vpc.add(EC2("Server"));
```

TypeScript uses method calls, not Python context managers. Create cluster with diagram.cluster(), add nodes with cluster.add().

Source: migration guide

## See also

- diagrams-js/node-connections — Connecting nodes within and across clusters
- diagrams-js/diagram-configuration — Theme colors for cluster backgrounds
