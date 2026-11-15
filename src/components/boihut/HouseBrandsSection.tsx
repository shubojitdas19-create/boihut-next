import { getFilteredBooks } from "@/lib/data";
import { HouseBrandsClient } from "./HouseBrandsClient";

export async function HouseBrandsSection() {
  // 1. Fetch Bodhisotto books (We will share this data with Batayan)
  const bodhisottoData = await getFilteredBooks({ brand: "বোধিসত্ত্ব" });
  const totalBodhisotto = bodhisottoData.pagination?.total || 0;
  
  // 2. Fetch generic books (for the Boihut platform tab)
  const boihutData = await getFilteredBooks({});
  const totalBoihut = boihutData.pagination?.total || 0;
  
  // 3. Shuffle Bodhisotto ONCE, then split it into two distinct chunks
  const shuffledBodhisotto = [...bodhisottoData.books].sort(() => 0.5 - Math.random());
  
  // Chunk A: First 8 books go to Bodhisotto
  const bodhisottoDisplay = shuffledBodhisotto.length >= 3 ? shuffledBodhisotto.slice(0, 8) : [
    { slug: "1", title: "বোধিসত্ত্ব ডেমো ১", price: "₹250", cover: "/images/placeholder.jpg" },
    { slug: "2", title: "বোধিসত্ত্ব ডেমো ২", price: "₹180", cover: "/images/placeholder.jpg" },
    { slug: "3", title: "বোধিসত্ত্ব ডেমো ৩", price: "₹320", cover: "/images/placeholder.jpg" },
  ];

  // Chunk B: Next 8 books go to Batayan (Guarantees they are different from Bodhisotto's tab)
  const batayanDisplay = shuffledBodhisotto.length >= 11 ? shuffledBodhisotto.slice(8, 16) : [
    { slug: "b1", title: "বাতায়ন ডেমো ১", price: "₹210", cover: "/images/placeholder.jpg" },
    { slug: "b2", title: "বাতায়ন ডেমো ২", price: "₹190", cover: "/images/placeholder.jpg" },
    { slug: "b3", title: "বাতায়ন ডেমো ৩", price: "₹299", cover: "/images/placeholder.jpg" },
  ];

  // Shuffle logic for Boihut platform
  const shuffledBoihut = [...boihutData.books].sort(() => 0.5 - Math.random());
  const boihutDisplay = shuffledBoihut.length >= 3 ? shuffledBoihut.slice(0, 8) : [
    { slug: "4", title: "বইhut টপ সেলার ১", price: "₹200", cover: "/images/placeholder.jpg" },
    { slug: "5", title: "বইhut টপ সেলার ২", price: "₹220", cover: "/images/placeholder.jpg" },
    { slug: "6", title: "বইhut টপ সেলার ৩", price: "₹350", cover: "/images/placeholder.jpg" },
  ];

  return (
    <HouseBrandsClient 
      bodhisottoBooks={bodhisottoDisplay}
      batayanBooks={batayanDisplay}
      boihutBooks={boihutDisplay}
      totalBodhisotto={totalBodhisotto}
      totalBoihut={totalBoihut}
    />
  );
}