---
name: plugin-kubernetes
description: >-
  Import and export Kubernetes YAML manifests with diagrams-js.
  Convert Kubernetes manifests to architecture diagrams and vice versa.
type: feature
library: diagrams-js
---

# Kubernetes Plugin for diagrams-js

Bidirectional conversion between Kubernetes YAML manifests and architecture diagrams.

## Quick Start

### Installation

```bash
npm install @diagrams-js/plugin-kubernetes
```

### Import from Kubernetes YAML

```typescript
import { Diagram } from "diagrams-js";
import { kubernetesPlugin } from "@diagrams-js/plugin-kubernetes";

const diagram = Diagram("My K8s Application");

// Register the plugin
await diagram.registerPlugins([kubernetesPlugin]);

// Import from Kubernetes YAML
const k8sYaml = `
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    spec:
      containers:
      - name: web
        image: nginx:latest
        ports:
        - containerPort: 80
`;

await diagram.import(k8sYaml, "kubernetes");

// Render the diagram
const svg = await diagram.render();
```

### Export to Kubernetes YAML

```typescript
import { Diagram, Node } from "diagrams-js";
import { kubernetesPlugin } from "@diagrams-js/plugin-kubernetes";

const diagram = Diagram("My K8s Application");

// Create nodes with Kubernetes metadata
const deployment = diagram.add(Node("web-deployment"));
deployment.metadata = {
  kubernetes: {
    kind: "Deployment",
    namespace: "default",
    spec: {
      replicas: 3,
      selector: { matchLabels: { app: "web" } },
      template: {
        spec: {
          containers: [{ name: "web", image: "nginx:latest", ports: [{ containerPort: 80 }] }],
        },
      },
    },
  },
};

// Register plugin and export
await diagram.registerPlugins([kubernetesPlugin]);
const k8sYaml = await diagram.export("kubernetes");
```

## Features

### Import Capabilities

- Parse Kubernetes YAML manifests (single or multi-document)
- Create nodes for each resource with appropriate Kubernetes icons
- Support for all common Kubernetes resource types
- Create edges for service-to-deployment relationships
- Create clusters for namespaces
- Store Kubernetes-specific metadata on nodes

### Supported Resource Types

**Workloads:**

- Deployment
- StatefulSet
- DaemonSet
- ReplicaSet
- Pod
- Job
- CronJob

**Services & Networking:**

- Service
- Ingress
- NetworkPolicy

**Storage:**

- ConfigMap
- Secret
- PersistentVolume
- PersistentVolumeClaim
- StorageClass

**RBAC:**

- Role
- RoleBinding
- ClusterRole
- ClusterRoleBinding
- ServiceAccount

**Cluster:**

- Namespace
- Node
- HorizontalPodAutoscaler

### Export Capabilities

- Export diagrams to Kubernetes YAML format
- Generate valid Kubernetes manifests
- Preserve resource configuration (replicas, selectors, ports, etc.)
- Support for multi-document YAML output

## Configuration

### Custom Resource Mappings

You can customize which icons are used for specific Kubernetes resources:

```typescript
import { Diagram } from "diagrams-js";
import { createKubernetesPlugin } from "@diagrams-js/plugin-kubernetes";

const diagram = Diagram("My K8s Application");

// Create plugin with custom resource mappings
const plugin = createKubernetesPlugin({
  defaultNamespace: "production",
  imageMappings: {
    // 1. Provider icon mapping - use built-in provider icons
    "my-custom-deployment": {
      provider: "onprem",
      type: "compute",
      resource: "Server",
    },
    "my-custom-service": {
      provider: "onprem",
      type: "database",
      resource: "Postgresql",
    },

    // 2. Direct URL string - use a custom image URL
    "my-frontend": "https://example.com/react-icon.png",

    // 3. URL object - same as string but as object
    "my-backend": {
      url: "https://example.com/node-icon.svg",
    },

    // 4. Iconify icon - use icons from Iconify (https://iconify.design/)
    // Format: { iconify: "prefix:name" }
    "custom-app": {
      iconify: "logos:kubernetes",
    },
    "redis-cache": {
      iconify: "logos:redis",
    },
  },
});

await diagram.registerPlugins([plugin]);
```

