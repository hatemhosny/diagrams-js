# ts-diagrams - AI Agent Development Guide

## Project Overview

**ts-diagrams** is a TypeScript port of the Python [diagrams](https://github.com/mingrammer/diagrams) library. It allows developers to draw cloud system architecture diagrams as code using TypeScript/JavaScript.

### Key Features

- **Cross-platform**: Works in Node.js, browsers, Deno, Bun, and Cloudflare Workers
- **Graphviz-powered**: Uses WebAssembly-based Graphviz for rendering
- **17 Providers**: 1000+ node classes for AWS, Azure, GCP, Kubernetes, and more
- **Custom Nodes**: Support for external icons and images
- **Type-safe**: Full TypeScript support
- **Tree-shakable**: Import only what you need

### Architecture

```
src/
├── index.ts           # Main exports
├── Diagram.ts         # Core diagram class
├── Node.ts           # Base node class
├── Edge.ts           # Edge/connection class
├── Cluster.ts        # Cluster/grouping class
├── Custom.ts         # Custom nodes with external icons
├── icons.ts          # Icon injection utilities
├── types.ts          # TypeScript types
├── context.ts        # Context management
└── providers/        # Auto-generated provider classes
    ├── aws/
    ├── azure/
    ├── gcp/
    └── ... (17 providers)
```

## Technology Stack

- **Runtime**: TypeScript 5.0+
- **Build Tool**: Vite+ (unified toolchain)
- **Testing**: Vitest (via Vite+)
- **Linting**: Oxlint (via Vite+)
- **Formatting**: Oxfmt (via Vite+)
- **Rendering**: @viz-js/viz (Graphviz WASM)
- **Documentation**: Docusaurus

## Development Workflow

### Prerequisites

- Node.js 18+
- pnpm (preferred package manager)

### Essential Commands

```bash
# Install dependencies
vp install

# Run tests
vp test

# Check code (format, lint, types)
vp check

# Fix auto-fixable issues
vp check --fix

# Build the library
vp run build

# Build providers (generates JS from TS)
vp run build:providers

# Full build (core + providers + fix)
vp run build

# Development mode
vp dev
```

### Testing

All tests must pass before committing:

```bash
vp test
```

Test files are in `tests/` directory using Vitest.

## Code Guidelines

### Style

- Use TypeScript strict mode
- Prefer explicit types over implicit
- Use `const` and `let`, never `var`
- Use arrow functions for callbacks
- Use async/await for async operations

### Naming Conventions

- Classes: PascalCase (e.g., `Diagram`, `CustomNode`)
- Functions: camelCase (e.g., `renderDiagram`)
- Constants: UPPER_SNAKE_CASE for true constants
- Files: kebab-case (e.g., `custom-node.ts`)
- Private methods: prefix with underscore (e.g., `_privateMethod`)

### Import/Export Style

- Use `.js` extension in imports (e.g., `import { X } from "./file.js"`)
- Use named exports preferred over default exports
- Group imports: external libs first, then internal modules

### Error Handling

- Always handle Promise rejections
- Use specific error types when possible
- Provide helpful error messages
- Use `void` operator for floating promises: `void promise`

### Comments

- Use JSDoc for public APIs
- Keep comments concise and relevant
- Update comments when code changes

## Project Structure Guidelines

### Adding New Features

1. **Core functionality**: Add to appropriate file in `src/`
2. **New providers**: Modify `scripts/generate.ts` and regenerate
3. **Tests**: Add to `tests/index.test.ts` or create new test files
4. **Documentation**: Update files in `docs/src/content/docs/`

### Provider Generation

Providers are auto-generated from icon resources:

```bash
# Modify scripts/generate.ts if needed
# Then regenerate:
npx tsx scripts/generate.ts
```

This creates TypeScript classes in `src/providers/` from PNG files in `resources/`.

### Build System

The project uses Vite+ (not raw Vite):

- **Core build**: `vp pack src/index.ts` → outputs to `dist/`
- **Provider build**: Custom script using esbuild + tsgo → outputs to `dist/providers/`
- **Type generation**: Automatic via Vite+ pack

Do not modify build configs unless necessary. The build is configured in:

- `vite.config.ts` - Core library
- `scripts/build-providers.mjs` - Provider compilation

## Common Tasks

### Adding a New Provider

1. Add icon resources to `resources/<provider>/`
2. Update `scripts/config.ts` if needed
3. Run `npx tsx scripts/generate.ts`
4. Build providers: `vp run build:providers`
5. Update documentation

### Adding a New Node Type

1. Extend `Node` class or use existing provider base
2. Set static properties: `_provider`, `_type`, `_iconDir`, `_icon`
3. Add to appropriate provider file or create new one
4. Add tests
5. Update documentation

### Icon Handling

Icons are inlined during build:

- PNG files → base64 data URLs via esbuild
- Automatically injected into SVG output
- Deduplicated using `<use>` tags

### Working with Custom Nodes

```typescript
import { Custom } from "ts-diagrams";

// Remote URL
const node = new Custom("Label", "https://example.com/icon.png");

// Data URL
const node2 = new Custom("Label", "data:image/png;base64,...");

// Local file (Node.js only)
const node3 = new Custom("Label", "./local/icon.png");
```

## Testing Guidelines

### Writing Tests

```typescript
import { describe, it, expect } from "vitest";
import { Diagram } from "../src/Diagram.js";

describe("Feature Name", () => {
  it("should do something", async () => {
    const diagram = new Diagram("Test");
    // ... test code
    diagram.destroy(); // Clean up
  });
});
```

### Test Checklist

- [ ] Tests cover happy path
- [ ] Tests cover edge cases
- [ ] Tests clean up resources (call `diagram.destroy()`)
- [ ] All tests pass: `vp test`
- [ ] No lint errors: `vp check`

## Documentation

### Code Documentation

- Use JSDoc for all public APIs
- Include examples in doc comments
- Document parameters and return types
- Mark internal APIs with `@internal`

### User Documentation

Documentation site is in `docs/`:

```bash
cd docs
pnpm install
pnpm start  # Start dev server
```

Add/update MDX files in `docs/docs/`.

## Git Workflow

### Commits

- Clear, descriptive commit messages
- Use present tense ("Add feature" not "Added feature")
- Reference issues when applicable

### Before Committing

Always run:

```bash
vp run build && vp check && vp test
```

ALl must pass before committing.

## Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Run full test suite: `vp check && vp test`
4. Build: `vp run build`
5. Tag release: `git tag vX.Y.Z`
6. Push tags: `git push --tags`
7. Publish: `npm publish`

## Troubleshooting

### Build Issues

- Clear `dist/` and `node_modules/.cache/`
- Run `vp install` to ensure dependencies are up to date

### Provider Build Fails

- Check that all resources exist in `resources/`
- Run `npx tsx scripts/generate.ts` to regenerate
- Ensure esbuild is installed

### Icon Not Showing

- Verify icon path/URL is correct
- Check that icon data URL is being generated
- Ensure `trackNodeWithIcon` is called

### Memory Issues

- Diagrams with many nodes may use significant memory
- Call `diagram.destroy()` when done to free resources
- For large diagrams, consider pagination or splitting

## Important Notes

### Vite+ vs Vite

This project uses **Vite+**, not raw Vite. Key differences:

- Use `vp` command, not `vite` or `npx vite`
- Use `vp test`, not `vitest`
- Use `vp check`, not separate lint/typecheck commands

### Package Manager

Always use `vp install` (not `npm install` directly) to ensure proper dependency resolution.

### TypeScript

- Target: ES2022
- Module: NodeNext
- Strict mode enabled
- Always include `.js` extension in imports

## Resources

- **Python diagrams**: https://diagrams.mingrammer.com/
- **Graphviz**: https://graphviz.org/
- **Vite+ Docs**: https://voidzero.dev/
- **Docusaurus Docs**: https://docusaurus.io/

## Questions?

For issues or questions:

- Check existing tests for examples
- Review `demo.html` for usage examples
- Consult Python diagrams docs for API patterns

---

**Last Updated**: 2025-04-05  
**Project**: ts-diagrams  
**License**: MIT
