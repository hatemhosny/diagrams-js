# diagrams-js — Skill Spec

diagrams-js is a TypeScript port of the Python diagrams library for drawing cloud system architecture diagrams as code. It provides 2000+ pre-built node classes across 17+ cloud providers (AWS, Azure, GCP, Kubernetes, etc.) and renders diagrams using WebAssembly-powered Graphviz. The library works in browsers, Node.js, Deno, and Bun.

## Domains

| Domain                  | Description                                                | Skills                                                                                                        |
| ----------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Diagram Creation        | Creating, configuring, rendering, and serializing diagrams | getting-started, diagram-configuration, rendering-export, json-serialization, svg-serialization, diagram-diff |
| Node Management         | Adding and configuring nodes                               | provider-nodes, custom-nodes                                                                                  |
| Connections & Flow      | Connecting nodes and controlling data flow                 | node-connections                                                                                              |
| Organization & Layout   | Grouping nodes and controlling layout                      | clusters-grouping                                                                                             |
| Environment Integration | Using in different environments                            | browser-integration, nodejs-integration                                                                       |
| Migration & Interop     | Migrating from Python and integrating                      | python-migration                                                                                              |
| Extensibility           | Plugin system and creating custom plugins                  | diagrams-js-plugin-system, creating-plugins, plugin-docker-compose, plugin-kubernetes                         |
| CLI & Tooling           | Command-line interface and developer tooling               | cli                                                                                                           |

## Skill Inventory

| Skill                     | Type      | Domain                  | What it covers                                                | Failure modes |
| ------------------------- | --------- | ----------------------- | ------------------------------------------------------------- | ------------- |
| getting-started           | lifecycle | diagram-creation        | Installation, first diagram, render, ESM requirements         | 3             |
| diagram-configuration     | core      | diagram-creation        | Direction, theme, curve style, attributes                     | 3             |
| rendering-export          | core      | diagram-creation        | SVG, PNG, JPG, DOT, data URLs, save, SVG DOM manipulation     | 4             |
| json-serialization        | core      | diagram-creation        | JSON export/import, infrastructure-as-code integration        | 3             |
| svg-serialization         | core      | diagram-creation        | SVG round-trip, embedded metadata, clean SVG                  | 3             |
| diagram-diff              | core      | diagram-creation        | Visual diff, node matching, change tracking                   | 3             |
| provider-nodes            | core      | node-management         | 17+ providers, 2000+ nodes, imports                           | 2             |
| custom-nodes              | core      | node-management         | External icons, URLs, data URLs, local files                  | 2             |
| node-connections          | core      | connections-flow        | to(), from(), with(), Edge styling, DOM attributes            | 4             |
| clusters-grouping         | core      | organization-layout     | Clusters, nesting, grouping, themed backgrounds               | 2             |
| browser-integration       | framework | environment-integration | CDN, bundlers, DOM, data URLs, SVG interactivity              | 2             |
| nodejs-integration        | core      | environment-integration | Files, PNG/JPG with sharp, local icons                        | 1             |
| python-migration          | lifecycle | migration-interop       | Operator mapping, syntax differences, explicit add/render     | 4             |
| diagrams-js-plugin-system | feature   | extensibility           | Importers, exporters, metadata, hooks, registry               | 0             |
| creating-plugins          | feature   | extensibility           | Package structure, context.lib, loadResourcesList, publishing | 2             |
| plugin-docker-compose     | feature   | extensibility           | Docker Compose import/export, image mappings                  | 0             |
| plugin-kubernetes         | feature   | extensibility           | Kubernetes manifest import/export, resource types             | 0             |
| cli                       | tooling   | tooling                 | Render, export, diff, init, watch, plugin management          | 3             |

## Failure Mode Inventory

### getting-started (3 failure modes)

| #   | Mistake                               | Priority | Source          | Cross-skill?     |
| --- | ------------------------------------- | -------- | --------------- | ---------------- |
| 1   | Not awaiting diagram.render()         | HIGH     | source code     | rendering-export |
| 2   | Using wrong import path for providers | HIGH     | migration guide | provider-nodes   |
| 3   | Assuming nodes auto-register          | CRITICAL | migration guide | node-connections |

### diagram-configuration (3 failure modes)

| #   | Mistake                       | Priority | Source      | Cross-skill? |
| --- | ----------------------------- | -------- | ----------- | ------------ |
| 1   | Using invalid direction value | HIGH     | source code | —            |
| 2   | Using invalid theme name      | HIGH     | source code | —            |
| 3   | Using invalid curve style     | HIGH     | source code | —            |

