# Changelog

All notable changes to this project will be documented in this file.

Pre-`v1.0.0` version numbers below are inferred from commit milestones because
the early history was not tagged with release versions.

## [Unreleased]

### Added

- Added [VERSIONING.md](VERSIONING.md) with a quick guide for updating the
  site version in `assets/js/data/portfolio-data.js`.

### Changed

- Updated the home-page project stat to auto-calculate from the total number
  of work and personal projects in `portfolioData.projects`.

## [v1.0.0] - 2026-04-17

### Added

- Added project version metadata to the shared site data.
- Added visible version support across the portfolio.
- Added watermark assets and watermark styling for portfolio branding.

### Changed

- Refined the shared site styling to support version display and branded
  overlays.

## [v0.2.0] - 2026-04-01

### Changed

- Reorganized CSS into page-owned files under `assets/css/pages/` and shared
  styles under `assets/css/shared/`.
- Reorganized JavaScript into page entry files, shared utilities, and shared
  data modules under `assets/js/`.
- Updated HTML page entry points to load the new page-specific CSS and JS
  structure.
- Updated the README to document the new project layout and maintenance flow.

## [v0.1.0] - 2026-03-30

### Added

- Initial release of the static multi-page portfolio website.
- Added `home.html`, `work.html`, `personal.html`, `index.html`, and
  `index.next.html`.
- Added shared portfolio data, page behavior, and styling foundation.
- Added initial project media assets and project showcase content.
- Added the base README with setup, editing, and structure documentation.
