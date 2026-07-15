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
|  |  |  |- projects/
|  |  |     |- credex.js
|  |  |     |- etc-black.js
|  |  |     |- construx.js
|  |  |     |- pomopaw.js
|  |  |     |- candid-prompt.js
|  |  |- pages/
|  |  |  |- index.js
|  |  |  |- home.js
|  |  |  |- work.js
|  |  |  |- personal.js
|  |  |  |- index.next.js
|  |  |- shared/
|  |     |- site.js
|  |- media/
|     |- favicon.svg
|     |- profilePic.jpg
|     |- watermark-Black.png
|     |- watermark-White.png
|     |- projects/
|        |- credex/1.png
|        |- etc-black/1.png
|        |- construx/1.png
|        |- pomopaw/1.png
|        |- candid-prompt/1.png ... 4.png
```

## How It Works

Each HTML file now loads (in this order, all as plain `<script defer>` tags):

1. its own stylesheet from `assets/css/pages/`
2. `assets/js/data/portfolio-data.js` — site-wide content, with an empty
   `projects: []` array
3. one `<script>` per file under `assets/js/data/projects/`, each of which
   pushes its project object into `portfolioData.projects`
4. `assets/js/shared/site.js` — shared rendering/UI helpers
5. its own JavaScript entry file from `assets/js/pages/`, which calls the
   shared render functions

Shared styling lives in `assets/css/shared/site.css`.

None of these are ES modules (no `type="module"`, no `import`/`export`).
Browsers block ES module loading when a page is opened directly via
`file://` (double-clicking the HTML file), which used to leave the page
looking broken (no images, no dynamic sections) outside of a local server.
Plain scripts with the `defer` attribute avoid that restriction while still
executing in document order after the HTML has parsed — so double-clicking
any page file now works the same as serving it.

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

Each project lives in its own file under `assets/js/data/projects/`, named
after its `id` (e.g. `assets/js/data/projects/credex.js`). To edit an
existing project, edit its file directly:

```js
portfolioData.projects.push({
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
  images: [
    "assets/media/projects/project-id/1.png",
    "assets/media/projects/project-id/2.png",
  ],
});
```

`images` accepts one or more paths. When a project has more than one image,
its card automatically shows prev/next arrows and dot navigation to browse
the gallery.

#### Add a new project

1. Create `assets/js/data/projects/<project-id>.js` with the object shown
   above.
2. Put its screenshots in `assets/media/projects/<project-id>/`.
3. Add one line loading the new file in **every** HTML page that lists
   projects — `home.html`, `work.html`, `personal.html`, and
   `index.next.html` — next to the other project `<script>` tags:

   ```html
   <script src="assets/js/data/projects/<project-id>.js" defer></script>
   ```

   This manual step exists because the site has no build step or server-side
   includes to fetch project files automatically; a plain `<script>` tag is
   the only way to load a local file that also works when the page is opened
   directly via `file://`.

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

Place project screenshots inside `assets/media/projects/<project-id>/`, then
reference the matching paths in that project's `images` array in
`assets/js/data/projects/<project-id>.js`. Site-level images that aren't tied
to one project (profile photo, watermark) stay directly under
`assets/media/`.

## Running Locally

Because this is a static site with no build step and no ES modules, you can
simply open any HTML file directly in a browser (double-click it, or open the
`file://` path) and everything — images, project cards, galleries — works as-is.

A local server is optional, e.g. with Python:

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
- Site-wide content (profile info, collections, stats, skills, experience,
  involvement, notes) stays in `assets/js/data/portfolio-data.js`.
- Each project's data lives in its own file under
  `assets/js/data/projects/`, and its images live in their own folder under
  `assets/media/projects/`. See [Add a new project](#add-a-new-project) for
  the steps to wire up a new one.
- If you add more platforms later, reuse `mobile`, `web`, and `desktop` for
  consistent filtering.
- All script tags are plain `<script defer>` (no `type="module"`) so pages
  keep working when opened directly via `file://`. Don't reintroduce
  `import`/`export` in page-loaded scripts without also reverting to a local
  server for previewing.
- The favicon is `assets/media/favicon.svg`, an emoji rendered inside an
  inline SVG `<text>` element — to change it, just swap the emoji character
  in that file. It's linked from the `<head>` of all five HTML pages, so no
  other file needs to change. Browsers cache favicons aggressively; a hard
  refresh may be needed to see an update.
