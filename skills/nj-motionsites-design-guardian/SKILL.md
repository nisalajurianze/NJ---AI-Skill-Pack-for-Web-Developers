---
name: nj-motionsites-design-guardian
description: Guidelines for premium motionsites.ai-inspired design systems, containing copy-paste CSS and JS recipes for animated backgrounds (mesh gradients, spotlight grids), 3D card tilt effects, text border light sweeps, glowing CTA buttons, and high-contrast dark modes. Use when creating modern, motion-rich landing pages, portfolios, or SaaS dashboards.
---

# NJ MotionSites Design Guardian

## Purpose
This skill provides complete, production-ready specifications and CSS/JS code recipes to implement motion-rich, high-end website sections, interactive animated backgrounds, and glowing UI components inspired by MotionSites.ai.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user requests a "motion site", "motionsites.ai style", "premium animated background", or "high-end portfolio".
2. The user specifically asks for "mesh gradients", "spotlight grids", "3D card tilts", or "border sweep animations".

---

## 1. Core Visual Tokens (Dark Mode Preferred)

- **Typography**:
  - Headers: `Cal Sans`, `Outfit`, or `Space Grotesk`
  - Body: `Inter` or `Geist Sans`
- **Theme Colors (HSL)**:
  - Deep Space Background: `hsl(240, 10%, 3.9%)` (Default dark `#09090b`)
  - Accent Purple (Luminous): `hsl(270, 91%, 65%)` (`#a855f7`)
  - Accent Blue (Electric): `hsl(217, 91%, 60%)` (`#3b82f6`)
  - Accent Emerald (Neon): `hsl(142, 71%, 45%)` (`#10b981`)
  - Muted Borders: `hsla(240, 5%, 84%, 0.05)`
  - Glowing Shadows: `0 0 50px -12px hsla(270, 91%, 65%, 0.3)`

---

## 2. Animated Mesh Gradients (CSS-Only)

Fluid, organically moving blurred blobs that serve as high-end backgrounds.

```css
.mesh-gradient-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: hsl(240, 10%, 3.9%);
  z-index: -2;
}

.mesh-gradient-bg::before,
.mesh-gradient-bg::after {
  content: "";
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.45;
  mix-blend-mode: screen;
}

.mesh-gradient-bg::before {
  background: radial-gradient(circle, hsl(270, 91%, 65%) 0%, transparent 70%);
  top: -10%;
  left: 10%;
  animation: moveBlob1 25s ease-in-out infinite alternate;
}

.mesh-gradient-bg::after {
  background: radial-gradient(circle, hsl(217, 91%, 60%) 0%, transparent 70%);
  bottom: -10%;
  right: 10%;
  animation: moveBlob2 25s ease-in-out infinite alternate;
}

@keyframes moveBlob1 {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(120px, 80px) scale(1.2); }
  100% { transform: translate(-80px, 150px) scale(0.9); }
}

@keyframes moveBlob2 {
  0% { transform: translate(0, 0) scale(1.1); }
  50% { transform: translate(-100px, -120px) scale(0.8); }
  100% { transform: translate(140px, 60px) scale(1.1); }
}
```

---

## 3. Spotlight Grid Background (CSS & JS)

An interactive grid where lines or intersections illuminate dynamically matching mouse positions.

### HTML
```html
<div class="spotlight-grid">
  <div class="grid-overlay"></div>
</div>
```

### CSS
```css
.spotlight-grid {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #030303;
  overflow: hidden;
  --mouse-x: 50%;
  --mouse-y: 50%;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), black 20%, transparent 100%);
  -webkit-mask-image: radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), black 20%, transparent 100%);
  transition: mask-image 0.1s ease;
}
```

### JavaScript
```javascript
document.querySelector('.spotlight-grid').addEventListener('mousemove', (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
});
```

---

## 4. 3D Tilt Card with Hover Border Glow

Dynamic card tilt coupled with glowing border lines pointing toward the cursor.

### HTML
```html
<div class="tilt-card-wrapper">
  <div class="tilt-card">
    <div class="tilt-card-glow"></div>
    <div class="tilt-card-content">
      <h3>Premium Asset</h3>
      <p>Click to copy prompts and generate premium UI elements instantly.</p>
    </div>
  </div>
</div>
```

### CSS
```css
.tilt-card-wrapper {
  perspective: 1000px;
}

.tilt-card {
  position: relative;
  width: 320px;
  height: 200px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  overflow: hidden;
  transition: transform 0.15s ease-out, box-shadow 0.3s ease;
  transform-style: preserve-3d;
}

.tilt-card-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle 120px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.15), transparent 80%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.tilt-card:hover {
  box-shadow: 0 0 30px -5px rgba(168, 85, 247, 0.2);
}

.tilt-card:hover .tilt-card-glow {
  opacity: 1;
}

.tilt-card-content {
  padding: 24px;
  transform: translateZ(20px);
}
```

### JavaScript
```javascript
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    
    // Tilt calculations
    const rotateX = -((y - rect.height / 2) / rect.height) * 15;
    const rotateY = ((x - rect.width / 2) / rect.width) * 15;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});
```

---

## 5. CSS Border Sweep Light (Conic Gradient)

A border that sweeps around the container using a bright colored light trace.

```css
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.border-sweep {
  position: relative;
  border-radius: 12px;
  background: #09090b;
  padding: 1px; /* The border width */
}

.border-sweep::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: conic-gradient(from var(--angle), transparent 70%, #a855f7 90%, #3b82f6 100%);
  animation: sweep 4s linear infinite;
  z-index: -1;
}

@keyframes sweep {
  to {
    --angle: 360deg;
  }
}
```


## Strict Guardrails
- **NEVER** use synchronous Javascript animations (`setInterval`, `setTimeout`) for layout-shifting properties. Use CSS transforms and `@keyframes`.
- **NEVER** apply heavy `blur()` filters on elements that resize frequently, as this causes severe GPU lag. Use them on static background layers only.
- **NEVER** implement spotlight or tilt mouse-tracking without `requestAnimationFrame` or proper throttling if complex calculations are added.

