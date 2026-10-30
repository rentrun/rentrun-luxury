import Link from "next/link";
import { navigation, company } from "@/data/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E7E1D6] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-[#14283F]" aria-label="RentRun Luxury home">
          <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-[#C5A46D] bg-[#FAF8F3] text-sm font-bold tracking-[0.08em] text-[#14283F]">RR</span>
          <div>
            <div className="text-[15px] font-bold tracking-[0.18em] sm:text-lg">{company.name}</div>
            <div className="mt-0.5 text-[9px] uppercase tracking-[0.3em] text-[#657384]">Luxury mobility</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-[13px] font-medium text-[#14283F] lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#657384]">{item.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`https://wa.me/91${company.whatsapp}`} className="hidden rounded-full border border-[#C5A46D] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#657384] transition hover:bg-[#FAF8F3] sm:inline-flex">WhatsApp</a>
          <a href="tel:+917703956880" className="rounded-full bg-[#14283F] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#263D55]">Call</a>
        </div>
      </div>
      <details className="border-t border-[#E7E1D6] lg:hidden">
        <summary className="mx-auto max-w-7xl cursor-pointer list-none px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#657384] sm:px-6">Menu <span className="float-right">+</span></summary>
        <nav aria-label="Mobile navigation" className="grid bg-white px-4 py-3 sm:px-6">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="border-b border-[#E7E1D6] py-3 text-sm font-medium text-[#14283F] last:border-0">{item.label}</Link>)}
        </nav>
      </details>
    </header>
  );
}
