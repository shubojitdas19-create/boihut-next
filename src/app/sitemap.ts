import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getBooks } from "@/lib/data";
import publishersData from "@/lib/boierhaat-publishers.json";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Core static storefront routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/shop`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/collections`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/publishers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Curated Literary Collection Slugs
  const collectionSlugs = [
    "bangla-sahitya",
    "poetry",
    "thriller",
    "kids-and-teens",
    "english",
  ];

  const collectionRoutes: MetadataRoute.Sitemap = collectionSlugs.map((slug) => ({
    url: `${SITE_URL}/shop?category=${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Publisher brand discovery routes
  const publisherRoutes: MetadataRoute.Sitemap = publishersData
    .slice(0, 50)
    .map((pub) => ({
      url: `${SITE_URL}/shop?brand=${encodeURIComponent(pub.name)}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  // Dynamic Product routes
  let bookRoutes: MetadataRoute.Sitemap = [];
  try {
    const books = await getBooks(100);
    bookRoutes = books.map((book) => ({
      url: `${SITE_URL}/shop/${book.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Sitemap dynamic book fetch failed:", error);
  }

  return [...staticRoutes, ...collectionRoutes, ...publisherRoutes, ...bookRoutes];
}
