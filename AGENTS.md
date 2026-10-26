# AGENTS.md — the shared contract

Every agent (Claude Code, OpenCode/DeepSeek, Gemini CLI, Cline, anything else) reads this
file at the start of a session. `CLAUDE.md` holds Claude-only deltas; everything else is
here and nowhere else. Status lives in `HANDOFF.md`; history lives in `DECISIONS.md`.

If a chat instruction conflicts with a rule below, ask the owner before acting.

## What this is

Personal portfolio of Amitesh Debnath: case studies, a chat-driven home surface
(`/home-2.2`), and a museum view. Static React SPA, built by Vite, hosted on Netlify.

**Current goal:** keep the site shippable while two new surfaces land — the Driver AI App
case study and design-document pages. Nothing on `master` is broken.

## Stack — installed versions (read from `pnpm-lock.yaml`, never guess)

| Thing | Version |
| --- | --- |
| Node | 20+ required (`README.md`); no `engines` field, local dev runs 22.15.0 |
| pnpm / lockfile | 11.25.0 (`packageManager`) / lockfile v9.0 |
| React, React DOM | 19.3.0 |
| react-router-dom | 7.18.4 |
| Vite / @vitejs/plugin-react | 7.3.6 / 5.2.0 |
| Tailwind CSS | 4.3.3 (`@tailwindcss/postcss` 4.3.3) |
| motion (motion.dev) | 13.4.0, wrapped by workspace `@cloud-march/motion` 0.1.0 |
| ESLint | 9.39.5, flat config (`packages/personal-doc/eslint.config.js`) |
| react-ga4 | 2.1.0 |
| sharp / svgo / vite-plugin-image-optimizer | 0.34.5 / 3.3.5 / 2.0.3 |

Plain JS/JSX — no TypeScript, no type-check, no test runner, no i18n library, no database,
no server API. `package.json` carries ranges; the lockfile is the truth.

## Folder map

- `packages/personal-doc/` — the site.
  - `src/pages/` routes: `Home`, `HomeV22` (`/home-2.2`), `Works`, `About`, `Museum`,
    `BangaloreTimesComingSoon`; `src/pages/projects/` one file per case study (`*V2`
    variants exist).
  - `src/components/` shared chrome (nav, cards, images); `case/` case-study primitives
    (`CaseShell`, `Primitives`, `ProofMedia`, `SceneTabs`, `StageFlow`); `chat/` the WebGL
    chat surface and shaders.
  - `src/design/` theme system for `/home-2.2`; `src/styles/liquid-glass.css` its primitives.
  - `src/hooks/`, `src/utils/analytics.js`, `src/lib/` (`gate.js` password gate,
    `portfolioBrain.js` chat copy).
  - `scripts/` one-off asset and data scripts; `public/` static files (`contributions.json`,
    `_headers`, `docs/`, `prototypes/`); `docs/` reference docs.
- `packages/motion-kit/` — `@cloud-march/motion`, source-only ESM tokens and helpers, no build.
- `.github/workflows/update-contributions.yml` — 6-hourly refresh of `public/contributions.json`
  (skips when `GH_CONTRIB_TOKEN` is unset).
- `netlify.toml`, `vercel.json`, `packages/personal-doc/public/_headers` — hosting.
- `.synced-from`, `.sync-manifest.json` — sync provenance from the `ds-test` repo.

## Commands, gates, and the command per area

Run from the repo root. No CI workflow builds, lints or tests this repo — the only workflow
refreshes contribution data. **The effective gate is `pnpm build`, because Netlify runs it.**

| Purpose | Command |
| --- | --- |
| Install | `pnpm install` |
| Dev (required for any UI change) | `pnpm dev` → http://localhost:6173, strict port |
| Build (gate) | `pnpm build` |
| Lint | `pnpm lint` — currently fails, see HANDOFF baseline |
| Preview the build | `pnpm preview` |
| Site only | `pnpm --filter personal-doc <dev\|build\|lint\|preview>` |
| Motion kit | root `pnpm lint`/`pnpm build` (its own build is a no-op echo) |
| Images | `pnpm --filter personal-doc optimize:images` (add `:replace` to overwrite) |
| Image variants / placeholders | `pnpm --filter personal-doc generate:images` / `generate:placeholders` |
| Contribution data | `node packages/personal-doc/scripts/build-contributions.mjs <raw.json> packages/personal-doc/public/contributions.json` |

## Read before editing (mandatory)

No hook enforces this for every tool — Claude Code may have skills and hooks, Gemini CLI and
Cline get none, OpenCode gets only this file. Checking this table is the agent's own job.

