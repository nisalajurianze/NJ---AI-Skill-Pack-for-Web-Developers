---
name: nj-work-pack
description: Coordinated execution pack for the developer's coding, product, design, deployment, security, API, code-quality, auto-planning, auto-skill-selection, plugin, specialist-agent, and AI-development work. Use when the user asks to inspect all repos, use previous work, create or use special agents/skills, automatically use the right skills, auto-plan work, improve code quality, work faster, reduce credit usage, improve performance, use plugins/connectors, get external AI support such as Opus 4.8, increase thinking quality or creativity, use GitHub/Vercel/Cloudflare/Figma/OpenAI capabilities, use Claude Code/opencode-style CLIs, or run a large roadmap to completion.
---

# NJ Work Pack

## Purpose
Coordinated execution pack for the developer's coding, product, design, deployment, security, API, code-quality, auto-planning, auto-skill-selection, plugin, specialist-agent, and AI-development work. Use when the user asks to inspect all repos, use previous work, create or use special agents/skills, automatically use the right skills, auto-plan work, improve code quality, work faster, reduce credit usage, improve performance, use plugins/connectors, get external AI support such as Opus 4.8, increase thinking quality or creativity, use GitHub/Vercel/Cloudflare/Figma/OpenAI capabilities, use Claude Code/opencode-style CLIs, or run a large roadmap to completion.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user provides a multi-faceted task that requires managing multiple skills.
2. The user requests high-level coordination ("use special agents", "inspect all repos", "use right skills").
3. The prompt asks to "work faster", "reduce credit usage", or use "Opus 4.8 / Claude Code".

## Goal

Use this pack to combine installed Codex skills, local CLIs, and connector-aware workflows into a practical execution mode for the developer's projects. Favor useful shipped work over ceremony, but verify before claiming completion.

## Default Operating Mode

1. Use `$nj-auto-skill-runner` when the user asks to automatically use the right skills, says "auto skill use karanna", or gives a broad task where Codex should choose skills proactively.
2. Use `$api-goal-runner` when the user gives an API/backend/integration task as a goal, says "API task ekak", "goal ekak dunnama", "digatama karanna", "stop nokaranna", or wants execution to continue until verified.
3. Use `$nj-auto-planner` when the user asks for auto planning, a roadmap, a goal plan, or the task has multiple meaningful steps.
4. Use `$nj-specialist-router` when the user asks for special agents, many skills, "hama dema balala", or broad multi-domain execution.
5. Use `$nj-plugin-ai-orchestrator` when the user asks to use plugins/connectors or external AI support such as Opus 4.8, Claude Code, OpenCode, or other models.
6. Use `$nj-repo-memory` when the work touches the developer's previous repos or prior Codex project context.
7. Use `$nj-fast-work-loop` when the user asks to work quickly, reduce cost, or avoid wasting time.
8. Use `$run-to-completion` and `$nj-large-prompt-phased-executor` immediately and automatically when the user gives a large roadmap, long prompt, or says to continue until finished.
9. Use `$opus-4-8-mode` when the user asks for Claude Opus, Opus 4.8, "best model", "deep thinking", or Opus-style work.
10. Inventory the repo first: files, package managers, scripts, framework, deployment target, auth/storage providers, and existing docs.
11. Choose the narrowest relevant specialist skill:
   - Custom Skills: `$nj-auto-skill-runner`, `$nj-auto-planner`, `$nj-plugin-ai-orchestrator`, `$nj-code-quality-guardian`, `$nj-api-hardener`, `$nj-frontend-polish`, `$nj-test-failure-fixer`, `$nj-deploy-guardian`, `$nj-security-performance-sweep`, `$nj-roadmap-keeper`, `$nj-mock-and-seed`, `$nj-git-guardian`, `$nj-onboarding-design-guardian`, `$nj-checkout-payment-design-guardian`, `$nj-search-filter-design-guardian`, `$nj-account-profile-design-guardian`, `$nj-ui-elements-design-guardian`, `$nj-landing-page-design-guardian`, `$nj-motionsites-design-guardian`, `$nj-webgl-3d-design-guardian`, `$nj-design-engineer-guardian`, `$nj-ai-engineering-guardian`, `$nj-large-prompt-phased-executor`, `$nj-feature-review-gatekeeper`, `$nj-image-prompt-analyst`, `$nj-pre-impl-clarifier`, `$caveman`, `$codeburn`.
   - GitHub: `$github`, `$gh-fix-ci`, `$gh-address-comments`.
   - Vercel/web app: `$nextjs`, `$vercel-cli`, `$deployments-cicd`, `$env-vars`, `$ai-sdk`, `$shadcn`, `$verification`, `$agent-browser-verify`.
   - Cloudflare: `$cloudflare`, `$wrangler`, `$workers-best-practices`, `$durable-objects`, `$cloudflare-agents-sdk`, `$web-perf`.
   - Figma/design: `$figma-use`, `$figma-generate-design`, `$figma-generate-library`, `$figma-code-connect`, `$figma-generate-diagram`.
   - Security: `$security-scan`, `$threat-model`, `$finding-discovery`, `$fix-finding`, `$attack-path-analysis`, `$validation`.
   - OpenAI development: `$openai-docs`, `$openai-agents-sdk`, `$build-chatgpt-app`, `$openai-platform-api-key`, `$openai-api-troubleshooting`.
