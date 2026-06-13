---
name: nj-git-guardian
description: Git branching, commit styling (Conventional Commits), and automatic PR summary/template generation standards for Nisal's repositories. Use when staging changes, making git commits, creating branches, or writing PR descriptions.
---

# NJ Git Guardian

## Purpose
This skill establishes Git workflows, structured commit styles, and standards for creating clear Pull Requests to maintain repository history and facilitate easy code reviews.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. You are making `git commit` commands.
2. You are creating a new branch.
3. You are generating a Pull Request description or summary.

## 1. Branch Naming Standard

Always use clear, lowercase, hyphen-separated branch names prefixed by task type:
- **Features**: `feat/<short-feature-name>` (e.g., `feat/payhere-integration`)
- **Bug Fixes**: `fix/<bug-description>` (e.g., `fix/auth-token-refresh`)
- **Refactoring**: `refactor/<area-name>` (e.g., `refactor/express-routing`)
- **Documentation**: `docs/<topic-name>` (e.g., `docs/docker-local-guide`)

---

## 2. Commit Message Standard (Conventional Commits)

Format all commit messages as:
```text
<type>(<scope>): <short description>
```
Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation updates
- `style`: Changes that do not affect code execution (white-space, formatting, missing semi-colons, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Updates to build scripts or auxiliary packages (e.g. updating npm packages)

Example:
```text
feat(api): add payhere verification signature helper
fix(auth): clear refresh token cookie on logout
```

---

## 3. Pull Request Generation Template

When preparing a Pull Request description, auto-generate a summary matching this structure:

```markdown
## Summary
A brief description of what changes this PR introduces.

## Key Changes
- **Component / Path**: Explanation of changes.

## Verification
- Detail the tests run (e.g., `npm run test`, manually verified endpoints, screenshots attached).
```


## Strict Guardrails
- **NEVER** push unformatted commit messages (e.g., `git commit -m "fixed stuff"`).
- **NEVER** push to `main` or `master` directly if branch protections or standard PR flows are in place. Use a branch.
- **NEVER** leave the "Verification" section empty in a PR description.

