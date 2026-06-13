---
name: nisal-work-pack
description: Coordinated execution pack for Nisal's coding, product, design, deployment, security, API, code-quality, auto-planning, auto-skill-selection, plugin, specialist-agent, and AI-development work. Use when the user asks to inspect all repos, use previous work, create or use special agents/skills, automatically use the right skills, auto-plan work, improve code quality, work faster, reduce credit usage, improve performance, use plugins/connectors, get external AI support such as Opus 4.8, increase thinking quality or creativity, use GitHub/Vercel/Cloudflare/Figma/OpenAI capabilities, use Claude Code/opencode-style CLIs, or run a large roadmap to completion.
---

# Nisal Work Pack

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user provides a multi-faceted task that requires managing multiple skills.
2. The user requests high-level coordination ("use special agents", "inspect all repos", "use right skills").
3. The prompt asks to "work faster", "reduce credit usage", or use "Opus 4.8 / Claude Code".

## Goal

Use this pack to combine installed Codex skills, local CLIs, and connector-aware workflows into a practical execution mode for Nisal's projects. Favor useful shipped work over ceremony, but verify before claiming completion.

## Default Operating Mode

1. Use `$nisal-auto-skill-runner` when the user asks to automatically use the right skills, says "auto skill use karanna", or gives a broad task where Codex should choose skills proactively.
2. Use `$api-goal-runner` when the user gives an API/backend/integration task as a goal, says "API task ekak", "goal ekak dunnama", "digatama karanna", "stop nokaranna", or wants execution to continue until verified.
3. Use `$nisal-auto-planner` when the user asks for auto planning, a roadmap, a goal plan, or the task has multiple meaningful steps.
4. Use `$nisal-specialist-router` when the user asks for special agents, many skills, "hama dema balala", or broad multi-domain execution.
5. Use `$nisal-plugin-ai-orchestrator` when the user asks to use plugins/connectors or external AI support such as Opus 4.8, Claude Code, OpenCode, or other models.
6. Use `$nisal-repo-memory` when the work touches Nisal's previous repos or prior Codex project context.
7. Use `$nisal-fast-work-loop` when the user asks to work quickly, reduce cost, or avoid wasting time.
8. Use `$run-to-completion` and `$nisal-large-prompt-phased-executor` immediately and automatically when the user gives a large roadmap, long prompt, or says to continue until finished.
9. Use `$opus-4-8-mode` when the user asks for Claude Opus, Opus 4.8, "best model", "deep thinking", or Opus-style work.
10. Inventory the repo first: files, package managers, scripts, framework, deployment target, auth/storage providers, and existing docs.
11. Choose the narrowest relevant specialist skill:
   - Nisal custom: `$nisal-auto-skill-runner`, `$nisal-auto-planner`, `$nisal-plugin-ai-orchestrator`, `$nisal-code-quality-guardian`, `$nisal-api-hardener`, `$nisal-frontend-polish`, `$nisal-test-failure-fixer`, `$nisal-deploy-guardian`, `$nisal-security-performance-sweep`, `$nisal-roadmap-keeper`, `$nisal-mock-and-seed`, `$nisal-git-guardian`, `$nisal-onboarding-design-guardian`, `$nisal-checkout-payment-design-guardian`, `$nisal-search-filter-design-guardian`, `$nisal-account-profile-design-guardian`, `$nisal-ui-elements-design-guardian`, `$nisal-landing-page-design-guardian`, `$nisal-motionsites-design-guardian`, `$nisal-webgl-3d-design-guardian`, `$nisal-design-engineer-guardian`, `$nisal-ai-engineering-guardian`, `$nisal-large-prompt-phased-executor`, `$nisal-feature-review-gatekeeper`, `$nisal-image-prompt-analyst`, `$nisal-pre-impl-clarifier`, `$nisal-analytics-insight-engine`, `$caveman`, `$codeburn`.
   - GitHub: `$github`, `$gh-fix-ci`, `$gh-address-comments`.
   - Vercel/web app: `$nextjs`, `$vercel-cli`, `$deployments-cicd`, `$env-vars`, `$ai-sdk`, `$shadcn`, `$verification`, `$agent-browser-verify`.
   - Cloudflare: `$cloudflare`, `$wrangler`, `$workers-best-practices`, `$durable-objects`, `$cloudflare-agents-sdk`, `$web-perf`.
   - Figma/design: `$figma-use`, `$figma-generate-design`, `$figma-generate-library`, `$figma-code-connect`, `$figma-generate-diagram`.
   - Security: `$security-scan`, `$threat-model`, `$finding-discovery`, `$fix-finding`, `$attack-path-analysis`, `$validation`.
   - OpenAI development: `$openai-docs`, `$openai-agents-sdk`, `$build-chatgpt-app`, `$openai-platform-api-key`, `$openai-api-troubleshooting`.
12. Prefer active app/plugin tools when present. If a requested connector is not active, report that the connector must be connected in Codex, then continue with local repo and CLI work.

## Custom Quality Layer

Use these custom skills before broader generic work when their trigger matches:

