---
name: nj-code-quality-guardian
description: Code quality improvement workflow for the developer's repositories. Use when the user asks to improve code quality, "code quality eka wadi karanna", clean architecture, refactor, remove bugs, make code superb, professionalize a repo, reduce technical debt, improve maintainability, or review/repair frontend, backend, shared packages, tests, and configs.
---

# NJ Code Quality Guardian

## Purpose

Code quality improvement workflow for the developer's repositories. Use when the user asks to improve code quality, "code quality eka wadi karanna", clean architecture, refactor, remove bugs, make code superb, professionalize a repo, reduce technical debt, improve maintainability, or review/repair frontend, backend, shared packages, tests, and configs.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to "improve code quality", "make code superb", "refactor", or "clean architecture".
2. You notice duplicated business rules, missing validation (Zod schemas), or brittle API contracts during normal execution.
3. The user complains about visual stutter, CLS (Cumulative Layout Shift), or unoptimized images (WebP/AVIF).

Use this skill to raise code quality without drifting into unrelated rewrites. Improve correctness, readability, maintainability, testability, and verification depth.

---

## Playbook Enforcement

Focus strictly on code architecture, refactoring, and code hygiene. For detailed domain logic implementation, delegate to companion skills:
- For secure API contracts, Zod schemas, database optimization, and endpoint security, defer to the specialized `$nj-api-hardener` skill.
- For UI polish, mobile layouts, loading states, and visual polish, defer to the specialized `$nj-frontend-polish` skill.

### 1. Refactoring & Modular Design
- **Single Responsibility**: Extract logical segments from monolithic files (keep components under 250 lines).
- **Abstractions**: Follow established local patterns. Do not write premature abstractions or introduce external libraries unless explicitly requested.
- **DRY & SOLID**: Identify copy-paste logic and consolidate helper utilities cleanly into `/utils` or `/lib`.

### 2. Typing & Lint Hygiene
- **TypeScript**: Ensure strict typing. Avoid using `any` type casts unless absolutely required by third-party library boundaries.
- **Linter Warnings**: Resolve all ESLint warnings and errors. Never suppress errors with inline ignores unless there is a well-documented runtime blocker.
- **Imports**: Organize import structures (group node modules, shared packages, internal relative paths, and style sheets logically).

---

## Quality Pass Workflow

1. Inventory the repo structure, package scripts, tests, framework, and existing style.
2. Find high-leverage issues first: failing tests, unsafe logic, duplicated business rules, weak validation, brittle API contracts, poor state flow, and deployment blockers.
3. Keep edits scoped to the goal and surrounding ownership boundary.
4. Prefer local conventions over new abstractions.
5. Add or update tests when behavior changes, shared logic changes, or a previous bug can recur.
6. Verify with the strongest practical command set before finalizing.

---

## Verification Ladder

Use the first applicable commands, then move down only if blocked:
1. Targeted unit/integration tests for touched code.
2. Typecheck and lint.
3. Build.
4. API smoke test or browser verification.
5. Manual inspection with exact remaining risk when credentials or services block runtime checks.


## Code Examples

### Clean Component Extraction
Instead of a massive 500-line file, extract logical blocks:
```tsx
// BAD: Everything in one file
export default function Dashboard() { /* 500 lines */ }

// GOOD: Modularized
import { DashboardMetrics } from './DashboardMetrics';
import { DashboardChart } from './DashboardChart';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardMetrics />
      <DashboardChart />
    </div>
  );
}
```

## Strict Guardrails
- **NEVER** introduce new generic abstractions if local conventions already exist.
- **NEVER** leave a form without Zod/client-side validation.
- **NEVER** animate layout properties (`width`, `height`, `margin`); only use `transform` and `opacity`.
- **NEVER** commit hardcoded secrets or remove CORS/auth layers during refactors.

