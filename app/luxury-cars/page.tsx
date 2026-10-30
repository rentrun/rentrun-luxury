import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { EnquiryForm } from "@/components/enquiry-form";
import { company, luxuryVehicles } from "@/data/site-data";
import { createPageMetadata } from "@/lib/seo-metadata";

export const metadata = createPageMetadata(
  "Luxury Car Rental with Chauffeur | RentRun Luxury",
  "Luxury car rental with chauffeur, premium sedan and SUV options, executive transfers, and premium airport mobility curated by RentRun Luxury.",
  "/luxury-cars",
  "/images/luxury-cars/mercedes-e-class/hero.webp",
);

export default function LuxuryCarsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#171717] text-[#171717]">
        <PageHero
          eyebrow="Luxury Cars"
          title="Chauffeur-Driven Luxury Cars"
          subtitle="Premium chauffeur-driven vehicles and executive mobility experiences curated for business travel, family journeys and memorable arrivals."
          image="/images/luxury-cars/mercedes-e-class/hero.webp"
          primaryLabel="Explore Luxury Cars"
          primaryHref="#fleet"
          secondaryLabel="Request a Quote"
          secondaryHref="/contact"
        />

        <section id="fleet" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-[#EC167A]">Curated Fleet</p>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl">A considered collection of vehicles.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#4D4D4D]">Availability subject to city, date and vehicle confirmation.</p>
            <p className="mx-auto mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-[#EC167A]">
              <Link href="/luxury-cars/chauffeur-service">Chauffeur service</Link>
              <Link href="/luxury-cars/airport-transfer">Airport transfers</Link>
              <Link href="/luxury-cars/corporate">Corporate car service</Link>
              <Link href="/luxury-cars/wedding">Wedding cars</Link>
            </p>
          </div>

          <div className="space-y-16">
            {[...new Set(luxuryVehicles.map((car) => car.category))].map((category) => (
              <section key={category} aria-label={category}>
                <h3 className="mb-6 border-b border-white/10 pb-4 text-xl text-white">{category}</h3>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {luxuryVehicles.filter((car) => car.category === category).map((car) => (
                    <article key={car.slug} className="overflow-hidden border border-white/10 bg-[#FFFFFF]">
                      <Link href={`/luxury-cars/${car.slug}`} className="group relative block aspect-[16/10] overflow-hidden">
                        <Image src={car.heroImage} alt={`${car.name} exterior`} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                      </Link>
                      <div className="p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#EC167A]">{car.category}</p>
                        <h4 className="mt-2 text-xl text-white">{car.name}</h4>
                        <ul className="mt-4 space-y-1 text-sm text-[#4D4D4D]">{car.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                        <dl className="mt-5 space-y-2 text-sm text-[#171717]">
                          <div className="flex justify-between gap-3"><dt className="text-[#4D4D4D]">Passengers</dt><dd>{car.seatingCapacity}</dd></div>
                          {car.category === "LUXURY MPV / EXECUTIVE VAN" ? <>
                            <div className="flex justify-between gap-3"><dt className="text-[#4D4D4D]">Chauffeur</dt><dd>{car.chauffeurStatus}</dd></div>
                            <div className="flex justify-between gap-3"><dt className="text-[#4D4D4D]">City availability</dt><dd>{car.cityAvailabilityLabel}</dd></div>
                          </> : null}
                          <div className="flex justify-between gap-3"><dt className="text-[#4D4D4D]">Price</dt><dd>{car.priceType}</dd></div>
                        </dl>
                        <p className="mt-3 text-xs text-[#4D4D4D]">{car.availability}</p>
                        <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.12em]">
                          <Link href={`/luxury-cars/${car.slug}`} className="border border-[#EC167A]/60 px-3 py-2 text-[#EC167A]">View Vehicle</Link>
                          <Link href="/contact#enquiry" className="bg-[#EC167A] px-3 py-2 text-[#171717]">Request Quote</Link>
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
