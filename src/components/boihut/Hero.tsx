import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck, Star, Shield, LibraryBig } from "lucide-react";
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
  // Replaced "24-hr Kolkata Delivery" with "Secure Online Payments"
  { icon: Shield, label: "Secure online payments" },
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
                {/* Replaced broken specific route with general Collections route */}
                <Link href="/collections">
                  <LibraryBig className="size-5 text-primary" />
                  <span className="font-sans">View Top Collections</span>
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