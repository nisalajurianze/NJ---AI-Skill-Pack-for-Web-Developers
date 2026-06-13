---
name: nj-code-quality-guardian
description: Code quality improvement workflow for Nisal's repositories. Use when the user asks to improve code quality, "code quality eka wadi karanna", clean architecture, refactor, remove bugs, make code superb, professionalize a repo, reduce technical debt, improve maintainability, or review/repair frontend, backend, shared packages, tests, and configs.
---

# Nisal Code Quality Guardian

## Purpose

Code quality improvement workflow for Nisal's repositories. Use when the user asks to improve code quality, "code quality eka wadi karanna", clean architecture, refactor, remove bugs, make code superb, professionalize a repo, reduce technical debt, improve maintainability, or review/repair frontend, backend, shared packages, tests, and configs.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to "improve code quality", "make code superb", "refactor", or "clean architecture".
2. You notice duplicated business rules, missing validation (Zod schemas), or brittle API contracts during normal execution.
3. The user complains about visual stutter, CLS (Cumulative Layout Shift), or unoptimized images (WebP/AVIF).

Use this skill to raise code quality without drifting into unrelated rewrites. Improve correctness, readability, maintainability, testability, and verification depth.

---

## Playbook Enforcement

You must strictly enforce and follow the guidelines and checklists from standard Web Project Quality best practices:

### 1. Frontend & Form Quality
- **Validation**: All inputs must have client & server-side validation using Zod schemas and React Hook Form. Show clear field-level errors and submit loading states.
- **Image Performance**: Images must use WebP/AVIF formats, have explicit aspect ratio container dimensions to prevent Cumulative Layout Shift (CLS), and be lazy-loaded unless above-the-fold.
- **Visual Smoothness**: Keep touch/hover transitions GPU-accelerated (using `transform` and `opacity` properties only). Avoid animating layout properties (`width`, `height`, `margin`).

### 2. API & Backend Contracts
- **Response Structure**: Return uniform envelopes: `{ data: {...}, meta: { page, limit, total } }` for paginated reads, and standardized error formats.
- **Database Reads**: Use query indexing, pagination, and projections (`.select()` and `.lean()` in Mongoose) to avoid over-fetching.
- **Security Check**: Enforce auth, CORS configurations, rate-limiting on sensitive routes (auth, OTP, uploads, checkouts), and strict role validation. Never commit secrets.

### 3. SEO & Accessibility
- **Metadata**: Each public page requires a unique title, meta description, and canonical URL.
- **Semantic HTML**: Use proper semantic HTML, accessible form labels, keyboard navigation focus indicators, and focus traps for modals.

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

