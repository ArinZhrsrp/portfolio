# Portfolio Website

Static multi-page portfolio website for Ungku Shirin Zahra.

## Overview

This project is a plain HTML, CSS, and JavaScript portfolio with page-owned
entry files and shared modules.

There is no build step and no framework.

## Pages

- `index.html`
  - Redirect entry page
- `home.html`
  - Main landing page
- `work.html`
  - Work project listing
- `personal.html`
  - Personal project listing
- `index.next.html`
  - Alternate landing-page variant

## Project Structure

```text
Portfolio Website/
|- index.html
|- home.html
|- work.html
|- personal.html
|- index.next.html
|- assets/
|  |- css/
|  |  |- pages/
|  |  |  |- index.css
|  |  |  |- home.css
|  |  |  |- work.css
|  |  |  |- personal.css
|  |  |  |- index.next.css
|  |  |- shared/
|  |     |- site.css
|  |- js/
|  |  |- data/
|  |  |  |- portfolio-data.js
|  |  |- pages/
|  |  |  |- index.js
|  |  |  |- home.js
|  |  |  |- work.js
|  |  |  |- personal.js
|  |  |  |- index.next.js
|  |  |- shared/
|  |     |- site.js
|  |- media/
|     |- profilePic.jpg
|     |- Credex.png
|     |- etcBlack.png
|     |- Construx.png
|     |- pomopaw.png
```

## How It Works

Each HTML file now loads:

- its own stylesheet from `assets/css/pages/`
- its own JavaScript entry file from `assets/js/pages/`

Shared styling lives in `assets/css/shared/site.css`.

Shared rendering and UI helpers live in `assets/js/shared/site.js`.

Shared portfolio content lives in `assets/js/data/portfolio-data.js`.

## Editing Content

### Update personal info

Edit the `site` object in `assets/js/data/portfolio-data.js`.

Useful fields:

- `phone`
- `email`
- `linkedin`
- `github`
- `heroImage`
- `heroImageAlt`

### Update projects

Edit the `projects` array in `assets/js/data/portfolio-data.js`.

Each project can include:

```js
{
  id: "project-id",
  title: "Project Name",
  ownership: "work", // or "personal"
  platforms: ["mobile"], // mobile, web, desktop
  category: "Project Type",
  year: "2026",
  description: "Project description",
  stats: ["Flutter", "API", "GetX"],
  accent: "teal", // or "coral"
  siteLink: "https://example.com",
  repoLink: "https://github.com/example/repo",
  image: "assets/media/example.png"
}
```

### Update page behavior

- `assets/js/pages/home.js`
  - home page rendering
- `assets/js/pages/work.js`
  - work page project filters
- `assets/js/pages/personal.js`
  - personal page project filters
- `assets/js/pages/index.next.js`
  - alternate landing page rendering
- `assets/js/pages/index.js`
  - redirect behavior for `index.html`

### Update styling

- `assets/css/shared/site.css`
  - shared layout, components, and responsive rules
- `assets/css/pages/*.css`
  - page-owned CSS entry files

### Update images

Place portfolio images inside `assets/media/`, then update the matching path in
`assets/js/data/portfolio-data.js`.

## Running Locally

Because this is a static site, you can:

1. Open `index.html` in a browser, or
2. Run a small local server

Example with Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Maintenance Notes

- Each HTML page now has its own CSS and JS entry file.
- Shared reusable code is kept in the `shared/` folders.
- Shared content stays in `assets/js/data/portfolio-data.js`.
- Keep new images in `assets/media/`.
- If you add more platforms later, reuse `mobile`, `web`, and `desktop` for
  consistent filtering.
