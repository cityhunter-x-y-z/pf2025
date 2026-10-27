# DECISIONS

Newest first. Append; never re-litigate an entry — supersede it with a new one that links back.

Each entry: date, one-line title, **Decision**, **Why**, **Affects** (files), **Rejected alternative**.

## 2026-10-27: `netlify.toml` sends `X-Frame-Options: SAMEORIGIN`
- Decision: change the `/*` security header in `netlify.toml` from `DENY` to `SAMEORIGIN`,
  matching `public/_headers`. Completes the 2026-10-26 static-HTML entry below.
- Why: Netlify applied the `netlify.toml` value, so production served `DENY` and every
  `DocPage`/`PrototypeEmbed` iframe showed "refused to connect" (owner report, confirmed with
  `curl -sI`). Other origins still cannot frame the site.
- Affects: `netlify.toml`.
- Rejected alternative: a path-scoped `SAMEORIGIN` only for `/docs/*` and `/prototypes/*` —
  the iframe check is on the framed file, so it would also work, but two overlapping rules for
  one header are easier to get wrong than one site-wide value.

## 2026-10-26: Owner authorised one-off merges into `master` by DeepSeek
- Decision: the owner asked DeepSeek, in chat, to merge and push the four `deepseek-*` branches in
  dependency order (`driver-ai-app` → `home-featured` → `agent-contract` → `contributions-refresh`).
  Merged with `--no-ff`; the add/add conflicts in `AGENTS.md`, `CLAUDE.md`, `DECISIONS.md` and
  `HANDOFF.md` were resolved in favour of the contract version. This is a one-off, not a change to
  the rule in `AGENTS.md` ("never merge").
- Why: the branches were stacked (each depended on an earlier one) and the owner wanted them live.
- Affects: `master` tree; `AGENTS.md`, `CLAUDE.md`, `HANDOFF.md`, `DECISIONS.md`.
- Rejected alternative: leaving four branches for the owner to merge by hand, or squashing them
  into one commit and losing the per-task history.

## 2026-10-26: One shared contract, tool files only point at it
- Decision: `AGENTS.md` is the only place rules live, read by every agent. `CLAUDE.md` opens with
  `@AGENTS.md` and holds Claude-only deltas. `.gemini/rules.md` and `.clinerules` are pointer
  stubs that link `AGENTS.md` and the area docs, with no duplicated rule text. `HANDOFF.md` carries
  status, `DECISIONS.md` carries history.
- Why: three agents plus the owner on one repo. Duplicated rules drift, and rules nobody reads
  might as well not exist.
- Affects: `AGENTS.md`, `CLAUDE.md`, `HANDOFF.md`, `DECISIONS.md`, `.gemini/rules.md`, `.clinerules`.
- Rejected alternative: per-tool rule files with their own copies of the rules (drift within a
  week), or relying on each tool's private memory (invisible to the other agents).

## 2026-10-26: Ship prototypes and design documents as static HTML, not React
- Decision: keep the single-file prototypes (`public/prototypes/*.html`, 1–15 MB) and design
  documents (`public/docs/*.html`) as exported HTML and embed them with iframes. `PrototypeEmbed`
  lazy-loads and scales a prototype to the column; `DocPage` shows a document full-viewport.
  `X-Frame-Options` relaxed from `DENY` to `SAMEORIGIN` in `public/_headers` so the site may frame
  its own files.
- Why: the exports are working artefacts with their own navigation, themes and keyboard handling;
  rebuilding them in React would duplicate that work and drift from the originals.
- Affects: `src/components/case/DocPage.jsx`, `src/components/case/PrototypeEmbed.jsx`,
  `src/App.jsx`, `src/pages/Works.jsx`, `public/docs/*`, `public/prototypes/*`, `public/_headers`.
- Rejected alternative: port each prototype to JSX, or host them on a separate origin.

## 2026-10-25: Adopt a shared Claude Code + DeepSeek workflow
- Decision: both agents follow `AGENTS.md`; Claude additionally follows `CLAUDE.md`. Work is handed
  over through `HANDOFF.md`, decisions through `DECISIONS.md`. Every non-Claude agent works on
  `<agent>-<task>` branches and never commits to `master` or merges. Refactors, architecture and
  design decisions are Claude-only.
- Why: the owner switches between agents on one codebase; one rule set and a file-based baton avoid
  conflicting conventions and lost context.
- Affects: `AGENTS.md`, `CLAUDE.md`, `HANDOFF.md`, `DECISIONS.md`.
- Rejected alternative: separate per-agent rule sets (drift), or each tool's private memory
  (not visible to the other agent).
