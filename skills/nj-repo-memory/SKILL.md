---
name: nj-repo-memory
description: Project memory and repo routing template. Use when the current work relates to known repositories or previous contexts, or when the user asks to use previous small details from known projects.
---

# Project Repo Memory

## Purpose
To maintain context and provide specific instructions for known repositories within the user's workspace, acting as a shortcut before broad exploration.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to remember previous work for a specific project.
2. The user references past small details.
3. You are working in specific known repositories listed below.

Use this skill to apply known project context before broad exploration. It is a memory router, not a substitute for reading the current code.

## Known Repos (Template - Fill with your projects)

- `<Project-1>`: Brief description of the project stack and architecture. (e.g. Next.js web app, Express API, shared package, Docker workflow, AI envs)
- `<Project-2>`: Brief description of the project stack and architecture. (e.g. Vite React store, Express TypeScript API, Mongo/Redis/Cloudinary)
- `<Project-3>`: Brief description of the project stack and architecture.

## Memory Protocol

1. Match the current repo by folder name, remote URL, package names, docs, or deployment config.
2. Read current files anyway; treat memory as a shortcut for where to inspect first.
3. Prefer existing docs such as `AGENTS.md`, `CLAUDE.md`, `README.md`, `DEPLOYMENT.md`, `TEST_PLAN.md`, security/performance docs, and source-of-truth packs.
4. Use the repo's own package scripts and test conventions.
5. If working from a cloned inventory, confirm whether it is the intended working copy before publishing or making production changes.

## Project Routing (Template - Fill with your projects)

- `<Project-1>`: start with `$nextjs`, `$nj-api-hardener`, `$vercel-cli`, `$env-vars`, `$security-scan`.
- `<Project-2>`: start with `$react-best-practices`, `$nj-api-hardener`, `$nj-security-performance-sweep`, `$deployments-cicd`, `$verification`.
- `<Project-3>`: start with `$react-best-practices`, `$nj-api-hardener`, `$deployments-cicd`, `$payment`/`$email` skills when those integrations are touched.

## Important Habit

When a previous audit mentions a bug or roadmap item, verify the current code state before assuming it is still present.

## Strict Guardrails
- **NEVER** assume a past architecture diagram or memory is 100% accurate without checking the live code.
- **NEVER** ignore the repo's specific package scripts or test conventions. Use what is in `package.json`.
- **NEVER** run production deployment commands if you discover you are working in an inventory clone instead of the main active workspace.
