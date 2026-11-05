import Link from "next/link";
import {
  BookCheck,
  Facebook,
  Instagram,
  Mail,
  Phone,
  ShieldCheck,
  Truck,
  Youtube,
} from "lucide-react";

const TRUST_MARKERS = [
  { icon: Truck, short: "Free delivery", long: "Free Kolkata delivery above ₹599" },
  { icon: BookCheck, short: "100% authentic", long: "Sourced from College Street publishers" },
  { icon: ShieldCheck, short: "Secure payment", long: "UPI, cards & netbanking" },
];

const FOOTER_LINKS = [
  {
    title: "Shop",
    links: [
      { label: "New Arrivals", href: "/shop?sort=new" },
      { label: "Bestsellers", href: "/shop?sort=popular" },
      { label: "Authors", href: "/authors" },
      { label: "Collections", href: "/collections" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Track Order", href: "/track" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

// Set up for actual image files. Place your real logos in the /public/payment/ directory.
const PAYMENT_LOGOS = [
  { name: "UPI", src: "/payment/upi.png" },
  { name: "Visa", src: "/payment/visa.png" },
  { name: "Mastercard", src: "/payment/master.png" },
  { name: "RuPay", src: "/payment/rupay.png" },
];

export function Footer() {
  return (
    <footer
      className="relative mt-auto bg-foreground text-background"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      <div className="kantha w-full text-mustard/70" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-8 lg:px-12 xl:px-20 2xl:px-24">
        {/* Trust strip */}
        <ul className="grid grid-cols-3 gap-2 border-b border-background/10 py-6 sm:gap-6 sm:py-7">
          {TRUST_MARKERS.map((marker) => (
            <li
              key={marker.short}
              className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-background/10 text-mustard">
                <marker.icon className="size-[18px]" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-semibold leading-tight text-background sm:text-sm">
                  {marker.short}
                </span>
                <span className="mt-0.5 hidden text-[13px] leading-snug text-background/70 sm:block">
                  {marker.long}
                </span>
              </span>
            </li>
          ))}
        </ul>

        {/* Brand + links */}
        <div className="grid gap-10 py-10 lg:grid-cols-[1.1fr_1.4fr] lg:gap-16 lg:py-12">
          <div className="flex flex-col items-start">
            <Link
              href="/"
              aria-label="বইhut — home"
              className="flex items-baseline text-[1.9rem] leading-none"
            >
              <span className="font-bangla font-bold text-mustard">বই</span>
              <span className="pr-0.5 font-display italic tracking-tight text-background">
                hut
              </span>
            </Link>
            
            <p className="mt-4 font-bangla text-[17px] font-medium leading-snug text-background">
              বাঙালির বইপ্রেম আর কলেজ স্ট্রিটের ঐতিহ্য— এখন আপনার ঠিকানায়।
            </p>
            <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-background/70">
              Kolkata&apos;s own bookstore for authentic Bengali literature.
            </p>

            {/* Compact Phone & Email Section */}
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
              <a href="tel:+919876543210" className="flex items-center gap-1.5 text-sm text-background/80 transition-colors hover:text-mustard">
                <Phone className="size-3.5" aria-hidden="true" />
                +91 98765 43210
              </a>
              <a href="mailto:hello@boihut.com" className="flex items-center gap-1.5 text-sm text-background/80 transition-colors hover:text-mustard">
                <Mail className="size-3.5" aria-hidden="true" />
                hello@boihut.com
              </a>
            </div>

            <ul className="mt-5 flex items-center gap-2">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid size-11 place-items-center rounded-full border border-background/15 text-background/75 transition-colors hover:border-mustard hover:text-mustard focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
                  >
                    <social.icon className="size-[18px]" strokeWidth={1.6} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-8"
          >
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-mustard">
                  {group.title}
                </h3>
                <ul className="space-y-1">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-8 items-center text-[14.5px] text-background/75 transition-colors hover:text-mustard focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Legal row with strictly restored padding (py-5) and gap (gap-3) */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-background/10 py-5 text-center sm:flex-row sm:text-left">
          
          <div className="text-[13px] text-background/65">
            <p>
              &copy; {new Date().getFullYear()} <span className="font-bangla">বই</span>hut. All rights reserved.
            </p>
            <p className="mt-0.5 sm:mt-1">
              Designed & Developed by <a href="#" className="font-semibold text-background/80 transition-colors hover:text-mustard">SJ Digital Studio</a>
            </p>
          </div>

          <p className="hidden text-[13px] text-background/65 lg:block">
            Made with <span className="text-primary" aria-label="love">♥</span> in Kolkata
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-1.5" aria-label="Accepted payment methods">
            {PAYMENT_LOGOS.map((method) => (
              <li
                key={method.name}
                title={method.name}
                className="flex h-[26px] w-[38px] items-center justify-center rounded-[3px] bg-background px-1 shadow-sm"
              >
                {/* Fallback styling ensures it looks okay even before you add the images */}
                <img 
                  src={method.src} 
                  alt={method.name} 
                  className="h-full w-full object-contain text-[8px] font-bold text-foreground"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>

        </div>
      </div>
    </footer>
  );
}