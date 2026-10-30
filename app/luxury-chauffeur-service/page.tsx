import Image from "next/image";
import Link from "next/link";
import { LuxuryChauffeurEnquiry } from "@/components/luxury-chauffeur-enquiry";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company, luxuryVehicles } from "@/data/site-data";
import { createPageMetadata } from "@/lib/seo-metadata";

export const metadata = createPageMetadata(
  "Luxury Chauffeur Service Delhi NCR | RentRun Luxury",
  "Request chauffeur-driven luxury cars in Delhi NCR for airport transfers, corporate travel, weddings and private journeys through RentRun Luxury.",
  "/luxury-chauffeur-service",
  "/images/luxury-cars/mercedes-e-class/hero.webp",
);

const services = [
  { title: "Luxury Airport Transfers", text: "Share your airport, terminal, pickup and destination details for a personalised transfer request.", href: "/luxury-cars/airport-transfer" },
  { title: "Corporate Chauffeur Service", text: "Plan chauffeur-driven transport for meetings, executives and business itineraries.", href: "/luxury-cars/corporate" },
  { title: "Wedding Transportation", text: "Enquire about coordinated wedding travel options for guests, family and special arrivals.", href: "/luxury-cars/wedding" },
  { title: "Business Meetings and Executive Travel", text: "Arrange a vehicle around your agenda, pickup schedule and route requirements.", href: "/luxury-cars/corporate" },
  { title: "Hotel Transfers", text: "Request transport between hotels, airports, venues and other destinations.", href: "/luxury-cars/airport-transfer" },
  { title: "Private Chauffeur-Driven Travel", text: "Discuss private city or itinerary-based travel with the concierge team.", href: "/luxury-cars/chauffeur-service" },
];

