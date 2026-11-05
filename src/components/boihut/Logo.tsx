import Link from "next/link";

/**
 * বইhut wordmark — Bangla "বই" + latin "hut", with the alpona mark.
 */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2 sm:gap-2.5" aria-label="বইhut — home">
      <img
        src="/boihut-mark.png"
        alt=""
        width={34}
        height={34}
        className="size-8 sm:size-[34px] transition-transform duration-500 ease-out group-hover:rotate-12 group-active:scale-90"
      />
      <span className="flex items-baseline text-2xl sm:text-[1.55rem] leading-none">
        <span className="font-bangla font-bold text-primary">বই</span>
        <span className="font-display italic text-foreground tracking-tight pr-0.5">hut</span>
      </span>
      {!compact && (
        <span className="sr-only">বইhut — Kolkata's own bookstore</span>
      )}
    </Link>
  );
}