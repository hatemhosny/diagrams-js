# diagrams-ts Build System

## Overview

The TypeScript port of the diagrams Python library now has a complete build system that:

- Compiles the core library to ESM JavaScript
- Compiles all 17 providers (1000+ classes) to JavaScript
- Generates proper package.json exports for tree-shaking
- Supports both Node.js and browser environments

## Build Commands

```bash
# Build everything (core + providers)
vp run build

# Build only core library
vp run build:core

# Build only providers
vp run build:providers

# Development mode (watch)
vp run dev

# Run tests
vp test

# Check types and lint
vp check
```

## Project Structure

```
diagrams-ts/
├── src/
│   ├── core/                 # Core classes (Diagram, Node, Edge, Cluster)
│   │   ├── Diagram.ts
│   │   ├── Node.ts
│   │   ├── Edge.ts
│   │   ├── Cluster.ts
│   │   └── ...
│   ├── providers/            # Generated provider classes
│   │   ├── aws/
│   │   │   ├── index.ts      # Base _Aws class
│   │   │   ├── compute.ts    # EC2, ECS, Lambda, etc.
│   │   │   ├── storage.ts    # S3, EBS, etc.
│   │   │   └── ... (26 modules)
│   │   ├── gcp/
│   │   ├── azure/
│   │   ├── k8s/
│   │   └── ... (14 more providers)
│   └── index.ts              # Main exports
├── dist/
│   ├── index.mjs             # Compiled core library
│   ├── index.d.mts           # Type definitions
│   └── providers/            # Compiled providers
│       ├── aws/
│       ├── gcp/
│       └── ...
├── resources/                # Icon files (copied from Python lib)
│   ├── aws/
│   ├── gcp/
│   └── ...
└── scripts/
    ├── generate.ts           # Generate providers from resources
    ├── build-providers.mjs   # Build providers to JavaScript
    └── config.ts             # Provider configuration
```

## Usage

### Basic Usage (with providers)

```typescript
import { Diagram, setIconBaseDir } from "diagrams-ts";
import { EC2, S3, Lambda } from "diagrams-ts/providers/aws/compute";
import { RDS } from "diagrams-ts/providers/aws/database";

setIconBaseDir("resources");

const diagram = new Diagram("My Architecture", {
  direction: "TB",
  outformat: "svg",
});

const web = diagram.add(new EC2("web-server"));
const db = diagram.add(new RDS("database"));
const storage = diagram.add(new S3("storage"));

web.to(db).to(storage);

await diagram.save("architecture.svg");
```

### Tree-Shaking Benefits

Only the providers you import are included in your bundle:

```typescript
// ✅ Good - Only AWS compute classes bundled
import { EC2 } from "diagrams-ts/providers/aws/compute";

// ❌ Bad - Would bundle entire library
import * as providers from "diagrams-ts/providers";
```

## Providers (17 Total)

- **AWS** - 500+ classes (EC2, S3, Lambda, RDS, etc.)
- **Azure** - 400+ classes
- **GCP** - 100+ classes (Compute, Storage, BigQuery, etc.)
- **Kubernetes** - Pods, Deployments, Services, etc.
- **Alibaba Cloud**
- **Oracle Cloud (OCI)**
- **IBM Cloud**
- **Firebase**
- **DigitalOcean**
- **Elastic**
- **Generic** - VPN, OS icons, etc.
- **OpenStack**
- **Outscale**
- **GIS** - Geo/ mapping tools
- **On-Premises** - Docker, Kubernetes, databases
- **Programming** - Languages, frameworks
- **SaaS** - Third-party services

## npm Publishing

The package includes:

- ✅ Compiled JavaScript (ESM)
- ✅ TypeScript definitions
- ✅ Icon resources
- ✅ Tree-shakable exports

Users can install and use immediately without compiling:

```bash
npm install diagrams-ts
```

```typescript
// Works out of the box
import { Diagram } from "diagrams-ts";
import { EC2 } from "diagrams-ts/providers/aws/compute";
```

## Build Output

After running `vp run build`:

```
dist/
├── index.mjs              # Core library (~1.5 MB)
├── index.d.mts            # Type definitions
└── providers/             # Compiled providers
    ├── aws/index.js
    ├── aws/compute.js
    ├── aws/storage.js
    └── ...
```

## Next Steps

1. **Add C4 Model Support** - Port C4 architecture diagrams
2. **Custom Nodes** - Support user-defined icons
3. **Migration Tool** - Python-to-TypeScript codemod
4. **Documentation** - API docs and examples
5. **CI/CD** - Automated testing and publishing

## Summary

✅ **Core Framework** - Diagram, Node, Edge, Cluster
✅ **Cross-Platform** - Node.js, Deno, Bun, Browsers
✅ **17 Providers** - 1000+ generated classes
✅ **Build System** - Vite+ + esbuild for fast compilation
✅ **Tree-Shaking** - Import only what you need
✅ **TypeScript** - Full type support
✅ **Tests** - 18 passing tests
✅ **Ready for npm** - Can publish immediately