12. Prefer active app/plugin tools when present. If a requested connector is not active, report that the connector must be connected in Codex, then continue with local repo and CLI work.

## Custom Quality Layer

Use these custom skills before broader generic work when their trigger matches:

- `$nj-specialist-router`: choose specialist skills for multi-domain tasks.
- `$nj-auto-skill-runner`: automatically choose and coordinate the right skills for broad tasks.
- `$nj-auto-planner`: create and maintain concise live plans for multi-step work.
- `$nj-plugin-ai-orchestrator`: route plugin/connector use and external AI support.
- `$nj-code-quality-guardian`: improve maintainability, correctness, architecture, and tests.
- `$nj-fast-work-loop`: speed up work with parallel inspection and smallest useful verification.
- `$nj-repo-memory`: apply known context for the developer repos and prior Codex work.
- `$nj-api-hardener`: harden API/backend/auth/database/webhook/upload/payment flows.
- `$nj-frontend-polish`: improve UI/UX, responsiveness, accessibility, and browser-verified polish.
- `$nj-test-failure-fixer`: debug failing tests, builds, typechecks, CI, and smoke checks.
- `$nj-deploy-guardian`: protect release/deploy/env/domain/CI work.
- `$nj-security-performance-sweep`: inspect and fix security/performance risks.
- `$nj-roadmap-keeper`: preserve small details across long roadmaps.
- `$nj-mock-and-seed`: manage database seeds or mock external services (Resend, PayHere, Cloudinary).
- `$nj-git-guardian`: format commit messages, name branches, and write Pull Request summaries.
- `$nj-onboarding-design-guardian`: design welcome tours, progressive disclosures, and clean auth screens.
- `$nj-checkout-payment-design-guardian`: design secure shopping checkouts, payment gateway loadings, and pricing paywalls.
- `$nj-search-filter-design-guardian`: design category chips, search bars, auto-suggestions, and responsive filter sheets.
- `$nj-account-profile-design-guardian`: design grouped settings navigation, profile edit forms, and danger zones.
- `$nj-ui-elements-design-guardian`: design modals, bottom sheets, toast notifications, and glassmorphism styling.
- `$nj-landing-page-design-guardian`: design landing pages (Hero, Features, Pricing) in Minimal, Brutalist, and Editorial styles with 3D and animated effects.
- `$nj-motionsites-design-guardian`: design premium motionsites.ai-inspired interactive pages, mesh gradients, spotlight grids, card tilts, and border sweeps.
- `$nj-webgl-3d-design-guardian`: design 3D interactive models, camera parallax tracking, and optimize WebGL rendering performance.
- `$nj-design-engineer-guardian`: engineer modular React components, Radix accessibility, and AI prompt-friendly shadcn styling.
- `$nj-ai-engineering-guardian`: design robust RAG, semantic chunking, prompt curation context, output guardrails, and automated eval harnesses.
- `$nj-large-prompt-phased-executor`: divide large prompts into neat sequential phases and auto-run them step-by-step.
- `$nj-feature-review-gatekeeper`: verify completed features/pages against user prompts before moving to new tasks to ensure zero code or visual gaps.
- `$nj-image-prompt-analyst`: analyze user-submitted images with no text instructions and interview the user to clarify scope.
- `$nj-pre-impl-clarifier`: analyze codebase & web standards at the start of any new request, find missing prompt requirements, and interview the user with recommendations.
- `$caveman`: compress output text, save tokens/credits, write brief comments or commits when token savings are needed.
- `$codeburn`: analyze session token usage, lifetime token costs, and model metrics.

