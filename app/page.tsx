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
      <main className="bg-white text-[#14283F]">
        <section className="relative min-h-[560px] overflow-hidden border-b border-[#E7E1D6] sm:min-h-[580px]">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=88"
            alt="Luxury chauffeur-driven car"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.82)_42%,rgba(255,255,255,0.18)_72%,rgba(255,255,255,0.04)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(0deg,rgba(255,255,255,0.26)_0%,transparent_32%)]" />
          <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-4 py-12 sm:min-h-[580px] sm:px-6 lg:px-8 lg:py-12">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.42em] text-[#14283F]">
              <span className="h-px w-8 bg-[#14283F]" />{company.name}
            </p>
            <h1 className="mt-6 max-w-[720px] text-5xl font-light leading-[0.98] text-[#14283F] sm:text-6xl lg:text-[82px]">
              Luxury, <span className="text-[#14283F]">Beyond the Journey.</span>
            </h1>
            <p className="mt-7 max-w-[610px] text-base leading-8 text-[#14283F] sm:text-lg">
              Premium chauffeur-driven mobility, private charter and exceptional luxury cruise experiences, curated around the way you travel.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#experiences" className="rounded-sm bg-[#14283F] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#263D55]">Explore Luxury</Link>
              <a href={`https://wa.me/91${company.whatsapp}?text=${encodeURIComponent("Hello RentRun Luxury, I would like to speak with a concierge.")}`} className="rounded-sm border border-[#14283F] bg-white/70 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#14283F] backdrop-blur-sm hover:bg-[#FAF8F3]">WhatsApp Concierge</a>
              <Link href="/contact#enquiry" className="rounded-sm border border-[#E7E1D6] bg-white/70 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#14283F] backdrop-blur-sm hover:border-[#C5A46D]">Request a Private Quote</Link>
            </div>
          </div>
        </section>

        <section id="experiences" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">Three Signature Experiences</p>
            <h2 className="mt-5 text-3xl text-[#14283F] sm:text-4xl">Three ways to travel exceptionally.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experienceCards.map((card) => (
              <article key={card.title} className="group flex h-full overflow-hidden rounded-sm border border-[#E7E1D6] bg-white shadow-[0_10px_30px_rgba(20,40,63,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(20,40,63,0.14)]">
                <div className="flex w-full flex-col">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F3]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#657384]">{card.title}</p>
                    <h3 className="mt-3 text-2xl leading-tight text-[#14283F]">{card.title === "Luxury Cars" ? "Arrive in Luxury." : card.title === "Private Charter" ? "Your Journey. Your Schedule." : "Set Sail in Style."}</h3>
                    <p className="mt-4 text-base leading-7 text-[#657384]">{card.description}</p>
                    <Link href={card.href} className="mt-auto inline-flex min-h-11 w-fit items-center justify-center rounded-sm bg-[#14283F] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-200 hover:bg-[#263D55]">
                      {card.title === "Luxury Cars" ? "Explore Luxury Cars" : card.title === "Private Charter" ? "Explore Private Charter" : "Explore Luxury Cruises"}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#E7E1D6] bg-[#FAF8F3]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">Our Services</p>
              <h2 className="mt-5 text-3xl text-[#14283F] sm:text-4xl">Personalised mobility for every premium occasion.</h2>
            </div>
            <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => <li key={service} className="border-t border-[#E7E1D6] py-5 text-[#14283F]">{service}</li>)}
            </ul>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">Corporate & VIP</p>
            <h2 className="mt-5 text-4xl text-[#14283F]">Executive travel, considered from every angle.</h2>
            <p className="mt-5 text-lg leading-8 text-[#14283F]">CEO transportation, executive airport transfers, business delegations, corporate events, VIP movement, chauffeur services, multi-city executive travel and private aviation coordination.</p>
            <Link href="/corporate" className="mt-8 inline-flex bg-[#14283F] px-6 py-3 text-xs uppercase tracking-[0.2em] text-white">Request Corporate Concierge</Link>
          </div>
          <ul className="grid content-center gap-4 border-y border-[#E7E1D6] py-8 text-[#14283F] sm:grid-cols-2">
            {["CEO transportation", "Executive airport transfers", "Business delegations", "Corporate events", "VIP movement", "Multi-city travel"].map((item) => <li key={item} className="border-b border-[#E7E1D6] pb-3">{item}</li>)}
          </ul>
        </section>

        <section className="border-y border-[#E7E1D6] bg-[#FFFFFF]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85" alt="Wedding celebration" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">Weddings & Celebrations</p>
              <h2 className="mt-5 text-4xl text-[#14283F]">Every arrival, part of the occasion.</h2>
              <p className="mt-5 text-lg leading-8 text-[#14283F]">Luxury wedding cars, VIP guest transportation, destination wedding mobility and celebration experiences at sea, coordinated around your plans.</p>
              <ul className="mt-7 grid gap-3 text-[#14283F] sm:grid-cols-2">
                {["Bride & groom vehicles", "VIP guest transportation", "Airport transfers", "Yacht and cruise options"].map((item) => <li key={item}>{item}</li>)}
              </ul>
              <Link href="/weddings" className="mt-8 inline-flex bg-[#14283F] px-6 py-3 text-xs uppercase tracking-[0.2em] text-white">Plan Your Luxury Wedding Transport</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">Selected Markets</p>
            <h2 className="mt-5 text-3xl text-[#14283F] sm:text-4xl">A considered presence across key destinations.</h2>
            <p className="mt-4 text-[#14283F]">Specific vehicles and services vary by city and date.</p>
          </div>
          <ul className="grid grid-cols-2 gap-x-8 sm:grid-cols-3 lg:grid-cols-4">
            {destinationList.map((city) => <li key={city} className="border-t border-[#E7E1D6] py-4 text-center text-[#14283F]">{city}</li>)}
          </ul>
        </section>

        <section className="border-y border-[#E7E1D6] bg-[#FFFFFF]">
          <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-[0.38em] text-[#657384]">Luxury Concierge</p>
            <h2 className="mt-5 text-3xl text-[#14283F] sm:text-5xl">Your Journey, Personally Curated.</h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-[#14283F]">Vehicle sourcing, chauffeur arrangements, airport meet & assist, private charter coordination, cruise planning, yacht experiences, corporate travel, wedding travel and multi-city luxury mobility.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/concierge" className="bg-[#14283F] px-6 py-3 text-xs uppercase tracking-[0.2em] text-white">Speak to a Luxury Concierge</Link>
              <a href={`https://wa.me/91${company.whatsapp}?text=${encodeURIComponent("Hello RentRun Luxury, I would like to speak with a luxury concierge.")}`} className="border border-[#C5A46D]/60 px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#14283F]">WhatsApp Concierge</a>
            </div>
          </div>
        </section>

        <section id="enquiry" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <EnquiryForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
