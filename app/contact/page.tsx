import { createPageMetadata } from "@/lib/seo-metadata";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/data/site-data";

export const metadata = createPageMetadata(
  "Contact RentRun Luxury | Request a Private Quote",
  "Speak with the RentRun Luxury concierge for premium chauffeur service, charter arrangements and curated cruise experiences. Subject to availability.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Contact"
          title="Tell Us What You Have in Mind."
          subtitle="From an executive airport transfer to a private charter or luxury cruise, tell us what you need and our team will arrange the right experience."
          image="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Request a Quote"
          primaryHref="/contact#enquiry"
          secondaryLabel="WhatsApp Concierge"
          secondaryHref={`https://wa.me/91${company.whatsapp}?text=${encodeURIComponent("Hello RentRun Luxury, I would like to request a quote.")}`}
        />

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d4af75]">Contact details</p>
              <h2 className="mt-4 text-3xl text-white">Luxury concierge desk</h2>
              <ul className="mt-8 space-y-4 text-[#e7dfd2]">
                <li><a href="tel:+917703956880">Phone: {company.phonePrimary}</a></li>
                <li><a href="tel:+918178575212">{company.phoneSecondary}</a></li>
                <li><a href={`https://wa.me/91${company.whatsapp}`}>WhatsApp: {company.whatsapp}</a></li>
                <li><a href={`mailto:${company.emailPrimary}`}>Email: {company.emailPrimary}</a></li>
                <li><a href={`mailto:${company.emailSecondary}`}>{company.emailSecondary}</a></li>
              </ul>
            </div>

            <div id="enquiry">
              <EnquiryForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
