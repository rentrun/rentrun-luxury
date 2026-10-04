import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { CruiseCatalog } from "@/components/cruise-catalog";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Luxury Cruises in India | RentRun Luxury",
  description:
    "Discover curated luxury cruise experiences, premium cruise journeys and handpicked sailing options from India.",
  alternates: { canonical: "/luxury-cruises" },
};

export default function LuxuryCruisesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Private Cruise Concierge"
          title="Curated Luxury Cruise Experiences"
          subtitle="Premium cruise journeys, handpicked around your preferred departure, destination and travel dates."
          image="/images/cruises/cordelia-empress-exterior.jpg"
          primaryLabel="Explore Cruises"
          primaryHref="#cruise-experiences"
          secondaryLabel="WhatsApp Concierge"
          secondaryHref="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20please%20share%20current%20luxury%20cruise%20options."
        />

        <section id="cruise-experiences" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-[#d4af75]">Handpicked Sailing Experiences</p>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl">Premium Cruise Journeys</h2>
            <p className="mx-auto mt-4 max-w-3xl text-[#d9d1c5]">Explore memorable routes, onboard experiences and cabin categories. Subject to sailing availability and final confirmation.</p>
          </div>

          <CruiseCatalog />
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <EnquiryForm variant="cruise" />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
