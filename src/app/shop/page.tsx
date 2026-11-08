import { getFilteredBooks, getStoreFilters } from "@/lib/data";
import { Header } from "@/components/boihut/Header";
import { Footer } from "@/components/boihut/Footer";
import ShopClient from "./ShopClient";

export const dynamic = "force-dynamic";

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

  return (
    <div className="paper flex min-h-screen flex-col">
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