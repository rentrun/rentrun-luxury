import Link from "next/link";
import { company } from "@/data/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#263D55] bg-[#14283F] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-xl font-bold tracking-[0.18em]">{company.name}</div>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/80">{company.tagline}</p>
            <p className="mt-4 text-sm font-semibold text-white">{company.parent}</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-white">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#C5A46D]">
              <li><a className="hover:text-white" href="tel:+917703956880">+91 {company.phonePrimary}</a></li>
              <li><a className="hover:text-white" href="tel:+918178575212">+91 {company.phoneSecondary}</a></li>
              <li><a className="hover:text-white" href={`https://wa.me/91${company.whatsapp}`}>WhatsApp</a></li>
              <li><a className="hover:text-white" href={`mailto:${company.emailPrimary}`}>{company.emailPrimary}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-white">Explore</h3>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-[#C5A46D] sm:block sm:space-y-3">
              <li><Link href="/luxury-cars">Luxury Cars</Link></li>
              <li><Link href="/private-charter">Private Charter</Link></li>
              <li><Link href="/luxury-cruises">Luxury Cruises</Link></li>
              <li><Link href="/corporate">Corporate</Link></li>
              <li><Link href="/weddings">Weddings</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-[#263D55] pt-6 text-xs text-[#C5A46D]/90 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-5"><Link className="hover:text-white" href="/privacy-policy">Privacy Policy</Link><Link className="hover:text-white" href="/terms-conditions">Terms & Conditions</Link><Link className="hover:text-white" href="/cancellation-policy">Cancellation Policy</Link></div>
          <p>© {new Date().getFullYear()} RentRun Luxury</p>
        </div>
      </div>
    </footer>
  );
}
