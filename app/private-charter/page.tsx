import type { Metadata } from "next";
import { CharterFleetExplorer } from "@/components/private-charter-tools";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Private Charter Service | RentRun Luxury",
  description: "Explore private jets and helicopters for journeys arranged around your schedule and passenger requirements.",
  alternates: { canonical: "/private-charter" },
};

export default function PrivateCharterPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Private Charter"
          title="Your Journey. Your Aircraft. Your Time."
          subtitle="Private jet and helicopter charter arranged around your schedule, destination and passenger requirements."
          image="/images/aircraft/legacy-600/hero.webp"
          primaryLabel="Request Private Charter"
          primaryHref="#enquiry"
          secondaryLabel="Explore Aircraft"
          secondaryHref="#curated-aircraft"
        />
        <CharterFleetExplorer />
      </main>
      <SiteFooter />
    </>
  );
}
