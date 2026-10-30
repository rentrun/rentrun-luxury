'use client';

import { useRef, useState } from 'react';
import { company } from '@/data/site-data';

const initialForm = {
  name: '',
  phone: '',
  service: 'Luxury airport transfer',
  pickup: '',
  destination: '',
  travelDate: '',
  pickupTime: '',
  passengers: '1',
  requirements: '',
};

export function LuxuryChauffeurEnquiry() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'preparing' | 'ready' | 'error'>('idle');
  const [error, setError] = useState('');
  const submittedRef = useRef(false);

  const update = (field: keyof typeof initialForm, value: string) => {
    submittedRef.current = false;
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== 'idle') setStatus('idle');
  };

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your full name.';
    const phoneDigits = form.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 15) return 'Please enter a valid mobile number.';
    if (!form.pickup.trim()) return 'Please enter a pickup location.';
    if (!form.destination.trim()) return 'Please enter a destination.';
    if (!form.travelDate) return 'Please select a travel date.';
    if (!form.passengers || Number(form.passengers) < 1) return 'Please enter the number of passengers.';
    return '';
  };

  const createMessage = () => `Hello RentRun Luxury, I would like a luxury chauffeur quote.\n\nName: ${form.name}\nMobile: ${form.phone}\nService: ${form.service}\nPickup: ${form.pickup}\nDestination: ${form.destination}\nTravel date: ${form.travelDate}\nPickup time: ${form.pickupTime || 'Not provided'}\nPassengers: ${form.passengers}\nAdditional requirements: ${form.requirements || 'Not provided'}`;

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setStatus('error');
      return;
    }
    if (submittedRef.current) return;
    submittedRef.current = true;
    setError('');
    setStatus('preparing');

    const message = createMessage();
    window.location.href = `mailto:${company.emailPrimary}?subject=${encodeURIComponent(`Chauffeur enquiry: ${form.service}`)}&body=${encodeURIComponent(message)}`;
    window.setTimeout(() => setStatus('ready'), 350);
  };

  const whatsappHref = `https://wa.me/91${company.whatsapp}?text=${encodeURIComponent(createMessage())}`;

  return (
    <div className="rounded-[2rem] border border-[#EC167A]/30 bg-[#141414] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8">
      <p className="text-xs uppercase tracking-[0.35em] text-[#EC167A]">Private Enquiry</p>
      <h2 className="mt-3 text-3xl text-white">Get a luxury chauffeur quote</h2>
      <p className="mt-3 text-sm leading-6 text-[#4D4D4D]">Share your travel details. Your email app will open with the request ready to send; you can also continue in WhatsApp.</p>

      <form onSubmit={submit} className="mt-7 grid gap-5 md:grid-cols-2" noValidate>
        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">Full name<span aria-hidden="true" className="sr-only"> (required)</span>
          <input required autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} aria-invalid={status === 'error' && !form.name.trim()} className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none focus:border-[#EC167A]" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">Mobile number<span aria-hidden="true" className="sr-only"> (required)</span>
          <input required type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" value={form.phone} onChange={(e) => update('phone', e.target.value)} aria-invalid={status === 'error' && form.phone.replace(/\D/g, '').length < 10} className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none focus:border-[#EC167A]" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">Service required
          <select value={form.service} onChange={(e) => update('service', e.target.value)} className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none focus:border-[#EC167A]">
            <option>Luxury airport transfer</option>
            <option>Corporate chauffeur service</option>
            <option>Wedding transportation</option>
            <option>Business meeting / executive travel</option>
            <option>Hotel transfer</option>
            <option>Private chauffeur-driven travel</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">Number of passengers<span aria-hidden="true" className="sr-only"> (required)</span>
          <input required type="number" min="1" max="20" value={form.passengers} onChange={(e) => update('passengers', e.target.value)} className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none focus:border-[#EC167A]" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">Pickup location<span aria-hidden="true" className="sr-only"> (required)</span>
          <input required value={form.pickup} onChange={(e) => update('pickup', e.target.value)} className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none focus:border-[#EC167A]" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">Destination<span aria-hidden="true" className="sr-only"> (required)</span>
          <input required value={form.destination} onChange={(e) => update('destination', e.target.value)} className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none focus:border-[#EC167A]" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">Travel date<span aria-hidden="true" className="sr-only"> (required)</span>
          <input required type="date" value={form.travelDate} onChange={(e) => update('travelDate', e.target.value)} className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none focus:border-[#EC167A]" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#efe7dc]">Pickup time
          <input type="time" value={form.pickupTime} onChange={(e) => update('pickupTime', e.target.value)} className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none focus:border-[#EC167A]" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#efe7dc] md:col-span-2">Additional requirements
          <textarea rows={4} value={form.requirements} onChange={(e) => update('requirements', e.target.value)} placeholder="Flight number, luggage, return journey or special requests" className="rounded-xl border border-white/10 bg-[#0d0d0d] px-4 py-3 text-white outline-none focus:border-[#EC167A]" />
        </label>
        <div className="flex flex-col gap-4 md:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" disabled={status === 'preparing'} className="rounded-full bg-[#EC167A] px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#171717] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60">
            {status === 'preparing' ? 'Preparing enquiry…' : 'GET A LUXURY QUOTE'}
          </button>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[#EC167A]/60 px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#171717] transition hover:bg-[#EC167A]/10">WhatsApp Concierge</a>
        </div>
      </form>
      {status === 'error' ? <p role="alert" className="mt-5 text-sm text-[#ffb4a8]">{error}</p> : null}
      {status === 'ready' ? <p role="status" className="mt-5 text-sm text-[#4D4D4D]">Your email app should be open with the details ready. It has not been sent until you confirm in that app.</p> : null}
    </div>
  );
}
