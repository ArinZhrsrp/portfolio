# Changelog

All notable changes to this project will be documented in this file.

Pre-`v1.0.0` version numbers below are inferred from commit milestones because
the early history was not tagged with release versions.

## [v1.1.1] - 2026-07-15

### Added

- Added a site favicon (`assets/media/favicon.svg`, a butterfly emoji) linked
  from all five HTML pages.
- Added a deployed `siteLink` for the PomoPaw project
  (`https://pomopaw.vercel.app/`), so its card now shows a "Visit Site" link
  alongside "View Code".

## [v1.1.0] - 2026-07-15

### Added

- Added the "CANDID - Prompt Engine" personal project, including a 4-image
  gallery.
- Added `assets/js/data/projects/`, with one file per project
  (`credex.js`, `etc-black.js`, `construx.js`, `pomopaw.js`,
  `candid-prompt.js`). `assets/js/data/portfolio-data.js` now holds only
  site-wide content (`site`, `collections`, `stats`, `skills`, `experience`,
  `involvement`, `notes`) with an empty `projects` array that each project
  file pushes into. This keeps individual project diffs small and makes the
  structure easier to manage as more projects are added.
- Added `assets/media/projects/<project-id>/`, one image folder per project,
  replacing the flat file list directly under `assets/media/`.

### Changed

- Replaced the single `image` field on project entries with an `images` array,
  allowing more than one screenshot per project.
- Project cards now render a gallery with prev/next arrows and dot navigation
  when a project has more than one image.
- Converted every page's JavaScript entry from an ES module
  (`<script type="module">` with `import`/`export`) to a plain deferred
  script (`<script defer>`). Browsers block ES module `import`/`export` when
  a page is opened directly via `file://` (e.g. double-clicking the HTML
  file), which silently broke images and all dynamic content outside of a
  local server. Plain scripts with `defer` load under `file://` while still
  executing in document order after the HTML has parsed, matching the
  previous module behavior.
- Updated the PomoPaw project's repo link to point to its own repository
  (`github.com/ArinZhrsrp/PomoPaw`) instead of the general profile link.

## [v1.0.1] - 2026-04-17

### Added

- Added [VERSIONING.md](VERSIONING.md) with a quick guide for updating the
  site version in `assets/js/data/portfolio-data.js`.

### Changed

- Replaced the floating version badge with a shared plain-text footer centered
  at the bottom of each page.
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
