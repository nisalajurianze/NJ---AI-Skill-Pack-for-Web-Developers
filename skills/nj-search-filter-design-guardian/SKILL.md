---
name: nisal-search-filter-design-guardian
description: Guidelines for search bars, auto-suggestions, category filters, bottom sheet mobile filters, web sidebar filters, and sort controls. Use when designing search inputs, filter overlays, or listings pages.
---

# Nisal Search & Filter Design Guardian

## Purpose
This skill establishes conventions for designing user-friendly search interfaces and filter/sort controls across mobile and web platforms to help users locate content quickly and easily.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to build a "search bar", "auto-suggestion dropdown", or "search results page".
2. The user requests "category filters", "sorting controls", or a "faceted search".
3. You are designing any listing page (e.g., e-commerce products, blog articles, SaaS directories).

## 1. Search Bar Experience

- Place the search input prominently, typically at the top center/left of a page or inside the main navigation bar.
- Include a magnifying glass icon on the left of the input, and a clear button (e.g., an `"x"` icon) on the right when there is active text.
- Provide auto-suggestions, recent searches, and popular search tags as dropdown overlays when the input is focused.
- Ensure search query execution triggers instant feedback (like loading skeletons or results counts).

---

## 2. Filtering Controls

### Rule 1: Responsive Layouts
- **Mobile Devices**: Use a bottom sheet drawer that slides up when the filter trigger is clicked. This places filter fields (checkboxes, sliders, radios) within thumb reach.
- **Web/Desktop**: Use a left-hand collapsible sidebar for complex filter controls, or a horizontal chip list for simple, fast filters.

### Rule 2: Visual States
- Show a count badge next to active filter groups or the main filter button (e.g., `Filters (3)`).
- Provide a clear, visible `"Reset"` or `"Clear All"` button both inside the filter dialog and beside the active filter chips on the main list page.

---

## 3. Sorting Mechanics

- Present sort controls cleanly, either as a dropdown selector (web) or a bottom-sheet segmented control (mobile).
- Place the sort selector near the results count (e.g., `"124 results found â€” Sort by: Popularity"`).
- Keep sorting options concise (usually 3 to 5 options, e.g., Price: Low to High, Price: High to Low, Newest, Most Popular).


## Strict Guardrails
- **NEVER** build a search bar without a clear (`"x"`) button.
- **NEVER** put complex multi-select filters on a mobile layout without placing them in a bottom sheet.
- **NEVER** execute a search without providing instant visual feedback (e.g., skeleton loaders or a spinner).

