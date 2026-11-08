# BOIHUT - FRONTEND ARCHITECTURE & AI CONTEXT

> **For the AI:** This document contains the complete frontend architecture, Next.js App Router maps, custom Bengali UI components, API fetchers, and Tailwind configuration for the "Boihut" Bengali book e-commerce storefront. Read this to understand the established design system, typography, and existing sections before generating new pages or modifying the store.

---

## Directory Structure

```text
boihut-next
├── app
│   ├── actions
│   │   └── subscribe.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── shop
│       └── [slug]
│           ├── page - Copy.tsx
│           ├── page.tsx
│           └── ProductClient.tsx
├── components
│   ├── boihut
│   │   ├── AnnouncementBar.tsx
│   │   ├── AuthorSpotlight.tsx
│   │   ├── Bestsellers.tsx
│   │   ├── CategoryChips.tsx
│   │   ├── CollegeStreet.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero - Copy.tsx
│   │   ├── Hero.tsx
│   │   ├── Logo.tsx
│   │   └── ReadersCircle.tsx
│   └── ui
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── aspect-ratio.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── command.tsx
│       ├── context-menu.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── hover-card.tsx
│       ├── input-otp.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── resizable.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── sonner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toggle-group.tsx
│       ├── toggle.tsx
│       └── tooltip.tsx
├── hooks
│   └── use-mobile.tsx
└── lib
    ├── actions.ts
    ├── data.ts
    └── utils.ts
```



---

## Project Configurations (Tailwind, CSS Variables)

### `package.json`
```json
{
  "name": "boihut-next",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3001 -H 0.0.0.0",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.8",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@tanstack/react-query": "^5.101.1",
    "axios": "^1.21.0",
    "basic-ftp": "^6.2.6",
    "cheerio": "^1.2.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "dotenv": "^18.0.9",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.575.0",
    "mysql2": "^3.24.6",
    "next": "16.4.5",
    "react": "19.3.0",
    "react-day-picker": "^9.14.0",
    "react-dom": "19.3.0",
    "react-hook-form": "^7.71.2",
    "react-resizable-panels": "^4.6.5",
    "recharts": "^2.15.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.5.0",
    "tailwindcss-animate": "^1.0.7",
    "tw-animate-css": "^1.3.4",
    "vaul": "^1.1.2",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@tailwindcss/turbopack": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.4.5",
    "tailwindcss": "^4",
    "typescript": "^5"
  },
  "description": "",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/shubojitdas19-create/boihut-next.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/shubojitdas19-create/boihut-next/issues"
  },
  "homepage": "https://github.com/shubojitdas19-create/boihut-next#readme"
}

```

### `src/app/globals.css`
```css
@import "tailwindcss";
@import "tw-animate-css";
@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

/*
 * বইhut design system — "Alta & Ivory"
 *
 * Palette: warm ivory paper, parchment, alta red, ink black, mustard accent.
 * All colors use oklch. Bangla type uses Hind Siliguri / Tiro Bangla.
 */

:root {
  --radius: 0.625rem;
  /* Brand raw values */
  --mustard: oklch(0.76 0.13 78); /* #e2a83a */
  --mustard-soft: oklch(0.94 0.06 85);
  /* Ivory paper #faf5ec */
  --background: oklch(0.973 0.014 92);
  --foreground: oklch(0.185 0.005 75); /* ink black #1c1a17 */
  --card: oklch(0.99 0.008 92);
  --card-foreground: var(--foreground);
  --popover: oklch(0.99 0.008 92);
  --popover-foreground: var(--foreground);
  --primary: oklch(0.507 0.187 26); /* alta red #b8202e */
  --primary-foreground: oklch(0.985 0.008 92);
  --secondary: oklch(0.917 0.03 92); /* parchment #f0e6d2 */
  --secondary-foreground: var(--foreground);
  --muted: oklch(0.935 0.022 90);
  --muted-foreground: oklch(0.45 0.02 75);
  --accent: oklch(0.94 0.06 85);
  --accent-foreground: var(--foreground);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.985 0.008 92);
  --border: oklch(0.86 0.028 88);
  --input: oklch(0.86 0.028 88);
  --ring: oklch(0.607 0.17 26);
}

.dark {
  --background: oklch(0.17 0.006 75);
  --foreground: oklch(0.965 0.01 92);
  --card: oklch(0.215 0.008 80);
  --card-foreground: var(--foreground);
  --popover: oklch(0.215 0.008 80);
  --popover-foreground: var(--foreground);
  --primary: oklch(0.615 0.19 26);
  --primary-foreground: oklch(0.985 0.008 92);
  --secondary: oklch(0.26 0.014 85);
  --secondary-foreground: var(--foreground);
  --muted: oklch(0.26 0.014 85);
  --muted-foreground: oklch(0.72 0.02 90);
  --accent: oklch(0.32 0.03 85);
  --accent-foreground: var(--foreground);
  --destructive: oklch(0.704 0.191 22.216);
  --destructive-foreground: oklch(0.985 0.008 92);
  --border: oklch(1 0 0 / 12%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.45 0.15 26);
  --mustard: oklch(0.8 0.13 78);
  --mustard-soft: oklch(0.35 0.05 85);
}

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-mustard: var(--mustard);
  --color-mustard-soft: var(--mustard-soft);
  
  --font-display: var(--font-fraunces), ui-serif, Georgia, serif;
  --font-sans: var(--font-work), ui-sans-serif, system-ui, sans-serif;
  --font-bangla: var(--font-hind), var(--font-tiro), sans-serif;
  --font-bangla-serif: var(--font-tiro), var(--font-hind), serif;
}

@layer base {
  * {
    border-color: var(--color-border);
  }

  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
  }
}

/* ---------- Brand utilities ---------- */
@utility paper {
  background-color: var(--color-background);
  background-image: radial-gradient(
    oklch(0.185 0.005 75 / 0.035) 0.6px,
    transparent 0.6px
  );
  background-size: 22px 22px;
}

@utility kantha {
  height: 2px;
  background-image: linear-gradient(90deg, currentColor 0 6px, transparent 6px);
  background-size: 12px 2px;
  background-repeat: repeat-x;
}

@utility saree-paar {
  border: 1.5px solid var(--color-primary);
  box-shadow:
    inset 0 0 0 3px var(--color-background),
    inset 0 0 0 4.5px var(--color-primary);
}

/* Fades the hero skyline out at the top and sides so it melts into the paper */
.hero-skyline {
  -webkit-mask-image: linear-gradient(to top, black 55%, transparent),
    linear-gradient(to right, transparent, black 12%, black 88%, transparent);
  mask-image: linear-gradient(to top, black 55%, transparent),
    linear-gradient(to right, transparent, black 12%, black 88%, transparent);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
}

@media (min-width: 1024px) {
  .hero-skyline {
    -webkit-mask-image: linear-gradient(to top, black 55%, transparent),
      linear-gradient(to right, transparent 28%, black 55%, black 96%, transparent);
    mask-image: linear-gradient(to top, black 55%, transparent),
      linear-gradient(to right, transparent 28%, black 55%, black 96%, transparent);
  }
}

/* ---------- Motion ---------- */
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes drift {
  0%, 100% { transform: translateY(0) rotate(var(--drift-rotate, 0deg)); }
  50% { transform: translateY(-10px) rotate(var(--drift-rotate, 0deg)); }
}

@keyframes spin-slow {
  to { transform: rotate(360deg); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-fade-up {
  animation: fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.animate-drift {
  animation: drift 6s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 22s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-marquee, .animate-fade-up, .animate-drift, .animate-spin-slow {
    animation: none;
  }
}

```



---

## Core Logic, API Clients & Global Store

### File: `/src/lib/actions.ts`
```typescript
"use server";

// We don't import getBooks anymore. We fetch directly from the API using the new brand filter!
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
const STORE_ID = process.env.NEXT_PUBLIC_STORE_ID;

export async function fetchAuthorBooks(authorName: string, defaultTones: string[]) {
  if (!STORE_ID) return [];

  try {
    // This securely asks the API for exactly 3 books where the brand matches the Author's name
    const res = await fetch(
      `${API_URL}/storefront/products?storeId=${STORE_ID}&brand=${encodeURIComponent(authorName)}&limit=3`,
      { cache: 'no-store' } // We don't cache this so the tabs are always perfectly up-to-date
    );
    
    if (!res.ok) return [];
    
    const json = await res.json();
    if (!json.success || !json.data) return [];
    
    // Format the database response exactly how your beautiful UI expects it
    return json.data.map((b: any, i: number) => ({
      slug: b.slug,
      title: b.name.split('(')[0].trim(), // Clean up English text in brackets if any
      subtitle: b.tag || "বেস্টসেলার",
      price: `₹${b.basePrice}`,
      tone: defaultTones[i % 3],
      tag: "জনপ্রিয়",
      cover: b.media && b.media.length > 0 ? b.media[0].url : "https://via.placeholder.com/300x400?text=No+Cover"
    }));
  } catch (error) {
    console.error("Failed to fetch author books:", error);
    return [];
  }
}
```

### File: `/src/lib/data.ts`
```typescript
export type Book = {
  id: string; 
  slug: string;
  title: string;
  author: string;
  price: string;
  category: string;
  cover: string;
  tag?: string;
  description: string;
  pages: number;
  publisher: string;
  isbn: string;
  images: string[];
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
const STORE_ID = process.env.NEXT_PUBLIC_STORE_ID;

// Helper to transform your SaaS backend product format into the Book format the UI expects
function transformProduct(product: any): Book {
  const specs = product.specifications || [];
  const getSpec = (label: string) => specs.find((s: any) => s.label === label)?.value || "N/A";
  
  const coverImg = product.media && product.media.length > 0 
    ? product.media.sort((a: any, b: any) => a.sortOrder - b.sortOrder)[0].url 
    : "/images/placeholder.jpg";

  return {
    id: product.id,
    slug: product.slug,
    title: product.name,
    author: product.brand || "Unknown Author", 
    price: `₹${product.basePrice}`,
    category: product.category?.name || "Uncategorized",
    cover: coverImg,
    tag: product.isFeatured ? "Bestseller" : undefined,
    description: product.description || "",
    pages: parseInt(getSpec("Pages")) || 0,
    publisher: getSpec("Publisher") || "বইhut প্রকাশনী",
    isbn: getSpec("ISBN") || "N/A",
    images: product.media?.map((m: any) => m.url) || [],
  };
}

// OPTIMIZED: Fetch active products with an optional limit (defaults to 50 to prevent 45MB payloads)
export async function getBooks(limit: number = 50): Promise<Book[]> {
  if (!STORE_ID) {
    console.error("STORE_ID is not defined in .env.local");
    return [];
  }

  try {
    // We append the limit to the API call so the backend only sends a small slice of data
    const res = await fetch(`${API_URL}/storefront/products?storeId=${STORE_ID}&limit=${limit}`, {
      next: { revalidate: 60 } 
    });
    
    if (!res.ok) return [];
    
    const json = await res.json();
    if (!json.success) return [];
    
    return json.data.map(transformProduct);
  } catch (error) {
    console.error("Failed to fetch books from backend:", error);
    return [];
  }
}

// OPTIMIZED: Fetch exactly ONE product from the backend API using its slug
// This prevents downloading 20,000 books just to view a single product page!
export async function getBookBySlug(slug: string): Promise<Book | undefined> {
  if (!STORE_ID || !slug) return undefined;

  try {
    // Securely ask the API for JUST this one slug using the query parameter we added
    const res = await fetch(`${API_URL}/storefront/products?storeId=${STORE_ID}&slug=${slug}`, {
      next: { revalidate: 60 } // Cache the single book for 60 seconds
    });

    if (!res.ok) return undefined;

    const json = await res.json();
    
    // Because your backend uses Drizzle's findMany(), it returns an array.
    // We grab the first (and only) item in that array: json.data[0]
    if (!json.success || !json.data || json.data.length === 0) return undefined;

    return transformProduct(json.data[0]);
  } catch (error) {
    console.error(`Failed to fetch book slug ${slug}:`, error);
    return undefined;
  }
}
```

### File: `/src/lib/utils.ts`
```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

```



---

## Next.js App Router (Pages & Layouts)

