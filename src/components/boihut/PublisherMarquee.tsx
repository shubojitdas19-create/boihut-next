"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import publishersData from "@/lib/boierhaat-publishers.json";

export function PublisherMarquee() {
  const showcasePublishers = publishersData.slice(0, 40);

  return (
    <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12">
      
      {/* Centered Section Header */}
      <div className="mx-auto mb-8 w-full max-w-[1400px] px-4 text-center sm:mb-10 sm:px-8 lg:px-12 xl:px-20 2xl:px-24">
         <div className="flex items-center justify-center gap-3">
            {/* Added decorative squiggles to match your Bestsellers heading */}
            <span className="kantha w-8 text-primary opacity-70 sm:w-10" aria-hidden="true" />
            <h2 className="font-bangla text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              আমাদের সাথে যুক্ত স্বনামধন্য প্রকাশনী সমূহ
            </h2>
            <span className="kantha w-8 rotate-180 text-primary opacity-70 sm:w-10" aria-hidden="true" />
         </div>
      </div>
      
      {/* Marquee Wrapper with wider Edge Fade Mask for PC */}
      <div className="flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_200px,_black_calc(100%-200px),transparent_100%)]">
        
        <div className="flex w-max animate-marquee items-start gap-6 sm:gap-10 pr-6 sm:pr-10">
           
           {/* Primary List */}
           {showcasePublishers.map((pub, idx) => (
              <Link 
                key={`pub-1-${idx}`} 
                href={`/shop?brand=${encodeURIComponent(pub.name)}`} 
                title={pub.name}
                className="group flex w-[100px] shrink-0 flex-col items-center gap-4 sm:w-[130px] lg:w-[150px]"
              >
                {/* Premium Double-Ring Circular Frame */}
                <div className="relative flex h-[90px] w-[90px] items-center justify-center overflow-hidden rounded-full border-[5px] border-background bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-primary/5 group-hover:shadow-[0_0_0_1px_rgba(200,80,60,0.2),0_12px_24px_rgba(200,80,60,0.15)] sm:h-[120px] sm:w-[120px] lg:h-[140px] lg:w-[140px]">
                   
                   <Image 
                     src={pub.logo} 
                     alt={pub.name} 
                     fill 
                     sizes="(min-width: 1024px) 140px, (min-width: 640px) 120px, 90px" 
                     className="object-contain p-4 transition-transform duration-500 mix-blend-multiply group-hover:scale-110 sm:p-5 lg:p-6" 
                     unoptimized 
                   />
                   
                   {/* Elegant Dark Hover Overlay */}
                   <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                      <span className="font-bangla text-[12px] font-bold tracking-wide text-white sm:text-[14px]">বই দেখুন</span>
                   </div>
                </div>
                
                <p className="line-clamp-2 text-center font-bangla text-[13px] font-bold leading-snug text-foreground/85 transition-colors group-hover:text-primary sm:text-[15px]">
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
                className="group flex w-[100px] shrink-0 flex-col items-center gap-4 sm:w-[130px] lg:w-[150px]"
              >
                <div className="relative flex h-[90px] w-[90px] items-center justify-center overflow-hidden rounded-full border-[5px] border-background bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-primary/5 group-hover:shadow-[0_0_0_1px_rgba(200,80,60,0.2),0_12px_24px_rgba(200,80,60,0.15)] sm:h-[120px] sm:w-[120px] lg:h-[140px] lg:w-[140px]">
                   <Image 
                     src={pub.logo} 
                     alt={pub.name} 
                     fill 
                     sizes="(min-width: 1024px) 140px, (min-width: 640px) 120px, 90px" 
                     className="object-contain p-4 transition-transform duration-500 mix-blend-multiply group-hover:scale-110 sm:p-5 lg:p-6" 
                     unoptimized 
                   />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                      <span className="font-bangla text-[12px] font-bold tracking-wide text-white sm:text-[14px]">বই দেখুন</span>
                   </div>
                </div>
                <p className="line-clamp-2 text-center font-bangla text-[13px] font-bold leading-snug text-foreground/85 transition-colors group-hover:text-primary sm:text-[15px]">
                  {pub.name}
                </p>
              </Link>
           ))}
           
        </div>
      </div>

      {/* Centered Button at the Bottom */}
      <div className="mt-8 flex justify-center sm:mt-12">
        <Link 
          href="/publishers" 
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-3.5 font-bangla text-[15px] font-bold text-foreground shadow-sm transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-md active:scale-95"
        >
          সকল প্রকাশক দেখুন 
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Inline CSS for the Marquee Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}