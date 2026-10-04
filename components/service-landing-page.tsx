import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/data/site-data";

type ServiceLandingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  services: string[];
  cta: string;
};

export function ServiceLandingPage({ eyebrow, title, description, image, services, cta }: ServiceLandingPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
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
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4af75]">Curated through verified service partners</p>
          <h2 className="mt-4 max-w-3xl text-3xl text-white">A personal point of contact, from first request to final detail.</h2>
          <ul className="mt-10 grid gap-x-12 gap-y-4 border-t border-white/10 pt-8 text-[#e7dfd2] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => <li key={service} className="border-b border-white/10 pb-4">{service}</li>)}
          </ul>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-[#b7aa96]">RentRun Luxury curates premium travel and mobility experiences through its network of verified service partners. Vehicle, aircraft, yacht and service availability may vary by city, operator and date.</p>
        </section>
        <section id="enquiry" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <EnquiryForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}