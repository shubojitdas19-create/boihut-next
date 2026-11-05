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