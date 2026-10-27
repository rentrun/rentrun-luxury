import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/enquiry-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company, luxuryVehicles } from "@/data/site-data";
import { createPageMetadata } from "@/lib/seo-metadata";

type VehiclePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return luxuryVehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }: VehiclePageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = luxuryVehicles.find((item) => item.slug === slug);
  if (!vehicle) return { title: "Luxury Vehicle | RentRun Luxury" };
  return createPageMetadata(
    `${vehicle.name} Chauffeur Service | RentRun Luxury`,
    `${vehicle.name} chauffeur-driven service with availability subject to city, date and vehicle confirmation. Request a quote.`,
    `/luxury-cars/${vehicle.slug}`,
    vehicle.heroImage,
  );
}

export default async function VehicleDetailPage({ params }: VehiclePageProps) {
  const { slug } = await params;
  const vehicle = luxuryVehicles.find((item) => item.slug === slug);
  if (!vehicle) notFound();

  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <section className="relative min-h-[62vh] overflow-hidden">
          <Image src={vehicle.heroImage} alt={`${vehicle.name} exterior`} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative mx-auto flex min-h-[62vh] max-w-7xl flex-col justify-end px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4af75]">{vehicle.category}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-light text-white sm:text-6xl">{vehicle.name}</h1>
            <p className="mt-5 max-w-2xl text-[#f0e7d9]">{vehicle.description}</p>
            <p className="mt-4 text-sm text-[#d4af75]">Price on Request</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#enquiry" className="w-fit bg-[#d4af75] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#090909]">Request Quote</Link>
              <a href={`https://wa.me/91${company.whatsapp}?text=${encodeURIComponent(`Hello RentRun Luxury, please check availability for ${vehicle.name}.`)}`} className="w-fit border border-white/25 px-6 py-3 text-xs uppercase tracking-[0.2em] text-white">WhatsApp Concierge</a>
            </div>
          </div>
        </section>
        <section aria-label={`${vehicle.name} photo gallery`} className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {vehicle.gallery.map((image, index) => (
            <figure key={`${image.label}-${index}`} className={`relative aspect-[4/3] overflow-hidden ${index === 0 ? "sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:min-h-[28rem]" : ""}`}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 text-sm text-white">{image.label}</figcaption>
            </figure>
          ))}
        </section>
        <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#d4af75]">Vehicle overview</p>
            <h2 className="mt-3 text-3xl text-white">{vehicle.name}</h2>
            <p className="mt-5 leading-7 text-[#d9d1c5]">{vehicle.description}</p>
            <h3 className="mt-8 text-xl text-white">Key features</h3>
            <ul className="mt-4 space-y-3 text-[#e7dfd2]">{vehicle.features.map((feature) => <li key={feature} className="border-b border-white/10 pb-3">{feature}</li>)}</ul>
            <h3 className="mt-8 text-xl text-white">Suitable for</h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-[#e7dfd2]">{vehicle.useCases.map((useCase) => <li key={useCase} className="border border-white/10 px-3 py-2">{useCase}</li>)}</ul>
          </div>
          <dl className="space-y-4 border-t border-white/10 pt-6 text-sm text-[#e7dfd2]">
            <div className="flex justify-between gap-4 border-b border-white/10 pb-4"><dt className="text-[#b7aa96]">Seating</dt><dd>{vehicle.seatingCapacity}</dd></div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-4"><dt className="text-[#b7aa96]">Chauffeur service</dt><dd>{vehicle.chauffeurStatus}</dd></div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-4"><dt className="text-[#b7aa96]">Luggage</dt><dd className="max-w-[65%] text-right">{vehicle.luggage}</dd></div>
            {vehicle.category === "LUXURY MPV / EXECUTIVE VAN" ? <div className="flex justify-between gap-4 border-b border-white/10 pb-4"><dt className="text-[#b7aa96]">City availability</dt><dd>{vehicle.cityAvailabilityLabel}</dd></div> : null}
            <div className="flex justify-between gap-4 border-b border-white/10 pb-4"><dt className="text-[#b7aa96]">Availability</dt><dd>{vehicle.availability}</dd></div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-4"><dt className="text-[#b7aa96]">Price</dt><dd>{vehicle.priceType}</dd></div>
          </dl>
        </section>
        <section id="enquiry" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"><EnquiryForm /></section>
      </main>
      <SiteFooter />
    </>
  );
}