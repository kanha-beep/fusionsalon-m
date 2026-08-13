"use client";

import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import { buildWhatsappLink, contactDetails } from "../../data/siteContent";

export default function ContactPage() {
  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading eyebrow="Contact Us" title="Send an enquiry, call directly, or start a WhatsApp chat" description="The medium package keeps contact friction low by combining direct calling, WhatsApp, and a simple enquiry form on one page." />
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25, ease: "easeOut" }} className="rounded-[2rem] bg-brand-900 p-8 text-white shadow-soft"><div className="space-y-6"><div><p className="text-sm uppercase tracking-[0.2em] text-white/70">Address</p><p className="mt-2 text-lg leading-8">{contactDetails.address}</p></div><div><p className="text-sm uppercase tracking-[0.2em] text-white/70">Phone</p><a href={`tel:${contactDetails.phoneHref}`} className="mt-2 block text-lg">{contactDetails.phoneDisplay}</a></div><div><p className="text-sm uppercase tracking-[0.2em] text-white/70">Hours</p><div className="mt-2 space-y-2 text-lg">{contactDetails.hours.map((line) => (<p key={line}>{line}</p>))}</div></div><div className="flex flex-wrap gap-3 pt-2"><motion.a href={`tel:${contactDetails.phoneHref}`} whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="rounded-full bg-white px-5 py-3 text-sm font-medium text-brand-900">Call Now</motion.a><motion.a href={buildWhatsappLink()} target="_blank" rel="noreferrer" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white">WhatsApp</motion.a></div></div></motion.div>
        </Reveal>
        <Reveal delay={0.08}><ContactForm /></Reveal>
      </div>
    </div>
  );
}
