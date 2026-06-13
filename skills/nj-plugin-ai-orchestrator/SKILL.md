---
name: nj-plugin-ai-orchestrator
description: Plugin, connector, tool, and external-AI orchestration for Nisal's work. Use when the user asks to use plugins, "plugin use karanna", "AI support ganna", "Opus 4.8", Claude Code, OpenCode, other AI models, special agents, app connectors, GitHub/Vercel/Cloudflare/Figma/Cloudinary/Browser/OpenAI tools, or when a task would benefit from authenticated external tools or a second model pass.
---

# NJ Plugin AI Orchestrator

## Purpose

Plugin, connector, tool, and external-AI orchestration for Nisal's work. Use when the user asks to use plugins, "plugin use karanna", "AI support ganna", "Opus 4.8", Claude Code, OpenCode, other AI models, special agents, app connectors, GitHub/Vercel/Cloudflare/Figma/Cloudinary/Browser/OpenAI tools, or when a task would benefit from authenticated external tools or a second model pass.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user explicitly requests "plugin use karanna", "AI support ganna", or mentions external models (Opus 4.8, Claude Code, OpenCode).
2. The user requests a task requiring external platforms (GitHub, Vercel, Cloudflare, Figma, Cloudinary, Browser Automation).
3. You encounter a deeply complex architectural or debugging problem that could benefit from a second reasoning pass.

Use this skill to decide when to invoke plugins/connectors and when to ask another AI model for support. The goal is better results with fewer wasted calls: use tools for facts/actions, use external AI for hard thinking, and keep local Codex in control of final implementation and verification.

## First Decision

1. Identify whether the task needs an external system, a local repo action, a browser/app check, or a second-model reasoning pass.
2. Use local files, installed skills, and deterministic commands first for stable repo facts.
3. Use plugin/app tools when they directly access data or perform actions that local commands cannot.
4. Use external AI only when the task is hard enough or the user explicitly requests it.
5. Use `$nisal-auto-planner` when plugin/model use is part of a multi-step implementation.
6. Record what was used and why in the final answer when it changes the outcome.

## Plugin Routing

- Browser / Chrome: use for localhost, screenshots, visual verification, authenticated browser state, and interactive UI checks.
- GitHub: use for PRs, issues, Actions/CI, comments, repo metadata, publishing, and review feedback.
- Vercel: use for deployments, build logs, runtime logs, projects, env/deploy investigation, protected preview URLs, and Vercel docs.
- Cloudflare: use for Workers, Wrangler, Durable Objects, DNS/platform tasks, performance, and Cloudflare deployments.
- Cloudinary: use for media library, uploads, transformations, image/video asset metadata, and delivery URLs.
- Figma: use for Figma designs, diagrams, design systems, slides, Code Connect, and design implementation context.
- OpenAI Developers: use for OpenAI API, Agents SDK, ChatGPT Apps, API key setup, troubleshooting, and official OpenAI docs.
- Codex Security: use for security scan, threat model, finding discovery, fix validation, and attack path work.
- Documents / Presentations / Spreadsheets: use for `.docx`, decks, slides, workbooks, exports, and polished artifacts.
- Google Calendar: use only for scheduling/availability/calendar work.
- Canva / Creative Production: use for brand, campaign, social, creative, logo, moodboard, and ad exploration.

## Tool Discovery Rules

- If a plugin/tool is not already callable but the user explicitly asked for it, use `tool_search` first when available.
- If `tool_search` does not expose the requested plugin/tool, use install-candidate discovery only for the exact plugin the user requested.
- Do not install adjacent or merely nice-to-have tools.
- If a connector requires login or user confirmation, name the blocker and continue with local/non-authenticated work where useful.

## External AI Routing

Use `$opus-4-8-mode` for high-quality reasoning. Example OpenRouter model name patterns:

```text
openrouter/<provider>/<model-name>
openrouter/<provider>/<model-name-fast>
openrouter/~<provider>/<model-latest>
```

Use external AI for:

- architecture, migration, or large roadmap second opinions
- hard debugging after local evidence is gathered
- security review or threat modeling with meaningful risk
- complex product/design direction where multiple strategies help
- user explicitly asks for Opus/Claude/OpenCode/other AI support

Do not use external AI for:

- simple edits, formatting, file listing, package installs, or obvious fixes
- facts that can be read from local files or official plugin docs
- repeated broad prompts after one focused second opinion is enough

## Second-Model Prompt Standard

When calling another AI, pass only useful evidence:

- repo path and project type
- exact goal and acceptance criteria
- relevant files or concise summaries
- failing command output or runtime logs
- what has already been tried
- constraints, risks, and what kind of answer is needed

Ask for a focused deliverable such as "diagnose likely root cause", "compare two approaches", "find security risks", or "review this patch". Do not outsource final responsibility: Codex must inspect, choose, implement, and verify.

## Cost And Safety

- Prefer `openrouter/anthropic/claude-opus-4.8-fast` for quick second opinions.
- Use full `openrouter/anthropic/claude-opus-4.8` only for high-value or high-risk work.
- Never send secrets, tokens, private env values, or unnecessary personal data to external AI.
- Do not let external AI perform production actions directly.
- If a tool/action can spend money, publish content, change production, delete data, or expose credentials, require explicit user direction and follow platform policy.

## Final Reporting

If this skill was used, include:

- plugins/connectors/tools used
- external AI model used, if any
- what the external tool/model changed in the plan
- verification completed locally
- blockers that require login, connector confirmation, or user decision


## Strict Guardrails
- **NEVER** use external AI for simple edits, formatting, or facts that can be read from local files.
- **NEVER** send secrets, tokens, private env values, or unnecessary personal data to external AI.
- **NEVER** let external AI perform production actions directly without local verification.
- **NEVER** install adjacent or "nice-to-have" tools unless the user explicitly requested them.

