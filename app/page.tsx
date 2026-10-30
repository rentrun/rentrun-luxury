import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo-metadata";
import { EnquiryForm } from "@/components/enquiry-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company, destinationList, experienceCards, services } from "@/data/site-data";

export const metadata = createPageMetadata(
  "RentRun Luxury | Luxury Cars, Private Charter & Luxury Cruises",
  "Premium chauffeur-driven mobility, private charter and exceptional luxury cruise experiences curated around the way you travel.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#171717]">
        <section className="relative min-h-[72vh] overflow-hidden border-b border-[#EEEEEE]">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.78)_48%,rgba(255,255,255,0.18)_100%)]" />
          <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-end px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="text-xs uppercase tracking-[0.42em] text-[#EC167A]">{company.name}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-light leading-tight text-[#171717] sm:text-6xl lg:text-7xl">
              Luxury, Beyond the Journey.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#171717]">
              Premium chauffeur-driven mobility, private charter and exceptional luxury cruise experiences, curated around the way you travel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#experiences" className="bg-[#EC167A] px-6 py-3 text-xs uppercase tracking-[0.2em] text-white">Explore Luxury</Link>
              <a href={`https://wa.me/91${company.whatsapp}?text=${encodeURIComponent("Hello RentRun Luxury, I would like to speak with a concierge.")}`} className="border border-[#EC167A]/70 px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#171717]">WhatsApp Concierge</a>
              <Link href="/contact#enquiry" className="border border-[#EEEEEE] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#171717]">Request a Private Quote</Link>
            </div>
          </div>
        </section>

        <section id="experiences" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-[#EC167A]">Three Signature Experiences</p>
            <h2 className="mt-5 text-3xl text-[#171717] sm:text-4xl">Three ways to travel exceptionally.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {experienceCards.map((card) => (
              <article key={card.title} className="group overflow-hidden border border-[#EEEEEE] bg-[#FFFFFF]">
                <div className="relative h-72">
                  <Image src={card.image} alt={card.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#EC167A]">{card.title}</p>
                  <h3 className="mt-4 text-2xl text-[#171717]">{card.title === "Luxury Cars" ? "Arrive in Luxury." : card.title === "Private Charter" ? "Your Journey. Your Schedule." : "Set Sail in Style."}</h3>
                  <p className="mt-4 leading-7 text-[#4D4D4D]">{card.description}</p>
                  <Link href={card.href} className="mt-6 inline-flex text-sm uppercase tracking-[0.15em] text-[#EC167A]">
                    {card.title === "Luxury Cars" ? "Explore Luxury Cars" : card.title === "Private Charter" ? "Explore Private Charter" : "Explore Luxury Cruises"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#EEEEEE] bg-[#FFF1F7]">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.38em] text-[#EC167A]">Our Services</p>
              <h2 className="mt-5 text-3xl text-[#171717] sm:text-4xl">Personalised mobility for every premium occasion.</h2>
            </div>
            <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => <li key={service} className="border-t border-[#EEEEEE] py-5 text-[#171717]">{service}</li>)}
            </ul>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-[#EC167A]">Corporate & VIP</p>
            <h2 className="mt-5 text-4xl text-[#171717]">Executive travel, considered from every angle.</h2>
            <p className="mt-5 text-lg leading-8 text-[#4D4D4D]">CEO transportation, executive airport transfers, business delegations, corporate events, VIP movement, chauffeur services, multi-city executive travel and private aviation coordination.</p>
            <Link href="/corporate" className="mt-8 inline-flex bg-[#EC167A] px-6 py-3 text-xs uppercase tracking-[0.2em] text-white">Request Corporate Concierge</Link>
          </div>
          <ul className="grid content-center gap-4 border-y border-[#EEEEEE] py-8 text-[#171717] sm:grid-cols-2">
            {["CEO transportation", "Executive airport transfers", "Business delegations", "Corporate events", "VIP movement", "Multi-city travel"].map((item) => <li key={item} className="border-b border-[#EEEEEE] pb-3">{item}</li>)}
          </ul>
        </section>

        <section className="border-y border-[#EEEEEE] bg-[#FFFFFF]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85" alt="Wedding celebration" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.38em] text-[#EC167A]">Weddings & Celebrations</p>
              <h2 className="mt-5 text-4xl text-[#171717]">Every arrival, part of the occasion.</h2>
              <p className="mt-5 text-lg leading-8 text-[#4D4D4D]">Luxury wedding cars, VIP guest transportation, destination wedding mobility and celebration experiences at sea, coordinated around your plans.</p>
              <ul className="mt-7 grid gap-3 text-[#171717] sm:grid-cols-2">
                {["Bride & groom vehicles", "VIP guest transportation", "Airport transfers", "Yacht and cruise options"].map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link href="/weddings" className="mt-8 inline-flex bg-[#EC167A] px-6 py-3 text-xs uppercase tracking-[0.2em] text-white">Plan Your Luxury Wedding Transport</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-[#EC167A]">Selected Markets</p>
            <h2 className="mt-5 text-3xl text-[#171717] sm:text-4xl">A considered presence across key destinations.</h2>
            <p className="mt-4 text-[#4D4D4D]">Specific vehicles and services vary by city and date.</p>
          </div>
          <ul className="grid grid-cols-2 gap-x-8 sm:grid-cols-3 lg:grid-cols-4">
            {destinationList.map((city) => <li key={city} className="border-t border-[#EEEEEE] py-4 text-center text-[#171717]">{city}</li>)}
          </ul>
        </section>

        <section className="border-y border-[#EEEEEE] bg-[#FFFFFF]">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-[0.38em] text-[#EC167A]">Luxury Concierge</p>
            <h2 className="mt-5 text-3xl text-[#171717] sm:text-5xl">Your Journey, Personally Curated.</h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-[#4D4D4D]">Vehicle sourcing, chauffeur arrangements, airport meet & assist, private charter coordination, cruise planning, yacht experiences, corporate travel, wedding travel and multi-city luxury mobility.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/concierge" className="bg-[#EC167A] px-6 py-3 text-xs uppercase tracking-[0.2em] text-white">Speak to a Luxury Concierge</Link>
              <a href={`https://wa.me/91${company.whatsapp}?text=${encodeURIComponent("Hello RentRun Luxury, I would like to speak with a luxury concierge.")}`} className="border border-[#EC167A]/60 px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#171717]">WhatsApp Concierge</a>
            </div>
          </div>
        </section>

        <section id="enquiry" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <EnquiryForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
