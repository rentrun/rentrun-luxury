import Link from "next/link";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqSection({ items, title = "Frequently asked questions" }: { items: FaqItem[]; title?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <p className="text-center text-xs uppercase tracking-[0.38em] text-[#657384]">Useful information</p>
      <h2 className="mt-5 text-center text-3xl text-[#14283F]">{title}</h2>
      <div className="mt-10 space-y-3">
        {items.map((item) => (
          <details key={item.question} className="border border-[#E7E1D6] bg-white px-6 py-5">
            <summary className="cursor-pointer text-[#14283F]">{item.question}</summary>
            <p className="mt-4 text-sm leading-7 text-[#14283F]">{item.answer}</p>
          </details>
        ))}
      </div>
      <p className="mt-10 text-center text-xs text-[#14283F]">
        RentRun Luxury arranges services through partner operators. Review the{" "}
        <Link className="text-[#657384] underline" href="/cancellation-policy">cancellation policy</Link>{" "}
        before confirming a booking.
      </p>
    </section>
  );
}
