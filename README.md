# natakmesh.com

Source for [www.natakmesh.com](https://www.natakmesh.com). Built with Jekyll
by GitHub Pages on every push to `main`. There's no separate build step.

## Preview locally

Needs Docker (with your user in the `docker` group).

```bash
docker compose up
```

Open <http://localhost:4000>. Pages rebuild when you save. `Ctrl+C` stops it.
The first start takes a few minutes to install gems. After that it's quick.
Changes to `_config.yml` need a restart.

Check for broken links and images:

```bash
docker compose run --rm site sh -c "bundle exec jekyll build && bundle exec htmlproofer ./_site --disable-external --ignore-urls '/^https?:/'"
```

## Layout

| Path | What |
|------|------|
| `*.html`, `use-cases/` | Pages. Each starts with front matter (`title`, `description`, `nav`) and contains only its `<main>` content. |
| `_layouts/page.html` | **New design** page shell (`layout: page`): `site.css`, `site.js`, `site-header.html`, `site-footer.html`. Set `noindex: true` to keep a page out of search. |
| `_layouts/default.html` | Old page shell, used until each page is rebuilt (Session 4) |
| `_includes/` | Headers, footers, icons, analytics |
| `_data/navigation.yml` | Menu items. `main` = old layout, `primary` + `footer` = new layout |
| `_config.yml` | Site settings: email, shop URL, GoatCounter code, plugins |
| `assets/css/site.css` | **New design system.** Every component is shown on `/styleguide.html`. Keep under 30 KB. |
| `assets/css/main.css` | Old shared styles. `assets/css/pages/<name>.css` is page-specific (set `page_css: <name>`). |
| `assets/fonts/` | IBM Plex Sans (variable) + Plex Mono 400/500, self-hosted. `OFL.txt` is the licence. |
| `assets/js/` | `site.js` (new menu), `main.js` (old menu). `pages/<name>.js` is page-specific (set `page_js: <name>`). |
| `assets/img/` | Web-ready images only, by category (`brand`, `hardware`, `field`, `tests`, `screenshots`, `manual`, `diagrams`) |
| `assets/docs/` | Downloadable documents |
| `manual/` | User manual (standalone page) |
| `_redirects/` | Stubs that keep old file URLs working |
| `tools/` | Helper scripts (not published) |

## Add a page

Create `my-page.html` (or `my-page.md`):

```html
---
title: "Page Title"
description: "One sentence for search results and link previews."
nav: products        # optional: which menu item to highlight
---
    <main>
        ...
    </main>
```

If you move or rename a page, add `redirect_from: [/old-path.html]` to its front matter.

## Add an image

Originals stay **outside** the repo (`~/Storage/natak-media/`). Export a
web copy with:

```bash
tools/optimize-image.sh ~/Storage/natak-media/IMG_1234.jpg hardware/nucleus-v3-front.jpg
```

This rotates the image, strips metadata (including GPS), resizes it to 1600 px
max and prints the `width`/`height` to put on the `<img>` tag. Use lowercase,
hyphenated, descriptive names.

## Analytics

[GoatCounter](https://www.goatcounter.com/) (`natakmesh.goatcounter.com`):
cookieless, and it only loads on the live site. To track an ad, give it a URL like
`https://www.natakmesh.com/?utm_source=instagram&utm_campaign=oct-reel`.
It shows up under Campaigns.

## Don't

- Delete `CNAME`. It's what keeps the custom domain attached.
- Commit raw photos, design source files or internal documents. GitHub Pages
  publishes every file that isn't excluded in `_config.yml`, and the repo itself is public.
