const CATEGORIES = [
  { name: "বাংলা সাহিত্য", slug: "Bangla Sahitya", image: "/category-bangla-v2.png" },
  { name: "থ্রিলার", slug: "Thriller", image: "/category-thriller-v2.png" },
  { name: "কবিতা", slug: "Poetry", image: "/category-poetry-v2.png" },
  { name: "মাঙ্গা ও কমিকস", slug: "Manga & Comics", image: "/category-manga-v2.png" },
  { name: "আত্মোন্নতি", slug: "Self-growth", image: "/category-growth-v2.png" },
  { name: "শিশুদের বই", slug: "Kids", image: "/category-kids-v2.png" },
  { name: "ইংরেজি উপন্যাস", slug: "English Fiction", image: "/category-fiction-v2.png" },
];

export function CategoryChips() {
  return (
    <section
      className="relative isolate overflow-hidden border-y border-border/70 bg-[#f3ecdf] px-4 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-20 2xl:px-24"
      style={{
        backgroundImage:
          "radial-gradient(circle at 12% 22%, rgba(157, 91, 54, 0.14) 0 1px, transparent 1.5px), radial-gradient(circle at 87% 78%, rgba(157, 91, 54, 0.11) 0 1px, transparent 1.5px), radial-gradient(ellipse at center, rgba(255,255,255,0.5), transparent 65%)",
        backgroundSize: "24px 24px, 30px 30px, 100% 100%",
      }}
      aria-labelledby="category-heading"
    >
      <span className="pointer-events-none absolute -left-24 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full border border-primary/10 lg:block" aria-hidden="true" />
      <span className="pointer-events-none absolute -right-20 top-16 hidden h-44 w-44 rotate-12 rounded-[2rem] border border-primary/10 lg:block" aria-hidden="true" />
      
      <div className="relative z-10 mx-auto w-full max-w-[1800px] text-center">
        <p className="font-bangla text-sm font-semibold tracking-[0.14em] text-primary">
          আপনার পাঠের মেজাজ
        </p>
        <h2
          id="category-heading"
          className="mt-2 font-bangla-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          মনের মতো বই খুঁজুন
        </h2>
        <div className="mx-auto mt-4 h-px w-12 bg-primary/60" aria-hidden="true" />

        <div className="relative mt-7 after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:hidden after:w-20 after:bg-gradient-to-l after:from-[#f3ecdf] after:to-transparent lg:after:block">
          <nav
            aria-label="বিষয় অনুযায়ী বই দেখুন"
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain px-3 pb-3 pt-2 touch-pan-x scrollbar-width-none [&::-webkit-scrollbar]:hidden sm:justify-center sm:gap-7 sm:px-6 lg:gap-8"
          >
            {CATEGORIES.map((category, index) => (
              <a
                key={category.slug}
                href={`/shop?category=${encodeURIComponent(category.slug)}`}
                className="group animate-chip-in flex w-[128px] shrink-0 snap-start flex-col items-center gap-3 rounded-2xl p-1 text-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:w-[144px] lg:w-[156px]"
                style={{ animationDelay: `${(CATEGORIES.length - index - 1) * 85}ms` }}
              >
                <span className="relative block aspect-square w-[116px] overflow-hidden rounded-full border-4 border-[#f8f1e5] bg-[#e8d6bb] shadow-[0_10px_24px_rgba(93,55,35,0.16)] ring-1 ring-primary/20 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:ring-2 group-hover:ring-primary/60 group-active:scale-95 sm:w-[132px] lg:w-[144px]">
                  <img
                    src={category.image}
                    alt={`${category.name} বিভাগ`}
                    className="h-full w-full object-cover saturate-[0.88] transition duration-500 ease-out group-hover:scale-110 group-hover:saturate-100"
                  />
                  <span className="absolute inset-0 rounded-full bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" aria-hidden="true" />
                </span>
                <span className="font-bangla text-base font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                  {category.name}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}