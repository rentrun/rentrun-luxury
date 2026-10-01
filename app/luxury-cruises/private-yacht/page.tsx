import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Private Yacht Experience | RentRun Luxury",
  description: "Private yacht experiences and premium day charters for celebratory travel, coastal escapes and bespoke ocean outings.",
  alternates: { canonical: "/luxury-cruises/private-yacht" },
};

export default function PrivateYachtCruisePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Private Yacht"
          title="A private ocean moment."
          subtitle="Curated private yacht experiences designed for short escapes, sunset cruises and memorable special occasions."
          image="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Request Quote"
          primaryHref="/contact"
          secondaryLabel="WhatsApp Concierge"
          secondaryHref="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20I%20would%20like%20a%20private%20yacht%20experience."
        />
      </main>
      <SiteFooter />
    </>
  );
}
