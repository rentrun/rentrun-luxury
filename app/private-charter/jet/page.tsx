import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Private Jet Charter | RentRun Luxury",
  description: "Private jet charter arrangements for executive and luxury travel, coordinated through trusted operators and concierge-led support.",
  alternates: { canonical: "/private-charter/jet" },
};

export default function PrivateJetPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Private Jet Charter"
          title="Time-sensitive travel at the highest standard."
          subtitle="Private jet arrangements designed for urgent executive schedules, destination arrivals and premium business movement."
          image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Request Charter Quote"
          primaryHref="/contact"
          secondaryLabel="WhatsApp"
          secondaryHref="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20I%20need%20a%20private%20jet%20charter%20quote."
        />
      </main>
      <SiteFooter />
    </>
  );
}
