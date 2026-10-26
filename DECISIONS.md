# DECISIONS

Running log, newest first. Copy the template for each entry.

```
## YYYY-MM-DD: <title>
- Decision:
- Why:
- Rejected alternative:
- Consequences:
```

## 2026-10-26: Ship prototypes and design docs as static HTML, not React
- Decision: keep the single-file prototypes (`public/prototypes/*.html`, 1–15MB) and design documents (`public/docs/*.html`) as exported HTML and embed them with iframes — `PrototypeEmbed` lazy-loads and scales them to the column, `DocPage` shows a document full-viewport. `X-Frame-Options` relaxed from `DENY` to `SAMEORIGIN` so the site may frame its own files.
- Why: the authors' exports are working artifacts with their own navigation, themes and keyboard handling; rebuilding them in React would duplicate that and drift.
- Rejected alternative: port each prototype into JSX, or host them on a separate origin.
- Consequences: ~27MB of HTML enters git history and the Netlify output, but only pages that embed them download them. Any change to a prototype must be re-exported and replaced as a whole file.

## 2026-10-25: Adopt a shared Claude Code + DeepSeek workflow
- Decision: Both agents follow `AGENTS.md`. Claude Code additionally follows `CLAUDE.md`. Work is handed over through `HANDOFF.md`; decisions are logged here. DeepSeek works only on `deepseek-<task>` branches and never commits to `master` or merges. Refactors, architecture and design decisions are Claude-only.
- Why: The owner switches between two agents on one codebase; one rule set and file-based handoff avoids conflicting conventions and lost context.
- Rejected alternative: Separate per-agent rule files (risk of drift), or relying on each tool's private memory (not visible to the other agent).
- Consequences: Agents must keep `HANDOFF.md` under ~12 KB and update it every session. The owner reviews diffs and merges `deepseek-*` branches.
