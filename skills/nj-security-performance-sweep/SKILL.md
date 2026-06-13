---
name: nj-security-performance-sweep
description: Combined security and performance review workflow for the developer's full-stack apps. Use when the user asks for security, performance, speed, optimization, production hardening, "podi podi than pawa hodata balanna", audits, API/web risks, Lighthouse, database hot paths, bundle size, auth, payments, uploads, or compliance-sensitive checks.
---

# NJ Security Performance Sweep

## Purpose

Combined security and performance review workflow for the developer's full-stack apps. Use when the user asks for security, performance, speed, optimization, production hardening, "podi podi than pawa hodata balanna", audits, API/web risks, Lighthouse, database hot paths, bundle size, auth, payments, uploads, or compliance-sensitive checks.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks for a "security scan", "performance optimization", or "Lighthouse audit".
2. The user uses phrases like "podi podi than pawa hodata balanna", indicating a deep audit is needed.
3. You are modifying high-risk surfaces: auth flows, checkout/payments, file uploads, or public webhooks.

Use this skill to catch high-impact security and performance issues before shipping. Pair with `$security-scan`, `$web-perf`, `$nj-api-hardener`, and `$nj-frontend-polish` as needed.

## Sweep Order

1. Identify attack surface and hot paths: auth, admin, checkout/payment, upload, webhook, public API, search, profile/domain, analytics.
2. Inspect config and middleware before feature code.
3. Check data access patterns and indexes.
4. Check frontend bundle, images, rendering, and network behavior.
5. Fix critical issues first; list lower-priority findings when not in scope.

## Security Audit Checklist

- **Credential Scans**: Audit all source files and environment config files to verify zero committed API keys, tokens, or plaintext passwords.
- **Route Authorization Verification**: Trace all endpoints (especially admin and tenant routes) to check if they lack auth middleware or fail to validate resource ownership server-side.
- **Input Validation Auditing**: Audit API controllers to verify schema boundaries are configured (e.g. confirming request payloads use strict Zod parsing).
- **Endpoint Protection Sweeps**: Check for the presence of rate-limiting middleware on auth, OTP, and checkout endpoints. Verify webhooks check signature headers.
- **Upload Policies Review**: Verify file upload handlers enforce limits on max size, mime-types, and ownership check boundaries.
- **Dependency Audit**: Run package security audits (`npm audit` or equivalent) to locate vulnerability warnings in dependencies.

## Performance Audit Checklist

- **Database Queries Profile**: Check code for unindexed database queries, unbounded reads (finds without limits), or N+1 query loops.
- **Media Asset Diagnostics**: Check that all images use WebP/AVIF formats, set explicit aspect ratio size headers, and use lazy-loading below-the-fold.
- **Bundle & Script Audits**: Check bundle maps to identify giant imported libraries or duplicate utility packages.
- **Render Diagnostics**: Run profiling tool checks to locate excessive re-render loops or costly calculations occurring on every render.
- **Mobile Responsive Audit**: Check layout rendering on mobile viewports for smooth scrolling and interactive touch target size margins.

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

