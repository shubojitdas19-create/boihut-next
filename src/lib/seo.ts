import type { Metadata } from "next";
import type { Book } from "@/lib/data";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://boihut.in"
).replace(/\/$/, "");

export const SITE_NAME = "বইhut | Boihut";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/college-street-panorama2.png`;
export const SITE_LOGO = `${SITE_URL}/boihut-mark.png`;

export const SEO_KEYWORDS = [
  // Brand variations
  "Boihut",
  "বইhut",
  "Boi Hut",
  "BoiHut Kolkata",
  "বই হাট",
  "boihut.in",
  "boihut online bookstore",
  "boier haat",
  "boihaat",

  // Core Bengali E-commerce Intent
  "Bengali books online",
  "Buy Bengali books online",
  "Bangla boi online",
  "Bengali bookstore Kolkata",
  "Buy Bangla books India",
  "College Street book store online",
  "College Street online delivery",
  "Kolkata book delivery",
  "বাংলা বই কিনুন",
  "অনলাইন বইয়ের দোকান",
  "বইমেলা অনলাইন",
  "কলকাতা বইপাড়া",
  "কলেজ স্ট্রিট বইয়ের দোকান",

  // Literature & Genres
  "Bangla Sahitya",
  "Bengali literature classics",
  "Bangla kobita",
  "Bengali poetry books",
  "Bangla thriller",
  "Bengali detective stories",
  "Feluda samagra",
  "Byomkesh Bakshi complete",
  "Kakababu stories",
  "Professor Shanku science fiction",
  "Bengali comics",
  "Nonte Fonte",
  "Bantul The Great",
  "Handa Bhonda",
  "Bengali translation books",
  "Bengali kids story books",

  // Iconic Bengali Authors
  "Rabindranath Tagore books",
  "Satyajit Ray books",
  "Sarat Chandra Chattopadhyay",
  "Sunil Gangopadhyay",
  "Bibhutibhushan Bandyopadhyay",
  "Tarasankar Bandyopadhyay",
  "Manik Bandyopadhyay",
  "Sukumar Ray",
  "Kazi Nazrul Islam",
  "Shirshendu Mukhopadhyay",
  "Humayun Ahmed books",
  "Sanjeeb Chattopadhyay",
  "Buddhadeb Guha",
  "Jibananda Das",
  "Shankha Ghosh",

  // Publishers & Cultural hubs
  "Ananda Publishers",
  "Dey's Publishing",
  "Mitra and Ghosh",
  "Patra Bharati",
  "Signet Press",
  "Sahityam",
  "College Street boipara",
  "International Kolkata Book Fair",
  "Kolkata Boimela books"
];

export const DEFAULT_DESCRIPTION =
  "বইhut (Boihut) — Kolkata's premier online Bengali bookstore. Order authentic Bengali literature, classics, thrillers, poetry, comics and academic books directly from College Street boipara. 100% genuine editions with fast doorstep delivery across West Bengal and India.";

/**
 * Returns JSON-LD structured data for WebSite with Sitelinks SearchBox
 */
export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: ["Boihut", "বইhut", "Boi Hut Kolkata", "Boihut Bengali Bookstore"],
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: ["bn-IN", "en-IN"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/shop?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Returns JSON-LD structured data for the Bookstore Organization & Local Heritage Business
 */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["BookStore", "OnlineStore"],
    "@id": `${SITE_URL}/#organization`,
    name: "বইhut (Boihut)",
    alternateName: "Boihut Kolkata",
    url: SITE_URL,
    logo: SITE_LOGO,
    image: DEFAULT_OG_IMAGE,
    description: DEFAULT_DESCRIPTION,
    telephone: "+91-9830000000",
    email: "support@boihut.in",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
    address: {
      "@type": "PostalAddress",
      streetAddress: "College Street (Boipara)",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700073",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.5744",
      longitude: "88.3629"
    },
    areaServed: [
      {
        "@type": "Country",
        name: "India"
      },
      {
        "@type": "AdministrativeArea",
        name: "West Bengal"
      }
    ],
    sameAs: [
      "https://facebook.com/boihut",
      "https://instagram.com/boihut",
      "https://twitter.com/boihut"
    ]
  };
}

/**
 * Returns JSON-LD structured data for a Book Product
 */
export function getBookJsonLd(book: Book, priceNum: number) {
  return {
    "@context": "https://schema.org",
    "@type": ["Product", "Book"],
    "@id": `${SITE_URL}/shop/${book.slug}`,
    name: book.title,
    headline: book.title,
    bookFormat: "https://schema.org/Paperback",
    description: book.description || `${book.title} by ${book.author}, published by ${book.publisher || "বইhut"}.`,
    image: book.images && book.images.length > 0 ? book.images : [book.cover || DEFAULT_OG_IMAGE],
    isbn: book.isbn || undefined,
    numberOfPages: book.pages > 0 ? book.pages : undefined,
    author: {
      "@type": "Person",
      name: book.author
    },
    publisher: {
      "@type": "Organization",
      name: book.publisher || "বইhut"
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/shop/${book.slug}`,
      priceCurrency: "INR",
      price: priceNum,
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "বইhut"
      }
    }
  };
}

/**
 * Returns BreadcrumbList JSON-LD
 */
export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}
