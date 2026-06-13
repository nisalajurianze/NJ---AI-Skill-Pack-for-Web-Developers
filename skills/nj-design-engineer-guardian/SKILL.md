---
name: nisal-design-engineer-guardian
description: Guidelines for premium shadcn-style modular React components, utility merging, Radix UI primitive patterns, and AI prompt-friendly component registry practices. Use when building reusable React UI kits, component libraries, or SaaS design systems.
---

# Nisal Design Engineer Guardian

## Purpose
This skill establishes guidelines and complete code recipes to engineer premium, copy-pasteable React UI components using Tailwind CSS, Radix UI primitives, and shadcn styling rules, optimized for modern developer workflows and AI code generation.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to build "reusable UI components", "React UI kits", or "SaaS design systems".
2. The user references "shadcn style", "Radix UI", or "utility merging".
3. You are generating a UI component that is intended to be used globally across the app.

---

## 1. Core Principles of Design Engineering

- **No Premature Abstraction**: Keep components self-contained. Prefer single-file components containing their CSS styles, markup, and essential states so they can be copied and pasted easily.
- **Dynamic Utility Merging**: Always use a `cn` helper merging `clsx` and `tailwind-merge` to let users override classes safely.
  ```typescript
  import { clsx, type ClassValue } from "clsx"
  import { twMerge } from "tailwind-merge"

  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
  }
  ```
- **Radix UI integration**: Always extend Radix primitive elements (e.g. `DropdownMenu`, `Dialog`, `Tooltip`) to ensure WCAG accessibility (ARIA attributes, keyboard navigation) by default.

---

## 2. Dynamic Input Component (shadcn-style)

Clean, modular React input component with glowing focus borders, hover effects, and error validation.

```jsx
import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, error, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 focus-visible:border-purple-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
          error && "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <span className="text-[10px] text-red-500 mt-1 block pl-1">{error}</span>
      )}
    </div>
  )
})
Input.displayName = "Input"

export { Input }
```

---

## 3. Luminous Action Button Component

Interactive button component supporting loading states, icons, and expanding border glows.

```jsx
import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", loading, children, ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2",
        // Variants
        variant === "default" && "bg-purple-600 text-white hover:bg-purple-500 shadow-md shadow-purple-900/20 active:scale-[0.98]",
        variant === "outline" && "border border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-900 hover:text-white",
        className
      )}
      ref={ref}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : null}
      {children}
    </button>
  )
})
Button.displayName = "Button"

export { Button }
```

---

## 4. AI-Friendly Prompt Templates

To help AI models (Cursor, Claude Code, Lovable) generate components compatible with this registry, attach these constraints in custom workspace prompts:

- *"Implement components using Radix UI primitives for accessibility."*
- *"Ensure all styles use Tailwind CSS utility classes and reference shadcn base colors (`zinc` defaults)."*
- *"Allow class customization by exporting React props and wrapping className in `cn(...)`."*
- *"Ensure the component is structured in a single file for easy copy-paste usage."*


## Strict Guardrails
- **NEVER** build complex accessibility components (e.g., Modals, Dropdowns) from native HTML `div`s. Use Radix UI primitives.
- **NEVER** hardcode class strings without `cn()`. Always wrap `className` props to allow utility overrides.
- **NEVER** separate a component's CSS into a global stylesheet if it can be represented by Tailwind utility classes in a single file.

