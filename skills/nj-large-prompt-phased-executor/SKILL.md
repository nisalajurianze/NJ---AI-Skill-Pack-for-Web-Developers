---
name: nj-large-prompt-phased-executor
description: Phased execution orchestrator for large, complex prompts. Divides tasks into neat logical phases, executing and verifying them one-by-one according to a structured task checklist.
---

# NJ Large Prompt Phased Executor

## Purpose
Phased execution orchestrator for large, complex prompts. Divides tasks into neat logical phases, executing and verifying them one-by-one according to a structured task checklist.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user provides a large, multi-faceted prompt or requirements document.
2. The task requires building a full application, full page, or complex backend system from scratch.

## Operational Instructions
Enforces systematic decomposition of complex or large requests into manageable execution phases. This prevents context bloat, missed requirements, code regression, and placeholder implementations.

### Phase Breakdown Protocol

1. **Phase 1: Analysis & Architecture (Scoping)**
   - Analyze requirements, schemas, designs, and external playbooks.
   - Outline file changes, database structure, and API contracts.
   - Create/update `task.md` with concrete phased checklist items.
2. **Phase 2: Database & Core API (Backend Foundation)**
   - Create schemas, models, seeding scripts, and data mocks.
   - Implement backend services, controllers, handlers, and security logic.
   - Verify APIs via unit tests, curl commands, or smoke tests.
3. **Phase 3: Component Library & Layout (Frontend Foundation)**
   - Setup styling foundations (`index.css`), CSS animations, and layout wrappers.
   - Build custom modular UI components (shadcn-style, Radix primitives).
   - Ensure responsive design, CLS aspect-ratios, and tap targets.
4. **Phase 4: Integration & Dynamic Logic (Frontend-Backend Bindings)**
   - Bind APIs with components using state, SWR, or framework loaders.
   - Implement interactive states, micro-animations, loading indicators, and form validations.
5. **Phase 5: Quality Sweep & End-to-End Verification**
   - Run linter, compiler/typecheck, test suites, and browser-verify.
   - Verify visual styling, mobile responsiveness, and dark modes.


## Code Examples

### Phased Project Roadmap
```markdown
# Scaffolding and Implementing Multi-tenant Dashboard

- Phase 1: Database Model & Setup [DONE]
  - Create workspace tables and setup relations
- Phase 2: Core API Endpoints [DONE]
  - Implement workspace invitation logic and validation
- Phase 3: Frontend Shell [IN PROGRESS]
  - Build navigation drawer, tab routing, and lists
- Phase 4: Integrations & Payments [TODO]
- Phase 5: Verification & Production Release [TODO]
```

## Strict Guardrails
- **NEVER** begin writing frontend components (Phase 3) until API foundations (Phase 2) are completed and validated.
- **NEVER** work on multiple phases simultaneously. Mark exactly one active item in progress (`[/]`) inside `task.md`.
- **NEVER** write functions with `// TODO: implement later` or UI elements with `Lorem Ipsum` filler.
- **NEVER** proceed to the next phase if a test or build fails during the current phase. Stop and resolve it completely first.
