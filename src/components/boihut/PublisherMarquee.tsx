"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import publishersData from "@/lib/boierhaat-publishers.json";

export function PublisherMarquee() {
  // Slice the top 40 publishers to keep the DOM light and the animation buttery smooth.
  const showcasePublishers = publishersData.slice(0, 40);

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-16">
      
      {/* Section Header with "View All" Button */}
      <div className="mx-auto mb-8 flex w-full max-w-[1800px] flex-col items-center justify-between gap-5 px-4 sm:mb-10 sm:flex-row sm:px-8 lg:px-12 xl:px-20 2xl:px-24">
         <h2 className="font-bangla text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-center sm:text-left">
           আমাদের সাথে যুক্ত স্বনামধন্য প্রকাশনী সমূহ
         </h2>
         
         {/* Button linking to the all publishers page */}
         <Link 
           href="/publishers" 
           className="group flex shrink-0 items-center gap-2 rounded-full border border-border bg-background px-6 py-2.5 font-bangla text-[15px] font-bold text-foreground shadow-sm transition-all hover:border-primary hover:text-primary active:scale-95"
         >
           সকল প্রকাশক দেখুন 
           <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
         </Link>
      </div>
      
      {/* Marquee Wrapper with Edge Fade Mask */}
      <div className="flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        <div className="flex w-max animate-marquee items-start gap-4 sm:gap-8 pr-4 sm:pr-8">
           
           {/* Primary List */}
           {showcasePublishers.map((pub, idx) => (
              <Link 
                key={`pub-1-${idx}`} 
                href={`/shop?brand=${encodeURIComponent(pub.name)}`} 
                title={pub.name}
                className="group flex w-[90px] shrink-0 flex-col items-center gap-3 sm:w-[110px] lg:w-[130px]"
              >
                <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-border/80 bg-background shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-md sm:h-24 sm:w-24 lg:h-28 lg:w-28">
                   <Image 
                     src={pub.logo} 
                     alt={pub.name} 
                     fill 
                     sizes="(min-width: 1024px) 112px, (min-width: 640px) 96px, 80px" 
                     className="object-contain p-3 transition-transform duration-300 group-hover:scale-105" 
                     unoptimized 
                   />
                   {/* Hover Overlay indicating click action */}
                   <div className="absolute inset-0 flex items-center justify-center bg-background/85 opacity-0 backdrop-blur-[1px] transition-all duration-300 group-hover:opacity-100">
                      <span className="font-bangla text-[11px] font-bold tracking-wide text-primary sm:text-[13px]">বই দেখুন</span>
                   </div>
                </div>
                {/* Visible Publisher Name */}
                <p className="line-clamp-2 text-center font-bangla text-[12px] font-semibold leading-snug text-foreground/80 transition-colors group-hover:text-primary sm:text-[14px]">
                  {pub.name}
                </p>
              </Link>
           ))}
           
           {/* Duplicated List (Required for the seamless infinite loop) */}
           {showcasePublishers.map((pub, idx) => (
              <Link 
                key={`pub-2-${idx}`} 
                href={`/shop?brand=${encodeURIComponent(pub.name)}`} 
                aria-hidden="true"
                tabIndex={-1}
                title={pub.name}
                className="group flex w-[90px] shrink-0 flex-col items-center gap-3 sm:w-[110px] lg:w-[130px]"
              >
                <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-border/80 bg-background shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-md sm:h-24 sm:w-24 lg:h-28 lg:w-28">
                   <Image 
                     src={pub.logo} 
                     alt={pub.name} 
                     fill 
                     sizes="(min-width: 1024px) 112px, (min-width: 640px) 96px, 80px" 
                     className="object-contain p-3 transition-transform duration-300 group-hover:scale-105" 
                     unoptimized 
                   />
                   <div className="absolute inset-0 flex items-center justify-center bg-background/85 opacity-0 backdrop-blur-[1px] transition-all duration-300 group-hover:opacity-100">
                      <span className="font-bangla text-[11px] font-bold tracking-wide text-primary sm:text-[13px]">বই দেখুন</span>
                   </div>
                </div>
                <p className="line-clamp-2 text-center font-bangla text-[12px] font-semibold leading-snug text-foreground/80 transition-colors group-hover:text-primary sm:text-[14px]">
                  {pub.name}
                </p>
              </Link>
           ))}
           
        </div>
      </div>

      {/* Inline CSS for the Marquee Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}