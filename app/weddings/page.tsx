import { createPageMetadata } from "@/lib/seo-metadata";
import { ServiceLandingPage } from "@/components/service-landing-page";

export const metadata = createPageMetadata(
  "Luxury Wedding Transportation & Celebration Journeys | RentRun Luxury",
  "Personally coordinated wedding cars, bride and groom arrivals, VIP guest transport, destination wedding mobility and yacht or cruise celebrations.",
  "/weddings",
);

export default function WeddingsPage() {
  return <ServiceLandingPage
    eyebrow="Weddings & Celebrations"
    title="Luxury Wedding Transportation"
    description="Wedding transport and celebration journeys curated around your itinerary, guests and the moments you want to remember."
    image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85"
    services={["Luxury wedding cars", "Bride and groom vehicles", "VIP guest transportation", "Airport transfers", "Destination wedding mobility", "Chauffeur service", "Yacht celebrations", "Luxury cruise experiences"]}
    cta="Plan Your Luxury Wedding Transport"
    relatedLinks={[
      { href: "/wedding-luxury-transport", label: "Wedding luxury transport" },
      { href: "/luxury-cars/wedding", label: "Luxury wedding cars" },
    ]}
    breadcrumbs={[{ name: "Home", href: "/" }, { name: "Weddings" }]}
    faqItems={[
      { question: "What wedding transport can be requested?", answer: "Requests can include couple and family arrivals, guest movement, hotel transfers, airport collection and related celebration travel, subject to itinerary and partner availability." },
      { question: "Can you coordinate transport for multiple locations?", answer: "Yes. Share the event schedule, pickup points, destinations and passenger groups so the concierge can propose a coordinated arrangement." },
      { question: "Which vehicle will be assigned?", answer: "The proposed vehicle category is confirmed after availability checks. Vehicle images are illustrative, and the final quotation should be reviewed before confirmation." },
      { question: "Can wedding dates and times be changed?", answer: "Changes may be subject to availability and the cancellation or amendment terms in the quotation and cancellation policy." },
    ]}
  />;
}