import { getBookBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Await the network request on the server
  const book = await getBookBySlug(resolvedParams.slug);

  if (!book) {
    notFound();
  }

  // Pass the loaded data to the interactive UI
  return <ProductClient book={book} />;
}