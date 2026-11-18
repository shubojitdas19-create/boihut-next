"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { parsePrice } from "@/lib/utils";
import { ArrowRight, Filter, Heart, Loader2, Search, SlidersHorizontal, Sparkles, ShoppingBag } from "lucide-react";
import type { Book } from "@/lib/data";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// 1. ISOLATED SIDEBAR WITH OPTIMISTIC UI (Fixes Checkbox Lag)
const SidebarFilters = ({ currentQuery, updateFilter, searchParams, filters, clearAll, isMobile }: any) => {
  const [localSearch, setLocalSearch] = useState(currentQuery || "");
  
  // Local state for checkboxes so they check instantly when clicked
  const [localAuthors, setLocalAuthors] = useState<string[]>([]);
  const [localBrands, setLocalBrands] = useState<string[]>([]);
  const [localCategory, setLocalCategory] = useState<string | null>(null);

  // Sync with URL on load or when "Clear All" is clicked
  useEffect(() => {
    setLocalAuthors(searchParams.get('author')?.split(',').filter(Boolean) || []);
    setLocalBrands(searchParams.get('brand')?.split(',').filter(Boolean) || []);
    setLocalCategory(searchParams.get('category'));
    setLocalSearch(searchParams.get('q') || "");
  }, [searchParams]);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localSearch !== (currentQuery || "")) updateFilter('q', localSearch || null);
    }, 400);
    return () => clearTimeout(timer);
  }, [localSearch, currentQuery, updateFilter]);

  const handleAuthorToggle = (author: string) => {
    setLocalAuthors(prev => prev.includes(author) ? prev.filter(a => a !== author) : [...prev, author]);
    updateFilter('author', author); // Let the parent handle the URL update in the background
  };

  const handleBrandToggle = (brand: string) => {
    setLocalBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
    updateFilter('brand', brand);
  };

  const handleCategoryToggle = (slug: string) => {
    const isActive = localCategory === slug;
    setLocalCategory(isActive ? null : slug);
    updateFilter('category', isActive ? null : slug);
  };

  const defaultAccordionState = isMobile ? [] : ["category", "author", "publisher"];

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col lg:h-auto lg:block">
      
      <div className="flex-1 space-y-5 overflow-y-auto pb-6 pr-1 lg:overflow-visible overscroll-contain">
        <div className="flex items-center justify-between px-1 pr-8 lg:pr-1">
          <h3 className="font-bangla text-lg font-bold text-foreground">ফিল্টার</h3>
          <button onClick={clearAll} className="font-sans text-xs font-bold text-primary underline-offset-4 hover:underline">
            Clear All
          </button>
        </div>
        
        {!isMobile && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="search" 
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search books..." 
              className="w-full rounded-full border border-border bg-background py-2.5 pl-9 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/20"
            />
          </div>
        )}

        <Accordion type="multiple" defaultValue={defaultAccordionState} className="w-full">
          <AccordionItem value="category" className="border-b-0">
            <AccordionTrigger className="font-bangla text-base font-bold hover:no-underline">বিভাগ (Category)</AccordionTrigger>
            <AccordionContent className="pt-2">
              <div className="flex max-h-60 flex-col gap-3 overflow-y-auto pr-2">
                {filters.categories.map((cat: any) => (
                  <button 
                    key={cat.id}
                    onClick={() => handleCategoryToggle(cat.slug)}
                    className={`text-left text-sm font-bangla transition-colors ${localCategory === cat.slug ? "font-bold text-primary" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <div className="kantha my-2 opacity-50" aria-hidden="true" />

          <AccordionItem value="author" className="border-b-0">
            <AccordionTrigger className="font-bangla text-base font-bold hover:no-underline">লেখক (Author)</AccordionTrigger>
            <AccordionContent className="pt-2">
              <div className="flex max-h-60 flex-col gap-3 overflow-y-auto pr-2">
                {filters.authors.map((author: string) => (
                  <label key={author} className="group flex cursor-pointer items-start gap-2.5">
                    <Checkbox 
                       checked={localAuthors.includes(author)} 
                       onCheckedChange={() => handleAuthorToggle(author)} 
                       className="mt-0.5 rounded-[3px] border-muted-foreground/40 data-[state=checked]:border-primary" 
                    />
                    <span className="font-bangla text-[14px] leading-snug text-foreground/80 transition-colors group-hover:text-primary">{author}</span>
                  </label>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <div className="kantha my-2 opacity-50" aria-hidden="true" />

          <AccordionItem value="publisher" className="border-b-0">
            <AccordionTrigger className="font-bangla text-base font-bold hover:no-underline">প্রকাশনী (Publisher)</AccordionTrigger>
            <AccordionContent className="pt-2">
              <div className="flex max-h-60 flex-col gap-3 overflow-y-auto pr-2">
                {filters.publishers.map((pub: string) => (
                  <label key={pub} className="group flex cursor-pointer items-start gap-2.5">
                    <Checkbox 
                       checked={localBrands.includes(pub)} 
                       onCheckedChange={() => handleBrandToggle(pub)} 
                       className="mt-0.5 rounded-[3px] border-muted-foreground/40 data-[state=checked]:border-primary" 
                    />
                    <span className="font-bangla text-[14px] leading-snug text-foreground/80 transition-colors group-hover:text-primary">{pub}</span>
                  </label>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {isMobile && (
        <div className="sticky bottom-0 z-10 border-t border-border bg-background pt-3 pb-1">
          <SheetClose asChild>
            <Button className="h-11 w-full rounded-full bg-primary font-bangla text-[15px] font-bold tracking-wide text-primary-foreground shadow-md active:scale-[0.98]">
              ফলাফল দেখুন (Apply)
            </Button>
          </SheetClose>
        </div>
      )}
    </div>
  );
};

export default function ShopClient({ initialBooks, initialPagination, currentParams, filters }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addToCart } = useCart(); // <--- ADD THIS LINE

  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [page, setPage] = useState(initialPagination.page);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  useEffect(() => {
    setBooks(initialBooks);
    setPage(initialPagination.page);
  }, [initialBooks, initialPagination]);

  const hasMore = page < initialPagination.totalPages;

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (key === 'brand' || key === 'author') {
      const current = params.get(key)?.split(',') || [];
      if (value) {
        if (current.includes(value)) {
          const updated = current.filter(v => v !== value);
          if (updated.length > 0) params.set(key, updated.join(','));
          else params.delete(key);
        } else {
          params.set(key, [...current, value].join(','));
        }
      }
    } else {
       if (value) params.set(key, value);
       else params.delete(key);
    }
    params.delete('page');
    router.push(`/shop?${params.toString()}`, { scroll: false });
  };

  const clearAllFilters = () => router.push('/shop');

  const toggleWishlist = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); 
    setWishlist(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const loadMore = async () => {
    setIsLoadingMore(true);
    const nextPage = page + 1;
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', nextPage.toString());
    params.set('storeId', process.env.NEXT_PUBLIC_STORE_ID!);
    params.set('limit', '24');

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
      const res = await fetch(`${API_URL}/storefront/products?${params.toString()}`);
      const json = await res.json();
      
      if (json.success && json.data) {
         const newBooks = json.data.map((p: any) => {
            const specs = p.specifications || [];
            const authorSpec = specs.find((s: any) => s.label === "Author" || s.label === "লেখক")?.value;
            const publisherSpec = specs.find((s: any) => s.label === "Publisher")?.value;
            
            return {
              id: p.id,
              slug: p.slug,
              title: p.name,
              author: authorSpec || "অজানা",
              price: `₹${p.basePrice}`,
              category: p.category?.name || "Uncategorized",
              cover: p.media && p.media.length > 0 ? p.media[0].url : "/images/placeholder.jpg",
              tag: p.isFeatured ? "Bestseller" : undefined,
              publisher: publisherSpec || p.brand || "", 
            };
         });
         setBooks([...books, ...newBooks]);
         setPage(nextPage);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoadingMore(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-[1800px] px-4 pt-2 sm:px-8 lg:px-12 xl:px-20 2xl:px-24">
      
      <div className="mt-4 flex flex-col gap-4 border-b border-border pb-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-bangla text-3xl font-bold text-foreground">বইয়ের তাক</h1>
          <p className="mt-1 font-sans text-sm text-muted-foreground">
            Showing <span className="font-bold text-foreground">{initialPagination.total.toLocaleString()}</span> authentic books
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex h-10 gap-2 rounded-full border-foreground/20 lg:hidden">
                <SlidersHorizontal className="size-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[85%] bg-background p-6 pr-2 paper">
              <SheetHeader className="hidden mb-4 text-left">
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <SidebarFilters 
                currentQuery={currentParams.q}
                updateFilter={updateFilter} 
                clearAll={clearAllFilters}
                searchParams={searchParams} 
                filters={filters} 
                isMobile={true} 
              />
            </SheetContent>
          </Sheet>

          <Select value={searchParams.get('sort') || "newest"} onValueChange={(val) => updateFilter('sort', val)}>
            <SelectTrigger className="h-10 w-[160px] rounded-full border-foreground/20 bg-background font-bangla font-semibold focus:ring-1 focus:ring-primary/40">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest" className="font-bangla">নতুন প্রকাশ</SelectItem>
              <SelectItem value="price_asc" className="font-bangla">দাম: কম থেকে বেশি</SelectItem>
              <SelectItem value="price_desc" className="font-bangla">দাম: বেশি থেকে কম</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-6 flex flex-col lg:flex-row lg:gap-10 xl:gap-14">
        <aside className="hidden w-[260px] shrink-0 lg:block">
          <div className="sticky top-[5.5rem] rounded-lg border border-border bg-card p-5 shadow-sm">
            <SidebarFilters 
              currentQuery={currentParams.q}
              updateFilter={updateFilter} 
              clearAll={clearAllFilters}
              searchParams={searchParams} 
              filters={filters} 
              isMobile={false}
            />
          </div>
        </aside>

        <div className="flex-1">
          {books.length === 0 ? (
            <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-card/50 text-center">
              <Filter className="mb-4 size-10 text-muted-foreground/50" />
              <p className="font-bangla text-lg font-bold text-foreground">কোনো বই পাওয়া যায়নি</p>
              <p className="mt-1 text-sm text-muted-foreground">Try adjusting your filters or search terms.</p>
              <Button onClick={clearAllFilters} variant="outline" className="mt-6 rounded-full border-foreground/20 hover:bg-background">
                Clear all filters
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-5 sm:gap-y-12">
                {books.map((book, i) => {
                  const cleanPrice = parsePrice(book.price);

                  return (
                    <article key={`${book.slug}-${i}`} className="group relative flex min-w-0 flex-col h-full text-left">
                      
                      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary shadow-sm transition-all duration-300 ease-out group-hover:shadow-md saree-paar">
                        <Image src={book.cover} alt={book.title} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        
                        <button 
                          type="button" 
                          onClick={(e) => toggleWishlist(e, book.id)}
                          className={`absolute right-2 top-2 z-20 grid size-8 place-items-center rounded-full shadow-sm transition-all duration-300 hover:scale-110 border border-border/40 ${wishlist.has(book.id) ? 'bg-background/95 opacity-100' : 'bg-background/80 opacity-0 group-hover:opacity-100'}`}
                        >
                          <Heart className={`size-4 transition-colors ${wishlist.has(book.id) ? 'fill-primary text-primary' : 'text-foreground/70'}`} />
                        </button>

                        <div className="absolute inset-x-0 bottom-0 z-20 translate-y-full bg-background/95 p-3 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hidden lg:block border-t border-border/50">
  <Button 
    onClick={(e) => {
      e.preventDefault();
      addToCart(book, 1, "Paperback");
    }}
    className="h-10 w-full rounded-sm font-sans text-[14px] tracking-wide font-bold shadow-sm active:scale-95 flex items-center justify-center gap-2"
  >
    <ShoppingBag className="size-4 pb-[1px]" />
    Add to Cart
  </Button>
</div>
                      </div>

                      <div className="flex flex-1 flex-col pt-3">
                        {book.publisher && (
                          <p className="font-bangla mb-1.5 text-[10.5px] font-bold text-muted-foreground uppercase tracking-wide line-clamp-1">
                            {book.publisher}
                          </p>
                        )}
                        
                        <h3 className="font-bangla text-[16px] font-bold leading-[1.3] text-foreground line-clamp-2">
                          <Link href={`/shop/${book.slug}`} className="hover:text-primary transition-colors focus:outline-none before:absolute before:inset-0 before:z-10">
                            {book.title}
                          </Link>
                        </h3>
                        
                        <p className="mt-1.5 font-bangla text-[13.5px] font-medium text-foreground/85 truncate">
                          <span className="text-muted-foreground mr-1.5 text-[12px]">লেখক:</span> 
                          {book.author}
                        </p>
                        
                        <div className="mt-auto pt-4 flex items-center justify-between">
  <p className="flex items-center gap-[2px] font-sans text-[18px] font-extrabold text-foreground tracking-tight">
    <span className="text-[15px] font-semibold text-muted-foreground pr-0.5">₹</span>
    {cleanPrice.toLocaleString("en-IN")}
  </p>
  
  <button 
     onClick={(e) => {
       e.preventDefault();
       addToCart(book, 1, "Paperback");
     }} 
     aria-label="Add to cart"
     className="relative z-20 flex size-[34px] items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground lg:hidden active:scale-95 border border-primary/15"
  >
    <ShoppingBag className="size-[17px]" />
  </button>
</div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {hasMore && (
                <div className="mt-12 flex justify-center pb-8">
                  <Button onClick={loadMore} disabled={isLoadingMore} className="group min-h-12 w-full max-w-[280px] rounded-full bg-primary font-bangla text-[15px] font-bold shadow-md transition-all hover:bg-primary/90 active:scale-95 sm:w-auto sm:px-12 border border-border/20">
                    {isLoadingMore ? <Loader2 className="mr-2 size-5 animate-spin" /> : <><span className="pb-0.5 tracking-wide">আরও বই দেখুন</span><ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" /></>}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}