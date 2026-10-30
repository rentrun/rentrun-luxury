import { createPageMetadata } from "@/lib/seo-metadata";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata(
  "Corporate Luxury Car Service | RentRun Luxury",
  "Corporate luxury car service for executive travel, delegation mobility and premium airport transfer requirements.",
  "/luxury-cars/corporate",
  null,
  "/corporate",
);

export default function CorporateLuxuryCarPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#14283F]">
        <PageHero
          eyebrow="Corporate Mobility"
          title="Corporate Luxury Cars for Executive Travel"
          subtitle="Chauffeur-driven executive transport for client meetings, conferences and premium business itineraries."
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Request Corporate Proposal"
          primaryHref="/contact"
          secondaryLabel="Call Concierge"
          secondaryHref="tel:+917703956880"
        />
      </main>
      <SiteFooter />
    </>
  );
}
