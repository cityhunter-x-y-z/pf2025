# HANDOFF

Living status file — read it at the start of every session, update it at the end of every one.

**Cap: 12 KB.** Replace status lines instead of appending. Keep only the 3 newest session
one-liners. Move anything longer than a few lines into `DECISIONS.md` and link it here.

## Current state

- Base `master` @ `6fd6af4` (2026-10-21). Working tree clean as of 2026-10-26.
- In flight, not merged:
  - `deepseek-driver-ai-app` (`3af4160`, pushed): Driver AI App case study, `DocPage` +
    `PrototypeEmbed`, static docs/prototypes (~27 MB), first commit of these contract files.
  - `deepseek-contributions-refresh` (`87444ee`, **not pushed**): refreshed
    `public/contributions.json` — 219 contributions for 2025-10-26 → 2026-10-26.
- CI: no workflow builds, lints or tests. The only workflow refreshes contribution data.
  Netlify builds `pnpm --filter personal-doc build` from the default branch — the real gate.
- Gates as measured 2026-10-26: `pnpm build` passes; `pnpm lint` fails with **63 pre-existing
  `no-unused-vars` errors on `master`** (64 once the Driver AI branch merges, which adds one).
  Mostly one unused `motion` import per project page. Baseline, not new breakage.

## Who does what

- **Claude only:** refactors, architecture and package boundaries, dependencies, build/deploy/
  hosting config, `/home-2.2` theme system (`src/design/*`), chat canvas and shaders
  (`src/components/chat/*`), `@cloud-march/motion` exports, any future schema/API design.
- **DeepSeek/OpenCode:** only small, fully specified tasks the owner gives in chat or queues
  below — copy edits, data snapshots, a new case study cloned from a sibling, doc updates,
  asset swaps. Stop and hand back anything design-decision shaped.

## NEXT SESSION — START HERE

1. Review the Driver AI branch:
   `git log --oneline master..deepseek-driver-ai-app` then
   `git diff master...deepseek-driver-ai-app`; merge it or send it back.
2. Push the contributions branch: `git push -u origin deepseek-contributions-refresh`.
3. Answer the four open questions in `AGENTS.md` (gate, `packages/` edits, lint cleanup,
   prototype weight).
4. Re-run the recorded baseline: `pnpm install && pnpm build`, then `pnpm lint` (expect 64).

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

- `netlify.toml` sends `X-Frame-Options: DENY` while `public/_headers` (Driver AI branch) says
  `SAMEORIGIN`. The embedded docs/prototypes may be blocked in production — owner call needed.
- `README.md` calls the motion package `@pf26/motion` (it is `@cloud-march/motion`) and claims
  `src/lib/game.js` exists; it does not.
- `.synced-from` says `packages/` must not be edited here; later commits did (open question 2).
- `packages/personal-doc/tailwind.config.js.backup` is tracked and unused; several one-off
  `scripts/download-figma-images-*.js` remain, purpose unconfirmed.
- `src/pages/BangaloreTimesComingSoon.jsx` + its CSS are no longer routed (replaced by
  `DocPage`) but retained deliberately.

## Last session

- 2026-10-26 (DeepSeek): rewrote AGENTS/CLAUDE/HANDOFF/DECISIONS per the shared contract and added
  `.gemini/rules.md` + `.clinerules` pointers.
- 2026-10-26 (DeepSeek): refreshed the contribution snapshot on `deepseek-contributions-refresh`.
- 2026-10-26 (DeepSeek): committed and pushed the Driver AI App branch.
