import { createPageMetadata } from "@/lib/seo-metadata";
import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata(
  "Premium Airport Transfer | RentRun Luxury",
  "Premium chauffeur-driven airport transfers for business and leisure travel, with vehicle and availability confirmed for your city and date.",
  "/luxury-cars/airport-transfer",
);

export default function AirportTransferPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#14283F]">
        <PageHero
          eyebrow="Airport Transfer"
          title="Chauffeur-Driven Airport Transfers"
          subtitle="Premium airport transfer experiences with punctuality, privacy and executive hospitality from terminal to destination."
          image="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Request Quote"
          primaryHref="/contact"
          secondaryLabel="WhatsApp"
          secondaryHref="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20I%20need%20a%20premium%20airport%20transfer."
        />
        <section className="mx-auto max-w-4xl px-4 py-12 text-[#14283F] sm:px-6 lg:px-8">
          <h2 className="text-2xl text-[#14283F]">Request an airport transfer</h2>
          <p className="mt-4 leading-7">
            Share your airport, travel date and time, pickup and drop-off points, passenger count and luggage needs. Vehicle, city coverage and any meet-and-greet support are confirmed for each request.
          </p>
          <p className="mt-4 leading-7">
            Browse our <Link className="text-[#657384] underline" href="/luxury-cars">chauffeur-driven luxury cars</Link> or <Link className="text-[#657384] underline" href="/contact#enquiry">request a quote</Link>. Availability is subject to city, date and vehicle confirmation.
          </p>
        </section>
        <FaqSection
          title="Airport transfer questions"
          items={[
            { question: "How do I book an airport transfer?", answer: "Share the airport, terminal, travel date and time, pickup and drop-off locations, passenger count and luggage requirements. The concierge will confirm the available vehicle and quotation." },
            { question: "Is vehicle availability guaranteed?", answer: "No. RentRun Luxury arranges airport journeys through partner operators, and the vehicle and timing are confirmed only after enquiry and availability checks." },
            { question: "What information should I include in my quote request?", answer: "Provide your flight details where relevant, passenger count, luggage requirements and any special assistance needs so the quotation can be tailored accurately." },
            { question: "Can I arrange both pickup and return?", answer: "Yes. Share both legs of the journey when requesting a quote. Each journey and the relevant partner arrangements will be confirmed in the final quotation." },
          ]}
        />
      </main>
      <SiteFooter />
    </>
  );
}
