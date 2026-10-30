import { createPageMetadata } from "@/lib/seo-metadata";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EnquiryForm } from "@/components/enquiry-form";
import { FaqSection } from "@/components/faq-section";
import { CruiseCatalog } from "@/components/cruise-catalog";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata(
  "Luxury Cruises in India | RentRun Luxury",
  "Discover curated luxury cruise experiences, premium cruise journeys and handpicked sailing options from India.",
  "/luxury-cruises",
  "/images/cruises/cordelia-empress-exterior.jpg",
);

export default function LuxuryCruisesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#14283F]">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Luxury Cruises" }]} />
        <PageHero
          eyebrow="Private Cruise Concierge"
          title="Luxury Cruise Experiences from India"
          subtitle="Premium cruise journeys, handpicked around your preferred departure, destination and travel dates."
          image="/images/cruises/cordelia-empress-exterior.jpg"
          primaryLabel="Explore Cruises"
          primaryHref="#cruise-experiences"
          secondaryLabel="WhatsApp Concierge"
          secondaryHref="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20please%20share%20current%20luxury%20cruise%20options."
        />

        <section id="cruise-experiences" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">Handpicked Sailing Experiences</p>
            <h2 className="mt-5 text-3xl text-[#14283F] sm:text-4xl">Premium Cruise Journeys</h2>
            <p className="mx-auto mt-4 max-w-3xl text-[#14283F]">Explore memorable routes, onboard experiences and cabin categories. Subject to sailing availability and final confirmation.</p>
          </div>

          <CruiseCatalog />
        </section>

        <FaqSection
          title="Luxury cruise questions"
          items={[
            { question: "How can I enquire about a cruise?", answer: "Share your preferred departure port, travel dates, passenger count, cabin preference and budget range. The concierge can explain available partner and operator options." },
            { question: "Are sailing dates and cabins guaranteed?", answer: "No. Availability and final pricing must be confirmed by the relevant cruise operator before a booking is made." },
            { question: "Which information appears on a cruise enquiry?", answer: "Provide the route of interest, number of travellers, cabin category and any special occasion or accessibility requirements you wish the enquiry team to consider." },
            { question: "Does the cancellation policy apply to every cruise?", answer: "Cruise operator terms, amendments and cancellation charges may differ. Review the relevant quotation and RentRun Luxury cancellation policy before confirmation." },
          ]}
        />

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <EnquiryForm variant="cruise" />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