- `$nisal-specialist-router`: choose specialist skills for multi-domain tasks.
- `$nisal-auto-skill-runner`: automatically choose and coordinate the right skills for broad tasks.
- `$nisal-auto-planner`: create and maintain concise live plans for multi-step work.
- `$nisal-plugin-ai-orchestrator`: route plugin/connector use and external AI support.
- `$nisal-code-quality-guardian`: improve maintainability, correctness, architecture, and tests.
- `$nisal-fast-work-loop`: speed up work with parallel inspection and smallest useful verification.
- `$nisal-repo-memory`: apply known context for Nisal repos and prior Codex work.
- `$nisal-api-hardener`: harden API/backend/auth/database/webhook/upload/payment flows.
- `$nisal-frontend-polish`: improve UI/UX, responsiveness, accessibility, and browser-verified polish.
- `$nisal-test-failure-fixer`: debug failing tests, builds, typechecks, CI, and smoke checks.
- `$nisal-deploy-guardian`: protect release/deploy/env/domain/CI work.
- `$nisal-security-performance-sweep`: inspect and fix security/performance risks.
- `$nisal-roadmap-keeper`: preserve small details across long roadmaps.
- `$nisal-mock-and-seed`: manage database seeds or mock external services (Resend, PayHere, Cloudinary).
- `$nisal-git-guardian`: format commit messages, name branches, and write Pull Request summaries.
- `$nisal-onboarding-design-guardian`: design welcome tours, progressive disclosures, and clean auth screens.
- `$nisal-checkout-payment-design-guardian`: design secure shopping checkouts, payment gateway loadings, and pricing paywalls.
- `$nisal-search-filter-design-guardian`: design category chips, search bars, auto-suggestions, and responsive filter sheets.
- `$nisal-account-profile-design-guardian`: design grouped settings navigation, profile edit forms, and danger zones.
- `$nisal-ui-elements-design-guardian`: design modals, bottom sheets, toast notifications, and glassmorphism styling.
- `$nisal-landing-page-design-guardian`: design landing pages (Hero, Features, Pricing) in Minimal, Brutalist, and Editorial styles with 3D and animated effects.
- `$nisal-motionsites-design-guardian`: design premium motionsites.ai-inspired interactive pages, mesh gradients, spotlight grids, card tilts, and border sweeps.
- `$nisal-webgl-3d-design-guardian`: design 3D interactive models, camera parallax tracking, and optimize WebGL rendering performance.
- `$nisal-design-engineer-guardian`: engineer modular React components, Radix accessibility, and AI prompt-friendly shadcn styling.
- `$nisal-ai-engineering-guardian`: design robust RAG, semantic chunking, prompt curation context, output guardrails, and automated eval harnesses.
- `$nisal-large-prompt-phased-executor`: divide large prompts into neat sequential phases and auto-run them step-by-step.
- `$nisal-feature-review-gatekeeper`: verify completed features/pages against user prompts before moving to new tasks to ensure zero code or visual gaps.
- `$nisal-image-prompt-analyst`: analyze user-submitted images with no text instructions and interview the user to clarify scope.
- `$nisal-pre-impl-clarifier`: analyze codebase & web standards at the start of any new request, find missing prompt requirements, and interview the user with recommendations.
- `$caveman`: compress output text, save tokens/credits, write brief comments or commits when token savings are needed.
- `$codeburn`: analyze session token usage, lifetime token costs, and model metrics.

## Nisal Repo Map

When the current repo is one of Nisal's GitHub repos, use this routing before broad exploration:

- `Project-First`: NJ Store ecommerce monorepo under `ecommerce/`. React/Vite store and admin clients, Express/TypeScript API, shared packages, Playwright/Vitest, Vercel frontends, Railway/server deploy config, Redis/Mongo/Cloudinary/Google auth/email. Start with `$react-best-practices`, `$vercel-cli`, `$deployments-cicd`, `$env-vars`, `$security-scan`, `$verification`, and `$ai-sdk` only when the `ai` package or AI behavior is part of the task.
- `Profile.lk`: multi-tenant SaaS with Next.js web app, Express/TypeScript API, shared package, Docker local workflow, Cloudinary/Resend/PayHere/SMS/DNS/AI envs. Start with `$nextjs`, `$vercel-cli`, `$env-vars`, `$security-scan`, `$openai-platform-api-key` or `$openai-agents-sdk` only for AI features, and `$verification` for app changes.
- `phamacy-`: pharmacy platform with Vite store/admin apps, Express API, Mongo, Cloudinary, Resend, Google auth, web push, Railway backend and Vercel frontends. Start with `$react-best-practices`, `$vercel-cli`, `$deployments-cicd`, `$security-scan`, `$verification`, and the Cloudinary plugin for media-library work.
- `PaSSSna-MERN`: restaurant MERN recreation with Vite customer/admin modes, Express/Mongo/Socket.IO API, Cloudinary, Resend, Stripe-ready payment flow, Docker, Railway backend, Vercel frontend split. Start with `$react-best-practices`, `$vercel-cli`, `$deployments-cicd`, `$security-scan`, `$verification`, and payment/email skills when those integrations are touched.
- `Lost-and-found-System`: currently an empty GitHub repository. If work starts here, bootstrap only after confirming the intended stack.

Repository clones for inventory may live under `github-repos/` in the active Codex workspace. Treat them as working copies, not as the user's production source of truth unless the user explicitly asks to edit or publish from those clones.

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

OpenCode is configured with an OpenRouter credential. Verified model names include `openrouter/anthropic/claude-opus-4.8`, `openrouter/anthropic/claude-opus-4.8-fast`, and `openrouter/~anthropic/claude-opus-latest`. Use `$opus-4-8-mode` to decide whether to call these models or emulate the workflow locally.

If opencode/openclu-style commands are requested, first verify the command exists. If missing, install or repair the launcher through an approved package source, then run `opencode --version`.

## Completion Standard

Do not mark a setup as complete until:

- Required skills exist under the user skills folder or are active plugin skills.
- Required CLIs are discoverable on PATH and version-checked.
- Account-gated tools are either authenticated or listed as explicit login blockers.
- The final report says what was installed, what was verified, and what still requires user login or connector confirmation.


## Strict Guardrails
- **NEVER** use generic platforms (like ChatGPT or Web Search) for facts that are already defined in local custom `nisal-*` skills.
- **NEVER** leave a dev server running if verification is done.
- **NEVER** repeat a failed command blindly without inspecting logs and changing one thing.

