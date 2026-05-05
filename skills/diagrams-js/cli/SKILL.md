---
name: diagrams-js/cli
description: >
  Command-line interface for diagrams-js. Install @diagrams-js/cli and use
  diagrams <command> to render, export, diff, init, watch, and manage
  plugins. Cross-platform CLI with programmatic API. Supports file and stdin
  input.
type: tooling
library: diagrams-js
library_version: "0.5.0"
requires:
  - diagrams-js/getting-started
sources:
  - "hatemhosny/diagrams-js:docs/docs/guides/cli.mdx"
  - "hatemhosny/diagrams-js:cli/src/cli.ts"
---

This skill builds on diagrams-js/getting-started. Read it first for foundational concepts.

# diagrams-js CLI

Command-line interface for diagrams-js. Render diagrams, import via plugins, export, generate diffs, scaffold new files, and watch for changes. Supports file and stdin input.

## Installation

```bash
npm install -g @diagrams-js/cli
```

Or use with `npx`:

```bash
npx @diagrams-js/cli render diagram.ts -o out.svg
```

## Commands

### render — Render diagrams and import via plugins

```bash
# Render diagram source to SVG (default: same-name.svg)
diagrams render diagram.ts

# Render to PNG
diagrams render diagram.ts -o diagram.png

# Render with options
diagrams render diagram.ts -f svg -t dark -d LR -o out.svg

# Import Docker Compose via plugin and render to SVG
diagrams render docker-compose.yml

# Import Kubernetes via plugin
diagrams render k8s.yaml -p kubernetes -o architecture.svg

# Output to stdout
diagrams render diagram.ts --stdout

# Write to file AND stdout
diagrams render diagram.ts -o out.svg --stdout

# Render from stdin
cat diagram.json | diagrams render - -f json -o out.svg

```

**Input sources:** file (`.ts`, `.js`, `.mjs`, `.json`, `.svg`, `.yaml`, `.yml`), stdin (`-`)

**Output formats:** `svg`, `png`, `jpg`, `dot`, `json`

Plugin auto-detection for `.yaml`/`.yml`:

- Files with `services:` → docker-compose
- Files with `apiVersion:` and `kind:` → kubernetes

### export — Export to plugin formats

```bash
# Export to Docker Compose (default: same-name.yml)
diagrams export diagram.json -f docker-compose

# Export to Kubernetes
diagrams export diagram.ts -f kubernetes -o manifest.yaml

# Export from stdin
cat diagram.json | diagrams export - -f docker-compose

# Export to stdout
diagrams export diagram.json -f docker-compose --stdout
```

### diff — Visual diffs in git

```bash
# Diff against HEAD (default: diagram-diff.html)
diagrams diff show HEAD diagram.ts

# Diff with explicit output
diagrams diff show HEAD diagram.ts -o diff.html

# Diff to stdout
diagrams diff show HEAD diagram.ts --stdout

# Diff between branches
diagrams diff show main...feature diagram.json -f html

# List changed files
diagrams diff list HEAD

# Batch diff all changes
diagrams diff batch main...feature -o ./diffs
```

### init — Scaffold new diagrams

```bash
# Basic diagram
diagrams init "My Architecture"

# AWS template
diagrams init "AWS Stack" -t aws -o aws.ts

# Kubernetes template
diagrams init "K8s Cluster" -t k8s -o k8s.ts
```

**Templates:** `basic`, `aws`, `k8s`

### watch — Watch and auto-render

```bash
# Watch file and re-render on changes (default: same-name.svg)
diagrams watch diagram.ts

# Watch with explicit output
diagrams watch diagram.ts -o out.svg

# Watch with PNG output
diagrams watch diagram.ts -f png --scale 2 -o out.png
```

### plugins — Discover plugins

```bash
# List installed plugins
diagrams plugins list

# Show plugin details
diagrams plugins info docker-compose
```

## Configuration

Create `.diagramsrc.json`:

```json
{
  "format": "svg",
  "theme": "light",
  "direction": "TB",
  "curveStyle": "ortho",
  "scale": 2,
  "diff": {
    "layout": "side-by-side",
    "showUnchanged": "show",
    "ignorePosition": true
  }
}
```

## Common Mistakes

### HIGH Wrong input file format

Wrong:

```bash
diagrams render diagram.txt  # .txt not supported
```

Correct:

```bash
diagrams render diagram.ts   # .ts, .js, .json, .svg, .yaml, .yml supported
```

### MEDIUM Forgetting output format for PNG/JPG

Wrong:

```bash
diagrams render diagram.ts -o out.jpg  # Missing -f jpg
```

Correct:

```bash
diagrams render diagram.ts -f jpg -o out.jpg
```

### CRITICAL Wrong diff command syntax

Wrong:

```bash
diagrams diff HEAD diagram.ts  # Missing subcommand
```

Correct:

```bash
diagrams diff show HEAD diagram.ts
```

## See Also

- diagrams-js/getting-started — Basic diagram creation
- diagrams-js/diagram-diff — Visual diff details
- diagrams-js-plugin-system — Creating custom plugins
- diagrams-js/github-action — CI/CD integration
