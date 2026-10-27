import { createPageMetadata } from "@/lib/seo-metadata";
import { ServiceLandingPage } from "@/components/service-landing-page";

export const metadata = createPageMetadata(
  "Corporate Executive Transportation & Private Aviation | RentRun Luxury",
  "Concierge-coordinated CEO transportation, executive airport transfers, business delegations, corporate events, VIP movement and multi-city travel.",
  "/corporate",
);

export default function CorporatePage() {
  return <ServiceLandingPage
    eyebrow="Corporate Concierge"
    title="Corporate Executive Transportation"
    description="A dedicated concierge approach to CEO transportation, executive airport transfers, business delegations and corporate travel coordination."
    image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85"
    services={["CEO transportation", "Executive airport transfers", "Business delegations", "Corporate events", "VIP movement", "Chauffeur services", "Multi-city executive travel", "Private aviation coordination"]}
    cta="Request Corporate Concierge"
    relatedLinks={[
      { href: "/corporate-luxury-transport", label: "Corporate luxury transportation" },
      { href: "/luxury-cars/corporate", label: "Corporate luxury car service" },
      { href: "/vip-transportation", label: "VIP transportation" },
    ]}
  />;
}