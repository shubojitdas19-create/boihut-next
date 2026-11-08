"use server";

export type SubscribeState = {
  status: "idle" | "loading" | "success" | "error" | "exists";
  message: string;
};

export async function subscribeToCircle(
  prevState: SubscribeState,
  formData: FormData
): Promise<SubscribeState> {
  // 1. Extract fields from the form
  const name = formData.get("name") as string;
  const address = formData.get("address") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const website = formData.get("website") as string; // Honeypot field

  // 2. Spam protection & validation
  if (website) {
    return { status: "error", message: "Spam submission detected." };
  }

  if (!name || !address || !email || !phone) {
    return { status: "error", message: "অনুগ্রহ করে সব তথ্য দিন।" }; // "Please provide all details"
  }

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
  // The lead API uses [storeSlug] in the URL, so we need the slug here
  const STORE_SLUG = process.env.NEXT_PUBLIC_STORE_SLUG || "boihut";

  try {
    // 3. Send the formatted payload to the backend
    const response = await fetch(`${API_URL}/storefront/${STORE_SLUG}/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.trim(),
        phone: phone.trim(),
        address: address.trim(),
        // Map the email into the message field so it shows up cleanly in your Admin Panel
        message: `Reader's Circle Subscription\nEmail: ${email.trim()}`,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return { status: "error", message: data.error || "কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।" };
    }

    // 4. Trigger the success UI state
    return { 
      status: "success", 
      message: "আপনার চিঠি সফলভাবে পৌঁছেছে।" // "Your letter has arrived successfully."
    };
  } catch (error) {
    console.error("Subscription error:", error);
    return { status: "error", message: "সার্ভার সংযোগ বিচ্ছিন্ন হয়েছে।" };
  }
}