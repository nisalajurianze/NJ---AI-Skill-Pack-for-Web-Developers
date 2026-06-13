---
name: nj-fast-work-loop
description: Speed and cost-control workflow for Nisal's coding tasks. Use when the user says "wade ikman karanna", "quickly", "fast", "credit aduwen", "time waste nokara", wants rapid implementation, or asks Codex to inspect, edit, test, and finish work efficiently without unnecessary browsing or over-planning.
---

# Nisal Fast Work Loop

## Purpose

Speed and cost-control workflow for Nisal's coding tasks. Use when the user says "wade ikman karanna", "quickly", "fast", "credit aduwen", "time waste nokara", wants rapid implementation, or asks Codex to inspect, edit, test, and finish work efficiently without unnecessary browsing or over-planning.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user requests a fast implementation (e.g., "wade ikman karanna", "fast", "quickly").
2. The user wants to minimize cost or token usage ("credit aduwen", "time waste nokara").
3. The task involves straightforward code edits or bug fixes where extensive planning would be overkill.
4. You are executing an item in `task.md` that does not touch high-risk security or architecture layers.

Use this skill to move fast while keeping verification honest. The goal is not to skip thinking; it is to avoid wasted discovery, repeated commands, and oversized rewrites.

## Fast Start

1. Read the nearest project files first: `package.json`, app entrypoints, route files, docs, env examples, and tests.
2. Run independent reads/searches in parallel when available.
3. Use `rg` or repo-native search before slow manual browsing.
4. Identify the smallest command that proves the next checkpoint.
5. Edit only after the relevant local pattern is understood.

## Execution Loop

```text
scan small -> choose path -> edit focused -> run smallest check -> fix next failure -> widen verification
```

Keep a tiny ledger:

- Goal.
- Files likely involved.
- Command to verify.
- Current blocker or next action.

## Speed Rules

- Do not ask for clarification if local inspection can safely answer it.
- Do not browse for stable facts already present in the repo or installed skills.
- Do not run full builds repeatedly when a targeted test is enough.
- Do not retry the same failing command without changing the code or environment.
- Do not leave dev servers running after verification is finished.
- Prefer deterministic tools over model guessing for logs, tests, file lists, and diffs.

## When To Slow Down

Slow down and use deeper review for security, payment, auth, database migrations, production deploys, data deletion, public posting, or large architecture changes.



## Strict Guardrails
- **NEVER** ask for clarification if local inspection can safely answer it.
- **NEVER** browse the web for stable facts already present in the repo or installed skills.
- **NEVER** run full builds repeatedly when a targeted test is enough.
- **NEVER** retry the exact same failing command without fundamentally changing the code or environment.
- **NEVER** apply this skill to tasks involving security, payment, auth, database migrations, or production deploys (use `$nisal-deploy-guardian` or `$nisal-security-performance-sweep` instead).

