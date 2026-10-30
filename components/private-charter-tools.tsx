"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { charterAircraft, charterCategories, type CharterAircraft, type CharterCategory } from "@/data/private-charter";
import { company } from "@/data/site-data";

type SearchRequest = {
  tripType: string;
  departure: string;
  arrival: string;
  departureDate: string;
  departureTime: string;
  passengers: string;
  aircraftType: string;
  returnDate: string;
  stops: string;
};

const fieldClass = "w-full border border-white/15 bg-[#0d0d0d] px-4 py-3 text-sm text-white outline-none transition focus:border-[#EC167A]";
const labelClass = "flex flex-col gap-2 text-xs uppercase tracking-[0.12em] text-[#c9c0b4]";
const whatsappHref = `https://wa.me/91${company.whatsapp}`;

export function AircraftImagePlaceholder({ aircraft, className = "" }: { aircraft: CharterAircraft; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`${aircraft.name} image coming soon; ${aircraft.category} placeholder`}
      className={`relative flex min-h-48 w-full min-w-0 items-center justify-center overflow-hidden bg-[#141414] px-6 py-10 text-center ${className}`}
    >
      <div aria-hidden="true" className="absolute inset-3 border border-white/10" />
      <div className="relative w-full min-w-0 max-w-md">
        <p className="text-[10px] uppercase tracking-[0.24em] text-[#EC167A]">{aircraft.category}</p>
        <p className="mt-3 text-lg font-light text-white">{aircraft.name}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[#EC167A]">Aircraft image coming soon</p>
        <p className="mt-2 text-xs leading-5 text-[#9f9588]">Model-specific photography is not yet licensed.</p>
      </div>
    </div>
  );
}

