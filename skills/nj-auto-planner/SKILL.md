---
name: nj-auto-planner
description: Automatic planning and plan-maintenance workflow for Nisal's tasks. Use when the user asks for auto planning, "auto planning", "plan eka hadanna", "wade organize karanna", "roadmap", "goal", "hama dema step by step", "digatama karanna", or when a coding/product task has multiple meaningful steps and needs a concise live plan that updates as work progresses.
---

# NJ Auto Planner

## Purpose

Automatic planning and plan-maintenance workflow for Nisal's tasks. Use when the user asks for auto planning, "auto planning", "plan eka hadanna", "wade organize karanna", "roadmap", "goal", "hama dema step by step", "digatama karanna", or when a coding/product task has multiple meaningful steps and needs a concise live plan that updates as work progresses.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user provides a multi-step task (more than 2 logical steps).
2. The user explicitly requests a plan (e.g., "auto planning", "plan eka hadanna", "step by step", "wade organize karanna").
3. The task requires coordination across multiple domains (e.g., touching frontend, API, database, and deployment).
4. The user uses phrases like "digatama karanna" or "roadmap".

Use this skill to create just enough plan to execute well, then keep the plan current while doing the work. Planning is a tool for momentum, not a substitute for implementation.

## Planning Trigger

Create a plan when:

- The task has more than two meaningful steps.
- The user asks for auto planning, roadmap, goal tracking, or "step by step".
- The work touches multiple areas such as API, frontend, tests, deployment, docs, or security.
- The task may continue across turns and small details must not be lost.

Skip formal planning for one-step commands, tiny answers, or simple file reads.

## Plan Shape

Keep plans short and concrete:

1. Inspect the current state.
2. Implement the smallest complete change.
3. Verify with the strongest practical check.
4. Iterate on failures.
5. Report completion or real blockers.

For larger tasks, group by outcomes:

- Context and requirements.
- Code changes.
- Tests and verification.
- Deployment or external checks.
- Cleanup and final report.

## Live Plan Rules

- Mark exactly one item in progress when plan tooling is available.
- Update the plan when an item is completed, blocked, or replaced by a better next step.
- Do not keep stale planned work that no longer matches evidence.
- Do not mark an item completed until there is evidence.
- Do not end at a plan when the user asked for execution.

## Auto-Routing

Use companion skills based on the plan:

- `$nj-specialist-router` for multi-domain skill selection.
- `$nj-auto-skill-runner` when the user expects skills to be chosen automatically.
- `$nj-roadmap-keeper` for large roadmaps and small-detail tracking.
- `$api-goal-runner` for API/backend goals that should continue until verified.
- `$nj-fast-work-loop` when speed and cost matter.
- `$nj-plugin-ai-orchestrator` when plugins, connectors, or external AI may help.
- `$run-to-completion` when the user asks to continue until done.

## Completion Audit

Before finalizing:

- Re-read the user's explicit requirements.
- Match each requirement to evidence: file diff, command output, test result, browser/API check, deployment state, or artifact.
- Treat uncertain or indirect evidence as incomplete.
- Keep working if a safe next action can strengthen weak evidence.

## Communication

Use short progress updates during long work. Mention what was completed, what is in progress, and what verification is next.



## Code Examples

### Standard Live Plan (`task.md`) Format
```markdown
# Goal: Migrate to Drizzle ORM and Implement Auth

- [x] Phase 1: Database Setup
  - [x] Scaffold Drizzle configuration and client
  - [x] Declare User and Session schemas
- [/] Phase 2: Authentication Routes
  - [x] Implement signup route with Zod schema validation
  - [/] Implement login endpoint with JWT generation
  - [ ] Add session validation middleware
- [ ] Phase 3: Frontend Forms & Integration
  - [ ] Create login/signup forms using shadcn components
  - [ ] Integrate React Query for authentication state
```

## Strict Guardrails
- **NEVER** keep stale planned work that no longer matches the reality of the codebase.
- **NEVER** end at a plan when the user asked for execution. Proceed to execute immediately after the plan is approved or finalized.
- **NEVER** skip verification. If evidence is weak, continue working to strengthen it.
- **NEVER** skip formal planning for multi-step tasks.

