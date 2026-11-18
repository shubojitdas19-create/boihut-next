import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/shop", "/collections", "/publishers", "/shop/*"],
        disallow: [
          "/cart",
          "/checkout",
          "/api/",
          "/_next/",
          "/*?*sort=",
          "/*?*minPrice=",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/cart", "/checkout", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
