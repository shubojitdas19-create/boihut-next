"use client";

import { useCart } from "@/context/CartContext";
import { Header } from "@/components/boihut/Header";
import { Footer } from "@/components/boihut/Footer";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  
  const shipping = cartTotal > 599 || cartTotal === 0 ? 0 : 50;
  const finalTotal = cartTotal + shipping;
  const amountToFreeShipping = 600 - cartTotal;

  return (
    <div className="paper flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-[1200px] px-4 py-8 sm:px-8 lg:py-12">
        <h1 className="font-bangla text-3xl font-bold text-foreground mb-8">আপনার ব্যাগ (Cart)</h1>
        
        {cart.length === 0 ? (
          <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-card/50 text-center">
            <ShoppingBag className="mb-4 size-12 text-muted-foreground/40" />
            <p className="font-bangla text-xl font-bold text-foreground">আপনার ব্যাগ খালি!</p>
            <p className="mt-2 text-sm text-muted-foreground mb-6">Looks like you haven't added any books yet.</p>
            <Link href="/shop" className="rounded-full bg-primary px-8 py-3 font-bangla text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90">
              বই খুঁজুন (Continue Shopping)
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
            {/* Left: Cart Items */}
            <div className="flex flex-col gap-6">
              {cart.map((item) => {
                const priceNum = parseInt(item.price.replace(/\D/g, "")) || 0;
                return (
                  <div key={item.cartItemId} className="flex gap-4 rounded-lg border border-border bg-card p-4 shadow-sm sm:gap-6 sm:p-5">
                    <div className="relative aspect-[3/4] w-20 shrink-0 overflow-hidden rounded-sm bg-secondary saree-paar sm:w-24">
                      <Image src={item.cover} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <p className="font-bangla text-[10px] font-bold text-primary uppercase tracking-wider">{item.publisher}</p>
                          <h3 className="font-bangla mt-1 text-[16px] font-bold leading-snug text-foreground line-clamp-2">{item.title}</h3>
                          <p className="mt-1 text-sm font-medium text-muted-foreground">{item.format}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.cartItemId)} className="text-muted-foreground hover:text-destructive transition-colors">
                          <Trash2 className="size-4 sm:size-5" />
                        </button>
                      </div>
                      
                      <div className="mt-auto pt-4 flex items-center justify-between">
                        <div className="flex h-10 w-28 items-center justify-between rounded-full border border-border bg-background px-1">
                          <button onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)} className="grid size-8 place-items-center rounded-full hover:bg-muted text-foreground/70 transition-colors"><Minus className="size-3.5" /></button>
                          <span className="font-sans text-sm font-bold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)} className="grid size-8 place-items-center rounded-full hover:bg-muted text-foreground/70 transition-colors"><Plus className="size-3.5" /></button>
                        </div>
                        <p className="font-sans text-lg font-bold text-foreground tracking-tight">₹{(priceNum * item.quantity).toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Order Summary */}
            <div className="flex flex-col">
              <div className="sticky top-24 rounded-lg border border-border bg-card p-6 shadow-sm">
                <h2 className="font-bangla text-xl font-bold text-foreground mb-6">অর্ডার সারাংশ (Summary)</h2>
                
                <div className="flex flex-col gap-4 font-sans text-sm text-foreground/80 border-b border-border pb-6">
                  <div className="flex justify-between"><p>Subtotal</p><p className="font-semibold text-foreground">₹{cartTotal.toLocaleString('en-IN')}</p></div>
                  <div className="flex justify-between">
                    <p>Shipping</p>
                    <p className="font-semibold text-foreground">{shipping === 0 ? <span className="text-green-600">Free</span> : `₹${shipping}`}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center py-6">
                  <p className="font-bangla text-lg font-bold text-foreground">মোট (Total)</p>
                  <p className="font-sans text-2xl font-extrabold text-foreground tracking-tight">₹{finalTotal.toLocaleString('en-IN')}</p>
                </div>

                {amountToFreeShipping > 0 && (
                  <p className="mb-6 text-sm text-muted-foreground text-center bg-muted/50 py-2 rounded-md">
                    Add books worth <span className="font-bold text-foreground">₹{amountToFreeShipping}</span> for FREE shipping!
                  </p>
                )}

                <Link href="/checkout" className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-8 font-bangla text-lg font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 active:scale-95">
                  চেকআউট করুন
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}