---
name: nisal-deploy-guardian
description: Deployment and release-safety workflow for Nisal's Vercel, Railway, Render, Cloudflare Workers, Docker, GitHub Actions, env vars, domains, production/preview deployments, and "deploy karanna", "production ready", "release fix", or CI/CD tasks.
---

# Nisal Deploy Guardian

## Purpose

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to "deploy karanna", "production ready", or requests a release/fix for CI/CD.
2. The user requests debugging of Vercel, Railway, Render, Cloudflare Workers, or GitHub Actions.
3. You are modifying production environment variables, domains, or infrastructure configs (`vercel.json`, `wrangler.toml`, etc.).

Use this skill to prepare, verify, and troubleshoot deployments without risking production unnecessarily.

## Deploy Readiness

1. Identify platform, project root, build command, output directory, package manager, and environment.
2. Read deploy configs: `vercel.json`, `railway.toml`, `railway.json`, `render.yaml`, `wrangler.toml`, `Dockerfile`, `docker-compose.yml`, GitHub Actions.
3. Check env examples and required secrets.
4. Run local build/typecheck/tests before claiming deployment readiness.
5. Prefer preview/safe validation before production changes.

## Platform Routing

- Vercel frontend or Next.js: use `$vercel-cli`, `$deployments-cicd`, `$env-vars`, `$nextjs`.
- Railway/Render API: verify server start command, port binding, health route, CORS, DB connection, env vars.
- Cloudflare Workers: use `$wrangler`, `$workers-best-practices`, `$cloudflare`.
- GitHub CI: use `$gh-fix-ci`, `$github`.

## Release Safety Rules

- Do not force-push, reset, delete deployments, rotate secrets, or change production settings unless explicitly asked.
- Do not expose env values in chat.
- If authentication is missing, report the exact CLI/login blocker and continue with local checks.
- Record deployment URL, project/team, commit, and verification result when available.

## Verification

Use build output, deployment logs, runtime logs, health endpoints, browser checks, and API smoke tests. A deployment is not "done" only because a deploy command was issued.



## Strict Guardrails
- **NEVER** force-push, reset, or delete deployments unless explicitly asked.
- **NEVER** rotate production secrets or change production core settings without user approval.
- **NEVER** expose environment variable values in the chat output.
- **NEVER** declare a deployment successful without verifying runtime logs or hitting a health endpoint.