### Route: `/ (Homepage)`
*File: /src/app/layout.tsx*
```tsx
import type { Metadata } from "next";
import { Fraunces, Work_Sans, Tiro_Bangla, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work",
  subsets: ["latin"],
});

const tiroBangla = Tiro_Bangla({
  weight: "400",
  variable: "--font-tiro",
  subsets: ["bengali"],
});

const hindSiliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind",
  subsets: ["bengali"],
});

export const metadata: Metadata = {
  title: "বইhut — Kolkata reads here | বই-এর নতুন ঠিকানা",
  description: "Kolkata's own online bookstore. New arrivals, Bangla classics, poetry, thrillers and kids' books — hand-picked, genuine, delivered fast. পড়ুন, ভাবুন।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} ${tiroBangla.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

```

### Route: `/ (Homepage)`
*File: /src/app/page.tsx*
```tsx
"use client";

import { AnnouncementBar } from "@/components/boihut/AnnouncementBar";
import { Header } from "@/components/boihut/Header";
import { Hero } from "@/components/boihut/Hero";
import { CategoryChips } from "@/components/boihut/CategoryChips"; // Import here
import { Bestsellers } from "@/components/boihut/Bestsellers";
import { CollegeStreet } from "@/components/boihut/CollegeStreet";
import { AuthorSpotlight } from "@/components/boihut/AuthorSpotlight";
import { ReadersCircle } from "@/components/boihut/ReadersCircle";
import { Footer } from "@/components/boihut/Footer";

export default function Home() {
  return (
    <div className="paper flex min-h-screen flex-col pb-16 md:pb-0">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryChips /> {/* Added right here */}
        <Bestsellers />
        <CollegeStreet />
        <AuthorSpotlight />
        <ReadersCircle />
      </main>
      <Footer />
    </div>
  );
}

```

### Route: `/shop/[slug]`
*File: /src/app/shop/[slug]/page.tsx*
```tsx
import { getBookBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Await the network request on the server
  const book = await getBookBySlug(resolvedParams.slug);

  if (!book) {
    notFound();
  }

  // Pass the loaded data to the interactive UI
  return <ProductClient book={book} />;
}
```



---

## Core UI Components

### Component: `/src/components/boihut/AnnouncementBar.tsx`
```tsx
const MESSAGES = [
  { en: "Free delivery across Kolkata above ₹599", bn: "কলকাতায় ফ্রি ডেলিভারি" },
  { en: "Genuine books, hand-checked before they ship", bn: "আসল বই, নিশ্চিত" },
  { en: "New arrivals every week", bn: "প্রতি সপ্তাহে নতুন বই" },
];

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      {/* Track duplicated once; translating -50% makes the loop seamless */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-0 py-2">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {MESSAGES.map((m, i) => (
                <div key={i} className="flex shrink-0 items-center">
                  <span className="font-bangla text-[13px] font-medium text-primary-foreground/85">
                    {m.bn}
                  </span>
                  <span className="mx-2 text-[13px] opacity-40">•</span>
                  <span className="text-[13px] font-medium tracking-wide">
                    {m.en}
                  </span>
                  <span className="mx-4 text-[13px] opacity-40">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

```

### Component: `/src/components/boihut/AuthorSpotlight.tsx`
```tsx
"use client";

import { ArrowRight, ArrowUpRight, Quote, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, type KeyboardEvent } from "react";
import { fetchAuthorBooks } from "@/lib/actions";

type CoverTone = "alta" | "ink" | "mustard" | "cream";

type Edition = {
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  tone: CoverTone;
  tag: string;
  cover: string;
};

type Author = {
  id: string;
  bn: string;
  en: string;
  years: string;
  craft: string;
  portrait: string;
  portraitAlt: string;
  quote: string;
  quoteLabel: string;
  quoteSource: string;
  bio: string;
  defaultTones: string[];
};

const AUTHORS: Author[] = [
  {
    id: "tagore",
    bn: "রবীন্দ্রনাথ ঠাকুর",
    en: "Rabindranath Tagore",
    years: "১৮৬১ – ১৯৪১",
    craft: "কবি · গল্পকার · গানের রচয়িতা",
    portrait: "/authors/tagore.png",
    portraitAlt: "Hand-inked sepia portrait of Rabindranath Tagore",
    quote: "চিত্ত যেথা ভয়শূন্য, উচ্চ যেথা শির",
    quoteLabel: "Where the mind is without fear",
    quoteSource: "গীতাঞ্জলি, ৩৫",
    bio: "The first non-European Nobel laureate in Literature, and the voice every Bengali home quotes without noticing. If you only own one shelf of Bangla, begin here.",
    defaultTones: ["alta", "cream", "ink"],
  },
  {
    id: "ray",
    bn: "সত্যজিৎ রায়",
    en: "Satyajit Ray",
    years: "১৯২১ – ১৯৯২",
    craft: "চলচ্চিত্রকার · লেখক · অলঙ্করণশিল্পী",
    portrait: "/authors/ray.png",
    portraitAlt: "Hand-inked sepia portrait of Satyajit Ray",
    quote: "ফেলুদা আর শঙ্কুর হাত ধরে বড় হয়েছে গোটা একটা প্রজন্ম। আমরা শুধু সেই ঘরানাটা বাঁচিয়ে রাখছি।",
    quoteLabel: "A note from our shelf",
    quoteSource: "বইয়ের হাট সম্পাদকমণ্ডলী",
    bio: "Film-maker of Pather Panchali, and also the writer who gave Bengal Feluda, Professor Shanku and the Sandesh generation.",
    defaultTones: ["mustard", "ink", "cream"],
  },
  {
    id: "sarat",
    bn: "শরৎচন্দ্র চট্টোপাধ্যায়",
    en: "Sarat Chandra Chattopadhyay",
    years: "১৮৭৬ – ১৯৩৮",
    craft: "ঔপন্যাসিক · গল্পকার",
    portrait: "/authors/sarat.png", 
    portraitAlt: "Hand-inked sepia portrait of Sarat Chandra Chattopadhyay",
    quote: "বড় প্রেম শুধু কাছেই টানে না, ইহা দূরেও ঠেলিয়া দেয়।",
    quoteLabel: "The psychology of love",
    quoteSource: "শ্রীকান্ত",
    bio: "The undisputed master of human emotions and social narratives. His stories of love, sacrifice, and societal rebellion remain the most adapted literary works in Indian cinema history.",
    defaultTones: ["alta", "cream", "ink"],
  },
  {
    id: "nazrul",
    bn: "কাজী নজরুল ইসলাম",
    en: "Kazi Nazrul Islam",
    years: "১৮৯৯ – ১৯৭৬",
    craft: "বিদ্রোহী কবি · সুরকার · ঔপন্যাসিক",
    portrait: "/authors/nazrul.png",
    portraitAlt: "Portrait of Kazi Nazrul Islam",
    quote: "গাহি সাম্যের গান— মানুষের চেয়ে বড় কিছু নাই, নহে কিছু মহীয়ান!",
    quoteLabel: "The song of equality",
    quoteSource: "সাম্যবাদী",
    bio: "The Rebel Poet who defied empires with his pen. His fiery verses and timeless melodies transcend borders, making him the eternal voice of revolution and love in Bengal.",
    defaultTones: ["alta", "mustard", "ink"],
  },
  {
    id: "premchand",
    bn: "মুন্সী প্রেমচাঁদ",
    en: "Munshi Premchand",
    years: "১৮৮০ – ১৯৩৬",
    craft: "উপন্যাস সম্রাট · গল্পকার",
    portrait: "/authors/premchand.png",
    portraitAlt: "Portrait of Munshi Premchand",
    quote: "যৌবন হলো একটা উন্মাদনা, যা কেবল নিজের শক্তি আর রূপটাই দেখে।",
    quoteLabel: "On human nature",
    quoteSource: "গোদান (Godaan)",
    bio: "Known as the 'Upanyas Samrat' (Emperor of Novels) of Hindi-Urdu literature. His piercing social commentaries and deeply empathetic portrayals of rural India resonate across the entire subcontinent.",
    defaultTones: ["cream", "alta", "mustard"],
  },
  {
    id: "marquez",
    bn: "গ্যাব্রিয়েল গার্সিয়া মার্কেজ",
    en: "Gabriel García Márquez",
    years: "১৯২৭ – ২০১৪",
    craft: "ঔপন্যাসিক · ম্যাজিক রিয়েলিজমের জনক",
    portrait: "/authors/marquez.png",
    portraitAlt: "Portrait of Gabriel Garcia Marquez",
    quote: "জীবনের অর্থ এটা নয় যে আপনি কী বেঁচেছেন, বরং আপনি কী মনে রেখেছেন এবং কীভাবে তা বর্ণনা করেছেন।",
    quoteLabel: "Living to tell the tale",
    quoteSource: "আত্মজীবনী",
    bio: "The Colombian Nobel laureate who introduced the world to Macondo. His pioneering magic realism found a profound, spiritual home among Bengali readers who share his love for myth and memory.",
    defaultTones: ["ink", "cream", "alta"],
  },
];

const TONES: Record<CoverTone, { shell: string; rule: string; sub: string }> = {
  alta: { shell: "bg-primary text-primary-foreground", rule: "border-primary-foreground/50", sub: "text-primary-foreground/80" },
  ink: { shell: "bg-foreground text-background", rule: "border-mustard/70", sub: "text-background/70" },
  mustard: { shell: "bg-mustard text-foreground", rule: "border-foreground/60", sub: "text-foreground/70" },
  cream: { shell: "bg-[#f7efdd] text-foreground", rule: "border-primary", sub: "text-primary" },
};

function BookCover({ edition, author }: { edition: Edition; author: Author }) {
  const tone = TONES[edition.tone as CoverTone];
  return (
    <div
      className={`relative flex aspect-[3/4] w-full flex-col items-center justify-between overflow-hidden rounded-[3px] p-2.5 shadow-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:shadow-xl sm:p-3.5 ${tone.shell}`}
    >
      {edition.cover && edition.cover !== "https://via.placeholder.com/300x400?text=No+Cover" && (
         <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply grayscale">
            <Image src={edition.cover} alt="" fill sizes="140px" className="object-cover" />
         </div>
      )}
      
      <span className="pointer-events-none absolute inset-1.5 z-10 border sm:inset-2" aria-hidden="true" style={{ borderColor: "currentColor", opacity: 0.35 }} />
      <span className={`pointer-events-none absolute inset-2.5 z-10 border sm:inset-3.5 ${tone.rule}`} aria-hidden="true" />
      <span className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1.5 bg-black/20" aria-hidden="true" />

      <p className={`relative z-20 mt-2 text-center font-bangla text-[9px] font-semibold leading-tight sm:mt-3 sm:text-[11px] ${tone.sub}`}>{author.bn}</p>

      <div className="relative z-20 flex flex-col items-center gap-1.5 px-1 text-center sm:gap-2">
        <h4 className="font-bangla-serif text-[15px] font-bold leading-[1.15] text-balance sm:text-xl lg:text-2xl drop-shadow-md">{edition.title}</h4>
        <span className="size-1.5 rotate-45 bg-current opacity-80 sm:size-2" aria-hidden="true" />
      </div>

      <p className={`relative z-20 mb-2 text-center font-display text-[9px] italic leading-tight sm:mb-3 sm:text-xs ${tone.sub} line-clamp-1`}>{edition.subtitle}</p>
    </div>
  );
}

export function AuthorSpotlight() {
  const [activeId, setActiveId] = useState(AUTHORS[0].id);
  const [bookCache, setBookCache] = useState<Record<string, Edition[]>>({});
  const [isLoading, setIsLoading] = useState(false); // Clean loading state instead of transition
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  
  const index = AUTHORS.findIndex((a) => a.id === activeId);
  const author = AUTHORS[index];

  // Bulletproof fetcher
  useEffect(() => {
    // If the books are already in the cache, don't fetch them again!
    if (bookCache[author.bn]) return;

    let isMounted = true;
    setIsLoading(true);

    fetchAuthorBooks(author.bn, author.defaultTones)
      .then((books) => {
        if (isMounted) {
          setBookCache((prev) => ({ ...prev, [author.bn]: books as Edition[] }));
        }
      })
      .catch((error) => {
        console.error("Failed to load author books:", error);
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => { isMounted = false; };
  }, [activeId]); // Trigger fetch only when the active tab changes

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, current: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = (current + (event.key === "ArrowRight" ? 1 : -1) + AUTHORS.length) % AUTHORS.length;
    setActiveId(AUTHORS[next].id);
    tabRefs.current[next]?.focus();
  };

  const currentBooks = bookCache[author.bn] || [];
  // Only show the spinner if it's currently loading AND we have no cached books for this author
  const showSpinner = isLoading && currentBooks.length === 0;

  return (
    <section className="paper relative overflow-hidden px-4 pt-8 pb-4 sm:px-8 sm:pt-12 sm:pb-6 lg:px-12 lg:pt-14 lg:pb-8 xl:px-20" aria-labelledby="author-spotlight-heading">
      <div className="pointer-events-none absolute -right-24 top-24 size-80 rounded-full border-[18px] border-primary/[0.06]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 bottom-16 size-64 rounded-full bg-mustard/15 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1800px]">
        
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="kantha w-10 text-primary opacity-70" aria-hidden="true" />
            <p className="font-display text-lg font-bold italic tracking-wide text-primary sm:text-xl">Author Spotlight</p>
            <span className="kantha w-10 rotate-180 text-primary opacity-70" aria-hidden="true" />
          </div>
          <h2 id="author-spotlight-heading" className="font-bangla text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            কলমের কারিগর
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-bangla text-base font-medium leading-relaxed text-foreground/80 sm:text-lg">
            যাঁদের লেখা ছাড়া বাংলা বইয়ের তাক অসম্পূর্ণ। একজন লেখক, একটি উক্তি, আর তাঁর সেরা সংস্করণগুলো।
          </p>
        </div>

        <div role="tablist" aria-label="Featured authors" className="mt-8 flex snap-x snap-mandatory flex-nowrap gap-2 overflow-x-auto pb-4 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {AUTHORS.map((a, i) => {
            const selected = a.id === activeId;
            return (
              <button
                key={a.id}
                ref={(el) => { tabRefs.current[i] = el; }}
                id={`author-tab-${a.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="author-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(a.id)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className={`flex shrink-0 snap-center items-center gap-2.5 rounded-full border py-1.5 pl-1.5 pr-4 font-bangla text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-95 sm:text-base ${
                  selected
                    ? "border-primary bg-primary text-primary-foreground shadow-md"
                    : "border-border bg-background/70 text-foreground/80 hover:border-primary/50 hover:text-primary"
                }`}
              >
                <span className="relative size-8 shrink-0 overflow-hidden rounded-full border border-border/60 bg-secondary sm:size-9">
                  <Image src={a.portrait} alt="" fill sizes="36px" className="object-cover object-[50%_25%]" />
                </span>
                {a.bn}
              </button>
            );
          })}
        </div>

        <div
          key={author.id}
          id="author-panel"
          role="tabpanel"
          aria-labelledby={`author-tab-${author.id}`}
          className="mt-10 grid animate-fade-up items-center gap-8 lg:mt-12 lg:grid-cols-[minmax(0,5.5fr)_minmax(0,6.5fr)] lg:gap-16 xl:gap-20"
        >
          <div className="relative mx-auto w-full max-w-[260px] sm:max-w-sm lg:max-w-[420px]">
            <div className="absolute -bottom-4 -right-4 size-full rounded-sm bg-primary/90 sm:-bottom-5 sm:-right-5" aria-hidden="true" />
            <div className="absolute -left-3 -top-3 size-full rounded-sm border border-mustard sm:-left-4 sm:-top-4" aria-hidden="true" />
            <figure className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary shadow-xl saree-paar">
              <Image src={author.portrait} alt={author.portraitAlt} fill priority={index === 0} sizes="(min-width: 1024px) 26rem, 90vw" className="object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 via-foreground/50 to-transparent px-4 pb-4 pt-12 text-background">
                <span className="block font-bangla text-xl font-bold leading-tight sm:text-2xl">{author.bn}</span>
                <span className="mt-0.5 flex items-center justify-between gap-3 text-xs text-background/85 sm:text-sm">
                  <span className="font-display italic">{author.en}</span>
                  <span className="font-bangla">{author.years}</span>
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="min-w-0">
            <p className="font-bangla text-sm font-bold tracking-wide text-primary">{author.craft}</p>

            <blockquote className="relative mt-8 sm:mt-10">
              <Quote className="absolute -top-7 left-0 size-7 rotate-180 fill-mustard/60 text-mustard/60 sm:-top-9 sm:size-9" aria-hidden="true" />
              <p className="relative font-bangla-serif text-2xl font-bold leading-snug text-foreground text-balance sm:text-3xl">{author.quote}</p>
              <footer className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                <span className="kantha w-8 text-primary" aria-hidden="true" />
                <cite className="font-bangla not-italic font-semibold text-foreground/80">{author.quoteSource}</cite>
                <span className="font-display italic">{author.quoteLabel}</span>
              </footer>
            </blockquote>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80">{author.bio}</p>

            <div className="mt-8 flex items-end justify-between gap-4 border-t border-border pt-5">
              <h3 className="flex items-center gap-2 font-bangla text-lg font-bold text-foreground sm:text-xl">
                সেরা বিক্রিত সংস্করণ
                {showSpinner && <Loader2 className="size-4 animate-spin text-primary/60" />}
              </h3>
              <Link
                href={`/shop?brand=${author.bn}`}
                className="group inline-flex items-center gap-1.5 font-bangla text-sm font-bold text-primary underline-offset-4 hover:underline"
              >
                সব বই দেখুন
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="min-h-[220px]">
              {showSpinner ? (
                <div className="flex h-full items-center justify-center pt-10">
                   <Loader2 className="size-6 animate-spin text-primary/50" />
                </div>
              ) : currentBooks.length === 0 ? (
                <div className="flex h-full items-center justify-center pt-10 font-bangla text-sm text-muted-foreground">
                   এই লেখকের কোনো বই পাওয়া যায়নি।
                </div>
              ) : (
                <ul className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {currentBooks.map((edition) => (
                    <li key={edition.slug} className="min-w-[140px] shrink-0 snap-start sm:min-w-0">
                      <Link href={`/shop/${edition.slug}`} className="group block rounded-sm outline-offset-4" aria-label={`${edition.title}, ${author.bn}, ${edition.price}`}>
                        <BookCover edition={edition} author={author} />
                        <div className="pt-3">
                          <p className="truncate font-bangla text-[11px] font-bold text-primary">{edition.tag}</p>
                          <p className="mt-0.5 flex items-center justify-between gap-1 font-bangla text-sm font-bold text-foreground">
                            {edition.price}
                            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Component: `/src/components/boihut/Bestsellers.tsx`
```tsx
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { getBooks } from "@/lib/data"; // Reverted back to your correct API fetcher!

