import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { buildWhatsappLink, contactDetails } from "../data/siteContent";

const initialForm = {
  name: "",
  phone: "",
  service: "",
  message: ""
};

const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await axios.post(`${apiBaseUrl}/api/contact`, formData);

      setStatus({
        type: "success",
        message: "Your message has been sent successfully."
      });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          error.message ||
          "Unable to send your message right now."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading
          eyebrow="Contact Us"
          title="Send an enquiry, call directly, or start a WhatsApp chat"
          description="The form is connected to the backend, and the action buttons redirect visitors straight to mobile calling and WhatsApp."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-[2rem] bg-brand-900 p-8 text-white shadow-soft"
          >
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">Address</p>
                <p className="mt-2 text-lg leading-8">{contactDetails.address}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">Phone</p>
                <a href={`tel:${contactDetails.phoneHref}`} className="mt-2 block text-lg">
                  {contactDetails.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">Hours</p>
                <div className="mt-2 space-y-2 text-lg">
                  {contactDetails.hours.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <motion.a
                  href={`tel:${contactDetails.phoneHref}`}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full bg-white px-5 py-3 text-sm font-medium text-brand-900"
                >
                  Call Now
                </motion.a>
                <motion.a
                  href={buildWhatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white"
                >
                  WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.08}>
          <motion.form
            onSubmit={handleSubmit}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-brand-900">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-brand-200 px-4 py-3 outline-none transition focus:border-brand-900"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-brand-900">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-brand-200 px-4 py-3 outline-none transition focus:border-brand-900"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-medium text-brand-900">Service</span>
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleChange}
                placeholder="Hair care, makeup, skin care..."
                className="w-full rounded-2xl border border-brand-200 px-4 py-3 outline-none transition focus:border-brand-900"
              />
            </label>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-medium text-brand-900">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full rounded-2xl border border-brand-200 px-4 py-3 outline-none transition focus:border-brand-900"
              />
            </label>

            {status.message ? (
              <p
                className={`mt-5 rounded-2xl px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {status.message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 rounded-full bg-brand-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </Reveal>
      </div>
    </div>
  );
}

export default ContactPage;
