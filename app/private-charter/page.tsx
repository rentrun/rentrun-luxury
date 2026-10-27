import { createPageMetadata } from "@/lib/seo-metadata";
import Link from "next/link";
import { CharterFleetExplorer } from "@/components/private-charter-tools";
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
      <main className="bg-[#090909] text-[#f5efe6]">
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
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-white">Explore charter services</h2>
          <div className="mt-4 flex flex-wrap gap-5 text-[#f0d7a5]">
            <Link href="/private-charter/jet">Private jet charter</Link>
            <Link href="/private-charter/helicopter">Helicopter charter</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
