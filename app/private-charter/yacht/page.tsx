import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Yacht Charter | RentRun Luxury",
  description: "Yacht charter arrangements for leisure travel, celebrations and premium coastal escapes coordinated by RentRun Luxury.",
  alternates: { canonical: "/private-charter/yacht" },
};

export default function YachtPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Yacht Charter"
          title="Private sea time, beautifully curated."
          subtitle="Yacht experiences arranged for leisure escapes, celebrations and exclusive coastal days with trusted operators."
          image="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Request Charter Quote"
          primaryHref="/contact"
          secondaryLabel="WhatsApp"
          secondaryHref="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20I%20need%20a%20yacht%20charter%20quote."
        />
      </main>
      <SiteFooter />
    </>
  );
}
