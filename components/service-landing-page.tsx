import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/data/site-data";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection, type FaqItem } from "@/components/faq-section";

type ServiceLandingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  services: string[];
  cta: string;
  relatedLinks?: { href: string; label: string }[];
  breadcrumbs?: { name: string; href?: string }[];
  faqItems?: FaqItem[];
};

export function ServiceLandingPage({ eyebrow, title, description, image, services, cta, relatedLinks, breadcrumbs, faqItems }: ServiceLandingPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#14283F]">
        {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
        <PageHero
          eyebrow={eyebrow}
          title={title}
          subtitle={description}
          image={image}
          primaryLabel={cta}
          primaryHref="/contact#enquiry"
          secondaryLabel="WhatsApp Concierge"
          secondaryHref={`https://wa.me/91${company.whatsapp}?text=${encodeURIComponent(`Hello RentRun Luxury, I would like to enquire about ${eyebrow.toLowerCase()}.`)}`}
        />
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#657384]">Curated through verified service partners</p>
          <h2 className="mt-4 max-w-3xl text-3xl text-[#14283F]">A personal point of contact, from first request to final detail.</h2>
          <ul className="mt-10 grid gap-x-12 gap-y-4 border-t border-[#E7E1D6] pt-8 text-[#14283F] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => <li key={service} className="border-b border-[#E7E1D6] pb-4">{service}</li>)}
          </ul>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-[#14283F]">RentRun Luxury curates premium travel and mobility experiences through its network of verified service partners. Vehicle, aircraft, yacht and service availability may vary by city, operator and date.</p>
          {relatedLinks?.length ? (
            <nav aria-label="Related services" className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#657384]">
              {relatedLinks.map((link) => <Link key={link.href} href={link.href} className="underline">{link.label}</Link>)}
            </nav>
          ) : null}
        </section>
        {faqItems?.length ? <FaqSection items={faqItems} /> : null}
        <section id="enquiry" className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <EnquiryForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}