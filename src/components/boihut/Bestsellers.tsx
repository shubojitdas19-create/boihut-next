"use client";

import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const FILTERS = ["সব বই", "বাংলা সাহিত্য", "থ্রিলার", "কবিতা", "মাঙ্গা", "আত্মোন্নতি", "শিশুদের বই"];

// Expanded array with the 'slug' property added for dynamic routing
const BESTSELLERS = [
  { slug: "sera-kobita", title: "সেরা কবিতা", author: "রবীন্দ্রনাথ ঠাকুর", price: "₹৩৪৯", category: "কবিতা", cover: "/cover-rabindranath.jpg", rank: "০১", note: "সবচেয়ে বেশি পঠিত" },
  { slug: "kolkata-confidential", title: "কলকাতা কনফিডেনশিয়াল", author: "আরিন্দম সেন", price: "₹৩৯৯", category: "থ্রিলার", cover: "/cover-thriller.jpg", rank: "০২", note: "এই সপ্তাহের হট পিক" },
  { slug: "odvut-shohor", title: "অদ্ভুত শহর", author: "নতুন প্রজন্মের কবিতা", price: "₹২৯৯", category: "কবিতা", cover: "/cover-poetry.jpg", rank: "০৩", note: "পাঠকের পছন্দ" },
  { slug: "the-monsoon-letters", title: "The Monsoon Letters", author: "Anirban Sengupta", price: "₹৪৪৯", category: "বাংলা সাহিত্য", cover: "/cover-fiction.jpg", rank: "০৪", note: "ধীরে পড়ার জন্য" },
  { slug: "shohorer-shesh-tram", title: "শহরের শেষ ট্রাম", author: "ঋতুপর্ণ দাশ", price: "₹৩৭৫", category: "বাংলা সাহিত্য", cover: "/cover-rabindranath.jpg", rank: "০৫", note: "নতুন সংযোজন" },
  { slug: "botgacher-niche", title: "বটগাছের নিচে", author: "মীনা মুখার্জি", price: "₹৩২৫", category: "মাঙ্গা", cover: "/cover-thriller.jpg", rank: "০৬", note: "চিত্রকথার জগৎ" },
  { slug: "nijeke-fire-pawa", title: "নিজেকে ফিরে পাওয়া", author: "সায়ন ঘোষ", price: "₹৪২৫", category: "আত্মোন্নতি", cover: "/cover-poetry.jpg", rank: "০৭", note: "মন ভালো রাখার বই" },
  { slug: "tuntunir-notun-bondhu", title: "টুনটুনির নতুন বন্ধু", author: "অনন্যা রায়", price: "₹২৭৫", category: "শিশুদের বই", cover: "/cover-fiction.jpg", rank: "০৮", note: "ছোটদের প্রিয়" },
  { slug: "feluda-samagra-1", title: "ফেলুদা সমগ্র ১", author: "সত্যজিৎ রায়", price: "₹৫৯৯", category: "থ্রিলার", cover: "/cover-rabindranath.jpg", rank: "০৯", note: "ক্লাসিক কালেকশন" },
  { slug: "chander-pahar", title: "চাঁদের পাহাড়", author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়", price: "₹২৯৯", category: "বাংলা সাহিত্য", cover: "/cover-fiction.jpg", rank: "১০", note: "অ্যাডভেঞ্চার" },
  { slug: "byomkesh-samagra", title: "ব্যোমকেশ সমগ্র", author: "শরদিন্দু বন্দ্যোপাধ্যায়", price: "₹৬৪৯", category: "থ্রিলার", cover: "/cover-thriller.jpg", rank: "১১", note: "বেস্ট সেলার" },
  { slug: "gitanjali", title: "গীতাঞ্জলি", author: "রবীন্দ্রনাথ ঠাকুর", price: "₹১৯৯", category: "কবিতা", cover: "/cover-poetry.jpg", rank: "১২", note: "নোবেল জয়ী" },
];

export function Bestsellers() {
  const [activeFilter, setActiveFilter] = useState("সব বই");
  const books = activeFilter === "সব বই" ? BESTSELLERS : BESTSELLERS.filter((book) => book.category === activeFilter);

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

        {/* Filter Tabs */}
        <div className="mt-7 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center" role="tablist" aria-label="বইয়ের বিভাগ">
          {FILTERS.map((filter) => (
            <button 
              key={filter} 
              type="button" 
              role="tab" 
              aria-selected={activeFilter === filter} 
              onClick={() => setActiveFilter(filter)} 
              className={`
                shrink-0 rounded-full border px-4 py-2 font-bangla text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                active:scale-95
                ${activeFilter === filter 
                  ? "border-primary bg-primary text-primary-foreground shadow-md" 
                  : "border-border/80 bg-background/60 text-muted-foreground hover:border-primary/50 hover:text-primary"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Auto-fill Grid */}
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:gap-6 lg:gap-8">
          {books.slice(0, 12).map((book, index) => (
            <article 
              key={`${book.slug}-${index}`} 
              className="group relative min-w-0 animate-fade-up opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary shadow-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:shadow-xl saree-paar">
                <img 
                  src={book.cover} 
                  alt={`${book.title} — ${book.author}`} 
                  width={300} 
                  height={400} 
                  loading="lazy" 
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                
                <span className="absolute left-2 top-2 z-10 rounded-full bg-background/95 px-2 py-1 font-mono text-[10px] font-bold text-primary shadow-sm border border-border/40">
                  #{book.rank}
                </span>
                
                {/* Wishlist Button: Added z-20 so it stays clickable above the invisible link overlay */}
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
                  {book.note}
                </p>
                <h3 className="font-bangla truncate text-base font-bold text-foreground">
                  {/* The before:absolute trick makes the entire card clickable seamlessly */}
                  <Link 
                    href={`/shop/${book.slug}`} 
                    className="hover:text-primary transition-colors focus:outline-none before:absolute before:inset-0 before:z-10"
                  >
                    {book.title}
                  </Link>
                </h3>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">{book.author}</p>
                <p className="mt-2 text-sm font-bold text-foreground">{book.price}</p>
              </div>
            </article>
          ))}
        </div>

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