import { createPageMetadata } from "@/lib/seo-metadata";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = createPageMetadata(
  "Privacy Policy | RentRun Luxury",
  "Privacy policy for RentRun Luxury.",
  "/privacy-policy",
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-12 text-[#14283F] sm:px-6 lg:px-8">
        <h1 className="text-4xl text-[#14283F]">Privacy Policy</h1>
        <p className="mt-6 leading-8">
          RentRun Luxury respects the privacy of our clients and visitors. We gather contact information only to respond to enquiries and curate the relevant travel experience. This information is used solely to provide support, arrange bookings, or respond to service requests on a need-to-know basis.
        </p>
        <p className="mt-6 leading-8">
          We do not sell your personal information and only share it with trusted operating partners when required to fulfill a confirmed request. Please contact us if you need to review, update or remove your information from our correspondence records.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
