# AGENTS.md

Shared rules for every agent (Claude Code, DeepSeek via OpenCode, others). Short on purpose.
Status and next steps live in `HANDOFF.md`; the decision log is `DECISIONS.md`.

## What this is
Personal portfolio site of Amitesh Debnath, hosted on Netlify (`vercel.json` also exists).
pnpm workspace (pnpm 11, Node 20+): Vite 7 + React 19 + react-router-dom 7 + Tailwind 4, plain JS/JSX (no TypeScript).
Motion tokens come from the workspace package `@cloud-march/motion` (motion.dev).

## Folders
- `packages/personal-doc/` the site. `src/pages` routes, `src/pages/projects` case studies, `src/components` (+ `case/`, `chat/`), `src/design` theme system for `/home-2.2`, `src/lib/portfolioBrain.js` chat content, `scripts/` one-off asset/data scripts, `public/` static files, `docs/` reference docs.
- `packages/motion-kit/` `@cloud-march/motion`: source-only ESM tokens and helpers, no build step.
- `.github/workflows/update-contributions.yml` refreshes `public/contributions.json` every 6h.
- `netlify.toml`, `vercel.json`, `public/_headers`: hosting config.
- `.synced-from`, `.sync-manifest.json`: packages were synced in from another repo (see Boundaries).

## Commands (run from repo root)
- Install: `pnpm install`
- Dev: `pnpm dev` (http://localhost:6173, port is strict)
- Build: `pnpm build` (Netlify runs this; the only deploy gate)
- Lint: `pnpm lint` (ESLint 9, flat config, `packages/personal-doc/eslint.config.js`)
- Preview: `pnpm preview`
- Type-check: none (no TypeScript). Tests: none configured.
- CI gates: no build/lint/test workflow exists. The only workflow is the contributions refresh. TODO: owner to confirm whether Netlify build is the only gate.

## Read before editing
- Any file: the file itself plus one similar sibling.
- `src/design/*`, `src/styles/liquid-glass.css`, home-2.2 chat UI: `src/design/README.md` first, then `docs/design-system.md`.
- `BottomNav` / `.site-glass` in `src/index.css`: `docs/glass-nav.md`.
- Chat copy (`src/lib/portfolioBrain.js`): `docs/ask-amitesh-content.md` is a snapshot of it, not the source.
- `packages/motion-kit`: its `README.md`; use existing tokens before inventing numbers.
- Contributions heatmap: `scripts/build-contributions.mjs`, the workflow, `ContributionHeatmap.jsx`.
- Hosting/caching: `netlify.toml`, `public/_headers`.

## Code conventions (observed)
- JS/JSX with ES modules, function components, hooks in `src/hooks`, one component per file, PascalCase component files.
- Styling: Tailwind 4 utilities plus plain CSS files beside components; theme values are CSS custom properties, components never branch on theme.
- ESLint: `no-unused-vars` is an error (names starting with a capital letter or `_` are exempt); react-hooks and react-refresh rules on.
- Images: WebP next to PNG originals; thumbnails via the scripts in `scripts/`.
- Dev server port must not start with 4 or 5 (comment in `vite.config.js`).

## Hard boundaries: ask the owner first
Do NOT, without explicit approval in chat:
- add, remove or upgrade dependencies (including `pnpm-lock.yaml`, `packageManager`)
- change architecture
- rename or move files or folders
- rewrite working code or clean up outside the task
- touch config, build or deploy files (`vite.config.js`, `eslint.config.js`, `netlify.toml`, `vercel.json`, `.npmrc`, `pnpm-workspace.yaml`, `public/_headers`), env files, or CI
- write to live services, the GitHub API, or push to the remote
- restore something that looks "removed by accident"
- edit `packages/` assuming it is safe: `.synced-from` says they are synced from another repo (ds-test) and "Do not edit packages/ here". Recent commits did edit them directly. TODO: owner to confirm the current rule.

## Working rules
- Smallest change that solves the task. Read the files you will edit plus one similar file first.
- Ask if a requirement is unclear. Do not expand scope; log anything noticed in `HANDOFF.md` under Known issues.
- Record meaningful decisions in `DECISIONS.md`.
- Large refactors, new architecture and anything marked "design decision" are for Claude Code sessions only. DeepSeek stops and notes them in `HANDOFF.md`.

## Git and handoff
- Run `git status` before any task. Stop if there are uncommitted changes you did not make.
- DeepSeek works only on a branch named `deepseek-<short-task-name>`, never commits to `master`, never merges.
- Commit after each completed task; the message says what and why.
- Never run destructive git commands (reset --hard, clean, force push, branch -D, checkout --) without approval.
- Before finishing, run `pnpm lint` and `pnpm build` if you touched `packages/`; record any failure in `HANDOFF.md`, never hide it. No tests exist.
- Update `HANDOFF.md` at the end of every session.

## Definition of done
- The task as asked works, verified in `pnpm dev` when the change is visible.
- `pnpm lint` and `pnpm build` pass for what was touched (or failures are recorded in `HANDOFF.md`).
- Only task-related files changed; no new dependencies, no stray files.
- Committed (DeepSeek: on its `deepseek-*` branch) and `HANDOFF.md` updated.
