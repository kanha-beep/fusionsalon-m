import Link from "next/link";
import { notFound } from "next/navigation";
import SectionHeading from "../../../components/SectionHeading";
import packageConfig from "../../../data/packageConfig";
import { buildWhatsappLink, getServiceBySlug } from "../../../data/siteContent";

export function generateStaticParams() {
  return packageConfig.serviceDetailPages.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetailPage({ params }) {
  const serviceConfig = packageConfig.serviceDetailPages.find(
    (service) => service.slug === params.slug
  );

  if (!serviceConfig) {
    notFound();
  }

  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-10 pb-10">
      <SectionHeading
        eyebrow={service.title}
        title={serviceConfig.title}
        description={serviceConfig.description}
      />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-[2rem] border border-brand-100 bg-white shadow-soft">
          <img src={service.image} alt={service.title} className="h-80 w-full object-cover" />
          <div className="space-y-5 p-8 text-base leading-8 text-brand-700">
            <p>{service.fullDescription}</p>
            {serviceConfig.points.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-brand-100 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-brand-900">Why this page exists</h2>
            <p className="mt-4 text-base leading-8 text-brand-700">
              {serviceConfig.whyItMatters}
            </p>
          </div>
          <div className="rounded-[2rem] bg-brand-900 p-8 text-white shadow-soft">
            <h2 className="text-2xl font-semibold">Ready to enquire?</h2>
            <p className="mt-4 text-base leading-8 text-white/80">
              These detailed pages are included only where the package needs stronger SEO and trust signals before contact.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={buildWhatsappLink(`Hello Fusion Salon, I want to know more about ${service.title}.`)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-brand-900"
              >
                WhatsApp Now
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
