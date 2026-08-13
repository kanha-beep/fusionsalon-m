"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal, { fadeUp, staggerContainer } from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import packageConfig from "../data/packageConfig";
import {
  buildWhatsappLink,
  contactDetails,
  galleryItems,
  highlights,
  services,
  teamMembers,
  testimonials,
  trustPoints
} from "../data/siteContent";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-10">
      <motion.section variants={staggerContainer} initial="hidden" animate="visible" className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <Reveal className="space-y-6">
          <p className="inline-flex rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-700 shadow-soft">{packageConfig.marketPosition}</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl lg:text-6xl">{packageConfig.heroTitle}</h1>
          <p className="max-w-2xl text-lg leading-8 text-brand-700">{packageConfig.heroDescription}</p>
          <div className="flex flex-wrap gap-4">
            <motion.a href={buildWhatsappLink(packageConfig.whatsappPrompt)} target="_blank" rel="noreferrer" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="rounded-full bg-brand-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-700">Book on WhatsApp</motion.a>
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href={packageConfig.bookingHref} className="rounded-full border border-brand-200 px-6 py-3 text-sm font-medium text-brand-900 transition hover:border-brand-900">Book Appointment</Link>
            </motion.div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <motion.div whileHover={{ y: -6, rotate: -0.5 }} transition={{ duration: 0.25, ease: "easeOut" }} className="rounded-[2rem] border border-brand-100 bg-white p-6 shadow-soft">
            <div className="rounded-[1.5rem] bg-brand-50 p-6">
              <img src={packageConfig.heroImage} alt="Salon service illustration" className="h-72 w-full rounded-[1.25rem] object-cover" />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-brand-100 p-4"><p className="text-sm text-brand-600">Rating</p><p className="mt-2 text-2xl font-semibold text-brand-900">{contactDetails.rating} / 5</p></div>
              <div className="rounded-2xl border border-brand-100 p-4"><p className="text-sm text-brand-600">Reviews</p><p className="mt-2 text-2xl font-semibold text-brand-900">{contactDetails.reviews}</p></div>
              <div className="rounded-2xl border border-brand-100 p-4"><p className="text-sm text-brand-600">Package</p><p className="mt-2 text-2xl font-semibold text-brand-900">{packageConfig.pageCount} pages</p></div>
            </div>
          </motion.div>
        </Reveal>
      </motion.section>
      <Reveal>
        <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-6 rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft lg:grid-cols-3">
          {highlights.map((item) => (
            <motion.div key={item} variants={fadeUp} whileHover={{ y: -4 }} className="rounded-2xl bg-brand-50 p-6"><p className="text-base leading-7 text-brand-700">{item}</p></motion.div>
          ))}
        </motion.section>
      </Reveal>
      <section className="space-y-8">
        <Reveal><SectionHeading eyebrow="Why Choose Us" title="A medium package homepage should answer trust questions fast" description="These trust points mirror what salon customers usually want before they decide to call, message, or book from mobile." /></Reveal>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{trustPoints.map((point, index) => (<Reveal key={point} delay={index * 0.08}><div className="rounded-[1.75rem] border border-brand-100 bg-white p-6 shadow-soft"><p className="text-lg font-semibold text-brand-900">0{index + 1}</p><p className="mt-3 text-sm leading-7 text-brand-700">{point}</p></div></Reveal>))}</div>
      </section>
      <section className="space-y-8">
        <Reveal><SectionHeading eyebrow="Popular Services" title="Core service categories visitors expect to see immediately" description="The medium package keeps services easy to scan, with enough variety to feel complete without overwhelming the visitor." /></Reveal>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{services.slice(0, 4).map((service, index) => (<Reveal key={service.slug} delay={index * 0.08}><div className="overflow-hidden rounded-[1.75rem] border border-brand-100 bg-white shadow-soft"><img src={service.image} alt={service.title} className="h-52 w-full object-cover" /><div className="p-6"><h3 className="text-xl font-semibold text-brand-900">{service.title}</h3><p className="mt-3 text-sm leading-7 text-brand-700">{service.shortDescription}</p></div></div></Reveal>))}</div>
      </section>
      <section className="space-y-8">
        <Reveal><SectionHeading eyebrow="Offers & Packages" title="Promotions help the medium package feel more premium than a basic salon site" description="Instead of showing only standard services, the medium package also gives room for campaign offers and repeat-booking incentives." /></Reveal>
        <div className="grid gap-6 md:grid-cols-3">{packageConfig.offerHighlights.map((offer, index) => (<Reveal key={offer.title} delay={index * 0.08}><div className="rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Package {index + 1}</p><h3 className="mt-4 text-2xl font-semibold text-brand-900">{offer.title}</h3><p className="mt-4 text-sm leading-7 text-brand-700">{offer.description}</p></div></Reveal>))}</div>
      </section>
      <section className="space-y-8">
        <Reveal><SectionHeading eyebrow="Gallery Preview" title="Visual proof matters because salon decisions are highly presentation-led" description="A medium package should show polished visual blocks so the website feels trustworthy even before a customer visits the full gallery page." /></Reveal>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{galleryItems.map((item, index) => (<Reveal key={item.title} delay={index * 0.08}><div className="overflow-hidden rounded-[1.75rem] border border-brand-100 bg-white shadow-soft"><img src={item.image} alt={item.title} className="h-48 w-full object-cover" /><div className="p-5"><h3 className="text-lg font-semibold text-brand-900">{item.title}</h3><p className="mt-2 text-sm leading-7 text-brand-700">{item.description}</p></div></div></Reveal>))}</div>
      </section>
      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Reveal><div className="rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft"><SectionHeading eyebrow="Meet Our Experts" title="The team page is one of the clearest upgrades over a low package website" description="Showing real people, specialties, and experience helps the salon feel more established and easier to trust." /><div className="mt-8 space-y-4">{teamMembers.slice(0, 3).map((member) => (<div key={member.name} className="rounded-2xl bg-brand-50 p-5"><p className="font-semibold text-brand-900">{member.name}</p><p className="mt-1 text-sm text-brand-700">{member.role} • {member.experience}</p><p className="mt-2 text-sm leading-7 text-brand-700">{member.specialty}</p></div>))}</div></div></Reveal>
        <Reveal delay={0.08}><div className="rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft"><SectionHeading eyebrow="Client Reviews" title="Review proof helps close the gap between browsing and booking" description="This section previews testimonials so new visitors can see quick trust signals before they reach the full review page." /><div className="mt-8 space-y-4">{testimonials.map((item) => (<div key={item.name} className="rounded-2xl bg-brand-50 p-5"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{item.rating} rating</p><p className="mt-3 text-sm leading-7 text-brand-700">{item.summary}</p><p className="mt-3 font-semibold text-brand-900">{item.name}</p></div>))}</div></div></Reveal>
      </section>
      <Reveal><section className="rounded-[2rem] bg-brand-900 px-8 py-10 text-white shadow-soft"><div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"><div className="max-w-2xl"><p className="text-sm uppercase tracking-[0.2em] text-white/70">Book Appointment</p><h2 className="mt-3 text-3xl font-semibold">Ready for your next salon visit?</h2><p className="mt-3 text-sm leading-7 text-white/80">Choose services, compare pricing, review the team, and then book directly from the site or on WhatsApp.</p></div><div className="flex flex-wrap gap-3"><Link href={packageConfig.bookingHref} className="rounded-full bg-white px-6 py-3 text-sm font-medium text-brand-900 transition hover:-translate-y-0.5">Open Booking Page</Link><a href={buildWhatsappLink(packageConfig.whatsappPrompt)} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">Chat on WhatsApp</a></div></div></section></Reveal>
      <section className="space-y-8">
        <Reveal><SectionHeading eyebrow="Contact Preview" title="Make location and contact details easy to find" description="Salon websites convert better when the address, hours, and direct contact actions are visible without extra searching." /></Reveal>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"><Reveal><div className="rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft"><div className="space-y-4 text-brand-700"><p className="font-semibold text-brand-900">{contactDetails.address}</p><p>{contactDetails.phoneDisplay}</p><div>{contactDetails.hours.map((line) => (<p key={line}>{line}</p>))}</div></div></div></Reveal><Reveal delay={0.08}><div className="rounded-[2rem] border border-brand-100 bg-brand-50 p-8"><h3 className="text-2xl font-semibold text-brand-900">Medium Package Scope</h3><div className="mt-6 flex flex-wrap gap-3">{packageConfig.pageLabels.map((page) => (<span key={page} className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-brand-700">{page}</span>))}</div></div></Reveal></div>
      </section>
    </div>
  );
}
