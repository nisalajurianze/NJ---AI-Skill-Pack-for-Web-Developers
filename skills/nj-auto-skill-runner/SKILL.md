---
name: nj-auto-skill-runner
description: Automatic Codex skill selection and skill-use workflow for Nisal's tasks. Use when the user says "auto skill use karanna", "skills automatically use karanna", "wenam skill ekak one", "best skills tika use karanna", "hama skill ekama balala right ewa use karanna", or gives a broad coding/product/API/frontend/deploy/security task where Codex should proactively choose, load, and coordinate the right skills without waiting for the user to name them.
---

# Nisal Auto Skill Runner

## Purpose

Automatic Codex skill selection and skill-use workflow for Nisal's tasks. Use when the user says "auto skill use karanna", "skills automatically use karanna", "wenam skill ekak one", "best skills tika use karanna", "hama skill ekama balala right ewa use karanna", or gives a broad coding/product/API/frontend/deploy/security task where Codex should proactively choose, load, and coordinate the right skills without waiting for the user to name them.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user provides a broad instruction like "auto skill use karanna", "hama skill ekama balala", or "best skills tika use karanna".
2. The task clearly requires cross-domain execution (e.g., API + Frontend + Deployment).
3. The user complains that an instruction was missed, signaling the need to dynamically pull in a specialized guardian or gatekeeper.

Use this skill to turn a broad user request into the right active skill set. Choose skills deliberately, load only the useful ones, and keep execution moving instead of asking the user to name every skill.

## Auto-Use Protocol

1. Restate the user's real objective in one short line.
2. Select one primary skill and up to four companion skills that materially improve the outcome.
3. Prefer Nisal custom skills first, then plugin skills, then generic platform skills.
4. Load each selected skill's `SKILL.md` only when its instructions are needed for the current turn.
5. Announce the selected skills and why in one concise update.
6. Execute the task. Do not stop at routing unless the user asked only for a routing decision.
7. Re-route if evidence shows a different skill is needed.

## Default Skill Stack

Use this baseline when the user gives a broad task and does not name exact skills:

- Coordination: `$nisal-work-pack`, `$nisal-specialist-router`.
- Planning: `$nisal-auto-planner`, `$nisal-roadmap-keeper`.
- Speed: `$nisal-fast-work-loop`.
- API/backend: `$api-goal-runner`, `$nisal-api-hardener`.
- Quality/refactor: `$nisal-code-quality-guardian`.
- Frontend/UI: `$nisal-frontend-polish`, `$verification`, `$agent-browser-verify`.
- Tests/builds: `$nisal-test-failure-fixer`.
- Deploy/release: `$nisal-deploy-guardian`.
- Security/performance: `$nisal-security-performance-sweep`.
- Plugins/external AI: `$nisal-plugin-ai-orchestrator`, `$opus-4-8-mode`.
- Repo memory: `$nisal-repo-memory`.

## Skill Choice Rules

- If the request says "API", "backend", "auth", "DB", "webhook", "payment", or "goal", use `$api-goal-runner` and `$nisal-api-hardener`.
- If the request has more than two meaningful steps, use `$nisal-auto-planner`.
- If the request says "superb widiyata", "code quality", "clean", "refactor", or "best practice", use `$nisal-code-quality-guardian`.
- If the request touches UI, layout, responsive behavior, browser checks, or visual polish, use `$nisal-frontend-polish`.
- If tests, build, typecheck, CI, or errors fail, use `$nisal-test-failure-fixer`.
- If deploy, env vars, domains, Vercel, Railway, Cloudflare, release, or production is involved, use `$nisal-deploy-guardian`.
- If security, performance, rate limits, validation, secrets, or abuse risk is involved, use `$nisal-security-performance-sweep`.
- If plugins/connectors, GitHub, Vercel, Cloudflare, Figma, OpenAI, Cloudinary, browser automation, or external AI models are involved, use `$nisal-plugin-ai-orchestrator`.
- If the user asks to use previous work or all known repos, use `$nisal-repo-memory`.

## Operating Rules

- Do not select every skill. Pick the smallest useful set.
- Do not ask the user which skill to use when local context makes the choice clear.
- Do not claim a skill was used unless its instructions were actually loaded or already active in the current turn.
- Prefer connector/plugin tools when the relevant plugin is installed and authenticated.
- Prefer local repo inspection before web browsing or external AI.
- Keep the final answer focused on what was done, which checks passed, and any real blockers.


## Strict Guardrails
- **NEVER** ask the user which skill to use when local context makes the choice clear.
- **NEVER** claim a skill was used unless you have explicitly loaded its `SKILL.md` file during the current turn.
- **NEVER** load more than 5 skills at once to prevent context collapse.
- **NEVER** stop at routing. After selecting skills, execute the task.

