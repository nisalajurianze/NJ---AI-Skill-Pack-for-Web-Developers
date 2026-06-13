---
name: nisal-onboarding-design-guardian
description: Guidelines for onboarding, login, welcome tutorials, and account setup flows. Focuses on progressive disclosure, social vs email auth, and activation. Use when designing user registration, login interfaces, or first-time user tutorials.
---

# Nisal Onboarding Design Guardian

## Purpose
This skill establishes premium UX design conventions for user onboarding, account registration, authentication (login/signup), and interactive welcome tours to maximize user activation and reduce drop-off.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to design a "login page", "signup form", "auth screen", or "registration flow".
2. The user requests an "onboarding tutorial", "wizard", or "welcome tour".

## 1. Onboarding Principles

### Rule 1: Progressive Disclosure
- Break long account setup processes into logical, multi-step wizards rather than a single massive form.
- Use a persistent, visual progress indicator (such as step numbers or a progress bar) at the top of the screen.
- Save progress at each completed step so users can resume if they exit.

### Rule 2: Cognitive Load Reduction
- Keep initial inputs to a bare minimum (e.g., email and password or OAuth only).
- Delay profile completion, avatar uploads, and preferences selection until after the user reaches the main dashboard (post-onboarding phase).

---

## 2. Authentication (Login & Signup)

### Rule 1: Unified Auth Forms
- Present clear separation between "Sign In" and "Sign Up" states.
- Support OAuth (social login) with prominent buttons (Google, Apple, Github) styled cleanly with their official brand icons.
- Position email auth inputs below social login buttons, separated by a thin divider with a text label like `"or continue with email"`.

### Rule 2: Smart Password Fields
- Include a "show/hide" toggle icon in the password input field.
- Provide real-time password strength validation indicators (e.g., minimum 8 characters, numbers, symbols) rather than generic error messages on submit.

---

## 3. Welcome Tutorials & Activation

- Use interactive welcome flows (carousels or card sweeps) with a prominent `Skip` button in the top-right corner.
- Ensure the final step of the welcome flow has a strong, high-contrast Call to Action (CTA) button to get started immediately (e.g., `"Get Started"`, `"Explore Dashboard"`).


## Strict Guardrails
- **NEVER** build a massive single-page onboarding form. It must be broken into a wizard if it has more than 4 inputs.
- **NEVER** delay or hide OAuth buttons in favor of standard email signups; Social Auth must be the primary visual path.
- **NEVER** validate password strength only on submit. It must be real-time and inline.

