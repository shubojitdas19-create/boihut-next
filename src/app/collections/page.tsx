import type { Metadata } from "next";
import Link from "next/link";
import { 
  BookOpen, 
  Feather, 
  Baby, 
  Globe, 
  Library, 
  Search,
  ArrowRight,
  Compass
} from "lucide-react";
import { SITE_URL, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "বইয়ের সংকলন (Curated Bengali Book Collections)",
  description:
    "Explore handpicked Bengali book collections: classic Bangla literature, soulful poetry, gripping thrillers, detective fiction, comics, and world literature translations.",
  alternates: {
    canonical: `${SITE_URL}/collections`,
  },
  openGraph: {
    title: "বইয়ের সংকলন (Curated Collections) | বইhut",
    description:
      "Explore curated genres: Bangla Sahitya, Poetry, Thrillers, Children's literature and international bestsellers.",
    url: `${SITE_URL}/collections`,
  },
};

// Curated collection data with tailored gradient themes
const COLLECTIONS = [
  {
    title: "Bangla Sahitya",
    bn: "বাংলা সাহিত্য",
    slug: "bangla-sahitya",
    description: "Explore classic and contemporary Bengali literature, timeless novels, and short stories.",
    icon: BookOpen,
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
    iconColor: "text-orange-600 bg-orange-100/80",
    hoverBorder: "hover:border-orange-500/30",
  },
  {
    title: "Poetry",
    bn: "কবিতা",
    slug: "poetry",
    description: "Dive into the rhythmic and soulful world of modern and classic poems.",
    icon: Feather,
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
    iconColor: "text-blue-600 bg-blue-100/80",
    hoverBorder: "hover:border-blue-500/30",
  },
  {
    title: "Thriller & Mystery",
    bn: "থ্রিলার ও রহস্য",
    slug: "thriller",
    description: "Edge-of-your-seat suspense, detective fiction, and psychological thrillers.",
    icon: Search,
    gradient: "from-slate-500/10 via-slate-500/5 to-transparent",
    iconColor: "text-slate-700 bg-slate-200/80",
    hoverBorder: "hover:border-slate-500/30",
  },
  {
    title: "Kids & Teens",
    bn: "ছেলেদের বই",
    slug: "kids-and-teens",
    description: "Fairy tales, comics, and magical adventures crafted for younger minds.",
    icon: Baby,
    gradient: "from-green-500/10 via-green-500/5 to-transparent",
    iconColor: "text-green-600 bg-green-100/80",
    hoverBorder: "hover:border-green-500/30",
  },
  {
    title: "English & World",
    bn: "ইংরেজি বই",
    slug: "english",
    description: "International bestsellers, critically acclaimed translated works, and English fiction.",
    icon: Globe,
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
    iconColor: "text-purple-600 bg-purple-100/80",
    hoverBorder: "hover:border-purple-500/30",
  },
  {
    title: "Academic & Reference",
    bn: "একাডেমিক",
    slug: "academic",
    description: "Comprehensive textbooks, reference materials, and essential educational guides.",
    icon: Library,
    gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
    iconColor: "text-amber-600 bg-amber-100/80",
    hoverBorder: "hover:border-amber-500/30",
  },
];

export default function CollectionsPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "হোম", url: "/" },
    { name: "সংকলন (Collections)", url: "/collections" },
  ]);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Decorative Ambient Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-1 kantha text-primary opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Page Header (Centered & Editorial) */}
      <div className="mx-auto max-w-[1800px] px-4 sm:px-8 lg:px-12 xl:px-20 2xl:px-24 pt-12 sm:pt-20 pb-10 sm:pb-16 text-center">
        <div className="inline-flex items-center justify-center gap-2.5 mb-5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 animate-fade-up opacity-0 [animation-fill-mode:forwards]">
          <Compass className="size-4 text-primary" />
          <span className="font-bangla text-sm font-bold tracking-wide text-primary">
            আপনার পছন্দের বিভাগ
          </span>
        </div>
        
        <h1 className="font-display text-[2.4rem] leading-[1.1] font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance mx-auto max-w-3xl animate-fade-up opacity-0 [animation-fill-mode:forwards] [animation-delay:100ms]">
          Explore Curated Collections
        </h1>
        
        <p className="mt-5 text-[15px] sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance animate-fade-up opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
          Not sure where to start? Browse our hand-picked categories to find exactly the kind of story you are looking for.
        </p>
      </div>

      {/* Collections Grid */}
      <div className="mx-auto max-w-[1800px] px-4 sm:px-8 lg:px-12 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {COLLECTIONS.map((collection, index) => (
            <Link
              key={collection.slug}
              href={`/shop?category=${collection.slug}`}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.25rem] bg-card border border-border/60 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] ${collection.hoverBorder} animate-fade-up opacity-0 [animation-fill-mode:forwards]`}
              // Dynamically delay each card's entry animation based on its index
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Subtle Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-40 transition-opacity duration-500 group-hover:opacity-100 ${collection.gradient}`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  {/* Category Icon */}
                  <div className={`grid size-14 place-items-center rounded-2xl ${collection.iconColor} shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <collection.icon className="size-7" />
                  </div>
                  
                  {/* Animated Arrow Button */}
                  <div className="grid size-10 place-items-center rounded-full bg-secondary text-muted-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:-rotate-45" />
                  </div>
                </div>
                
                <div className="mt-8 sm:mt-10">
                  <h2 className="text-xl sm:text-[1.35rem] font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                    {collection.title}
                  </h2>
                  <p className="font-bangla mt-1.5 text-[15px] font-semibold text-muted-foreground/80">
                    {collection.bn}
                  </p>
                </div>
                
                <p className="mt-4 text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed line-clamp-2">
                  {collection.description}
                </p>
              </div>

              {/* Decorative Watermark Icon in bottom corner */}
              <div className="pointer-events-none absolute -bottom-8 -right-8 opacity-[0.02] transition-all duration-500 group-hover:opacity-[0.05] group-hover:scale-110 group-hover:-rotate-12">
                <collection.icon className="size-48" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </main>
  );
}