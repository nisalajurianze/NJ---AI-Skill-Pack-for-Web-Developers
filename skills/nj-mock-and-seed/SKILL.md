---
name: nj-mock-and-seed
description: Database seeding (MongoDB/Redis) and external service mocking (Resend, PayHere, Cloudinary) protocols for local test and development environments. Use when writing tests, setting up local databases, or debugging third-party integrations.
---

# NJ Mock and Seed

## Purpose
This skill defines standard protocols for database seeding (MongoDB/Redis) and mocking external service integrations during development and testing to ensure rapid feedback cycles and test reliability.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to "seed the database" or "add dummy data".
2. The user requests help writing unit tests that involve third-party integrations (Resend, PayHere, Cloudinary).
3. The user needs to mock APIs or external services for local development.

## 1. Database Seeding Protocol (MongoDB/Redis)

### Rule 1: Idempotency
- Seed scripts must be idempotent. They must clear existing records or upsert (`findOneAndUpdate` with `upsert: true`) rather than appending duplicates.
- Example pattern (Mongoose):
  ```typescript
  await User.deleteMany({});
  await User.insertMany(seedUsers);
  ```

### Rule 2: Environments
- Never run seed scripts on staging or production unless explicitly requested. Protect execution using `process.env.NODE_ENV` checks:
  ```typescript
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Safety check: Cannot run seeding in production!');
  }
  ```

### Rule 3: Deterministic Data
- Use static arrays or standard libraries (like `@faker-js/faker` with a fixed seed value) to ensure test runs generate identical data.

---

## 2. External Service Mocking Protocol

When testing code that calls third-party APIs (Resend, PayHere, Cloudinary), do not make real network requests. Implement mocks.

### Rule 1: Resend (Email)
- Mock the Resend client in unit tests.
- Example (Jest/Vitest):
  ```typescript
  vi.mock('resend', () => ({
    Resend: vi.fn().mockImplementation(() => ({
      emails: {
        send: vi.fn().mockResolvedValue({ id: 'mock-email-id' }),
      },
    })),
  }));
  ```

### Rule 2: PayHere (Payment Gateway)
- Use PayHere Sandbox mode (`sandbox.payhere.lk`) for integration/manual testing.
- For unit tests, mock the signature generation and MD5 verification helpers to avoid dependency on private keys.

### Rule 3: Cloudinary (Media upload)
- Mock upload responses. Cloudinary uploads are slow and resource-heavy.
- Example mock return:
  ```typescript
  {
    public_id: 'mock-public-id',
    secure_url: 'https://res.cloudinary.com/demo/image/upload/v1/mock.png',
  }
  ```


## Strict Guardrails
- **NEVER** run seed scripts without explicit `NODE_ENV !== 'production'` safety checks.
- **NEVER** hit live third-party endpoints (Cloudinary, Resend) during unit testing. Always mock the SDK layer.
- **NEVER** push randomly generated data to tests without setting a fixed seed, as it will cause flaky test runs.

