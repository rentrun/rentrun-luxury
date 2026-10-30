import { createPageMetadata } from "@/lib/seo-metadata";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata = createPageMetadata(
  "Corporate Luxury Transportation | RentRun Luxury",
  "Corporate luxury transportation with executive airport transfers, group mobility and hotel-to-terminal movement curated for business travel and delegations.",
  "/corporate-luxury-transport",
  null,
  "/corporate",
);

export default function CorporateLuxuryTransportPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#14283F]">
        <PageHero
          eyebrow="Corporate Mobility"
          title="Executive Travel, Managed Seamlessly."
          subtitle="Premium transfers and mobility coordination for business delegations, executive arrivals and important corporate events."
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Request Corporate Proposal"
          primaryHref="/contact"
          secondaryLabel="WhatsApp Concierge"
          secondaryHref="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20I%20need%20a%20corporate%20transport%20proposal."
        />

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Airport transfers",
              "Executive cars",
              "Group transportation",
              "Corporate delegations",
              "Multi-day transport",
              "Event mobility",
              "Hotel transfers",
              "Chauffeur services",
              "VIP movements",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-[#E7E1D6] bg-[#FFFFFF] p-6 text-[#14283F]">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <EnquiryForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
