'use client';

import { useState } from 'react';

const initialForm = {
  fullName: '',
  mobileNumber: '',
  email: '',
  serviceType: 'Luxury Car',
  travelDate: '',
  pickupLocation: '',
  destination: '',
  numberOfGuests: '',
  vehiclePreference: '',
  additionalRequirements: '',
};

export function EnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="rounded-[2rem] border border-[#d4af75]/30 bg-[#141414] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.35em] text-[#d4af75]">Enquiry</p>
        <h3 className="mt-3 text-3xl text-white">Request a Luxury Quote</h3>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">
          Full Name
          <input
            required
            value={form.fullName}
            onChange={(event) => handleChange('fullName', event.target.value)}
            className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#d4af75]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">
          Mobile Number
          <input
            required
            value={form.mobileNumber}
            onChange={(event) => handleChange('mobileNumber', event.target.value)}
            className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#d4af75]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">
          Email
          <input
            type="email"
            required
            value={form.email}
            onChange={(event) => handleChange('email', event.target.value)}
            className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#d4af75]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">
          Service Type
          <select
            value={form.serviceType}
            onChange={(event) => handleChange('serviceType', event.target.value)}
            className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#d4af75]"
          >
            <option>Luxury Car</option>
            <option>Private Charter</option>
            <option>Cruise</option>
            <option>Corporate</option>
            <option>Wedding</option>
            <option>VIP Travel</option>
            <option>Other</option>
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">
          Travel Date
          <input
            type="date"
            value={form.travelDate}
            onChange={(event) => handleChange('travelDate', event.target.value)}
            className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#d4af75]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">
          Pickup Location
          <input
            value={form.pickupLocation}
            onChange={(event) => handleChange('pickupLocation', event.target.value)}
            className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#d4af75]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">
          Destination
          <input
            value={form.destination}
            onChange={(event) => handleChange('destination', event.target.value)}
            className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#d4af75]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">
          Number of Guests
          <input
            value={form.numberOfGuests}
            onChange={(event) => handleChange('numberOfGuests', event.target.value)}
            className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#d4af75]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-[#efe7dc] md:col-span-2">
          Vehicle / Experience Preference
          <input
            value={form.vehiclePreference}
            onChange={(event) => handleChange('vehiclePreference', event.target.value)}
            className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#d4af75]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-[#efe7dc] md:col-span-2">
          Additional Requirements
          <textarea
            rows={4}
            value={form.additionalRequirements}
            onChange={(event) => handleChange('additionalRequirements', event.target.value)}
            className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none transition focus:border-[#d4af75]"
          />
        </label>

        <div className="md:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" className="rounded-full bg-[#d4af75] px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#090909] transition hover:brightness-110">
            Request Luxury Quote
          </button>

          <a
            href="https://wa.me/917703956880?text=Hello%20RentRun%20Luxury%2C%20I%20would%20like%20to%20request%20a%20quote."
            className="inline-flex items-center justify-center rounded-full border border-[#d4af75]/60 bg-transparent px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#f5efe6] transition hover:bg-[#d4af75]/10"
          >
            WhatsApp Enquiry
          </a>
        </div>
      </form>

      {submitted ? (
        <div className="mt-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          Thank you. Your enquiry has been received and our luxury concierge will contact you shortly.
        </div>
      ) : null}
    </div>
  );
}
