"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Header } from "@/components/boihut/Header";
import { Footer } from "@/components/boihut/Footer";
import { Loader2, CheckCircle2, ArrowLeft, Truck, ShieldCheck, CreditCard } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Helper to safely format prices
const formatPrice = (rawStr: string | number) => {
  const num = parseInt(rawStr.toString().replace(/\D/g, "")) || 0;
  return num > 10000 ? Math.round(num / 100) : num;
};

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    addressLine: "",
    city: "",
    state: "West Bengal",
    pincode: "",
  });

  // Payment State (COD vs ONLINE)
  const [paymentMethod, setPaymentMethod] = useState<"COD" | "ONLINE">("ONLINE");

  // Dynamic Calculation Logic
  const safeCartTotal = cartTotal > 10000 ? Math.round(cartTotal / 100) : cartTotal;
  const totalBooks = cart.reduce((total, item) => total + item.quantity, 0);

  // Determine base shipping rate per book based on geography
  let perBookShipping = 110; // Default: Rest of India
  
  if (formData.state === "West Bengal") {
    // Extract first 3 digits of the pincode to determine region
    const pinPrefix = parseInt(formData.pincode.substring(0, 3) || "0", 10);
    
    // Uttor Bongo (North Bengal) typically falls between 732 (Malda) and 736 (Cooch Behar)
    if (pinPrefix >= 732 && pinPrefix <= 736) {
      perBookShipping = 80;
    } else {
      // Dokhin Bongo (South Bengal)
      perBookShipping = 65; 
    }
  }

  const shipping = totalBooks === 0 ? 0 : perBookShipping * totalBooks;
  const finalTotal = safeCartTotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setIsSubmitting(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
      const STORE_SLUG = process.env.NEXT_PUBLIC_STORE_SLUG || "boihut";
      
      const fullAddress = `${formData.addressLine}, ${formData.city}, ${formData.state} - ${formData.pincode}`;

      const payload = {
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        shippingAddress: fullAddress,
        totalAmount: finalTotal,
        paymentMethod: paymentMethod, // Sending the chosen payment method to the backend
        items: cart.map(item => ({
          productId: item.id,
          quantity: item.quantity,
          price: formatPrice(item.price)
        }))
      };

      const res = await fetch(`${API_URL}/storefront/${STORE_SLUG}/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setOrderSuccess(data.orderNumber); 
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
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center lg:py-20">
          <div className="rounded-full bg-green-50 p-6 mb-6 border border-green-100 shadow-sm">
            <CheckCircle2 className="size-24 text-green-600" />
          </div>
          <h1 className="font-bangla text-4xl lg:text-5xl font-bold text-foreground mb-4">অর্ডার সফল হয়েছে!</h1>
          <p className="text-lg text-muted-foreground mb-2">Thank you for shopping with us.</p>
          
          <div className="bg-card border-2 border-dashed border-border rounded-xl p-8 my-8 shadow-sm max-w-sm w-full relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
             <p className="text-xs text-muted-foreground mb-2 uppercase tracking-widest font-bold font-sans">Order Reference</p>
             <p className="font-sans text-4xl font-extrabold text-foreground tracking-tight">{orderSuccess}</p>
          </div>
          
          <Link href="/shop" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 font-bangla text-[15px] font-bold text-background transition-all hover:bg-foreground/90 active:scale-95 shadow-md">
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            আরও বই খুঁজুন 
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // CHECKOUT FORM
  return (
    <div className="paper flex min-h-screen flex-col bg-[#fcfbf9]">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-8 lg:py-12 xl:px-20 2xl:px-24">
        
        <Link href="/cart" className="inline-flex items-center gap-2 font-bangla text-sm font-bold text-muted-foreground hover:text-primary mb-6 transition-colors group">
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /> ব্যাগে ফিরে যান
        </Link>
        
        <h1 className="font-bangla text-3xl font-bold text-foreground mb-8">চেকআউট (Checkout)</h1>
        
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.5fr_1fr] items-start">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            
            {/* 1. Contact Info Section */}
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                 <div className="grid size-8 place-items-center rounded-full bg-primary/10 text-primary font-bold">1</div>
                 <h2 className="font-bangla text-xl font-bold text-foreground">যোগাযোগের তথ্য (Contact)</h2>
              </div>
              
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Full Name *</label>
                  <input required type="text" placeholder="e.g. Satyajit Ray" value={formData.customerName} onChange={e => setFormData({...formData, customerName: e.target.value})} className="w-full rounded-md border border-border bg-background p-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/20 font-sans" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Phone Number *</label>
                  <input required type="tel" placeholder="+91" maxLength={10} value={formData.customerPhone} onChange={e => setFormData({...formData, customerPhone: e.target.value.replace(/\D/g, '')})} className="w-full rounded-md border border-border bg-background p-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/20 font-sans" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                  <input type="email" placeholder="Required for order updates" value={formData.customerEmail} onChange={e => setFormData({...formData, customerEmail: e.target.value})} className="w-full rounded-md border border-border bg-background p-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/20 font-sans" />
                </div>
              </div>
            </div>

            {/* 2. Shipping Address Section */}
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                 <div className="grid size-8 place-items-center rounded-full bg-primary/10 text-primary font-bold">2</div>
                 <h2 className="font-bangla text-xl font-bold text-foreground">ডেলিভারির ঠিকানা (Shipping)</h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Street Address / House No. *</label>
                  <input required type="text" placeholder="123 College Street" value={formData.addressLine} onChange={e => setFormData({...formData, addressLine: e.target.value})} className="w-full rounded-md border border-border bg-background p-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/20 font-sans" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">City / District *</label>
                  <input required type="text" placeholder="Kolkata" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full rounded-md border border-border bg-background p-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/20 font-sans" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">State *</label>
                  <select required value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} className="w-full rounded-md border border-border bg-background p-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/20 font-sans">
                     <option value="West Bengal">West Bengal</option>
                     <option value="Tripura">Tripura</option>
                     <option value="Assam">Assam</option>
                     <option value="Odisha">Odisha</option>
                     <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">PIN Code *</label>
                  <input required type="text" maxLength={6} placeholder="700073" value={formData.pincode} onChange={e => setFormData({...formData, pincode: e.target.value.replace(/\D/g, '')})} className="w-full rounded-md border border-border bg-background p-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/20 font-sans" />
                </div>
              </div>
            </div>

            {/* 3. High-End Payment Section */}
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-sm">
               <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                 <div className="grid size-8 place-items-center rounded-full bg-primary/10 text-primary font-bold">3</div>
                 <h2 className="font-bangla text-xl font-bold text-foreground">পেমেন্ট (Payment)</h2>
              </div>
              
              <div className="flex flex-col gap-4">
                
                {/* Online Payment Toggle */}
                <label className={`flex cursor-pointer flex-col gap-3 rounded-lg border-2 p-4 transition-all ${paymentMethod === 'ONLINE' ? 'border-primary bg-primary/5' : 'border-border bg-background hover:bg-muted/50'}`}>
                   <div className="flex items-center gap-4">
                     <input 
                        type="radio" 
                        name="payment" 
                        value="ONLINE"
                        checked={paymentMethod === 'ONLINE'} 
                        onChange={() => setPaymentMethod('ONLINE')}
                        className="size-5 text-primary focus:ring-primary" 
                     />
                     <div className="flex flex-col flex-1">
                       <span className="font-bold text-foreground font-sans flex items-center gap-2">
                         Pay Online <span className="bg-green-100 text-green-700 text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm">Recommended</span>
                       </span>
                       <span className="text-xs text-muted-foreground font-sans mt-0.5">Cards, UPI, NetBanking, Wallets.</span>
                     </div>
                   </div>
                   
                   {/* Logos only show when Online is selected */}
                   {paymentMethod === 'ONLINE' && (
                     <div className="ml-9 mt-1 flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-1">
                        <div className="h-8 w-12 bg-white rounded border border-border flex items-center justify-center p-1">
                           <Image src="/payment/upi.png" alt="UPI" width={40} height={20} className="object-contain" />
                        </div>
                        <div className="h-8 w-12 bg-white rounded border border-border flex items-center justify-center p-1">
                           <Image src="/payment/rupay.png" alt="RuPay" width={40} height={20} className="object-contain" />
                        </div>
                        <div className="h-8 w-12 bg-white rounded border border-border flex items-center justify-center p-1">
                           <Image src="/payment/visa.png" alt="Visa" width={40} height={20} className="object-contain" />
                        </div>
                        <div className="h-8 w-12 bg-white rounded border border-border flex items-center justify-center p-1">
                           <Image src="/payment/master.png" alt="MasterCard" width={40} height={20} className="object-contain" />
                        </div>
                     </div>
                   )}
                </label>

                {/* Cash on Delivery Toggle */}
                <label className={`flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-all ${paymentMethod === 'COD' ? 'border-primary bg-primary/5' : 'border-border bg-background hover:bg-muted/50'}`}>
                   <input 
                      type="radio" 
                      name="payment"
                      value="COD"
                      checked={paymentMethod === 'COD'} 
                      onChange={() => setPaymentMethod('COD')}
                      className="size-5 text-primary focus:ring-primary" 
                   />
                   <div className="flex flex-col">
                     <span className="font-bold text-foreground font-sans">Cash on Delivery (COD)</span>
                     <span className="text-xs text-muted-foreground font-sans mt-0.5">Pay with cash upon delivery.</span>
                   </div>
                </label>
                
              </div>
            </div>

            {/* Desktop Action */}
            <div className="hidden lg:block">
              <button type="submit" disabled={isSubmitting || cart.length === 0} className="group relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-primary font-bangla text-lg font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 disabled:opacity-50 active:scale-[0.98]">
                {isSubmitting ? <Loader2 className="size-5 animate-spin relative z-10" /> : <span className="relative z-10 flex items-center gap-2">{paymentMethod === 'ONLINE' ? <CreditCard className="size-5"/> : null} অর্ডার প্লেস করুন (Place Order)</span>}
                <div className="absolute inset-0 z-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </button>
            </div>
          </form>

          {/* Right Side Summary Panel */}
          <div>
            <div className="sticky top-24 rounded-xl border border-border bg-card p-6 shadow-md sm:p-8">
              <h2 className="font-bangla text-xl font-bold text-foreground mb-6">অর্ডার সারাংশ</h2>
              
              <div className="flex flex-col gap-4 font-sans text-sm text-foreground border-b border-border pb-6 max-h-[350px] overflow-y-auto pr-2">
                {cart.map(item => (
                   <div key={item.cartItemId} className="flex gap-4 items-start">
                     <div className="relative aspect-[3/4] w-12 shrink-0 overflow-hidden rounded-sm bg-secondary border border-border/50">
                        <Image src={item.cover} alt={item.title} fill className="object-cover" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="line-clamp-2 font-bangla font-semibold text-[14px] leading-snug">{item.title}</p>
                       <p className="text-muted-foreground text-xs mt-1">Qty: {item.quantity}</p>
                     </div>
                     <p className="font-bold shrink-0">₹{(formatPrice(item.price) * item.quantity).toLocaleString('en-IN')}</p>
                   </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 font-sans text-[15px] text-foreground/80 border-b border-border py-6">
                <div className="flex justify-between items-center"><p>Subtotal</p><p className="font-bold text-foreground">₹{safeCartTotal.toLocaleString('en-IN')}</p></div>
                
                {/* Updated Dynamic Shipping Display */}
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <p>Shipping</p>
                    <p className="text-xs text-muted-foreground">
                      ₹{perBookShipping} per book
                    </p>
                  </div>
                  <p className="font-bold text-foreground">₹{shipping.toLocaleString('en-IN')}</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-6 mb-8">
                <p className="font-bangla text-lg font-bold text-foreground">মোট (Total)</p>
                <p className="font-sans text-3xl font-extrabold text-foreground tracking-tight">₹{finalTotal.toLocaleString('en-IN')}</p>
              </div>

              {/* Mobile Action (Sticky inside summary for phones) */}
              <div className="lg:hidden mb-6 border-t border-border pt-6">
                 <button onClick={handleSubmit} disabled={isSubmitting || cart.length === 0} className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary font-bangla text-lg font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 disabled:opacity-50 active:scale-[0.98]">
                  {isSubmitting ? <Loader2 className="size-5 animate-spin" /> : <span className="flex items-center gap-2">{paymentMethod === 'ONLINE' ? <CreditCard className="size-5"/> : null} অর্ডার প্লেস করুন</span>}
                </button>
              </div>

              <div className="rounded-lg bg-secondary/50 p-4 space-y-3">
                 <div className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
                   <ShieldCheck className="size-4 text-green-600" /> 100% Secure Checkout Process
                 </div>
                 <div className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
                   <Truck className="size-4 text-primary" /> Reliable Delivery across India
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}