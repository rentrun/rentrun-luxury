"use client";

import { useState } from "react";
import { company } from "@/data/site-data";
import { weddingCarPackages, weddingCarRateSections } from "@/data/wedding-car-rates";

const vehicles = weddingCarRateSections.flatMap((section) =>
  section.vehicles.map((vehicle) => vehicle.name),
);

export function WeddingCarEnquiry() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>(vehicles[0]);
  const [selectedPackage, setSelectedPackage] = useState<string>(weddingCarPackages[0]);
  const message = [
    "Customer enquiry for Wedding Car Rental",
    `Vehicle: ${selectedVehicle}`,
    `Selected package: ${selectedPackage}`,
    "Please share the final quotation and confirm availability.",
  ].join("\n");
  const whatsappHref = `https://wa.me/91${company.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div className="rounded-2xl border border-[#E7E1D6] bg-white p-5 sm:p-8">
      <p className="text-xs uppercase tracking-[0.3em] text-[#657384]">Wedding Car Enquiry</p>
      <h2 className="mt-3 text-3xl text-[#14283F]">Request a vehicle quotation</h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-[#14283F]">
        Choose a vehicle and package to ask for a final quotation. Package-specific pricing has not been confirmed.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-[#14283F]">
          Vehicle
          <select
            value={selectedVehicle}
            onChange={(event) => setSelectedVehicle(event.target.value)}
            className="min-w-0 rounded-xl border border-[#E7E1D6] bg-white px-4 py-3 text-[#14283F] outline-none focus:border-[#C5A46D]"
          >
            {vehicles.map((vehicle) => <option key={vehicle}>{vehicle}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm text-[#14283F]">
          Package
          <select
            value={selectedPackage}
            onChange={(event) => setSelectedPackage(event.target.value)}
            className="min-w-0 rounded-xl border border-[#E7E1D6] bg-white px-4 py-3 text-[#14283F] outline-none focus:border-[#C5A46D]"
          >
            {weddingCarPackages.map((rentalPackage) => <option key={rentalPackage}>{rentalPackage}</option>)}
          </select>
        </label>
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#14283F] px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#263D55] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A46D]"
      >
        Request Final Quotation on WhatsApp
      </a>
    </div>
  );
}
