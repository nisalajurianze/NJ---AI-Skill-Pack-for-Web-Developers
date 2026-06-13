---
name: nj-security-performance-sweep
description: Combined security and performance review workflow for Nisal's full-stack apps. Use when the user asks for security, performance, speed, optimization, production hardening, "podi podi than pawa hodata balanna", audits, API/web risks, Lighthouse, database hot paths, bundle size, auth, payments, uploads, or compliance-sensitive checks.
---

# Nisal Security Performance Sweep

## Purpose

Combined security and performance review workflow for Nisal's full-stack apps. Use when the user asks for security, performance, speed, optimization, production hardening, "podi podi than pawa hodata balanna", audits, API/web risks, Lighthouse, database hot paths, bundle size, auth, payments, uploads, or compliance-sensitive checks.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks for a "security scan", "performance optimization", or "Lighthouse audit".
2. The user uses phrases like "podi podi than pawa hodata balanna", indicating a deep audit is needed.
3. You are modifying high-risk surfaces: auth flows, checkout/payments, file uploads, or public webhooks.

Use this skill to catch high-impact security and performance issues before shipping. Pair with `$security-scan`, `$web-perf`, `$nisal-api-hardener`, and `$nisal-frontend-polish` as needed.

## Sweep Order

1. Identify attack surface and hot paths: auth, admin, checkout/payment, upload, webhook, public API, search, profile/domain, analytics.
2. Inspect config and middleware before feature code.
3. Check data access patterns and indexes.
4. Check frontend bundle, images, rendering, and network behavior.
5. Fix critical issues first; list lower-priority findings when not in scope.

## Security Checklist

- Auth/session expiry, refresh, logout, cookie flags, token storage.
- Role, owner, tenant, and admin authorization.
- Input validation and output sanitization.
- Upload type/size/path controls.
- Rate limits for auth, OTP, upload, checkout, and AI endpoints.
- Webhook signature verification and idempotency.
- Secret handling and safe logs.
- CORS and production origin restrictions.
- Payment amount trust boundaries.

## Performance Checklist

- Avoid N+1 database queries and unbounded collection scans.
- Add pagination, indexes, projections, and caching for hot reads.
- Compress and resize images; avoid huge hero/media assets.
- Keep initial JS/CSS reasonable; avoid unnecessary client-side libraries.
- Reduce re-render loops and expensive derived state.
- Verify mobile viewport and scroll smoothness.

## Reporting

Lead with critical issues and exact file references when reviewing. If fixing, verify each fixed issue with tests, commands, or a concrete local check.



## Code Examples

### Basic Security Headers
```typescript
import helmet from 'helmet';
import cors from 'cors';

// Apply basic security sweeps
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN,
  credentials: true
}));
```

## Strict Guardrails
- **NEVER** ignore rate limits on auth, OTP, or checkout routes. If missing, flag them as critical vulnerabilities.
- **NEVER** trust client-side data for payment amounts, roles, or ownership boundaries. Validate server-side.
- **NEVER** skip verifying webhook signatures.
- **NEVER** use unbounded collection scans on the database. If you see a `find()` without `limit()`, fix it immediately.

