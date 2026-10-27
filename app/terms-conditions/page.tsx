import { createPageMetadata } from "@/lib/seo-metadata";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata(
  "Terms & Conditions | RentRun Luxury",
  "Terms and conditions for RentRun Luxury services.",
  "/terms-conditions",
);

export default function TermsConditionsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-20 text-[#e7dfd2] sm:px-6 lg:px-8">
        <h1 className="text-4xl text-white">Terms & Conditions</h1>
        <p className="mt-6 leading-8">
          RentRun Luxury works as a concierge-led travel service and arranges premium vehicles, charter experiences and cruise options through verified professional partners. All services are subject to availability, vendor confirmation, legal compliance and destination-specific requirements.
        </p>
        <p className="mt-6 leading-8">
          Final pricing, availability and service details are confirmed only after consultation with the relevant partner and verification of the requested travel details. RentRun Luxury reserves the right to decline or amend arrangements if service or legal requirements change.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
