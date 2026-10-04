import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/service-landing-page";

export const metadata: Metadata = {
  title: "Luxury Wedding Transportation & Celebration Journeys | RentRun Luxury",
  description: "Personally coordinated wedding cars, bride and groom arrivals, VIP guest transport, destination wedding mobility and yacht or cruise celebrations.",
  alternates: { canonical: "/weddings" },
};

export default function WeddingsPage() {
  return <ServiceLandingPage
    eyebrow="Weddings & Celebrations"
    title="Every arrival, part of the occasion."
    description="Wedding transport and celebration journeys curated around your itinerary, guests and the moments you want to remember."
    image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85"
    services={["Luxury wedding cars", "Bride and groom vehicles", "VIP guest transportation", "Airport transfers", "Destination wedding mobility", "Chauffeur service", "Yacht celebrations", "Luxury cruise experiences"]}
    cta="Plan Your Luxury Wedding Transport"
  />;
}