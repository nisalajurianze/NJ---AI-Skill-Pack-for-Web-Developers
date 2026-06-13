---
name: nj-test-failure-fixer
description: Focused debugging workflow for failing tests, builds, linters, CI, typechecks, Playwright/Vitest/Jest errors, API smoke failures, Vercel build failures, Railway/Docker issues, and "test fail wenawa fix karanna" requests in Nisal's projects.
---

# Nisal Test Failure Fixer

## Purpose

Focused debugging workflow for failing tests, builds, linters, CI, typechecks, Playwright/Vitest/Jest errors, API smoke failures, Vercel build failures, Railway/Docker issues, and "test fail wenawa fix karanna" requests in Nisal's projects.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to fix failing tests ("test fail wenawa fix karanna").
2. A build, linter, CI pipeline, or typecheck fails during execution.
3. You encounter an error trace from Jest, Vitest, Playwright, Vercel, Railway, or Docker.

Use this skill to turn failures into evidence-driven fixes. The priority is to read the real failure, fix root cause, and rerun the smallest useful check.

## Failure Loop

1. Capture the exact failing command and output.
2. Identify whether the failure is test logic, app behavior, environment, dependency, flake, or config.
3. Open only the files named by the failure plus nearby code.
4. Make one focused change.
5. Rerun the same failing check.
6. After it passes, widen to related tests/build/typecheck.

## Rules

- Never rewrite tests just to make them pass unless the test expectation is clearly stale or wrong.
- Do not skip failing tests silently.
- Do not retry the same command without a change or new evidence.
- Prefer targeted tests over full suites until the immediate failure is fixed.
- If env vars or external services are missing, verify local logic and report the exact missing dependency.

## Common Fix Targets

- React/Vite: stale mocks, route setup, async UI waits, hydration assumptions, text selectors.
- Next.js: server/client boundary, env access, dynamic route params, metadata/sitemap behavior.
- Express/API: schema mismatch, auth setup, supertest app import, database seed state, async error handling.
- Playwright: wrong base URL, timing, hidden elements, test data cleanup, mobile viewport issues.
- Vercel/Railway/Docker: missing env, build command, output directory, workspace root, lockfile mismatch.

## Final Standard

A failure is fixed only when the failing command passes or the remaining blocker is external and clearly named.



## Code Examples

### Isolating Flaky Tests
```typescript
// Instead of hitting a real database in a unit test:
vi.mock('../src/db');
import { getUser } from '../src/db';

test('fetches user correctly', async () => {
  vi.mocked(getUser).mockResolvedValue({ id: 1, name: 'Alice' });
  const res = await processUser(1);
  expect(res.success).toBe(true);
});
```

## Strict Guardrails
- **NEVER** rewrite tests just to make them pass, unless the test expectation is provably stale or incorrect.
- **NEVER** skip failing tests silently or comment them out without user approval.
- **NEVER** retry the exact same failing command without making a change or gaining new evidence.
- **NEVER** declare a failure fixed without running the passing command. If external services are missing, verify local logic and report the exact blocker.

