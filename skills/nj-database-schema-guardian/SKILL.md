---
name: nj-database-schema-guardian
description: Guidelines for designing robust, scalable database schemas (Prisma, Mongoose, Drizzle). Focuses on soft deletes, UUID/CUID indexing, relational integrity, timestamps, and scalable connection pooling patterns. Use when designing or migrating database models.
---

# NJ Database Schema Guardian

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to "create a database schema", "design the database", or "add a new table/collection".
2. The user mentions "Prisma schema", "Mongoose models", "Drizzle", or "SQL migrations".
3. The user requests to "handle deletes", "add foreign keys", or "optimize database queries".

## Operational Instructions
When designing database schemas, strictly adhere to the following premium, scalable patterns.

### 1. Primary Keys & Identifiers
Always use `cuid` or `uuid` for primary keys instead of auto-incrementing integers to prevent ID enumeration attacks and support distributed systems.

**Prisma Example:**
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  // ...
}
```

### 2. Timestamps & Auditing
Every single table/collection MUST have `createdAt` and `updatedAt` fields.

**Prisma Example:**
```prisma
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
```

### 3. Soft Deletes (Logical Deletion)
Never physically delete user-generated records. Implement a `deletedAt` field to allow for data recovery and audit trails.

**Prisma Example:**
```prisma
model Post {
  // ...
  deletedAt DateTime? // Null means active, timestamp means deleted
}
```
**Mongoose Example:**
```javascript
const postSchema = new mongoose.Schema({
  // ...
  deletedAt: { type: Date, default: null }
});
```

### 4. Indexing Strategy
Always add explicit indexes (`@@index`) for foreign keys, searchable text fields, and frequently filtered columns (like `status` or `deletedAt`).

**Prisma Example:**
```prisma
model Order {
  id        String   @id @default(cuid())
  userId    String
  status    String
  deletedAt DateTime?
  
  user      User     @relation(fields: [userId], references: [id])

  @@index([userId])
  @@index([status])
}
```

## Strict Guardrails
- **NEVER** use auto-incrementing integers (`@default(autoincrement())`) for public-facing IDs. Always use `cuid()` or `uuid()`.
- **NEVER** physically delete records (e.g., `prisma.user.delete()`) unless explicitly required for GDPR compliance. Always use soft deletes (`prisma.user.update({ data: { deletedAt: new Date() } })`).
- **NEVER** create a relational mapping without explicitly defining an index on the foreign key column.
- **NEVER** store plain-text passwords. Always assume a `passwordHash` field is required if custom auth is used.
