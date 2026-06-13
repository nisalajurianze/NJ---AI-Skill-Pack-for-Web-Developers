---
name: nisal-global-orchestrator
description: Global orchestrator skill for Nisal's workspace. Automatically routes and manages all of Nisal's coding, planning, security, frontend, deploy, and API tasks by selecting, loading, and running the correct set of skills. Use this for general execution where Codex needs to automatically coordinate multi-domain skills.
---

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user provides a multi-domain or complex task (e.g., "build a full stack app").
2. The agent needs to coordinate multiple specific skills.
3. General execution begins for Nisal's workspace tasks.

## Operational Instructions
This skill coordinates the execution of all tasks by dynamically selecting, loading, and executing the appropriate custom skills installed in `C:\Users\nisal\.codex\skills/`.

### 1. Analyze User Request
Identify the primary domains involved (e.g., API, Backend, Frontend/UI, Security, Testing, Deployment, or general refactoring).

### 2. Select Skills
Select the primary skill and companion skills from the installed set:
- **Coordination**: `nisal-work-pack`, `nisal-specialist-router`
- **Planning**: `nisal-auto-planner`, `nisal-roadmap-keeper`, `nisal-large-prompt-phased-executor`, `nisal-pre-impl-clarifier`
- **Speed/Credit-control**: `nisal-fast-work-loop`, `caveman`, `codeburn`
- **API/Backend/Testing**: `api-goal-runner`, `nisal-api-hardener`, `nisal-mock-and-seed`, `nisal-ai-engineering-guardian`
- **Frontend/UI**: `nisal-frontend-polish`
- **Design/UX/Wow**: `nisal-onboarding-design-guardian`, `nisal-checkout-payment-design-guardian`, `nisal-search-filter-design-guardian`, `nisal-account-profile-design-guardian`, `nisal-ui-elements-design-guardian`, `nisal-landing-page-design-guardian`, `nisal-motionsites-design-guardian`, `nisal-webgl-3d-design-guardian`, `nisal-design-engineer-guardian`, `nisal-image-prompt-analyst`
- **Git/Workflow**: `nisal-git-guardian`
- **Tests/CI**: `nisal-test-failure-fixer`, `nisal-feature-review-gatekeeper`
- **Deploy**: `nisal-deploy-guardian`
- **Security/Performance**: `nisal-security-performance-sweep`
- **Plugins/Connectors**: `nisal-plugin-ai-orchestrator`
- **Repo Memory**: `nisal-repo-memory`

### 3. Load & Execute
For each selected skill, read and follow the instructions defined in `C:\Users\nisal\.codex\skills/<skill-name>/SKILL.md`. Implement a concise plan, run the necessary commands, verify the output, and ensure the task is completely finished.

## Strict Guardrails
- **NEVER** ignore the skills matrix. Always route to the specific guardian for the domain being worked on.
- **NEVER** execute tasks blindly without loading the respective skill instructions first.
