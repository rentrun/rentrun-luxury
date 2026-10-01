import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Corporate Cruise Experiences | RentRun Luxury",
  description: "Corporate cruise events and luxury sea experiences arranged for executive retreats, private gatherings and premium networking travel.",
  alternates: { canonical: "/luxury-cruises/corporate" },
};

export default function CorporateCruisePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Corporate Cruises"
          title="Business moments that feel exceptional."
          subtitle="Curated cruise experiences for retreats, incentives and private events designed for elegant hospitality and executive comfort."
          image="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Request Quote"
          primaryHref="/contact"
          secondaryLabel="WhatsApp"
          secondaryHref="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20I%20need%20a%20corporate%20cruise%20quote."
        />
      </main>
      <SiteFooter />
    </>
  );
}
