"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function FeaturetteCarousel({ books }: { books: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Automated animation: slides every 3 seconds for a continuous feel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex, books.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % books.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
  };

  if (!books || books.length === 0) return null;

  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden perspective-[1000px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {books.map((book, index) => {
        // 3D Coverflow Math
        let positionClasses = "";
        let zIndex = 0;
        let opacity = "opacity-0";

        if (index === currentIndex) {
          // ACTIVE: Center stage, fully visible, large
          positionClasses = "translate-x-0 scale-100 z-20";
          zIndex = 20;
          opacity = "opacity-100";
        } else if (index === (currentIndex - 1 + books.length) % books.length) {
          // PAST: Left side, scaled down, partially faded
          positionClasses = "-translate-x-[60%] sm:-translate-x-[75%] scale-[0.80] z-10 rotate-y-[15deg]";
          zIndex = 10;
          opacity = "opacity-40 hover:opacity-70";
        } else if (index === (currentIndex + 1) % books.length) {
          // UPCOMING: Right side, scaled down, partially faded
          positionClasses = "translate-x-[60%] sm:translate-x-[75%] scale-[0.80] z-10 -rotate-y-[15deg]";
          zIndex = 10;
          opacity = "opacity-40 hover:opacity-70";
        } else {
          // HIDDEN: Tucked away in the back
          positionClasses = "translate-x-0 scale-50 z-0";
          zIndex = 0;
          opacity = "opacity-0";
        }

        const coverImage = Array.isArray(book.images) && book.images.length > 0 
          ? book.images[0] 
          : book.cover || "/images/placeholder.jpg";

        return (
          <div
            key={book.slug || index}
            className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${positionClasses} ${opacity}`}
            style={{ zIndex, transformStyle: "preserve-3d" }}
          >
            <Link href={`/shop/${book.slug}`} className="group block w-[150px] sm:w-[200px] lg:w-[240px]">
              
              {/* Card Container (Image + Text Panel underneath) */}
              <div className="relative w-full rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/10 bg-[#1f0f0c] transition-all duration-300 group-hover:ring-amber-500/50 flex flex-col">
                
                {/* 1. Dedicated Cover Image Container */}
                <div className="relative aspect-[2/3] w-full bg-black/50">
                  <Image
                    src={coverImage}
                    alt={book.title || "Book Cover"}
                    fill
                    sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 240px" // Fixes the console warning!
                    className="object-cover"
                  />
                </div>
                
                {/* 2. Dedicated Text Panel (No more collision!) */}
                <div className="px-3 py-3 sm:py-4 text-center flex flex-col items-center justify-center min-h-[85px] sm:min-h-[96px]">
                  <h3 className="font-bangla font-bold text-white text-[13px] sm:text-[15px] leading-snug line-clamp-2 transition-colors group-hover:text-amber-100">
                    {book.title}
                  </h3>
                  <span className="text-amber-400 font-bold tracking-wide text-[12px] sm:text-sm font-sans mt-1 sm:mt-1.5 block">
                    {book.price}
                  </span>
                </div>

              </div>
            </Link>
          </div>
        );
      })}

      {/* Manual Navigation Controls */}
      <div className="absolute bottom-0 right-2 sm:bottom-2 sm:right-6 flex gap-3 z-30">
        <button onClick={prevSlide} className="grid size-9 sm:size-10 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all">
          <ArrowLeft className="size-4" />
        </button>
        <button onClick={nextSlide} className="grid size-9 sm:size-10 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-sm hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all">
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}