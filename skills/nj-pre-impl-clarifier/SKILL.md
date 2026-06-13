---
name: nj-pre-impl-clarifier
description: Pre-implementation requirement clarifier and interviewer. Runs at the start of any new feature/page request, analyzing context, looking up web standards, identifying missing requirements, and interviewing the user before execution.
---

# NJ Pre Impl Clarifier

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user requests a brand new feature, page, API, or project without providing extremely detailed technical specifications.
2. The user asks to "build X" and leaves implementation details ambiguous.

## Operational Instructions
Prevents incomplete, insecure, or substandard implementations by analyzing project scope, referencing web standards, highlighting missing details or gaps in the user's prompt, and interviewing the user for clarification before planning or coding starts.

### 1. Codebase & Context Inventory
- Inspect the codebase structure, technologies, frameworks, and existing files.
- Refer to active quality playbooks (e.g., `WEB_PROJECT_QUALITY_PLAYBOOK.md`).

### 2. Web Standards & Best Practice Search
- Run a targeted web search using the `search_web` tool for best practices, architectural patterns, and standard features for the requested item.

### 3. Gap & Unmentioned Requirements Identification
Analyze the user's prompt to find what was *not* mentioned but is required for production-grade delivery:
- **Security Gaps**: Input validation, rate limits, CORS configurations, password policies.
- **Backend/Data Gaps**: Database indexing, transaction rollbacks, audit logs, caching.
- **Frontend/UX Gaps**: Loading animations, skeleton loaders, empty states, error notifications, tooltips, responsive wrapping.

### 4. Interactive Interview & Recommendations
Present your analysis and ask the user for clarification. Do NOT start coding until you receive responses:
- **Codebase Findings**: Briefly state relevant existing patterns in the codebase.
- **Missing Requirements**: Bullet-list critical gaps you found that were not in the prompt.
- **Recommendations**: Propose suggestions/recommendations based on web standards.
- **Targeted Questions**: Ask specific multiple-choice or short questions (e.g., "Should we implement rate limits on this login endpoint?").

## Strict Guardrails
- **NEVER** bypass this pre-flight check for new feature builds. It must run automatically.
- **NEVER** begin writing code or the final plan until the user responds to the interview questions. Stop and wait for their answers.
