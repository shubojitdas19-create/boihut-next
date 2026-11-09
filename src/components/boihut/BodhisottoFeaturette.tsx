import Link from "next/link";
import { Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFilteredBooks } from "@/lib/data";
import { FeaturetteCarousel } from "./FeaturetteCarousel";

export async function BodhisottoFeaturette() {
  const { books, pagination } = await getFilteredBooks({ brand: "বোধিসত্ত্ব" });
  const totalBooks = pagination?.total || 0;
  
  // 1. Shuffle the books so a completely different mix shows up every time!
  const shuffledBooks = [...books].sort(() => 0.5 - Math.random());
  
  // 2. Grab 8 random books for the carousel
  const displayBooks = shuffledBooks.length >= 3 ? shuffledBooks.slice(0, 8) : [
    { slug: "1", title: "নির্বাচিত গল্প সমগ্র", price: "₹250", cover: "/cover-rabindranath.jpg" },
    { slug: "2", title: "আধুনিক কবিতা", price: "₹180", cover: "/cover-poetry.jpg" },
    { slug: "3", title: "রহস্যের সন্ধানে", price: "₹320", cover: "/cover-thriller.jpg" },
    { slug: "4", title: "উপন্যাস সংকলন", price: "₹450", cover: "/cover-fiction.jpg" },
  ];

  return (
    <section className="relative w-full bg-[#2c1613] overflow-hidden py-8 sm:py-10 border-y border-amber-900/30">
      
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-rose-500/10 blur-[100px]" aria-hidden="true" />

      <div className="mx-auto flex w-full max-w-[1800px] flex-col lg:flex-row lg:items-center gap-8 lg:gap-14 px-4 sm:px-8 lg:px-12 xl:px-20 2xl:px-24 relative z-10">

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-[40%] shrink-0">
          
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200 mb-5 border border-amber-500/20">
            <Award className="size-3.5" />
            <span>Featured Publishing Company</span>
          </div>

          <h2 className="font-bangla text-[3rem] sm:text-5xl lg:text-[4rem] leading-none font-bold text-amber-50 mb-4">
            বোধিসত্ত্ব
          </h2>

          <div className="flex items-center gap-2 mb-5 text-amber-200/80 font-medium bg-black/20 px-4 py-1.5 rounded-full border border-white/5">
            <BookOpen className="size-4" />
            <span>{totalBooks} Books Available</span>
          </div>

          <p className="text-amber-50/75 text-sm sm:text-[15px] leading-relaxed max-w-md mb-6">
            A renowned publishing company bringing you the finest literature. <span className="font-bangla text-amber-100 font-semibold leading-loose">বোধিসত্ত্ব-এর বিশেষ কিছু বই, যা আপনার মন ছুঁয়ে যাবে।</span> Dive into our premium collection of thought-provoking stories.
          </p>

          <Button
            asChild
            className="rounded-full bg-amber-500 text-[#2c1613] hover:bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all hover:scale-105 px-8 h-11 text-sm sm:text-base font-bold"
          >
            <Link href="/shop?brand=বোধিসত্ত্ব">
              Explore Entire Collection
            </Link>
          </Button>
        </div>

        {/* Height increased slightly to fit the new text panels under the images */}
        <div className="w-full lg:w-[60%] relative h-[380px] sm:h-[450px] lg:h-[480px]">
          <FeaturetteCarousel books={displayBooks} />
        </div>

      </div>
    </section>
  );
}