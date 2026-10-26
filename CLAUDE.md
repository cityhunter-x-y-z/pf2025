@AGENTS.md

# Claude Code only

Everything shared is in `AGENTS.md`. This file is only the delta.

## Session start

1. `git status` — if dirty with edits you did not make, stop and say so.
2. `git branch --list "deepseek-*"` (and any other `<agent>-*`). For each branch:
   `git log --oneline master..<branch>` and `git diff master...<branch>`; then read `HANDOFF.md`.
3. Flag anything that broke a rule in `AGENTS.md` — dependencies or lockfile, config/CI,
   moved files, direct `packages/` edits, scope creep — in your reply and in
   `HANDOFF.md` → Known issues.

## You own the hard work

Major refactors, architecture and package boundaries, new dependencies, build/deploy/hosting
config, the `/home-2.2` theme system (`src/design/*`), the chat canvas and shaders
(`src/components/chat/*`), and the public exports of `@cloud-march/motion`. Also anything
`HANDOFF.md` marks "design decision".

No database, schema, migrations or API exist. If one is proposed, its design is yours.

## Plan first

More than roughly three files, a public contract (`@cloud-march/motion` exports, route
structure), or a core engine (theme provider, shaders, chat) — post the plan **and** the
rejected alternative before editing, then log the outcome in `DECISIONS.md`.

## Memory

Your durable memory lives outside this repo, and the other agent cannot read it. Anything it
needs must be written into `AGENTS.md` or `HANDOFF.md` — never left in memory, a plan file, or
this file's assumptions.

## Hooks, skills, and tools

Claude-only: `.claude/` settings, hooks, skills and subagents (and `.claude/launch.json`,
which is gitignored). None of that exists for OpenCode/DeepSeek, Gemini CLI or Cline.

Consequence: nothing enforces `AGENTS.md` on the other agent. Review its UI work by hand
against `packages/personal-doc/src/design/README.md` and `docs/design-system.md`, and its
diffs against the boundaries list.

## Commits

Stage only your own hunks; do not push unless asked.
