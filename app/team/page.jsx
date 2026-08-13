"use client";

import Link from "next/link";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import packageConfig from "../../data/packageConfig";
import { teamMembers } from "../../data/siteContent";

export default function TeamPage() {
  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading eyebrow="Our Team" title="A team page gives the medium package stronger trust and personality" description="Showing specialists, experience, and service strengths helps the site feel more reassuring than a basic salon brochure page." />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {teamMembers.map((member, index) => (
          <Reveal key={member.name} delay={index * 0.08}><div className="rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{member.role}</p><h2 className="mt-4 text-2xl font-semibold text-brand-900">{member.name}</h2><p className="mt-3 text-sm font-medium text-brand-700">{member.experience}</p><p className="mt-4 text-base leading-8 text-brand-700">{member.specialty}</p><Link href={packageConfig.bookingHref} className="mt-6 inline-flex rounded-full border border-brand-200 px-5 py-3 text-sm font-medium text-brand-900 transition hover:border-brand-900">Book Appointment</Link></div></Reveal>
        ))}
      </div>
    </div>
  );
}
