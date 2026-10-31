import Image from "next/image";
import Link from "next/link";
import { LuxuryChauffeurEnquiry } from "@/components/luxury-chauffeur-enquiry";
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
  { title: "VIP Transportation", text: "Coordinate discreet, personalised chauffeur travel for VIP movement and priority itineraries.", href: "/vip-transportation" },
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
      { "@type": "Question", name: "How can I book a luxury chauffeur-driven car?", acceptedAnswer: { "@type": "Answer", text: "Submit the enquiry form or WhatsApp RentRun Luxury with your service, route, date, timing and passenger details. The team will coordinate options before booking." } },
      { "@type": "Question", name: "Which luxury vehicles can I request?", acceptedAnswer: { "@type": "Answer", text: "You can request the Mercedes-Benz E-Class, Mercedes-Benz V-Class and Toyota Vellfire, subject to route and availability." } },
      { "@type": "Question", name: "Do you provide airport transfers?", acceptedAnswer: { "@type": "Answer", text: "Yes, airport transfer enquiries can include terminal, flight, pickup, destination and return details for a personalised arrangement." } },
      { "@type": "Question", name: "Can I book vehicles for corporate events?", acceptedAnswer: { "@type": "Answer", text: "Yes. Corporate and event travel assistance is available for meetings, executive movement, delegations and coordinated guest journeys." } },
      { "@type": "Question", name: "Can I request a Mercedes V-Class?", acceptedAnswer: { "@type": "Answer", text: "You can request the Mercedes-Benz V-Class. Final vehicle assignment depends on the date, route and confirmation from a partner operator." } },
      { "@type": "Question", name: "Is vehicle availability guaranteed?", acceptedAnswer: { "@type": "Answer", text: "No. Availability must be checked for the requested city, date, route, timing and vehicle configuration before booking." } },
      { "@type": "Question", name: "How is the final quotation calculated?", acceptedAnswer: { "@type": "Answer", text: "The quotation is personalised and may consider vehicle category, route, duration, schedule, city, tolls or parking, and special requirements." } },
      { "@type": "Question", name: "How can I confirm my booking?", acceptedAnswer: { "@type": "Answer", text: "Confirm only after the team provides the available vehicle option, itinerary, quotation and booking terms, and you accept the arrangement." } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <SiteHeader />
      <main className="bg-white text-[#14283F]">
        <section className="relative overflow-hidden border-b border-[#E7E1D6] bg-[#14283F]">
          <Image src="/images/luxury-cars/mercedes-e-class/hero.webp" alt="Mercedes-Benz E-Class chauffeur-driven luxury car in Delhi NCR" fill priority sizes="100vw" className="object-cover object-center opacity-35" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,40,63,0.98)_0%,rgba(20,40,63,0.88)_44%,rgba(20,40,63,0.35)_100%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:py-14">
            <div className="flex flex-col justify-center text-white">
              <p className="text-xs font-bold uppercase tracking-[0.38em] text-[#C5A46D]">Delhi NCR • Chauffeur-Driven Luxury Travel</p>
              <h1 className="mt-5 text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">Luxury Chauffeur-Driven Car Rental in Delhi NCR</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/85 sm:text-lg">Premium chauffeur-driven cars and executive vehicles for airport transfers, corporate travel, weddings and private journeys.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#enquiry" className="rounded-full bg-[#C5A46D] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#14283F]">GET A LUXURY QUOTE</a>
                <a href={`https://wa.me/91${company.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/50 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white">WHATSAPP NOW</a>
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-white/70">Mercedes-Benz E-Class • Mercedes-Benz V-Class • Toyota Vellfire</p>
            </div>
            <div id="enquiry" className="scroll-mt-28"><LuxuryChauffeurEnquiry /></div>
          </div>
        </section>

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
                    <p className="mt-2 text-xs leading-6 text-[#14283F]">Chauffeur-driven • Premium comfort • Executive cabin</p>
                    <p className="mt-3 text-sm font-medium text-[#14283F]">Price on Request</p>
                    <p className="mt-1 text-xs leading-5 text-[#657384]">Availability and quotation confirmed by the team.</p>
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
                  ["02", "Receive available vehicle options", "The team checks your requirements and coordinated availability."],
                  ["03", "Get a personalised quotation", "Review the proposed vehicle, itinerary and transparent quotation."],
                  ["04", "Confirm your booking", "Confirm the agreed details after availability and price are reviewed."],
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

        <section className="border-y border-[#E7E1D6] bg-[#14283F] text-white">
          <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.38em] text-[#C5A46D]">Start Your Journey</p>
            <h2 className="mt-4 text-3xl sm:text-4xl">Check availability and request your quote</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80">Share your travel details with the RentRun Luxury team. Availability and pricing are confirmed personally before booking.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="#enquiry" className="rounded-full bg-[#C5A46D] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#14283F]">GET A LUXURY QUOTE</a>
              <a href={`https://wa.me/91${company.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/50 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white">WHATSAPP NOW</a>
              <a href="tel:+917703956880" className="rounded-full border border-white/50 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white">CALL +91 7703956880</a>
            </div>
            <p className="mt-6 text-xs text-white/70">Also available: +91 8178575212</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-[0.38em] text-[#657384]">Useful Information</p>
          <h2 className="mt-5 text-center text-3xl text-[#14283F]">Frequently asked questions</h2>
          <div className="mt-10 space-y-3">
            <details className="border border-[#E7E1D6] bg-[#FFFFFF] px-6 py-5"><summary className="cursor-pointer text-[#14283F]">How can I book a luxury chauffeur-driven car?</summary><p className="mt-4 text-sm leading-7 text-[#14283F]">Submit the enquiry form or WhatsApp RentRun Luxury with your service, route, date, timing and passenger details. The team will coordinate options before booking.</p></details>
            <details className="border border-[#E7E1D6] bg-[#FFFFFF] px-6 py-5"><summary className="cursor-pointer text-[#14283F]">Which luxury vehicles can I request?</summary><p className="mt-4 text-sm leading-7 text-[#14283F]">You can request the Mercedes-Benz E-Class, Mercedes-Benz V-Class and Toyota Vellfire, subject to route and availability.</p></details>
            <details className="border border-[#E7E1D6] bg-[#FFFFFF] px-6 py-5"><summary className="cursor-pointer text-[#14283F]">Do you provide airport transfers?</summary><p className="mt-4 text-sm leading-7 text-[#14283F]">Yes, airport transfer enquiries can include terminal, flight, pickup, destination and return details for a personalised arrangement.</p></details>
            <details className="border border-[#E7E1D6] bg-[#FFFFFF] px-6 py-5"><summary className="cursor-pointer text-[#14283F]">Can I book vehicles for corporate events?</summary><p className="mt-4 text-sm leading-7 text-[#14283F]">Yes. Corporate and event travel assistance is available for meetings, executive movement, delegations and coordinated guest journeys.</p></details>
            <details className="border border-[#E7E1D6] bg-[#FFFFFF] px-6 py-5"><summary className="cursor-pointer text-[#14283F]">Can I request a Mercedes V-Class?</summary><p className="mt-4 text-sm leading-7 text-[#14283F]">You can request the Mercedes-Benz V-Class. Final vehicle assignment depends on the date, route and confirmation from a partner operator.</p></details>
            <details className="border border-[#E7E1D6] bg-[#FFFFFF] px-6 py-5"><summary className="cursor-pointer text-[#14283F]">Is vehicle availability guaranteed?</summary><p className="mt-4 text-sm leading-7 text-[#14283F]">No. Availability must be checked for the requested city, date, route, timing and vehicle configuration before booking.</p></details>
            <details className="border border-[#E7E1D6] bg-[#FFFFFF] px-6 py-5"><summary className="cursor-pointer text-[#14283F]">How is the final quotation calculated?</summary><p className="mt-4 text-sm leading-7 text-[#14283F]">The quotation is personalised and may consider vehicle category, route, duration, schedule, city, tolls or parking, and special requirements.</p></details>
            <details className="border border-[#E7E1D6] bg-[#FFFFFF] px-6 py-5"><summary className="cursor-pointer text-[#14283F]">How can I confirm my booking?</summary><p className="mt-4 text-sm leading-7 text-[#14283F]">Confirm only after the team provides the available vehicle option, itinerary, quotation and booking terms, and you accept the arrangement.</p></details>
          </div>
          <p className="mt-10 text-center text-xs text-[#14283F]">RentRun Luxury arranges travel through partner operators. Review the <Link className="text-[#657384] underline" href="/privacy-policy">privacy policy</Link> before submitting personal details.</p>
        </section>
        <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 border-t border-[#E7E1D6] bg-white p-2 shadow-[0_-8px_30px_rgba(20,40,63,0.12)] sm:hidden">
          <a href="tel:+917703956880" className="mx-1 rounded-full border border-[#C5A46D] px-3 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#14283F]">Call Now</a>
          <a href={`https://wa.me/91${company.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="mx-1 rounded-full bg-[#14283F] px-3 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-white">WhatsApp</a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
