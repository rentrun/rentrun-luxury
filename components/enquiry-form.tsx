'use client';

import { useState } from 'react';
import { company } from '@/data/site-data';

const initialForm = {
  name: '',
  phone: '',
  whatsappNumber: '',
  email: '',
  service: 'Luxury Cars',
  experience: '',
  cruise: 'Luxury Cruise',
  travelDate: '',
  returnDate: '',
  pickupCity: '',
  departurePort: '',
  destination: '',
  passengers: '',
  cabinPreference: '',
  specialRequirements: '',
  message: '',
};

export function EnquiryForm({ variant = 'general' }: { variant?: 'general' | 'cruise' }) {
  const [form, setForm] = useState(() => ({ ...initialForm, service: variant === 'cruise' ? 'Luxury Cruises' : initialForm.service }));
  const [handoffStarted, setHandoffStarted] = useState(false);

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const enquiryFields = variant === 'cruise' ? {
    name: form.name,
    whatsappNumber: form.whatsappNumber,
    email: form.email,
    preferredCruise: form.cruise,
    departureCity: form.departurePort,
    destination: form.destination,
    travelDate: form.travelDate,
    returnDate: form.returnDate,
    numberOfGuests: form.passengers,
    cabinPreference: form.cabinPreference,
    specialRequirements: form.specialRequirements,
  } : form;
  const details = Object.entries(enquiryFields)
    .map(([field, value]) => `${field}: ${value || 'Not provided'}`)
    .join('\n');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `RentRun Luxury enquiry: ${form.service}`;
    window.location.href = `mailto:${company.emailPrimary}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(details)}`;
    setHandoffStarted(true);
  };

  const whatsappHref = `https://wa.me/91${company.whatsapp}?text=${encodeURIComponent(`Hello RentRun Luxury, I would like to enquire.\n${details}`)}`;

  return (
    <div className="rounded-[2rem] border border-[#C5A46D]/30 bg-[#FFFFFF] p-5 shadow-[0_20px_60px_rgba(20,40,63,0.16)] sm:p-8">
      <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#657384]">Private Enquiry</p>
          <h3 className="mt-3 text-3xl text-[#14283F]">{variant === 'cruise' ? 'Request Cruise Quote' : 'Request My Private Quote'}</h3>
          <p className="mt-3 text-sm text-[#14283F]">Your email app will open with the enquiry details ready to send. For direct assistance, use WhatsApp Concierge.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-[#14283F]">
          Name
          <input
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => handleChange('name', event.target.value)}
            className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]"
          />
        </label>

        {variant === 'cruise' ? null : (
          <label className="flex flex-col gap-2 text-sm text-[#14283F]">
            Phone
            <input required type="tel" autoComplete="tel" value={form.phone} onChange={(event) => handleChange('phone', event.target.value)} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]" />
          </label>
        )}

        <label className="flex flex-col gap-2 text-sm text-[#14283F]">
              WhatsApp Number
          <input
                required={variant === 'cruise'}
            type="tel"
            value={form.whatsappNumber}
            onChange={(event) => handleChange('whatsappNumber', event.target.value)}
            className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-[#14283F]">
          Email
          <input
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(event) => handleChange('email', event.target.value)}
            className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]"
          />
        </label>

        {variant === 'cruise' ? (
          <>
            <label className="flex flex-col gap-2 text-sm text-[#14283F]">
              Preferred Cruise
              <input value={form.cruise} onChange={(event) => handleChange('cruise', event.target.value)} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[#14283F]">
              Departure City
              <input value={form.departurePort} onChange={(event) => handleChange('departurePort', event.target.value)} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[#14283F]">
              Cabin Preference
              <input value={form.cabinPreference} onChange={(event) => handleChange('cabinPreference', event.target.value)} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]" />
            </label>
          </>
        ) : (
          <>
            <label className="flex flex-col gap-2 text-sm text-[#14283F]">
              Service
              <select value={form.service} onChange={(event) => handleChange('service', event.target.value)} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]">
                <option>Luxury Cars</option>
                <option>Private Charter</option>
                <option>Helicopter Charter</option>
                <option>Luxury Cruises</option>
                <option>Corporate</option>
                <option>Wedding</option>
                <option>VIP / Concierge</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm text-[#14283F]">
              Vehicle / Aircraft / Cruise
              <input value={form.experience} onChange={(event) => handleChange('experience', event.target.value)} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]" />
            </label>
          </>
        )}

        <label className="flex flex-col gap-2 text-sm text-[#14283F]">
          Travel Date
          <input
            type="date"
            value={form.travelDate}
            onChange={(event) => handleChange('travelDate', event.target.value)}
            className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]"
          />
        </label>

        {variant === 'cruise' ? (
          <label className="flex flex-col gap-2 text-sm text-[#14283F]">
            Return Date
            <input type="date" value={form.returnDate} onChange={(event) => handleChange('returnDate', event.target.value)} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]" />
          </label>
        ) : null}

        {variant === 'cruise' ? null : (
          <label className="flex flex-col gap-2 text-sm text-[#14283F]">
            Pickup City
            <input value={form.pickupCity} onChange={(event) => handleChange('pickupCity', event.target.value)} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]" />
          </label>
        )}

        <label className="flex flex-col gap-2 text-sm text-[#14283F]">
          Destination
          <input
            value={form.destination}
            onChange={(event) => handleChange('destination', event.target.value)}
            className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-[#14283F]">
          {variant === 'cruise' ? 'Number of Guests' : 'Passengers'}
          <input
            type="number"
            min="1"
            value={form.passengers}
            onChange={(event) => handleChange('passengers', event.target.value)}
            className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-[#14283F] md:col-span-2">
          Special Requirements
          <textarea
            rows={3}
            value={form.specialRequirements}
            onChange={(event) => handleChange('specialRequirements', event.target.value)}
            className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]"
          />
        </label>

        {variant === 'cruise' ? null : (
          <label className="flex flex-col gap-2 text-sm text-[#14283F] md:col-span-2">
            Message
            <textarea rows={3} value={form.message} onChange={(event) => handleChange('message', event.target.value)} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none transition focus:border-[#C5A46D]" />
          </label>
        )}

        <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" className="rounded-full bg-[#14283F] px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-white transition hover:brightness-110">
            {variant === 'cruise' ? 'Request Cruise Quote' : 'Request My Private Quote'}
          </button>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#C5A46D]/60 bg-transparent px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#657384] transition hover:bg-[#FAF8F3]"
          >
            WhatsApp Concierge
          </a>
        </div>
      </form>

      {handoffStarted ? (
        <p role="status" className="mt-6 text-sm text-[#14283F]">
          {variant === 'cruise' ? 'Thank you. Our Luxury Cruise Concierge will contact you shortly with availability and a personalised quote.' : 'Your email app should open with your enquiry. It has not been sent until you confirm in that app; you can also use WhatsApp Concierge.'}
        </p>
      ) : null}
    </div>
  );
}
