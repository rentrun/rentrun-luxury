import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company, destinationList, experienceCards, processSteps, services } from "@/data/site-data";

export const metadata: Metadata = {
  title: "RentRun Luxury | Premium Cars, Private Charter & Luxury Cruises",
  description:
    "Luxury car rental with chauffeur, private charter services, and curated cruise experiences arranged by RentRun Luxury for executive travel, weddings, VIP mobility and premium holidays.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#090909] text-[#f5efe6]">
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,9,0.9),rgba(9,9,9,0.72),rgba(9,9,9,0.82))]" />

          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <p className="text-xs uppercase tracking-[0.42em] text-[#d4af75]">{company.name}</p>
            <h1 className="mt-6 max-w-3xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Luxury, Beyond the Journey.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f0e7d9]">
              Premium cars, private charters and curated cruise experiences — arranged around you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#d4af75] px-7 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#0d0d0d] transition hover:brightness-110"
              >
                Plan Your Journey
              </Link>
              <a
                href="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20I%20would%20like%20to%20speak%20with%20a%20concierge."
                className="rounded-full border border-[#d4af75]/60 bg-transparent px-7 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#f5efe6] transition hover:bg-[#d4af75]/10"
              >
                Talk to a Luxury Concierge
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-[#e7dfd2]">
              <a href="https://wa.me/917703956880" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-[#d4af75]/60 hover:text-[#f0d7a5]">
                WhatsApp
              </a>
              <a href="tel:+917703956880" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-[#d4af75]/60 hover:text-[#f0d7a5]">
                Call
              </a>
              <Link href="/contact" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-[#d4af75]/60 hover:text-[#f0d7a5]">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-[#d4af75]">Three Signature Experiences</p>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl">Curated stays, journeys and experiences.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {experienceCards.map((card) => (
              <article key={card.title} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101010]">
                <div className="relative h-72 overflow-hidden">
                  <img src={card.image} alt={card.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d4af75]">{card.title}</p>
                  <h3 className="mt-4 text-2xl text-white">{card.title === "Luxury Cars" ? "Arrive in Luxury." : card.title === "Private Charter" ? "Your Journey. Your Schedule." : "Set Sail in Style."}</h3>
                  <p className="mt-4 text-[#d9d1c5]">{card.description}</p>
                  <Link href={card.href} className="mt-6 inline-flex text-sm uppercase tracking-[0.22em] text-[#f0d7a5] transition hover:text-white">
                    Explore {card.title}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#111111]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-xs uppercase tracking-[0.38em] text-[#d4af75]">Luxury Services</p>
              <h2 className="mt-5 text-3xl text-white sm:text-4xl">Personalised mobility for every premium occasion.</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((service) => (
                <div key={service} className="rounded-2xl border border-white/10 bg-[#121212] p-5 text-[#f5efe6] shadow-[0_15px_30px_rgba(0,0,0,0.28)]">
                  <div className="mb-4 h-10 w-10 rounded-full border border-[#d4af75]/40 bg-[#d4af75]/10" />
                  <p className="text-base text-white">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.38em] text-[#d4af75]">Corporate & VIP</p>
              <h2 className="mt-5 text-4xl text-white">Executive Mobility, Without the Complexity.</h2>
              <p className="mt-5 text-lg leading-8 text-[#d9d1c5]">
                RentRun Luxury can arrange airport transfers, executive cars, group transportation, corporate delegations, multi-day transport, event mobility, chauffeur services and VIP movements with a concierge-led approach.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/corporate-luxury-transport" className="rounded-full bg-[#d4af75] px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#090909]">
                  Request Corporate Proposal
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-[#d4af75]/30 bg-[#121212] p-8">
              <ul className="space-y-4 text-[#f0e7d9]">
                {[
                  "Airport transfers",
                  "Executive cars",
                  "Group transportation",
                  "Corporate delegations",
                  "Multi-day transport",
                  "Event mobility",
                  "Chauffeur services",
                  "Hotel transfers",
                  "VIP movements",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#d4af75]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#101010]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="overflow-hidden rounded-[2rem] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80"
                  alt="Wedding luxury transport"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.38em] text-[#d4af75]">Weddings & Celebrations</p>
                <h2 className="mt-5 text-4xl text-white">Make Every Arrival Unforgettable.</h2>
                <p className="mt-5 text-lg leading-8 text-[#d9d1c5]">
                  From luxury wedding cars to guest transfers, VIP arrivals and private events at sea, every detail is personalised around your celebration.
                </p>
                <ul className="mt-7 space-y-3 text-[#f0e7d9]">
                  {[
                    "Wedding luxury cars",
                    "Guest transfers",
                    "Airport transfers",
                    "Hotel transportation",
                    "VIP guest movement",
                    "Event transportation",
                    "Premium group transfers",
                    "Cruise/charter experiences",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#d4af75]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/wedding-luxury-transport" className="rounded-full bg-[#d4af75] px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#090909]">
                    Plan Wedding Transportation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-[#d4af75]">Destinations</p>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl">Luxury journeys across India and internationally.</h2>
            <p className="mt-4 text-[#d9d1c5]">Available destinations and services subject to availability.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinationList.map((destination) => (
              <div key={destination} className="rounded-2xl border border-white/10 bg-[#101010] p-5 text-[#f5efe6] text-center">
                {destination}
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#101010]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-xs uppercase tracking-[0.38em] text-[#d4af75]">How It Works</p>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step} className="rounded-[1.5rem] border border-white/10 bg-[#121212] p-6 text-center">
                  <div className="text-4xl font-light text-[#d4af75]">0{index + 1}</div>
                  <p className="mt-4 text-lg text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#d4af75]/30 bg-[linear-gradient(135deg,#181818,#0d0d0d)] p-8 text-center sm:p-12">
            <p className="text-xs uppercase tracking-[0.38em] text-[#d4af75]">Luxury Concierge</p>
            <h2 className="mt-5 text-3xl text-white sm:text-5xl">Tell Us What You Have in Mind.</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#d9d1c5]">
              From an executive airport transfer to a private charter or luxury cruise, tell us what you need and our team will arrange the right experience.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="rounded-full bg-[#d4af75] px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#090909]">
                Request a Quote
              </Link>
              <a href="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20I%20would%20like%20assistance%20with%20a%20luxury%20journey." className="rounded-full border border-[#d4af75]/60 bg-transparent px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#f5efe6]">
                WhatsApp Concierge
              </a>
              <a href="tel:+917703956880" className="rounded-full border border-[#d4af75]/60 bg-transparent px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#f5efe6]">
                Call Concierge
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <EnquiryForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