## Project Repo Map

When the current repo is one of your known projects, refer to `$nj-repo-memory` for project-specific memory routing and architecture guidelines before broad exploration.

Repository clones for inventory may live under separate directories in the active workspace. Treat them as working copies, not as the production source of truth unless the user explicitly asks to edit or publish from those clones.

## Credit And Cost Control

- Start with local inspection, cached plugin skills, official docs already in skills, and existing repo scripts before browsing or using expensive generation.
- Use smaller/faster reasoning for simple commands, inventory, formatting, and repetitive checks.
- Escalate reasoning depth only for architecture, security review, hard debugging, migration planning, or high-risk changes.
- Avoid repeating failed commands blindly. Inspect logs, change one thing, and rerun the smallest useful check.
- Use deterministic tools for scans, formatting, tests, builds, and data extraction instead of asking a model to infer raw facts.
- Summarize long outputs and keep a ledger of decisions so future turns do not pay to rediscover the same context.

## Performance Mode

- Run independent file reads/searches in parallel when tools allow it.
- Use `rg` and repo-native scripts before slow manual exploration.
- Keep dev servers alive only while verification needs them.
- Verify frontend changes with browser checks when a local target is known.
- Record exact commands, URLs, and account blockers.

## Creativity Mode

- For product/UI work, generate two or three distinct directions before implementation when the user asks for creativity.
- Ground creative work in the project's audience, brand, constraints, and actual components.
- Prefer concrete prototypes, diagrams, design systems, or prompts over vague brainstorming.

## External AI CLIs

Claude Code is available if `claude --version` works. Use it only when the user explicitly wants Claude Code, Anthropic/Opus exploration, or a second local CLI pass. Do not claim a specific model such as Opus is available until the CLI/account confirms it.

OpenCode/OpenRouter can be configured with credentials. Verified model names structure: `openrouter/<provider>/<model-name>`. Use `$opus-4-8-mode` to decide whether to call high-end models or emulate the workflow locally.

If opencode/openclu-style commands are requested, first verify the command exists. If missing, install or repair the launcher through an approved package source, then run `opencode --version`.

## Completion Standard

Do not mark a setup as complete until:

- Required skills exist under the user skills folder or are active plugin skills.
- Required CLIs are discoverable on PATH and version-checked.
- Account-gated tools are either authenticated or listed as explicit login blockers.
- The final report says what was installed, what was verified, and what still requires user login or connector confirmation.



## Code Examples

### CLI Command Chain Coordinator
```markdown
# Executing Multi-Domain Tasks
1. Run `nj-global-orchestrator` to set plan boundaries.
2. Invoke `nj-design-engineer-guardian` to build front-end components.
3. Validate backend endpoints using `nj-api-hardener`.
4. Trigger `nj-test-failure-fixer` to resolve typecheck or build bugs.
```

## Strict Guardrails
- **NEVER** use generic platforms (like ChatGPT or Web Search) for facts that are already defined in local custom `nj-*` skills.
- **NEVER** leave a dev server running if verification is done.
- **NEVER** repeat a failed command blindly without inspecting logs and changing one thing.

