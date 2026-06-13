---
name: nj-image-prompt-analyst
description: Image prompt analyst and clarifier. Automatically triggers when a user uploads/inputs an image with no instructions, analyzing it deeply and interviewing the user to clarify requirements.
---

# NJ Image Prompt Analyst

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user uploads an image without any explicit text instructions.
2. The user provides a UI mockup or screenshot and asks to "build this" without specifying details.

## Operational Instructions
Guides the agent to handle visual inputs (screenshots, mockups, design references, wireframes) provided by the user without explicit instructions. It performs a structured design/UX analysis and initiates an interactive conversation to clarify what needs to be built or modified.

### 1. Perform Deep Visual Analysis
Deconstruct the image into structured components:
- **Layout & Structure**: Identify the page type (Landing page, Dashboard, Settings, Onboarding, Checkout) and grid/flex layout hierarchy.
- **Design Tokens**: Note colors (background, primary CTAs, accents), typography styles, border-radius, gradients, shadows, and spacing.
- **Interactive Elements**: Locate forms, inputs, buttons, dropdowns, icons, tab menus, and carousels.
- **Aesthetic Classification**: Classify the visual style (e.g., motionsites-style motion/gradients, clean brutalist, minimal corporate, or editorial).

### 2. Formulate Structured Inquiries
Instead of guessing or starting to build blindly, present the analysis to the user and ask clarifying questions:
- **Core Objective**: "What would you like to build or modify based on this image?"
- **Design Alignment**: "Should we replicate the exact styling shown here, or adapt it to your active design system?"
- **Backend & Logic Gaps**: "Should the interactive elements connect to a database or external API? What mock data do you need?"
- **Responsive Behavior**: "How should this layout adapt on mobile screen sizes?"

## Strict Guardrails
- **NEVER** execute a code change or build a page based *only* on an uninstructed image.
- **NEVER** skip the interview. You must pause, report the visual analysis, and ask the user for guidance.
- **NEVER** use generic plain-text formatting for the interview; always format the output clearly using bullet points and simple Sinhala/English conversational tone.
