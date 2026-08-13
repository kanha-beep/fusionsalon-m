"use client";

import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import packageConfig from "../../data/packageConfig";

export default function OffersPage() {
  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading eyebrow="Offers" title="Promotional packages that make the salon website feel more complete" description="Offers and bundled packages are one of the clearest ways a medium package can look more valuable than a simple low-package salon site." />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {packageConfig.offerHighlights.map((offer, index) => (
          <Reveal key={offer.title} delay={index * 0.08}><div className="rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Offer {index + 1}</p><h2 className="mt-4 text-2xl font-semibold text-brand-900">{offer.title}</h2><p className="mt-4 text-base leading-8 text-brand-700">{offer.description}</p></div></Reveal>
        ))}
      </div>
    </div>
  );
}
