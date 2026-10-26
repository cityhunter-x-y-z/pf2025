@AGENTS.md

# Claude Code only

## Session start
- Run `git status`, then `git branch --list "deepseek-*"`. If any exist, read `HANDOFF.md` and review `git diff master...deepseek-<name>` before changing anything.
- Flag anything that broke a convention or boundary in `AGENTS.md` (touched config/deps, moved files, edited `packages/` against `.synced-from`, scope creep).

## You own the hard work
Major refactors, architecture changes, new dependencies, build/deploy config changes, and anything `HANDOFF.md` marks as needing a design decision. (No schema or migrations exist in this repo.)

## Plan first
For anything touching more than ~3 files or changing a public API (e.g. `@cloud-march/motion` exports, route structure), present the plan and the rejected alternative, then log the outcome in `DECISIONS.md`.

## Memory
Claude's durable notes live outside the repo, so DeepSeek cannot see them. Anything DeepSeek needs goes into `AGENTS.md` or `HANDOFF.md`.

## Commits
Commit only files you touched. The owner reviews diffs. Do not push unless asked.

## Behavioural guidelines
- Think before coding: state assumptions, present interpretations, ask when unclear.
- Simplicity first: minimum code that solves the task, no speculative features.
- Surgical changes: every changed line traces to the request. Mention unrelated dead code instead of deleting it.
- Goal-driven execution: turn the task into verifiable goals. There are no tests, so verify with `pnpm lint`, `pnpm build` and the dev server before and after.

## Where docs live
- `AGENTS.md` shared rules; `HANDOFF.md` current status; `DECISIONS.md` decision log
- `README.md` run/hosting overview (note: it names the motion package `@pf26/motion` and a `src/lib/game.js` stub; neither matches the repo, see HANDOFF Known issues)
- `packages/personal-doc/src/design/README.md` theme-system working contract
- `packages/personal-doc/docs/design-system.md`, `glass-nav.md`, `ask-amitesh-content.md`
- `packages/motion-kit/README.md` motion tokens and entries
- `.synced-from`, `.sync-manifest.json` sync provenance
