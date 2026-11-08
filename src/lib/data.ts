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

export type PaginatedBooks = {
  books: Book[];
  pagination: { total: number; page: number; limit: number; totalPages: number };
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
const STORE_ID = process.env.NEXT_PUBLIC_STORE_ID;

// Replace the transformProduct function in src/lib/data.ts
function transformProduct(product: any): Book {
  const specs = product.specifications || [];
  const getSpec = (label: string) => specs.find((s: any) => s.label === label)?.value || null;
  
  const coverImg = product.media && product.media.length > 0 
    ? product.media.sort((a: any, b: any) => a.sortOrder - b.sortOrder)[0].url 
    : "/images/placeholder.jpg";

  return {
    id: product.id,
    slug: product.slug,
    title: product.name,
    // FIX: Pull Author from JSON safely
    author: getSpec("Author") || getSpec("লেখক") || "অজানা", 
    price: `₹${product.basePrice}`,
    category: product.category?.name || "Uncategorized",
    cover: coverImg,
    tag: product.isFeatured ? "Bestseller" : undefined,
    description: product.description || "",
    pages: parseInt(getSpec("Pages")) || 0,
    // FIX: Keep publisher distinct
    publisher: getSpec("Publisher") || product.brand || "", 
    isbn: getSpec("ISBN") || "",
    images: product.media?.map((m: any) => m.url) || [],
  };
}

// 1. HOMEPAGE FETCHER: Keeps your Bestsellers grid working perfectly
export async function getBooks(limit: number = 50): Promise<Book[]> {
  if (!STORE_ID) {
    console.error("STORE_ID is not defined in .env.local");
    return [];
  }

  try {
    const res = await fetch(`${API_URL}/storefront/products?storeId=${STORE_ID}&limit=${limit}`, {
      next: { revalidate: 60 } 
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

// 2. SHOP PAGE FETCHER: Handles pagination, search, and all filters
export async function getFilteredBooks(searchParams?: { [key: string]: string | undefined }): Promise<PaginatedBooks> {
  if (!STORE_ID) return { books: [], pagination: { total: 0, page: 1, limit: 24, totalPages: 0 } };

  try {
    const query = new URLSearchParams();
    query.append("storeId", STORE_ID);
    query.append("limit", "24"); // Default to 24 books per page

    if (searchParams) {
      if (searchParams.page) query.append("page", searchParams.page);
      if (searchParams.q) query.append("q", searchParams.q);
      if (searchParams.category) query.append("category", searchParams.category);
      if (searchParams.brand) query.append("brand", searchParams.brand);
      if (searchParams.author) query.append("author", searchParams.author);
      if (searchParams.minPrice) query.append("minPrice", searchParams.minPrice);
      if (searchParams.maxPrice) query.append("maxPrice", searchParams.maxPrice);
      if (searchParams.sort) query.append("sortBy", searchParams.sort);
    }

    const res = await fetch(`${API_URL}/storefront/products?${query.toString()}`, {
      cache: 'no-store' 
    });
    
    if (!res.ok) return { books: [], pagination: { total: 0, page: 1, limit: 24, totalPages: 0 } };
    
    const json = await res.json();
    if (!json.success) return { books: [], pagination: { total: 0, page: 1, limit: 24, totalPages: 0 } };
    
    return {
      books: json.data.map(transformProduct),
      pagination: json.pagination
    };
  } catch (error) {
    console.error("Failed to fetch books from backend:", error);
    return { books: [], pagination: { total: 0, page: 1, limit: 24, totalPages: 0 } };
  }
}

// 3. PRODUCT PAGE FETCHER: Fetches a single book by its slug
export async function getBookBySlug(slug: string): Promise<Book | undefined> {
  if (!STORE_ID || !slug) return undefined;

  try {
    const res = await fetch(`${API_URL}/storefront/products?storeId=${STORE_ID}&slug=${slug}`, {
      next: { revalidate: 60 } 
    });

    if (!res.ok) return undefined;

    const json = await res.json();
    if (!json.success || !json.data || json.data.length === 0) return undefined;

    return transformProduct(json.data[0]);
  } catch (error) {
    console.error(`Failed to fetch book slug ${slug}:`, error);
    return undefined;
  }
}

export type StoreFilters = {
  categories: { id: string, name: string, slug: string }[];
  publishers: string[];
  authors: string[];
}

// Fetch all dynamic filters (Cached for 1 hour so it loads instantly)
export async function getStoreFilters(): Promise<StoreFilters> {
  if (!STORE_ID) return { categories: [], publishers: [], authors: [] };
  
  try {
    const res = await fetch(`${API_URL}/storefront/filters?storeId=${STORE_ID}`, {
      next: { revalidate: 3600 } 
    });
    
    if (!res.ok) return { categories: [], publishers: [], authors: [] };
    
    const json = await res.json();
    return json.success ? json.data : { categories: [], publishers: [], authors: [] };
  } catch (error) {
    console.error("Failed to fetch filters:", error);
    return { categories: [], publishers: [], authors: [] };
  }
}