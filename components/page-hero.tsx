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
    <section className="relative overflow-hidden border-b border-white/10 bg-[#101010]">
      <Image src={image} alt={`${eyebrow} luxury travel experience`} fill priority sizes="100vw" className="object-cover object-center opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,117,0.18),transparent_35%),linear-gradient(90deg,rgba(9,9,9,0.9),rgba(9,9,9,0.45),rgba(9,9,9,0.8))]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#d4af75]">{eyebrow}</p>
          <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#e7dfd2]">{subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={primaryHref} className="rounded-full bg-[#d4af75] px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#090909] transition hover:brightness-110">
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              secondaryIsExternal ? (
                <a href={secondaryHref} target="_blank" rel="noreferrer" className="rounded-full border border-[#d4af75]/60 bg-transparent px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#f5efe6] transition hover:bg-[#d4af75]/10">
                  {secondaryLabel}
                </a>
              ) : (
                <Link href={secondaryHref} className="rounded-full border border-[#d4af75]/60 bg-transparent px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-[#f5efe6] transition hover:bg-[#d4af75]/10">
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
