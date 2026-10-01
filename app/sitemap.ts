import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://luxury.rentrun.in";

  return [
    "/",
    "/luxury-cars",
    "/private-charter",
    "/luxury-cruises",
    "/corporate-luxury-transport",
    "/vip-transportation",
    "/wedding-luxury-transport",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
    "/cancellation-policy",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}
