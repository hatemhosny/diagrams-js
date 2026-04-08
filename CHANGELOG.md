## [0.0.8] - 2026-04-08

### Features

- No new features

### Bug Fixes

- fix search (ca1f3f6)

### Other Changes

- remove postinstall (25ccffe)
- add algolia (fe93fba)
- use esm.sh CDN in docs (d1d0f23)

## [0.0.7] - 2026-04-08

### Features

- No new features

### Bug Fixes

- fix publish (6729561)

### Other Changes

- No other changes

## [0.0.6] - 2026-04-08

### Features

- No new features

### Bug Fixes

- No bug fixes

### Other Changes

- publish (ac9a22c)

## [0.0.5] - 2026-04-08

### Features

- No new features

### Bug Fixes

- fix publish (829dc68)

### Other Changes

- No other changes

## [0.0.4] - 2026-04-08

### Features

- No new features

### Bug Fixes

- fix publish (bd05118)
- fix publish (0c3c1f2)

### Other Changes

- No other changes

## [0.0.3] - 2026-04-08

### Features

- No new features

### Bug Fixes

- fix release (b572457)
- fix format (e7710ea)
- fix release (425741d)
- fix release workflow (a1fbe55)

### Other Changes

- No other changes

## [0.0.2] - 2026-04-08

### Features

- No new features

### Bug Fixes

- fix workflows (e152c74)

### Other Changes

- update CI workflows (a528f24)

## [0.0.1] - 2026-04-07

### Features

- No new features

### Bug Fixes

- fix (54a30d6)
- fix (b93de8a)
- fix (1840c1d)
- fix (4be6297)
- fix (b5a24c4)
- fix (92f5ff7)
- fix (5da7434)
- fix (6f0e845)
- fix (b4aa2af)
- fix (5c32a15)
- fix (21404a3)
- fix (0a78633)
- fix (98e19c1)
- fix (85d7e96)
- fix (a94c0ed)
- fix CI workflows (db6467e)
- fix node height (40c80c9)
- fix edge attributes (60403a8)
- fix nodes size (b32791f)
- fix node shape (59bff66)
- fix types (7886773)
- fix icon deduplication (e0337d7)
- fix `.from` edge direction (a0bf6db)
- fix `.from` (f44aba9)
- fix vp check (169dee8)
- fix icons (9f42952)

### Other Changes

- disable vite hooks (07c3e4e)
- add .nvmrc (1f8bc1e)
- debug (7d74a0f)
- debug ci (11cafe1)
- upgrade node version in CI (facf224)
- change vite config extension (8b9d857)
- Add .whitesource configuration file (296fb9e)
- edit docs (fa2c9ba)
- edit examples (68646fd)
- add c4 model support (7018311)
- edit docs styles (1aaf0c1)
- docs styles (4f273a8)
- cleanup (afb191f)
- resolve imports to correct paths (3f32109)
- rename private fields to start with ~ (de827d3)
- format (2f694d3)
- rename \_userNodeAttr to ~userNodeAttr (9900d32)
- edit docs (f66252c)
- improve docs generation (847ea68)
- auto-generate nodes reference docs (6c1d2ae)
- update docs (55effb2)
- add CI workflows (ddee0a8)
- edit footer (4864242)
- add landing page (084eda8)
- improve playground (a35692c)
- add playground (6688843)
- update example images (9621263)
- format (d7e4946)
- add repo files (605dbb6)
- add tests (19c940e)
- add docs (b6a45c9)
- generate svg images for docs (036a253)
- add docs (240e797)
- clean up (8138fc4)
- convert classes to factory functions (b38b7f0)
- production build (31792b8)
- update demo.html (5d25759)
- rename to diagrams-js (0f1c77d)
- build (1c4d3b9)
- add logo (0dd8f00)
- refactor demo.html (61b2eff)
- add to(edge) (bce3e8e)
- support from edge (4b52f64)
- remove providers exports subpath (d1d1e91)
- export as data url (540adf7)
- clean up (f238332)
- add dot format (ae5ca91)
- add jpg format (a04ac94)
- format (17a0c76)
- edit defaults (b37b41b)
- clean up (d636edb)
- use pastel as default theme (2d863cb)
- add docs (ecb571b)
- rename to ts-diagrams (1aee492)
- support custom node with external icons (20cfaa8)
- do not duplicate inline images in svg (e327ef7)
- build types (02b5ddc)
- improve build (a5a2f69)
- render options (f50eb0f)
- clean up (d822da0)
- explicit api (5ee22b7)
- make svg the default format (bf893ff)
- curve style (e2d5e3f)
- examples (3a80e58)
- add tests (cb9e4e4)
- support nodejs (ea4f9cf)
- initial commit (305053f)

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial release of diagrams-js
- TypeScript port of the Python diagrams library
- Support for 17+ cloud providers (AWS, Azure, GCP, Kubernetes, etc.)
- 2000+ node classes for cloud services
- Cross-platform support (browsers, Node.js, Deno and Bun)
- WebAssembly-powered Graphviz rendering
- Custom node support with external icons
- Full TypeScript type definitions
- Tree-shakable exports

### Features

- Generate architecture diagrams as code
- Connect nodes with customizable edges
- Support for clusters and groups
- Direction configuration (TB, BT, LR, RL)
- Theme support
- Curve style options
- SVG output with embedded icons

### Providers

- AWS (200+ services)
- Azure (100+ services)
- GCP (80+ services)
- Kubernetes (60+ resources)
- Alibaba Cloud (50+ services)
- Oracle Cloud (40+ services)
- DigitalOcean (20+ services)
- IBM Cloud (30+ services)
- Firebase (15+ services)
- Elastic (10+ services)
- On-Premises (80+ components)
- Generic (20+ icons)
- SaaS (30+ services)
- OpenStack (40+ services)
- Outscale (15+ services)
- Programming (30+ languages/frameworks)
- GIS (20+ components)

## [0.0.0] - 2026-04-07

### Added

- Initial project setup
- Repository structure
- Build system with Vite+
- Testing infrastructure with Vite+
- Documentation site with Docusaurus
- CI/CD workflows for GitHub Actions
- Automated resource synchronization from Python diagrams repo

[Unreleased]: https://github.com/hatemhosny/diagrams-js/compare/v0.0.0...HEAD
[0.0.0]: https://github.com/hatemhosny/diagrams-js/releases/tag/v0.0.0
