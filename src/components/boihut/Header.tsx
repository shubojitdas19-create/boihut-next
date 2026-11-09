"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import {
  Heart,
  Home,
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
  Store,
  Library
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

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // New state for mobile search toggle
  const { cart } = useCart();
  const router = useRouter();

  // Calculate total items for the Cart Badge
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Global Search Handler
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q");
    if (q) {
      router.push(`/shop?q=${encodeURIComponent(q.toString())}`);
      setMenuOpen(false); // Close mobile menu if open
      setSearchOpen(false); // Close mobile search drop-down if open
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
        <div className="kantha w-full text-primary/70" aria-hidden="true" />
        
        <div className="mx-auto flex h-[4.25rem] w-full max-w-[1800px] items-center justify-between gap-4 px-4 sm:px-8 lg:px-12 xl:px-20 2xl:px-24">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="-ml-2 grid size-11 place-items-center rounded-full text-foreground transition-colors hover:bg-muted lg:hidden active:scale-95"
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

          {/* Top Right Actions */}
          <div className="flex items-center gap-1 sm:gap-3">
            
            {/* Desktop Global Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:block relative mr-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input 
                name="q" 
                type="search" 
                placeholder="Search books, authors..." 
                className="h-10 w-[200px] xl:w-[260px] rounded-full border border-border bg-background px-9 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/20" 
              />
            </form>

            {/* Mobile Search Toggle Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle Search"
              className="grid md:hidden size-10 place-items-center rounded-full text-foreground/80 transition-all hover:bg-muted active:scale-95"
            >
              {searchOpen ? <X className="size-5" /> : <Search className="size-5" />}
            </button>

            {/* Wishlist (Desktop Only) */}
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="hidden lg:grid size-11 place-items-center rounded-full text-foreground/80 transition-all duration-200 hover:bg-muted hover:text-primary active:scale-95"
            >
              <Heart className="size-5" />
            </Link>

            {/* Cart with Live Badge */}
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative grid size-10 sm:size-11 place-items-center rounded-full text-foreground/80 transition-all duration-200 hover:bg-muted hover:text-primary active:scale-95 group"
            >
              <ShoppingBag className="size-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex size-[18px] items-center justify-center rounded-full bg-primary font-sans text-[10px] font-bold text-primary-foreground shadow-sm">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Search Dropdown Bar */}
        {searchOpen && (
          <div className="md:hidden border-t border-border bg-background/95 p-3 px-4 shadow-sm backdrop-blur-md">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input 
                name="q" 
                type="search" 
                autoFocus
                placeholder="Search books, authors..." 
                className="h-11 w-full rounded-full border border-border bg-background pl-10 pr-4 text-[15px] outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/20 font-sans" 
              />
            </form>
          </div>
        )}
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <BottomTabBar />
    </>
  );
}

// Note: I removed `handleSearch` from the MobileMenu props since the search is now handled exclusively at the top.
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void; }) {
  return (
    <div className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div onClick={onClose} className={`absolute inset-0 bg-foreground/50 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} />
      
      <div className={`absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-background shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-6 pt-6">
          <span className="font-bangla text-base font-bold text-foreground">স্বাগতম, পাঠক</span>
          <button onClick={onClose} className="grid size-10 place-items-center rounded-full bg-muted/50 text-foreground transition-colors hover:bg-muted active:scale-95">
            <X className="size-5" />
          </button>
        </div>

        <nav className="mt-6 flex-1 overflow-y-auto px-4 pb-6">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} onClick={onClose} className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-colors hover:bg-muted active:scale-[0.98]">
                  {link.label}
                  <ArrowRight className="size-4 text-primary/60" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="kantha my-6 mx-4 text-primary/40" aria-hidden="true" />

          <p className="font-bangla px-4 mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">বিভাগ</p>
          <ul className="space-y-1">
            {DRAWER_CATEGORIES.map((cat) => (
              <li key={cat.label}>
                <Link href={`/collections/${cat.label.toLowerCase().replace(/[^a-z]+/g, "-")}`} onClick={onClose} className="flex items-center gap-3.5 rounded-xl px-4 py-3 transition-colors hover:bg-muted active:scale-[0.98]">
                  <div className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10">
                    <cat.icon className="size-4 text-primary" />
                  </div>
                  <span className="text-[15px] font-medium">{cat.label}</span>
                  <span className="font-bangla ml-auto text-[13px] font-medium text-muted-foreground">{cat.bn}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

function BottomTabBar() {
  const tabs = [
    { label: "Home", href: "/", icon: Home },
    { label: "Shop", href: "/shop", icon: Store },
    { label: "Publishers", href: "/publishers", icon: Library },
    { label: "Wishlist", href: "/wishlist", icon: Heart },
  ];
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-lg lg:hidden shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
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