import { createPageMetadata } from "@/lib/seo-metadata";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata = createPageMetadata(
  "Wedding Luxury Transport | RentRun Luxury",
  "Wedding luxury transportation, guest transfers and premium event mobility for destination weddings, hotel movement and VIP arrivals.",
  "/wedding-luxury-transport",
);

export default function WeddingLuxuryTransportPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#171717] text-[#171717]">
        <PageHero
          eyebrow="Weddings"
          title="Make Every Arrival Unforgettable."
          subtitle="Premium wedding cars, guest movements and celebration transport tailored around your event timeline and guest experience."
          image="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Plan Wedding Transportation"
          primaryHref="/contact"
          secondaryLabel="WhatsApp Concierge"
          secondaryHref="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20I%20need%20support%20for%20wedding%20transportation."
        />

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Wedding luxury cars",
              "Guest transfers",
              "Airport transfers",
              "Hotel transportation",
              "VIP guest movement",
              "Event transportation",
              "Premium group transfers",
              "Cruise and charter experiences",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-[#FFFFFF] p-6 text-[#171717]">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <EnquiryForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
