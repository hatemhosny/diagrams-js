# Contributing to diagrams-js

Thank you for your interest in contributing to diagrams-js! This document provides guidelines and instructions for contributing to this project.

## Overview

The TypeScript port of the diagrams Python library now has a complete build system that:

- Compiles the core library to ESM JavaScript
- Compiles all 17 providers (2000+ classes) to JavaScript
- Generates proper package.json exports for tree-shaking
- Supports both Node.js and browser environments

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Development Setup

1. **Fork and clone the repository**:

   ```bash
   git clone https://github.com/YOUR_USERNAME/diagrams-js.git
   cd diagrams-js
   ```

2. **Install dependencies**:

   ```bash
   vp install
   ```

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
diagrams-js/
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
    ├── config.ts             # Provider configuration
    └── ...
```

## Usage

### Basic Usage (with providers)

```typescript
import { Diagram, setIconBaseDir } from "diagrams-js";
import { EC2, S3, Lambda } from "diagrams-js/aws/compute";
import { RDS } from "diagrams-js/aws/database";

const diagram = Diagram("My Architecture", {
  direction: "TB",
});

const web = diagram.add(EC2("web-server"));
const db = diagram.add(RDS("database"));
const storage = diagram.add(S3("storage"));

web.to(db).to(storage);

await diagram.save("architecture.svg");
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

```bash
npm install diagrams-js
```

```typescript
// Works out of the box
import { Diagram } from "diagrams-js";
import { EC2 } from "diagrams-js/aws/compute";
```

## Build Output

After running `vp run build`:

```
dist/
├── index.js               # Compiled core library
├── index.d.mts            # Type definitions
└── providers/             # Provider files
```

## How to Contribute

### Reporting Bugs

If you find a bug, please [open an issue](https://github.com/diagrams-js/diagrams-js/issues/new) with:

- A clear, descriptive title
- Steps to reproduce the bug
- Expected vs actual behavior
- Code example (if applicable)
- Environment details (Node.js version, OS, etc.)

### Suggesting Features

Feature suggestions are welcome! Please [open an issue](https://github.com/diagrams-js/diagrams-js/issues/new) with:

- A clear description of the feature
- Use cases and motivation
- Proposed API (if applicable)
- Examples of how it would be used

### Contributing Code

#### Types of Contributions

1. **Bug fixes**: Fix existing issues
2. **Feature additions**: Add new functionality
3. **Provider updates**: Add new cloud services or update existing ones
4. **Documentation**: Improve docs, add examples
5. **Performance**: Optimize rendering or bundle size
6. **Tests**: Add or improve test coverage

## Summary

✅ **Core Framework** - Diagram, Node, Edge, Cluster
✅ **Cross-Platform** - Node.js, Deno, Bun, Browsers
✅ **17 Providers** - 1000+ generated classes
✅ **Build System** - Vite+ + esbuild for fast compilation and assets inlining
✅ **TypeScript** - Full type support
✅ **Tests** - 100% passing tests
✅ **Ready for npm** - Can publish immediately

## Questions?

- Check existing [issues](https://github.com/diagrams-js/diagrams-js/issues)
- Start a [discussion](https://github.com/diagrams-js/diagrams-js/discussions)
- Review [documentation](https://diagrams-js.hatemhosny.dev)

## Thank You!

Your contributions help make diagrams-js better for everyone. We appreciate your time and effort!
