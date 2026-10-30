import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  children,
}: PageHeroProps) {
  const secondaryIsExternal = secondaryHref?.startsWith("http") ?? false;

  return (
    <section className="relative min-h-[520px] overflow-hidden border-b border-[#EEEEEE] bg-white">
      <Image src={image} alt={`${eyebrow} luxury travel experience`} fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.84)_48%,rgba(255,255,255,0.18)_100%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.38em] text-[#EC167A]">{eyebrow}</p>
          <h1 className="text-4xl font-light tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4D4D4D]">{subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={primaryHref} className="rounded-full bg-[#EC167A] px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:bg-[#C90D65]">
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              secondaryIsExternal ? (
                <a href={secondaryHref} target="_blank" rel="noreferrer" className="rounded-full border border-[#EC167A] bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-[#EC167A] transition hover:bg-[#FFF1F7]">
                  {secondaryLabel}
                </a>
              ) : (
                <Link href={secondaryHref} className="rounded-full border border-[#EC167A] bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-[#EC167A] transition hover:bg-[#FFF1F7]">
                  {secondaryLabel}
                </Link>
              )
            ) : null}
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}
