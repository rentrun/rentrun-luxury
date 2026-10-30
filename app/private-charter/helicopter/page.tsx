import { createPageMetadata } from "@/lib/seo-metadata";
import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { CharterEnquirySection } from "@/components/private-charter-tools";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { helicopterServices } from "@/data/private-charter";

export const metadata = createPageMetadata(
  "Helicopter Charter | RentRun Luxury",
  "Helicopter charter arranged for business, airport transfers, events, leisure journeys and specialist aerial requirements.",
  "/private-charter/helicopter",
);

export default function HelicopterPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#14283F]">
        <PageHero
          eyebrow="Helicopter Charter"
          title="Helicopter Charter Arranged for Your Route"
          subtitle="Helicopter charter arranged around your route, occasion and timing, with aircraft and availability confirmed by the operating partner."
          image="https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Request Helicopter Charter"
          primaryHref="#enquiry"
          secondaryLabel="View Agusta A109 S"
          secondaryHref="/private-charter/agusta-a109"
        />
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#657384]">Helicopter services</p>
          <h2 className="mt-3 text-3xl font-light text-[#14283F]">Journeys that benefit from a direct route</h2>
          <div className="mt-8 grid gap-px border border-[#E7E1D6] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {helicopterServices.map((service) => <div key={service} className="bg-[#FFFFFF] p-5 text-sm text-[#14283F]">{service}</div>)}
          </div>
          <p className="mt-6 text-sm leading-6 text-[#14283F]">Every flight is arranged with the operating partner. Landing permissions, route feasibility, aircraft and timing are confirmed for each request.</p>
          <Link href="/private-charter/agusta-a109" className="mt-6 inline-flex border border-[#C5A46D]/70 px-5 py-3 text-xs uppercase tracking-[0.15em] text-[#657384]">Explore Agusta A109 S</Link>
        </section>
        <FaqSection
          title="Helicopter charter questions"
          items={[
            { question: "What details are needed for a helicopter request?", answer: "Provide the departure and arrival locations, preferred timing, passenger count, luggage details and the purpose of the journey so the route can be reviewed." },
            { question: "Does RentRun Luxury operate helicopters?", answer: "No. Helicopter requests are arranged through operating partners. Aircraft, route, landing permissions and availability are confirmed by the relevant partner." },
            { question: "Can helicopter charters be arranged for events?", answer: "Event enquiries may be submitted, subject to route feasibility, landing arrangements, operating permissions, timing and partner availability." },
            { question: "Are weather or operational changes possible?", answer: "Yes. Helicopter operations remain subject to weather, safety requirements and operator approval, with changes communicated by the arranging team where applicable." },
          ]}
        />
        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8"><CharterEnquirySection /></section>
      </main>
      <SiteFooter />
    </>
  );
}
