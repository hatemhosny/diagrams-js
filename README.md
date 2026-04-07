[![diagrams-js](./assets/logo.svg)](https://diagrams-js.hatemhosny.dev)

# diagrams-js

> A TypeScript/JavaScript port of the popular Python [diagrams](https://github.com/mingrammer/diagrams) library for drawing cloud system architecture diagrams as code.

[![npm version](https://badge.fury.io/js/diagrams-js.svg)](https://www.npmjs.com/package/diagrams-js)
[![CI](https://github.com/hatemhosny/diagrams-js/actions/workflows/ci.yml/badge.svg)](https://github.com/hatemhosny/diagrams-js/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **Diagram as Code**: Define your architecture diagrams in TypeScript
- **17+ Cloud Providers**: AWS, Azure, GCP, Kubernetes, Alibaba Cloud, Oracle Cloud, IBM Cloud, and more
- **1000+ Node Classes**: Comprehensive coverage of cloud services and infrastructure components
- **Cross-Platform**: Works in browsers, Node.js, Deno and Bun
- **Multiple Output Formats**: SVG, PNG, JPG, and DOT
- **Type-Safe**: Full TypeScript support with comprehensive type definitions
- **WebAssembly Powered**: Uses a WebAssembly build of [Graphviz](https://graphviz.org) ([viz](https://github.com/mdaines/viz-js)) for fast, client-side rendering
- **Custom Nodes**: Support for external icons and images
- **Tree-Shakable**: Import only what you need

## Installation

```bash
# npm
npm install diagrams-js
```

## Quick Start

### Node.js / TypeScript

```typescript
import { Diagram } from "diagrams-js";
import { EC2, Lambda } from "diagrams-js/aws/compute";
import { RDS } from "diagrams-js/aws/database";
import { S3 } from "diagrams-js/aws/storage";
import { ALB } from "diagrams-js/aws/network";

const diagram = Diagram("AWS Architecture", { direction: "TB" });

// Create nodes with icons
const lb = diagram.add(ALB("Load Balancer"));
const web = diagram.add(EC2("Web Server"));
const api = diagram.add(Lambda("API"));
const db = diagram.add(RDS("Database"));
const storage = diagram.add(S3("Storage"));

// Connect them
lb.to(web).to(api);
api.to([db, storage]);

// Render to SVG
const svg = await diagram.render();

// Clean up
diagram.destroy();
```

### Browser

```html
<script type="module">
  import { Diagram } from "https://cdn.jsdelivr.net/npm/diagrams-js";
  import { EC2 } from "https://cdn.jsdelivr.net/npm/diagrams-js/providers/aws/compute";
  import { RDS } from "https://cdn.jsdelivr.net/npm/diagrams-js/providers/aws/database";

  const diagram = Diagram("My Diagram");
  const web = diagram.add(EC2("Web Server"));
  const db = diagram.add(RDS("Database"));

  web.to(db);

  const svg = await diagram.render();
  document.body.innerHTML = svg;
</script>
```

## Documentation

📚 **Full documentation**: [https://diagrams-js.hatemhosny.dev](https://diagrams-js.hatemhosny.dev)

- [Getting Started](https://diagrams-js.hatemhosny.dev/docs/getting-started)
- [API Reference](https://diagrams-js.hatemhosny.dev/docs/api)
- [Examples](https://diagrams-js.hatemhosny.dev/docs/examples)
- [Providers](https://diagrams-js.hatemhosny.dev/docs/providers)

## Supported Providers

| Provider      | Import Path                | Services                 |
| ------------- | -------------------------- | ------------------------ |
| AWS           | `diagrams-js/aws`          | 200+ services            |
| Azure         | `diagrams-js/azure`        | 100+ services            |
| GCP           | `diagrams-js/gcp`          | 80+ services             |
| Kubernetes    | `diagrams-js/k8s`          | 60+ resources            |
| Alibaba Cloud | `diagrams-js/alibabacloud` | 50+ services             |
| Oracle Cloud  | `diagrams-js/oci`          | 40+ services             |
| DigitalOcean  | `diagrams-js/digitalocean` | 20+ services             |
| IBM Cloud     | `diagrams-js/ibm`          | 30+ services             |
| Firebase      | `diagrams-js/firebase`     | 15+ services             |
| Elastic       | `diagrams-js/elastic`      | 10+ services             |
| On-Premises   | `diagrams-js/onprem`       | 80+ components           |
| Generic       | `diagrams-js/generic`      | 20+ icons                |
| SaaS          | `diagrams-js/saas`         | 30+ services             |
| OpenStack     | `diagrams-js/openstack`    | 40+ services             |
| Outscale      | `diagrams-js/outscale`     | 15+ services             |
| Programming   | `diagrams-js/programming`  | 30+ languages/frameworks |
| GIS           | `diagrams-js/gis`          | 20+ components           |

View the [full list](https://diagrams-js.hatemhosny.dev/docs/providers)

## Development

### Prerequisites

- Node.js 18+
- pnpm (preferred package manager)

### Setup

```bash
# Clone the repository
git clone https://github.com/hatemhosny/diagrams-js.git
cd diagrams-js/diagrams-js

# Install dependencies
vp install

# Run tests
vp test

# Run checks (lint, format, types)
vp check

# Build the library
vp run build
```

### Project Structure

```
diagrams-js/
├── src/              # Source code
│   ├── index.ts      # Main exports
│   ├── Diagram.ts    # Core diagram class
│   ├── Node.ts       # Base node class
│   ├── Edge.ts       # Edge/connection class
│   ├── Cluster.ts    # Cluster/grouping class
│   └── providers/    # Auto-generated provider classes
├── resources/        # Icon resources (PNG files)
├── scripts/          # Build and generation scripts
├── tests/            # Test files
└── docs/             # Documentation site
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project is a TypeScript port of the excellent Python [diagrams](https://github.com/mingrammer/diagrams) library by [mingrammer](https://github.com/mingrammer).

Icon resources are sourced from the Python diagrams repository and various cloud provider icon sets.

## Support

- 📖 [Documentation](https://diagrams-js.hatemhosny.dev)
- 🐛 [Issue Tracker](https://github.com/hatemhosny/diagrams-js/issues)
- 💬 [Discussions](https://github.com/hatemhosny/diagrams-js/discussions)

---

Made with ❤️ by the diagrams-js community
