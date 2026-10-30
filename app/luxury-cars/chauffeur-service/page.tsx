import { createPageMetadata } from "@/lib/seo-metadata";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata(
  "Luxury Chauffeur Service | RentRun Luxury",
  "Chauffeur-driven mobility for private, business and airport travel, subject to city, date and vehicle confirmation.",
  "/luxury-cars/chauffeur-service",
);

export default function ChauffeurServicePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#171717] text-[#171717]">
        <PageHero
          eyebrow="Luxury Chauffeur Service"
          title="Luxury Chauffeur Service for Private and Executive Travel"
          subtitle="Executive-grade chauffeur service designed for private travel, airport arrivals and tailored mobility across destinations."
          image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Request Quote"
          primaryHref="/contact"
          secondaryLabel="Call Concierge"
          secondaryHref="tel:+917703956880"
        />
        <section className="mx-auto max-w-4xl px-4 py-16 text-[#171717] sm:px-6 lg:px-8">
          <h2 className="text-2xl text-white">Chauffeur-driven travel, arranged around your request</h2>
          <p className="mt-4 leading-7">
            RentRun Luxury coordinates chauffeur-driven cars through its service-partner network. Vehicle and service availability depend on the requested city and date; confirm the vehicle, itinerary and arrangements with the concierge before booking.
          </p>
          <p className="mt-4 leading-7">
            Explore the <Link className="text-[#EC167A] underline" href="/luxury-cars">available luxury car categories</Link> or <Link className="text-[#EC167A] underline" href="/contact#enquiry">send an enquiry</Link> with your route and travel details.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
