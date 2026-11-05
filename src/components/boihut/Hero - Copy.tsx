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