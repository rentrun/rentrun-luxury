import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Luxury Cruise Wedding | RentRun Luxury",
  description: "Luxury cruise and wedding experiences that combine celebration, scenic travel and refined hospitality for memorable shore-to-sea moments.",
  alternates: { canonical: "/luxury-cruises/wedding" },
};

export default function WeddingCruisePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Celebration Cruises"
          title="A celebration set against the horizon."
          subtitle="Luxury cruise and private yacht experiences designed for weddings, anniversaries and bespoke celebration travel."
          image="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Request Quote"
          primaryHref="/contact"
          secondaryLabel="Call Concierge"
          secondaryHref="tel:+917703956880"
        />
      </main>
      <SiteFooter />
    </>
  );
}
