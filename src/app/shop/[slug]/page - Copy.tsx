"use client";

import { use, useState } from "react";
import { getBookBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import { Header } from "@/components/boihut/Header";
import { Footer } from "@/components/boihut/Footer";
import { 
  Heart, ShoppingBag, Truck, ShieldCheck, ChevronRight, 
  Star, MapPin, ChevronDown, Minus, Plus, Share2, BookOpen
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap params for Next.js 15 Client Components
  const resolvedParams = use(params);
  const book = getBookBySlug(resolvedParams.slug);

  const [quantity, setQuantity] = useState(1);
  const [format, setFormat] = useState("paperback");
  const [pinCode, setPinCode] = useState("");
  const [pinChecked, setPinChecked] = useState(false);

  if (!book) {
    notFound();
  }

  // Mocking an MRP based on the current price for a discount effect
  const priceNum = parseInt(book.price.replace(/\D/g, ""));
  const mrp = `₹${Math.round(priceNum * 1.3)}`; 

  return (
    <div className="paper flex min-h-screen flex-col pb-20 md:pb-0">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumbs */}
        <nav className="mx-auto flex max-w-[1400px] items-center gap-2 px-4 py-4 text-xs font-medium text-muted-foreground sm:px-8 lg:px-12 sm:py-6 sm:text-sm">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="size-3.5" />
          <Link href={`/shop?category=${book.category}`} className="hover:text-primary transition-colors">{book.category}</Link>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground truncate">{book.title}</span>
        </nav>

        <article className="mx-auto grid max-w-[1400px] gap-8 px-4 pb-8 pt-2 sm:px-8 md:grid-cols-[1fr_1.2fr] lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-12">
          
          {/* LEFT: Image Gallery (Sticky) */}
          <div className="flex flex-col gap-4 md:sticky md:top-24 md:h-fit">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-secondary saree-paar shadow-lg">
               <img
                src={book.cover}
                alt={`${book.title} by ${book.author}`}
                className="size-full object-cover"
              />
              {book.tag && (
                <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 font-mono text-[10px] uppercase font-bold tracking-wider text-primary shadow-sm border border-border/50 backdrop-blur-sm">
                  {book.tag}
                </span>
              )}
              <button aria-label="Share" className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-background/80 text-foreground/80 backdrop-blur-sm transition-all hover:bg-background hover:text-primary active:scale-95 shadow-sm border border-border/50">
                <Share2 className="size-4" />
              </button>
            </div>
            
            {/* Mock Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none]">
              {[1, 2, 3].map((i) => (
                <button key={i} className={`relative aspect-[3/4] w-20 shrink-0 overflow-hidden rounded-sm border-2 transition-all ${i === 1 ? "border-primary opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={book.cover} alt="Thumbnail" className="size-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Details & Buy Box */}
          <div className="flex flex-col pt-2">
            
            {/* Title & Author */}
            <div>
              <h1 className="font-bangla text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.1]">
                {book.title}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                by <Link href={`/authors`} className="font-bangla font-semibold text-primary hover:underline underline-offset-4">{book.author}</Link>
              </p>
            </div>

            {/* Ratings */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex text-mustard">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`size-4 ${i === 4 ? "fill-mustard/30 text-mustard/30" : "fill-current"}`} />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">4.8 (124 Reviews)</span>
            </div>

            {/* Price Block */}
            <div className="mt-6 flex items-end gap-3 border-b border-border pb-6">
              <span className="font-sans text-3xl font-bold text-foreground sm:text-4xl">{book.price}</span>
              <span className="font-sans text-lg text-muted-foreground line-through mb-1">{mrp}</span>
              <span className="font-sans text-sm font-bold text-green-600 mb-2 border border-green-200 bg-green-50 px-2 py-0.5 rounded-sm">23% OFF</span>
            </div>

            {/* Formats */}
            <div className="mt-6">
              <p className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider font-sans">Format</p>
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => setFormat("paperback")}
                  className={`flex flex-col items-start justify-center rounded-sm border-2 px-4 py-2.5 transition-all ${format === "paperback" ? "border-primary bg-primary/5" : "border-border hover:border-primary/40 bg-background"}`}
                >
                  <span className={`text-sm font-bold ${format === "paperback" ? "text-primary" : "text-foreground"}`}>Paperback</span>
                  <span className="text-xs text-muted-foreground">{book.price}</span>
                </button>
                <button 
                  onClick={() => setFormat("hardcover")}
                  className={`flex flex-col items-start justify-center rounded-sm border-2 px-4 py-2.5 transition-all ${format === "hardcover" ? "border-primary bg-primary/5" : "border-border hover:border-primary/40 bg-background"}`}
                >
                  <span className={`text-sm font-bold ${format === "hardcover" ? "text-primary" : "text-foreground"}`}>Hardcover</span>
                  <span className="text-xs text-muted-foreground">₹{priceNum + 150}</span>
                </button>
              </div>
            </div>

            {/* Add to Cart Actions (Desktop only, hidden on mobile for sticky bar) */}
            <div className="mt-8 hidden md:flex items-center gap-4">
              <div className="flex h-12 w-32 items-center justify-between rounded-full border-2 border-border bg-background px-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="grid size-8 place-items-center rounded-full hover:bg-muted text-foreground/70 transition-colors">
                  <Minus className="size-4" />
                </button>
                <span className="font-sans font-bold text-foreground">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="grid size-8 place-items-center rounded-full hover:bg-muted text-foreground/70 transition-colors">
                  <Plus className="size-4" />
                </button>
              </div>

              <button className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-8 font-bangla text-lg font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-primary">
                <ShoppingBag className="size-5" />
                কার্টে যোগ করুন
              </button>
              
              <button className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-border bg-background text-foreground shadow-sm transition-all hover:border-primary hover:text-primary active:scale-95">
                <Heart className="size-5" />
              </button>
            </div>

            {/* Delivery Checker */}
            <div className="mt-8 rounded-lg border border-border bg-card p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
               <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                 <MapPin className="size-4 text-primary"/> Check Delivery Availability
               </div>
               <div className="mt-3 flex gap-2">
                 <input 
                  type="text" 
                  maxLength={6}
                  placeholder="Enter 6-digit PIN code" 
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value.replace(/\D/g, ""))}
                  className="flex-1 rounded-sm border border-border/70 bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary" 
                />
                 <button 
                  onClick={() => setPinChecked(true)}
                  disabled={pinCode.length !== 6}
                  className="rounded-sm bg-foreground px-6 text-sm font-bold text-background transition-colors hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Check
                </button>
               </div>
               {pinChecked && pinCode.length === 6 && (
                 <p className="mt-3 text-xs font-medium text-green-600 flex items-center gap-1.5">
                   <ShieldCheck className="size-4" /> Delivery available to {pinCode}. Standard delivery in 2-3 days.
                 </p>
               )}
            </div>

            {/* Trust Badges */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-2 rounded-lg bg-mustard/5 p-4 border border-mustard/20">
               <div className="flex items-center gap-3">
                 <Truck className="size-6 text-mustard" strokeWidth={1.5} />
                 <p className="font-bangla text-xs font-bold text-foreground">ফ্রি ডেলিভারি<br/><span className="text-muted-foreground font-sans font-normal">On orders above ₹599</span></p>
               </div>
               <div className="flex items-center gap-3">
                 <BookOpen className="size-6 text-mustard" strokeWidth={1.5} />
                 <p className="font-bangla text-xs font-bold text-foreground">১০০% আসল বই<br/><span className="text-muted-foreground font-sans font-normal">Directly from Publishers</span></p>
               </div>
            </div>

            {/* Native HTML Accordions for Details */}
            <div className="mt-8 border-t border-border">
              
              <details className="group border-b border-border py-5 [&_summary::-webkit-details-marker]:hidden" open>
                <summary className="flex cursor-pointer items-center justify-between font-bangla text-lg font-bold text-foreground outline-none">
                  বইটির সম্পর্কে (Description)
                  <ChevronDown className="size-5 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="mt-4 font-bangla text-base leading-relaxed text-foreground/80">
                  <p>{book.description}</p>
                </div>
              </details>

              <details className="group border-b border-border py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-bangla text-lg font-bold text-foreground outline-none">
                  বইয়ের বিবরণ (Specifications)
                  <ChevronDown className="size-5 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="mt-4">
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-4">
                    <div className="flex flex-col border-l-2 border-border pl-3">
                      <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">প্রকাশক</dt>
                      <dd className="font-bangla text-sm font-semibold text-foreground mt-0.5">{book.publisher}</dd>
                    </div>
                    <div className="flex flex-col border-l-2 border-border pl-3">
                      <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">বিভাগ</dt>
                      <dd className="font-bangla text-sm font-semibold text-foreground mt-0.5">{book.category}</dd>
                    </div>
                    <div className="flex flex-col border-l-2 border-border pl-3">
                      <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">পৃষ্ঠা সংখ্যা</dt>
                      <dd className="font-sans text-sm font-semibold text-foreground mt-0.5">{book.pages}</dd>
                    </div>
                    <div className="flex flex-col border-l-2 border-border pl-3">
                      <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">ISBN</dt>
                      <dd className="font-sans text-sm font-semibold text-foreground mt-0.5">{book.isbn}</dd>
                    </div>
                  </dl>
                </div>
              </details>

            </div>
          </div>
        </article>
      </main>

      {/* MOBILE STICKY BUY BAR */}
      <div className="fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+3.5rem)] z-50 flex items-center justify-between border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:hidden">
        <div className="flex flex-col">
          <span className="font-sans text-lg font-bold text-foreground leading-none">{book.price}</span>
          <Link href="#formats" className="text-[10px] text-primary underline underline-offset-2 mt-1">View Formats</Link>
        </div>
        <div className="flex gap-2">
           <button className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm active:scale-95">
             <Heart className="size-5" />
           </button>
           <button className="flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 font-bangla text-sm font-bold text-primary-foreground shadow-md active:scale-95">
             <ShoppingBag className="size-4" />
             কার্টে যোগ
           </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}