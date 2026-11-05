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