### rendering-export (4 failure modes)

| #   | Mistake                                      | Priority | Source      | Cross-skill?        |
| --- | -------------------------------------------- | -------- | ----------- | ------------------- |
| 1   | Trying to render PNG without sharp installed | CRITICAL | source code | nodejs-integration  |
| 2   | Assuming render() always returns string      | HIGH     | source code | —                   |
| 3   | Calling save() without filepath in browser   | MEDIUM   | source code | browser-integration |
| 4   | Forgetting to await Diagram.fromJSON()       | HIGH     | source code | json-serialization  |

### json-serialization (3 failure modes)

| #   | Mistake                                | Priority | Source      | Cross-skill?   |
| --- | -------------------------------------- | -------- | ----------- | -------------- |
| 1   | Forgetting to await Diagram.fromJSON() | CRITICAL | source code | —              |
| 2   | Missing required 'nodes' array         | HIGH     | source code | —              |
| 3   | Assuming iconUrl is required           | MEDIUM   | source code | provider-nodes |

### svg-serialization (3 failure modes)

| #   | Mistake                                                | Priority | Source      | Cross-skill?     |
| --- | ------------------------------------------------------ | -------- | ----------- | ---------------- |
| 1   | Trying to import plain SVG without embedded data       | CRITICAL | source code | —                |
| 2   | Assuming embedData defaults to false                   | HIGH     | source code | —                |
| 3   | Using diagram.export('svg') expecting different output | MEDIUM   | source code | rendering-export |

### diagram-diff (3 failure modes)

| #   | Mistake                                            | Priority | Source      | Cross-skill?     |
| --- | -------------------------------------------------- | -------- | ----------- | ---------------- |
| 1   | Forgetting to await renderDiff                     | CRITICAL | source code | rendering-export |
| 2   | Expecting modified nodes without matching criteria | HIGH     | docs        | —                |
| 3   | Confusing modified with removed+added              | MEDIUM   | docs        | —                |

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

### python-migration (4 failure modes)

| #   | Mistake                                       | Priority | Source          | Cross-skill?     |
| --- | --------------------------------------------- | -------- | --------------- | ---------------- |
| 1   | Using Python context manager (with statement) | CRITICAL | migration guide | getting-started  |
| 2   | Forgetting explicit render() call             | HIGH     | migration guide | rendering-export |
| 3   | Using Python list >> node syntax              | CRITICAL | migration guide | node-connections |
| 4   | Not importing nodes from correct paths        | HIGH     | migration guide | provider-nodes   |

### creating-plugins (2 failure modes)

| #   | Mistake                                    | Priority | Source | Cross-skill?              |
| --- | ------------------------------------------ | -------- | ------ | ------------------------- |
| 1   | Importing runtime exports from diagrams-js | CRITICAL | docs   | diagrams-js-plugin-system |
| 2   | Not adding diagrams-js to NPM keywords     | MEDIUM   | docs   | —                         |

### cli (3 failure modes)

| #   | Mistake                              | Priority | Source      | Cross-skill?     |
| --- | ------------------------------------ | -------- | ----------- | ---------------- |
| 1   | Wrong input file format              | HIGH     | source code | —                |
| 2   | Forgetting output format for PNG/JPG | MEDIUM   | source code | rendering-export |
| 3   | Wrong diff command syntax            | CRITICAL | source code | diagram-diff     |

## Tensions

| Tension                                | Skills                                                                                 | Agent implication                                                                                                  |
| -------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Implicit vs explicit node registration | provider-nodes, node-connections, getting-started                                      | Agents assume Python-like behavior and forget to call diagram.add(), causing silent failures when connecting nodes |
| Sync vs async rendering                | getting-started, rendering-export, json-serialization, svg-serialization, diagram-diff | Agents may forget await, causing code to work with Promise objects instead of actual output                        |
| Browser vs Node.js capabilities        | browser-integration, nodejs-integration, custom-nodes                                  | Agents may generate code that uses Node.js APIs in browser context or vice versa                                   |
| Serialization format choice            | json-serialization, svg-serialization                                                  | Agents need to choose appropriate format based on use case (version control vs distribution)                       |

## Cross-References

