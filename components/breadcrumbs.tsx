import Link from "next/link";

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `https://luxury.rentrun.in${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-[#14283F]">
          {items.map((item, index) => (
            <li key={item.name} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true" className="text-[#657384]">/</span> : null}
              {item.href ? <Link href={item.href} className="transition hover:text-[#14283F]">{item.name}</Link> : <span aria-current="page">{item.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
