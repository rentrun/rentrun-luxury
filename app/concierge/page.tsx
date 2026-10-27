import { createPageMetadata } from "@/lib/seo-metadata";
import { ServiceLandingPage } from "@/components/service-landing-page";

export const metadata = createPageMetadata(
  "Luxury Travel & Mobility Concierge | RentRun Luxury",
  "A personal concierge for premium vehicle sourcing, chauffeur arrangements, airport assistance, private charter, cruise planning and multi-city mobility.",
  "/concierge",
);

export default function ConciergePage() {
  return <ServiceLandingPage
    eyebrow="Luxury Concierge"
    title="Your Journey, Personally Curated."
    description="One point of contact for the details around your journey, coordinated through RentRun Luxury’s verified service partner network."
    image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85"
    services={["Vehicle sourcing", "Chauffeur arrangements", "Airport meet & assist", "Private charter coordination", "Cruise planning", "Yacht experiences", "Corporate travel", "Wedding travel", "Multi-city luxury mobility"]}
    cta="Speak to a Luxury Concierge"
  />;
}