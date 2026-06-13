---
name: nj-specialist-router
description: Specialist-skill routing layer for Nisal's work. Use when the user asks for "special agents", "eka eka dewal walata agentla", "best skill use karanna", "auto skill use karanna", "skills automatically use karanna", "hama dema balala", "auto planning", "plugin use karanna", "AI support ganna", "superb widiyata", broad repo work, or any task that needs choosing multiple skills across planning, code quality, API, frontend, deployment, security, performance, GitHub, Vercel, Cloudflare, Figma, OpenAI, documents, or spreadsheets.
---

# NJ Specialist Router

## Purpose
Specialist-skill routing layer for Nisal's work. Use when the user asks for "special agents", "eka eka dewal walata agentla", "best skill use karanna", "auto skill use karanna", "skills automatically use karanna", "hama dema balala", "auto planning", "plugin use karanna", "AI support ganna", "superb widiyata", broad repo work, or any task that needs choosing multiple skills across planning, code quality, API, frontend, deployment, security, performance, GitHub, Vercel, Cloudflare, Figma, OpenAI, documents, or spreadsheets.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to "use the best skills", "use special agents", or "hama dema balala karanna".
2. The agent needs to choose a specific subset of skills to handle a large or multi-domain task without calling everything at once.

## Operational Instructions
Use this skill to choose the smallest useful set of specialist skills and tools for a task. Route work quickly, avoid duplicated effort, and keep the user moving toward verified output.

### Routing Protocol

1. **Identify the task type** before editing.
2. **Pick one primary specialist skill** and at most three companion skills unless the task is a large roadmap.
3. **Auto-run on Large Prompts**: Immediately and automatically load and execute `nisal-large-prompt-phased-executor` as the primary coordinator as soon as a large, complex, or multi-step prompt is given.
4. **Auto-run Feature Review Gate**: Automatically trigger and run `nisal-feature-review-gatekeeper` whenever a page, feature, or task is marked as finished, before moving to any other task, to ensure 100% prompt matching, no bugs/gaps, and clean UI/backend code.
5. **Auto-run Image Analyst**: Automatically trigger and execute `nisal-image-prompt-analyst` whenever the user uploads an image with no instructions.
6. **Auto-run Pre-Implementation Clarifier**: Automatically execute `nisal-pre-impl-clarifier` immediately at the start of any new build or refactor request.

### Skill Matrix Selection
- **API/backend goal**: `$api-goal-runner`, `$nisal-api-hardener`, `$nisal-ai-engineering-guardian`, `$nisal-test-failure-fixer`.
- **Auto skill selection**: `$nisal-auto-skill-runner`, `$nisal-specialist-router`, `$nisal-work-pack`.
- **Auto planning/roadmap**: `$nisal-auto-planner`, `$nisal-roadmap-keeper`, `$run-to-completion`, `$nisal-large-prompt-phased-executor`, `$nisal-pre-impl-clarifier`.
- **Code quality/refactor**: `$nisal-code-quality-guardian`, `$react-best-practices`, `$nextjs`, `$workers-best-practices`.
- **Frontend/UI polish**: `$nisal-frontend-polish`, `$verification`, `$agent-browser-verify`, `$shadcn`.
- **Tests/build failures**: `$nisal-test-failure-fixer`, `$gh-fix-ci`, `$verification`, `$nisal-feature-review-gatekeeper`.
- **Product/design**: `$figma-use`, `$figma-generate-design`, `$nisal-motionsites-design-guardian`, `$nisal-webgl-3d-design-guardian`, `$nisal-design-engineer-guardian`, `$nisal-image-prompt-analyst`.


## Code Examples

### Match Mapping Function
```javascript
const SPECIALISTS = [
  { name: 'nj-api-hardener', match: /api|endpoint|route|express|controller|zod/i },
  { name: 'nj-frontend-polish', match: /css|tailwind|style|responsive|ui|animation/i },
  { name: 'nj-database-schema-guardian', match: /schema|table|prisma|drizzle|migration/i }
];

function routeSkill(prompt) {
  return SPECIALISTS.filter(s => s.match.test(prompt)).map(s => s.name);
}
```

## Strict Guardrails
- **NEVER** call every possible skill. Choose only the ones that change the outcome.
- **NEVER** invent a new workflow if a specialist skill or local project script already exists for the task.
- **NEVER** override a specialist skill's instruction; if a specialist skill gives stricter instructions than this router, follow the specialist skill for that domain.
