---
name: plugin-docker-compose
description: >-
  Import and export Docker Compose files with diagrams-js.
  Convert docker-compose.yml to architecture diagrams and vice versa.
type: feature
library: diagrams-js
---

# Docker Compose Plugin for diagrams-js

The Docker Compose plugin enables bidirectional conversion between Docker Compose YAML files and architecture diagrams.

## When to Use This Skill

Use this skill when you need to:

- Visualize Docker Compose configurations as architecture diagrams
- Generate Docker Compose files from existing diagrams
- Import multi-service applications into diagrams
- Export diagrams to deployment configurations
- Document container orchestration setups

## Quick Start

### Installation

```bash
npm install @diagrams-js/plugin-docker-compose
```

### Import from Docker Compose

```typescript
import { Diagram } from "diagrams-js";
import { dockerComposePlugin } from "@diagrams-js/plugin-docker-compose";

const diagram = Diagram("My Application");

// Register the plugin
await diagram.registerPlugins([dockerComposePlugin]);

// Import from Docker Compose YAML
const composeYaml = `
version: "3.8"
name: my-app
services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
    depends_on:
      - db
  db:
    image: postgres:13
    environment:
      POSTGRES_DB: mydb
`;

await diagram.import(composeYaml, "docker-compose");

// Render the diagram
const svg = await diagram.render();
```

### Export to Docker Compose

```typescript
import { Diagram, Node } from "diagrams-js";
import { dockerComposePlugin } from "@diagrams-js/plugin-docker-compose";

const diagram = Diagram("My Application");

// Create nodes with Docker Compose metadata
const web = diagram.add(Node("web"));
web.metadata = {
  compose: {
    image: "nginx:latest",
    ports: ["80:80"],
  },
};

const db = diagram.add(Node("db"));
db.metadata = {
  compose: {
    image: "postgres:13",
    environment: { POSTGRES_DB: "mydb" },
  },
};

// Create dependency
web.from(db);

// Register plugin and export
await diagram.registerPlugins([dockerComposePlugin]);
const composeYaml = await diagram.export("docker-compose");

console.log(composeYaml);
```

## Features

### Import Capabilities

- Parse Docker Compose YAML files
- Create nodes for each service with appropriate icons (based on image)
- Create clusters for compose projects
- Create edges for service dependencies (`depends_on`)
- Support for networks and volumes
- Store compose-specific metadata on nodes
- Import multiple compose files into separate clusters

### Export Capabilities

- Export diagrams to Docker Compose YAML format
- Include service configuration (image, ports, environment, volumes, etc.)
- Reconstruct dependencies from edges
- Include networks and volumes
- Generate valid Docker Compose files

## Supported Docker Compose Fields

### Services

- `image` - Maps to appropriate provider icons
- `build` - Build configuration
- `ports` - Port mappings
- `environment` - Environment variables
- `volumes` - Volume mounts
- `depends_on` - Service dependencies (creates edges)
- `networks` - Network connections
- `command` - Container command
- `working_dir` - Working directory
- `restart` - Restart policy
- `labels` - Container labels

### Networks

- `driver` - Network driver
- `external` - External network flag

### Volumes

- `driver` - Volume driver
- `external` - External volume flag

## Image to Icon Mapping

## Image to Icon Mapping

The plugin automatically maps common Docker images to provider icons (postgres→PostgreSQL, mysql→MySQL, mongo→MongoDB, redis→Redis, nginx→Nginx, etc.). Unrecognized images use a generic container icon.

## API Reference

### `dockerComposePlugin`

Pre-created Docker Compose plugin instance (no configuration needed).

```typescript
import { dockerComposePlugin } from "@diagrams-js/plugin-docker-compose";

// Use directly
await diagram.registerPlugins([dockerComposePlugin]);
```

The plugin provides:

- **Importer**: `name: "docker-compose"`, supports `.yml` and `.yaml` files
- **Exporter**: `name: "docker-compose"`, exports to `.yml` format

### `createDockerComposePlugin(config?)`

Factory function for creating a configured plugin instance.

```typescript
import { createDockerComposePlugin } from "@diagrams-js/plugin-docker-compose";

// Create with custom configuration
const plugin = createDockerComposePlugin({
  defaultVersion: "3.9",
  imageMappings: {
    // Map to provider icons
    "custom-db": { provider: "onprem", type: "database", resource: "Postgresql" },
    // Map to custom URL
    "my-api": "https://example.com/api-icon.svg",
    // Map to Iconify icon
    "docker-service": { iconify: "logos:docker" },
  },
});

await diagram.registerPlugins([plugin]);
```

### Exported Types

The plugin exports the `ImageMappings` type for TypeScript users:

```typescript
import { createDockerComposePlugin, ImageMappings } from "@diagrams-js/plugin-docker-compose";

// Type your image mappings for better IDE support
const mappings: ImageMappings = {
  "my-api": { provider: "onprem", type: "compute", resource: "Server" },
  "my-app": { iconify: "logos:docker" },
  "custom-service": "https://example.com/icon.svg",
};

const plugin = createDockerComposePlugin({
  imageMappings: mappings,
});
```

## Examples

### Visualize a Microservices Architecture

