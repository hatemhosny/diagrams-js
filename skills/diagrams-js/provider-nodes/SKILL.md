---
name: diagrams-js/provider-nodes
description: >
  Using 2000+ pre-built node classes from 17+ cloud providers. Import from diagrams-js/{provider}/{category}
  with auto-generated icons. Providers: AWS, Azure, GCP, Kubernetes, On-premises, AlibabaCloud, DigitalOcean,
  Elastic, Firebase, Generic, GIS, IBM, OCI, OpenStack, Outscale, Programming, SaaS, C4.
type: core
library: diagrams-js
library_version: "0.0.9"
requires:
  - diagrams-js/getting-started
sources:
  - "hatemhosny/diagrams-js:docs/docs/guides/providers.mdx"
  - "hatemhosny/diagrams-js:docs/docs/guides/node.mdx"
  - "hatemhosny/diagrams-js:src/providers/"
---

This skill builds on diagrams-js/getting-started. Read it first for foundational concepts.

# diagrams-js — Provider Nodes

Use 2000+ pre-built node classes representing cloud services and infrastructure components. Auto-generated icons embedded in output.

## Setup

```typescript
import { Diagram } from "diagrams-js";
import { EC2, Lambda } from "diagrams-js/aws/compute";
import { RDS } from "diagrams-js/aws/database";

const diagram = Diagram("AWS Architecture");

const web = diagram.add(EC2("Web Server"));
const api = diagram.add(Lambda("API"));
const db = diagram.add(RDS("Database"));

web.to(api).to(db);

const svg = await diagram.render();
```

## Core Patterns

### AWS Provider

```typescript
import { EC2, Lambda, ECS } from "diagrams-js/aws/compute";
import { RDS, DynamoDB } from "diagrams-js/aws/database";
import { S3, EBS } from "diagrams-js/aws/storage";
import { ALB, Route53, VPC } from "diagrams-js/aws/network";

const diagram = Diagram("AWS Stack");

const dns = diagram.add(Route53("DNS"));
const lb = diagram.add(ALB("Load Balancer"));
const web = diagram.add(EC2("Web Server"));
const db = diagram.add(RDS("Database"));
const cache = diagram.add(DynamoDB("Cache"));
const storage = diagram.add(S3("Assets"));

dns.to(lb).to(web);
web.to([db, cache, storage]);
```

### Kubernetes Provider

```typescript
import { Pod, Deployment, StatefulSet } from "diagrams-js/k8s/compute";
import { Service, Ingress } from "diagrams-js/k8s/network";
import { PV, PVC, StorageClass } from "diagrams-js/k8s/storage";

const diagram = Diagram("K8s Architecture");

const ingress = diagram.add(Ingress("domain.com"));
const svc = diagram.add(Service("svc"));
const pod = diagram.add(Pod("app"));
const pvc = diagram.add(PVC("storage"));

ingress.to(svc).to(pod).to(pvc);
```

### GCP Provider

```typescript
import { GCE, GKE, AppEngine } from "diagrams-js/gcp/compute";
import { CloudSQL } from "diagrams-js/gcp/database";
import { CloudStorage } from "diagrams-js/gcp/storage";

const diagram = Diagram("GCP Stack");

const app = diagram.add(AppEngine("App"));
const db = diagram.add(CloudSQL("Database"));
const storage = diagram.add(CloudStorage("Storage"));

app.to([db, storage]);
```

### Azure Provider

```typescript
import { VM, FunctionApps } from "diagrams-js/azure/compute";
import { SQLDatabase } from "diagrams-js/azure/databases";
import { BlobStorage } from "diagrams-js/azure/storage";

const diagram = Diagram("Azure Stack");

const api = diagram.add(FunctionApps("API"));
const db = diagram.add(SQLDatabase("Database"));
const files = diagram.add(BlobStorage("Files"));

api.to([db, files]);
```

## Common Mistakes

### HIGH Importing from wrong provider path

Wrong:

```typescript
import { EC2 } from "diagrams-js/aws"; // Missing category
```

Correct:

```typescript
import { EC2 } from "diagrams-js/aws/compute";
```

Provider paths are specific: diagrams-js/{provider}/{category}. Categories: compute, database, storage, network, etc.

Source: migration guide and API reference

### CRITICAL Assuming nodes auto-register with diagram

Wrong:

```typescript
const web = EC2("Web Server"); // Created but not added!
const db = diagram.add(RDS("Database"));
web.to(db); // Error: Node is not registered with a diagram
```

Correct:

```typescript
const web = diagram.add(EC2("Web Server"));
const db = diagram.add(RDS("Database"));
web.to(db); // Works
```

Unlike Python diagrams, TypeScript requires explicit diagram.add() for each node. The provider function returns a node instance that must be registered.

Source: migration guide from Python

## References

- [AWS Provider Reference](references/aws-categories.md)
- [Azure Provider Reference](references/azure-categories.md)
- [GCP Provider Reference](references/gcp-categories.md)
- [Kubernetes Provider Reference](references/k8s-categories.md)

## See also

- diagrams-js/node-connections — Connecting nodes with edges
- diagrams-js/clusters-grouping — Organizing nodes into groups
- diagrams-js/custom-nodes — Using external icons
