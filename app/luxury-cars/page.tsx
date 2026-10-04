import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { EnquiryForm } from "@/components/enquiry-form";
import { company, luxuryVehicles } from "@/data/site-data";

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
          image="/images/luxury-cars/mercedes-e-class/hero.webp"
          primaryLabel="Explore Luxury Cars"
          primaryHref="#fleet"
          secondaryLabel="Request a Quote"
          secondaryHref="/contact"
        />

        <section id="fleet" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-[#d4af75]">Curated Fleet</p>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl">A considered collection of vehicles.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#d9d1c5]">Availability subject to city, date and vehicle confirmation.</p>
          </div>

          <div className="space-y-16">
            {[...new Set(luxuryVehicles.map((car) => car.category))].map((category) => (
              <section key={category} aria-label={category}>
                <h3 className="mb-6 border-b border-white/10 pb-4 text-xl text-white">{category}</h3>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {luxuryVehicles.filter((car) => car.category === category).map((car) => (
                    <article key={car.slug} className="overflow-hidden border border-white/10 bg-[#101010]">
                      <Link href={`/luxury-cars/${car.slug}`} className="group relative block aspect-[16/10] overflow-hidden">
                        <Image src={car.heroImage} alt={`${car.name} exterior`} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                      </Link>
                      <div className="p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#d4af75]">{car.category}</p>
                        <h4 className="mt-2 text-xl text-white">{car.name}</h4>
                        <ul className="mt-4 space-y-1 text-sm text-[#d9d1c5]">{car.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                        <dl className="mt-5 space-y-2 text-sm text-[#e7dfd2]">
                          <div className="flex justify-between gap-3"><dt className="text-[#b7aa96]">Passengers</dt><dd>{car.seatingCapacity}</dd></div>
                          {car.category === "LUXURY MPV / EXECUTIVE VAN" ? <>
                            <div className="flex justify-between gap-3"><dt className="text-[#b7aa96]">Chauffeur</dt><dd>{car.chauffeurStatus}</dd></div>
                            <div className="flex justify-between gap-3"><dt className="text-[#b7aa96]">City availability</dt><dd>{car.cityAvailabilityLabel}</dd></div>
                          </> : null}
                          <div className="flex justify-between gap-3"><dt className="text-[#b7aa96]">Price</dt><dd>{car.priceType}</dd></div>
                        </dl>
                        <p className="mt-3 text-xs text-[#b7aa96]">{car.availability}</p>
                        <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.12em]">
                          <Link href={`/luxury-cars/${car.slug}`} className="border border-[#d4af75]/60 px-3 py-2 text-[#f0d7a5]">View Vehicle</Link>
                          <Link href="/contact#enquiry" className="bg-[#d4af75] px-3 py-2 text-[#090909]">Request Quote</Link>
                          <a href={`https://wa.me/91${company.whatsapp}?text=${encodeURIComponent(`Hello RentRun Luxury, please check availability for ${car.name}.`)}`} className="border border-white/20 px-3 py-2 text-white">WhatsApp Concierge</a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
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
