"use client";

import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import { testimonials } from "../../data/siteContent";

export default function TestimonialsPage() {
  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading eyebrow="Testimonials" title="Customer proof that supports medium-package trust and booking confidence" description="Review-focused pages help first-time visitors feel safer about contacting the salon, especially when comparing multiple local options." />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.08}><div className="rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{item.rating} rating</p><p className="mt-4 text-base leading-8 text-brand-700">{item.summary}</p><p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-900">{item.name}</p></div></Reveal>
        ))}
      </div>
    </div>
  );
}
