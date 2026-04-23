## [0.5.0] - 2026-04-23

### Features

- No new features

### Bug Fixes

- fix visual editor svg import (6a6d2f3)

### Other Changes

- rename json properties to provider/type/resource (a24f38a)

## [0.4.0] - 2026-04-22

### Features

- feat: diagrams diff (baec195)

### Bug Fixes

- fix build (d603fd3)
- fix playground example (40ad6e9)

### Other Changes

- add svg import in visual editor (916b89f)
- update AGENTS.md (8f6fd9c)
- add svg plugin (import/export) (150ee33)
- update diff (d882439)
- update docs (92cefa9)
- visual editor import docker compose and kubernetes (8ebcf40)
- add visual editor (a7dc6a1)

## [Unreleased]

### Features

- feat: add visual diff support for comparing diagram versions
  - `computeDiff()` - Compare two diagrams and detect added, removed, modified, and renamed elements
  - `renderDiff()` - Render side-by-side visual diff as HTML or SVG
  - `Diagram.diff()` and `Diagram.renderDiff()` - Static convenience methods
  - Color-coded changes: green (added), red (removed), amber (modified), purple (renamed)
  - Smart node matching by ID with fingerprint fallback for rename detection
  - Configurable ignore options for position, metadata, and attributes
  - Self-contained HTML output with legend, summary, and hover tooltips

## [0.3.1] - 2026-04-16

### Features

- feat: export loadAll from yaml (54faeda)

### Bug Fixes

- fix links in readme (48d3d90)

### Other Changes

- update homepage (443080d)
- update docs (d86e1b0)
- inline build chunks (ac972e7)
- edit vite config (f46a671)
- clean up playground page (8f17c20)
- update kubernetes plugin docs (d2db802)
- add docker compose playground example (8c1443c)

## [0.3.0] - 2026-04-15

### Features

- feat: provide yaml to plugins as lazy loaded module (98d0ad5)
- feat: add plugin system (c14d6b0)

### Bug Fixes

- fix json (8575d7f)
- fix json plugin (598bc82)

### Other Changes

- change repo (61d70f6)
- export cluster (cb1a2c9)
- add docker compose example diagram (7ff76c5)
- update docs (57e2cec)
- move skills (664bd39)
- clean up (fdead7f)
- update docs (9a013fd)
- allow using custom nodes in json (ebc25d8)
- rename find-resource to resources-list (6956d99)
- update readme (1443915)
- add Iconify (10dac51)
- improve icon lookup performance (fd88c2c)
- add creating plugins skill (d684b9e)
- allow plugins to load resources list (e9bd358)
- refactor!: rename resourceType to resource (67ac588)
- improve json plugin (2fa0806)

## [0.2.4] - 2026-04-11

### Features

- No new features

### Bug Fixes

- fix bundling in esm.sh (eff89ff)

### Other Changes

- No other changes

## [0.2.3] - 2026-04-11

### Features

- No new features

### Bug Fixes

- fix (e832dd1)

### Other Changes

- No other changes

## [0.2.2] - 2026-04-11

### Features

- No new features

### Bug Fixes

- fix format (d444ad4)

### Other Changes

- enable precommit hook (1e0fc78)
- change exports (03767c1)

## [0.2.1] - 2026-04-11

### Features

- No new features

### Bug Fixes

- No bug fixes

### Other Changes

- improve build and provider exports (2ae0ca0)

## [0.2.0] - 2026-04-11

### Features

- feat: add JSON support (86cb2cd)

### Bug Fixes

- fix format (8fec168)

### Other Changes

- add provider loader fallbacks (9589b7e)
- add more livecodes preview templates (687961e)

## [0.1.0] - 2026-04-09

### Features

- No new features

### Bug Fixes

- No bug fixes

### Other Changes

## [0.0.11] - 2026-04-09

### Features

- No new features

### Bug Fixes

- fix link in docs (31a78be)
- fix format (6e7e94f)
- fix jsdocs (c8e6f55)

### Other Changes

- edit docs (3a0227d)
- docs: clean up playground share URL (c64dc6a)
- update playground examples (c1c28f7)
- update docs (fa658e9)
- docs: update ai guide (2967c18)
- edit docs (a90c200)
- auto-detect format from extension in diagram.save (311f661)
- edit docs (4cdc021)
- edit readme (ae49aa6)
- edit readme (77190e0)

## [0.0.10] - 2026-04-09

### Features

- No new features

### Bug Fixes

- fix (6619f88)
- fix CI (019b022)
- fix types (69230ea)
- fix landing page style (b043425)

### Other Changes

- format (c965cd1)
- add try in livecodes in readme (5db636f)
- add @tanstack/intent (ec91d67)
- update AI guide (fe54640)
- add skills (2eca8fa)
- remove destroy method (598fe34)
- add ~ prefix for all internal properties and methods (827c8a4)
- add jsdoc comments (1a93b15)
- add AI guide (8538f26)
- improve release PR (76c6d1f)
- eager loading in playground (af6f437)

## [0.0.9] - 2026-04-08

### Features

- No new features

### Bug Fixes

- fixes (61ef789)
- fix (af5edc9)
- fix: clean up the library public API (8d896f7)
- fix: clean up exported types (7d1e60d)
- fix: fix diagram.render type error (a53fa2e)

### Other Changes

- add more demos for preview in livecodes (9b18b9d)
- edit livecodes demo (9c5c9ee)
- netlify cors (30882bd)
- demo (3c28438)
- add preview in LiveCodes (e0b810c)
- minor edit (12aa610)

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

[Unreleased]: https://github.com/diagrams-js/diagrams-js/compare/v0.0.0...HEAD
[0.0.0]: https://github.com/diagrams-js/diagrams-js/releases/tag/v0.0.0
