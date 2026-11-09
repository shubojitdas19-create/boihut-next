import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/boihut/Header";
import { Footer } from "@/components/boihut/Footer";

// Import your static publisher data containing the logos
import publishersData from "@/lib/boierhaat-publishers.json";

export const revalidate = 3600; 

export const metadata = {
  title: "Publishers | বইhut",
  description: "Browse authentic Bengali books by your favorite publishers.",
};

export default async function PublishersPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
  const STORE_ID = process.env.NEXT_PUBLIC_STORE_ID;
  
  let countsMap: Record<string, number> = {};

  try {
    // Increased limit to 25000 to ensure all 20,396+ books are counted
    const res = await fetch(`${API_URL}/storefront/products?storeId=${STORE_ID}&limit=25000`, {
      next: { revalidate: 3600 }
    });
    
    const data = await res.json();
    
    if (data.success && data.data) {
      data.data.forEach((book: any) => {
        if (book.brand) {
          const brand = book.brand.trim();
          countsMap[brand] = (countsMap[brand] || 0) + 1;
        }
      });
    }
  } catch (error) {
    console.error("Failed to fetch publisher book counts:", error);
  }

  // 1. Get all unique brands exactly as they are spelled in the database
  const dbBrands = Object.keys(countsMap);

  // 2. Fuzzy Matcher Helper: Removes spaces, quotes, apostrophes, dots, and colons
  // This turns "দে'জ পাবলিশিং" into "দেজপাবলিশিং" and "প্রাঃ লিঃ" into "প্রাঃলিঃ"
  const normalize = (str: string) => {
    if (!str) return "";
    return str.toLowerCase().replace(/[\s\'\"\’\‘\.\,\-\ঃ\:]/g, '');
  };

  // 3. Smart Merge: Connect JSON data to Database data despite spelling differences
  const allPublishers = publishersData
    .map((pub) => {
      let total = 0;
      let exactDbBrand = pub.name; // Fallback to JSON name
      const normPubName = normalize(pub.name);

      // Search through the database brands to find a match
      dbBrands.forEach(dbBrand => {
        const normDbBrand = normalize(dbBrand);
        // If one string is inside the other (e.g., "আনন্দ পাবলিশার্স" inside "আনন্দ পাবলিশার্স প্রাঃ লিঃ")
        if (normPubName.includes(normDbBrand) || normDbBrand.includes(normPubName)) {
          total += countsMap[dbBrand];
          exactDbBrand = dbBrand; // Save the exact DB spelling for the URL link!
        }
      });

      return {
        name: pub.name,
        slug: pub.slug,
        logo: pub.logo,
        totalBooks: total,
        queryBrand: exactDbBrand, // Used for the /shop?brand= URL
      };
    })
    // Sort by highest book count first (0-book publishers will naturally sit at the bottom)
    .sort((a, b) => b.totalBooks - a.totalBooks);

  return (
    <div className="paper flex min-h-screen flex-col">
      <Header />
      
      {/* 1. Widened max-w to 1800px and matched the Header's padding (xl:px-20 2xl:px-24) */}
      <main className="flex-1 mx-auto w-full max-w-[1800px] px-4 py-8 sm:px-8 lg:py-12 lg:px-12 xl:px-20 2xl:px-24">
        <div className="mb-10 border-b border-border pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-bangla text-3xl font-bold text-foreground sm:text-4xl">সকল প্রকাশক</h1>
            <p className="mt-2 font-sans text-sm text-muted-foreground">
              Browse books from <span className="font-bold text-foreground">{allPublishers.length}</span> top Bengali publishers.
            </p>
          </div>
        </div>

        {/* 2. Added 2xl:grid-cols-8 to make use of the extra space on large monitors */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 lg:gap-6">
          {allPublishers.map((publisher) => (
            <Link
              key={publisher.slug}
              href={`/shop?brand=${encodeURIComponent(publisher.queryBrand)}`}
              className="group flex flex-col items-center justify-center rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:border-primary/50 hover:shadow-md active:scale-95"
            >
              <div className="relative mb-4 flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background p-2 shadow-inner border border-border/50 transition-transform group-hover:scale-105">
                <Image
                  src={publisher.logo}
                  alt={publisher.name}
                  fill
                  sizes="96px"
                  className="object-contain p-2"
                  unoptimized
                />
              </div>
              
              <h2 className="font-bangla text-[15px] font-bold leading-snug text-foreground line-clamp-2 transition-colors group-hover:text-primary">
                {publisher.name}
              </h2>
              
              <p className="mt-1.5 font-sans text-xs font-semibold text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                {publisher.totalBooks} {publisher.totalBooks === 1 ? 'Book' : 'Books'}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}