# Contributing to diagrams-js

Thank you for your interest in contributing to diagrams-js! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Release Process](#release-process)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm (preferred package manager)
- Git

### Repository Structure

```
diagrams/
├── diagrams-js/        # TypeScript implementation (this is where you contribute)
│   ├── src/            # Source code
│   ├── tests/          # Test files
│   ├── scripts/        # Build and generation scripts
│   ├── resources/      # Icon resources
│   └── docs/           # Documentation
├── diagrams-py/        # Python implementation (read-only reference)
└── .github/            # GitHub Actions workflows
```

**Important**: The `diagrams-py/` directory is read-only and contains the original Python implementation for reference. All development work happens in `diagrams-js/`.

## Development Setup

1. **Fork and clone the repository**:

   ```bash
   git clone https://github.com/YOUR_USERNAME/diagrams-js.git
   cd diagrams-js/diagrams-js
   ```

2. **Install dependencies**:

   ```bash
   vp install
   ```

3. **Verify your setup**:
   ```bash
   vp test
   vp check
   ```

## How to Contribute

### Reporting Bugs

If you find a bug, please [open an issue](https://github.com/hatemhosny/diagrams-js/issues/new) with:

- A clear, descriptive title
- Steps to reproduce the bug
- Expected vs actual behavior
- Code example (if applicable)
- Environment details (Node.js version, OS, etc.)

### Suggesting Features

Feature suggestions are welcome! Please [open an issue](https://github.com/hatemhosny/diagrams-js/issues/new) with:

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

#### Adding New Providers or Services

Providers are auto-generated from icon resources in the `resources/` directory:

1. Add icon files (PNG format) to `resources/<provider>/<category>/`
2. Update `scripts/config.ts` if needed (for special naming or aliases)
3. Run the generation script:
   ```bash
   npx tsx scripts/generate.ts
   ```
4. Build the providers:
   ```bash
   vp run build:providers
   ```
5. Test and verify the new classes work correctly

#### Adding Custom Node Support

To add support for custom nodes with external icons:

1. Modify the appropriate files in `src/`
2. Add tests in `tests/`
3. Update documentation

### Pull Request Process

1. **Create a branch**:

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

2. **Make your changes**:
   - Follow the coding standards (see below)
   - Add or update tests
   - Update documentation if needed

3. **Run checks**:

   ```bash
   vp run build
   vp check
   vp test
   ```

   All checks must pass before submitting.

4. **Commit your changes**:

   ```bash
   git add .
   git commit -m "feat: add feature description"
   ```

   Follow [Conventional Commits](https://www.conventionalcommits.org/) format.

5. **Push to your fork**:

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**:
   - Use a clear, descriptive title
   - Reference any related issues
   - Describe what changed and why
   - Include screenshots/examples if applicable

7. **Address review feedback**:
   - Be responsive to reviewer comments
   - Make requested changes
   - Push updates to the same branch

## Coding Standards

### TypeScript Style Guide

- Use TypeScript strict mode
- Prefer explicit types over implicit
- Use `const` and `let`, never `var`
- Use arrow functions for callbacks
- Use async/await for async operations

### Naming Conventions

- **Classes**: PascalCase (e.g., `Diagram`, `CustomNode`)
- **Functions**: camelCase (e.g., `renderDiagram`)
- **Constants**: UPPER_SNAKE_CASE for true constants
- **Files**: kebab-case (e.g., `custom-node.ts`)
- **Private methods**: prefix with underscore (e.g., `_privateMethod`)

### Import/Export Style

- Use `.js` extension in imports: `import { X } from "./file.js"`
- Use named exports preferred over default exports
- Group imports: external libs first, then internal modules

### Example

```typescript
// Good
import { Diagram } from "../Diagram.js";
import { Node } from "./Node.js";

export interface NodeOptions {
  label?: string;
  icon?: string;
}

export class CustomNode extends Node {
  private _customIcon: string;

  constructor(label: string, icon: string) {
    super(label);
    this._customIcon = icon;
  }

  render(): string {
    return `<node>${this._customIcon}</node>`;
  }
}
```

## Testing

### Writing Tests

We use [Vitest](https://vitest.dev/) for testing. Tests are in the `tests/` directory.

```typescript
import { describe, it, expect } from "vitest";
import { Diagram } from "../src/Diagram.js";

describe("Diagram", () => {
  it("should create a diagram with a name", () => {
    const diagram = new Diagram("Test Diagram");
    expect(diagram.name).toBe("Test Diagram");
    diagram.destroy();
  });

  it("should render to SVG", async () => {
    const diagram = new Diagram("Test");
    const svg = await diagram.render();
    expect(svg).toContain("<svg");
    diagram.destroy();
  });
});
```

### Test Checklist

- [ ] Tests cover happy path
- [ ] Tests cover edge cases
- [ ] Tests clean up resources (call `diagram.destroy()`)
- [ ] All tests pass: `vp test`
- [ ] No lint errors: `vp check`

### Running Tests

```bash
# Run all tests
vp test

# Run tests in watch mode
vp test --watch

# Run specific test file
vp test tests/Diagram.test.ts
```

## Documentation

### Code Documentation

- Use JSDoc for all public APIs
- Include examples in doc comments
- Document parameters and return types
- Mark internal APIs with `@internal`

````typescript
/**
 * Creates a new diagram instance.
 * @param name - The name of the diagram
 * @param options - Configuration options
 * @returns A new Diagram instance
 * @example
 * ```typescript
 * const diagram = new Diagram("My Architecture", { direction: "TB" });
 * ```
 */
export class Diagram {
  // ...
}
````

### User Documentation

Documentation site is in the `docs/` directory using Docusaurus:

```bash
cd docs
pnpm install
pnpm start  # Start dev server
```

Update MDX files in `docs/docs/` when:

- Adding new features
- Changing APIs
- Adding examples
- Updating provider information

## Release Process

Releases are automated through GitHub Actions:

1. **Automated on merge to main**: Changelog is updated automatically
2. **Manual trigger**: Use the `release.yml` workflow to bump version
3. **Publish**: On release creation, the `publish.yml` workflow publishes to npm using OIDC

### Versioning

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

## Questions?

- Check existing [issues](https://github.com/hatemhosny/diagrams-js/issues)
- Start a [discussion](https://github.com/hatemhosny/diagrams-js/discussions)
- Review [documentation](https://diagrams-js.hatemhosny.dev)

## Thank You!

Your contributions help make diagrams-js better for everyone. We appreciate your time and effort!
