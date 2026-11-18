import type { Metadata } from "next";
import { Fraunces, Work_Sans, Tiro_Bangla, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { 
  SITE_URL, 
  SITE_NAME, 
  DEFAULT_DESCRIPTION, 
  SEO_KEYWORDS, 
  DEFAULT_OG_IMAGE,
  getWebsiteJsonLd,
  getOrganizationJsonLd
} from "@/lib/seo";

const fraunces = Fraunces({
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work",
  subsets: ["latin"],
});

const tiroBangla = Tiro_Bangla({
  weight: "400",
  variable: "--font-tiro",
  subsets: ["bengali"],
});

const hindSiliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind",
  subsets: ["bengali"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "বইhut (Boihut) — Online Bengali Bookstore | Kolkata College Street",
    template: "%s | বইhut",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  applicationName: "বইhut",
  authors: [{ name: "বইhut", url: SITE_URL }],
  creator: "বইhut",
  publisher: "বইhut",
  category: "books",
  classification: "Online Bookstore, Bengali Literature, College Street Books",
  alternates: {
    canonical: "/",
    languages: {
      "bn-IN": "/",
      "en-IN": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "bn_IN",
    alternateLocale: ["en_IN", "en_US"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "বইhut (Boihut) — Online Bengali Bookstore | Kolkata College Street",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "বইhut — Kolkata's Heritage Bookstore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "বইhut (Boihut) — Online Bengali Bookstore",
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
    creator: "@boihut",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/boihut-mark.png",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = getWebsiteJsonLd();
  const organizationSchema = getOrganizationJsonLd();

  return (
    <html
      lang="bn"
      className={`${fraunces.variable} ${workSans.variable} ${tiroBangla.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}