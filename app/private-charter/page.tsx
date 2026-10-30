import { Breadcrumbs } from "@/components/breadcrumbs";
import { createPageMetadata } from "@/lib/seo-metadata";
import Link from "next/link";
import { CharterFleetExplorer } from "@/components/private-charter-tools";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata(
  "Private Jet & Helicopter Charter | RentRun Luxury",
  "Explore private jets and helicopters for journeys arranged around your schedule and passenger requirements.",
  "/private-charter",
);

export default function PrivateCharterPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#14283F]">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Private Charter" }]} />
        <PageHero
          eyebrow="Private Charter"
          title="Private Jet and Helicopter Charter"
          subtitle="Private jet and helicopter charter arranged around your schedule, destination and passenger requirements."
          image="/images/aircraft/legacy-600/hero.webp"
          primaryLabel="Request Private Charter"
          primaryHref="#enquiry"
          secondaryLabel="Explore Aircraft"
          secondaryHref="#curated-aircraft"
        />
        <CharterFleetExplorer />
        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-[#14283F]">Explore charter services</h2>
          <div className="mt-4 flex flex-wrap gap-5 text-[#657384]">
            <Link href="/private-charter/jet">Private jet charter</Link>
            <Link href="/private-charter/helicopter">Helicopter charter</Link>
          </div>
        </section>
        <FaqSection
          title="Private charter questions"
          items={[
            { question: "How is a private charter request confirmed?", answer: "The itinerary, dates, passengers and route are reviewed before RentRun Luxury checks availability with an operating partner. Pricing and aircraft availability are confirmed before booking." },
            { question: "Does RentRun Luxury operate the aircraft?", answer: "No. RentRun Luxury arranges charter enquiries through partner operators. Aircraft, crew and route approvals remain with the relevant operating partner." },
            { question: "What details should I provide?", answer: "Share departure and arrival locations, preferred dates and timing, passenger count, luggage needs and any flexibility that may affect operator options." },
            { question: "Is the aircraft or landing permission guaranteed?", answer: "No. Aircraft availability, permits, route feasibility and landing permissions must be confirmed for each request before final confirmation." },
          ]}
        />
      </main>
      <SiteFooter />
    </>
  );
}
