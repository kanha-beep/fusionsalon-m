"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  service: "",
  message: ""
};

export default function ContactForm({ compact = false }) {
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Unable to send your message right now.");
      }

      setStatus({
        type: "success",
        message: "Your message has been sent successfully."
      });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to send your message right now."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={
        "rounded-[2rem] border border-brand-100 bg-white shadow-soft " +
        (compact ? "p-6" : "p-8")
      }
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
          placeholder="Hair care, makeup, bridal, skin care..."
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
          className={
            "mt-5 rounded-2xl px-4 py-3 text-sm " +
            (status.type === "success"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700")
          }
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
    </form>
  );
}
