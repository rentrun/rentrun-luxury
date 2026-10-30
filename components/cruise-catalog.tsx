'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { company, cordeliaCruiseExperiences, cordeliaDestinations, cordeliaSailings, cordeliaShips } from '@/data/site-data';

function sailingMatchesLocation(sailing: (typeof cordeliaSailings)[number], location: string) {
  return sailing.destinations.includes(location);
}

export function CruiseCatalog() {
  const [selectedDestination, setSelectedDestination] = useState('All destinations');
  const [selectedDeparture, setSelectedDeparture] = useState('All departure ports');
  const [selectedMonth, setSelectedMonth] = useState('Any month');
  const [selectedDuration, setSelectedDuration] = useState('Any duration');
  const [selectedType, setSelectedType] = useState('All cruise types');
  const departurePorts = [...new Set(cordeliaSailings.map((sailing) => sailing.departurePort))];
  const months = [...new Set(cordeliaSailings.flatMap((sailing) => sailing.departureDate ? [new Date(sailing.departureDate).toLocaleString('en-US', { month: 'long', year: 'numeric' })] : []))];
  const durations = [...new Set(cordeliaSailings.flatMap((sailing) => sailing.duration ? [sailing.duration] : sailing.nights ? [`${sailing.nights} Nights`] : []))];
  const cruiseType = (sailing: (typeof cordeliaSailings)[number]) => sailing.ports.length > 2 && sailing.ports[0] === sailing.ports.at(-1)
    ? 'Round Trip'
    : sailing.ports.length > 2 ? 'Multi-stop' : 'One Way';
  const sailings = cordeliaSailings.filter((sailing) => {
    const month = sailing.departureDate ? new Date(sailing.departureDate).toLocaleString('en-US', { month: 'long', year: 'numeric' }) : '';
    const duration = sailing.duration ?? (sailing.nights ? `${sailing.nights} Nights` : '');
    return (selectedDestination === 'All destinations' || sailingMatchesLocation(sailing, selectedDestination))
      && (selectedDeparture === 'All departure ports' || sailing.departurePort === selectedDeparture)
      && (selectedMonth === 'Any month' || month === selectedMonth)
      && (selectedDuration === 'Any duration' || duration === selectedDuration)
      && (selectedType === 'All cruise types' || cruiseType(sailing) === selectedType);
  });

  return (
    <>
      <section aria-label="Cruise filters" className="mb-14">
        <h3 className="mb-5 text-center text-xs uppercase tracking-[0.25em] text-[#EC167A]">Destinations</h3>
        <div className="flex flex-wrap justify-center gap-2">
          <button type="button" onClick={() => setSelectedDestination('All destinations')} aria-pressed={selectedDestination === 'All destinations'} className={`border px-3 py-2 text-xs ${selectedDestination === 'All destinations' ? 'border-[#EC167A] text-[#EC167A]' : 'border-white/15 text-[#4D4D4D]'}`}>All destinations</button>
          {cordeliaDestinations.map((destination) => (
            <button key={destination} type="button" onClick={() => setSelectedDestination(destination)} aria-pressed={selectedDestination === destination} className={`border px-3 py-2 text-xs ${selectedDestination === destination ? 'border-[#EC167A] text-[#EC167A]' : 'border-white/15 text-[#4D4D4D]'}`}>
              {destination}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.12em] text-[#c9c0b4]">Departure port<select value={selectedDeparture} onChange={(event) => setSelectedDeparture(event.target.value)} className="border border-white/15 bg-[#0d0d0d] px-3 py-3 text-sm normal-case tracking-normal text-white"><option>All departure ports</option>{departurePorts.map((port) => <option key={port}>{port}</option>)}</select></label>
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.12em] text-[#c9c0b4]">Month<select value={selectedMonth} onChange={(event) => setSelectedMonth(event.target.value)} className="border border-white/15 bg-[#0d0d0d] px-3 py-3 text-sm normal-case tracking-normal text-white"><option>Any month</option>{months.map((month) => <option key={month}>{month}</option>)}</select></label>
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.12em] text-[#c9c0b4]">Duration<select value={selectedDuration} onChange={(event) => setSelectedDuration(event.target.value)} className="border border-white/15 bg-[#0d0d0d] px-3 py-3 text-sm normal-case tracking-normal text-white"><option>Any duration</option>{durations.map((duration) => <option key={duration}>{duration}</option>)}</select></label>
          <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.12em] text-[#c9c0b4]">Cruise type<select value={selectedType} onChange={(event) => setSelectedType(event.target.value)} className="border border-white/15 bg-[#0d0d0d] px-3 py-3 text-sm normal-case tracking-normal text-white"><option>All cruise types</option><option>One Way</option><option>Round Trip</option><option>Multi-stop</option></select></label>
        </div>
      </section>

      {sailings.length ? (
        <div className="grid gap-7 lg:grid-cols-2">
          {sailings.map((sailing, index) => {
            const ship = cordeliaShips.find((candidate) => candidate.slug === sailing.shipSlug);
            if (!ship) return null;
            const destination = sailing.destinations.join(', ') || 'Confirm with concierge';
            const duration = sailing.duration ?? (sailing.nights ? `${sailing.nights} Nights` : 'Confirm with concierge');
            const departureDate = sailing.departureDate ?? 'Dates on request';
            const returnDate = sailing.returnDate ?? 'Dates on request';

            return (
              <article key={`${sailing.shipSlug}-${sailing.cruiseName}-${index}`} className="overflow-hidden border border-white/10 bg-[#FFFFFF]">
                <Link href={`/luxury-cruises/${ship.slug}`} className="group relative block aspect-[16/9] overflow-hidden">
                  <Image src={ship.thumbnail} alt="Luxury cruise ship at sea" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </Link>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#EC167A]">Luxury Cruise</p>
                  <h3 className="mt-2 text-2xl text-white">{sailing.cruiseName}</h3>
                  <dl className="mt-5 space-y-3 border-y border-white/10 py-5 text-sm text-[#171717]">
                    <div className="flex justify-between gap-4"><dt className="text-[#4D4D4D]">Departure</dt><dd>{sailing.departurePort}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-[#4D4D4D]">Destination</dt><dd className="text-right">{destination}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-[#4D4D4D]">Duration</dt><dd>{duration}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-[#4D4D4D]">Departure date</dt><dd>{departureDate}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-[#4D4D4D]">Return date</dt><dd>{returnDate}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-[#4D4D4D]">Cabin</dt><dd className="text-right">Multiple cabin categories available</dd></div>
                  </dl>
                  <p className="mt-4 text-xs text-[#4D4D4D]">Price on Request</p>
                  <p className="mt-4 text-xs leading-5 text-[#4D4D4D]">Subject to sailing availability and final confirmation.</p>
                  <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.12em]">
                    <Link href={`/luxury-cruises/${ship.slug}`} className="border border-[#EC167A]/60 px-3 py-2 text-[#EC167A]">View Cruise</Link>
                    <Link href="#enquiry" className="bg-[#EC167A] px-3 py-2 text-[#171717]">Request Quote</Link>
                    <a href={`https://wa.me/91${company.whatsapp}?text=${encodeURIComponent(`Hello RentRun Luxury, please share availability for ${sailing.cruiseName}.`)}`} className="border border-white/20 px-3 py-2 text-white">WhatsApp Concierge</a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <p role="status" className="mx-auto max-w-2xl border-y border-white/10 py-10 text-center text-[#4D4D4D]">
          No {selectedDestination} sailings are currently listed. Request a quote for upcoming dates.
        </p>
      )}

      <section className="mt-16 border-y border-white/10 py-10">
        <p className="text-xs uppercase tracking-[0.25em] text-[#EC167A]">Cruise experiences</p>
        <ul className="mt-6 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {cordeliaCruiseExperiences.map((experience) => <li key={experience} className="border-t border-white/10 py-4 text-[#171717]">{experience}</li>)}
        </ul>
      </section>
    </>
  );
}
