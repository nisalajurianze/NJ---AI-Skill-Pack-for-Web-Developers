---
name: nj-ui-elements-design-guardian
description: Design specifications for UI components (bottom sheets, dialogs/modals, toasts/banners, progress bars, carousels, tabs, and buttons). Includes styling specs for glassmorphism, animations, and shadows. Use when designing standalone UI components.
---

# NJ UI Elements Design Guardian

## Purpose
This skill establishes premium visual design guidelines and specs for standalone UI components. It ensures visual consistency, modern aesthetics (glassmorphism, vibrant gradients), and micro-animations across all project codebases.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to design specific standalone UI elements: "modal", "dialog", "bottom sheet", "toast", "progress bar", "carousel", or "button".
2. The user requests "glassmorphism", "rich styling", or premium aesthetic details for a specific component.

## 1. Modals, Bottom Sheets & Banners

### Rule 1: Modals / Dialogs
- **Overlay**: Use a dark, semi-transparent backdrop (`rgba(0, 0, 0, 0.5)`) with a blur filter (`backdrop-filter: blur(8px)`) to keep focus on the modal.
- **Card**: Use a distinct shadow (`box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)`) and rounded corners (`border-radius: 12px` or `0.75rem`).

### Rule 2: Bottom Sheets (Mobile)
- Use a drag indicator handle at the top center of the sheet (styled as a thin, rounded horizontal line, e.g., width `40px`, height `4px`, color `#d1d5db` or gray-300).
- Slide-in animation: Translate the sheet up from `Y: 100%` to `Y: 0` with a smooth cubic-bezier transition (`transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 2. Feedback Components (Toasts, Progress Indicators)

- **Toasts**: Position floating notifications in the top-right (desktop) or bottom-center (mobile). Style them with glassmorphism (`background: rgba(255, 255, 255, 0.8)`, `backdrop-filter: blur(10px)`) and include a colored left border representing status (Green for success, Red for error, Yellow for warning).
- **Progress Indicators**: Use smooth, indefinite pulse or spinning animations. Keep track paths thin and indicators colored with a vibrant gradient (e.g., violet-500 to fuchsia-500).

---

## 3. General Aesthetics & Glassmorphism

When the user requests rich or glassmorphism styling, apply these CSS values:

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
}

/* For Dark Mode Glassmorphism */
.glass-panel-dark {
  background: rgba(17, 24, 39, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
```


## Strict Guardrails
- **NEVER** use solid, opaque, dark overlays for modals without a blur filter. Blur is required for a premium feel.
- **NEVER** build a bottom sheet without a visible drag handle indicator.
- **NEVER** use flat, borderless toast notifications. They must have a visual depth indicator (shadow or glassmorphism).

