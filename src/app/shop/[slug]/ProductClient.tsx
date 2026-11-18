"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/boihut/Header";
import { useCart } from "@/context/CartContext";
import { Footer } from "@/components/boihut/Footer";
import { 
  Heart, ShoppingBag, Truck, ShieldCheck, ChevronRight, 
  Star, MapPin, ChevronDown, Minus, Plus, Share2, BookOpen,
  MessageSquare, UserCircle2, CornerDownRight, Loader2
} from "lucide-react";
import Link from "next/link";
import { parsePrice } from "@/lib/utils";
import type { Book } from "@/lib/data";

export default function ProductClient({ book }: { book: Book }) {
  const { addToCart } = useCart(); // <--- ADD THIS LINE
  const [quantity, setQuantity] = useState(1);
  const [pinCode, setPinCode] = useState("");
  const [pinChecked, setPinChecked] = useState(false);
  const [added, setAdded] = useState(false);
  
  // Safe Price Parsing
  const priceNum = parsePrice(book.price);
  const mrp = `₹${Math.round(priceNum * 1.3).toLocaleString("en-IN")}`; 
  const isWestBengal = /^(70|71|72|73|74)\d{4}$/.test(pinCode);
  const deliveryTime = isWestBengal ? "2-3 days (West Bengal)" : "7-8 days (All India)";

  // Review System State
  const [reviews, setReviews] = useState<any[]>([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [reviewName, setReviewName] = useState("");
  const [reviewEmail, setReviewEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
  const STORE_SLUG = process.env.NEXT_PUBLIC_STORE_SLUG || "boihut";

  // Fetch LIVE Reviews on Load
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`${API_URL}/storefront/${STORE_SLUG}/reviews?productId=${book.id}`);
        const json = await res.json();
        if (json.success && json.data) {
          setReviews(json.data);
        }
      } catch (error) {
        console.error("Failed to fetch reviews");
      } finally {
        setIsLoadingReviews(false);
      }
    };
    fetchReviews();
  }, [book.id, API_URL, STORE_SLUG]);

  // Submit NEW Review
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewText.trim() || !reviewName.trim()) return;
    
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/storefront/${STORE_SLUG}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: book.id,
          name: reviewName,
          email: reviewEmail,
          rating: reviewRating,
          text: reviewText,
        }),
      });
      
      if (res.ok) {
        // Optimistically add to UI
        const newReview = {
          id: Date.now(),
          customerName: reviewName,
          rating: reviewRating,
          createdAt: new Date().toISOString(),
          text: reviewText,
          adminReply: null
        };
        setReviews([newReview, ...reviews]);
        setReviewText("");
        setReviewRating(5);
      }
    } catch (error) {
      console.error("Failed to submit review");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleAddToCart = () => {
  addToCart(book, quantity, "Paperback");
  setAdded(true);
  setTimeout(() => setAdded(false), 2000); // Resets after 2 seconds
};

  return (
    <div className="paper flex min-h-screen flex-col pb-20 md:pb-0">
      <Header />
      
      <main className="flex-1">
        <nav className="mx-auto flex max-w-[1400px] items-center gap-2 px-4 py-4 text-xs font-medium text-muted-foreground sm:px-8 lg:px-12 sm:py-6 sm:text-sm">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="size-3.5" />
          <Link href={`/shop?category=${book.category}`} className="hover:text-primary transition-colors">{book.category}</Link>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground truncate">{book.title}</span>
        </nav>

        <article className="mx-auto grid max-w-[1400px] gap-8 px-4 pb-12 pt-2 sm:px-8 md:grid-cols-[1fr_1.2fr] lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-12">
          
          {/* Left Column: Image */}
          <div className="flex flex-col gap-4 md:sticky md:top-24 md:h-fit">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-secondary saree-paar shadow-lg border border-border/40">
               <img src={book.cover} alt={`${book.title} by ${book.author}`} className="size-full object-cover" />
              {book.tag && (
                <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 font-mono text-[10px] uppercase font-bold tracking-wider text-primary shadow-sm border border-border/50 backdrop-blur-sm">
                  {book.tag}
                </span>
              )}
              <button aria-label="Share" className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-background/80 text-foreground/80 backdrop-blur-sm transition-all hover:bg-background hover:text-primary active:scale-95 shadow-sm border border-border/50">
                <Share2 className="size-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col pt-2">
            
            <div>
              <p className="font-bangla text-xs font-bold text-primary tracking-widest uppercase mb-2">{book.publisher}</p>
              <h1 className="font-bangla text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.2]">
                {book.title}
              </h1>
              <p className="mt-3 text-lg text-muted-foreground font-bangla font-medium">
                লেখক: <Link href={`/shop?author=${book.author}`} className="text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline">{book.author}</Link>
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex text-mustard">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`size-4 ${i === 4 ? "fill-mustard/30 text-mustard/30" : "fill-current"}`} />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">({reviews.length} Reviews)</span>
            </div>

            <div className="mt-6 flex items-end gap-3 border-b border-border pb-6">
              <span className="font-sans text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight">
                <span className="text-2xl mr-1 text-muted-foreground">₹</span>{priceNum.toLocaleString('en-IN')}
              </span>
              <span className="font-sans text-lg text-muted-foreground line-through mb-1">{mrp}</span>
              <span className="font-sans text-sm font-bold text-green-600 mb-1.5 border border-green-200 bg-green-50 px-2 py-0.5 rounded-sm">23% OFF</span>
            </div>

            {/* Formats Fixed (Paperback Only) */}
            <div className="mt-6">
              <p className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider font-sans">Format</p>
              <div className="flex flex-wrap gap-3">
                <button className="flex flex-col items-start justify-center rounded-sm border-2 px-6 py-2.5 border-primary bg-primary/5 cursor-default">
                  <span className="text-sm font-bold text-primary">Paperback</span>
                  <span className="text-xs text-muted-foreground font-semibold">₹{priceNum}</span>
                </button>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="mt-8 hidden md:flex items-center gap-4">
              <div className="flex h-12 w-32 items-center justify-between rounded-full border-2 border-border bg-background px-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="grid size-8 place-items-center rounded-full hover:bg-muted text-foreground/70 transition-colors">
                  <Minus className="size-4" />
                </button>
                <span className="font-sans font-bold text-foreground">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="grid size-8 place-items-center rounded-full hover:bg-muted text-foreground/70 transition-colors">
                  <Plus className="size-4" />
                </button>
              </div>

              {/* Added the onClick handler here */}
              <button 
  onClick={handleAddToCart} 
  className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-8 font-bangla text-lg font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-primary"
>
  <ShoppingBag className="size-5" />
  {added ? "ব্যাগে যোগ করা হয়েছে! ✓" : "ব্যাগে যোগ করুন"}
</button>
              
              <button className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-border bg-background text-foreground shadow-sm transition-all hover:border-primary hover:text-primary active:scale-95">
                <Heart className="size-5" />
              </button>
            </div>

            {/* Delivery Details */}
            <div className="mt-8 rounded-lg border border-border bg-card p-5 shadow-sm">
               <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                 <MapPin className="size-4 text-primary"/> Check Delivery Availability
               </div>
               <div className="mt-3 flex gap-2">
                 <input 
                  type="text" 
                  maxLength={6}
                  placeholder="Enter 6-digit PIN code" 
                  value={pinCode}
                  onChange={(e) => {
                    setPinCode(e.target.value.replace(/\D/g, ""));
                    setPinChecked(false);
                  }}
                  className="flex-1 rounded-sm border border-border/70 bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary font-sans" 
                />
                 <button 
                  onClick={() => setPinChecked(true)}
                  disabled={pinCode.length !== 6}
                  className="rounded-sm bg-foreground px-6 text-sm font-bold text-background transition-colors hover:bg-foreground/90 disabled:opacity-50"
                >
                  Check
                </button>
               </div>
               {pinChecked && pinCode.length === 6 && (
                 <div className="mt-3 rounded-md bg-green-50 border border-green-100 p-3">
                   <p className="text-xs font-semibold text-green-700 flex items-center gap-1.5">
                     <ShieldCheck className="size-4" /> Delivery available to {pinCode}.
                   </p>
                   <p className="text-xs text-green-700 mt-1 ml-5">
                     Expected delivery in <span className="font-bold">{deliveryTime}</span>.
                   </p>
                 </div>
               )}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-border">
              <details className="group border-b border-border py-5 [&_summary::-webkit-details-marker]:hidden" open>
                <summary className="flex cursor-pointer items-center justify-between font-bangla text-lg font-bold text-foreground outline-none">
                  বইটির সম্পর্কে (Description)
                  <ChevronDown className="size-5 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="mt-4 font-bangla text-[15px] leading-relaxed text-foreground/80">
                  <p>{book.description}</p>
                </div>
              </details>

              <details className="group border-b border-border py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between font-bangla text-lg font-bold text-foreground outline-none">
                  বইয়ের বিবরণ (Specifications)
                  <ChevronDown className="size-5 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="mt-4">
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-5">
                    <div className="flex flex-col border-l-2 border-border pl-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">প্রকাশক (Publisher)</dt>
                      <dd className="font-bangla text-[15px] font-semibold text-foreground mt-0.5">{book.publisher}</dd>
                    </div>
                    <div className="flex flex-col border-l-2 border-border pl-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">বিভাগ (Category)</dt>
                      <dd className="font-bangla text-[15px] font-semibold text-foreground mt-0.5">{book.category}</dd>
                    </div>
                    <div className="flex flex-col border-l-2 border-border pl-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">পৃষ্ঠা (Pages)</dt>
                      <dd className="font-sans text-[15px] font-semibold text-foreground mt-0.5">{book.pages}</dd>
                    </div>
                    <div className="flex flex-col border-l-2 border-border pl-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">ISBN</dt>
                      <dd className="font-sans text-[15px] font-semibold text-foreground mt-0.5">{book.isbn}</dd>
                    </div>
                  </dl>
                </div>
              </details>
            </div>

            {/* LIVE Review Section */}
            <div className="mt-12 pt-4">
              <h2 className="font-bangla text-2xl font-bold text-foreground flex items-center gap-2 mb-6">
                <MessageSquare className="size-5 text-primary" />
                পাঠক পর্যালোচনা (Reviews)
              </h2>

              <div className="rounded-lg bg-card border border-border p-5 mb-8 shadow-sm">
                <h3 className="font-bangla text-lg font-bold mb-3">আপনার মতামত জানান</h3>
                <form onSubmit={handleReviewSubmit} className="flex flex-col gap-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} type="button" onClick={() => setReviewRating(star)} className="focus:outline-none">
                        <Star className={`size-6 transition-colors ${star <= reviewRating ? "fill-mustard text-mustard" : "fill-muted text-muted"}`} />
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      value={reviewName} 
                      onChange={(e) => setReviewName(e.target.value)} 
                      placeholder="আপনার নাম" 
                      required 
                      className="w-full rounded-md border border-border bg-background p-2.5 text-sm outline-none focus:border-primary font-bangla" 
                    />
                    <input 
                      type="email" 
                      value={reviewEmail} 
                      onChange={(e) => setReviewEmail(e.target.value)} 
                      placeholder="ইমেইল (ঐচ্ছিক)" 
                      className="w-full rounded-md border border-border bg-background p-2.5 text-sm outline-none focus:border-primary font-sans" 
                    />
                  </div>
                  <textarea 
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="বইটি আপনার কেমন লাগলো?"
                    className="w-full rounded-md border border-border bg-background p-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 min-h-[100px] resize-y font-bangla"
                    required
                  />
                  <button type="submit" disabled={isSubmitting} className="self-start flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 font-bangla text-sm font-bold text-background transition-all hover:bg-foreground/90 disabled:opacity-50">
                    {isSubmitting && <Loader2 className="size-4 animate-spin" />}
                    রিভিউ সাবমিট করুন
                  </button>
                </form>
              </div>

              {isLoadingReviews ? (
                <div className="flex justify-center py-8 text-muted-foreground"><Loader2 className="size-6 animate-spin" /></div>
              ) : reviews.length === 0 ? (
                <div className="py-8 text-center border border-dashed rounded-lg text-muted-foreground font-bangla">এই বইটির এখনো কোনো রিভিউ নেই। আপনিই প্রথম রিভিউ দিন!</div>
              ) : (
                <div className="flex flex-col gap-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="flex flex-col gap-3 border-b border-border pb-6 last:border-0">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="grid size-10 place-items-center rounded-full bg-muted text-muted-foreground">
                            <UserCircle2 className="size-6" />
                          </div>
                          <div>
                            <p className="font-bangla font-bold text-foreground text-sm">{review.customerName}</p>
                            <p className="text-xs text-muted-foreground font-sans mt-0.5">
                              {new Date(review.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                            </p>
                          </div>
                        </div>
                        <div className="flex text-mustard">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`size-3.5 ${i < review.rating ? "fill-current" : "fill-muted text-muted"}`} />
                          ))}
                        </div>
                      </div>
                      <p className="font-bangla text-[15px] leading-relaxed text-foreground/85">{review.text}</p>
                      
                      {review.adminReply && (
                        <div className="mt-2 ml-6 rounded-md bg-secondary/50 p-4 border-l-2 border-primary">
                          <div className="flex items-center gap-2 mb-1.5">
                            <CornerDownRight className="size-3.5 text-primary" />
                            <span className="font-bangla text-xs font-bold text-primary">বইhut প্রকাশনী (Admin)</span>
                          </div>
                          <p className="font-bangla text-sm text-foreground/80 leading-relaxed ml-5">{review.adminReply}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
          </div>
        </article>
      </main>

      {/* Mobile Sticky Action Bar */}
      <div className="fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+3.5rem)] z-50 flex items-center justify-between border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:hidden">
        <div className="flex flex-col">
          <span className="font-sans text-lg font-bold text-foreground leading-none">₹{priceNum}</span>
          <span className="text-[10px] text-muted-foreground mt-1 font-semibold uppercase tracking-wider">Paperback</span>
        </div>
        <div className="flex gap-2">
           <button className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm active:scale-95">
             <Heart className="size-5" />
           </button>
           
           {/* Added the onClick handler here */}
           <button 
  onClick={handleAddToCart} 
  className="flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 font-bangla text-sm font-bold text-primary-foreground shadow-md active:scale-95"
>
  <ShoppingBag className="size-4" />
  {added ? "যোগ হয়েছে! ✓" : "ব্যাগে যোগ"}
</button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}