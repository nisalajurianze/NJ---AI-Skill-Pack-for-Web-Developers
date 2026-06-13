---
name: run-to-completion
description: Autonomous execution workflow for large prompts, roadmaps, multi-step tasks, and "keep going until done" requests. Use when the user asks Codex to finish a big task end to end, says not to stop until it is 100% complete, gives broad approval for necessary actions, or uses similar Romanized Sinhala phrasing such as "100% iwara wenakam", "nathara karanne nathuwa", "road map ekak", "loku prompt ekak", or "approval eka tiyenawa".
---

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user provides a multi-step task or a roadmap and says "run to completion".
2. The user gives blanket approval for all actions ("approval eka tiyenawa").
3. The user says "100% iwara wenakam" or "nathara karanne nathuwa".

## Operational Instructions
When triggered, assume full autonomy over the execution phase:
1. Break down the large prompt into actionable checklist items in `task.md`.
2. Do not pause execution to ask for confirmation unless an irreversible destructive action (like deleting a production database) is required.
3. Handle all lint errors, type errors, and test failures autonomously.
4. Report back only when the entire roadmap is fully completed.

### Verification Standards
- A step is only considered complete if it passes local builds and tests.
- Always check the browser logs or API response payloads.

## Strict Guardrails
- **NEVER** pause for routine user review during the execution phase.
- **NEVER** mark a task as complete if there are pending test failures.
- **NEVER** run destructive commands (e.g. `DROP DATABASE`) without explicitly exiting this mode and asking for permission.
- **NEVER** assume a step works without testing it first.
