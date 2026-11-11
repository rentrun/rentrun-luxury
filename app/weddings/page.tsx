import { createPageMetadata } from "@/lib/seo-metadata";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { WeddingCarEnquiry } from "@/components/wedding-car-enquiry";
import { WeddingCarRateList } from "@/components/wedding-car-rate-list";
import { weddingCarPackages } from "@/data/wedding-car-rates";

export const metadata = createPageMetadata(
  "Luxury Wedding Transportation & Celebration Journeys | RentRun Luxury",
  "Personally coordinated wedding cars, bride and groom arrivals, VIP guest transport, destination wedding mobility and yacht or cruise celebrations.",
  "/weddings",
);

export default function WeddingsPage() {
  return (
    <ServiceLandingPage
      eyebrow="Weddings & Celebrations"
      title="Luxury Wedding Transportation"
      description="Wedding transport and celebration journeys curated around your itinerary, guests and the moments you want to remember."
      image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85"
      services={["Luxury wedding cars", "Bride and groom vehicles", "VIP guest transportation", "Airport transfers", "Destination wedding mobility", "Chauffeur service", "Yacht celebrations", "Luxury cruise experiences"]}
      cta="Plan Your Luxury Wedding Transport"
      relatedLinks={[
        { href: "#wedding-rates", label: "Wedding car rental rates" },
        { href: "/wedding-luxury-transport", label: "Wedding luxury transport" },
        { href: "/luxury-cars/wedding", label: "Luxury wedding cars" },
      ]}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Weddings" }]}
      faqItems={[
        { question: "What wedding transport can be requested?", answer: "Requests can include couple and family arrivals, guest movement, hotel transfers, airport collection and related celebration travel, subject to itinerary and partner availability." },
        { question: "Can you coordinate transport for multiple locations?", answer: "Yes. Share the event schedule, pickup points, destinations and passenger groups so the concierge can propose a coordinated arrangement." },
        { question: "Which vehicle will be assigned?", answer: "The proposed vehicle category is confirmed after availability checks. Vehicle images are illustrative, and the final quotation should be reviewed before confirmation." },
        { question: "Can wedding dates and times be changed?", answer: "Changes may be subject to availability and the cancellation or amendment terms in the quotation and cancellation policy." },
      ]}
    >
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">Rental Packages</p>
          <h2 className="mt-4 text-3xl text-[#14283F] sm:text-4xl">Wedding Car Rental Packages</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {weddingCarPackages.map((rentalPackage) => (
              <div key={rentalPackage} className="border border-[#E7E1D6] bg-white px-5 py-5 text-lg text-[#14283F]">
                {rentalPackage}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#657384]">
            Package-specific prices have not been supplied. The rates below are shown as provided and are not assigned to either package.
          </p>
        </div>

        <section id="wedding-rates" className="mx-auto max-w-5xl scroll-mt-8 pb-12">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">Wedding Car Rental</p>
            <h2 className="mt-4 text-3xl text-[#14283F] sm:text-4xl">Wedding Car Rental Rate List</h2>
          </div>
          <WeddingCarRateList />
          <p className="mt-6 text-sm text-[#657384]">* Supplied rental price; package-specific pricing is not confirmed.</p>
          <p className="mt-3 border-l-2 border-[#C5A46D] pl-4 text-sm leading-6 text-[#14283F]">
            Rates are subject to terms and conditions. Final pricing and vehicle availability will be confirmed after booking confirmation.
          </p>
        </section>

        <div className="mx-auto max-w-5xl pb-12">
          <WeddingCarEnquiry />
        </div>
      </section>
    </ServiceLandingPage>
  );
}