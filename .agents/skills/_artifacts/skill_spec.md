# diagrams-js — Skill Spec

diagrams-js is a TypeScript port of the Python diagrams library for drawing cloud system architecture diagrams as code. It provides 2000+ pre-built node classes across 17+ cloud providers (AWS, Azure, GCP, Kubernetes, etc.) and renders diagrams using WebAssembly-powered Graphviz. The library works in browsers, Node.js, Deno, and Bun.

## Domains

| Domain                  | Description                                   | Skills                                                   |
| ----------------------- | --------------------------------------------- | -------------------------------------------------------- |
| Diagram Creation        | Creating, configuring, and rendering diagrams | getting-started, diagram-configuration, rendering-export |
| Node Management         | Adding and configuring nodes                  | provider-nodes, custom-nodes                             |
| Connections & Flow      | Connecting nodes and controlling data flow    | node-connections                                         |
| Organization & Layout   | Grouping nodes and controlling layout         | clusters-grouping                                        |
| Environment Integration | Using in different environments               | browser-integration, nodejs-integration                  |
| Migration & Interop     | Migrating from Python and integrating         | python-migration                                         |
| Extensibility           | Plugin system and creating custom plugins     | diagrams-js-plugin-system, creating-plugins              |

## Skill Inventory

| Skill                     | Type      | Domain                  | What it covers                                                | Failure modes |
| ------------------------- | --------- | ----------------------- | ------------------------------------------------------------- | ------------- |
| getting-started           | lifecycle | diagram-creation        | Installation, first diagram, render                           | 2             |
| diagram-configuration     | core      | diagram-creation        | Direction, theme, curve style, attributes                     | 3             |
| rendering-export          | core      | diagram-creation        | SVG, PNG, JPG, DOT, data URLs, save                           | 3             |
| provider-nodes            | core      | node-management         | 17+ providers, 2000+ nodes, imports                           | 2             |
| custom-nodes              | core      | node-management         | External icons, URLs, data URLs, local files                  | 2             |
| node-connections          | core      | connections-flow        | to(), from(), with(), Edge styling                            | 4             |
| clusters-grouping         | core      | organization-layout     | Clusters, nesting, grouping                                   | 2             |
| browser-integration       | framework | environment-integration | CDN, bundlers, DOM, data URLs                                 | 2             |
| nodejs-integration        | core      | environment-integration | Files, PNG/JPG with sharp, local icons                        | 1             |
| python-migration          | lifecycle | migration-interop       | Operator mapping, syntax differences                          | 3             |
| diagrams-js-plugin-system | feature   | extensibility           | Importers, exporters, metadata, hooks                         | 0             |
| creating-plugins          | feature   | extensibility           | Package structure, context.lib, loadResourcesList, publishing | 0             |

## Failure Mode Inventory

### getting-started (2 failure modes)

| #   | Mistake                               | Priority | Source          | Cross-skill?     |
| --- | ------------------------------------- | -------- | --------------- | ---------------- |
| 1   | Not awaiting diagram.render()         | HIGH     | source code     | rendering-export |
| 2   | Using wrong import path for providers | HIGH     | migration guide | provider-nodes   |

### diagram-configuration (3 failure modes)

| #   | Mistake                       | Priority | Source      | Cross-skill? |
| --- | ----------------------------- | -------- | ----------- | ------------ |
| 1   | Using invalid direction value | HIGH     | source code | —            |
| 2   | Using invalid theme name      | HIGH     | source code | —            |
| 3   | Using invalid curve style     | HIGH     | source code | —            |

### rendering-export (3 failure modes)

| #   | Mistake                                      | Priority | Source      | Cross-skill? |
| --- | -------------------------------------------- | -------- | ----------- | ------------ |
| 1   | Trying to render PNG without sharp installed | CRITICAL | source code | —            |
| 2   | Assuming render() always returns string      | HIGH     | source code | —            |
| 3   | Calling save() without filepath in browser   | MEDIUM   | source code | —            |

### provider-nodes (2 failure modes)

| #   | Mistake                                   | Priority | Source          | Cross-skill?     |
| --- | ----------------------------------------- | -------- | --------------- | ---------------- |
| 1   | Importing from wrong provider path        | HIGH     | migration guide | —                |
| 2   | Assuming nodes auto-register with diagram | CRITICAL | migration guide | node-connections |

### custom-nodes (2 failure modes)

| #   | Mistake                          | Priority | Source      | Cross-skill?        |
| --- | -------------------------------- | -------- | ----------- | ------------------- |
| 1   | Using local file path in browser | HIGH     | docs        | browser-integration |
| 2   | Not handling icon load failure   | MEDIUM   | source code | —                   |

### node-connections (4 failure modes)

| #   | Mistake                                      | Priority | Source          | Cross-skill?     |
| --- | -------------------------------------------- | -------- | --------------- | ---------------- |
| 1   | Confusing .to() and .from() direction        | HIGH     | migration guide | —                |
| 2   | Using Python >> operator syntax              | CRITICAL | migration guide | python-migration |
| 3   | Trying to connect nodes not added to diagram | CRITICAL | source code     | provider-nodes   |
| 4   | Passing wrong argument order with Edge       | HIGH     | docs            | —                |

### clusters-grouping (2 failure modes)

