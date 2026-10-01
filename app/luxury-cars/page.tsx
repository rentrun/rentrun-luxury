import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { EnquiryForm } from "@/components/enquiry-form";
import { luxuryFleet } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Luxury Car Rental with Chauffeur | RentRun Luxury",
  description:
    "Luxury car rental with chauffeur, premium sedan and SUV options, executive transfers, and premium airport mobility curated by RentRun Luxury.",
  alternates: { canonical: "/luxury-cars" },
};

export default function LuxuryCarsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Luxury Cars"
          title="Arrive in Luxury."
          subtitle="Premium chauffeur-driven vehicles and executive mobility experiences curated for business travel, family journeys and memorable arrivals."
          image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Explore Luxury Cars"
          primaryHref="#fleet"
          secondaryLabel="Request a Quote"
          secondaryHref="/contact"
        />

        <section id="fleet" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-[#d4af75]">Curated Fleet</p>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl">Subject to availability.</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {luxuryFleet.map((car) => (
              <article key={car.category} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010]">
                <img src={car.image} alt={car.category} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl text-white">{car.category}</h3>
                    <span className="text-xs uppercase tracking-[0.26em] text-[#d4af75]">Subject to availability</span>
                  </div>
                  <div className="mt-5 grid gap-3 text-sm text-[#e7dfd2] sm:grid-cols-2">
                    <div><span className="text-[#d4af75]">Seating:</span> {car.seating}</div>
                    <div><span className="text-[#d4af75]">Chauffeur:</span> {car.chauffeur}</div>
                    <div><span className="text-[#d4af75]">Luggage:</span> {car.luggage}</div>
                    <div><span className="text-[#d4af75]">Category:</span> Premium</div>
                  </div>
                  <ul className="mt-5 space-y-2 text-[#e7dfd2]">
                    {car.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#d4af75]" />{feature}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-4">
                    <Link href="/contact" className="rounded-full bg-[#d4af75] px-5 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#090909]">
                      Request Quote
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#101010]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                "Luxury Sedan",
                "Premium Sedan",
                "Luxury SUV",
                "Premium SUV",
                "Executive MPV",
                "Luxury Van",
                "Airport Transfer",
                "Corporate Mobility",
                "Wedding Cars",
              ].map((option) => (
                <div key={option} className="rounded-2xl border border-white/10 bg-[#121212] p-5 text-[#f5efe6]">
                  {option}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <EnquiryForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