export default function LuxuryChauffeurServicePage() {
  const vehicleSlugs = ["mercedes-e-class", "mercedes-v-class", "toyota-vellfire"];
  const vehicles = luxuryVehicles.filter((vehicle) => vehicleSlugs.includes(vehicle.slug));
  const whatsappMessage = encodeURIComponent("Hello RentRun Luxury, I would like a personalised quote for luxury chauffeur service in Delhi NCR.");
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://luxury.rentrun.in/" },
      { "@type": "ListItem", position: 2, name: "Luxury Chauffeur Service", item: "https://luxury.rentrun.in/luxury-chauffeur-service" },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Luxury Chauffeur Service Delhi NCR",
    provider: { "@type": "Organization", name: company.name, url: "https://luxury.rentrun.in" },
    areaServed: { "@type": "AdministrativeArea", name: "Delhi NCR, India" },
    serviceType: "Chauffeur-driven luxury car rental",
    url: "https://luxury.rentrun.in/luxury-chauffeur-service",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <SiteHeader />
      <main className="bg-[#171717] text-[#171717]">
        <PageHero
          eyebrow="Delhi NCR • Chauffeur-Driven Luxury Travel"
          title="Luxury Chauffeur-Driven Car Rental in Delhi NCR"
          subtitle="Premium chauffeur-driven travel for airport transfers, corporate journeys, weddings and special occasions. Share your requirements for a personalised quote and vehicle availability confirmation."
          image="/images/luxury-cars/mercedes-e-class/hero.webp"
          primaryLabel="Get a Luxury Quote"
          primaryHref="#enquiry"
          secondaryLabel="WhatsApp Us"
          secondaryHref={`https://wa.me/91${company.whatsapp}?text=${whatsappMessage}`}
        />

        <section aria-label="Service highlights" className="border-b border-white/10 bg-[#FFFFFF]">
          <div className="mx-auto grid max-w-7xl gap-px px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {["Airport and hotel transfers", "Corporate and executive travel", "Weddings and special occasions", "Personal and private journeys"].map((item) => (
              <p key={item} className="border-b border-white/10 py-5 text-sm text-[#171717] lg:border-b-0 lg:border-r lg:px-6 lg:last:border-r-0">{item}</p>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.38em] text-[#EC167A]">Your Journey, Your Requirements</p>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl">Luxury chauffeur services for every occasion</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="flex min-h-64 flex-col rounded-[1.5rem] border border-white/10 bg-[#FFFFFF] p-7">
                <span className="h-px w-12 bg-[#EC167A]" />
                <h3 className="mt-6 text-xl text-white">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#4D4D4D]">{service.text}</p>
                <Link href={service.href} className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-[#EC167A] underline decoration-[#EC167A]/40 underline-offset-4">Enquire about this service</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#FFFFFF]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-xs uppercase tracking-[0.38em] text-[#EC167A]">Vehicle Selection</p>
              <h2 className="mt-5 text-3xl text-white sm:text-4xl">Explore luxury vehicle categories</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#4D4D4D]">Models shown are from the existing RentRun Luxury vehicle catalogue. Availability and quotations are confirmed only after enquiry.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {vehicles.map((vehicle) => (
                <article key={vehicle.slug} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#171717]">
                  <Link href={`/luxury-cars/${vehicle.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                    <Image src={vehicle.heroImage} alt={`${vehicle.name} chauffeur-driven luxury vehicle`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 hover:scale-105" />
                  </Link>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#EC167A]">{vehicle.category}</p>
                    <h3 className="mt-2 text-xl text-white">{vehicle.name}</h3>
                    <p className="mt-4 text-sm text-[#4D4D4D]">{vehicle.seatingCapacity}</p>
                    <p className="mt-2 text-xs leading-6 text-[#4D4D4D]">Availability subject to city, date and vehicle confirmation.</p>
                    <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.12em]">
                      <Link href={`/luxury-cars/${vehicle.slug}`} className="border border-[#EC167A]/60 px-3 py-2 text-[#EC167A]">View Vehicle</Link>
                      <Link href="#enquiry" className="bg-[#EC167A] px-3 py-2 text-[#171717]">Check Availability</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.38em] text-[#EC167A]">Why RentRun Luxury</p>
              <h2 className="mt-5 text-3xl text-white sm:text-4xl">A concierge-led travel arrangement</h2>
              <p className="mt-5 leading-7 text-[#4D4D4D]">RentRun Luxury coordinates chauffeur-driven mobility through a partner network. Each request is handled individually, with vehicle selection, itinerary details and availability confirmed before booking.</p>
              <ul className="mt-8 space-y-4 text-sm text-[#171717]">
                {["Personalised travel arrangements", "Chauffeur-driven vehicle selection by enquiry", "Assistance for corporate and special-event journeys", "Availability and quotation confirmed before booking", "Partnership-based vehicle coordination"].map((item) => <li key={item} className="border-b border-white/10 pb-4">{item}</li>)}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.38em] text-[#EC167A]">How It Works</p>
              <div className="mt-8 grid gap-4">
                {[
                  ["01", "Share your requirements", "Tell us your pickup, destination, date, timing and passenger details."],
                  ["02", "Receive a personalised quote", "The team checks requested requirements, availability and pricing."],
                  ["03", "Confirm your booking", "Review the details and terms, then confirm after the arrangement is agreed."],
                ].map(([number, title, text]) => (
                  <article key={number} className="grid grid-cols-[3rem_1fr] gap-4 rounded-[1.5rem] border border-white/10 bg-[#FFFFFF] p-6">
                    <span className="text-sm tracking-[0.2em] text-[#EC167A]">{number}</span>
                    <div><h3 className="text-xl text-white">{title}</h3><p className="mt-2 text-sm leading-7 text-[#4D4D4D]">{text}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="enquiry" className="scroll-mt-28 border-y border-white/10 bg-[#FFFFFF]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.38em] text-[#EC167A]">Start Your Journey</p>
              <h2 className="mt-5 text-3xl text-white sm:text-4xl">Tell us where you need to be</h2>
              <p className="mt-5 leading-7 text-[#4D4D4D]">For airport transfers, corporate travel, weddings and private journeys in Delhi NCR, submit the details below or speak directly with the concierge.</p>
              <div className="mt-8 space-y-3 text-sm">
                <a href="tel:+917703956880" className="block text-[#EC167A]">Call +91 77039 56880</a>
                <a href={`https://wa.me/91${company.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="block text-[#EC167A]">WhatsApp Concierge</a>
              </div>
            </div>
            <LuxuryChauffeurEnquiry />
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-[0.38em] text-[#EC167A]">Useful Information</p>
          <h2 className="mt-5 text-center text-3xl text-white">Frequently asked questions</h2>
          <div className="mt-10 space-y-3">
            <details className="border border-white/10 bg-[#FFFFFF] px-6 py-5"><summary className="cursor-pointer text-white">Which services can I enquire about?</summary><p className="mt-4 text-sm leading-7 text-[#4D4D4D]">You can request airport transfers, corporate chauffeur service, wedding transportation, hotel transfers, executive travel and private chauffeur-driven journeys.</p></details>
            <details className="border border-white/10 bg-[#FFFFFF] px-6 py-5"><summary className="cursor-pointer text-white">Is vehicle availability guaranteed?</summary><p className="mt-4 text-sm leading-7 text-[#4D4D4D]">No. Vehicle and service availability must be checked for your requested city, date, route and itinerary before booking.</p></details>
            <details className="border border-white/10 bg-[#FFFFFF] px-6 py-5"><summary className="cursor-pointer text-white">How do I receive a quote?</summary><p className="mt-4 text-sm leading-7 text-[#4D4D4D]">Submit the enquiry form or use WhatsApp. The team will review your requirements and respond with options and a personalised quotation when available.</p></details>
          </div>
          <p className="mt-10 text-center text-xs text-[#4D4D4D]">RentRun Luxury arranges travel through partner operators. Review the <Link className="text-[#EC167A] underline" href="/privacy-policy">privacy policy</Link> before submitting personal details.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
