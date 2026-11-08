"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Header } from "@/components/boihut/Header";
import { Footer } from "@/components/boihut/Footer";
import { Loader2, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    shippingAddress: "",
  });

  const shipping = cartTotal > 599 ? 0 : 50;
  const finalTotal = cartTotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setIsSubmitting(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
      const STORE_SLUG = process.env.NEXT_PUBLIC_STORE_SLUG || "boihut";

      // Match the payload exactly to your route_5.txt expected format
      const payload = {
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        shippingAddress: formData.shippingAddress,
        totalAmount: finalTotal,
        items: cart.map(item => ({
          productId: item.id,
          quantity: item.quantity,
          price: parseInt(item.price.replace(/\D/g, "")) || 0
        }))
      };

      const res = await fetch(`${API_URL}/storefront/${STORE_SLUG}/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setOrderSuccess(data.orderNumber); // e.g., ORD-A1B2C3
        clearCart();
      } else {
        alert(data.error || "Checkout failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS SCREEN
  if (orderSuccess) {
    return (
      <div className="paper flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <CheckCircle2 className="size-20 text-green-600 mb-6" />
          <h1 className="font-bangla text-4xl font-bold text-foreground mb-4">অর্ডার সফল হয়েছে!</h1>
          <p className="text-lg text-muted-foreground mb-2">Thank you for your purchase.</p>
          <div className="bg-card border border-border rounded-lg p-6 my-6 shadow-sm">
            <p className="text-sm text-muted-foreground mb-1 uppercase tracking-widest font-bold">Order Number</p>
            <p className="font-sans text-3xl font-extrabold text-primary">{orderSuccess}</p>
          </div>
          <Link href="/shop" className="text-primary font-bold hover:underline underline-offset-4 font-bangla">
            আরও বই খুঁজুন (Back to Shop)
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // CHECKOUT FORM
  return (
    <div className="paper flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-[1200px] px-4 py-8 sm:px-8 lg:py-12">
        <Link href="/cart" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="size-4" /> Back to Cart
        </Link>
        <h1 className="font-bangla text-3xl font-bold text-foreground mb-8">চেকআউট (Checkout)</h1>
        
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm space-y-6">
              <h2 className="font-bangla text-xl font-bold">শিপিং ঠিকানা (Shipping Details)</h2>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name *</label>
                  <input required type="text" value={formData.customerName} onChange={e => setFormData({...formData, customerName: e.target.value})} className="w-full rounded-md border border-border bg-background p-3 outline-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number *</label>
                  <input required type="tel" value={formData.customerPhone} onChange={e => setFormData({...formData, customerPhone: e.target.value})} className="w-full rounded-md border border-border bg-background p-3 outline-none focus:border-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                <input type="email" value={formData.customerEmail} onChange={e => setFormData({...formData, customerEmail: e.target.value})} className="w-full rounded-md border border-border bg-background p-3 outline-none focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Address & Pincode *</label>
                <textarea required rows={4} value={formData.shippingAddress} onChange={e => setFormData({...formData, shippingAddress: e.target.value})} className="w-full rounded-md border border-border bg-background p-3 outline-none focus:border-primary resize-none" />
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 className="font-bangla text-xl font-bold mb-4">পেমেন্ট (Payment)</h2>
              <div className="rounded-md border-2 border-primary bg-primary/5 p-4 flex items-center gap-3">
                 <input type="radio" checked readOnly className="size-4 text-primary" />
                 <span className="font-bold text-foreground">Cash on Delivery (COD)</span>
              </div>
            </div>

            <button type="submit" disabled={isSubmitting || cart.length === 0} className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary font-bangla text-lg font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 disabled:opacity-50">
              {isSubmitting ? <Loader2 className="size-5 animate-spin" /> : "অর্ডার প্লেস করুন (Place Order)"}
            </button>
          </form>

          {/* Right Side Summary Panel */}
          <div>
            <div className="sticky top-24 rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 className="font-bangla text-xl font-bold text-foreground mb-6">অর্ডার সারাংশ</h2>
              
              <div className="flex flex-col gap-4 font-sans text-sm text-foreground/80 border-b border-border pb-6 max-h-[300px] overflow-y-auto pr-2">
                {cart.map(item => (
                   <div key={item.cartItemId} className="flex justify-between gap-4">
                     <p className="line-clamp-2"><span className="font-bold">{item.quantity}x</span> {item.title}</p>
                     <p className="font-semibold shrink-0">₹{(parseInt(item.price.replace(/\D/g, "")) * item.quantity).toLocaleString('en-IN')}</p>
                   </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 font-sans text-sm text-foreground/80 border-b border-border py-6">
                <div className="flex justify-between"><p>Subtotal</p><p className="font-semibold text-foreground">₹{cartTotal.toLocaleString('en-IN')}</p></div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p className="font-semibold text-foreground">{shipping === 0 ? <span className="text-green-600">Free</span> : `₹${shipping}`}</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-6">
                <p className="font-bangla text-lg font-bold text-foreground">মোট (Total)</p>
                <p className="font-sans text-2xl font-extrabold text-foreground tracking-tight">₹{finalTotal.toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}