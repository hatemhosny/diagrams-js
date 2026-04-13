# Using TanStack Intent Skills

This repository includes [TanStack Intent](https://github.com/tanstack/intent) skills for AI-assisted development with diagrams-js.

## Installation

To use these skills with your AI coding agent:

```bash
# Install the skills into your project
npx @tanstack/intent@latest install

# Or install globally
npm install -g @tanstack/intent
intent install
```

## Available Skills

| Skill                               | Description                                 |
| ----------------------------------- | ------------------------------------------- |
| `diagrams-js/getting-started`       | Installation, first diagram, basic concepts |
| `diagrams-js/diagram-configuration` | Direction, theme, curve style, attributes   |
| `diagrams-js/rendering-export`      | SVG, PNG, JPG, DOT, data URLs               |
| `diagrams-js/provider-nodes`        | 17+ providers, 2000+ node classes           |
| `diagrams-js/custom-nodes`          | External icons, URLs, data URLs             |
| `diagrams-js/node-connections`      | to(), from(), with(), Edge styling          |
| `diagrams-js/clusters-grouping`     | Clusters, nesting, organization             |
| `diagrams-js/browser-integration`   | CDN, DOM, data URLs, downloads              |
| `diagrams-js/nodejs-integration`    | File system, sharp, local icons             |
| `diagrams-js/python-migration`      | Python to TypeScript conversion             |
| `diagrams-js/plugin-system`         | Importers, exporters, metadata, hooks       |
| `diagrams-js/creating-plugins`      | Create custom plugins, package structure    |

## Usage

### With AI Agents

Once installed, AI agents will automatically load relevant skills when working with diagrams-js code. For example:

- Creating a new diagram → loads `getting-started`
- Adding AWS nodes → loads `provider-nodes`
- Connecting nodes → loads `node-connections`
- Rendering to PNG → loads `rendering-export` + `nodejs-integration`
- Migrating from Python → loads `python-migration`

### CLI Commands

```bash
# List all available skills
npx @tanstack/intent list

# Show a specific skill
npx @tanstack/intent show diagrams-js/getting-started

# Validate skills are correctly configured
npx @tanstack/intent validate
```

## Contributing

Skills are located in `.agents/skills/`. Each skill includes:

- **SKILL.md** - The skill content for AI agents
- **References/** - Optional detailed reference files

To update skills:

1. Modify the relevant SKILL.md file
2. Run validation: `npx @tanstack/intent validate`
3. Submit a PR with your changes

## Learn More

- [TanStack Intent Documentation](https://tanstack.com/intent)
- [diagrams-js Documentation](https://diagrams-js.hatemhosny.dev)
- [Skill Structure](./.agents/skills/_artifacts/skill_spec.md)
