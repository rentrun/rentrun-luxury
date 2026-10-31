'use client';

import { useRef, useState } from 'react';

const initialForm = {
  name: '',
  phone: '',
  service: 'Airport Transfer',
  pickup: '',
  destination: '',
  travelDate: '',
  pickupTime: '',
  passengers: '1',
  requirements: '',
};

export function LuxuryChauffeurEnquiry() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'preparing' | 'error'>('idle');
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
    if (!form.service) return 'Please select a service required.';
    if (!form.pickup.trim()) return 'Please enter a pickup location.';
    if (!form.destination.trim()) return 'Please enter a destination.';
    if (!form.travelDate) return 'Please select a travel date.';
    if (!form.pickupTime) return 'Please select a pickup time.';
    if (!form.passengers || Number(form.passengers) < 1) return 'Please enter the number of passengers.';
    return '';
  };

  const createMessage = () => `Hello RentRun Luxury,\n\nI would like to enquire about your luxury chauffeur service.\n\nName: ${form.name}\nMobile: ${form.phone}\nService Required: ${form.service}\nPickup Location: ${form.pickup}\nDestination: ${form.destination}\nTravel Date: ${form.travelDate}\nPickup Time: ${form.pickupTime}\nPassengers: ${form.passengers}\nAdditional Requirements: ${form.requirements.trim() || 'Not provided'}\n\nPlease share vehicle options, availability and quotation.\n\nThank you.`;

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
    window.location.href = `https://wa.me/917703956880?text=${encodeURIComponent(message)}`;
  };


  return (
    <div className="rounded-[2rem] border border-[#C5A46D]/30 bg-[#FFFFFF] p-5 shadow-[0_20px_60px_rgba(20,40,63,0.16)] sm:p-8">
      <p className="text-xs uppercase tracking-[0.35em] text-[#657384]">Private Enquiry</p>
      <h2 className="mt-3 text-3xl text-[#14283F]">Get a luxury chauffeur quote</h2>
      <p className="mt-3 text-sm leading-6 text-[#14283F]">Share your travel details and continue to WhatsApp for availability confirmation and a personalised quote.</p>

      <form onSubmit={submit} className="mt-7 grid gap-5 md:grid-cols-2" noValidate>
        <label className="flex flex-col gap-2 text-sm text-[#14283F]">Full name<span aria-hidden="true" className="sr-only"> (required)</span>
          <input required autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} aria-invalid={status === 'error' && !form.name.trim()} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none focus:border-[#C5A46D]" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#14283F]">Mobile number<span aria-hidden="true" className="sr-only"> (required)</span>
          <input required type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" value={form.phone} onChange={(e) => update('phone', e.target.value)} aria-invalid={status === 'error' && form.phone.replace(/\D/g, '').length < 10} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none focus:border-[#C5A46D]" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#14283F]">Service required
          <select value={form.service} onChange={(e) => update('service', e.target.value)} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none focus:border-[#C5A46D]">
            <option>Airport Transfer</option>
            <option>Corporate Chauffeur Service</option>
            <option>Wedding Transportation</option>
            <option>Hotel Transfer</option>
            <option>Business Meeting</option>
            <option>Private Chauffeur Service</option>
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#14283F]">Number of passengers<span aria-hidden="true" className="sr-only"> (required)</span>
          <input required type="number" min="1" max="20" value={form.passengers} onChange={(e) => update('passengers', e.target.value)} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none focus:border-[#C5A46D]" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#14283F]">Pickup location<span aria-hidden="true" className="sr-only"> (required)</span>
          <input required value={form.pickup} onChange={(e) => update('pickup', e.target.value)} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none focus:border-[#C5A46D]" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#14283F]">Destination<span aria-hidden="true" className="sr-only"> (required)</span>
          <input required value={form.destination} onChange={(e) => update('destination', e.target.value)} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none focus:border-[#C5A46D]" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#14283F]">Travel date<span aria-hidden="true" className="sr-only"> (required)</span>
          <input required type="date" min={new Date().toISOString().slice(0, 10)} value={form.travelDate} onChange={(e) => update('travelDate', e.target.value)} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none focus:border-[#C5A46D]" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#14283F]">Pickup time
          <input required type="time" value={form.pickupTime} onChange={(e) => update('pickupTime', e.target.value)} className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none focus:border-[#C5A46D]" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#14283F] md:col-span-2">Additional requirements
          <textarea rows={4} value={form.requirements} onChange={(e) => update('requirements', e.target.value)} placeholder="Flight number, luggage, return journey or special requests" className="rounded-xl border border-[#E7E1D6] bg-[#FFFFFF] px-4 py-3 text-[#14283F] outline-none focus:border-[#C5A46D]" />
        </label>
        <div className="flex flex-col gap-4 md:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" disabled={status === 'preparing'} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#14283F] transition hover:bg-[#1fbf5a] disabled:cursor-not-allowed disabled:opacity-60">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20.52 3.48A11.8 11.8 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.59 5.96L.05 24l6.28-1.65a11.88 11.88 0 0 0 5.74 1.47h.01C18.65 23.82 24 18.47 24 11.9c0-3.18-1.24-6.16-3.48-8.42ZM12.07 21.8a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.73.98 1-3.64-.24-.37a9.83 9.83 0 0 1-1.51-5.28A9.84 9.84 0 0 1 12.08 2.05a9.76 9.76 0 0 1 6.96 2.88 9.78 9.78 0 0 1 2.88 6.98c0 5.43-4.42 9.85-9.85 9.85Zm5.4-7.37c-.29-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.15-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.3-.35.44-.52.15-.17.2-.29.3-.49.1-.19.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.56-.34Z"/></svg>
            Send Enquiry on WhatsApp
          </button>
          <a href="tel:+917703956880" className="inline-flex items-center justify-center rounded-full border border-[#C5A46D]/60 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#657384] transition hover:bg-[#FAF8F3]">Call Now</a>
        </div>
      </form>
      {status === 'error' ? <p role="alert" className="mt-5 text-sm text-[#657384]">{error}</p> : null}
    </div>
  );
}
