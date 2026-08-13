"use client";

import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import { buildWhatsappLink, bookingSteps, contactDetails } from "../../data/siteContent";

export default function BookAppointmentPage() {
  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading eyebrow="Book Appointment" title="A dedicated booking page is one of the biggest upgrades in the medium package" description="It gives visitors a clear action page instead of forcing them to find a phone number or ask basic questions before sharing their booking intent." />
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25, ease: "easeOut" }} className="rounded-[2rem] bg-brand-50 p-8"><h2 className="text-2xl font-semibold text-brand-900">How Booking Works</h2><div className="mt-6 space-y-4">{bookingSteps.map((step, index) => (<div key={step} className="rounded-2xl border border-brand-100 bg-white p-5 shadow-soft"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Step {index + 1}</p><p className="mt-3 text-sm leading-7 text-brand-700">{step}</p></div>))}</div><div className="mt-8 rounded-2xl bg-brand-900 p-6 text-white"><p className="text-sm uppercase tracking-[0.2em] text-white/70">Direct Contact</p><p className="mt-3 text-lg">{contactDetails.phoneDisplay}</p><a href={buildWhatsappLink("Hello Fusion Salon, I want to book an appointment.")} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-brand-900">Start WhatsApp Booking</a></div></motion.div>
        </Reveal>
        <Reveal delay={0.08}><ContactForm /></Reveal>
      </div>
    </div>
  );
}
