import { createPageMetadata } from "@/lib/seo-metadata";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata = createPageMetadata(
  "VIP Transportation | RentRun Luxury",
  "VIP transportation, discreet mobility and executive chauffeur solutions for private bookings, celebrity arrivals and important guest movements.",
  "/vip-transportation",
);

export default function VipTransportationPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#14283F]">
        <PageHero
          eyebrow="VIP Transport"
          title="Private Movement. Personalised Service."
          subtitle="Discreet, polished and reliable mobility for VIP travel, guest movements and executive arrivals."
          image="https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Request VIP Quote"
          primaryHref="/contact"
          secondaryLabel="WhatsApp Concierge"
          secondaryHref="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20I%20need%20VIP%20transport%20support."
        />

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {[
              "Airport arrivals and departures",
              "Hotel transfers",
              "Executive chauffeur support",
              "Private event transport",
              "Senior leadership movements",
              "Guest handling and coordination",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-[#E7E1D6] bg-[#FFFFFF] p-6 text-[#14283F]">
                {item}
              </div>
            ))}
          </div>
        </section>

        <FaqSection
          title="VIP transportation questions"
          items={[
            { question: "What types of journeys can RentRun Luxury arrange?", answer: "Requests can include airport arrivals and departures, hotel movement, executive meetings, private events and coordinated guest transportation through the service partner network." },
            { question: "How far in advance should I enquire?", answer: "Advance notice is recommended because vehicle type, chauffeur support and dates depend on partner availability. Urgent requests may also be submitted for review." },
            { question: "Is any vehicle guaranteed by category?", answer: "No. Vehicle and aircraft availability is confirmed after the itinerary and requirements are reviewed. The quotation will clearly identify the proposed arrangement." },
            { question: "Can multiple guests or movements be coordinated?", answer: "Yes. Share the complete itinerary, locations, passenger groups and timing so the concierge can propose an appropriate arrangement." },
          ]}
        />

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <EnquiryForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
