export type Book = {
  id: string; 
  slug: string;
  title: string;
  author: string;
  price: string;
  category: string;
  cover: string;
  tag?: string;
  description: string;
  pages: number;
  publisher: string;
  isbn: string;
  images: string[];
};

// Use the environment variables just like the-colour-world
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
const STORE_ID = process.env.NEXT_PUBLIC_STORE_ID;

// Helper to transform your SaaS backend product format into the Book format the UI expects
function transformProduct(product: any): Book {
  // Extract specs from the JSON array
  const specs = product.specifications || [];
  const getSpec = (label: string) => specs.find((s: any) => s.label === label)?.value || "N/A";
  
  // Get the primary image or a placeholder
  const coverImg = product.media && product.media.length > 0 
    ? product.media.sort((a: any, b: any) => a.sortOrder - b.sortOrder)[0].url 
    : "/images/placeholder.jpg";

  return {
    id: product.id,
    slug: product.slug,
    title: product.name,
    author: product.brand || "Unknown Author", // Storing Author in the Brand field
    price: `₹${product.basePrice}`,
    category: product.category?.name || "Uncategorized",
    cover: coverImg,
    tag: product.isFeatured ? "Bestseller" : undefined,
    description: product.description || "",
    pages: parseInt(getSpec("Pages")) || 0,
    publisher: getSpec("Publisher") || "বইhut প্রকাশনী",
    isbn: getSpec("ISBN") || "N/A",
    images: product.media?.map((m: any) => m.url) || [],
  };
}

// Fetch ALL active products for this specific store
export async function getBooks(): Promise<Book[]> {
  if (!STORE_ID) {
    console.error("STORE_ID is not defined in .env.local");
    return [];
  }

  try {
    // Fetching exactly as your backend expects: ?storeId=UUID
    const res = await fetch(`${API_URL}/storefront/products?storeId=${STORE_ID}`, {
      next: { revalidate: 60 } // Cache for 60 seconds
    });
    
    if (!res.ok) return [];
    
    const json = await res.json();
    if (!json.success) return [];
    
    return json.data.map(transformProduct);
  } catch (error) {
    console.error("Failed to fetch books from backend:", error);
    return [];
  }
}

// Fetch a SINGLE product by its slug for the Product Page
export async function getBookBySlug(slug: string): Promise<Book | undefined> {
  const books = await getBooks();
  return books.find((book) => book.slug === slug);
}