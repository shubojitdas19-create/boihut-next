"use server";

// We don't import getBooks anymore. We fetch directly from the API using the new brand filter!
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
const STORE_ID = process.env.NEXT_PUBLIC_STORE_ID;

export async function fetchAuthorBooks(authorName: string, defaultTones: string[]) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
  const STORE_ID = process.env.NEXT_PUBLIC_STORE_ID;

  if (!STORE_ID) return [];

  try {
    // We changed &brand= to &author= here
    const res = await fetch(
      `${API_URL}/storefront/products?storeId=${STORE_ID}&author=${encodeURIComponent(authorName)}&limit=3`,
      { cache: 'no-store' } 
    );
    
    if (!res.ok) return [];
    
    const json = await res.json();
    if (!json.success || !json.data) return [];
    
    return json.data.map((b: any, i: number) => ({
      slug: b.slug,
      title: b.name.split('(')[0].trim(), 
      subtitle: b.tag || "বেস্টসেলার",
      price: `₹${b.basePrice}`,
      tone: defaultTones[i % 3],
      tag: "জনপ্রিয়",
      cover: b.media && b.media.length > 0 ? b.media[0].url : "https://via.placeholder.com/300x400?text=No+Cover"
    }));
  } catch (error) {
    console.error("Failed to fetch author books:", error);
    return [];
  }
}