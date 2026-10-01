import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cruiseOptions } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Luxury Cruises & Private Yacht Experiences | RentRun Luxury",
  description:
    "Luxury cruise experiences, private yacht charter, sunset cruises and celebration voyages curated for private groups, destination escapes and corporate events.",
  alternates: { canonical: "/luxury-cruises" },
};

export default function LuxuryCruisesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Luxury Cruises"
          title="Set Sail in Style."
          subtitle="Elegant journeys at sea, from destination escapes and private yacht experiences to celebration voyages curated around your occasion."
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Explore Cruises"
          primaryHref="#cruise-experiences"
          secondaryLabel="Request Quote"
          secondaryHref="/contact"
        />

        <section id="cruise-experiences" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-[#d4af75]">Curated Experiences</p>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl">Private, refined and destination-led travel on the water.</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {cruiseOptions.map((cruise) => (
              <article key={cruise.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010]">
                <img src={cruise.image} alt={cruise.title} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d4af75]">{cruise.title}</p>
                  <h3 className="mt-4 text-2xl text-white">{cruise.destination}</h3>
                  <div className="mt-4 space-y-2 text-[#e7dfd2] text-sm">
                    <p><span className="text-[#d4af75]">Duration:</span> {cruise.duration}</p>
                    <p><span className="text-[#d4af75]">Guests:</span> {cruise.guests}</p>
                  </div>
                  <ul className="mt-5 space-y-2 text-[#e7dfd2]">
                    {cruise.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#d4af75]" />{highlight}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/contact" className="rounded-full bg-[#d4af75] px-5 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#090909]">
                      Request Quote
                    </Link>
                  </div>
                </div>
              </article>
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
