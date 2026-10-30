import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
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
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Luxury Chauffeur Service Delhi NCR",
    provider: { "@type": "Organization", name: company.name, url: "https://luxury.rentrun.in" },
    areaServed: { "@type": "AdministrativeArea", name: "Delhi NCR, India" },
    serviceType: "Chauffeur-driven luxury car rental",
    url: "https://luxury.rentrun.in/luxury-chauffeur-service",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which services can I enquire about?",
        acceptedAnswer: { "@type": "Answer", text: "You can request airport transfers, corporate chauffeur service, wedding transportation, hotel transfers, executive travel and private chauffeur-driven journeys." },
      },
      {
        "@type": "Question",
        name: "Is vehicle availability guaranteed?",
        acceptedAnswer: { "@type": "Answer", text: "No. Vehicle and service availability must be checked for your requested city, date, route and itinerary before booking." },
      },
      {
        "@type": "Question",
        name: "How do I receive a quote?",
        acceptedAnswer: { "@type": "Answer", text: "Submit the enquiry form or use WhatsApp. The team will review your requirements and respond with options and a personalised quotation when available." },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <SiteHeader />
      <main className="bg-white text-[#14283F]">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Luxury Chauffeur Service" }]} />
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

        <section aria-label="Service highlights" className="border-b border-[#E7E1D6] bg-[#FFFFFF]">
          <div className="mx-auto grid max-w-7xl gap-px px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {["Airport and hotel transfers", "Corporate and executive travel", "Weddings and special occasions", "Personal and private journeys"].map((item) => (
              <p key={item} className="border-b border-[#E7E1D6] py-5 text-sm text-[#14283F] lg:border-b-0 lg:border-r lg:px-6 lg:last:border-r-0">{item}</p>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">Your Journey, Your Requirements</p>
            <h2 className="mt-5 text-3xl text-[#14283F] sm:text-4xl">Luxury chauffeur services for every occasion</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="flex min-h-64 flex-col rounded-[1.5rem] border border-[#E7E1D6] bg-[#FFFFFF] p-7">
                <span className="h-px w-12 bg-[#14283F]" />
                <h3 className="mt-6 text-xl text-[#14283F]">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#14283F]">{service.text}</p>
                <Link href={service.href} className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-[#657384] underline decoration-[#C5A46D]/40 underline-offset-4">Enquire about this service</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#E7E1D6] bg-[#FFFFFF]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">Vehicle Selection</p>
              <h2 className="mt-5 text-3xl text-[#14283F] sm:text-4xl">Explore luxury vehicle categories</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#14283F]">Models shown are from the existing RentRun Luxury vehicle catalogue. Availability and quotations are confirmed only after enquiry.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {vehicles.map((vehicle) => (
                <article key={vehicle.slug} className="overflow-hidden rounded-[1.5rem] border border-[#E7E1D6] bg-white">
                  <Link href={`/luxury-cars/${vehicle.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                    <Image src={vehicle.heroImage} alt={`${vehicle.name} chauffeur-driven luxury vehicle`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 hover:scale-105" />
                  </Link>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#657384]">{vehicle.category}</p>
                    <h3 className="mt-2 text-xl text-[#14283F]">{vehicle.name}</h3>
                    <p className="mt-4 text-sm text-[#14283F]">{vehicle.seatingCapacity}</p>
                    <p className="mt-2 text-xs leading-6 text-[#14283F]">Availability subject to city, date and vehicle confirmation.</p>
                    <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.12em]">
                      <Link href={`/luxury-cars/${vehicle.slug}`} className="border border-[#C5A46D]/60 px-3 py-2 text-[#657384]">View Vehicle</Link>
                      <Link href="#enquiry" className="bg-[#14283F] px-3 py-2 text-white">Check Availability</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">Why RentRun Luxury</p>
              <h2 className="mt-5 text-3xl text-[#14283F] sm:text-4xl">A concierge-led travel arrangement</h2>
              <p className="mt-5 leading-7 text-[#14283F]">RentRun Luxury coordinates chauffeur-driven mobility through a partner network. Each request is handled individually, with vehicle selection, itinerary details and availability confirmed before booking.</p>
              <ul className="mt-8 space-y-4 text-sm text-[#14283F]">
                {["Personalised travel arrangements", "Chauffeur-driven vehicle selection by enquiry", "Assistance for corporate and special-event journeys", "Availability and quotation confirmed before booking", "Partnership-based vehicle coordination"].map((item) => <li key={item} className="border-b border-[#E7E1D6] pb-4">{item}</li>)}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">How It Works</p>
              <div className="mt-8 grid gap-4">
                {[
                  ["01", "Share your requirements", "Tell us your pickup, destination, date, timing and passenger details."],
                  ["02", "Receive a personalised quote", "The team checks requested requirements, availability and pricing."],
                  ["03", "Confirm your booking", "Review the details and terms, then confirm after the arrangement is agreed."],
                ].map(([number, title, text]) => (
                  <article key={number} className="grid grid-cols-[3rem_1fr] gap-4 rounded-[1.5rem] border border-[#E7E1D6] bg-[#FFFFFF] p-6">
                    <span className="text-sm tracking-[0.2em] text-[#657384]">{number}</span>
                    <div><h3 className="text-xl text-[#14283F]">{title}</h3><p className="mt-2 text-sm leading-7 text-[#14283F]">{text}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="enquiry" className="scroll-mt-28 border-y border-[#E7E1D6] bg-[#FFFFFF]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">Start Your Journey</p>
              <h2 className="mt-5 text-3xl text-[#14283F] sm:text-4xl">Tell us where you need to be</h2>
              <p className="mt-5 leading-7 text-[#14283F]">For airport transfers, corporate travel, weddings and private journeys in Delhi NCR, submit the details below or speak directly with the concierge.</p>
              <div className="mt-8 space-y-3 text-sm">
                <a href="tel:+917703956880" className="block text-[#657384]">Call +91 77039 56880</a>
                <a href={`https://wa.me/91${company.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="block text-[#657384]">WhatsApp Concierge</a>
              </div>
            </div>
            <LuxuryChauffeurEnquiry />
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-[0.38em] text-[#657384]">Useful Information</p>
          <h2 className="mt-5 text-center text-3xl text-[#14283F]">Frequently asked questions</h2>
          <div className="mt-10 space-y-3">
            <details className="border border-[#E7E1D6] bg-[#FFFFFF] px-6 py-5"><summary className="cursor-pointer text-[#14283F]">Which services can I enquire about?</summary><p className="mt-4 text-sm leading-7 text-[#14283F]">You can request airport transfers, corporate chauffeur service, wedding transportation, hotel transfers, executive travel and private chauffeur-driven journeys.</p></details>
            <details className="border border-[#E7E1D6] bg-[#FFFFFF] px-6 py-5"><summary className="cursor-pointer text-[#14283F]">Is vehicle availability guaranteed?</summary><p className="mt-4 text-sm leading-7 text-[#14283F]">No. Vehicle and service availability must be checked for your requested city, date, route and itinerary before booking.</p></details>
            <details className="border border-[#E7E1D6] bg-[#FFFFFF] px-6 py-5"><summary className="cursor-pointer text-[#14283F]">How do I receive a quote?</summary><p className="mt-4 text-sm leading-7 text-[#14283F]">Submit the enquiry form or use WhatsApp. The team will review your requirements and respond with options and a personalised quotation when available.</p></details>
          </div>
          <p className="mt-10 text-center text-xs text-[#14283F]">RentRun Luxury arranges travel through partner operators. Review the <Link className="text-[#657384] underline" href="/privacy-policy">privacy policy</Link> before submitting personal details.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
