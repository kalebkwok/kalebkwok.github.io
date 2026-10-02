# kalebkwok.github.io

Personal site and technical blog, built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Write a post

Add a Markdown file to `src/content/posts/`. The file name becomes the URL: `radix-kv-cache.md` → `/writing/radix-kv-cache/`.

```markdown
---
title: What a radix KV cache actually saves
description: One sentence shown under the title and in the post list.
date: 2026-10-15
tags: [mini-sglang, kv-cache]
kind: essay          # or "note" for a short write-up
series: Rebuilding mini-sglang   # optional
draft: true          # visible in `npm run dev`, left out of the built site
---
```

Posts support code blocks with syntax highlighting, `$inline$` and `$$display$$` math (KaTeX), tables, and footnotes. Headings (`##`, `###`) become the table of contents.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321, drafts included
npm run build    # what GitHub Pages will serve, drafts excluded
```

## Other edits

- Projects: `src/data/projects.ts`. Hidden for now; to show them, set `features.projects` to `true` in `src/data/site.ts` and rename `src/pages/_projects.astro` to `projects.astro`
- Name, tagline, links: `src/data/site.ts`
- About page and experience: `src/pages/about.astro`
- Profile photo: add a square `public/profile.jpg` and it appears on the About page
- Colors and fonts: tokens at the top of `src/styles/global.css`
