const MESSAGES = [
  { en: "Free delivery across Kolkata above ₹599", bn: "কলকাতায় ফ্রি ডেলিভারি" },
  { en: "Genuine books, hand-checked before they ship", bn: "আসল বই, নিশ্চিত" },
  { en: "New arrivals every week", bn: "প্রতি সপ্তাহে নতুন বই" },
];

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      {/* Track duplicated once; translating -50% makes the loop seamless */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-0 py-2">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center"
            >
              {MESSAGES.map((m, i) => (
                <div key={i} className="flex shrink-0 items-center">
                  <span className="font-bangla text-[13px] font-medium text-primary-foreground/85">
                    {m.bn}
                  </span>
                  <span className="mx-2 text-[13px] opacity-40">•</span>
                  <span className="text-[13px] font-medium tracking-wide">
                    {m.en}
                  </span>
                  <span className="mx-4 text-[13px] opacity-40">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