| Before touching | Read first |
| --- | --- |
| Any file | the file itself **and** one similar sibling |
| `/home-2.2` UI, `src/design/*`, `src/components/chat/*`, `src/styles/liquid-glass.css` | `src/design/README.md`, then `docs/design-system.md` |
| `BottomNav`, `.site-glass`, nav glass | `docs/glass-nav.md` |
| A case study (`src/pages/projects/*`, `src/components/case/*`) | `CaseShell.jsx`, `Primitives.jsx`, and one recent sibling |
| Chat answers (`src/lib/portfolioBrain.js`) | `docs/ask-amitesh-content.md` (a snapshot of the copy, not its source) |
| Motion, timings, easing | `packages/motion-kit/README.md` and its `src/tokens.js` |
| Contribution heatmap | `ContributionHeatmap.jsx`, `scripts/build-contributions.mjs`, the workflow |
| Hosting, caching, security headers | `netlify.toml`, `public/_headers`, `vercel.json` |
| Image pipeline | `scripts/convert-to-webp.js`, `scripts/generate-image-variants.js` |
| Database, API, i18n, migrations | **none exist.** Any such work is a design decision: stop and note it in `HANDOFF.md`. |

## Code conventions

- One component per file, PascalCase filename, function component, default export. Hooks live
  in `src/hooks/use*.js`.
- Imports omit extensions and folder `/index` — match the neighbouring file (`from
  './components/Navbar'`).
- Styling: Tailwind 4 utilities plus a plain `.css` file next to the component. Visual values
  are CSS custom properties; no component branches on the theme.
- Reuse before creating: `case/Primitives.jsx`, `Button`, `BlurImage`/`LazyImage`/
  `ResponsiveImage`, `markPalettes.js`, `useEnter.js`, motion tokens.
- Copy is English and lives inline (no i18n layer). Chat answers are the exception:
  `src/lib/portfolioBrain.js`, mirrored by the docs snapshot.
- No tests exist and there is no runner. Do not add one; verify with `pnpm build` plus a
  manual pass in `pnpm dev`.
- ESLint: `no-unused-vars` is an error (names starting with a capital or `_` are exempt);
  react-hooks and react-refresh rules are on. Remove dead code; never silence with
  `eslint-disable`.
- Images: WebP beside the PNG original, generated by the scripts — never hand-converted.
- Comments explain *why*, in prose. Keep them accurate when you change the code.

## Hard boundaries — ask the owner first

Not without explicit approval in chat:

- adding, removing or upgrading dependencies — including `pnpm-lock.yaml` and `packageManager`
- architecture, package boundaries, route structure, or the public exports of `@cloud-march/motion`
- renaming or moving any file or folder
- rewriting working code, or cleaning up anything outside the task
- config, build, deploy, CI or env files: `vite.config.js`, `eslint.config.js`, `netlify.toml`,
  `vercel.json`, `public/_headers`, `.npmrc`, `pnpm-workspace.yaml`, `.github/workflows/*`, `.env*`
- writing to live services (Netlify, GA4, GitHub API) or creating real records/accounts to test
- copying GPL or unlicensed code, fonts or images; case-study assets are the owner's own work
- "restoring" something that looks removed by accident — the removal may be deliberate
- editing `packages/` directly: `.synced-from` says these are synced from `ds-test` and must
  not be edited here, though later commits did (open question 2)

## Working rules

1. Make the smallest change that finishes the task.
2. Read every file you will edit, plus one similar file, before editing.
3. Ask instead of guessing. If you must proceed, state the assumption in your summary.
4. Never expand scope. Park anything you notice in `HANDOFF.md` → Known issues.
5. Log meaningful decisions in `DECISIONS.md` (append, newest first). Never re-litigate an entry.
6. Large refactors, architecture, and anything marked "design decision" belong to the stronger
   model (Claude Code). Stop and note the item in `HANDOFF.md`.
7. Leave the tree clean: no stray files, no commented-out code, no debug logging.

## Git

- Run `git status` before any task. **STOP** if there are uncommitted changes you did not make —
  another agent may be mid-task — and tell the owner.
- Every non-Claude agent works on `<agent>-<short-task>` (e.g. `deepseek-heatmap-data`) cut from
  the current branch. Never commit to `master`/`main`. Never merge.
- One commit per completed task; the message says what changed and why. In shared files, stage
  only your own hunks.
- Never run `reset --hard`, `clean`, `checkout --`, `branch -D` or force-push without explicit
  approval. Push only when the owner asks.

## Definition of done

- The change runs in `pnpm dev` and is visible where it should be (or the reason it is not
  visible is stated).
- `pnpm build` passes and `pnpm lint` matches the recorded baseline — or the exact failure is
  pasted into `HANDOFF.md`.
- UI work respects the tokens and theme docs, and was checked at a narrow and a wide width.
  There is no Storybook, so no stories to update.
- Committed on the right branch (Claude may commit to its working branch; others on `<agent>-*`),
  `HANDOFF.md` updated.
- A 3–5 line summary to the owner: what changed, where, what was verified, what was not.

## Open questions (owner to answer)

Agents are not blocked on these; the temporary default applies until the owner says otherwise.

1. **Is the Netlify build the only gate?** Default: treat `pnpm build` as the gate and run
   `pnpm lint` as a report, tolerating its known failures.
2. **May `packages/` be edited directly, against `.synced-from`?** Default: no — ask first.
3. **Should the existing lint errors be fixed as their own task?** Default: no drive-by cleanup.
   Baseline is 63 on `master` (64 once the Driver AI branch merges).
4. **Are the ~27 MB of prototype/design-doc HTML staying in git?** Default: yes.
