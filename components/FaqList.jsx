"use client";

import { useState } from "react";

export default function FaqList({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <button
            key={item.question}
            type="button"
            onClick={() => setOpenIndex(isOpen ? -1 : index)}
            className="w-full rounded-[1.75rem] border border-brand-100 bg-white p-6 text-left shadow-soft"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-brand-900">{item.question}</h3>
              <span className="text-2xl text-accent">{isOpen ? "−" : "+"}</span>
            </div>
            {isOpen ? <p className="mt-4 text-base leading-8 text-brand-700">{item.answer}</p> : null}
          </button>
        );
      })}
    </div>
  );
}
