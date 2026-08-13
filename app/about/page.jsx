"use client";

import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import packageConfig from "../../data/packageConfig";
import { contactDetails } from "../../data/siteContent";

export default function AboutPage() {
  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading eyebrow="About Us" title="A salon website structure shaped around trust, comfort, and modern local discovery" description={packageConfig.aboutDescription} />
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Reveal><div className="rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft"><div className="space-y-5 text-base leading-8 text-brand-700">{packageConfig.aboutPoints.map((paragraph) => (<p key={paragraph}>{paragraph}</p>))}</div></div></Reveal>
        <Reveal delay={0.08}><div className="rounded-[2rem] bg-brand-50 p-8"><h2 className="text-2xl font-semibold text-brand-900">Business Details</h2><div className="mt-6 space-y-5 text-brand-700"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Established</p><p className="mt-2 text-base">{contactDetails.founded}</p></div><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Address</p><p className="mt-2 text-base">{contactDetails.address}</p></div><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Positioning</p><p className="mt-2 text-base">{packageConfig.marketPosition}</p></div></div></div></Reveal>
      </div>
    </div>
  );
}
