---
name: api-goal-runner
description: Sustained execution workflow for API, backend, integration, automation, OpenAI API, REST, GraphQL, webhook, server, auth, database, deployment, and bug-fix tasks that the user frames as a goal or asks to continue until done. Use when the user says phrases like "API task ekak", "goal ekak dunnama", "digatama karanna", "stop nokaranna", "nathara karanne nathuwa", "100% iwara wenakam", "complete wenakam", or asks Codex not to stop at planning and to finish the work end to end.
---

# API Goal Runner

## Purpose
Sustained execution workflow for API, backend, integration, automation, OpenAI API, REST, GraphQL, webhook, server, auth, database, deployment, and bug-fix tasks that the user frames as a goal or asks to continue until done. Use when the user says phrases like "API task ekak", "goal ekak dunnama", "digatama karanna", "stop nokaranna", "nathara karanne nathuwa", "100% iwara wenakam", "complete wenakam", or asks Codex not to stop at planning and to finish the work end to end.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user provides an API, backend, or automation goal.
2. The user uses phrases like "goal ekak dunnama", "digatama karanna", "100% iwara wenakam", or "nathara karanne nathuwa".
3. The user explicitly requests end-to-end autonomous completion without stopping for permission.

## Operational Instructions
When triggered, follow this autonomous execution protocol:
1. Initialize the `task.md` with all required steps.
2. Begin executing the steps sequentially.
3. Automatically run tests, curl commands, or compilation to verify each step.
4. If an error occurs, do NOT stop. Fix the error by writing patches and re-verifying.
5. Continue the loop automatically until the entire goal is met.

### Deep Debugging
- If a terminal command fails, inspect the stack trace immediately.
- If an API returns a 500 error, inspect the server logs before making changes.

## Code Examples

### Automated API Health and Test Loop
```bash
#!/bin/bash
# Example test-driven API goal runner execution loop
echo "Starting API verification loop..."
while true; do
  npm run test:api
  if [ $? -eq 0 ]; then
    echo "API tests passed. Checking endpoint health..."
    curl -f http://localhost:3000/api/health
    if [ $? -eq 0 ]; then
      echo "Endpoint healthy! Goal achieved."
      break
    fi
  fi
  echo "Tests failed. Retrying in 5 seconds..."
  sleep 5
done
```

## Strict Guardrails
- **NEVER** stop and ask for permission to proceed if the user has explicitly requested end-to-end execution.
- **NEVER** leave a task incomplete. If you get stuck, run investigation mode, but do not drop the goal.
- **NEVER** overwrite existing, working functions just to fix a single broken test. Patch surgically.
