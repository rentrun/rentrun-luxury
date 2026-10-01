import Link from "next/link";
import { company } from "@/data/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] text-[#f5efe6]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-xl font-semibold tracking-[0.26em] text-[#f5efe6]">{company.name}</div>
            <p className="mt-4 max-w-md text-sm text-[#c7bba8]">{company.tagline}</p>
            <p className="mt-4 text-sm text-[#d4af75]">{company.parent}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-[#d4af75]">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#e7dfd2]">
              <li><a href="tel:+917703956880">Phone: {company.phonePrimary}</a></li>
              <li><a href="tel:+918178575212">{company.phoneSecondary}</a></li>
              <li><a href={`https://wa.me/91${company.whatsapp}`}>WhatsApp: {company.whatsapp}</a></li>
              <li><a href={`mailto:${company.emailPrimary}`}>Email: {company.emailPrimary}</a></li>
              <li><a href={`mailto:${company.emailSecondary}`}>{company.emailSecondary}</a></li>
              <li><a href={company.website}>Website: {company.website}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-[#d4af75]">Quick links</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#e7dfd2]">
              <li><Link href="/luxury-cars">Luxury Cars</Link></li>
              <li><Link href="/private-charter">Private Charter</Link></li>
              <li><Link href="/luxury-cruises">Luxury Cruises</Link></li>
              <li><Link href="/corporate-luxury-transport">Corporate</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-[#b7aa96] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <Link href="/cancellation-policy">Cancellation Policy</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <p>© {new Date().getFullYear()} RentRun Luxury</p>
        </div>
      </div>
    </footer>
  );
}
