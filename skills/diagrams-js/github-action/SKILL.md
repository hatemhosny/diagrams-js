---
name: diagrams-js/github-action
description: >
  GitHub Action for diagrams-js. Use diagrams-js/action@v1 in CI/CD workflows
  to render, diff, import, and validate architecture diagrams. Supports PR
  comments, artifact uploads, and plugin integration.
type: tooling
library: diagrams-js
library_version: "0.5.0"
requires:
  - diagrams-js/getting-started
  - diagrams-js/cli
sources:
  - "hatemhosny/diagrams-js:docs/docs/guides/github-action.mdx"
  - "hatemhosny/diagrams-js:action/action.yml"
---

This skill builds on diagrams-js/getting-started and diagrams-js/cli. Read them first for foundational concepts.

# diagrams-js GitHub Action

Use diagrams-js in GitHub Actions for CI/CD. Render diagrams on push, generate visual diffs in PRs, validate diagrams, and auto-render from Docker Compose or Kubernetes files.

## Quick Start

```yaml
- uses: diagrams-js/action@v1
  with:
    command: render
    args: architecture.ts
    output: architecture.svg
```

## Inputs

| Input               | Description                                       | Default           |
| ------------------- | ------------------------------------------------- | ----------------- |
| `command`           | CLI command: `render`, `import`, `export`, `diff` | `render`          |
| `args`              | Arguments for the command                         | `""`              |
| `format`            | Output format                                     | `svg`             |
| `output`            | Output file path                                  | `""`              |
| `theme`             | Color theme                                       | `""`              |
| `direction`         | Layout direction                                  | `""`              |
| `plugin`            | Plugin name                                       | `""`              |
| `comment-pr`        | Comment on PR                                     | `false`           |
| `upload-artifact`   | Upload artifact                                   | `true`            |
| `artifact-name`     | Artifact name                                     | `diagrams-output` |
| `working-directory` | Working directory                                 | `""`              |
| `node-version`      | Node.js version                                   | `22`              |
| `cli-version`       | CLI version                                       | `latest`          |

## Outputs

| Output          | Description         |
| --------------- | ------------------- |
| `output-path`   | Generated file path |
| `output-format` | Output format       |

## Core Patterns

### Render on push

```yaml
name: Render Diagrams
on:
  push:
    branches: [main]
    paths:
      - "diagrams/**"

jobs:
  render:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: diagrams-js/action@v1
        with:
          command: render
          args: diagrams/architecture.ts
          output: architecture.svg
      - uses: actions/upload-artifact@v4
        with:
          name: diagrams
          path: architecture.svg
```

### Diff in PR

```yaml
name: Diagram Diff
on:
  pull_request:
    paths:
      - "**/*.ts"
      - "**/*.json"
      - "**/*.svg"

jobs:
  diff:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: diagrams-js/action@v1
        with:
          command: diff
          args: show origin/${{ github.base_ref }} architecture.ts
          output: diff.html
          format: html
          comment-pr: true
```

### Validate diagrams

```yaml
name: Validate Diagrams
on: [pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: diagrams-js/action@v1
        with:
          command: render
          args: diagram.ts
          format: svg
```

### Import from Docker Compose

```yaml
- uses: diagrams-js/action@v1
  with:
    command: import
    args: docker-compose.yml
    output: architecture.svg
    plugin: docker-compose
```

### Import from Kubernetes

```yaml
- uses: diagrams-js/action@v1
  with:
    command: import
    args: k8s/manifest.yaml
    output: k8s-architecture.svg
    plugin: kubernetes
```

## PR Comments

Enable `comment-pr: true` to post results on pull requests:

```yaml
- uses: diagrams-js/action@v1
  with:
    command: diff
    args: show HEAD diagram.ts
    output: diff.html
    format: html
    comment-pr: true
```

## Artifacts

Outputs auto-upload as artifacts. Disable with `upload-artifact: false`:

```yaml
- uses: diagrams-js/action@v1
  with:
    command: render
    args: diagram.ts
    output: diagram.svg
    artifact-name: my-diagram
```

## Version Pinning

Pin CLI version for reproducible builds:

```yaml
- uses: diagrams-js/action@v1
  with:
    command: render
    args: diagram.ts
    cli-version: "0.1.0"
```

## Working Directory

Run in a subdirectory:

```yaml
- uses: diagrams-js/action@v1
  with:
    command: render
    args: diagram.ts
    working-directory: ./projects/my-app
```

## Common Mistakes

### CRITICAL Missing fetch-depth for diffs

Wrong:

```yaml
- uses: actions/checkout@v4
- uses: diagrams-js/action@v1
  with:
    command: diff
    args: show origin/main diagram.ts
```

Correct:

```yaml
- uses: actions/checkout@v4
  with:
    fetch-depth: 0
- uses: diagrams-js/action@v1
  with:
    command: diff
    args: show origin/main diagram.ts
```

Git diff requires full history. Always set `fetch-depth: 0`.

### HIGH Wrong command for diff

Wrong:

```yaml
with:
  command: diff
  args: HEAD diagram.ts
```

Correct:

```yaml
with:
  command: diff
  args: show HEAD diagram.ts
```

Diff requires subcommand: `show`, `list`, or `batch`.

### MEDIUM Forgetting output path

Without `output`, the action generates default filenames. Always specify `output` for clarity:

```yaml
with:
  command: render
  args: diagram.ts
  output: diagram.svg
```

## Best Practices

### 1. Trigger on relevant paths

Only run when diagram files change:

```yaml
on:
  push:
    paths:
      - "diagrams/**"
      - "**/*.diagram.ts"
```

### 2. Use matrix for multiple diagrams

```yaml
strategy:
  matrix:
    diagram: [architecture.ts, infrastructure.ts]
steps:
  - uses: diagrams-js/action@v1
    with:
      command: render
      args: diagrams/${{ matrix.diagram }}
      output: ${{ matrix.diagram }}.svg
```

### 3. Combine with artifact upload

```yaml
- uses: diagrams-js/action@v1
  with:
    command: render
    args: diagram.ts
    output: diagram.svg
- uses: actions/upload-artifact@v4
  with:
    name: diagrams
    path: diagram.svg
```

### 4. Pin versions in production

```yaml
- uses: diagrams-js/action@v1
  with:
    cli-version: "0.1.0"
```

## See Also

- diagrams-js/cli — Command-line interface
- diagrams-js/diagram-diff — Visual diff details
- diagrams-js-plugin-system — Creating custom plugins
