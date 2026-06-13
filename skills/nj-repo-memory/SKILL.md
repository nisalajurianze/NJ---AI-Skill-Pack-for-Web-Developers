---
name: nisal-repo-memory
description: Nisal project memory and repo routing. Use when the current work relates to NJanugaming repos, previous Codex work, Project-First, Profile.lk, phamacy-, PaSSSna-MERN, Lost-and-found-System, Vercel/Railway deployments, Cloudinary/Resend/PayHere/SMS integrations, or when the user asks to use "mechchara kalayak karapu hama dema" or previous small details.
---

# Nisal Repo Memory

## Purpose

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to remember previous work ("mechchara kalayak karapu hama dema").
2. The user references past small details ("kalin hadapu podi podi ewa").
3. You are working in specific known repositories: `Project-First`, `Profile.lk`, `phamacy-`, `PaSSSna-MERN`, or `Lost-and-found-System`.

Use this skill to apply known project context before broad exploration. It is a memory router, not a substitute for reading the current code.

## Known Repos

- `Project-First`: NJ Store ecommerce monorepo under `ecommerce/`. Vite React store/admin, Express TypeScript API, shared packages, Playwright/Vitest, Vercel frontends, Railway/server config, Mongo/Redis/Cloudinary/Google auth/email.
- `Profile.lk`: multi-tenant SaaS. Next.js web app, Express TypeScript API, shared package, Docker workflow, Cloudinary, Resend, PayHere, SMS, DNS, AI envs.
- `phamacy-`: pharmacy platform. Vite store/admin, Express API, Mongo, Cloudinary, Resend, Google auth, web push, Railway backend, Vercel frontends.
- `PaSSSna-MERN`: restaurant MERN recreation. Vite customer/admin modes, Express/Mongo/Socket.IO, Cloudinary, Resend, Stripe-ready flow, Docker, Railway backend, Vercel frontend split.
- `Lost-and-found-System`: previously observed as empty; confirm stack before bootstrapping.

## Memory Protocol

1. Match the current repo by folder name, remote URL, package names, docs, or deployment config.
2. Read current files anyway; treat memory as a shortcut for where to inspect first.
3. Prefer existing docs such as `AGENTS.md`, `CLAUDE.md`, `README.md`, `DEPLOYMENT.md`, `TEST_PLAN.md`, security/performance docs, and source-of-truth packs.
4. Use the repo's own package scripts and test conventions.
5. If working from a cloned inventory under `github-repos/`, confirm whether it is the intended working copy before publishing or making production changes.

## Project Routing

- `Project-First`: start with `$react-best-practices`, `$nisal-api-hardener`, `$vercel-cli`, `$deployments-cicd`, `$env-vars`, `$security-scan`, `$verification`.
- `Profile.lk`: start with `$nextjs`, `$nisal-api-hardener`, `$vercel-cli`, `$env-vars`, `$security-scan`, `$openai-docs` or `$ai-sdk` only for AI features.
- `phamacy-`: start with `$react-best-practices`, `$nisal-api-hardener`, `$nisal-security-performance-sweep`, `$deployments-cicd`, `$verification`, Cloudinary tools for media work.
- `PaSSSna-MERN`: start with `$react-best-practices`, `$nisal-api-hardener`, `$deployments-cicd`, `$payment`/`$email` skills when those integrations are touched.

## Important Habit

When a previous audit mentions a bug or roadmap item, verify the current code state before assuming it is still present.



## Strict Guardrails
- **NEVER** assume a past architecture diagram or memory is 100% accurate without checking the live code.
- **NEVER** ignore the repo's specific package scripts or test conventions. Use what is in `package.json`.
- **NEVER** run production deployment commands if you discover you are working in an inventory clone (e.g., under `github-repos/`) instead of the main active workspace.

