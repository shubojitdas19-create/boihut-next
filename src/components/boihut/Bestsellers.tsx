import { getBooks } from "@/lib/data";
import { BestsellersClient } from "./BestsellersClient"; // Import the client wrapper

export async function Bestsellers() {
  // FAST SERVER-SIDE FETCH
  const allBooks = await getBooks();
  
  // Get the 12 most recent books for the grid
  const latestBooks = allBooks.slice(0, 12);

  return (
    <section className="relative overflow-hidden bg-[#f3ecdf] px-4 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10 xl:px-20" aria-labelledby="bestsellers-heading">
      
      {/* Background Motifs */}
      <div className="pointer-events-none absolute -left-32 top-20 size-72 rounded-full border border-primary/10 bg-primary/[0.03]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-12 size-80 rounded-full border-[18px] border-[#e8785d]/10" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[12%] top-12 hidden text-6xl text-primary/10 lg:block" aria-hidden="true">✦</div>

      {/* Render the interactive Client Component */}
      <BestsellersClient latestBooks={latestBooks} />
      
    </section>
  );
}