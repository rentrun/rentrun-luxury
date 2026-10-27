import { createPageMetadata } from "@/lib/seo-metadata";
import Link from "next/link";
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
      <main className="bg-[#090909] text-[#f5efe6]">
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
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d4af75]">Helicopter services</p>
          <h2 className="mt-3 text-3xl font-light text-white">Journeys that benefit from a direct route</h2>
          <div className="mt-8 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {helicopterServices.map((service) => <div key={service} className="bg-[#101010] p-5 text-sm text-[#e7dfd2]">{service}</div>)}
          </div>
          <p className="mt-6 text-sm leading-6 text-[#b7aa96]">Every flight is arranged with the operating partner. Landing permissions, route feasibility, aircraft and timing are confirmed for each request.</p>
          <Link href="/private-charter/agusta-a109" className="mt-6 inline-flex border border-[#d4af75]/70 px-5 py-3 text-xs uppercase tracking-[0.15em] text-[#f0d7a5]">Explore Agusta A109 S</Link>
        </section>
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"><CharterEnquirySection /></section>
      </main>
      <SiteFooter />
    </>
  );
}
