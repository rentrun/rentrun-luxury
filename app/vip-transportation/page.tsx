import { createPageMetadata } from "@/lib/seo-metadata";
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
      <main className="bg-[#090909] text-[#f5efe6]">
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

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {[
              "Airport arrivals and departures",
              "Hotel transfers",
              "Executive chauffeur support",
              "Private event transport",
              "Senior leadership movements",
              "Guest handling and coordination",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-[#101010] p-6 text-[#f5efe6]">
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
