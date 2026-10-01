import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Premium Airport Transfer | RentRun Luxury",
  description: "Premium airport transfer service with chauffeur-driven mobility, meet-and-greet support and comfortable arrivals for business and leisure travellers.",
  alternates: { canonical: "/luxury-cars/airport-transfer" },
};

export default function AirportTransferPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Airport Transfer"
          title="Arrivals handled with absolute ease."
          subtitle="Premium airport transfer experiences with punctuality, privacy and executive hospitality from terminal to destination."
          image="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Request Quote"
          primaryHref="/contact"
          secondaryLabel="WhatsApp"
          secondaryHref="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20I%20need%20a%20premium%20airport%20transfer."
        />
      </main>
      <SiteFooter />
    </>
  );
}
