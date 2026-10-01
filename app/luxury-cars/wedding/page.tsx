import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Wedding Luxury Cars | RentRun Luxury",
  description: "Luxury wedding car transportation, guest transfers and premium arrival experiences for celebrations and destination weddings.",
  alternates: { canonical: "/luxury-cars/wedding" },
};

export default function WeddingLuxuryCarsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Wedding Cars"
          title="Elegant arrivals, beautifully timed."
          subtitle="Luxury wedding transportation arranged for the couple, families and guests with discreet, premium support throughout the celebration."
          image="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Plan Wedding Transportation"
          primaryHref="/contact"
          secondaryLabel="WhatsApp Concierge"
          secondaryHref="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20I%20need%20wedding%20transportation%20support."
        />
      </main>
      <SiteFooter />
    </>
  );
}
