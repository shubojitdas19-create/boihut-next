"use server";

export type SubscribeState = {
  status: "idle" | "success" | "exists" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function subscribeToCircle(
  _previous: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { status: "success", message: "স্বাগতম, বইপোকা!" };
  }

  const raw = formData.get("email");
  const email = typeof raw === "string" ? raw.trim().toLowerCase() : "";

  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "ইমেলটা ঠিকঠাক লেখা হয়নি। আরেকবার দেখে নেবে?" };
  }

  try {
    // Mock network delay to show the beautiful loading animation on the button
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // MOCKED: Returning success directly instead of crashing trying to connect to a DB.
    // Once your backend is ready, we will add the pg SQL queries back here.
    return { status: "success", message: "স্বাগতম, বইপোকা! প্রথম চিঠিটা শিগগিরই তোমার ঠিকানায় পৌঁছবে।" };
  } catch (error) {
    console.error("[boihut] newsletter subscribe failed:", error instanceof Error ? error.message : error);
    return { status: "error", message: "ডাকঘরে একটু গোলমাল হয়েছে। কিছুক্ষণ পরে আবার চেষ্টা করো।" };
  }
}