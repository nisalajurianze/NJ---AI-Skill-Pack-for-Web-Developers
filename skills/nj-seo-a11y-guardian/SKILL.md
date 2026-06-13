---
name: nisal-seo-a11y-guardian
description: Guidelines for implementing flawless SEO metadata, JSON-LD structured data, Open Graph tags, and strict WCAG accessibility (a11y) standards (ARIA, keyboard navigation). Use when finalizing page layouts or structuring Next.js/React applications for search engines and screen readers.
---

## Trigger Signals
**ALWAYS AUTO-EXECUTE THIS SKILL WHEN:**
1. The user asks to "improve SEO", "add meta tags", "optimize for Google", or "add Rich Snippets".
2. The user requests to "fix accessibility", "make it screen reader friendly", or "improve WCAG compliance".
3. The user is finalizing a public-facing landing page, blog post, or e-commerce product page.

## Operational Instructions

### 1. Next.js Metadata & Open Graph
Always use the Next.js `generateMetadata` API or static `metadata` objects to ensure rich sharing cards on Twitter/LinkedIn/Facebook.

**Example Recipe:**
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium SaaS Platform | Your Brand',
  description: 'The ultimate tool for automating your workflow.',
  openGraph: {
    title: 'Premium SaaS Platform',
    description: 'The ultimate tool for automating your workflow.',
    url: 'https://yourbrand.com',
    siteName: 'Your Brand',
    images: [
      {
        url: 'https://yourbrand.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Brand Dashboard Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium SaaS Platform',
    description: 'The ultimate tool for automating your workflow.',
    images: ['https://yourbrand.com/og-image.jpg'],
  },
};
```

### 2. JSON-LD Structured Data
For dynamic content (products, articles, organizations), inject JSON-LD schema using a `<script>` tag.

**Example Recipe:**
```tsx
export default function ProductPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Premium Plan',
    image: 'https://yourbrand.com/product.jpg',
    description: 'Access to all premium features.',
    offers: {
      '@type': 'Offer',
      url: 'https://yourbrand.com/pricing',
      priceCurrency: 'USD',
      price: '49.99',
    },
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Page Content */}
    </section>
  );
}
```

### 3. Semantic HTML & Accessibility (a11y)
- **Buttons vs Links**: Use `<button>` for actions (submit, open modal). Use `<a>` (or `<Link>`) ONLY for navigation.
- **Images**: Every `<img>` MUST have an `alt` attribute. If it's purely decorative, use `alt=""`.
- **Forms**: Every `<input>` MUST have an associated `<label>` (using `htmlFor` matching the input's `id`).
- **ARIA**: Use `aria-hidden="true"` on decorative icons (e.g., Lucide icons) so screen readers skip them.

## Strict Guardrails
- **NEVER** leave an `alt` attribute empty unless the image is strictly decorative.
- **NEVER** use generic `<div>` tags for clickable interactive elements. Always use `<button>` with proper `focus-visible` styles.
- **NEVER** forget to include Open Graph (`og:image`, `og:title`) metadata on public marketing pages.
- **NEVER** disable browser focus rings (`outline: none`) without providing a custom, highly visible `:focus-visible` alternative.
