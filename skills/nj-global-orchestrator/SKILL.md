---
name: nj-global-orchestrator
description: Global orchestrator skill. Automatically routes and manages all coding, planning, security, frontend, deploy, and API tasks by selecting, loading, and running the correct set of skills. Use this for general execution where the AI needs to automatically coordinate multi-domain skills.
---

# NJ Global Orchestrator

## Purpose
Global orchestrator skill. Automatically routes and manages all coding, planning, security, frontend, deploy, and API tasks by selecting, loading, and running the correct set of skills. Use this for general execution where the AI needs to automatically coordinate multi-domain skills.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user provides a multi-domain or complex task (e.g., "build a full stack app").
2. The agent needs to coordinate multiple specific skills.
3. General execution begins for workspace tasks.

## Operational Instructions
This skill coordinates the execution of all tasks by dynamically selecting, loading, and executing the appropriate custom skills installed in `<your-skills-dir>/`.

### 1. Analyze User Request
Identify the primary domains involved (e.g., API, Backend, Frontend/UI, Security, Testing, Deployment, or general refactoring).

### 2. Select Skills
Select the primary skill and companion skills from the installed set:
- **Coordination**: `nj-work-pack`, `nj-specialist-router`
- **Planning**: `nj-auto-planner`, `nj-roadmap-keeper`, `nj-large-prompt-phased-executor`, `nj-pre-impl-clarifier`
- **Speed/Credit-control**: `nj-fast-work-loop`, `caveman`, `codeburn`
- **API/Backend/Testing**: `api-goal-runner`, `nj-api-hardener`, `nj-mock-and-seed`, `nj-ai-engineering-guardian`
- **Frontend/UI**: `nj-frontend-polish`
- **Design/UX/Wow**: `nj-onboarding-design-guardian`, `nj-checkout-payment-design-guardian`, `nj-search-filter-design-guardian`, `nj-account-profile-design-guardian`, `nj-ui-elements-design-guardian`, `nj-landing-page-design-guardian`, `nj-motionsites-design-guardian`, `nj-webgl-3d-design-guardian`, `nj-design-engineer-guardian`, `nj-image-prompt-analyst`
- **Git/Workflow**: `nj-git-guardian`
- **Tests/CI**: `nj-test-failure-fixer`, `nj-feature-review-gatekeeper`
- **Deploy**: `nj-deploy-guardian`
- **Security/Performance**: `nj-security-performance-sweep`
- **Plugins/Connectors**: `nj-plugin-ai-orchestrator`
- **Repo Memory**: `nj-repo-memory`

### 3. Load & Execute
For each selected skill, read and follow the instructions defined in `<your-skills-dir>/<skill-name>/SKILL.md`. Implement a concise plan, run the necessary commands, verify the output, and ensure the task is completely finished.


## Code Examples

### Master Global Instruction Routing Rule
```markdown
## Global Instruction Wireframe
For every incoming request:
1. Invoke the `nj-repo-memory` skill to load active workspace profiles and details.
2. Initialize planning using `nj-auto-planner` to create `task.md`.
3. Check trigger conditions to delegate specific subtasks to respective guardian skills:
   - For UI design/front-end tasks: route to `nj-frontend-polish`.
   - For DB schema/api/backend tasks: route to `nj-api-hardener`.
```

## Strict Guardrails
- **NEVER** ignore the skills matrix. Always route to the specific guardian for the domain being worked on.
- **NEVER** execute tasks blindly without loading the respective skill instructions first.
