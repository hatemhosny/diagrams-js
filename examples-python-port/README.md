# Python Examples Ported to TypeScript

This directory contains all examples from the diagrams-py documentation, ported to TypeScript for diagrams-ts.

## Examples from `docs/getting-started/examples.md`

### AWS Examples

1. **Grouped Workers** (`grouped_workers.ts`)
   - Load balancer with 5 EC2 workers connecting to RDS database
   - Demonstrates: Multiple nodes, arrays, directional connections

2. **Clustered Web Services** (`clustered_web_services.ts`)
   - Route53 → ALB → ECS cluster with database cluster
   - Demonstrates: Nested clusters, bidirectional connections

3. **Event Processing** (`event_processing.ts`)
   - EKS source → workers → SQS queue → Lambda handlers → S3/Redshift
   - Demonstrates: Deeply nested clusters, complex flows

### GCP Examples

4. **Message Collecting System** (`message_collecting_gcp.ts`)
   - IoTCore → PubSub → Dataflow → BigQuery/GCS + AppEngine/BigTable
   - Demonstrates: Multiple clusters, GCP providers

### Kubernetes Examples

5. **Exposed Pod with 3 Replicas** (`k8s_exposed_pod.ts`)
   - Ingress → Service → 3 Pods with ReplicaSet, Deployment, HPA
   - Demonstrates: K8s resources, reverse connections

6. **Stateful Architecture** (`k8s_stateful_architecture.ts`)
   - StatefulSet with Service, Pods, PVCs, PV, StorageClass
   - Demonstrates: Storage resources, loops

### On-Premises Examples

7. **Advanced Web Service with On-Premises** (`advanced_web_service_onprem.ts`)
   - Nginx ingress → gRPC servers with Redis/PostgreSQL HA, monitoring
   - Demonstrates: On-prem providers, complex HA setups

8. **Advanced Web Service (with colored edges)** (`advanced_web_service_onprem_colored.ts`)
   - Same as #7 but with colored and styled edges
   - Demonstrates: Edge styling (colors, dashed, dotted, bold, labels)

### Custom Examples

9. **RabbitMQ Consumers** (`rabbitmq_consumers.ts`)
   - Custom node with external icon
   - Demonstrates: Generic nodes (Custom node equivalent)

## Running the Examples

```bash
# Run a specific example
npx tsx examples-python-port/grouped_workers.ts

# Or run all examples
npx tsx examples-python-port/index.ts
```

## Key Differences from Python

### Python vs TypeScript API

```python
# Python
from diagrams import Diagram, Cluster, Edge
from diagrams.aws.compute import EC2

with Diagram("Name", show=False, direction="TB"):
    node1 = EC2("label")
    node2 = EC2("label")
    node1 >> node2  # Forward
    node1 << node2  # Reverse
    node1 - node2   # Bidirectional
```

```typescript
// TypeScript
import { Diagram, Cluster, Edge } from "diagrams-ts";
import { EC2 } from "diagrams-ts/providers/aws/compute";

const diagram = new Diagram("Name", { direction: "TB" });
const node1 = diagram.add(new EC2("label"));
const node2 = diagram.add(new EC2("label"));
node1.to(node2); // Forward >>
node1.from(node2); // Reverse <<
node1.with(node2); // Bidirectional -
```

### Clusters

```python
# Python
with Diagram("Name"):
    with Cluster("Cluster Name"):
        node = EC2("label")
```

```typescript
// TypeScript
const diagram = new Diagram("Name");
diagram.cluster("Cluster Name", (cluster) => {
  const node = cluster.add(new EC2("label"));
});
```

### Edges with Styles

```python
# Python
node1 >> Edge(color="red", style="dashed") >> node2
```

```typescript
// TypeScript
node1.to(new Edge({ color: "red", style: "dashed" }), node2);
```

## Notes

- All examples generate SVG output by default
- Icons are automatically embedded (no runtime fetching needed)
- The examples can be run in Node.js or adapted for browser use
