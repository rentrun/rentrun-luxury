import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquiryForm } from "@/components/enquiry-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cordeliaExperiences, cordeliaShips, cordeliaSailings } from "@/data/site-data";
import { createPageMetadata } from "@/lib/seo-metadata";

type CordeliaPageProps = { params: Promise<{ slug: string }> };
const brandSlug = "cordelia-cruises";

export function generateStaticParams() {
  return [{ slug: brandSlug }, ...cordeliaShips.map((ship) => ({ slug: ship.slug }))];
}

export async function generateMetadata({ params }: CordeliaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const ship = cordeliaShips.find((item) => item.slug === slug);
  if (slug !== brandSlug && !ship) return { title: "Cruise | RentRun Luxury" };
  return {
    ...createPageMetadata(
      ship ? `${ship.name} Cruise Experience | RentRun Luxury` : "Luxury Cruise Experiences | RentRun Luxury",
      ship
        ? `Explore ${ship.name} cruise experiences, sailing routes and cabin categories, subject to sailing availability and confirmation.`
        : "Explore curated luxury cruise experiences, sailing routes, onboard experiences and cabin categories.",
      `/luxury-cruises/${slug}`,
      ship?.heroImage ?? cordeliaShips[0].heroImage,
    ),
    robots: { index: false, follow: false },
  };
}

export default async function CordeliaCruiseDetailPage({ params }: CordeliaPageProps) {
  const { slug } = await params;
  const ship = cordeliaShips.find((item) => item.slug === slug);
  if (slug !== brandSlug && !ship) notFound();
  const sailings = ship ? cordeliaSailings.filter((sailing) => sailing.shipSlug === ship.slug) : cordeliaSailings;
  const gallery: Array<{ src: string; alt: string; label: string }> = ship
    ? ship.gallery.map((image) => ({ src: image.src, alt: image.alt, label: image.label }))
    : cordeliaShips.map((item) => ({ src: item.gallery[0].src, alt: "Luxury cruise ship at sea", label: "Ship exterior" }));

  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <section className="relative min-h-[58vh] overflow-hidden">
          <Image src={ship?.heroImage ?? cordeliaShips[0].heroImage} alt="Luxury cruise ship at sea" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative mx-auto flex min-h-[58vh] max-w-7xl flex-col justify-end px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4af75]">Luxury Cruise</p>
            <h1 className="mt-4 text-4xl font-light text-white sm:text-6xl">{ship ? "Premium Cruise Journey" : "Curated Luxury Cruise Experiences"}</h1>
            <p className="mt-5 max-w-3xl text-[#f0e7d9]">Handpicked sailing experiences with routes, dates and cabin categories subject to availability and final confirmation.</p>
            <Link href="/contact#enquiry" className="mt-7 w-fit bg-[#d4af75] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#090909]">Request Cruise Quote</Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d4af75]">Cruise Gallery</p>
              <h2 className="mt-3 text-3xl text-white">A closer look aboard.</h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((image, index) => (
              <figure key={`${image.src}-${index}`} className={`relative aspect-[4/3] overflow-hidden border border-white/10 ${index === 0 ? "sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:min-h-[26rem]" : ""}`}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 text-sm text-white">{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 border-y border-white/10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4af75]">Cruise overview</p>
            <h2 className="mt-4 text-3xl text-white">Premium Cruise Journeys</h2>
            <p className="mt-5 leading-7 text-[#d9d1c5]">Explore distinctive destinations, departure ports and onboard experiences. Routes, sailing dates and cabin options are subject to sailing availability and final confirmation.</p>
          </div>
          <div>
            <h3 className="text-xl text-white">Cabins & experiences</h3>
            <p className="mt-4 text-sm leading-6 text-[#d9d1c5]">Multiple cabin categories are available. Cabin types and availability vary by sailing.</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {cordeliaExperiences.map((experience) => <li key={experience} className="border-t border-white/10 py-3 text-[#e7dfd2]">{experience}</li>)}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d4af75]">Sailing information</p>
              <h2 className="mt-3 text-3xl text-white">Upcoming sailings</h2>
            </div>
          </div>
          {sailings.length ? (
            <div className="grid gap-4 md:grid-cols-2">
              {sailings.map((sailing, index) => <article key={`${sailing.ship}-${sailing.cruiseName}-${index}`} className="border-y border-white/10 py-5 text-sm text-[#e7dfd2]">
                <p className="text-lg text-white">{sailing.cruiseName} Â· {sailing.duration ?? (sailing.nights ? `${sailing.nights} Nights` : "Duration on request")}</p>
                <p className="mt-3">{sailing.departurePort} · {sailing.ports.join(" → ")}</p>
                <p className="mt-2">{sailing.destinations.join(", ")} Â· {sailing.departureDate ?? "Dates on request"} to {sailing.returnDate ?? "Dates on request"} Â· {sailing.availability}</p>
              </article>)}
            </div>
          ) : <p className="max-w-3xl border-y border-white/10 py-6 text-[#b7aa96]">No current sailing dates are listed. Request a quote for upcoming dates, routes and cabin availability.</p>}
        </section>

        <section id="enquiry" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"><EnquiryForm variant="cruise" /></section>
      </main>
      <SiteFooter />
    </>
  );
}