function CharterSearchForm({ onFind }: { onFind: (request: SearchRequest) => void }) {
  const [form, setForm] = useState<SearchRequest>({
    tripType: "One Way",
    departure: "",
    arrival: "",
    departureDate: "",
    departureTime: "",
    passengers: "1",
    aircraftType: "All aircraft",
    returnDate: "",
    stops: "",
  });

  const update = (key: keyof SearchRequest, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFind(form);
  };

  return (
    <form onSubmit={submit} className="border border-white/10 bg-[#FFFFFF] p-5 sm:p-7">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#EC167A]">Private charter search</p>
          <h2 className="mt-2 text-2xl font-light text-white">Start with your itinerary</h2>
        </div>
        <label className={labelClass}>
          Trip type
          <select value={form.tripType} onChange={(event) => update("tripType", event.target.value)} className={fieldClass}>
            <option>One Way</option>
            <option>Round Trip</option>
            <option>Multi City</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <label className={labelClass}>Departure<input required value={form.departure} onChange={(event) => update("departure", event.target.value)} placeholder="City or airport" className={fieldClass} /></label>
        <label className={labelClass}>Arrival<input required value={form.arrival} onChange={(event) => update("arrival", event.target.value)} placeholder="City or airport" className={fieldClass} /></label>
        <label className={labelClass}>Departure date<input required type="date" value={form.departureDate} onChange={(event) => update("departureDate", event.target.value)} className={fieldClass} /></label>
        <label className={labelClass}>Departure time<input type="time" value={form.departureTime} onChange={(event) => update("departureTime", event.target.value)} className={fieldClass} /></label>
        {form.tripType === "Round Trip" ? <label className={labelClass}>Return date<input required type="date" value={form.returnDate} onChange={(event) => update("returnDate", event.target.value)} className={fieldClass} /></label> : null}
        {form.tripType === "Multi City" ? <label className={labelClass}>Additional stops<input value={form.stops} onChange={(event) => update("stops", event.target.value)} placeholder="Add cities or airports" className={fieldClass} /></label> : null}
        <label className={labelClass}>Passengers<input required min="1" type="number" value={form.passengers} onChange={(event) => update("passengers", event.target.value)} className={fieldClass} /></label>
        <label className={labelClass}>Aircraft type<select value={form.aircraftType} onChange={(event) => update("aircraftType", event.target.value)} className={fieldClass}><option>All aircraft</option>{charterCategories.map((category) => <option key={category}>{category}</option>)}</select></label>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" className="bg-[#EC167A] px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#171717] transition hover:brightness-110">Find My Aircraft</button>
        <a href="#enquiry" className="border border-white/25 px-6 py-3 text-xs uppercase tracking-[0.18em] text-white transition hover:border-[#EC167A]">Request Private Quote</a>
      </div>
    </form>
  );
}

function CharterEnquiryForm({ aircraftPreference = "" }: { aircraftPreference?: string }) {
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    whatsapp: "",
    email: "",
    departure: "",
    arrival: "",
    travelDate: "",
    returnDate: "",
    passengers: "",
    aircraftPreference,
    tripType: "One Way",
    specialRequirements: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const details = Object.entries(form).map(([key, value]) => `${key}: ${value || "Not provided"}`).join("\n");
  const mailto = `mailto:${company.emailPrimary}?subject=${encodeURIComponent("RentRun Luxury private charter request")}&body=${encodeURIComponent(details)}`;
  const whatsapp = `${whatsappHref}?text=${encodeURIComponent(`Hello RentRun Luxury, I would like a private charter quote.\n${details}`)}`;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <>
      <div className="mb-6">
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#EC167A]">Private charter enquiry</p>
        <h2 className="mt-2 text-2xl font-light text-white">Tell us what your journey needs</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-[#4D4D4D]">Aircraft availability, routing and quotation are confirmed after enquiry.</p>
      </div>
      <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>Full name<input required autoComplete="name" value={form.fullName} onChange={(event) => update("fullName", event.target.value)} className={fieldClass} /></label>
        <label className={labelClass}>Mobile<input required type="tel" autoComplete="tel" value={form.mobile} onChange={(event) => update("mobile", event.target.value)} className={fieldClass} /></label>
        <label className={labelClass}>WhatsApp<input type="tel" value={form.whatsapp} onChange={(event) => update("whatsapp", event.target.value)} className={fieldClass} /></label>
        <label className={labelClass}>Email<input required type="email" autoComplete="email" value={form.email} onChange={(event) => update("email", event.target.value)} className={fieldClass} /></label>
        <label className={labelClass}>Departure city / airport<input required value={form.departure} onChange={(event) => update("departure", event.target.value)} className={fieldClass} /></label>
        <label className={labelClass}>Arrival city / airport<input required value={form.arrival} onChange={(event) => update("arrival", event.target.value)} className={fieldClass} /></label>
        <label className={labelClass}>Travel date<input required type="date" value={form.travelDate} onChange={(event) => update("travelDate", event.target.value)} className={fieldClass} /></label>
        <label className={labelClass}>Return date<input type="date" value={form.returnDate} onChange={(event) => update("returnDate", event.target.value)} className={fieldClass} /></label>
        <label className={labelClass}>Passengers<input required min="1" type="number" value={form.passengers} onChange={(event) => update("passengers", event.target.value)} className={fieldClass} /></label>
        <label className={labelClass}>Aircraft preference<input value={form.aircraftPreference} onChange={(event) => update("aircraftPreference", event.target.value)} className={fieldClass} /></label>
        <label className={labelClass}>Trip type<select value={form.tripType} onChange={(event) => update("tripType", event.target.value)} className={fieldClass}><option>One Way</option><option>Round Trip</option><option>Multi City</option></select></label>
        <label className={`${labelClass} sm:col-span-2`}>Special requirements<textarea rows={3} value={form.specialRequirements} onChange={(event) => update("specialRequirements", event.target.value)} className={fieldClass} /></label>
        <div className="flex flex-wrap gap-3 sm:col-span-2">
          <button type="submit" className="bg-[#EC167A] px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#171717]">Request Private Charter</button>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="border border-white/25 px-6 py-3 text-xs uppercase tracking-[0.18em] text-white transition hover:border-[#EC167A]">WhatsApp Concierge</a>
        </div>
      </form>
      {submitted ? <p role="status" className="mt-4 text-sm text-[#4D4D4D]">Your email app should open with the request details. The enquiry is sent only after you confirm in that app.</p> : null}
      <p className="mt-5 text-xs text-[#9f9588]">Call <a href="tel:+917703956880" className="text-[#EC167A]">+91 7703956880</a> or <a href="tel:+918178575212" className="text-[#EC167A]">+91 8178575212</a> · <a href={`mailto:${company.emailPrimary}`} className="text-[#EC167A]">{company.emailPrimary}</a></p>
    </>
  );
}

export function CharterEnquiryButton({ aircraftPreference = "", label = "Request Charter" }: { aircraftPreference?: string; label?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="border border-[#EC167A]/70 px-4 py-3 text-xs uppercase tracking-[0.12em] text-[#EC167A] transition hover:bg-[#EC167A]/10">{label}</button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/85 p-4 sm:items-center" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="charter-dialog-title" className="my-6 w-full max-w-3xl border border-[#EC167A]/40 bg-[#111] p-5 sm:p-8">
            <div className="mb-5 flex items-start justify-between gap-4"><h2 id="charter-dialog-title" className="text-2xl font-light text-white">Private charter request</h2><button type="button" onClick={() => setOpen(false)} className="border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.12em] text-white">Close</button></div>
            <CharterEnquiryForm aircraftPreference={aircraftPreference} />
          </section>
        </div>
      ) : null}
    </>
  );
}

