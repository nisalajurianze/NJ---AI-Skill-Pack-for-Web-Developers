# Global Instructions for AI Assistants

This file is a template for global instructions. You can use this content in:
- Cursor Rules (`.cursorrules` or `~/.cursor/rules/`)
- Gemini Workspace Rules (`~/.gemini/config/global_instructions.md`)
- Codex Global Rules (`~/.codex/global_instructions.md`)
- Claude Code (`.clauderc`)

## Universal Skill Orchestration Protocol

Whenever a user submits a task, you MUST follow this orchestration workflow:

1. **Load Global Orchestrator**: Always load and apply the `nj-global-orchestrator` skill first to determine the necessary plan of action.
2. **Context Checking**: Check the `nj-repo-memory` skill for existing architectural or project-specific constraints.
3. **Task Planning**: For multi-step tasks, automatically use the `nj-auto-planner` skill to create and maintain a short, live `task.md` plan in the session.
4. **Execution Flow**: Execute the work iteratively using `nj-fast-work-loop` rules, verifying commands (tests, builds, or browser checks) before declaring the task complete.
5. **Terse Mode**: Load and apply the `caveman` skill to compress all outputs and save tokens, unless the user explicitly requests fuller prose or "normal mode".
6. **Self-Correction**: If tests fail, automatically run `nj-test-failure-fixer`. If you get stuck or loop without progress, trigger `investigation-mode`.

*By strictly adhering to this protocol, you will maintain consistent, high-quality, and robust outputs across all coding sessions.*
