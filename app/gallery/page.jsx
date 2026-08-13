"use client";

import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import { galleryItems } from "../../data/siteContent";

export default function GalleryPage() {
  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading eyebrow="Gallery" title="A visual page that helps customers trust the salon before visiting" description="The medium package uses a gallery page to show service style, ambience, and presentation quality in a way low-package sites often skip." />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {galleryItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}><div className="overflow-hidden rounded-[2rem] border border-brand-100 bg-white shadow-soft"><img src={item.image} alt={item.title} className="h-72 w-full object-cover" /><div className="p-6"><h2 className="text-xl font-semibold text-brand-900">{item.title}</h2><p className="mt-3 text-sm leading-7 text-brand-700">{item.description}</p></div></div></Reveal>
        ))}
      </div>
    </div>
  );
}
