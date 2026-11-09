"use client";

import { ArrowRight, ArrowUpRight, Quote, Loader2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, type KeyboardEvent } from "react";
import { fetchAuthorBooks } from "@/lib/actions";
import { useCart } from "@/context/CartContext";

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
    portrait: "/authors/sarat2.png", 
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
    portrait: "/authors/nazrul2.png",
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
    portrait: "/authors/premchand2.png",
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
    portrait: "/authors/marquez2.png",
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

function BookCover({ edition, author, onAddToCart }: { edition: Edition; author: Author; onAddToCart: (e: React.MouseEvent) => void }) {
  const tone = TONES[edition.tone as CoverTone];
  return (
    <div
      className={`relative flex aspect-[3/4] w-full max-w-[160px] sm:max-w-none mx-auto flex-col items-center justify-between overflow-hidden rounded-[3px] p-2.5 shadow-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:shadow-xl sm:p-3.5 ${tone.shell}`}
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
        <h4 className="font-bangla-serif text-[14px] font-bold leading-[1.15] text-balance sm:text-xl lg:text-2xl drop-shadow-md">{edition.title}</h4>
        <span className="size-1.5 rotate-45 bg-current opacity-80 sm:size-2" aria-hidden="true" />
      </div>

      <p className={`relative z-20 mb-2 text-center font-display text-[9px] italic leading-tight sm:mb-3 sm:text-xs ${tone.sub} line-clamp-1`}>{edition.subtitle}</p>

      {/* Desktop Hover Add to Cart Button */}
      <div className="absolute inset-x-0 bottom-0 z-30 translate-y-full bg-background/95 p-2 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hidden lg:block border-t border-border/50">
        <button 
          onClick={onAddToCart}
          className="h-8 w-full rounded-sm font-sans text-[12px] tracking-wide font-bold shadow-sm active:scale-95 flex items-center justify-center gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <ShoppingBag className="size-3.5 pb-[1px]" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export function AuthorSpotlight() {
  const [activeId, setActiveId] = useState(AUTHORS[0].id);
  const [bookCache, setBookCache] = useState<Record<string, Edition[]>>({});
  const [isLoading, setIsLoading] = useState(false); 
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const { addToCart } = useCart();
  
  const index = AUTHORS.findIndex((a) => a.id === activeId);
  const author = AUTHORS[index];

  // Bulletproof fetcher
  useEffect(() => {
    if (bookCache[author.bn]) return;

    let isMounted = true;
    setIsLoading(true);

    fetchAuthorBooks(author.bn, author.defaultTones)
      .then((books) => {
        if (isMounted) {
          setBookCache((prev) => ({ ...prev, [author.bn]: books as Edition[] }));
        }
      })
      .catch((error) => console.error("Failed to load author books:", error))
      .finally(() => { if (isMounted) setIsLoading(false); });

    return () => { isMounted = false; };
  }, [activeId]); 

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, current: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = (current + (event.key === "ArrowRight" ? 1 : -1) + AUTHORS.length) % AUTHORS.length;
    setActiveId(AUTHORS[next].id);
    tabRefs.current[next]?.focus();
  };

  const currentBooks = bookCache[author.bn] || [];
  const showSpinner = isLoading && currentBooks.length === 0;

  return (
    <section className="paper relative overflow-hidden px-4 pt-8 pb-0 sm:px-8 sm:pt-12 sm:pb-2 lg:px-12 lg:pt-14 lg:pb-4 xl:px-20" aria-labelledby="author-spotlight-heading">
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
                  {currentBooks.map((edition) => {
                     // Format as Book object for CartContext
                     const bookForCart = {
                         id: edition.slug, 
                         slug: edition.slug,
                         title: edition.title,
                         author: author.bn,
                         price: edition.price,
                         category: "Uncategorized",
                         cover: edition.cover || "/images/placeholder.jpg",
                         tag: edition.tag
                     };

                     return (
                      <li key={edition.slug} className="min-w-[145px] shrink-0 snap-start sm:min-w-0">
                        <Link href={`/shop/${edition.slug}`} className="group block rounded-sm outline-offset-4" aria-label={`${edition.title}, ${author.bn}, ${edition.price}`}>
                          <BookCover 
                            edition={edition} 
                            author={author} 
                            onAddToCart={(e) => {
                                e.preventDefault();
                                addToCart(bookForCart as any, 1, "Paperback");
                            }}
                          />
                          <div className="pt-3 mx-auto max-w-[160px] sm:max-w-none">
                            <p className="truncate font-bangla text-[11px] font-bold text-primary">{edition.tag}</p>
                            
                            <div className="mt-0.5 flex items-center justify-between gap-1">
                                <p className="font-bangla text-[13px] sm:text-sm font-bold text-foreground flex-1">
                                  {edition.price}
                                </p>
                                
                                {/* Mobile Quick Add Button */}
                                <button 
                                  onClick={(e) => {
                                    e.preventDefault();
                                    addToCart(bookForCart as any, 1, "Paperback");
                                  }} 
                                  aria-label="Add to cart"
                                  className="relative z-20 flex size-[26px] sm:size-[28px] items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground lg:hidden active:scale-95 border border-primary/15"
                                >
                                  <ShoppingBag className="size-[13px] sm:size-[14px]" />
                                </button>
                                
                                {/* Desktop Arrow icon */}
                                <ArrowUpRight className="hidden lg:block size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
                            </div>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}