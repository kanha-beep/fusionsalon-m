"use client";

import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import packageConfig from "../../data/packageConfig";

export default function PricingPage() {
  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading eyebrow="Pricing" title="Pricing previews reduce uncertainty before the first message or booking" description="Salon visitors often compare price ranges before they decide where to enquire, so the medium package keeps pricing visible and easy to scan." />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {packageConfig.pricingBands.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}><div className="rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{item.title}</p><p className="mt-4 text-3xl font-semibold text-brand-900">{item.price}</p><p className="mt-4 text-sm leading-7 text-brand-700">{item.description}</p></div></Reveal>
        ))}
      </div>
    </div>
  );
}
