# Portfolio Website

Static multi-page portfolio website for Ungku Shirin Zahra.

## Overview

This project is a plain HTML, CSS, and JavaScript portfolio with shared assets and data-driven content.

There is no build step and no framework. The site is maintained by editing:

- shared content in `assets/js/portfolio-data.js`
- shared UI logic in `assets/js/site.js`
- shared styles in `assets/css/styles.css`

## Pages

- `index.html`
  - Redirects to `home.html`
- `home.html`
  - Main landing page
- `work.html`
  - Work project listing
- `personal.html`
  - Personal project listing

## Project Structure

```text
Portfolio Website/
|- home.html
|- work.html
|- personal.html
|- index.html
|- assets/
|  |- css/
|  |  |- styles.css
|  |- js/
|  |  |- portfolio-data.js
|  |  |- site.js
|  |- media/
|     |- profilePic.jpg
|     |- Credex.png
|     |- etcBlack.png
|     |- Construx.png
|     |- pomopaw.png
```

## How It Works

All main content is stored in `assets/js/portfolio-data.js`, including:

- profile and contact info
- hero image path
- skills
- work and personal projects
- experience
- involvement history

`assets/js/site.js` reads that data and renders:

- project overview cards on `home.html`
- filtered project cards on `work.html`
- filtered project cards on `personal.html`
- shared mobile menu behavior
- hero/profile image
- scroll-to-top button

## Editing Content

### Update personal info

Edit the `site` object in `assets/js/portfolio-data.js`.

Useful fields:

- `phone`
- `email`
- `linkedin`
- `github`
- `heroImage`
- `heroImageAlt`

### Update projects

Edit the `projects` array in `assets/js/portfolio-data.js`.

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

### Work vs personal button behavior

This is handled automatically by `assets/js/site.js`:

- work projects show `View Site` only
- personal projects show `View Code`
- personal projects also show `Visit Site` if `siteLink` exists

### Update images

Place portfolio images inside `assets/media/`.

Current usage:

- profile image: `assets/media/profilePic.jpg`
- project images: `assets/media/*.png`

After adding a new image, update the matching path in `assets/js/portfolio-data.js`.

### Update styles

Edit `assets/css/styles.css` for:

- layout
- spacing
- colors
- typography
- responsive behavior
- sticky header
- scroll-to-top button

## Work Project Disclaimer

The work-project disclaimer is written directly in `work.html`.

If you want to change that wording, edit the disclaimer block in that file.

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

- Keep shared content in `assets/js/portfolio-data.js` instead of duplicating text in each page.
- Keep shared behavior in `assets/js/site.js`.
- Keep new images in `assets/media/`.
- If you add more platforms later, reuse `mobile`, `web`, and `desktop` for consistent filtering.
