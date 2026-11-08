import { ArrowRight, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { getBooks } from "@/lib/data"; // Reverted back to your correct API fetcher!

// Helper to convert standard numbers to Bengali numerals
const toBengaliNumeral = (num: number) => {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().padStart(2, '0').split('').map(digit => bengaliDigits[parseInt(digit)]).join('');
};

export async function Bestsellers() {
  // FAST SERVER-SIDE FETCH: This runs instantly on the server.
  // No more "useEffect" lag, waterfalls, or loading spinners!
  const allBooks = await getBooks();
  
  // Get the 12 most recent books for the grid
  const latestBooks = allBooks.slice(0, 12);

  return (
    <section className="relative overflow-hidden bg-[#f3ecdf] px-4 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10 xl:px-20" aria-labelledby="bestsellers-heading">
      
      {/* Background Motifs */}
      <div className="pointer-events-none absolute -left-32 top-20 size-72 rounded-full border border-primary/10 bg-primary/[0.03]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-12 size-80 rounded-full border-[18px] border-[#e8785d]/10" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[12%] top-12 hidden text-6xl text-primary/10 lg:block" aria-hidden="true">✦</div>

      <div className="relative mx-auto flex w-full max-w-[1800px] flex-col justify-center">
        
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="kantha w-10 text-primary opacity-70" aria-hidden="true" />
            <p className="font-display italic text-lg sm:text-xl font-bold tracking-wide text-primary">Editor's Choice</p>
            <span className="kantha w-10 rotate-180 text-primary opacity-70" aria-hidden="true" />
          </div>
          
          <h2 id="bestsellers-heading" className="font-bangla text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            এই মুহূর্তের বেস্টসেলার
          </h2>
          
          <p className="mx-auto mt-3 max-w-xl font-bangla text-base font-medium leading-relaxed text-foreground/85 sm:text-lg">
            বর্তমান সময়ের সবচেয়ে জনপ্রিয় ও আলোচিত বইয়ের সংগ্রহ। আপনার পরবর্তী প্রিয় বইটি বেছে নিন এখান থেকেই।
          </p>
        </div>

        {/* Static Tabs (Rendered visually to match your exact UI) */}
        <div className="mt-7 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center" role="tablist" aria-label="বইয়ের বিভাগ">
          {["সব বই", "বাংলা সাহিত্য", "থ্রিলার", "কবিতা", "মাঙ্গা", "আত্মোন্নতি", "শিশুদের বই"].map((filter) => (
            <div 
              key={filter}
              className={`shrink-0 rounded-full border px-4 py-2 font-bangla text-sm font-semibold cursor-default ${
                filter === "সব বই"
                  ? "border-primary bg-primary text-primary-foreground shadow-md" 
                  : "border-border/80 bg-background/60 text-muted-foreground"
              }`}
            >
              {filter}
            </div>
          ))}
        </div>

        {/* Auto-fill Grid */}
        {latestBooks.length === 0 ? (
          <div className="mt-16 text-center pb-10 font-bangla text-muted-foreground">
            এই বিভাগে কোনো বই পাওয়া যায়নি।
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:gap-6 lg:gap-8">
            {latestBooks.map((book, index) => (
              <article key={book.slug || index} className="group relative min-w-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-lg saree-paar">
                  <img 
                    src={book.cover} 
                    alt={`${book.title} — ${book.author}`} 
                    width={300} 
                    height={400} 
                    loading={index < 4 ? "eager" : "lazy"} // Eager load the first row for instant paint speeds
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  <span className="absolute left-2 top-2 z-10 rounded-full bg-background/95 px-2 py-1 font-mono text-[10px] font-bold text-primary shadow-sm border border-border/40">
                    #{toBengaliNumeral(index + 1)}
                  </span>
                  
                  <button 
                    type="button" 
                    aria-label={`${book.title} পছন্দের তালিকায় রাখুন`} 
                    className="absolute right-2 top-2 z-20 grid size-8 place-items-center rounded-full bg-background/90 text-foreground/70 opacity-0 shadow-sm transition-all duration-300 hover:text-primary hover:scale-110 group-hover:opacity-100 active:scale-95 border border-border/40"
                  >
                    <Heart className="size-3.5" />
                  </button>
                </div>

                <div className="pt-3">
                  <p className="mb-1 flex items-center gap-1 font-bangla text-[11px] font-bold text-primary">
                    <Sparkles className="size-3" />
                    {book.tag || "নতুন সংযোজন"}
                  </p>
                  <h3 className="font-bangla truncate text-base font-bold text-foreground">
                    <Link href={`/shop/${book.slug}`} className="hover:text-primary transition-colors focus:outline-none before:absolute before:inset-0 before:z-10">
                      {book.title}
                    </Link>
                  </h3>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">{book.author}</p>
                  <p className="mt-2 text-sm font-bold text-foreground">{book.price}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Explore All Button */}
        <div className="mt-10 flex justify-center">
          <Link 
            href="/shop" 
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-sans text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-primary/90 hover:shadow-lg active:scale-95"
          >
            Explore all bestsellers 
            <ArrowRight className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}