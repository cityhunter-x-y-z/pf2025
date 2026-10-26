# HANDOFF

> Keep under ~12 KB. At session end replace status lines, don't append; keep Last session to 3 one-liners; move anything long into a DECISIONS.md entry and link it.

## Current state
- Branch `deepseek-driver-ai-app` off `master` `6fd6af4`, committed and pushed 2026-10-26. `master` untouched, not merged.
- Adds the Driver AI App case study, design-doc pages (Gazelle, Bangalore Times) and embedded prototypes; first commit of `AGENTS.md`/`CLAUDE.md`/`HANDOFF.md`/`DECISIONS.md`.
- Portfolio site (Vite + React) in `packages/personal-doc`, motion package in `packages/motion-kit`. Deployed via Netlify; `vercel.json` also present.
- Latest repo work: GitHub contributions heatmap moved to a build-time snapshot (`public/contributions.json`), refreshed by a 6-hourly workflow that skips when `GH_CONTRIB_TOKEN` is unset.
- No tests, no type-check. Gates available locally: `pnpm lint`, `pnpm build`.
- No `deepseek-*` branches exist yet. Remote branches: `claude/about-section-title-v4-2tv0ht`, `firstdraft`, `seconddraft`, `thirddraft`.

## NEXT SESSION - START HERE
1. Owner reviews and merges `deepseek-driver-ai-app` if it looks right.
2. Owner answers the TODOs in `AGENTS.md` (CI gating; whether `packages/` may be edited directly).
3. Run `git status`, then `pnpm install`, `pnpm lint`, `pnpm build` once and record the baseline result under Environment notes.
4. Pick the first task from Next tasks.

## Environment notes
- Windows 11; pnpm 11.25.0 via `packageManager`; `.npmrc` sets `node-linker=hoisted`.
- Dev server: `pnpm dev` on port 6173 (strict). `.claude/` is gitignored.
- Baseline 2026-10-26 (on `master` `6fd6af4` + uncommitted work): `pnpm build` passes; `pnpm lint` fails with 64 `no-unused-vars` errors, mostly one unused `motion` import per project page (new `DriverAiApp.jsx` included). Pre-existing, not caused by the Driver AI work. TODO: owner to approve a cleanup.
- `GH_CONTRIB_TOKEN` repo secret may be unset; workflow then skips.

## Decisions made (do not reopen without the owner)
- Claude/DeepSeek shared workflow adopted; see DECISIONS.md.
- Contributions data is a committed static snapshot, not a runtime proxy (commit `a515107`).

## Next tasks
No tasks specified by the owner yet. TODO: owner to supply. Classification rule:
- DeepSeek-safe: fully specified, no design choices left.
- Claude only: refactors, new dependencies, config/build/deploy changes, anything touching `@cloud-march/motion` exports or the theme system architecture.

## Known issues
- `README.md` names the motion package `@pf26/motion`; the actual name is `@cloud-march/motion`.
- `README.md` says `packages/personal-doc/src/lib/game.js` is a stub that redirects `/game/bangalore-times`; the file does not exist in `src/lib` (only `gate.js`, `portfolioBrain.js`). TODO: owner to confirm intended state.
- `.synced-from` says "Do not edit packages/ here", yet later commits edited `packages/` directly.
- `packages/personal-doc/tailwind.config.js.backup` is tracked and looks unused (not touched).
- Several one-off `scripts/download-figma-images-*.js` scripts exist; purpose current status unknown.
- `vite.config.js` has game-art comments (`assets/game/`) while the game package is not in this repo.

## Last session
- 2026-10-26 (DeepSeek): committed the Driver AI App case study, doc/prototype pages and the agent docs on `deepseek-driver-ai-app`, pushed to `origin`; `pnpm build` passes, `pnpm lint` still fails on the pre-existing unused-`motion` imports.
- 2026-10-25 (Claude Code): created AGENTS.md, CLAUDE.md, HANDOFF.md, DECISIONS.md; no source changes, nothing committed.
