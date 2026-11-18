import type { Metadata } from "next";
import { getBookBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import { parsePrice } from "@/lib/utils";
import { 
  SITE_URL, 
  DEFAULT_OG_IMAGE, 
  getBookJsonLd, 
  getBreadcrumbJsonLd 
} from "@/lib/seo";
import ProductClient from "./ProductClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const book = await getBookBySlug(resolvedParams.slug);

  if (!book) {
    return {
      title: "বই পাওয়া যায়নি (Book Not Found) | বইhut",
    };
  }

  const cleanDescription = book.description
    ? book.description.replace(/<[^>]*>?/gm, "").substring(0, 160)
    : `${book.title} by ${book.author}, published by ${book.publisher || "বইhut"}. Available at ${book.price} with fast delivery.`;

  const coverUrl = book.cover && book.cover.startsWith("http")
    ? book.cover
    : book.cover
    ? `${SITE_URL}${book.cover}`
    : DEFAULT_OG_IMAGE;

  return {
    title: `${book.title} — ${book.author}`,
    description: cleanDescription,
    keywords: [
      book.title,
      book.author,
      book.publisher,
      book.category,
      "Bangla boi",
      "Bengali book",
      "Buy online Kolkata",
      "বইhut",
    ].filter(Boolean),
    alternates: {
      canonical: `${SITE_URL}/shop/${book.slug}`,
    },
    openGraph: {
      title: `${book.title} — ${book.author} | বইhut`,
      description: cleanDescription,
      url: `${SITE_URL}/shop/${book.slug}`,
      type: "book",
      images: [
        {
          url: coverUrl,
          width: 600,
          height: 800,
          alt: `${book.title} — ${book.author}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${book.title} — ${book.author} | বইhut`,
      description: cleanDescription,
      images: [coverUrl],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Await the network request on the server
  const book = await getBookBySlug(resolvedParams.slug);

  if (!book) {
    notFound();
  }

  const priceNum = parsePrice(book.price);
  const bookSchema = getBookJsonLd(book, priceNum);
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "হোম", url: "/" },
    { name: "বইয়ের দোকান", url: "/shop" },
    { name: book.category || "সাহিত্য", url: `/shop?category=${encodeURIComponent(book.category || "")}` },
    { name: book.title, url: `/shop/${book.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductClient book={book} />
    </>
  );
}