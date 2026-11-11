"use client";

import { useCart } from "@/context/CartContext";
import { Header } from "@/components/boihut/Header";
import { Footer } from "@/components/boihut/Footer";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// FIXED: Safely extracts numbers while respecting decimal points so "1.00" doesn't become "100"
const formatPrice = (rawStr: string | number) => {
  if (typeof rawStr === 'number') return rawStr;
  const match = rawStr.toString().match(/[\d.]+/);
  if (!match) return 0;
  return Math.round(parseFloat(match[0]));
};

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  
  // Calculate exact subtotal based on the fixed price formatting
  const safeCartTotal = cart.reduce((total, item) => {
    return total + (formatPrice(item.price) * item.quantity);
  }, 0);

  return (
    <div className="paper flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-8 lg:py-12 xl:px-20 2xl:px-24">
        <h1 className="font-bangla text-3xl font-bold text-foreground mb-8">আপনার ব্যাগ (Cart)</h1>
        
        {cart.length === 0 ? (
          <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-card/50 text-center shadow-sm">
            <ShoppingBag className="mb-4 size-16 text-muted-foreground/30" />
            <p className="font-bangla text-xl font-bold text-foreground">আপনার ব্যাগ খালি!</p>
            <p className="mt-2 text-sm text-muted-foreground mb-6">Looks like you haven't added any books yet.</p>
            <Link href="/shop" className="rounded-full bg-primary px-8 py-3.5 font-bangla text-[15px] font-bold tracking-wide text-primary-foreground shadow-md transition-all hover:bg-primary/90 active:scale-95">
              বই খুঁজুন (Continue Shopping)
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
            {/* Left: Cart Items */}
            <div className="flex flex-col gap-6">
              {cart.map((item) => {
                const safePrice = formatPrice(item.price);
                return (
                  <div key={item.cartItemId} className="group flex gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md sm:gap-6 sm:p-5">
                    <Link href={`/shop/${item.id}`} className="relative aspect-[3/4] w-24 shrink-0 overflow-hidden rounded-sm bg-secondary saree-paar sm:w-28 transition-transform group-hover:scale-[1.02]">
                      <Image src={item.cover} alt={item.title} fill className="object-cover" />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <p className="font-bangla text-[10px] font-bold text-primary uppercase tracking-wider">{item.publisher}</p>
                          <Link href={`/shop/${item.id}`} className="hover:text-primary transition-colors focus:outline-none">
                            <h3 className="font-bangla mt-1 text-[17px] font-bold leading-snug text-foreground line-clamp-2">{item.title}</h3>
                          </Link>
                          <p className="mt-1 font-sans text-xs font-semibold text-muted-foreground bg-secondary/50 inline-block px-2 py-0.5 rounded-sm border border-border/50">{item.format}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.cartItemId)} className="grid size-8 place-items-center rounded-full bg-background border border-border/50 text-muted-foreground hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-all">
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                      
                      <div className="mt-auto pt-4 flex items-center justify-between">
                        <div className="flex h-11 w-32 items-center justify-between rounded-full border-2 border-border bg-background px-1">
                          <button onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)} className="grid size-8 place-items-center rounded-full hover:bg-muted text-foreground/80 transition-colors"><Minus className="size-4" /></button>
                          <span className="font-sans text-sm font-bold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)} className="grid size-8 place-items-center rounded-full hover:bg-muted text-foreground/80 transition-colors"><Plus className="size-4" /></button>
                        </div>
                        <p className="font-sans text-xl font-extrabold text-foreground tracking-tight">₹{(safePrice * item.quantity).toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Order Summary */}
            <div className="flex flex-col">
              <div className="sticky top-24 rounded-xl border border-border bg-card p-6 shadow-md sm:p-8">
                <h2 className="font-bangla text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <ShoppingBag className="size-5 text-primary" /> অর্ডার সারাংশ
                </h2>
                
                <div className="flex flex-col gap-4 font-sans text-[15px] text-foreground/80 border-b border-border pb-6">
                  <div className="flex justify-between items-center">
                    <p>Subtotal</p>
                    <p className="font-bold text-foreground">₹{safeCartTotal.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <p>Shipping</p>
                    <p>Calculated at checkout</p>
                  </div>
                </div>

                <div className="flex justify-between items-center py-6 mb-2">
                  <p className="font-bangla text-lg font-bold text-foreground">মোট (Total)</p>
                  <p className="font-sans text-3xl font-extrabold text-foreground tracking-tight">₹{safeCartTotal.toLocaleString('en-IN')}</p>
                </div>

                <Link href="/checkout" className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-8 font-bangla text-lg font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-primary">
                  চেকআউট করুন
                  <ArrowRight className="size-5" />
                </Link>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
                   <span>Secure Checkout</span>
                   <span className="size-1 rounded-full bg-border" />
                   <span>Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}