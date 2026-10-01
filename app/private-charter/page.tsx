import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { charterOptions } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Private Charter Service | RentRun Luxury",
  description:
    "Private jet charter, helicopter charter, yacht charter and executive group transfers arranged through trusted operators by RentRun Luxury.",
  alternates: { canonical: "/private-charter" },
};

export default function PrivateCharterPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <PageHero
          eyebrow="Private Charter"
          title="Your Journey. Your Schedule."
          subtitle="Private, executive and destination experiences arranged through trusted operators for travel that values time, comfort and discretion."
          image="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1600&q=80"
          primaryLabel="Explore Private Charter"
          primaryHref="#charter"
          secondaryLabel="Request Charter Quote"
          secondaryHref="/contact"
        />

        <section id="charter" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-[#d4af75]">Charter Arrangements</p>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl">Charter arrangements through trusted operators.</h2>
          </div>

          <div className="space-y-8">
            {charterOptions.map((option) => (
              <article key={option.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] lg:grid lg:grid-cols-[1.1fr_0.9fr]">
                <img src={option.image} alt={option.title} className="h-full w-full object-cover" />
                <div className="p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d4af75]">{option.title}</p>
                  <h3 className="mt-5 text-3xl text-white">{option.title}</h3>
                  <p className="mt-5 text-base text-[#d9d1c5]">{option.useCase}</p>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-[#121212] p-4 text-sm text-[#e7dfd2]">
                    Ideal for: {option.option}
                  </div>
                  <div className="mt-6 flex gap-4">
                    <Link href="/contact" className="rounded-full bg-[#d4af75] px-5 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#090909]">
                      Request Charter Quote
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <EnquiryForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
