# diagrams-ts

A TypeScript port of the [diagrams](https://github.com/mingrammer/diagrams) Python library for drawing cloud system architecture diagrams as code.

## Features

- **Diagram as Code**: Define your architecture diagrams in TypeScript/JavaScript
- **Cross-Platform**: Works in Node.js, Deno, Bun, browsers, and Cloudflare Workers
- **Graphviz-Powered**: Uses `@viz-js/viz` (WebAssembly-based Graphviz) for rendering
- **Type-Safe**: Full TypeScript support with autocompletion
- **Provider Support**: 17 cloud providers with 1000+ node classes and embedded icons
- **Zero Configuration**: Icons work automatically, no setup needed

## Installation

```bash
npm install diagrams-ts
# or
yarn add diagrams-ts
# or
pnpm add diagrams-ts
```

## Quick Start

### Basic Usage

```typescript
import { Diagram, Node, Edge } from "diagrams-ts";

// Create a diagram
const diagram = new Diagram("Web Service", {
  direction: "TB", // Top to Bottom
  outformat: "svg", // Output format
});

// Create nodes
const web = diagram.add(new Node("Web Server"));
const app = diagram.add(new Node("App Server"));
const db = diagram.add(new Node("Database"));

// Connect them: web -> app -> db
web.to(app).to(db);

// Render
const svg = await diagram.render();
diagram.destroy();
```

### Using Cloud Providers (with Icons!)

```typescript
import { Diagram } from "diagrams-ts";
import { EC2, Lambda, RDS } from "diagrams-ts/providers/aws/compute";
import { S3 } from "diagrams-ts/providers/aws/storage";
import { ALB } from "diagrams-ts/providers/aws/network";

const diagram = new Diagram("AWS Architecture", { direction: "TB" });

// Create nodes with automatic icons
const lb = diagram.add(new ALB("Load Balancer"));
const web = diagram.add(new EC2("Web Server"));
const api = diagram.add(new Lambda("API"));
const db = diagram.add(new RDS("Database"));
const storage = diagram.add(new S3("Storage"));

// Connect them
lb.to(web);
web.to(api);
api.to(db);
api.to(storage);

const svg = await diagram.render();
diagram.destroy();
```

## Providers

17 cloud providers available, each with multiple service categories:

| Provider          | Import Path                            | Services                                                                       |
| ----------------- | -------------------------------------- | ------------------------------------------------------------------------------ |
| **AWS**           | `diagrams-ts/providers/aws/*`          | compute, database, storage, network, analytics, ML, IoT, security, and 18 more |
| **Azure**         | `diagrams-ts/providers/azure/*`        | compute, databases, networking, storage, AI/ML, containers, and 24 more        |
| **GCP**           | `diagrams-ts/providers/gcp/*`          | compute, database, storage, network, analytics, ML, operations, and 10 more    |
| **Kubernetes**    | `diagrams-ts/providers/k8s/*`          | compute, network, storage, control plane, RBAC, and 10 more                    |
| **Alibaba Cloud** | `diagrams-ts/providers/alibabacloud/*` | compute, database, storage, network, security, and 9 more                      |
| **DigitalOcean**  | `diagrams-ts/providers/digitalocean/*` | compute, database, network, storage                                            |
| **Elastic**       | `diagrams-ts/providers/elastic/*`      | Elasticsearch, Beats, Kibana, and 7 more                                       |
| **Firebase**      | `diagrams-ts/providers/firebase/*`     | develop, grow, quality, base, and 4 more                                       |
| **Generic**       | `diagrams-ts/providers/generic/*`      | compute, database, network, OS, storage                                        |
| **GIS**           | `diagrams-ts/providers/gis/*`          | data, desktop, mobile, server, and 11 more                                     |
| **IBM**           | `diagrams-ts/providers/ibm/*`          | compute, data, network, security, and 13 more                                  |
| **OCI**           | `diagrams-ts/providers/oci/*`          | compute, database, network, storage, and 7 more                                |
| **On-Prem**       | `diagrams-ts/providers/onprem/*`       | compute, database, networking, monitoring, and 30 more                         |
| **OpenStack**     | `diagrams-ts/providers/openstack/*`    | compute, networking, storage, and 18 more                                      |
| **Outscale**      | `diagrams-ts/providers/outscale/*`     | compute, network, security, storage                                            |
| **Programming**   | `diagrams-ts/providers/programming/*`  | languages, frameworks, runtimes                                                |
| **SaaS**          | `diagrams-ts/providers/saas/*`         | alerting, analytics, CDN, chat, and 14 more                                    |

### Example: AWS Architecture

```typescript
import { Diagram } from "diagrams-ts";
import { EC2, Lambda, AutoScaling } from "diagrams-ts/providers/aws/compute";
import { RDS, Dynamodb } from "diagrams-ts/providers/aws/database";
import { S3 } from "diagrams-ts/providers/aws/storage";
import { Cloudfront, ALB } from "diagrams-ts/providers/aws/network";

const diagram = new Diagram("E-Commerce Platform", { direction: "TB" });

const cdn = diagram.add(new Cloudfront("CDN"));
const lb = diagram.add(new ALB("ALB"));
const asg = diagram.add(new AutoScaling("Auto Scaling"));
const web = diagram.add(new EC2("Web Tier"));
const api = diagram.add(new Lambda("API Gateway"));
const rds = diagram.add(new RDS("Primary DB"));
const dynamo = diagram.add(new Dynamodb("Cache"));
const s3 = diagram.add(new S3("Static Assets"));

cdn.to(lb);
lb.to(asg);
asg.to(web);
web.to(api);
api.to([rds, dynamo]);
web.to(s3);

const svg = await diagram.render();
```

### Icons Are Automatic

All provider classes come with embedded icons. Just import and use:

```typescript
import { EC2 } from "diagrams-ts/providers/aws/compute";

// The EC2 icon is embedded and will appear automatically
const server = diagram.add(new EC2("My Server"));
```

No configuration needed. Icons are embedded as base64 data URLs at build time.

## Python to TypeScript Migration Guide

| Python                    | TypeScript                                      |
| ------------------------- | ----------------------------------------------- |
| `with Diagram("Name"):`   | `const diagram = new Diagram("Name");`          |
| `Node("label")`           | `new Node("label")`                             |
| `node1 >> node2`          | `node1.to(node2)`                               |
| `node1 << node2`          | `node1.from(node2)`                             |
| `node1 - node2`           | `node1.with(node2)`                             |
| `node1 >> [node2, node3]` | `node1.to([node2, node3])`                      |
| `Edge(color="red")`       | `new Edge({ color: "red" })`                    |
| `with Cluster("Name"):`   | `diagram.cluster("Name", (cluster) => { ... })` |

## API Reference

### Diagram

```typescript
const diagram = new Diagram(name: string, options?: DiagramOptions)
```

**Options:**

- `direction`: `"TB" | "BT" | "LR" | "RL"` - Layout direction
- `curvestyle`: `"ortho" | "curved" | "spline" | "polyline"` - Edge curve style
- `outformat`: `"png" | "jpg" | "svg" | "pdf" | "dot"` - Output format(s)
- `theme`: `"neutral" | "pastel" | "blues" | "greens" | "orange"` - Color theme
- `show`: `boolean` - Open rendered image after generation
- `autolabel`: `boolean` - Auto-prefix node labels with class name

**Methods:**

- `add(node: Node): Node` - Add a node to the diagram
- `cluster(name: string, callback: (cluster: Cluster) => void): void` - Create a cluster
- `render(): Promise<string>` - Render diagram to SVG string
- `renderTo(format: "svg" | "png"): Promise<string | Buffer>` - Render to specific format
- `save(filepath: string): Promise<void>` - Save diagram to file
- `destroy(): void` - Clean up resources

### Node

```typescript
const node = new Node(label: string, options?: NodeOptions)
```

**Methods:**

- `to(target: Node | Node[] | Edge, target?: Node)` - Forward connection (>>)
- `from(source: Node | Node[])` - Reverse connection (<<)
- `with(target: Node | Node[])` - Bidirectional connection (-)

### Edge

```typescript
const edge = new Edge(options?: EdgeOptions)
```

**Options:**

- `label`: `string` - Edge label
- `color`: `string` - Edge color
- `style`: `string` - Edge style (solid, dashed, dotted, bold)
- `forward`: `boolean` - Forward direction arrow
- `reverse`: `boolean` - Reverse direction arrow

**Static factories:**

- `Edge.label(text)` - Create edge with label
- `Edge.color(color)` - Create edge with color
- `Edge.style(style)` - Create edge with style

### Cluster

```typescript
diagram.cluster("Name", (cluster) => {
  const node = cluster.add(new Node("label"));
});
```

## Clusters

```typescript
const diagram = new Diagram("Clustered Example", { direction: "LR" });

// Create nodes outside cluster
const lb = diagram.add(new Node("Load Balancer"));

// Create a cluster
diagram.cluster("Services", (cluster) => {
  const web1 = cluster.add(new Node("Web 1"));
  const web2 = cluster.add(new Node("Web 2"));

  // Connect within cluster
  web1.with(web2);
});

// Connect outside to cluster
lb.to(/* nodes in cluster */);
```

## Themes

Built-in themes:

- `neutral` (default)
- `pastel`
- `blues`
- `greens`
- `orange`

```typescript
const diagram = new Diagram("Themed", { theme: "blues" });
```

## Output Formats

- **SVG** (default): `outformat: "svg"` - Works in all environments
- **PNG**: `outformat: "png"` - Works in browsers (Canvas API) and Node.js (with sharp)

### Browser PNG Export
```typescript
const diagram = new Diagram("My Diagram", { outformat: "png" });
const pngDataUrl = await diagram.render();
```

### Node.js PNG Export
For PNG output in Node.js, install the optional `sharp` dependency:

```bash
npm install sharp
```

Then use PNG output as normal:

```typescript
const diagram = new Diagram("My Diagram", { outformat: "png" });
const pngBuffer = await diagram.render(); // Returns Uint8Array
await fs.writeFile("diagram.png", pngBuffer);
```

## Development

This project uses [Vite+](https://vitejs.dev/) (a unified toolchain).

```bash
# Install dependencies
vp install

# Run tests
vp test

# Build library
vp pack

# Build providers
npm run build:providers

# Type check and lint
vp check
```

## Project Status

**Completed:**

- ✅ Core classes (Diagram, Node, Edge, Cluster)
- ✅ Context management
- ✅ Graphviz rendering via WASM
- ✅ Cross-platform support (Node.js, Deno, Bun, browsers, workers)
- ✅ Connection operators (to, from, with)
- ✅ Themes
- ✅ Clusters with nesting
- ✅ Edge customization
- ✅ 17 Provider classes with 1000+ node types
- ✅ Automatic icon embedding
- ✅ SVG and PNG output

**Coming Soon:**

- 🔄 C4 model support
- 🔄 Custom node templates
- 🔄 Python-to-TypeScript migration tool

## License

MIT - Same as the original diagrams library
