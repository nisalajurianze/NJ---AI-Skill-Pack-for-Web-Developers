# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2026-06-14
### Changed
- Rebranded all 36 skills from "nisal-*" to "nj-*" namespace.
- Completely genericized skill files, removing all personal hardcoded paths and references.
- Upgraded `install.js` to automatically deploy global configuration rules (`global_instructions.md`, `.cursorrules`, `CLAUDE.md`) for all major platforms (Gemini, Codex, Cursor, Claude Code).
- Re-engineered installer to automatically detect and clean up legacy `nisal-*` and duplicate `.backup` folders, resolving assistant duplicate skill count issues.

### Added
- Created `audit.js` local verification utility to validate metadata, directories, and check for hardcoded references.
- Configured GitHub Actions CI pipeline (`.github/workflows/ci.yml`) using `audit.js` as a pull-request quality gate.
- Integrated demo video player and structured screenshot grid into the `README.md`.

## [1.0.0] - 2026-06-14
### Added
- 36 Premium AI Skills for Web Developers.
- Deep orchestration scripts including Global Orchestrator.
- Cross-platform Node.js installer (`install.js`).
- Unified templates and GitHub community standards.
