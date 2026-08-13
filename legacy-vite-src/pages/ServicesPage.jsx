import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/siteContent";

function ServicesPage() {
  return (
    <div className="space-y-10 pb-10">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="Salon services with images and clear, normal text"
          description="Each service section uses straightforward content so visitors can quickly understand what the salon offers."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.08}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden rounded-[2rem] border border-brand-100 bg-white shadow-soft"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-72 w-full object-cover"
              />
              <div className="space-y-4 p-8">
                <h2 className="text-2xl font-semibold text-brand-900">{service.title}</h2>
                <p className="text-base leading-8 text-brand-700">{service.description}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
