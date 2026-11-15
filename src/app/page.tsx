import { AnnouncementBar } from "@/components/boihut/AnnouncementBar";
import { Header } from "@/components/boihut/Header";
import { Hero } from "@/components/boihut/Hero";
import { CategoryChips } from "@/components/boihut/CategoryChips";
import { HouseBrandsSection } from "@/components/boihut/HouseBrandsSection"; // <-- Import the new featurette
import { PublisherMarquee } from "@/components/boihut/PublisherMarquee"; // <-- 1. Import it
import { Bestsellers } from "@/components/boihut/Bestsellers";
import { CollegeStreet } from "@/components/boihut/CollegeStreet";
import { AuthorSpotlight } from "@/components/boihut/AuthorSpotlight";
import { ReadersCircle } from "@/components/boihut/ReadersCircle";
import { Footer } from "@/components/boihut/Footer";

export default function Home() {
  return (
    <div className="paper flex min-h-screen flex-col pb-16 md:pb-0">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryChips />
		<HouseBrandsSection/>
		<PublisherMarquee />
        <Bestsellers />
        <CollegeStreet />
        <AuthorSpotlight />
        <ReadersCircle />
      </main>
      <Footer />
    </div>
  );
}