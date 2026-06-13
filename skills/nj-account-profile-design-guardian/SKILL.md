---
name: nj-account-profile-design-guardian
description: Guidelines for user profile pages, account settings (grouped navigation, switches), notifications panels, and security danger zones. Use when designing user profiles, account management dashboards, or settings panels.
---

# Nisal Account & Profile Design Guardian

## Purpose
This skill establishes premium UX design conventions for account settings dashboards, user profiles, notifications management, and high-risk security account states.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to build or update a "user profile", "account settings", or "dashboard preferences" page.
2. The user requests a "danger zone", "delete account flow", or notification preferences UI.
3. You are designing an interface where users edit their personal details, avatars, or billing information.

## 1. Account Settings Navigation

### Rule 1: Grouped Categorization
- Group settings into distinct, logical categories (e.g., Personal Details, Security, Billing, Notifications).
- For mobile, present settings as a single vertical list with group headings and chevron icons pointing right.
- For desktop, use a left-hand navigation menu to toggle sections without reloading the entire page.

### Rule 2: Control Mechanics
- Use toggle switches (rather than checkboxes or dropdowns) for binary settings (e.g., Enable dark mode, email alerts).
- Place descriptions or helper text immediately below the setting label to clarify what changing it does.

---

## 2. Profile Customization

- Position avatar uploads prominently at the top of the profile page (prefer a circular mask with a clear `"Upload Image"` or camera edit overlay on hover).
- Structure forms with clear read-only states and edit modes (or use field-level save behaviors).
- Ensure required inputs have visible validation indicators (such as asterisk symbols next to labels).

---

## 3. Notifications & Danger Zones

- **Notifications**: Group channels (Email, SMS, Push) side-by-side or in a grid, allowing granular toggle options for each notification category (e.g., Order Updates, Promotional, Security Alerts).
- **Danger Zones**: Place destructive settings (e.g., Deactivate Account, Delete Profile) in a separate card at the bottom.
  - Border/Text color: Crimson red (`#ef4444` / `#dc2626`).
  - Action trigger: Require confirmation (e.g., typing `"DELETE"` or entering a password in a modal dialog).


## Strict Guardrails
- **NEVER** use checkboxes for binary settings that take immediate effect (use toggle switches).
- **NEVER** place "Delete Account" buttons alongside normal save buttons. They must be isolated in a "Danger Zone".
- **NEVER** reload the entire page when switching between account settings tabs on desktop.

