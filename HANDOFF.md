# HANDOFF

Living status file — read it at the start of every session, update it at the end of every one.

**Cap: 12 KB.** Replace status lines instead of appending. Keep only the 3 newest session
one-liners. Move anything longer than a few lines into `DECISIONS.md` and link it here.

## Current state

- `master` now contains everything: Driver AI App + design-doc pages (branch
  `deepseek-driver-ai-app`), home cards for Bangalore Times / Gazelle / Driver AI App
  (`deepseek-home-featured`), the refreshed contribution snapshot, and this contract
  (`deepseek-agent-contract`). All four branches merged 2026-10-26; working tree clean.
- CI: no workflow builds, lints or tests. The only workflow refreshes contribution data.
  Netlify builds `pnpm --filter personal-doc build` from the default branch — the real gate.
- Hosting: Netlify is primary (`archisapien.xyz`). Vercel is the backup; `vercel.json` mirrors
  `netlify.toml`. **Any header, rewrite or cache change goes in both files** (and `_headers`) —
  `DECISIONS.md` 2026-10-27.
- Gates as measured 2026-10-26 on merged `master`: `pnpm build` passes; `pnpm lint` fails with
  **64 pre-existing `no-unused-vars` errors** (mostly one unused `motion` import per project
  page, which the core rule cannot see inside JSX). Baseline, not new breakage.

## Who does what

- **Claude only:** refactors, architecture and package boundaries, dependencies, build/deploy/
  hosting config, `/home-2.2` theme system (`src/design/*`), chat canvas and shaders
  (`src/components/chat/*`), `@cloud-march/motion` exports, any future schema/API design.
- **DeepSeek/OpenCode:** only small, fully specified tasks the owner gives in chat or queues
  below — copy edits, data snapshots, a new case study cloned from a sibling, doc updates,
  asset swaps. Stop and hand back anything design-decision shaped.

## NEXT SESSION — START HERE

1. (Owner) Merge `claude/vercel-backup`, then import `cityhunter-x-y-z/pf2025` into Vercel
   (root directory = repo root; `vercel.json` sets the rest). If install fails on pnpm 11, add
   env var `ENABLE_EXPERIMENTAL_COREPACK=1`. Then check the `*.vercel.app` URL: a deep link
   such as `/projects/gazelle` loads, and `curl -sI` shows `X-Frame-Options: SAMEORIGIN`.
2. Answer the four open questions in `AGENTS.md` (gate, `packages/` edits, lint cleanup,
   prototype weight).
3. Re-run the recorded baseline: `pnpm install && pnpm build`, then `pnpm lint` (expect 64).

## Environment notes

- Windows 11, PowerShell 5.1: no heredocs — write commit messages to a file and use
  `git commit -F <file>`.
- Node 22.15.0 locally, Node 20+ required; pnpm 11.25.0 via `packageManager`; `.npmrc` sets
  `node-linker=hoisted`.
- Dev server: port 6173, `strictPort`. No port starting with 4 or 5.
- **Never enter credentials** into files, commits, chat or logs. Tokens live in GitHub/Netlify
  secrets only (`GH_CONTRIB_TOKEN`).
- Another session may leave uncommitted edits in shared files. Leave them alone and stage only
  your own hunks.

## Decisions made (do not reopen without the owner)

- Shared Claude + DeepSeek workflow, `<agent>-<task>` branches, never commit to `master`,
  never merge → `DECISIONS.md` 2026-10-25.
- Prototypes and design documents ship as static HTML in iframes, not React →
  `DECISIONS.md` 2026-10-26.
- This contract (AGENTS/CLAUDE/HANDOFF/DECISIONS + tool stubs) is the source of truth; tool
  stubs only point at it → `DECISIONS.md` 2026-10-26.

## Next tasks

- (DeepSeek) Refresh the heatmap snapshot again on request; the workflow is frozen until
  `GH_CONTRIB_TOKEN` is set. Do not add automation.
- (Claude) The 64 lint errors: fix or configure, as its own task.
- (Design-decision-gated) Whether to wire `GH_CONTRIB_TOKEN` so the 6-hourly workflow works.
- (DeepSeek, after the owner confirms intended state) README drift: wrong package name and the
  claimed `src/lib/game.js`.

## Known issues

Checked against `git log` and `DECISIONS.md` on 2026-10-26; fixed items removed.

- `README.md` calls the motion package `@pf26/motion` (it is `@cloud-march/motion`) and claims
  `src/lib/game.js` exists; it does not.
- `.synced-from` says `packages/` must not be edited here; later commits did (open question 2).
- `packages/personal-doc/tailwind.config.js.backup` is tracked and unused; several one-off
  `scripts/download-figma-images-*.js` remain, purpose unconfirmed.
- `src/pages/BangaloreTimesComingSoon.jsx` + its CSS are no longer routed (replaced by
  `DocPage`) but retained deliberately.

## Last session

- 2026-10-27 (Claude): `vercel.json` made a full mirror of `netlify.toml` (SPA rewrite, security
  and cache headers) on `claude/vercel-backup`, unpushed; `pnpm build` passes. No Vercel project
  exists yet — owner step above.
- 2026-10-27 (Claude): production blocked the Gazelle / Bangalore Times embeds ("refused to
  connect") because `netlify.toml` sent `X-Frame-Options: DENY`, overriding `_headers`. Fixed to
  `SAMEORIGIN`, merged and pushed (`4b93893`); verified live on `archisapien.xyz`.
- 2026-10-26 (DeepSeek): owner-approved merge of the four `deepseek-*` branches into `master` and
  push — history in `DECISIONS.md`.
