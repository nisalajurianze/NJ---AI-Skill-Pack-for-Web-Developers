---
name: nj-feature-review-gatekeeper
description: Feature review gatekeeper. Enforces rigorous post-implementation reviews of individual pages, features, or tasks before proceeding to the next work item to ensure zero UI/backend gaps and 100% prompt compliance.
---

# NJ Feature Review Gatekeeper

## Purpose
Feature review gatekeeper. Enforces rigorous post-implementation reviews of individual pages, features, or tasks before proceeding to the next work item to ensure zero UI/backend gaps and 100% prompt compliance.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. A feature, page, or task has just been marked as completed in the plan/task tracker.
2. The agent is about to transition to a new task but hasn't verified the current one.
3. The user asks to "check if everything is done" or "verify the feature".

## Operational Instructions
Enforces a quality check point after completing any single feature, page, or task. Before transitioning to the next task, the agent must inspect the completed work.

### 1. Functional Compliance (100% Match)
- **Review Prompt Requirements**: Re-read the original user request and prompt specifications.
- **Trace Deliverables**: Ensure every requested detail (e.g., input fields, buttons, API endpoints, logic branches) is implemented.
- **Zero Placeholders**: Double-check that no placeholders, stubbed methods, mock responses, or hardcoded constants remain in the code.

### 2. Backend & Integration Gaps
- **Validation**: Verify both client-side and server-side inputs have comprehensive validation (regex, length limits, type validation).
- **Error Handling**: Ensure every async call, database query, and API fetch is enclosed in robust try/catch blocks with clean user-facing error messages.
- **Loading & Empty States**: Verify that loading spinners, skeletons, and empty-state placeholders (e.g., "No records found") are implemented for slow network responses.
- **Security Audit**: Ensure correct authentication, CORS configuration, rate limiting, and secure cookies are applied.

### 3. Frontend & Visual Sweep
- **Aesthetic Excellence**: Confirm the UI uses high-quality CSS styling (vibrant color palettes, smooth hover states, gradients, custom typography) rather than raw browser defaults.
- **Layout Constraints**: Check that all images and media have explicit aspect-ratio containers to prevent Cumulative Layout Shift (CLS).
- **Mobile responsiveness**: Ensure tap targets are at least 48x48px and layouts scale correctly on mobile screens.

### 4. Direct Verification Gate
- **Execution Run**: Run automated tests, compile scripts, or start the dev server and use automated browser checks to confirm the feature works.
- **Error Logs**: Inspect console logs and terminal errors for any hidden warnings, runtime exceptions, or linter complaints.


## Code Examples

### Post-Implementation Verification Checklist
```markdown
## Feature Review Checklist

1. [ ] Prompt Compliance: Verify every single line in USER_REQUEST was addressed.
2. [ ] Quality Check: Scan for console.logs, trailing debug scripts, and placeholders.
3. [ ] Mobile Responsive: Check layout scaling down to 320px width using dev tools.
4. [ ] Accessibility: Ensure all icons have alt tags/aria-hidden and inputs have labels.
5. [ ] Code Hygiene: Verify code builds cleanly and passes TypeScript typecheck.
```

## Strict Guardrails
- **NEVER** change a checklist item in `task.md` to the next task if the current task's gate review fails.
- **NEVER** ignore a bug. If any gap or bug is found during the review, immediately log it, write a patch to fix it, and re-run this gate check.
- **NEVER** finish without documenting the gate pass in the final response or walkthrough.
