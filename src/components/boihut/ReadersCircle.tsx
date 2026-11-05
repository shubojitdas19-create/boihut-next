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