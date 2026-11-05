export type Book = {
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
};

export const BOOKS: Book[] = [
  {
    slug: "sera-kobita",
    title: "সেরা কবিতা",
    author: "রবীন্দ্রনাথ ঠাকুর",
    price: "₹৩৪৯",
    category: "কবিতা",
    cover: "/cover-rabindranath.jpg",
    tag: "Bestseller",
    description: "রবীন্দ্রনাথ ঠাকুরের অজস্র কবিতার ভাণ্ডার থেকে বেছে নেওয়া শ্রেষ্ঠ কিছু কবিতার অনবদ্য সংকলন। প্রেম, প্রকৃতি, জীবন ও দর্শনের এক অপূর্ব মিশ্রণ।",
    pages: 320,
    publisher: "বইhut প্রকাশনী",
    isbn: "978-81-1234-567-8"
  },
  {
    slug: "kolkata-confidential",
    title: "কলকাতা কনফিডেনশিয়াল",
    author: "আরিন্দম সেন",
    price: "₹৩৯৯",
    category: "থ্রিলার",
    cover: "/cover-thriller.jpg",
    tag: "Editor's pick",
    description: "কলকাতার অন্ধকার জগৎ, রাজনীতি এবং পুলিশের এক শ্বাসরুদ্ধকর থ্রিলার। এক রাতের ঘটনা পালটে দেয় সব কিছু।",
    pages: 412,
    publisher: "বইhut প্রকাশনী",
    isbn: "978-81-2345-678-9"
  },
  {
    slug: "odvut-shohor",
    title: "অদ্ভুত শহর",
    author: "নতুন প্রজন্মের কবিতা",
    price: "₹২৯৯",
    category: "কবিতা",
    cover: "/cover-poetry.jpg",
    tag: "Fresh voices",
    description: "এই শহরের অলিতে গলিতে লুকিয়ে থাকা গল্পগুলোকে কবিতায় রূপ দিয়েছে নতুন প্রজন্মের কবিরা।",
    pages: 180,
    publisher: "বইhut প্রকাশনী",
    isbn: "978-81-3456-789-0"
  },
  {
    slug: "the-monsoon-letters",
    title: "The Monsoon Letters",
    author: "Anirban Sengupta",
    price: "₹৪৪৯",
    category: "বাংলা সাহিত্য",
    cover: "/cover-fiction.jpg",
    tag: "Reader favourite",
    description: "A poignant tale of love, loss, and the letters that were never sent, set against the backdrop of a relentless Kolkata monsoon.",
    pages: 256,
    publisher: "বইhut প্রকাশনী",
    isbn: "978-81-4567-890-1"
  },
  {
    slug: "shohorer-shesh-tram",
    title: "শহরের শেষ ট্রাম",
    author: "ঋতুপর্ণ দাশ",
    price: "₹৩৭৫",
    category: "বাংলা সাহিত্য",
    cover: "/cover-rabindranath.jpg",
    tag: "নতুন সংযোজন",
    description: "হারিয়ে যাওয়া কলকাতার নস্টালজিয়া আর আধুনিক জীবনের টানাপোড়েনের এক অনবদ্য দলিল।",
    pages: 210,
    publisher: "বইhut প্রকাশনী",
    isbn: "978-81-5678-901-2"
  },
  {
    slug: "botgacher-niche",
    title: "বটগাছের নিচে",
    author: "মীনা মুখার্জি",
    price: "₹৩২৫",
    category: "মাঙ্গা",
    cover: "/cover-thriller.jpg",
    tag: "চিত্রকথার জগৎ",
    description: "গ্রামবাংলার রূপকথার আদলে তৈরি এক অসাধারণ গ্রাফিক নভেল বা দেশি মাঙ্গা।",
    pages: 150,
    publisher: "বইhut প্রকাশনী",
    isbn: "978-81-6789-012-3"
  },
  {
    slug: "nijeke-fire-pawa",
    title: "নিজেকে ফিরে পাওয়া",
    author: "সায়ন ঘোষ",
    price: "₹৪২৫",
    category: "আত্মোন্নতি",
    cover: "/cover-poetry.jpg",
    tag: "মন ভালো রাখার বই",
    description: "মানসিক অবসাদ কাটিয়ে উঠে নতুন করে বাঁচার প্রেরণা যোগাবে এই বইটি।",
    pages: 280,
    publisher: "বইhut প্রকাশনী",
    isbn: "978-81-7890-123-4"
  },
  {
    slug: "tuntunir-notun-bondhu",
    title: "টুনটুনির নতুন বন্ধু",
    author: "অনন্যা রায়",
    price: "₹২৭৫",
    category: "শিশুদের বই",
    cover: "/cover-fiction.jpg",
    tag: "ছোটদের প্রিয়",
    description: "ছোটদের কল্পনার জগৎকে আরও রঙিন করে তুলতে টুনটুনির এক নতুন রোমাঞ্চকর গল্প।",
    pages: 120,
    publisher: "বইhut প্রকাশনী",
    isbn: "978-81-8901-234-5"
  },
  {
    slug: "feluda-samagra-1",
    title: "ফেলুদা সমগ্র ১",
    author: "সত্যজিৎ রায়",
    price: "₹৫৯৯",
    category: "থ্রিলার",
    cover: "/cover-rabindranath.jpg",
    tag: "ক্লাসিক কালেকশন",
    description: "বাঙালির প্রিয় গোয়েন্দা প্রদোষ চন্দ্র মিত্র ওরফে ফেলুদার প্রথম দিককার রুদ্ধশ্বাস সব অভিযান।",
    pages: 550,
    publisher: "আনন্দ পাবলিশার্স",
    isbn: "978-81-9012-345-6"
  },
  {
    slug: "chander-pahar",
    title: "চাঁদের পাহাড়",
    author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
    price: "₹২৯৯",
    category: "বাংলা সাহিত্য",
    cover: "/cover-fiction.jpg",
    tag: "অ্যাডভেঞ্চার",
    description: "শঙ্কর আর দিয়েগোর আফ্রিকার গহীন জঙ্গলে রিখটার্সভেল্ড পর্বতমালার সেই চিরন্তন রোমাঞ্চকর অভিযান।",
    pages: 220,
    publisher: "মিত্র ও ঘোষ",
    isbn: "978-81-0123-456-7"
  },
  {
    slug: "byomkesh-samagra",
    title: "ব্যোমকেশ সমগ্র",
    author: "শরদিন্দু বন্দ্যোপাধ্যায়",
    price: "₹৬৪৯",
    category: "থ্রিলার",
    cover: "/cover-thriller.jpg",
    tag: "বেস্ট সেলার",
    description: "সত্যান্বেষী ব্যোমকেশ বক্সী আর তাঁর বন্ধু অজিতের বুদ্ধির খেলায় মোড়ানো রহস্য গল্পের অখণ্ড সংকলন।",
    pages: 850,
    publisher: "আনন্দ পাবলিশার্স",
    isbn: "978-81-1122-334-4"
  },
  {
    slug: "gitanjali",
    title: "গীতাঞ্জলি",
    author: "রবীন্দ্রনাথ ঠাকুর",
    price: "₹১৯৯",
    category: "কবিতা",
    cover: "/cover-poetry.jpg",
    tag: "নোবেল জয়ী",
    description: "গীতাঞ্জলি রবীন্দ্রনাথ ঠাকুরের লেখা একটি বিশ্বখ্যাত কাব্যগ্রন্থ। এই বইটির জন্যই তিনি ১৯১৩ সালে সাহিত্যে নোবেল পুরস্কার লাভ করেন।",
    pages: 160,
    publisher: "বিশ্বভারতী গ্রন্থনবিভাগ",
    isbn: "978-81-5678-901-2"
  }
];

export function getBookBySlug(slug: string): Book | undefined {
  return BOOKS.find((book) => book.slug === slug);
}