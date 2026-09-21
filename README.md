# pf26

Personal portfolio site of Amitesh Debnath (Vite + React), hosted on Netlify.

| Package                 | What it is                                      |
| ----------------------- | ----------------------------------------------- |
| `packages/personal-doc` | The site (Vite + React).                        |
| `packages/motion-kit`   | `@pf26/motion`, the motion tokens and presets the site imports. |

The Works page keeps a "Coming soon" card for the Bangalore Times game, and
`/game/bangalore-times` redirects to `/works`. That is handled by a one-file stub,
`packages/personal-doc/src/lib/game.js`.

## Run

```bash
pnpm install
pnpm dev        # http://localhost:6173
pnpm build      # output in packages/personal-doc/dist
pnpm preview
```

Needs Node 20+ and pnpm 11 (`corepack enable` picks the right one from `packageManager`).

## Hosting

`netlify.toml` is set up for Netlify: it installs at the repo root, runs
`pnpm --filter personal-doc build` and publishes `packages/personal-doc/dist`, with the
SPA redirect and cache headers. Any static host works with the same build command and
publish directory, as long as unknown paths fall back to `index.html`.
