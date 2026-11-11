import { createPageMetadata } from "@/lib/seo-metadata";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WeddingCarEnquiry } from "@/components/wedding-car-enquiry";
import { WeddingCarRateList } from "@/components/wedding-car-rate-list";
import { company } from "@/data/site-data";
import { weddingCarPackages } from "@/data/wedding-car-rates";

export const metadata = createPageMetadata(
  "Wedding Car Rental Rates | RentRun Luxury",
  "Explore wedding car rental rates and request a quotation for premium and family vehicles. Arranged through partner operators, subject to availability and confirmation.",
  "/luxury-cars/wedding",
  "/images/vehicles/rolls-royce-ghost.jpg",
  "/weddings",
);

export default function WeddingLuxuryCarsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#14283F]">
        <PageHero
          eyebrow="Wedding Car Rental"
          title="Wedding Cars for a Memorable Arrival"
          subtitle="Explore premium and family vehicle rates for your celebration. RentRun arranges vehicles through partner operators; every vehicle is subject to availability and confirmation."
          image="/images/vehicles/rolls-royce-ghost.jpg"
          primaryLabel="View Rate List"
          primaryHref="#rates"
          secondaryLabel="WhatsApp Enquiry"
          secondaryHref="#enquiry"
        />

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">Rental Packages</p>
            <h2 className="mt-4 text-3xl text-[#14283F] sm:text-4xl">Choose your package</h2>
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
        </section>

        <section id="rates" className="mx-auto max-w-5xl scroll-mt-8 px-4 pb-12 sm:px-6 lg:px-8">
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

        <section id="enquiry" className="mx-auto max-w-5xl scroll-mt-8 px-4 pb-12 sm:px-6 lg:px-8">
          <WeddingCarEnquiry />
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="border-t border-[#E7E1D6] pt-8">
            <h2 className="text-xl text-[#14283F]">Contact RentRun Luxury</h2>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-[#657384] sm:flex-row sm:flex-wrap sm:gap-x-6">
              <li><a className="underline" href={`https://wa.me/91${company.whatsapp}`}>WhatsApp / Phone: +91 {company.whatsapp}</a></li>
              <li><a className="underline" href={`tel:+91${company.phoneSecondary}`}>Phone: +91 {company.phoneSecondary}</a></li>
              <li><a className="underline" href={company.luxuryUrl}>Website: {company.luxuryUrl}</a></li>
              <li><a className="underline" href={`mailto:${company.emailPrimary}`}>Email: {company.emailPrimary}</a></li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
