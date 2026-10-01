import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Luxury Chauffeur Service | RentRun Luxury",
  description: "Luxury chauffeur service with premium, private, and executive mobility options across India and international destinations.",
  alternates: { canonical: "/luxury-cars/chauffeur-service" },
};

export default function ChauffeurServicePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Luxury Chauffeur Service"
          title="Professional, discreet and perfectly timed."
          subtitle="Executive-grade chauffeur service designed for private travel, airport arrivals and tailored mobility across destinations."
          image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
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
