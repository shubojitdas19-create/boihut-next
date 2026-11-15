"use client";

import { useState } from "react";
import Link from "next/link";
import { Award, BookOpen, PenTool, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturetteCarousel } from "./FeaturetteCarousel";

interface BrandProps {
  bodhisottoBooks: any[];
  batayanBooks: any[];
  boihutBooks: any[];
  totalBodhisotto: number;
  totalBoihut: number;
}

export function HouseBrandsClient({ bodhisottoBooks, batayanBooks, boihutBooks, totalBodhisotto, totalBoihut }: BrandProps) {
  const [activeTab, setActiveTab] = useState<"bodhisotto" | "batayan" | "boihut">("bodhisotto");

  return (
    <section className="relative w-full bg-[#2c1613] overflow-hidden py-8 sm:py-12 border-y border-amber-900/30">
      
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-rose-500/10 blur-[100px]" aria-hidden="true" />

      <div className="mx-auto flex w-full max-w-[1800px] flex-col px-4 sm:px-8 lg:px-12 xl:px-20 2xl:px-24 relative z-10">
        
        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10">
          <span className="text-amber-500/70 font-semibold text-sm mr-2 uppercase tracking-widest hidden sm:block">Our Brands:</span>
          
          <button 
            onClick={() => setActiveTab("bodhisotto")}
            className={`px-5 py-2 rounded-full font-bangla font-bold text-sm sm:text-base transition-all border ${activeTab === "bodhisotto" ? "bg-amber-500 text-[#2c1613] border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]" : "bg-black/20 text-amber-200/70 border-white/5 hover:bg-white/10 hover:text-amber-100"}`}
          >
            বোধিসত্ত্ব
          </button>
          <button 
            onClick={() => setActiveTab("batayan")}
            className={`px-5 py-2 rounded-full font-bangla font-bold text-sm sm:text-base transition-all border ${activeTab === "batayan" ? "bg-amber-500 text-[#2c1613] border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]" : "bg-black/20 text-amber-200/70 border-white/5 hover:bg-white/10 hover:text-amber-100"}`}
          >
            বাতায়ন
          </button>
          <button 
  onClick={() => setActiveTab("boihut")}
  className={`px-5 py-2 rounded-full font-sans font-bold text-sm sm:text-base transition-all border ${activeTab === "boihut" ? "bg-amber-500 text-[#2c1613] border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]" : "bg-black/20 text-amber-200/70 border-white/5 hover:bg-white/10 hover:text-amber-100"}`}
>
  বই<span style={{ fontFamily: "'Dancing Script', cursive" }} className="text-[1.3em] font-normal lowercase tracking-normal ml-0.5 align-baseline">hut</span>
</button>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14 w-full">
          
          {/* LEFT SIDE: Dynamic Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-[40%] shrink-0 min-h-[250px]">
            
            {activeTab === "bodhisotto" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200 mb-5 border border-amber-500/20">
                  <Award className="size-3.5" /><span>Featured Publishing Company</span>
                </div>
                <h2 className="font-bangla text-[3rem] sm:text-5xl lg:text-[4rem] leading-none font-bold text-amber-50 mb-4">বোধিসত্ত্ব</h2>
                <div className="flex justify-center lg:justify-start items-center gap-2 mb-5 text-amber-200/80 font-medium bg-black/20 px-4 py-1.5 rounded-full border border-white/5 w-fit">
                  <BookOpen className="size-4" /><span>{totalBodhisotto} Books Available</span>
                </div>
                <p className="text-amber-50/75 text-sm sm:text-[15px] leading-relaxed max-w-md mb-6">
                  A renowned publishing company bringing you the finest literature. <span className="font-bangla text-amber-100 font-semibold leading-loose">বোধিসত্ত্ব-এর বিশেষ কিছু বই, যা আপনার মন ছুঁয়ে যাবে।</span>
                </p>
                <Button asChild className="rounded-full bg-amber-500 text-[#2c1613] hover:bg-amber-400 px-8 h-11 font-bold">
                  <Link href="/shop?brand=বোধিসত্ত্ব">Explore Collection</Link>
                </Button>
              </div>
            )}

            {activeTab === "batayan" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-200 mb-5 border border-rose-500/20">
                  <PenTool className="size-3.5" /><span>Acclaimed Publishing House</span>
                </div>
                <h2 className="font-bangla text-[3rem] sm:text-5xl lg:text-[4rem] leading-none font-bold text-amber-50 mb-4">বাতায়ন</h2>
                <div className="flex justify-center lg:justify-start items-center gap-2 mb-5 text-amber-200/80 font-medium bg-black/20 px-4 py-1.5 rounded-full border border-white/5 w-fit">
                  <BookOpen className="size-4 text-rose-400" /><span>Featured Collection</span>
                </div>
                <p className="text-amber-50/75 text-sm sm:text-[15px] leading-relaxed max-w-md mb-6">
                  আমাদের অন্যতম জনপ্রিয় প্রকাশনা 'বাতায়ন'। ভিন্ন স্বাদের গল্প এবং মননশীল সাহিত্যের এক অনন্য সংগ্রহ। <span className="font-bangla text-rose-200 font-semibold leading-loose">বাতায়নের সেরা বইগুলো আপনার জন্য।</span>
                </p>
                <Button asChild className="rounded-full bg-rose-600 text-white hover:bg-rose-500 px-8 h-11 font-bold shadow-[0_0_20px_rgba(225,29,72,0.2)]">
                  <Link href="/shop?brand=বাতায়ন">Explore Batayan</Link>
                </Button>
              </div>
            )}

            {activeTab === "boihut" && (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-200 mb-5 border border-blue-500/20">
      <Store className="size-3.5" /><span>Your Trusted Bookstore</span>
    </div>
    
    <h2 className="font-sans text-[3rem] sm:text-5xl lg:text-[4rem] leading-none font-bold text-amber-50 mb-4 tracking-tight">
  বই<span style={{ fontFamily: "'Dancing Script', cursive" }} className="text-amber-500 text-[1.25em] font-normal lowercase tracking-normal ml-1">hut</span>
</h2>

<div className="flex justify-center lg:justify-start items-center gap-2 mb-5 text-amber-200/80 font-medium bg-black/20 px-4 py-1.5 rounded-full border border-white/5 w-fit">
  <BookOpen className="size-4" /><span>{totalBoihut}+ Books Platform Wide</span>
</div>

<p className="text-amber-50/75 text-sm sm:text-[15px] leading-relaxed max-w-md mb-6">
  বই<span style={{ fontFamily: "'Dancing Script', cursive" }} className="text-amber-100/90 text-[1.25em] lowercase tracking-normal mx-0.5">hut</span> শুধু একটি স্টোর নয়, এটি বইপ্রেমীদের এক বিশাল পরিবার। <span className="font-bangla text-blue-200 font-semibold leading-loose">কলেজ স্ট্রিটের নস্টালজিয়া এখন আপনার দোরগোড়ায়।</span>
</p>
    
    <Button asChild className="rounded-full bg-blue-600 text-white hover:bg-blue-500 px-8 h-11 font-bold shadow-[0_0_20px_rgba(37,99,235,0.2)]">
      <Link href="/shop">Shop All Books</Link>
    </Button>
  </div>
)}
          </div>

          {/* RIGHT SIDE: Dynamic Visuals */}
          <div className="w-full lg:w-[60%] relative h-[380px] sm:h-[450px] lg:h-[480px]">
            
            {activeTab === "bodhisotto" && (
              <div className="w-full h-full animate-in fade-in zoom-in-95 duration-500">
                <FeaturetteCarousel books={bodhisottoBooks} />
              </div>
            )}

            {activeTab === "batayan" && (
              <div className="w-full h-full animate-in fade-in zoom-in-95 duration-500">
                <FeaturetteCarousel books={batayanBooks} />
              </div>
            )}

            {activeTab === "boihut" && (
              <div className="w-full h-full animate-in fade-in zoom-in-95 duration-500">
                <FeaturetteCarousel books={boihutBooks} />
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}