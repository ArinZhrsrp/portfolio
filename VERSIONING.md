# Version Update Guide

The site version is controlled from a single place:

- `assets/js/data/portfolio-data.js`

## Current version field

Inside the `site` object, update:

```js
version: "v1.0.0",
```

## How to update the version

1. Open `assets/js/data/portfolio-data.js`.
2. Find the `version` field inside `portfolioData.site`.
3. Replace the value with the new version.

Example:

```js
version: "v1.0.1",
```

## What changes after updating

- The footer version text updates across all pages.
- No other file needs to be changed for a normal version bump.

## Suggested version pattern

Examples:

- `v1.0.1` for a small fix
- `v1.1.0` for a feature update
- `v2.0.0` for a major redesign or breaking change