#### Iconify Icons

The plugin supports [Iconify](https://iconify.design/) icons, which provides access to 200,000+ open source icons:

```typescript
{
  iconify: "logos:kubernetes"; // Kubernetes logo
  iconify: "logos:redis"; // Redis logo
  iconify: "mdi:server"; // Material Design server icon
}
```

#### Mapping Priority

The plugin checks mappings by **resource name** first, then falls back to **resource kind**:

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-api # Would normally show Deployment icon
```

```typescript
// This mapping by RESOURCE NAME takes precedence
imageMappings: {
  "my-api": { iconify: "logos:aws" }  // Shows AWS icon instead of Deployment
}

// This mapping by KIND is the fallback
imageMappings: {
  "Deployment": { iconify: "logos:kubernetes" }  // Used if no "my-api" mapping
}
```

## Examples

### Visualize a Manifest

```typescript
import { Diagram } from "diagrams-js";
import { kubernetesPlugin } from "@diagrams-js/plugin-kubernetes";

const diagram = Diagram("Production Architecture");
await diagram.registerPlugins([kubernetesPlugin]);
await diagram.import(k8sYaml, "kubernetes");
const svg = await diagram.render();
```

### Import Multiple Manifests

```typescript
const diagram = Diagram("Environment Comparison");
await diagram.registerPlugins([kubernetesPlugin]);
await diagram.import([stagingManifest, productionManifest], "kubernetes");
```

### Export with Metadata

```typescript
const deployment = diagram.add(Node("api"));
deployment.metadata = {
  kubernetes: {
    kind: "Deployment",
    namespace: "production",
    spec: { replicas: 5, selector: { matchLabels: { app: "api" } } },
  },
};
const k8sYaml = await diagram.export("kubernetes");
```

### Round-trip

```typescript
await diagram.import(existingK8sYaml, "kubernetes");
// ... modify diagram ...
const updatedYaml = await diagram.export("kubernetes");
```

## API Reference

### `kubernetesPlugin`

Pre-created instance:

```typescript
import { kubernetesPlugin } from "@diagrams-js/plugin-kubernetes";
await diagram.registerPlugins([kubernetesPlugin]);
```

Provides importer (`name: "kubernetes"`, `.yml`/`.yaml`) and exporter (`name: "kubernetes"`, `.yaml`).

### `createKubernetesPlugin(config?)`

Factory for custom configuration:

```typescript
import { createKubernetesPlugin, type ImageMappings } from "@diagrams-js/plugin-kubernetes";

const plugin = createKubernetesPlugin({
  defaultNamespace: "production",
  imageMappings: {
    "custom-app": { iconify: "logos:kubernetes" },
    "my-deployment": { provider: "k8s", type: "compute", resource: "Deploy" },
  },
});

await diagram.registerPlugins([plugin]);
```

Config: `defaultNamespace` (default: "default"), `imageMappings`.

## Best Practices

- **Use descriptive resource names** — `name: user-service` not `svc1`
- **Store metadata for round-trip** — Keep `kind`, `namespace`, `spec` in `node.metadata.kubernetes`
- **Service selectors create edges** — Service→Deployment edges are auto-created when selectors match labels
- **Use namespaces** — Organize resources; each namespace becomes a cluster
- **Multi-document YAML** — Separate resources with `---`

## Troubleshooting

- **Plugin not found** — Register before import/export: `await diagram.registerPlugins([kubernetesPlugin])`
- **Metadata typing** — `node.metadata` is `Record<string, any>`
- **Missing icons** — Use `imageMappings` with provider, URL, or Iconify
- **Import fails** — Ensure `apiVersion`, `kind`, `metadata.name` are present

## Further Reading

- diagrams-js Plugin System: See `diagrams-js-plugin-system` skill
- diagrams-js Documentation: https://diagrams-js.hatemhosny.dev
- Kubernetes Documentation: https://kubernetes.io/docs/
- Iconify Icons: https://iconify.design/
