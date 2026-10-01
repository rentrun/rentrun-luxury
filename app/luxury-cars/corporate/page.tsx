import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Corporate Luxury Car Service | RentRun Luxury",
  description: "Corporate luxury car service for executive travel, delegation mobility and premium airport transfer requirements.",
  alternates: { canonical: "/luxury-cars/corporate" },
};

export default function CorporateLuxuryCarPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Corporate Mobility"
          title="Business travel that feels effortless."
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