| #   | Mistake                                        | Priority | Source          | Cross-skill?     |
| --- | ---------------------------------------------- | -------- | --------------- | ---------------- |
| 1   | Calling diagram.add() instead of cluster.add() | HIGH     | docs            | —                |
| 2   | Using Python Cluster context manager syntax    | CRITICAL | migration guide | python-migration |

### browser-integration (2 failure modes)

| #   | Mistake                                  | Priority | Source | Cross-skill?       |
| --- | ---------------------------------------- | -------- | ------ | ------------------ |
| 1   | Trying to use Node.js fs APIs in browser | CRITICAL | docs   | nodejs-integration |
| 2   | Not using type="module" on script tag    | HIGH     | docs   | —                  |

### nodejs-integration (1 failure mode)

| #   | Mistake                                    | Priority | Source | Cross-skill? |
| --- | ------------------------------------------ | -------- | ------ | ------------ |
| 1   | Writing Uint8Array directly without Buffer | MEDIUM   | docs   | —            |

### python-migration (3 failure modes)

| #   | Mistake                                       | Priority | Source          | Cross-skill?     |
| --- | --------------------------------------------- | -------- | --------------- | ---------------- |
| 1   | Using Python context manager (with statement) | CRITICAL | migration guide | getting-started  |
| 2   | Forgetting explicit render() call             | HIGH     | migration guide | rendering-export |
| 3   | Using Python list >> node syntax              | CRITICAL | migration guide | node-connections |
| 4   | Not importing nodes from correct paths        | HIGH     | migration guide | provider-nodes   |

## Tensions

| Tension                                | Skills                                  | Agent implication                                                                                                  |
| -------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Implicit vs explicit node registration | provider-nodes, node-connections        | Agents assume Python-like behavior and forget to call diagram.add(), causing silent failures when connecting nodes |
| Sync vs async rendering                | getting-started, rendering-export       | Agents may forget await, causing code to work with Promise objects instead of actual output                        |
| Browser vs Node.js capabilities        | browser-integration, nodejs-integration | Agents may generate code that uses Node.js APIs in browser context or vice versa                                   |

## Cross-References

| From             | To                    | Reason                                                             |
| ---------------- | --------------------- | ------------------------------------------------------------------ |
| getting-started  | diagram-configuration | After creating first diagram, users want to customize appearance   |
| getting-started  | rendering-export      | Basic diagram creation leads to wanting different output formats   |
| provider-nodes   | node-connections      | After creating nodes, users need to connect them                   |
| provider-nodes   | clusters-grouping     | Complex diagrams need organization with clusters                   |
| python-migration | getting-started       | Migrating users need to learn new syntax basics                    |
| python-migration | node-connections      | Connection syntax is a major difference from Python                |
| custom-nodes     | browser-integration   | Custom nodes with external icons need special handling in browsers |
| custom-nodes     | nodejs-integration    | Custom nodes can use local files in Node.js                        |

## Subsystems & Reference Candidates

| Skill                 | Subsystems                              | Reference candidates                                      |
| --------------------- | --------------------------------------- | --------------------------------------------------------- |
| provider-nodes        | aws, azure, gcp, k8s, onprem, +9 others | Provider category reference (20+ categories per provider) |
| diagram-configuration | —                                       | Theme colors, curve styles, direction options             |
| rendering-export      | —                                       | Format options, scale/width/height                        |

## Remaining Gaps

| Skill             | Question                                                                          | Status |
| ----------------- | --------------------------------------------------------------------------------- | ------ |
| ci-cd-integration | What are the best practices for running diagrams-js in CI/CD pipelines?           | open   |
| custom-nodes      | Are there any rate limits or CORS issues with loading external icons in browsers? | open   |
| rendering-export  | What is the recommended approach for rendering large diagrams with 100+ nodes?    | open   |

## Recommended Skill File Structure

- **Core skills:** getting-started, diagram-configuration, rendering-export, provider-nodes, custom-nodes, node-connections, clusters-grouping
- **Framework skills:** browser-integration, nodejs-integration
- **Lifecycle skills:** python-migration
- **Feature skills:** diagrams-js-plugin-system, creating-plugins
- **Reference files:** Provider reference with 17 providers and 100+ categories

## Composition Opportunities

| Library    | Integration points              | Composition skill needed?     |
| ---------- | ------------------------------- | ----------------------------- |
| React      | Embedding SVGs, component usage | No - framework-agnostic       |
| Vue        | Embedding SVGs, component usage | No - framework-agnostic       |
| sharp      | PNG/JPG rendering in Node.js    | Covered in nodejs-integration |
| Docusaurus | Documentation site integration  | No - docs-specific            |

## Docs Read Checklist

- [x] README.md
- [x] docs/README.md
- [x] docs/docs/ai-guide.mdx
- [x] docs/docs/getting-started/quickstart.mdx
- [x] docs/docs/getting-started/installation.mdx
- [x] docs/docs/getting-started/examples.mdx
- [x] docs/docs/guides/diagram.mdx
- [x] docs/docs/guides/api.mdx
- [x] docs/docs/guides/node.mdx
- [x] docs/docs/guides/edge.mdx
- [x] docs/docs/guides/clusters.mdx
- [x] docs/docs/guides/custom-nodes.mdx
- [x] docs/docs/guides/providers.mdx
- [x] docs/docs/guides/rendering.mdx
- [x] docs/docs/guides/migration.mdx
- [x] CHANGELOG.md
- [x] tests/index.test.ts
