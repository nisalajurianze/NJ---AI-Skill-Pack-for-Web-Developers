---
name: nj-roadmap-keeper
description: Roadmap, checklist, goal, and small-detail tracking workflow for Nisal's long coding/product tasks. Use when the user gives many requirements, says "hama dema", "podi podi than pawa", "roadmap", "complete list", "100% iwara wenakam", or wants Codex to keep working without losing small tasks.
---

# Nisal Roadmap Keeper

## Purpose

Roadmap, checklist, goal, and small-detail tracking workflow for Nisal's long coding/product tasks. Use when the user gives many requirements, says "hama dema", "podi podi than pawa", "roadmap", "complete list", "100% iwara wenakam", or wants Codex to keep working without losing small tasks.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user gives a large list of requirements or bullet points.
2. The user emphasizes thoroughness (e.g., "hama dema", "podi podi than pawa", "complete list").
3. The user requests non-stop execution ("100% iwara wenakam").
4. You are picking up a task that was interrupted or crosses multiple domains (UI, API, Docs, Deploy).

Use this skill to convert large or messy requests into tracked, verified work without losing small details.

## Roadmap Protocol

1. Extract deliverables from the user's words, docs, screenshots, and repo state.
2. Group them into checkpoints: foundation, API, frontend, data, tests, deployment, security, docs.
3. Mark exactly one checkpoint in progress when checklist tooling is available.
4. Keep a "small details" list for polish items, edge cases, copy, mobile, loading states, logs, and env docs.
5. Finish each checkpoint with evidence before moving on.

## Detail Capture

Track these explicitly:

- User phrases that imply quality level or persistence.
- Existing docs and audit items that may still apply.
- Env/login/account blockers.
- Files changed and commands run.
- Known deferred items and why they were deferred.
- Verification target for each deliverable.

## Completion Rules

- Do not call a roadmap complete because all files were edited.
- Do not hide blocked items inside a general summary.
- Do not lose minor UI/UX, docs, or config requirements.
- If the user interrupts and resumes, rebuild the checklist from artifacts and the newest request.

## Final Report Shape

Keep the final answer short but complete:

- Completed checkpoints.
- Verification evidence.
- Remaining blockers.
- Best next step only when useful.



## Strict Guardrails
- **NEVER** call a roadmap complete just because all files were edited. You must verify them.
- **NEVER** hide blocked items inside a general summary. They must be explicitly flagged.
- **NEVER** lose minor UI/UX, config, or docs requirements. If they were requested, they must be tracked.
- **NEVER** delete an item from the checklist without explicit user permission or completing it.

