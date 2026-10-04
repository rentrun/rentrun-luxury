import type { MetadataRoute } from "next";
import { charterAircraft } from "@/data/private-charter";
import { luxuryVehicles } from "@/data/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://luxury.rentrun.in";

  const routes = [
    "/",
    "/luxury-cars",
    "/private-charter",
    "/luxury-cruises",
    "/corporate",
    "/weddings",
    "/concierge",
    "/corporate-luxury-transport",
    "/vip-transportation",
    "/wedding-luxury-transport",
    "/luxury-cars/airport-transfer",
    "/luxury-cars/chauffeur-service",
    "/luxury-cars/corporate",
    "/luxury-cars/wedding",
    "/private-charter/jet",
    "/private-charter/helicopter",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
    "/cancellation-policy",
    ...luxuryVehicles.map((vehicle) => `/luxury-cars/${vehicle.slug}`),
    ...charterAircraft.map((aircraft) => `/private-charter/${aircraft.slug}`),
  ];

  return [...new Set(routes)].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}
