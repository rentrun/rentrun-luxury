import { createPageMetadata } from "@/lib/seo-metadata";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata(
  "Private Jet Charter | RentRun Luxury",
  "Private jet charter arrangements for executive and luxury travel, coordinated through trusted operators and concierge-led support.",
  "/private-charter/jet",
);

export default function PrivateJetPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#171717] text-[#171717]">
        <PageHero
          eyebrow="Private Jet Charter"
          title="Private Jet Charter Arranged Through Operators"
          subtitle="Private jet arrangements designed for urgent executive schedules, destination arrivals and premium business movement."
          image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Request Charter Quote"
          primaryHref="/private-charter#enquiry"
          secondaryLabel="WhatsApp"
          secondaryHref="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20I%20need%20a%20private%20jet%20charter%20quote."
        />
        <section className="mx-auto max-w-4xl px-4 py-16 text-[#171717] sm:px-6 lg:px-8">
          <h2 className="text-2xl text-white">Request a private jet charter</h2>
          <p className="mt-4 leading-7">
            Share your departure and arrival airports, preferred dates, passenger count and itinerary. Aircraft, routing, availability and quotation are confirmed with the operating partner for each request.
          </p>
          <p className="mt-4 leading-7">
            Explore <Link className="text-[#EC167A] underline" href="/private-charter">private charter options</Link> or <Link className="text-[#EC167A] underline" href="/contact#enquiry">contact the concierge</Link>.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
