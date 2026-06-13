---
name: nj-landing-page-design-guardian
description: Guidelines for high-converting marketing pages (Hero, Features, Pricing sections) in Minimal, Brutalist, and Editorial styles, with explicit rules for superb modern 3D transforms, CSS animations, and wow-factor micro-interactions. Use when designing landing pages, portfolios, or marketing sections.
---

# Nisal Landing Page Design Guardian

## Purpose
This skill establishes guidelines for designing high-converting, modern marketing pages with "wow-factor" visual elements, including CSS 3D transforms, GPU-accelerated animations, and interactive micro-animations.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to design a "landing page", "portfolio", "hero section", or "marketing page".
2. The user explicitly requests "wow-factor", "superb UI", "3D animations", or specific styles (Brutalist, Minimal, Editorial).

## 1. Modern 3D Visual Effects

### Rule 1: Isometric Card Transforms
- To create a modern 3D depth effect on hover, apply perspective and rotation properties.
- Example CSS:
  ```css
  .card-3d {
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
    transform: perspective(1000px) rotateX(10deg) rotateY(-10deg) translateZ(0);
    box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.15);
  }
  .card-3d:hover {
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(20px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  }
  ```

### Rule 2: Floating 3D Elements
- Use subtle floating animations for background shapes or icons to create layers of depth.
  ```css
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(3deg); }
  }
  .floating-3d {
    animation: float 6s ease-in-out infinite;
  }
  ```

---

## 2. Dynamic CSS Animations

### Rule 1: Text Gradient Sweep
- Apply moving gradient effects to headlines to draw attention and create a premium feel.
  ```css
  .animate-text-gradient {
    background: linear-gradient(to right, #8b5cf6, #ec4899, #3b82f6);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-sweep 4s linear infinite;
  }
  @keyframes gradient-sweep {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
  ```

### Rule 2: GPU-Accelerated Hover Transitions
- Always use `transform` and `opacity` properties for transitions to ensure 60fps rendering without layout shifts (CLS).
- Avoid transitioning `width`, `height`, or `margin`.

---

## 3. Visual Styles & Sections

- **Hero Section**: Must feature a compelling bold headline, vibrant gradient text sweeps, glassmorphic header navigation, and a high-contrast primary CTA button with an expanding ring hover animation.
- **Minimal Style**: Extreme whitespace, stark contrasts, elegant serif/sans-serif typography combos.
- **Brutalist Style**: Solid thick borders (`border: 4px solid #000`), vibrant solid background colors, offset box-shadows (`box-shadow: 8px 8px 0px #000`), bold monospaced typography.
- **Editorial Style**: Large serif type, asymmetric layouts, overlapping images, muted earthy/warm backgrounds.


## Strict Guardrails
- **NEVER** transition `width`, `height`, or `margin` in CSS animations. Always use `transform: scale()` or `translate()`.
- **NEVER** leave a hero section without a primary Call-to-Action (CTA) button.
- **NEVER** use generic flat shadows; use layered, soft drop-shadows (e.g., `0 20px 40px rgba(0,0,0,0.25)`) to emphasize depth.

