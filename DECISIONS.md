# DECISIONS

Newest first. Append; never re-litigate an entry — supersede it with a new one that links back.

Each entry: date, one-line title, **Decision**, **Why**, **Affects** (files), **Rejected alternative**.

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
