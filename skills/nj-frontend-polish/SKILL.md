---
name: nisal-frontend-polish
description: Frontend polish, UI quality, responsive design, UX, accessibility, and browser verification workflow for Nisal's React, Vite, Next.js, ecommerce, SaaS, pharmacy, restaurant, admin dashboard, landing page, and portfolio work. Use when the user asks to make UI "superb", beautiful, professional, faster, mobile-friendly, or visually verified.
---

# Nisal Frontend Polish

## Purpose

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to make the UI "superb", "beautiful", "professional", or "mobile-friendly".
2. The user requests a visual or frontend polish (e.g., fixing alignment, adding animations, optimizing images).
3. The prompt involves user-facing forms, operational dashboards, storefronts, or SaaS panels.

Use this skill to turn frontend changes into polished, verified UI instead of only edited code. Pair with `$verification`, `$agent-browser-verify`, `$react-best-practices`, `$nextjs`, or `$shadcn` when relevant.

---

## Playbook UI & Polish Rules

Follow and verify the UI/UX, mobile-first, and performance checklists in the **[Web Project Quality Playbook](file:///D:/web%20guide%20doc/WEB_PROJECT_QUALITY_PLAYBOOK.md)**:

### 1. Mobile-First Layout & Sizing
- **Tap Targets**: Ensure all buttons and links have comfortable touch targets (minimum `44x44px`).
- **Safe Areas**: Address mobile safe areas and browser UI chrome for absolute/fixed layouts.
- **Scroll Smoothness**: Keep mobile scrolling smooth. Disable heavy background blurs and card transformations on hover for mobile viewports.

### 2. UI Elements & States
- **Forms**: Enforce clear labels (never placeholders as labels), field-level feedback, and disable buttons during form submission.
- **Loading & Empty**: Display skeleton loaders for product/catalog grids during loading. Ensure empty states explain what happened and offer a clear call to action.
- **Layout Shifts**: Wrap asynchronous/lazy-loaded elements in fixed aspect ratio containers to eliminate layout shifts (CLS).

### 3. Image Optimization
- **Eager vs Lazy**: Use `loading="eager"` and `fetchPriority="high"` only for above-the-fold hero images. Use `loading="lazy"` and `decoding="async"` for all below-the-fold images.
- **Formats**: Convert source images to WebP/AVIF formats to respect the performance budget.

---

## UI Quality Pass Workflow

1. Identify the page type: operational dashboard, storefront, SaaS app, landing page, admin panel, form flow, or public profile.
2. Preserve the existing design system unless the user requested a redesign.
3. Improve the core workflow first: navigation, form state, loading/error/empty states, data clarity, and calls to action.
4. Check mobile and desktop layout constraints.
5. Verify with browser screenshots or automated browser checks when a local target is available.
6. Enforce storybook component isolation and component unit tests when tools are configured.

---

## Verification

Run the strongest practical set:
- Component/unit tests if present.
- Typecheck/lint/build.
- Browser verification on desktop and mobile viewport.
- Screenshot inspection for text overflow and visual regressions.

Do not claim the UI is polished if it was never rendered and inspected.


## Strict Guardrails
- **NEVER** use generic CSS (`margin-top: 100px;`) to fix alignment issues; use proper flexbox, grid, or padding utilities from the design system.
- **NEVER** claim the UI is polished if you haven't rendered it in a browser or visually verified it.
- **NEVER** leave a button without disabled states during form submissions.
- **NEVER** use placeholder text in place of a proper `<label>` tag for inputs.

