import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { aboutText, contactDetails } from "../data/siteContent";

function AboutPage() {
  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading
          eyebrow="About Us"
          title="A salon built around dependable care and a welcoming client experience"
          description="This page keeps the message professional and easy to read, with the important business details clearly presented."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft"
          >
            <div className="space-y-5 text-base leading-8 text-brand-700">
              {aboutText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.08}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-[2rem] bg-brand-50 p-8"
          >
            <h2 className="text-2xl font-semibold text-brand-900">Business Details</h2>
            <div className="mt-6 space-y-5 text-brand-700">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  Established
                </p>
                <p className="mt-2 text-base">{contactDetails.founded}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  Address
                </p>
                <p className="mt-2 text-base">{contactDetails.address}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                  Opening Hours
                </p>
                <div className="mt-2 space-y-2">
                  {contactDetails.hours.map((line) => (
                    <p key={line} className="text-base">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
}

export default AboutPage;
