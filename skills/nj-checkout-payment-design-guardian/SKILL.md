---
name: nj-checkout-payment-design-guardian
description: Guidelines for cart flows, checkout, wallets, cashback, and subscription paywalls. Focuses on trust cues, payment methods (PayHere, card), and conversion optimization. Use when building ecommerce checkouts or paywall pages.
---

# Nisal Checkout & Payment Design Guardian

## Purpose
This skill establishes guidelines for designing high-converting, trust-oriented checkouts, carts, payment gateways, and subscription paywall pages to minimize cart abandonment and drive paid conversions.

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to design a "checkout page", "shopping cart", "payment flow", or "subscription paywall".
2. The user requests an integration with Stripe, PayHere, or custom wallets.

## 1. Cart & Checkout Optimization

### Rule 1: Order Summary Visibility
- Always display a clear, sticky summary of order totals (subtotal, shipping, discounts, tax, grand total) on the checkout page.
- Make the primary CTA button (e.g., `"Complete Purchase"`, `"Pay Now"`) prominent and high-contrast.

### Rule 2: Form Design & Errors
- Use inline field validation to alert users of errors immediately (e.g., invalid email, expired card date) rather than waiting for form submission.
- Group input fields logically (e.g., Shipping Address, Billing Address, Payment Info) and support auto-filling where possible.

---

## 2. Payment Gateway Integration (PayHere/Card)

- Display familiar payment partner logos (Visa, MasterCard, Amex, PayHere, local options) near the checkout form to establish trust.
- Provide a summary of security features (e.g., `"SSL Secure 256-bit Connection"`, `"PCI-DSS Compliant"`) near the payment CTA.
- If using PayHere, design smooth redirections with loading spinners so the user understands the transaction status.

---

## 3. Subscription Paywalls

### Rule 1: Visual Hierarchy in Pricing
- When displaying pricing plans (e.g., Free vs. Pro vs. Team), highlight the "Most Popular" or "Best Value" choice using a distinct border color, badge, or shadow.
- Provide a clear billing toggle at the top (e.g., `"Bill Monthly"` vs. `"Bill Yearly"`) with a clear highlight of the discount percentage (e.g., `"Save 33%"`).

### Rule 2: Feature Matrix Table
- Include a structured comparison table showing features side-by-side.
- Use clean checkmark and dash icons rather than cluttered text to represent active features.
- State standard legal terms clearly (e.g., `"Cancel anytime"`, `"14-day money-back guarantee"`).


## Strict Guardrails
- **NEVER** hide the final cost summary on the checkout page. It must be sticky and visible at all times during scroll.
- **NEVER** build a checkout form without inline validation for email formats and card data.
- **NEVER** present pricing tiers without highlighting a recommended or best-value option.

