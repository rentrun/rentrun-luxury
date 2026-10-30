import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AircraftImagePlaceholder, CharterEnquiryButton, CharterEnquirySection } from "@/components/private-charter-tools";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { charterAircraft } from "@/data/private-charter";
import { createPageMetadata } from "@/lib/seo-metadata";

type CharterPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return charterAircraft.map((aircraft) => ({ slug: aircraft.slug }));
}

export async function generateMetadata({ params }: CharterPageProps) {
  const { slug } = await params;
  const aircraft = charterAircraft.find((item) => item.slug === slug);
  const title = aircraft?.name ?? "Private Charter";
  return createPageMetadata(
    `${title} Charter | RentRun Luxury`,
    `Explore the ${title} and request a private charter quote.`,
    `/private-charter/${slug}`,
    aircraft?.heroImage,
  );
}

export default async function CharterDetailPage({ params }: CharterPageProps) {
  const { slug } = await params;
  const aircraft = charterAircraft.find((item) => item.slug === slug);
  if (!aircraft) notFound();

  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#14283F]">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Private Charter", href: "/private-charter" }, { name: aircraft.name }]} />
        <section className="relative min-h-[55vh] overflow-hidden">
          {aircraft.heroImage ? <Image src={aircraft.heroImage} alt={`${aircraft.name} aircraft`} fill priority sizes="100vw" className="object-cover" /> : <AircraftImagePlaceholder aircraft={aircraft} className="absolute inset-0 h-full" />}
          {aircraft.heroImage ? <div className="absolute inset-0 bg-[#E7E1D6]/65" /> : null}
          <div className="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-end px-4 py-12 sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#657384]">{aircraft.category}</p>
            <h1 className="mt-4 text-4xl font-light text-[#14283F] sm:text-6xl">{aircraft.name}</h1>
            <p className="mt-5 max-w-3xl text-[#14283F]">{aircraft.description}</p>
            <p className="mt-3 text-sm text-[#657384]">Price on Request</p>
            <div className="mt-6"><CharterEnquiryButton aircraftPreference={aircraft.name} label="Request Quote" /></div>
          </div>
        </section>
        <section aria-label={`${aircraft.name} image gallery`} className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {aircraft.gallery.length ? aircraft.gallery.map((image, index) => (
            <figure key={`${image.label}-${index}`} className={`relative aspect-[4/3] overflow-hidden ${index === 0 ? "sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:min-h-[28rem]" : ""}`}>
              {image.src ? <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" /> : <div role="img" aria-label={image.alt} className="flex h-full min-h-48 flex-col items-center justify-center bg-[#FFFFFF] p-8 text-center"><p className="text-[10px] uppercase tracking-[0.22em] text-[#657384]">{aircraft.name}</p><p className="mt-3 text-sm text-[#14283F]">{image.placeholderText ?? "Aircraft image coming soon"}</p></div>}
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 to-transparent px-4 pb-4 pt-10 text-sm text-[#14283F]">{image.label}</figcaption>
            </figure>
          )) : <AircraftImagePlaceholder aircraft={aircraft} className="aspect-[16/7] sm:col-span-2 lg:col-span-3" />}
        </section>
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div><p className="text-xs uppercase tracking-[0.25em] text-[#657384]">Aircraft overview</p><h2 className="mt-3 text-3xl font-light text-[#14283F]">{aircraft.name}</h2><p className="mt-4 leading-7 text-[#14283F]">{aircraft.description}</p><p className="mt-4 text-sm text-[#14283F]">{aircraft.cabin}</p></div>
            <dl className="grid grid-cols-2 gap-px border border-[#E7E1D6] bg-white/10 sm:grid-cols-3">
              {[ ["Aircraft type", aircraft.category], ["Passenger capacity", aircraft.passengers], ["Cruise speed", aircraft.speed], ["Range", aircraft.range], ["Baggage", aircraft.baggage], ["Price", "Price on Request"] ].map(([label, value]) => <div key={label} className="bg-[#FFFFFF] p-4"><dt className="text-[10px] uppercase tracking-[0.12em] text-[#14283F]">{label}</dt><dd className="mt-2 text-sm leading-5 text-[#14283F]">{value}</dd></div>)}
            </dl>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3"><CharterEnquiryButton aircraftPreference={aircraft.name} label="Request Quote" /><a href={`https://wa.me/917703956880?text=${encodeURIComponent(`Hello RentRun Luxury, please check charter availability for ${aircraft.name}.`)}`} target="_blank" rel="noreferrer" className="border border-white/25 px-4 py-3 text-xs uppercase tracking-[0.12em] text-[#14283F]">WhatsApp Concierge</a></div>
          <p className="mt-6 text-xs leading-5 text-[#14283F]">Passenger capacity may vary by aircraft configuration. Aircraft, routing, availability and quotation are confirmed after enquiry.</p>
        </section>
        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8"><CharterEnquirySection /></section>
      </main>
      <SiteFooter />
    </>
  );
}