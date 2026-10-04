import Link from "next/link";
import { navigation, company } from "@/data/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white" aria-label="RentRun Luxury home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af75]/60 bg-[#d4af75]/10 text-sm font-semibold text-[#f0d7a5]">
            RR
          </span>
          <div>
            <div className="text-lg font-semibold tracking-[0.25em] text-[#f5efe6]">{company.name}</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#d4af75]">Luxury division</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[#e7dfd2] md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#f0d7a5]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/91${company.whatsapp}?text=${encodeURIComponent("Hello, I would like to plan a luxury journey with RentRun Luxury.")}`}
            className="hidden rounded-full border border-[#d4af75]/60 bg-[#d4af75]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#f5efe6] transition hover:bg-[#d4af75]/20 sm:inline-flex"
          >
            WhatsApp
          </a>
          <a
            href="tel:+917703956880"
            className="rounded-full bg-[#d4af75] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#090909] transition hover:brightness-110"
          >
            Call
          </a>
        </div>
      </div>
      <details className="group border-t border-white/10 md:hidden">
        <summary className="mx-auto max-w-7xl cursor-pointer list-none px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#f0d7a5] sm:px-6">
          Menu <span aria-hidden="true" className="float-right">+</span>
        </summary>
        <nav aria-label="Mobile navigation" className="grid gap-1 border-t border-white/10 bg-[#090909] px-4 py-3 sm:px-6">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="py-2 text-sm text-[#e7dfd2] transition hover:text-[#f0d7a5]">
              {item.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}
