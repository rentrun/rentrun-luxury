import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Helicopter Charter | RentRun Luxury",
  description: "Helicopter charter arrangements for premium transfers, scenic travel and time-sensitive executive mobility.",
  alternates: { canonical: "/private-charter/helicopter" },
};

export default function HelicopterPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Helicopter Charter"
          title="Effortless access, premium speed."
          subtitle="Discreet helicopter charter support for time-sensitive mobility and scenic, high-value travel plans."
          image="https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Request Charter Quote"
          primaryHref="/contact"
          secondaryLabel="Call Concierge"
          secondaryHref="tel:+917703956880"
        />
      </main>
      <SiteFooter />
    </>
  );
}
