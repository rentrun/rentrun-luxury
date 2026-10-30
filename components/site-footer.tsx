import Link from "next/link";
import { company } from "@/data/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#EEEEEE] bg-[#171717] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-xl font-bold tracking-[0.18em]">{company.name}</div>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">{company.tagline}</p>
            <p className="mt-4 text-sm font-semibold text-[#EC167A]">{company.parent}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#EC167A]">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li><a href="tel:+917703956880">+91 {company.phonePrimary}</a></li>
              <li><a href="tel:+918178575212">+91 {company.phoneSecondary}</a></li>
              <li><a href={`https://wa.me/91${company.whatsapp}`}>WhatsApp</a></li>
              <li><a href={`mailto:${company.emailPrimary}`}>{company.emailPrimary}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#EC167A]">Explore</h3>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/75 sm:block sm:space-y-3">
              <li><Link href="/luxury-cars">Luxury Cars</Link></li>
              <li><Link href="/private-charter">Private Charter</Link></li>
              <li><Link href="/luxury-cruises">Luxury Cruises</Link></li>
              <li><Link href="/corporate">Corporate</Link></li>
              <li><Link href="/weddings">Weddings</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-5"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-conditions">Terms & Conditions</Link><Link href="/cancellation-policy">Cancellation Policy</Link></div>
          <p>© {new Date().getFullYear()} RentRun Luxury</p>
        </div>
      </div>
    </footer>
  );
}
