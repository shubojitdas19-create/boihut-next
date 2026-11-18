import type { Metadata } from "next";
import { getFilteredBooks, getStoreFilters } from "@/lib/data";
import { Header } from "@/components/boihut/Header";
import { Footer } from "@/components/boihut/Footer";
import { SITE_URL, getBreadcrumbJsonLd } from "@/lib/seo";
import ShopClient from "./ShopClient";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}): Promise<Metadata> {
  const params = await searchParams;
  let title = "সব বই (Shop All Bengali Books)";
  let description =
    "Browse our complete catalog of authentic Bengali books, poetry, novels, detective thrillers, comics, and children's literature from College Street.";

  if (params.author) {
    title = `${params.author} এর বই (Books by ${params.author})`;
    description = `Buy authentic Bengali books written by ${params.author} online with fast home delivery across West Bengal and India from বইhut.`;
  } else if (params.brand) {
    title = `${params.brand} এর সমস্ত বই (Publications by ${params.brand})`;
    description = `Explore books published by ${params.brand}. Authentic editions delivered straight from College Street boipara on বইhut.`;
  } else if (params.category) {
    title = `${params.category} Books | বাংলা বইয়ের সংগ্রহ`;
    description = `Discover top-rated ${params.category} books in Bengali. Handpicked classics, new releases, and bestsellers on বইhut.`;
  } else if (params.q) {
    title = `"${params.q}" সম্পর্কিত বই (Search Results)`;
    description = `Search results for "${params.q}" on বইhut online bookstore. Find genuine Bengali editions with fast shipping.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/shop`,
    },
    openGraph: {
      title: `${title} | বইhut`,
      description,
      url: `${SITE_URL}/shop`,
    },
  };
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  
  // Parallel fetch to load books AND filters at the exact same time
  const [ { books, pagination }, filters ] = await Promise.all([
    getFilteredBooks(params),
    getStoreFilters()
  ]);

  const breadcrumbs = getBreadcrumbJsonLd([
    { name: "হোম", url: "/" },
    { name: "বইয়ের দোকান (Shop)", url: "/shop" },
  ]);

  return (
    <div className="paper flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Header />
      <main className="flex-1 pb-8 md:pb-12">
        <ShopClient 
          initialBooks={books} 
          initialPagination={pagination} 
          currentParams={params} 
          filters={filters}
        />
      </main>
      <Footer />
    </div>
  );
}