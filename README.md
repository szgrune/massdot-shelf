# MassDOT Shelf

A static, Sanity-backed bookshelf portfolio for Summer 2026 work at The Lab @ MassDOT.

## Status

Build in progress. Setup, editing, and deployment instructions will be completed in the phases specified by `PRD.md`.

## Workspaces

- `web/` — Next.js 16 App Router site, exported as static HTML.
- `studio/` — Sanity Studio connected to project `3scwu6mf`, dataset `production`.

## Local environment

`web/.env.local` contains only public build configuration:

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=3scwu6mf
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

There are no Sanity read or write tokens in this project. The public dataset is read
without a token, and seed scripts use the authenticated Sanity CLI user at runtime.

## Assets

`web/public/textures/walnut.webp` is a committed placeholder. Replace that one file
with the final walnut texture while keeping the same filename; the CSS wood-grain
gradient remains underneath it as a fallback.