// Helper to convert standard numbers to Bengali numerals
const toBengaliNumeral = (num: number) => {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().padStart(2, '0').split('').map(digit => bengaliDigits[parseInt(digit)]).join('');
};

export async function Bestsellers() {
  // FAST SERVER-SIDE FETCH: This runs instantly on the server.
  // No more "useEffect" lag, waterfalls, or loading spinners!
  const allBooks = await getBooks();
  
  // Get the 12 most recent books for the grid
  const latestBooks = allBooks.slice(0, 12);

  return (
    <section className="relative overflow-hidden bg-[#f3ecdf] px-4 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10 xl:px-20" aria-labelledby="bestsellers-heading">
      
      {/* Background Motifs */}
      <div className="pointer-events-none absolute -left-32 top-20 size-72 rounded-full border border-primary/10 bg-primary/[0.03]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-12 size-80 rounded-full border-[18px] border-[#e8785d]/10" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[12%] top-12 hidden text-6xl text-primary/10 lg:block" aria-hidden="true">✦</div>

      <div className="relative mx-auto flex w-full max-w-[1800px] flex-col justify-center">
        
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="kantha w-10 text-primary opacity-70" aria-hidden="true" />
            <p className="font-display italic text-lg sm:text-xl font-bold tracking-wide text-primary">Editor's Choice</p>
            <span className="kantha w-10 rotate-180 text-primary opacity-70" aria-hidden="true" />
          </div>
          
          <h2 id="bestsellers-heading" className="font-bangla text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            এই মুহূর্তের বেস্টসেলার
          </h2>
          
          <p className="mx-auto mt-3 max-w-xl font-bangla text-base font-medium leading-relaxed text-foreground/85 sm:text-lg">
            বর্তমান সময়ের সবচেয়ে জনপ্রিয় ও আলোচিত বইয়ের সংগ্রহ। আপনার পরবর্তী প্রিয় বইটি বেছে নিন এখান থেকেই।
          </p>
        </div>

        {/* Static Tabs (Rendered visually to match your exact UI) */}
        <div className="mt-7 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center" role="tablist" aria-label="বইয়ের বিভাগ">
          {["সব বই", "বাংলা সাহিত্য", "থ্রিলার", "কবিতা", "মাঙ্গা", "আত্মোন্নতি", "শিশুদের বই"].map((filter) => (
            <div 
              key={filter}
              className={`shrink-0 rounded-full border px-4 py-2 font-bangla text-sm font-semibold cursor-default ${
                filter === "সব বই"
                  ? "border-primary bg-primary text-primary-foreground shadow-md" 
                  : "border-border/80 bg-background/60 text-muted-foreground"
              }`}
            >
              {filter}
            </div>
          ))}
        </div>

        {/* Auto-fill Grid */}
        {latestBooks.length === 0 ? (
          <div className="mt-16 text-center pb-10 font-bangla text-muted-foreground">
            এই বিভাগে কোনো বই পাওয়া যায়নি।
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:gap-6 lg:gap-8">
            {latestBooks.map((book, index) => (
              <article key={book.slug || index} className="group relative min-w-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-lg saree-paar">
                  <img 
                    src={book.cover} 
                    alt={`${book.title} — ${book.author}`} 
                    width={300} 
                    height={400} 
                    loading={index < 4 ? "eager" : "lazy"} // Eager load the first row for instant paint speeds
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  <span className="absolute left-2 top-2 z-10 rounded-full bg-background/95 px-2 py-1 font-mono text-[10px] font-bold text-primary shadow-sm border border-border/40">
                    #{toBengaliNumeral(index + 1)}
                  </span>
                  
                  <button 
                    type="button" 
                    aria-label={`${book.title} পছন্দের তালিকায় রাখুন`} 
                    className="absolute right-2 top-2 z-20 grid size-8 place-items-center rounded-full bg-background/90 text-foreground/70 opacity-0 shadow-sm transition-all duration-300 hover:text-primary hover:scale-110 group-hover:opacity-100 active:scale-95 border border-border/40"
                  >
                    <Heart className="size-3.5" />
                  </button>
                </div>

                <div className="pt-3">
                  <p className="mb-1 flex items-center gap-1 font-bangla text-[11px] font-bold text-primary">
                    <Sparkles className="size-3" />
                    {book.tag || "নতুন সংযোজন"}
                  </p>
                  <h3 className="font-bangla truncate text-base font-bold text-foreground">
                    <Link href={`/shop/${book.slug}`} className="hover:text-primary transition-colors focus:outline-none before:absolute before:inset-0 before:z-10">
                      {book.title}
                    </Link>
                  </h3>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">{book.author}</p>
                  <p className="mt-2 text-sm font-bold text-foreground">{book.price}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Explore All Button */}
        <div className="mt-10 flex justify-center">
          <Link 
            href="/shop" 
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-sans text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-primary/90 hover:shadow-lg active:scale-95"
          >
            Explore all bestsellers 
            <ArrowRight className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
```

### Component: `/src/components/boihut/CategoryChips.tsx`
```tsx
const CATEGORIES = [
  { name: "বাংলা সাহিত্য", slug: "Bangla Sahitya", image: "/category-bangla-v2.png" },
  { name: "থ্রিলার", slug: "Thriller", image: "/category-thriller-v2.png" },
  { name: "কবিতা", slug: "Poetry", image: "/category-poetry-v2.png" },
  { name: "মাঙ্গা ও কমিকস", slug: "Manga & Comics", image: "/category-manga-v2.png" },
  { name: "আত্মোন্নতি", slug: "Self-growth", image: "/category-growth-v2.png" },
  { name: "শিশুদের বই", slug: "Kids", image: "/category-kids-v2.png" },
  { name: "ইংরেজি উপন্যাস", slug: "English Fiction", image: "/category-fiction-v2.png" },
];

export function CategoryChips() {
  return (
    <section
      className="relative isolate overflow-hidden border-y border-border/70 bg-[#f3ecdf] px-4 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-20 2xl:px-24"
      style={{
        backgroundImage:
          "radial-gradient(circle at 12% 22%, rgba(157, 91, 54, 0.14) 0 1px, transparent 1.5px), radial-gradient(circle at 87% 78%, rgba(157, 91, 54, 0.11) 0 1px, transparent 1.5px), radial-gradient(ellipse at center, rgba(255,255,255,0.5), transparent 65%)",
        backgroundSize: "24px 24px, 30px 30px, 100% 100%",
      }}
      aria-labelledby="category-heading"
    >
      <span className="pointer-events-none absolute -left-24 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full border border-primary/10 lg:block" aria-hidden="true" />
      <span className="pointer-events-none absolute -right-20 top-16 hidden h-44 w-44 rotate-12 rounded-[2rem] border border-primary/10 lg:block" aria-hidden="true" />
      
      <div className="relative z-10 mx-auto w-full max-w-[1800px] text-center">
        <p className="font-bangla text-sm font-semibold tracking-[0.14em] text-primary">
          আপনার পাঠের মেজাজ
        </p>
        <h2
          id="category-heading"
          className="mt-2 font-bangla-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          মনের মতো বই খুঁজুন
        </h2>
        <div className="mx-auto mt-4 h-px w-12 bg-primary/60" aria-hidden="true" />

        <div className="relative mt-7 after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:hidden after:w-20 after:bg-gradient-to-l after:from-[#f3ecdf] after:to-transparent lg:after:block">
          <nav
            aria-label="বিষয় অনুযায়ী বই দেখুন"
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain px-3 pb-3 pt-2 touch-pan-x scrollbar-width-none [&::-webkit-scrollbar]:hidden sm:justify-center sm:gap-7 sm:px-6 lg:gap-8"
          >
            {CATEGORIES.map((category, index) => (
              <a
                key={category.slug}
                href={`/shop?category=${encodeURIComponent(category.slug)}`}
                className="group animate-chip-in flex w-[128px] shrink-0 snap-start flex-col items-center gap-3 rounded-2xl p-1 text-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:w-[144px] lg:w-[156px]"
                style={{ animationDelay: `${(CATEGORIES.length - index - 1) * 85}ms` }}
              >
                <span className="relative block aspect-square w-[116px] overflow-hidden rounded-full border-4 border-[#f8f1e5] bg-[#e8d6bb] shadow-[0_10px_24px_rgba(93,55,35,0.16)] ring-1 ring-primary/20 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:ring-2 group-hover:ring-primary/60 group-active:scale-95 sm:w-[132px] lg:w-[144px]">
                  <img
                    src={category.image}
                    alt={`${category.name} বিভাগ`}
                    className="h-full w-full object-cover saturate-[0.88] transition duration-500 ease-out group-hover:scale-110 group-hover:saturate-100"
                  />
                  <span className="absolute inset-0 rounded-full bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" aria-hidden="true" />
                </span>
                <span className="font-bangla text-base font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                  {category.name}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
```

### Component: `/src/components/boihut/CollegeStreet.tsx`
```tsx
"use client";

import { ArrowRight, BookOpen, Coffee, PackageCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Landmark = {
  id: string;
  bn: string;
  en: string;
  line: string;
  /** Position of the pin as a percentage of the illustration */
  x: number;
  y: number;
};

const LANDMARKS: Landmark[] = [
  { id: "temple", bn: "দক্ষিণেশ্বর", en: "The Temple", line: "Start the day with blessings, end it with a brand new paperback.", x: 12.5, y: 27 },
  { id: "rickshaw", bn: "হাতে টানা রিকশা", en: "The Rickshaw", line: "The last mile, pulled the old Kolkata way. Slow, steady, always arriving.", x: 25.5, y: 77 },
  { id: "tram", bn: "ট্রাম", en: "The Tram", line: "The slowest ride in town and the best reading time. One window seat, one chapter.", x: 41.5, y: 66 },
  { id: "bridge", bn: "হাওড়া ব্রিজ", en: "The Bridge", line: "Cross the bridge, cross the genres. Every shelf is a new shore.", x: 47.5, y: 52 },
  { id: "memorial", bn: "ভিক্টোরিয়া", en: "The Memorial", line: "Because every good book deserves a grand entrance.", x: 61, y: 54 },
  { id: "minar", bn: "শহিদ মিনার", en: "The Minar", line: "Tall tales, taller stacks. The city's skyline has a reading list too.", x: 66.5, y: 22 },
  { id: "taxi", bn: "হলুদ ট্যাক্সি", en: "The Yellow Cab", line: "Wrapped in kraft paper, tied with a string, rushed through the traffic.", x: 83, y: 79 },
  { id: "clock", bn: "ঘড়ি-ঘর", en: "The Clock Tower", line: "Adda starts the moment the clock strikes chai o'clock.", x: 88.5, y: 28 },
];

// Refined Bengali titles while keeping English descriptions intact
const PILLARS = [
  { icon: BookOpen, title: "বই পাড়ার আমেজ", text: "Curated the way a College Street stallholder would, by heart and not by algorithm." },
  { icon: Coffee, title: "আড্ডার পরম সঙ্গী", text: "Cult classics, new voices and Bangla favourites, picked to be argued over with chai." },
  { icon: PackageCheck, title: "সরাসরি দোরগোড়ায়", text: "Packed with care, delivered to your doorstep. The stall comes to you." },
];

const TICKER = ["বই পাড়া", "চা", "আড্ডা", "ট্রাম", "কফি হাউস", "বইমেলা", "ফুচকা", "ভোরের কাগজ"];

export function CollegeStreet() {
  const [activeId, setActiveId] = useState(LANDMARKS[2].id);
  const [autoPlay, setAutoPlay] = useState(true);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const active = LANDMARKS.find((l) => l.id === activeId) ?? LANDMARKS[0];

  useEffect(() => {
    if (!autoPlay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveId((current) => {
        const index = LANDMARKS.findIndex((l) => l.id === current);
        return LANDMARKS[(index + 1) % LANDMARKS.length].id;
      });
    }, 4500);
    return () => window.clearInterval(timer);
  }, [autoPlay]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || scroller.scrollWidth <= scroller.clientWidth) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scroller.scrollTo({
      left: (active.x / 100) * scroller.scrollWidth - scroller.clientWidth / 2,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [active]);

  const select = (id: string) => {
    setAutoPlay(false);
    setActiveId(id);
  };

  return (
    <section
      className="relative overflow-hidden bg-foreground text-background"
      aria-labelledby="college-street-heading"
    >
      {/* Ambient glows and motifs */}
      <div className="pointer-events-none absolute -left-40 top-10 size-[28rem] rounded-full bg-mustard/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 bottom-24 size-[26rem] rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute left-[8%] top-16 hidden font-display text-7xl text-mustard/15 lg:block" aria-hidden="true">✦</div>
      <div className="pointer-events-none absolute right-[10%] top-24 hidden font-display text-5xl text-mustard/15 lg:block" aria-hidden="true">✦</div>

      {/* Reduced top padding: pt-8 instead of pt-12 */}
      <div className="relative mx-auto w-full max-w-[1800px] px-4 pb-0 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pt-12 xl:px-20">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="kantha w-10 text-mustard opacity-80" aria-hidden="true" />
            <p className="font-display text-lg font-bold italic tracking-wide text-mustard sm:text-xl">Our story, from Boi Para</p>
            <span className="kantha w-10 rotate-180 text-mustard opacity-80" aria-hidden="true" />
          </div>

          <h2
            id="college-street-heading"
            className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-background sm:text-6xl lg:text-7xl"
          >
            College Street,{" "}
            <span className="relative inline-block italic text-mustard">
              delivered.
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-primary"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 8 C 30 1, 55 11, 85 5 S 150 2, 198 7" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          {/* Refined Bengali subtitles */}
          <p className="mt-5 font-bangla text-xl font-semibold text-background sm:text-2xl">
            কলেজ স্ট্রিটের নস্টালজিয়া, এবার আপনার দোরগোড়ায়
          </p>
          <p className="mx-auto mt-2 max-w-xl font-bangla text-base leading-relaxed text-background/70 sm:text-lg">
            ট্রাম থামুক, আড্ডা জমুক— আপনার প্রিয় বইটি ঠিক পৌঁছে যাবে আপনার হাতে।
          </p>
        </div>

        {/* Illustration frame - Reduced top margin */}
        <div className="relative mt-8 sm:mt-10">
          {/* Rotating stamp */}
          <div className="absolute -top-8 right-2 z-20 size-20 sm:-top-10 sm:right-6 sm:size-28" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="animate-spin-slow size-full">
              <defs>
                <path id="stamp-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <circle cx="50" cy="50" r="48" className="fill-primary" />
              <circle cx="50" cy="50" r="45" fill="none" className="stroke-primary-foreground/50" strokeWidth="0.6" strokeDasharray="1.5 2" />
              <text
                className="fill-primary-foreground font-bangla"
                fontSize="9.5"
                fontWeight="700"
                letterSpacing="1"
              >
                <textPath href="#stamp-circle" textLength="232" lengthAdjust="spacing">
                  বই ✦ চা ✦ আড্ডা ✦ বই ✦ চা ✦ আড্ডা ✦
                </textPath>
              </text>
            </svg>
            <BookOpen className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 text-primary-foreground sm:size-8" />
          </div>

          <div className="relative rounded-sm border-[3px] border-mustard/80 bg-[#e6d3a8] p-1.5 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.7)] sm:p-2.5">
            <div
              ref={scrollerRef}
              className="relative overflow-x-auto overflow-y-hidden border border-foreground/40 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="relative w-[900px] sm:w-full">
                <Image
                  src="/images/Vintage Kolkata Landmarks in Sepia.png"
                  alt="Hand-inked sepia illustration of Kolkata"
                  width={1500}
                  height={499}
                  sizes="(min-width: 640px) 1400px, 900px"
                  className="block h-auto w-full select-none"
                  draggable={false}
                />

                <div
                  className="pointer-events-none absolute aspect-square w-[24%] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-multiply transition-[left,top] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    left: `${active.x}%`,
                    top: `${active.y}%`,
                    background: "radial-gradient(closest-side, oklch(0.507 0.187 26 / 0.32), transparent)",
                  }}
                  aria-hidden="true"
                />

                {LANDMARKS.map((landmark) => {
                  const isActive = landmark.id === activeId;
                  return (
                    <button
                      key={landmark.id}
                      type="button"
                      tabIndex={-1}
                      aria-hidden="true"
                      onClick={() => select(landmark.id)}
                      className="group absolute grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
                      style={{ left: `${landmark.x}%`, top: `${landmark.y}%` }}
                    >
                      {isActive && (
                        <span className="absolute size-6 rounded-full bg-primary/60 motion-safe:animate-ping" />
                      )}
                      <span
                        className={`relative block rounded-full border-2 border-foreground shadow-md transition-all duration-300 ${
                          isActive
                            ? "size-4 bg-primary ring-2 ring-mustard"
                            : "size-3 bg-mustard group-hover:size-4 group-hover:bg-primary"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="mt-3 text-center font-bangla text-xs font-medium text-background/50 sm:hidden" aria-hidden="true">
            ← পাশে সরিয়ে পুরো শহর দেখুন →
          </p>
        </div>

        {/* Caption + landmark picker - Reduced top margin */}
        <div className="mx-auto mt-6 max-w-4xl text-center sm:mt-8">
          <div
            key={active.id}
            className="animate-fade-up min-h-[7.5rem]"
            aria-live={autoPlay ? "off" : "polite"}
          >
            <p className="font-bangla text-2xl font-bold text-mustard sm:text-3xl">{active.bn}</p>
            <p className="mt-0.5 font-display text-lg italic text-background/60">{active.en}</p>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-background/85 sm:text-lg">{active.line}</p>
          </div>

          <ul className="mt-4 flex flex-wrap justify-center gap-2" aria-label="Explore the illustration">
            {LANDMARKS.map((landmark) => {
              const isActive = landmark.id === activeId;
              return (
                <li key={landmark.id}>
                  <button
                    type="button"
                    onClick={() => select(landmark.id)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-3.5 py-1.5 font-bangla text-sm font-semibold transition-all duration-300 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard ${
                      isActive
                        ? "border-mustard bg-mustard text-foreground"
                        : "border-background/25 text-background/75 hover:border-mustard/70 hover:text-mustard"
                    }`}
                  >
                    {landmark.bn}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Pillars - Reduced top margin */}
        <ul className="mx-auto mt-10 grid max-w-5xl gap-4 sm:mt-12 sm:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="rounded-xl border border-background/15 bg-background/[0.04] p-5 transition-colors duration-300 hover:border-mustard/50 hover:bg-background/[0.07]"
            >
              <span className="mb-3 grid size-10 place-items-center rounded-full bg-primary text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-bangla text-lg font-bold text-background">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-background/70">{text}</p>
            </li>
          ))}
        </ul>

        {/* Button - Reduced top margin */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 rounded-full bg-mustard px-6 py-3 font-bangla text-sm font-bold text-foreground transition-all duration-300 hover:bg-background active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard sm:text-base"
          >
            বই পাড়ার সংগ্রহ দেখুন
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Ticker - Reduced top margin */}
      <div className="relative mt-10 overflow-hidden border-y border-mustard/30 bg-primary py-2.5 sm:mt-12" aria-hidden="true">
        <div className="animate-marquee flex w-max items-center whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {TICKER.map((word) => (
                <span key={`${copy}-${word}`} className="flex items-center font-bangla text-lg font-bold text-primary-foreground sm:text-xl">
                  <span className="px-5 sm:px-8">{word}</span>
                  <span className="text-mustard">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Component: `/src/components/boihut/Footer.tsx`
```tsx
import Link from "next/link";
import {
  BookCheck,
  Facebook,
  Instagram,
  Mail,
  Phone,
  ShieldCheck,
  Truck,
  Youtube,
} from "lucide-react";

const TRUST_MARKERS = [
  { icon: Truck, short: "Free delivery", long: "Free Kolkata delivery above ₹599" },
  { icon: BookCheck, short: "100% authentic", long: "Sourced from College Street publishers" },
  { icon: ShieldCheck, short: "Secure payment", long: "UPI, cards & netbanking" },
];

const FOOTER_LINKS = [
  {
    title: "Shop",
    links: [
      { label: "New Arrivals", href: "/shop?sort=new" },
      { label: "Bestsellers", href: "/shop?sort=popular" },
      { label: "Authors", href: "/authors" },
      { label: "Collections", href: "/collections" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Track Order", href: "/track" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

// Set up for actual image files. Place your real logos in the /public/payment/ directory.
const PAYMENT_LOGOS = [
  { name: "UPI", src: "/payment/upi.png" },
  { name: "Visa", src: "/payment/visa.png" },
  { name: "Mastercard", src: "/payment/master.png" },
  { name: "RuPay", src: "/payment/rupay.png" },
];

export function Footer() {
  return (
    <footer
      className="relative mt-auto bg-foreground text-background"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      <div className="kantha w-full text-mustard/70" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-8 lg:px-12 xl:px-20 2xl:px-24">
        {/* Trust strip */}
        <ul className="grid grid-cols-3 gap-2 border-b border-background/10 py-6 sm:gap-6 sm:py-7">
          {TRUST_MARKERS.map((marker) => (
            <li
              key={marker.short}
              className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-background/10 text-mustard">
                <marker.icon className="size-[18px]" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-semibold leading-tight text-background sm:text-sm">
                  {marker.short}
                </span>
                <span className="mt-0.5 hidden text-[13px] leading-snug text-background/70 sm:block">
                  {marker.long}
                </span>
              </span>
            </li>
          ))}
        </ul>

        {/* Brand + links */}
        <div className="grid gap-10 py-10 lg:grid-cols-[1.1fr_1.4fr] lg:gap-16 lg:py-12">
          <div className="flex flex-col items-start">
            <Link
              href="/"
              aria-label="বইhut — home"
              className="flex items-baseline text-[1.9rem] leading-none"
            >
              <span className="font-bangla font-bold text-mustard">বই</span>
              <span className="pr-0.5 font-display italic tracking-tight text-background">
                hut
              </span>
            </Link>
            
            <p className="mt-4 font-bangla text-[17px] font-medium leading-snug text-background">
              বাঙালির বইপ্রেম আর কলেজ স্ট্রিটের ঐতিহ্য— এখন আপনার ঠিকানায়।
            </p>
            <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-background/70">
              Kolkata&apos;s own bookstore for authentic Bengali literature.
            </p>

            {/* Compact Phone & Email Section */}
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
              <a href="tel:+919876543210" className="flex items-center gap-1.5 text-sm text-background/80 transition-colors hover:text-mustard">
                <Phone className="size-3.5" aria-hidden="true" />
                +91 98765 43210
              </a>
              <a href="mailto:hello@boihut.com" className="flex items-center gap-1.5 text-sm text-background/80 transition-colors hover:text-mustard">
                <Mail className="size-3.5" aria-hidden="true" />
                hello@boihut.com
              </a>
            </div>

            <ul className="mt-5 flex items-center gap-2">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid size-11 place-items-center rounded-full border border-background/15 text-background/75 transition-colors hover:border-mustard hover:text-mustard focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
                  >
                    <social.icon className="size-[18px]" strokeWidth={1.6} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-8"
          >
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-mustard">
                  {group.title}
                </h3>
                <ul className="space-y-1">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-8 items-center text-[14.5px] text-background/75 transition-colors hover:text-mustard focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Legal row with strictly restored padding (py-5) and gap (gap-3) */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-background/10 py-5 text-center sm:flex-row sm:text-left">
          
          <div className="text-[13px] text-background/65">
            <p>
              &copy; {new Date().getFullYear()} <span className="font-bangla">বই</span>hut. All rights reserved.
            </p>
            <p className="mt-0.5 sm:mt-1">
              Designed & Developed by <a href="#" className="font-semibold text-background/80 transition-colors hover:text-mustard">SJ Digital Studio</a>
            </p>
          </div>

          <p className="hidden text-[13px] text-background/65 lg:block">
            Made with <span className="text-primary" aria-label="love">♥</span> in Kolkata
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-1.5" aria-label="Accepted payment methods">
            {PAYMENT_LOGOS.map((method) => (
              <li
                key={method.name}
                title={method.name}
                className="flex h-[26px] w-[38px] items-center justify-center rounded-[3px] bg-background px-1 shadow-sm"
              >
                {/* Fallback styling ensures it looks okay even before you add the images */}
                <img 
                  src={method.src} 
                  alt={method.name} 
                  className="h-full w-full object-contain text-[8px] font-bold text-foreground"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>

        </div>
      </div>
    </footer>
  );
}
```

### Component: `/src/components/boihut/Header.tsx`
```tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Heart,
  Home,
  LayoutGrid,
  Menu,
  Search,
  ShoppingBag,
  X,
  Sparkles,
  BookOpen,
  Feather,
  Baby,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "New Arrivals", href: "/shop?sort=new", badge: "নতুন" },
  { label: "Bangla Sahitya", href: "/collections/bangla-sahitya" },
  { label: "Fiction", href: "/collections/fiction" },
  { label: "Poetry", href: "/collections/poetry" },
  { label: "Kids & Teens", href: "/collections/kids" },
  { label: "Collections", href: "/collections" },
];

const DRAWER_CATEGORIES = [
  { label: "Bangla Sahitya", bn: "বাংলা সাহিত্য", icon: BookOpen },
  { label: "Poetry", bn: "কবিতা", icon: Feather },
  { label: "Kids & Teens", bn: "ছেলেদের বই", icon: Baby },
  { label: "English & World", bn: "ইংরেজি বই", icon: Globe },
  { label: "New Arrivals", bn: "নতুন বই", icon: Sparkles },
];

/**
 * Sticky site header: announcement-topped bar, desktop nav,
 * mobile slide-out menu and a mobile bottom tab bar.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
        <div className="kantha w-full text-primary/70" aria-hidden="true" />
        
        {/* Expanded container width to align with Hero */}
        <div className="mx-auto flex h-[4.25rem] w-full max-w-[1800px] items-center justify-between gap-4 px-4 sm:px-8 lg:px-12 xl:px-20 2xl:px-24">
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="-ml-2 grid size-11 place-items-center rounded-full text-foreground transition-colors hover:bg-muted md:hidden active:scale-95"
            >
              <Menu className="size-5" />
            </button>
            <Logo />
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative flex items-center gap-1.5 py-2 text-[14px] font-semibold tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
                {link.badge && (
                  <span className="font-bangla rounded-full bg-mustard-soft px-1.5 py-px text-[10.5px] font-bold leading-none text-primary">
                    {link.badge}
                  </span>
                )}
                <span className="absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100 rounded-t-sm" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/search"
              aria-label="Search books"
              className="grid size-10 sm:size-11 place-items-center rounded-full text-foreground/80 transition-all duration-200 hover:bg-muted hover:text-primary active:scale-95"
            >
              <Search className="size-5" />
            </Link>
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="hidden sm:grid size-11 place-items-center rounded-full text-foreground/80 transition-all duration-200 hover:bg-muted hover:text-primary active:scale-95"
            >
              <Heart className="size-5" />
            </Link>
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative grid size-10 sm:size-11 place-items-center rounded-full text-foreground/80 transition-all duration-200 hover:bg-muted hover:text-primary active:scale-95 group"
            >
              <ShoppingBag className="size-5" />
              {/* Optional: Add a cart badge dot here later */}
              <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border-2 border-background opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <BottomTabBar />
    </>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-foreground/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Panel */}
      <div
        className={`absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-6 pt-6">
          <span className="font-bangla text-base font-bold text-foreground">
            স্বাগতম, পাঠক
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-full bg-muted/50 text-foreground transition-colors hover:bg-muted active:scale-95"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="px-6 pt-6">
          <label className="flex items-center gap-3 rounded-xl border-2 border-border bg-card px-4 py-3.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
            <Search className="size-4 shrink-0 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search books, authors…"
              className="w-full bg-transparent text-[15px] outline-none placeholder:text-muted-foreground/70"
            />
          </label>
        </div>

        <nav className="mt-6 flex-1 overflow-y-auto px-4 pb-6" aria-label="Mobile">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-colors hover:bg-muted active:scale-[0.98]"
                >
                  {link.label}
                  <ArrowRight className="size-4 text-primary/60" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="kantha my-6 mx-4 text-primary/40" aria-hidden="true" />

          <p className="font-bangla px-4 mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            বিভাগ
          </p>
          <ul className="space-y-1">
            {DRAWER_CATEGORIES.map((cat) => (
              <li key={cat.label}>
                <Link
                  href={`/collections/${cat.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  onClick={onClose}
                  className="flex items-center gap-3.5 rounded-xl px-4 py-3 transition-colors hover:bg-muted active:scale-[0.98]"
                >
                  <div className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10">
                    <cat.icon className="size-4 text-primary" />
                  </div>
                  <span className="text-[15px] font-medium">{cat.label}</span>
                  <span className="font-bangla ml-auto text-[13px] font-medium text-muted-foreground">
                    {cat.bn}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="bg-secondary/50 px-6 py-5 border-t border-border">
          <p className="font-bangla text-base font-bold text-foreground">
            পড়ুন, ভাবুন, বাঁচুন — বইhut-এ
          </p>
          <p className="mt-1 text-xs font-medium text-muted-foreground">
            Free Kolkata delivery above ₹599
          </p>
        </div>
      </div>
    </div>
  );
}

function BottomTabBar() {
  const tabs = [
    { label: "Home", href: "/", icon: Home },
    { label: "Search", href: "/search", icon: Search },
    { label: "Browse", href: "/collections", icon: LayoutGrid },
    { label: "Cart", href: "/cart", icon: ShoppingBag },
  ];
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-lg md:hidden shadow-[0_-4px_24px_rgba(0,0,0,0.04)]"
      aria-label="Bottom"
    >
      <div className="grid grid-cols-4 pb-[env(safe-area-inset-bottom)]">
        {tabs.map((tab) => (
          <Link
            key={tab.label}
            href={tab.href}
            className="flex flex-col items-center gap-1.5 py-3 text-foreground/60 transition-colors active:text-primary hover:text-foreground"
          >
            <tab.icon className="size-[22px]" />
            <span className="text-[10px] font-semibold tracking-wide">{tab.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
```

### Component: `/src/components/boihut/Hero - Copy.tsx`
```tsx
import { ArrowRight, BookOpen, ShieldCheck, Truck, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const BOOKS = [
  {
    cover: "/cover-rabindranath.jpg",
    title: "সেরা কবিতা",
    author: "রবীন্দ্রনাথ ঠাকুর",
    price: "₹349",
    rotate: "-9deg",
    fanX: -150,
    fanY: 26,
    delay: "100ms",
  },
  {
    cover: "/cover-thriller.jpg",
    title: "কলকাতা কনফিডেনশিয়াল",
    author: "আরিন্দম সেন",
    price: "₹399",
    rotate: "-3deg",
    fanX: -70,
    fanY: 0,
    delay: "250ms",
  },
  {
    cover: "/cover-poetry.jpg",
    title: "অদ্ভুত শহর",
    author: "নতুন প্রজন্মের কবিতা",
    price: "₹299",
    rotate: "4deg",
    fanX: 70,
    fanY: 8,
    delay: "400ms",
  },
  {
    cover: "/cover-fiction.jpg",
    title: "The Monsoon Letters",
    author: "Anirban Sengupta",
    price: "₹449",
    rotate: "11deg",
    fanX: 150,
    fanY: 30,
    delay: "550ms",
  },
];

export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-secondary/55">
      {/* Subtle Kantha Divider at the very top */}
      <div className="absolute inset-x-0 top-0 h-1 kantha opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Expanded Layout Container for Ultra-Wide Screens */}
      <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 items-center gap-8 px-4 pb-9 pt-7 sm:px-8 sm:pb-12 lg:min-h-[640px] lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-12 xl:px-20 2xl:px-24 lg:py-12">
        
        {/* Left Column: Typography & CTAs */}
        <div className="relative z-10 order-2 lg:order-1 lg:py-8 lg:pr-8">
          
          <div className="mb-4 inline-flex items-center gap-3 animate-fade-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
            <span className="kantha w-12 text-primary opacity-70" aria-hidden="true" />
            <p className="font-bangla text-sm font-bold tracking-wide text-primary sm:text-base">
              বইয়ের গন্ধে, কলকাতার ছন্দে
            </p>
          </div>

          {/* Fluid Typography replacing fixed sizes */}
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            Every page has <br className="hidden sm:block" />
            a <em className="text-primary not-italic">Bengal</em> in it.
          </h1>

          <p className="font-bangla mt-4 text-2xl font-bold text-foreground sm:mt-5 sm:text-3xl lg:text-4xl animate-fade-up [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
            পাতায় পাতায় বাঙালিয়ানা
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg animate-fade-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
            From College Street classics to your next can’t-put-it-down read —
            find your kind of story, right here in Kolkata.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center animate-fade-up [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards]">
            <Button asChild className="min-h-12 rounded-full px-8 text-base font-semibold shadow-md transition-all hover:scale-105 hover:shadow-primary/25">
              <a href="/shop">
                Find your next read
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" className="min-h-12 rounded-full border-foreground/20 bg-background/80 px-8 text-base font-semibold shadow-sm transition-all hover:scale-105 hover:bg-background">
              <a href="/collections/bangla-sahitya">
                <BookOpen className="size-5 text-primary" />
                বাংলা সাহিত্য
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground animate-fade-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
            <span className="inline-flex items-center gap-2"><Truck className="size-5 text-primary" />24-hr Kolkata delivery</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="size-5 text-primary" />Genuine books</span>
            <span className="inline-flex items-center gap-2"><Star className="size-5 fill-mustard text-mustard" />4.9 loved by readers</span>
          </div>
        </div>

        {/* Right Column: Visuals & Fan Animation */}
        <div className="relative order-1 h-[320px] w-full overflow-hidden rounded-xl border border-border/60 shadow-inner sm:h-[400px] lg:order-2 lg:h-[520px] lg:overflow-visible lg:border-0 lg:shadow-none lg:rounded-none">
          
          {/* Decorative Saree Paar framing the image container on Desktop */}
          <div className="hidden lg:block absolute inset-y-4 right-0 left-[-4%] saree-paar rounded-lg opacity-80 pointer-events-none z-0" aria-hidden="true" />

          <div className="absolute inset-0 overflow-hidden lg:inset-y-6 lg:right-[2%] lg:left-[-2%] lg:h-[calc(100%-3rem)] lg:w-[100%] lg:rounded-md lg:shadow-xl z-10">
            <img
              src="/boihut-kolkata-street-art.jpg"
              alt="Kolkata College Street"
              width={1536}
              height={1024}
              fetchPriority="high"
              className="size-full object-cover object-[35%_57%] sm:object-center transition-transform duration-[12s] ease-out hover:scale-110"
            />
            {/* Dark overlay for better book contrast */}
            <div className="absolute inset-0 bg-foreground/5 mix-blend-multiply pointer-events-none" />
          </div>

          <FanStack ready={ready} />

          {/* Floating Badges */}
          <div className="absolute top-4 right-4 rounded-full border border-border/80 bg-background/95 px-4 py-2 shadow-md sm:top-6 sm:right-6 lg:top-10 lg:right-2 z-20 animate-fade-up [animation-delay:700ms] opacity-0 [animation-fill-mode:forwards]">
            <span className="font-bangla text-sm font-bold text-primary sm:text-base tracking-wide">নতুন বই · নতুন গল্প</span>
          </div>
          
          {/* Mobile Swipeable Carousel */}
          <div className="absolute inset-x-0 bottom-0 bg-background/95 py-3 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] lg:hidden z-30 border-t border-border/50">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden overscroll-x-contain touch-pan-x">
              {BOOKS.map((book) => (
                <div key={book.title} className="flex w-[min(80vw,20rem)] shrink-0 snap-center items-center gap-4 rounded-lg border border-border/70 bg-card p-2.5 shadow-sm transition-transform active:scale-95">
                  <img src={book.cover} alt={`${book.title} — ${book.author}`} width={48} height={72} className="size-16 rounded-md object-cover saree-paar shadow-sm" />
                  <div className="min-w-0 text-left flex-1">
                    <p className="font-bangla truncate text-base font-bold text-foreground leading-tight">{book.title}</p>
                    <p className="truncate text-sm text-muted-foreground mt-0.5">{book.author}</p>
                    <p className="text-sm font-bold text-primary mt-1">{book.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FanStack({ ready }: { ready: boolean }) {
  return (
    <div className="absolute inset-0 hidden lg:block z-20">
      {BOOKS.map((book) => (
        <div
          key={book.title}
          className="absolute top-[18%] left-[22%] w-[clamp(8rem,11vw,10rem)] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: ready
              ? `rotate(${book.rotate}) translate(${book.fanX * 0.85}px, ${book.fanY}px) scale(1)`
              : `translateY(120px) rotate(0deg) scale(0.85)`,
            opacity: ready ? 1 : 0,
            zIndex: 10 + BOOKS.indexOf(book),
            transitionDelay: book.delay,
          }}
        >
          <div className="saree-paar bg-card p-2 shadow-2xl transition-all duration-400 hover:scale-[1.15] hover:-translate-y-4 hover:shadow-primary/30 hover:z-50 cursor-pointer rounded-sm">
            <img
              src={book.cover}
              alt={`${book.title} — ${book.author}`}
              width={208}
              height={312}
              loading="lazy"
              className="aspect-[2/3] w-full object-cover rounded-sm border border-border/30"
            />
            <div className="flex items-baseline justify-between gap-2 px-1 pt-2 pb-1">
              <span className="font-bangla truncate text-sm font-bold text-foreground">{book.title}</span>
              <span className="text-sm font-extrabold text-primary">{book.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Component: `/src/components/boihut/Hero.tsx`
```tsx
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKS = [
  {
    cover: "/cover-rabindranath.jpg",
    title: "সেরা কবিতা",
    author: "রবীন্দ্রনাথ ঠাকুর",
    price: "₹349",
    x: -33,
    y: 22,
    rotate: -9,
    delay: "350ms",
  },
  {
    cover: "/cover-thriller.jpg",
    title: "কলকাতা কনফিডেনশিয়াল",
    author: "আরিন্দম সেন",
    price: "₹399",
    x: -11,
    y: 0,
    rotate: -3,
    delay: "480ms",
  },
  {
    cover: "/cover-poetry.jpg",
    title: "অদ্ভুত শহর",
    author: "নতুন প্রজন্মের কবিতা",
    price: "₹299",
    x: 11,
    y: 8,
    rotate: 4,
    delay: "610ms",
  },
  {
    cover: "/cover-fiction.jpg",
    title: "The Monsoon Letters",
    author: "Anirban Sengupta",
    price: "₹449",
    x: 33,
    y: 28,
    rotate: 10,
    delay: "740ms",
  },
];

const TRUST = [
  { icon: Truck, label: "24-hr Kolkata delivery" },
  { icon: ShieldCheck, label: "Genuine books" },
  { icon: Star, label: "4.9 loved by readers", filled: true },
];

const fadeUp = "animate-fade-up opacity-0 [animation-fill-mode:forwards]";

export function Hero() {
  return (
    <section className="relative isolate bg-secondary/60">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1 kantha text-primary opacity-40"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden">
        {/* Hand-inked skyline running the full width of the hero */}
        <div
          className="hero-skyline pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[11rem] sm:h-[16rem] lg:left-[34%] lg:h-[26rem]"
          aria-hidden="true"
        >
          <Image
            src="/images/college-street-panorama2.png"
            alt=""
            fill
            sizes="100vw"
            className="select-none object-cover object-center mix-blend-multiply lg:object-[80%_center]"
            draggable={false}
          />
        </div>

        <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 gap-2 px-4 sm:px-8 lg:min-h-[640px] lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-12 xl:px-20 2xl:px-24">
          {/* Copy */}
          <div className="relative z-10 pt-7 sm:pt-10 lg:self-center lg:py-14 lg:pr-6">
            <div className={`mb-4 flex items-center gap-3 ${fadeUp} [animation-delay:100ms]`}>
              <span className="kantha w-10 text-primary" aria-hidden="true" />
              <p className="font-bangla text-sm font-bold tracking-wide text-primary sm:text-base">
                বইয়ের গন্ধে, কলকাতার ছন্দে
              </p>
            </div>

            <h1
              className={`font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.025em] text-balance text-foreground sm:text-6xl lg:text-7xl xl:text-[5.25rem] ${fadeUp} [animation-delay:200ms]`}
            >
              Every page has <br className="hidden sm:block" />a{" "}
              <span className="relative inline-block text-primary">
                Bengal
                <svg
                  viewBox="0 0 300 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full sm:h-3"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9 C 40 2, 90 13, 150 6 S 245 10, 298 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              in it.
            </h1>

            <p
              className={`font-bangla mt-5 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl ${fadeUp} [animation-delay:300ms]`}
            >
              পাতায় পাতায় বাঙালিয়ানা
            </p>

            <p
              className={`mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg ${fadeUp} [animation-delay:400ms]`}
            >
              From College Street classics to your next can&apos;t-put-it-down read — find
              your kind of story, right here in Kolkata.
            </p>

            <div className={`mt-6 flex items-center gap-2.5 sm:mt-8 sm:gap-4 ${fadeUp} [animation-delay:500ms]`}>
              <Button
                asChild
                className="min-h-12 flex-1 rounded-full px-4 text-sm font-semibold shadow-md transition-transform hover:scale-[1.03] sm:flex-none sm:px-8 sm:text-base"
              >
                <Link href="/shop">
                  Find your next read
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="min-h-12 shrink-0 rounded-full border-foreground/25 bg-background/80 px-4 text-sm font-semibold shadow-sm transition-transform hover:scale-[1.03] hover:bg-background sm:px-8 sm:text-base"
              >
                <Link href="/collections/bangla-sahitya">
                  <BookOpen className="size-5 text-primary" />
                  <span className="font-bangla">বাংলা সাহিত্য</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Stage: arch, fanned covers, stamp */}
          <div className="relative mx-auto -mt-3 h-[19.5rem] w-full max-w-[34rem] sm:mt-0 sm:h-[26rem] sm:max-w-[40rem] lg:h-auto lg:min-h-[34rem] lg:max-w-none">
            <div
              className="absolute bottom-0 left-1/2 h-[90%] w-[80%] -translate-x-1/2 rounded-t-[999px] border border-dashed border-primary/40 bg-gradient-to-b from-mustard-soft/80 via-mustard-soft/35 to-transparent sm:w-[72%] lg:h-[80%] lg:w-[64%]"
              aria-hidden="true"
            >
              <div className="absolute inset-3 rounded-t-[999px] border border-primary/20" />
            </div>

            <Stamp />

            <ul className="absolute inset-0 m-0 list-none p-0" aria-label="Featured books">
              {BOOKS.map((book, index) => (
                <li
                  key={book.title}
                  className="absolute bottom-[3.25rem] z-[var(--z)] w-[clamp(5.25rem,25vw,10.5rem)] hover:z-50 sm:bottom-16 lg:bottom-32"
                  style={
                    {
                      "--z": 10 + index,
                      left: `calc(50% + ${book.x}%)`,
                      transform: `translate(-50%, ${book.y}px) rotate(${book.rotate}deg)`,
                    } as CSSProperties
                  }
                >
                  <div className={`${fadeUp}`} style={{ animationDelay: book.delay }}>
                    <div className="animate-drift" style={{ animationDelay: `${index * 0.7}s` }}>
                      <Link
                        href="/shop"
                        aria-label={`${book.title} by ${book.author}, ${book.price}`}
                        className="group relative block transition-transform duration-300 ease-out hover:-translate-y-3 hover:scale-105 focus-visible:-translate-y-3 focus-visible:scale-105 focus-visible:outline-none"
                      >
                        <Image
                          src={book.cover}
                          alt=""
                          width={208}
                          height={312}
                          sizes="(min-width: 1024px) 152px, 25vw"
                          priority={index < 2}
                          className="aspect-[2/3] w-full rounded-[3px] object-cover shadow-[0_18px_28px_-10px_rgb(0_0_0/0.6)] ring-1 ring-foreground/30 transition-shadow group-hover:shadow-[0_28px_36px_-12px_rgb(0_0_0/0.6)] group-focus-visible:ring-2 group-focus-visible:ring-primary"
                        />
                        <span
                          className="pointer-events-none absolute inset-y-0 left-[5%] w-[7%] rounded-l-[3px] bg-gradient-to-r from-white/30 via-black/10 to-transparent"
                          aria-hidden="true"
                        />
                        <span className="absolute -bottom-2 -right-2 -rotate-6 rounded-full bg-primary px-2 py-0.5 text-[11px] font-bold text-primary-foreground shadow-md sm:text-xs">
                          {book.price}
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Trust band */}
      <div className="relative z-10 border-t-2 border-mustard bg-foreground text-background">
        <ul className="mx-auto grid max-w-[1800px] grid-cols-3 divide-x divide-dashed divide-background/25 px-2 sm:px-8 lg:px-12 xl:px-20 2xl:px-24">
          {TRUST.map(({ icon: Icon, label, filled }) => (
            <li
              key={label}
              className="flex flex-col items-center justify-center gap-1.5 px-1 py-3 text-center text-[11px] font-medium leading-tight sm:flex-row sm:gap-2.5 sm:py-4 sm:text-sm"
            >
              <Icon className={`size-4 shrink-0 text-mustard sm:size-5 ${filled ? "fill-mustard" : ""}`} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stamp() {
  return (
    <div
      className={`absolute right-1 top-2 z-30 size-[4.75rem] sm:right-4 sm:top-4 sm:size-24 lg:right-6 lg:top-8 lg:size-28 ${fadeUp} [animation-delay:900ms]`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="animate-spin-slow size-full drop-shadow-md">
        <defs>
          <path id="hero-stamp-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <circle cx="50" cy="50" r="48" className="fill-mustard" />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          className="stroke-foreground/50"
          strokeWidth="0.6"
          strokeDasharray="1.5 2"
        />
        <text className="fill-foreground font-bangla" fontSize="9.5" fontWeight="700" letterSpacing="1">
          <textPath href="#hero-stamp-circle" textLength="232" lengthAdjust="spacing">
            নতুন বই ✦ নতুন গল্প ✦ নতুন বই ✦ নতুন গল্প ✦
          </textPath>
        </text>
      </svg>
      <BookOpen className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 text-primary sm:size-8" />
    </div>
  );
}

```

### Component: `/src/components/boihut/Logo.tsx`
```tsx
import Link from "next/link";

/**
 * বইhut wordmark — Bangla "বই" + latin "hut", with the alpona mark.
 */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2 sm:gap-2.5" aria-label="বইhut — home">
      <img
        src="/boihut-mark.png"
        alt=""
        width={34}
        height={34}
        className="size-8 sm:size-[34px] transition-transform duration-500 ease-out group-hover:rotate-12 group-active:scale-90"
      />
      <span className="flex items-baseline text-2xl sm:text-[1.55rem] leading-none">
        <span className="font-bangla font-bold text-primary">বই</span>
        <span className="font-display italic text-foreground tracking-tight pr-0.5">hut</span>
      </span>
      {!compact && (
        <span className="sr-only">বইhut — Kolkata's own bookstore</span>
      )}
    </Link>
  );
}
```

### Component: `/src/components/boihut/ReadersCircle.tsx`
```tsx
"use client";

import { BookOpenText, CalendarHeart, Loader2, Mail, Sparkles } from "lucide-react";
import { useActionState, useState } from "react";
import { subscribeToCircle, type SubscribeState } from "@/app/actions/subscribe";

const INITIAL_STATE: SubscribeState = { status: "idle", message: "" };

const PERKS = [
  { icon: Mail, bn: "মাসে একটি চিঠি", en: "One letter a month" },
  { icon: Sparkles, bn: "নতুন সংস্করণের খবর", en: "Early pre-orders" },
  { icon: CalendarHeart, bn: "বইপাড়ার নিমন্ত্রণ", en: "Invites & book walks" },
];

function Alpona({ className }: { className?: string }) {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);
  const dots = Array.from({ length: 24 }, (_, i) => i * 15);
  return (
    <svg viewBox="-100 -100 200 200" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" className={className} aria-hidden="true">
      <circle r="94" strokeDasharray="1 5" />
      <circle r="84" />
      {dots.map((angle) => (
        <circle key={angle} r="1.6" cx="0" cy="-89" fill="currentColor" stroke="none" transform={`rotate(${angle})`} />
      ))}
      {petals.map((angle) => (
        <path key={angle} d="M0 -80 C 9 -66, 9 -52, 0 -40 C -9 -52, -9 -66, 0 -80 Z" transform={`rotate(${angle})`} />
      ))}
      {petals.map((angle) => (
        <path key={`i-${angle}`} d="M0 -36 C 6 -28, 6 -20, 0 -13 C -6 -20, -6 -28, 0 -36 Z" transform={`rotate(${angle + 15})`} />
      ))}
      <circle r="9" />
      <circle r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Postmark() {
  return (
    <svg viewBox="0 0 150 80" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-full" aria-hidden="true">
      <defs>
        <path id="postmark-arc" d="M 14 40 A 26 26 0 1 1 66 40 A 26 26 0 1 1 14 40" />
      </defs>
      <circle cx="40" cy="40" r="37" />
      <circle cx="40" cy="40" r="22" strokeWidth="1" />
      <text className="font-bangla" fontSize="8.5" fontWeight="700" fill="currentColor" stroke="none" letterSpacing="0.5">
        <textPath href="#postmark-arc" startOffset="0">
          কলেজ স্ট্রিট • কলকাতা ৭৩ •
        </textPath>
      </text>
      <text x="40" y="38" textAnchor="middle" fontSize="7" fontWeight="700" fill="currentColor" stroke="none" className="font-display">
        BOIER
      </text>
      <text x="40" y="47" textAnchor="middle" fontSize="7" fontWeight="700" fill="currentColor" stroke="none" className="font-display">
        HAAT
      </text>
      <path d="M82 22 q 8 -6 16 0 t 16 0 t 16 0" />
      <path d="M82 34 q 8 -6 16 0 t 16 0 t 16 0" />
      <path d="M82 46 q 8 -6 16 0 t 16 0 t 16 0" />
      <path d="M82 58 q 8 -6 16 0 t 16 0 t 16 0" />
    </svg>
  );
}

function Stamp() {
  return (
    <div
      className="relative size-[4rem] shrink-0 rotate-3 sm:size-[5.5rem]"
      style={{ background: "radial-gradient(circle, transparent 2.6px, var(--color-primary) 3px) -4px -4px / 8px 8px" }}
      aria-hidden="true"
    >
      <div className="absolute inset-[5px] flex flex-col items-center justify-center gap-0.5 bg-mustard-soft text-primary ring-1 ring-primary/40">
        <div className="absolute inset-1 border border-primary/50" />
        <BookOpenText className="relative size-5 sm:size-7" strokeWidth={1.6} />
        <span className="relative font-bangla text-[9px] font-bold leading-none sm:text-[11px]">বইপোকা</span>
        <span className="relative font-display text-[7px] italic leading-none text-foreground/70 sm:text-[9px]">Reader</span>
      </div>
    </div>
  );
}

export function ReadersCircle() {
  const [state, formAction, isPending] = useActionState(subscribeToCircle, INITIAL_STATE);
  const [readerName, setReaderName] = useState("");
  const joined = state.status === "success" || state.status === "exists";

  return (
    <section className="paper relative overflow-hidden px-4 py-6 sm:px-8 sm:py-8 lg:px-12 xl:px-20" aria-labelledby="readers-circle-heading">
      
      <div className="pointer-events-none absolute -left-24 top-4 size-72 text-primary/[0.09] sm:size-96" aria-hidden="true">
        <Alpona className="size-full animate-spin-slow" />
      </div>
      <div className="pointer-events-none absolute -bottom-28 -right-24 size-72 text-mustard/30 sm:size-[26rem]" aria-hidden="true">
        <Alpona className="size-full animate-spin-slow [animation-direction:reverse]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1800px]">
        
        {/* Expanded Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="kantha w-10 text-primary opacity-70" aria-hidden="true" />
            <p className="font-display text-lg font-bold italic tracking-wide text-primary sm:text-xl lg:text-xl">The Reader&apos;s Circle</p>
            <span className="kantha w-10 rotate-180 text-primary opacity-70" aria-hidden="true" />
          </div>
          <h2 id="readers-circle-heading" className="font-bangla text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            বইপোকাদের ডেরা <span className="font-sans text-2xl font-semibold sm:text-3xl lg:text-4xl"></span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-sans text-sm font-medium leading-relaxed text-foreground/80 sm:text-base">
            Just a physical letter from College Street and early access to our curated editions. Fill out the letter below to join.
          </p>
        </div>

        {/* The Envelope Card */}
        <div className="relative mx-auto mt-8 w-full max-w-5xl sm:mt-10">
          <div
            className="absolute inset-0 rounded-sm shadow-xl"
            style={{
              background:
                "repeating-linear-gradient(-45deg, var(--color-primary) 0 14px, var(--color-background) 14px 22px, oklch(0.32 0.06 255) 22px 36px, var(--color-background) 36px 44px)",
            }}
            aria-hidden="true"
          />

          <div className="relative m-1.5 rounded-[1px] bg-card px-4 pb-6 pt-4 sm:m-2 sm:px-8 sm:pb-8 sm:pt-6 lg:px-10">
            
            {/* Postmark Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 pt-1">
                <p className="text-[10px] font-bold text-primary sm:text-xs">
                  <span className="font-display uppercase tracking-[0.22em]">Par Avion</span>
                  <span className="mx-1.5" aria-hidden="true">·</span>
                  <span className="font-bangla tracking-normal">বইয়ের ডাক</span>
                </p>
                <p className="mt-1 font-bangla text-[11px] leading-snug text-muted-foreground sm:text-xs">
                  প্রেরক: কলেজ স্ট্রিট, কলকাতা ৭৩
                </p>
              </div>
              <div className="flex shrink-0 items-start">
                <div className="-mr-4 mt-2 hidden h-14 w-24 -rotate-6 text-foreground/55 sm:block" aria-hidden="true">
                  <Postmark />
                </div>
                <Stamp />
              </div>
            </div>

            {/* Interactive "Mad Libs" Letter Form */}
            <div className="mt-6 sm:mt-8">
              {joined ? (
                <div role="status" className="mx-auto flex max-w-lg items-start gap-3 rounded-sm border border-primary/40 bg-mustard-soft/70 p-4 saree-paar">
                  <BookOpenText className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="font-bangla text-base font-bold text-foreground sm:text-lg">{state.message}</p>
                    <p className="mt-0.5 font-display text-sm italic text-muted-foreground">Your chair is ready. Welcome to the circle.</p>
                  </div>
                </div>
              ) : (
                <form action={formAction} noValidate className="relative">
                  {/* Fill-in-the-blank paragraph - Left aligned for proper mobile text wrapping */}
                  <div className="text-left font-bangla text-base leading-[2.5] text-foreground/90 sm:text-[17px] sm:leading-[2.8]">
                    প্রিয় বই<span className="font-display font-bold">Hut</span>,<br />
                    আমার নাম
                    <input
                      name="name"
                      type="text"
                      required
                      value={readerName}
                      onChange={(e) => setReaderName(e.target.value)}
                      aria-label="Full Name"
                      placeholder="সত্যজিৎ রায়"
                      className="mx-1.5 inline-block h-8 w-[140px] border-0 border-b-2 border-foreground/30 bg-transparent px-1 text-center font-bangla text-primary outline-none transition-colors placeholder:font-normal placeholder:text-muted-foreground/40 focus:border-primary sm:mx-2 sm:w-[180px]"
                    />
                    । আমি আপনাদের বইপোকাদের ডেরায় যোগ দিতে চাই। আমার ঠিকানা
                    <input
                      name="address"
                      type="text"
                      required
                      aria-label="Delivery Address"
                      placeholder="অ্যাপার্টমেন্ট, রাস্তা, শহর, পিনকোড"
                      className="mx-1.5 inline-block h-8 w-[220px] max-w-full border-0 border-b-2 border-foreground/30 bg-transparent px-1 text-center font-bangla text-primary outline-none transition-colors placeholder:font-normal placeholder:text-muted-foreground/40 focus:border-primary sm:mx-2 sm:w-[320px]"
                    />
                    -এ আপনাদের মাসিক চিঠি আর বইয়ের বাক্স পাঠালে খুশি হবো। দরকারে আমাকে
                    <input
                      name="email"
                      type="email"
                      required
                      aria-label="Email Address"
                      placeholder="reader@example.com"
                      aria-invalid={state.status === "error"}
                      className="mx-1.5 inline-block h-8 w-[180px] max-w-full border-0 border-b-2 border-foreground/30 bg-transparent px-1 text-center font-sans text-primary outline-none transition-colors placeholder:font-bangla placeholder:font-normal placeholder:text-muted-foreground/40 focus:border-primary aria-[invalid=true]:border-destructive sm:mx-2 sm:w-[220px]"
                    />
                    ইমেইলে অথবা
                    <input
                      name="phone"
                      type="tel"
                      required
                      aria-label="Phone Number"
                      placeholder="+91 9876543210"
                      className="mx-1.5 inline-block h-8 w-[130px] max-w-full border-0 border-b-2 border-foreground/30 bg-transparent px-1 text-center font-sans text-primary outline-none transition-colors placeholder:font-bangla placeholder:font-normal placeholder:text-muted-foreground/40 focus:border-primary sm:mx-2 sm:w-[160px]"
                    />
                    নম্বরে ফোন করে পেতে পারেন।
                    <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] size-0 opacity-0" />
                  </div>

                  <p id="readers-feedback" role={state.status === "error" ? "alert" : undefined} className="mt-2 min-h-5 font-sans text-sm font-medium text-destructive">
                    {state.status === "error" ? state.message : ""}
                  </p>

                  {/* Restored Warning & Submit Section */}
                  <div className="mt-4 flex flex-col justify-between gap-5 sm:mt-6 sm:flex-row sm:items-end">
                    
                    {/* Auto-updating signature */}
                    <div className="font-bangla text-lg font-bold text-foreground/80 sm:text-xl">
                      ইতি, <br/>
                      <span className="text-primary">{readerName || "আপনার নাম"}</span>
                    </div>

                    <div className="flex flex-col items-start gap-3 sm:items-end">
                      <p className="font-sans text-xs text-muted-foreground">
                        No spam, no discount bait. Unsubscribe with one click.
                      </p>
                      <button
                        type="submit"
                        disabled={isPending}
                        className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-sm bg-primary px-8 font-bangla text-base font-bold tracking-wide text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.97] disabled:cursor-wait disabled:opacity-80 sm:w-auto sm:text-lg"
                      >
                        {isPending ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
                        {isPending ? "পাঠানো হচ্ছে..." : "চিঠিটা পাঠিয়ে দিন"}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Horizontal Perks List */}
            <ul className="mt-8 flex flex-col justify-between gap-4 border-t border-dashed border-foreground/20 pt-5 sm:flex-row sm:items-center" aria-label="Membership Perks">
              {PERKS.map(({ icon: Icon, bn, en }) => (
                <li key={en} className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mustard-soft text-primary ring-1 ring-mustard/60">
                    <Icon className="size-3.5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-sans text-sm font-bold leading-none text-foreground">{en}</p>
                    <p className="mt-1 font-bangla text-[11px] leading-none text-muted-foreground">{bn}</p>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
```

### Component: `/src/components/ui/accordion.tsx`
```tsx
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

```

### Component: `/src/components/ui/alert-dialog.tsx`
```tsx
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};

```

### Component: `/src/components/ui/alert.tsx`
```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };

```

### Component: `/src/components/ui/aspect-ratio.tsx`
```tsx
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };

```

### Component: `/src/components/ui/avatar.tsx`
```tsx
"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };

```

### Component: `/src/components/ui/badge.tsx`
```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

```

### Component: `/src/components/ui/breadcrumb.tsx`
```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};

```

### Component: `/src/components/ui/button.tsx`
```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

```

### Component: `/src/components/ui/calendar.tsx`
```tsx
"use client";

import * as React from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label,
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          defaultClassNames.weekday,
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
        week_number: cn(
          "text-muted-foreground select-none text-[0.8rem]",
          defaultClassNames.week_number,
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day,
        ),
        range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today,
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />;
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return <ChevronLeftIcon className={cn("size-4", className)} {...props} />;
          }

          if (orientation === "right") {
            return <ChevronRightIcon className={cn("size-4", className)} {...props} />;
          }

          return <ChevronDownIcon className={cn("size-4", className)} {...props} />;
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers["focused"]) ref.current?.focus();
  }, [modifiers]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers["selected"] &&
        !modifiers["range_start"] &&
        !modifiers["range_end"] &&
        !modifiers["range_middle"]
      }
      data-range-start={modifiers["range_start"]}
      data-range-end={modifiers["range_end"]}
      data-range-middle={modifiers["range_middle"]}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };

```

### Component: `/src/components/ui/card.tsx`
```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

```

### Component: `/src/components/ui/carousel.tsx`
```tsx
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className,
        )}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};

```

### Component: `/src/components/ui/chart.tsx`
```tsx
import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>
        );
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload
            .filter((item) => item.type !== "none")
            .map((item, index) => {
              const key = `${nameKey || item.name || item.dataKey || "value"}`;
              const itemConfig = getPayloadConfigFromPayload(config, item, key);
              const indicatorColor = color || item.payload.fill || item.color;

              return (
                <div
                  key={item.dataKey}
                  className={cn(
                    "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                    indicator === "dot" && "items-center",
                  )}
                >
                  {formatter && item?.value !== undefined && item.name ? (
                    formatter(item.value, item.name, item, index, item.payload)
                  ) : (
                    <>
                      {itemConfig?.icon ? (
                        <itemConfig.icon />
                      ) : (
                        !hideIndicator && (
                          <div
                            className={cn(
                              "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                              {
                                "h-2.5 w-2.5": indicator === "dot",
                                "w-1": indicator === "line",
                                "w-0 border-[1.5px] border-dashed bg-transparent":
                                  indicator === "dashed",
                                "my-0.5": nestLabel && indicator === "dashed",
                              },
                            )}
                            style={
                              {
                                "--color-bg": indicatorColor,
                                "--color-border": indicatorColor,
                              } as React.CSSProperties
                            }
                          />
                        )
                      )}
                      <div
                        className={cn(
                          "flex flex-1 justify-between leading-none",
                          nestLabel ? "items-end" : "items-center",
                        )}
                      >
                        <div className="grid gap-1.5">
                          {nestLabel ? tooltipLabel : null}
                          <span className="text-muted-foreground">
                            {itemConfig?.label || item.name}
                          </span>
                        </div>
                        {item.value && (
                          <span className="font-mono font-medium tabular-nums text-foreground">
                            {item.value.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className,
      )}
    >
      {payload
        .filter((item) => item.type !== "none")
        .map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground",
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};

```

### Component: `/src/components/ui/checkbox.tsx`
```tsx
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("grid place-content-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

```

### Component: `/src/components/ui/collapsible.tsx`
```tsx
"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

```

### Component: `/src/components/ui/command.tsx`
```tsx
"use client";

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};

```

### Component: `/src/components/ui/context-menu.tsx`
```tsx
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-context-menu-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-context-menu-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-4 w-4 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};

```

### Component: `/src/components/ui/dialog.tsx`
```tsx
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};

```

### Component: `/src/components/ui/drawer.tsx`
```tsx
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};

```

### Component: `/src/components/ui/dropdown-menu.tsx`
```tsx
"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};

```

### Component: `/src/components/ui/form.tsx`
```tsx
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue | null>(null);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};

```

### Component: `/src/components/ui/hover-card.tsx`
```tsx
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-hover-card-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };

```

### Component: `/src/components/ui/input-otp.tsx`
```tsx
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Minus } from "lucide-react";

import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName,
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index] ?? {
    char: null,
    hasFakeCaret: false,
    isActive: false,
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Minus />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

```

### Component: `/src/components/ui/input.tsx`
```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

```

### Component: `/src/components/ui/label.tsx`
```tsx
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

```

### Component: `/src/components/ui/menubar.tsx`
```tsx
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

function MenubarMenu({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />;
}

function MenubarGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />;
}

function MenubarPortal({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />;
}

function MenubarRadioGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />;
}

function MenubarSub({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
      className,
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-menubar-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-menubar-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-4 w-4 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};

```

### Component: `/src/components/ui/navigation-menu.tsx`
```tsx
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};

```

### Component: `/src/components/ui/pagination.tsx`
```tsx
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn("", className)} {...props} />,
);
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};

```

### Component: `/src/components/ui/popover.tsx`
```tsx
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };

```

### Component: `/src/components/ui/progress.tsx`
```tsx
"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

```

### Component: `/src/components/ui/radio-group.tsx`
```tsx
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-3.5 w-3.5 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };

```

### Component: `/src/components/ui/resizable.tsx`
```tsx
import { GripVertical } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof Group>) => (
  <Group
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

const ResizablePanel = Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean;
}) => (
  <Separator
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </Separator>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };

```

### Component: `/src/components/ui/scroll-area.tsx`
```tsx
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };

```

### Component: `/src/components/ui/select.tsx`
```tsx
"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};

```

### Component: `/src/components/ui/separator.tsx`
```tsx
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className,
    )}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

```

### Component: `/src/components/ui/sheet.tsx`
```tsx
"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};

```

### Component: `/src/components/ui/sidebar.tsx`
```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open],
    );

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";

    const contextValue = React.useMemo<SidebarContextProps>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className,
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    );
  },
);
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Sidebar</SheetTitle>
              <SheetDescription>Displays the mobile sidebar.</SheetDescription>
            </SheetHeader>
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className="group peer hidden text-sidebar-foreground md:block"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
          )}
        />
        <div
          className={cn(
            "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className,
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<"main">>(
  ({ className, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn(
          "relative flex w-full flex-1 flex-col bg-background",
          "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className,
      )}
      {...props}
    />
  );
});
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="header"
        className={cn("flex flex-col gap-2 p-2", className)}
        {...props}
      />
    );
  },
);
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="footer"
        className={cn("flex flex-col gap-2 p-2", className)}
        {...props}
      />
    );
  },
);
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  );
});
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="content"
        className={cn(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="group"
        className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
        {...props}
      />
    );
  },
);
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  ),
);
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  ),
);
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  ),
);
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring cursor-pointer transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    );

    if (!tooltip) {
      return button;
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      };
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    );
  },
);
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ ...props }, ref) => <li ref={ref} {...props} />,
);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};

```

### Component: `/src/components/ui/skeleton.tsx`
```tsx
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-primary/10", className)} {...props} />;
}

export { Skeleton };

```

### Component: `/src/components/ui/slider.tsx`
```tsx
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

```

### Component: `/src/components/ui/sonner.tsx`
```tsx
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

```

### Component: `/src/components/ui/switch.tsx`
```tsx
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };

```

### Component: `/src/components/ui/table.tsx`
```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className,
      )}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
));
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };

```

### Component: `/src/components/ui/tabs.tsx`
```tsx
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };

```

### Component: `/src/components/ui/textarea.tsx`
```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };

```

### Component: `/src/components/ui/toggle-group.tsx`
```tsx
"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };

```

### Component: `/src/components/ui/toggle.tsx`
```tsx
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium cursor-pointer transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };

```

### Component: `/src/components/ui/tooltip.tsx`
```tsx
"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

```