export function CharterEnquirySection() {
  return <section id="enquiry" className="scroll-mt-24 border border-[#EC167A]/30 bg-[#111] p-5 sm:p-8"><CharterEnquiryForm /></section>;
}

export function CharterFleetExplorer() {
  const [category, setCategory] = useState<CharterCategory | "All aircraft">("All aircraft");
  const [passengerCount, setPassengerCount] = useState(0);
  const [summary, setSummary] = useState("");
  const availableAircraft = charterAircraft.filter((aircraft) =>
    (category === "All aircraft" || aircraft.category === category) && aircraft.passengerMaximum >= passengerCount,
  );

  const findAircraft = (request: SearchRequest) => {
    setCategory(request.aircraftType as CharterCategory | "All aircraft");
    setPassengerCount(Number(request.passengers) || 0);
    setSummary(`${request.tripType}: ${request.departure} to ${request.arrival} on ${request.departureDate}${request.returnDate ? `, returning ${request.returnDate}` : ""}. Aircraft and availability are confirmed after enquiry.`);
    document.getElementById("curated-aircraft")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="charter-search" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8"><CharterSearchForm onFind={findAircraft} /></section>
      <section id="curated-aircraft" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="text-[11px] uppercase tracking-[0.25em] text-[#EC167A]">Private Charter</p><h2 className="mt-2 text-3xl font-light text-white">Curated Aircraft Options</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-[#4D4D4D]">A considered collection of aircraft for journeys near and far.</p></div>
          <label className={labelClass}>Aircraft category<select value={category} onChange={(event) => { setCategory(event.target.value as CharterCategory | "All aircraft"); setPassengerCount(0); }} className={`${fieldClass} min-w-56`}><option>All aircraft</option>{charterCategories.map((item) => <option key={item}>{item}</option>)}</select></label>
        </div>
        {summary ? <p role="status" className="mb-6 border-l border-[#EC167A] px-4 py-2 text-sm text-[#4D4D4D]">{summary}</p> : null}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {availableAircraft.map((aircraft) => (
            <article key={aircraft.slug} className="overflow-hidden border border-white/10 bg-[#FFFFFF]">
              <Link href={`/private-charter/${aircraft.slug}`} className="group relative block aspect-[16/10] overflow-hidden">
                {aircraft.thumbnail ? <Image src={aircraft.thumbnail} alt={`${aircraft.name} aircraft`} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" /> : <AircraftImagePlaceholder aircraft={aircraft} className="h-full min-h-0 transition-colors group-hover:bg-[#191918]" />}
              </Link>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#EC167A]">{aircraft.category}</p><h3 className="mt-2 text-xl font-light text-white">{aircraft.name}</h3>
                <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-xs"><div><dt className="text-[#9f9588]">Passengers</dt><dd className="mt-1 text-[#171717]">{aircraft.passengers}</dd></div><div><dt className="text-[#9f9588]">Cruise speed</dt><dd className="mt-1 text-[#171717]">{aircraft.speed}</dd></div><div className="col-span-2"><dt className="text-[#9f9588]">Range</dt><dd className="mt-1 text-[#171717]">{aircraft.range}</dd></div></dl>
                <p className="mt-4 text-xs text-[#4D4D4D]">Price on Request</p>
                <div className="mt-5 flex flex-wrap gap-2"><Link href={`/private-charter/${aircraft.slug}`} className="border border-[#EC167A]/70 px-4 py-3 text-xs uppercase tracking-[0.12em] text-[#EC167A] transition hover:bg-[#EC167A]/10">View Aircraft</Link><CharterEnquiryButton aircraftPreference={aircraft.name} label="Request Charter" /><a href={`${whatsappHref}?text=${encodeURIComponent(`Hello RentRun Luxury, please check charter availability for ${aircraft.name}.`)}`} target="_blank" rel="noreferrer" className="border border-white/20 px-4 py-3 text-xs uppercase tracking-[0.12em] text-white transition hover:border-[#EC167A]">WhatsApp Concierge</a></div>
              </div>
            </article>
          ))}
        </div>
        {availableAircraft.length === 0 ? <p className="border border-white/10 px-5 py-8 text-sm text-[#4D4D4D]">No listed option matches this selection. Request a quote and our concierge will check availability.</p> : null}
        <p className="mt-6 text-xs text-[#9f9588]">Passenger capacity may vary by aircraft configuration. Final aircraft, routing, availability and quotation are confirmed after enquiry.</p>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"><CharterEnquirySection /></section>
    </>
  );
}