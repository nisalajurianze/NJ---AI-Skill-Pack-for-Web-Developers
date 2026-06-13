---
name: nj-api-hardener
description: Backend/API hardening workflow for the developer's Node, Express, Next.js API, server, webhook, auth, database, upload, payment, email, Cloudinary, Resend, PayHere, SMS, Redis, Mongo, and integration tasks. Use when improving API reliability, security, validation, performance, tests, or "backend eka superb karanna".
---

# NJ API Hardener

## Purpose

Backend/API hardening workflow for the developer's Node, Express, Next.js API, server, webhook, auth, database, upload, payment, email, Cloudinary, Resend, PayHere, SMS, Redis, Mongo, and integration tasks. Use when improving API reliability, security, validation, performance, tests, or "backend eka superb karanna".

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to "improve API", "backend eka superb karanna", or harden the server.
2. You are modifying critical endpoints like: auth, checkouts, stock management, uploads, or webhooks.
3. The user mentions integrating third-party services (PayHere, Cloudinary, Resend, SMS, Stripe).

Use this skill to make backend/API work production-ready: safe inputs, correct data flow, reliable errors, tested behavior, and deployable configuration.

Use `$api-goal-runner` as a companion when the user frames the API work as a goal to continue until done.

## Hardening Checklist

- Validate all request inputs with an explicit schema or centralized validator (prefer Zod with strict schema matching and error formatting).
- Enforce auth, roles, ownership, and tenant boundaries before data access.
- Avoid mass assignment from `req.body`.
- Use atomic database updates for inventory, counters, balances, limits, and race-prone data.
- Make webhook handlers idempotent and verify signatures where supported.
- Keep secrets in env vars; never log tokens, passwords, cookies, or API keys.
- Set safe CORS, cookie, rate-limit, helmet, file-upload, and body-size behavior.
- Return consistent status codes and safe error messages.
  - Implement a global centralized error handling middleware in Express/Next.js to catch all uncaught exceptions and return standardized JSON responses (e.g., `{ error: "Internal Server Error", code: 500 }`).
- Implement Structured Logging using a production logger like Winston or Pino. Logs must be output as JSON with metadata (timestamp, log level, request path, request ID, error stack trace) rather than using simple `console.log`.
- Add pagination, filtering limits, and indexes for hot read endpoints.
- Add tests for changed route/service behavior and known regression risks.

## API Debug Flow

1. Locate route -> middleware -> controller/handler -> service -> model/schema.
2. Reproduce the failure with a test, smoke request, or focused command.
3. Inspect request shape, auth context, env config, database expectations, and response contract.
4. Patch the smallest layer that owns the bug.
5. Run targeted tests, then typecheck/build if relevant.

## Common the developer Risks

- Stock/order race conditions in ecommerce/pharmacy flows.
- Checkout without real stock or price validation.
- Long-lived auth cookies without refresh/session controls.
- Upload endpoints accepting unsafe file type, size, or owner.
- Admin routes that trust client-provided role/user fields.
- Cloudinary/Resend/PayHere/SMS integrations missing retries, webhook verification, or error logging.
- Multi-tenant routes that forget owner or domain boundaries.

## Verification

Prefer targeted API tests first. If live services are required, mock safely or report the exact missing credential/service while still verifying local logic.



## Code Examples

### Secure Express Route with Zod Validation
```typescript
import { z } from 'zod';
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });

app.post('/api/auth/login', limiter, async (req, res) => {
  const schema = z.object({ email: z.string().email(), password: z.string().min(8) });
  const result = schema.safeParse(req.body);
  if (!result.success) return res.status(400).json({ error: result.error });
  // Process safely...
});
```

## Strict Guardrails
- **NEVER** commit secrets or log tokens, passwords, cookies, or API keys.
- **NEVER** trust client-provided pricing, stock, role, or user-ownership fields during checkout or updates.
- **NEVER** leave Cloudinary/Resend/PayHere/SMS integrations without error logging and retry mechanisms.
- **NEVER** run long-lived auth sessions without session controls/refresh tokens.

