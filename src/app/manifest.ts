import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "বইhut — Online Bengali Bookstore | Kolkata College Street Books",
    short_name: "বইhut",
    description:
      "Kolkata's authentic online Bengali bookstore. Genuine Bengali literature, classics, poetry, thrillers, and kids' books delivered directly from College Street boipara.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf5ec",
    theme_color: "#b8202e",
    lang: "bn",
    icons: [
      {
        src: "/boihut-mark.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/boihut-mark.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
