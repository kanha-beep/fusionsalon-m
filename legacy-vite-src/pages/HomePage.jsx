import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal, { fadeUp, staggerContainer } from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import {
  contactDetails,
  highlights,
  overviewText,
  services
} from "../data/siteContent";

function HomePage() {
  return (
    <div className="space-y-20 pb-10">
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
      >
        <Reveal className="space-y-6">
          <p className="inline-flex rounded-full border border-brand-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-700 shadow-soft">
            Premium salon care in Bhopal
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl lg:text-6xl">
            Clean, professional grooming and beauty services with a calm white-theme experience.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-brand-700">
            {overviewText[0]} We offer hair care, skin care, hair removal, and makeup services for clients who want reliable results and a welcoming atmosphere.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href={`tel:${contactDetails.phoneHref}`}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-brand-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-700"
            >
              Call Now
            </motion.a>
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
              to="/contact"
              className="rounded-full border border-brand-200 px-6 py-3 text-sm font-medium text-brand-900 transition hover:border-brand-900"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div
            whileHover={{ y: -6, rotate: -0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-[2rem] border border-brand-100 bg-white p-6 shadow-soft"
          >
            <div className="rounded-[1.5rem] bg-brand-50 p-6">
              <img
                src="/images/hair-care.svg"
                alt="Salon service illustration"
                className="h-72 w-full rounded-[1.25rem] object-cover"
              />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-brand-100 p-4">
                <p className="text-sm text-brand-600">Rating</p>
                <p className="mt-2 text-2xl font-semibold text-brand-900">
                  {contactDetails.rating} / 5
                </p>
              </div>
              <div className="rounded-2xl border border-brand-100 p-4">
                <p className="text-sm text-brand-600">Experience</p>
                <p className="mt-2 text-2xl font-semibold text-brand-900">
                  Since {contactDetails.founded}
                </p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </motion.section>

      <Reveal>
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft lg:grid-cols-3"
        >
          {highlights.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-brand-50 p-6"
            >
              <p className="text-base leading-7 text-brand-700">{item}</p>
            </motion.div>
          ))}
        </motion.section>
      </Reveal>

      <section className="space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Overview"
            title="Simple salon content presented in a polished, modern layout"
            description={overviewText[1]}
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden rounded-[1.75rem] border border-brand-100 bg-white shadow-soft"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-52 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-700">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="rounded-[2rem] bg-brand-900 px-8 py-10 text-white shadow-soft">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">Visit or call</p>
              <h2 className="mt-3 text-3xl font-semibold">
                Professional service, helpful staff, and a comfortable salon environment.
              </h2>
            </div>
            <div className="space-y-2 text-sm text-white/80">
              <p>{contactDetails.address}</p>
              {contactDetails.hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

export default HomePage;
