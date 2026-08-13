"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import packageConfig from "../../data/packageConfig";
import { services } from "../../data/siteContent";

export default function ServicesPage() {
  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading eyebrow="Services" title="Service information that stays clear, practical, and easy to compare" description="The medium package uses broad category pages instead of many deep service pages, which keeps the website cleaner while still giving customers enough information to act." />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.08}>
            <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.25, ease: "easeOut" }} className="overflow-hidden rounded-[2rem] border border-brand-100 bg-white shadow-soft">
              <img src={service.image} alt={service.title} className="h-64 w-full object-cover" />
              <div className="space-y-4 p-8"><h2 className="text-2xl font-semibold text-brand-900">{service.title}</h2><p className="text-base leading-8 text-brand-700">{service.shortDescription}</p><p className="text-sm leading-7 text-brand-600">{service.fullDescription}</p><Link href={packageConfig.bookingHref} className="inline-flex rounded-full border border-brand-200 px-5 py-3 text-sm font-medium text-brand-900 transition hover:border-brand-900">Book This Service</Link></div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
