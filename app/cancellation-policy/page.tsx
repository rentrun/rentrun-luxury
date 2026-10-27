import { createPageMetadata } from "@/lib/seo-metadata";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata(
  "Cancellation Policy | RentRun Luxury",
  "Cancellation policy for RentRun Luxury bookings.",
  "/cancellation-policy",
);

export default function CancellationPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-20 text-[#e7dfd2] sm:px-6 lg:px-8">
        <h1 className="text-4xl text-white">Cancellation Policy</h1>
        <p className="mt-6 leading-8">
          Cancellation terms vary by service type, operator, destination, and confirmation timeline. In most cases, a booking may be subject to cancellation charges if the request is withdrawn after confirmation or close to the travel date.
        </p>
        <p className="mt-6 leading-8">
          Clients will be informed of all cancellation conditions before final confirmation. For further assistance, please contact the RentRun Luxury concierge team directly.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
