import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Safely parses any price representation into a numeric value (rounded to nearest integer).
 * Handles strings like "₹250.00", "₹1,250.50", "1.00", 250, null, or undefined.
 * Strips currency symbols and thousand-separating commas without multiplying decimal zeros.
 */
export function parsePrice(raw: string | number | undefined | null): number {
  if (typeof raw === "number") return isNaN(raw) ? 0 : Math.round(raw);
  if (!raw) return 0;
  const cleaned = raw.toString().replace(/,/g, "").replace(/[^0-9.]/g, "");
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : Math.round(num);
}