| From                  | To                        | Reason                                                               |
| --------------------- | ------------------------- | -------------------------------------------------------------------- |
| getting-started       | diagram-configuration     | After creating first diagram, users want to customize appearance     |
| getting-started       | rendering-export          | Basic diagram creation leads to wanting different output formats     |
| getting-started       | provider-nodes            | Basic diagrams need cloud provider icons                             |
| provider-nodes        | node-connections          | After creating nodes, users need to connect them                     |
| provider-nodes        | clusters-grouping         | Complex diagrams need organization with clusters                     |
| provider-nodes        | custom-nodes              | When provider icons don't cover a service, custom nodes fill the gap |
| node-connections      | clusters-grouping         | Connected nodes often need visual grouping                           |
| custom-nodes          | browser-integration       | Custom nodes with external icons need special handling in browsers   |
| custom-nodes          | nodejs-integration        | Custom nodes can use local files in Node.js                          |
| python-migration      | getting-started           | Migrating users need to learn new syntax basics                      |
| python-migration      | provider-nodes            | Import paths are a major difference from Python                      |
| python-migration      | node-connections          | Connection syntax is a major difference from Python                  |
| python-migration      | clusters-grouping         | Cluster syntax differs significantly from Python context managers    |
| rendering-export      | json-serialization        | Rendering leads to wanting persistent data formats                   |
| rendering-export      | svg-serialization         | SVG output supports round-trip editing via embedded metadata         |
| json-serialization    | svg-serialization         | Alternative serialization formats serve different use cases          |
| diagram-diff          | json-serialization        | Diff operates on JSON representation of diagrams                     |
| cli                   | diagram-diff              | CLI provides git-integrated diff commands                            |
| cli                   | diagrams-js-plugin-system | CLI auto-detects and uses plugins for import/export                  |
| creating-plugins      | diagrams-js-plugin-system | Creating plugins requires understanding the plugin system API        |
| plugin-docker-compose | diagrams-js-plugin-system | Implements plugin system interfaces                                  |
| plugin-kubernetes     | diagrams-js-plugin-system | Implements plugin system interfaces                                  |

## Subsystems & Reference Candidates

| Skill                     | Subsystems                                                 | Reference candidates                                      |
| ------------------------- | ---------------------------------------------------------- | --------------------------------------------------------- |
| provider-nodes            | aws, azure, gcp, k8s, onprem, +13 others                   | Provider category reference (20+ categories per provider) |
| cli                       | render, export, diff, init, watch, plugins                 | Command reference, .diagramsrc.json schema                |
| diagram-diff              | fingerprint-matching, edge-connectivity, label-fingerprint | Diff options, change types, render options                |
| diagrams-js-plugin-system | importers, exporters, metadata-providers, hooks            | Plugin API types, hook events, registry methods           |
| diagram-configuration     | —                                                          | Theme colors, curve styles, direction options             |
| rendering-export          | —                                                          | Format options, scale/width/height                        |

## Remaining Gaps

| Skill             | Question                                                                          | Status |
| ----------------- | --------------------------------------------------------------------------------- | ------ |
| ci-cd-integration | What are the best practices for running diagrams-js in CI/CD pipelines?           | open   |
| custom-nodes      | Are there any rate limits or CORS issues with loading external icons in browsers? | open   |
| rendering-export  | What is the recommended approach for rendering large diagrams with 100+ nodes?    | open   |
| diagram-diff      | How does diff performance scale with diagram size?                                | open   |
| plugin-ecosystem  | How should users discover and evaluate third-party plugins?                       | open   |

## Recommended Skill File Structure

- **Core skills:** getting-started, diagram-configuration, rendering-export, json-serialization, svg-serialization, diagram-diff, provider-nodes, custom-nodes, node-connections, clusters-grouping
- **Framework skills:** browser-integration, nodejs-integration
- **Lifecycle skills:** python-migration
- **Feature skills:** diagrams-js-plugin-system, creating-plugins, plugin-docker-compose, plugin-kubernetes
- **Tooling skills:** cli
- **Reference files:** Provider reference with 17 providers and 100+ categories, CLI command reference

## Composition Opportunities

| Library        | Integration points              | Composition skill needed?     |
| -------------- | ------------------------------- | ----------------------------- |
| React          | Embedding SVGs, component usage | No - framework-agnostic       |
| Vue            | Embedding SVGs, component usage | No - framework-agnostic       |
| sharp          | PNG/JPG rendering in Node.js    | Covered in nodejs-integration |
| Docusaurus     | Documentation site integration  | No - docs-specific            |
| Docker Compose | Infrastructure visualization    | plugin-docker-compose         |
| Kubernetes     | Manifest visualization          | plugin-kubernetes             |

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
- [x] docs/docs/guides/json-serialization.mdx
- [x] docs/docs/guides/diagram-diff.mdx
- [x] docs/docs/guides/cli.mdx
- [x] CHANGELOG.md
- [x] tests/index.test.ts