```typescript
import { Diagram } from "diagrams-js";
import { dockerComposePlugin } from "@diagrams-js/plugin-docker-compose";

const composeYaml = `
version: "3.8"
name: ecommerce-app
services:
  frontend:
    image: nginx:alpine
    ports:
      - "80:80"
    depends_on:
      - api
      
  api:
    image: node:18
    ports:
      - "3000:3000"
    depends_on:
      - db
      - cache
      
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: ecommerce
    volumes:
      - pgdata:/var/lib/postgresql/data
      
  cache:
    image: redis:7-alpine
    
volumes:
  pgdata:
`;

const diagram = Diagram("E-commerce Application");
await diagram.registerPlugins([dockerComposePlugin]);
await diagram.import(composeYaml, "docker-compose");

const svg = await diagram.render();
```

### Import Multiple Compose Files

```typescript
const compose1 = `
name: frontend-app
services:
  web:
    image: nginx
`;

const compose2 = `
name: backend-api
services:
  api:
    image: node:18
`;

const diagram = Diagram("Full Stack");
await diagram.registerPlugins([dockerComposePlugin]);

// Each compose file gets its own cluster
await diagram.import([compose1, compose2], "docker-compose");
```

### Export with Custom Metadata

```typescript
import { Diagram, Node } from "diagrams-js";
import { dockerComposePlugin } from "@diagrams-js/plugin-docker-compose";

const diagram = Diagram("Production Stack");

const web = diagram.add(Node("web"));
web.metadata = {
  compose: {
    image: "nginx:latest",
    ports: ["80:80", "443:443"],
    restart: "always",
    labels: {
      app: "web",
      env: "production",
    },
  },
};

await diagram.registerPlugins([dockerComposePlugin]);
const compose = await diagram.export("docker-compose");
```

## Runtime Support

- Node.js ✅
- Browser ✅
- Deno ✅
- Bun ✅

## Best Practices

### 1. Use Service Names as Labels

Service names in Docker Compose become node labels:

```yaml
services:
  web-server: # Node label will be "web-server"
    image: nginx
```

### 2. Store Metadata for Round-trip

When creating nodes programmatically, store compose metadata:

```typescript
const node = diagram.add(Node("my-service"));
node.metadata = {
  compose: {
    image: "my-image:latest",
    ports: ["8080:80"],
    environment: { NODE_ENV: "production" },
  },
};
```

### 3. Handle Dependencies

Use `depends_on` in compose or `.from()` in code to create edges:

```typescript
// In Docker Compose
web.depends_on:
  - db

// In diagrams-js
web.from(db);
```

### 4. Create Clusters via Diagram

Clusters are created through the diagram instance, not by calling `Cluster()` directly:

```typescript
import { Diagram, Node } from "diagrams-js";
import { ECS } from "diagrams-js/aws/compute";

const diagram = Diagram("My Architecture");

// ✅ Correct: Create cluster via diagram.cluster()
const cluster = diagram.cluster("Services");
cluster.add(Node("Web Server"));
cluster.add(ECS("API"));

// Nested clusters
const outer = diagram.cluster("Production");
const inner = outer.cluster("Services");
inner.add(ECS("API"));

// ❌ Incorrect: Don't call Cluster() directly
// const cluster = Cluster("VPC"); // This will throw an error
```

The plugin automatically creates clusters for each Docker Compose project during import.

### 5. Multiple Compose Files

Import multiple compose files to compare architectures:

```typescript
await diagram.import([stagingCompose, productionCompose], "docker-compose");
```

## Troubleshooting

### Plugin Not Found

```typescript
// Make sure to register the plugin before using import/export
import { dockerComposePlugin } from "@diagrams-js/plugin-docker-compose";

await diagram.registerPlugins([dockerComposePlugin]);
```

### Type Errors

The metadata property is typed as `Record<string, any>`, so you can access it directly:

```typescript
node.metadata = {
  compose: { ... }
};
```

### Missing Icons

The plugin maps common Docker images to provider icons automatically. For images that aren't recognized, you can define custom mappings using one of four formats:

```typescript
const plugin = createDockerComposePlugin({
  imageMappings: {
    // Format 1: Provider icon mapping
    "my-api": { provider: "onprem", type: "compute", resource: "Server" },

    // Format 2: Direct URL string
    "my-app": "https://example.com/icon.svg",

    // Format 3: URL object
    "my-service": { url: "https://example.com/icon.png" },

    // Format 4: Iconify icon (200,000+ icons available)
    "custom-app": { iconify: "logos:my-icon" },
  },
});
```

**Note:** The plugin validates Iconify format and logs a warning if the icon name doesn't include the `:` separator (e.g., `"logos:docker"` is correct, `"docker"` is not).

## Custom Image Mappings

When the plugin doesn't automatically recognize your Docker image, or you want to use a specific icon, you can define custom mappings.

**Priority Order:** The plugin checks mappings by **service name** first, then falls back to **image name**:

```yaml
# docker-compose.yml
services:
  my-api:
    image: nginx:latest # Would normally show nginx icon
```

```typescript
// Service name mapping takes precedence
"my-api": { iconify: "logos:aws" }     // Shows AWS icon

// Image name mapping is fallback
"nginx": { iconify: "logos:nginx" }   // Used if no "my-api" mapping
```

});

```

Browse available icons at https://icon-sets.iconify.design/

## Further Reading

- diagrams-js Plugin System: See `diagrams-js-plugin-system` skill
- diagrams-js Documentation: https://diagrams-js.hatemhosny.dev
- Docker Compose Reference: https://docs.docker.com/compose/
```
