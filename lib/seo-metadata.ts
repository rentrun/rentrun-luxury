import type { Metadata } from "next";

const siteName = "RentRun Luxury";
const defaultSocialImage =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
  image?: string | null,
): Metadata {
  const url = `https://luxury.rentrun.in${path}`;
  const socialImage = image ?? defaultSocialImage;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "en_IN",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
