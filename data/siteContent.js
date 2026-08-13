export const contactDetails = {
  businessName: "Fusion Unisex Salon & Hair Replacement Centre",
  city: "Bhopal",
  address:
    "MF-25, Maansarovar Complex, Near Block C, Zone 2, M P Nagar, Hoshangabad Road, Bhopal - 462011",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsappNumber: "919876543210",
  whatsappMessage:
    "Hello Fusion Unisex Salon, I would like to book an appointment and know more about your services.",
  rating: "4.6",
  reviews: "124+",
  founded: "2011",
  hours: [
    "Monday to Saturday: 9:30 AM to 10:30 PM",
    "Sunday: 10:00 AM to 10:30 PM"
  ],
  mapLabel: "Hoshangabad Road, Bhopal"
};

export const services = [
  {
    slug: "hair",
    title: "Hair Care",
    image: "/images/hair-care.svg",
    shortDescription:
      "Haircuts, styling, hair spa, smoothening support, and practical grooming care.",
    fullDescription:
      "A medium package salon site needs a clear hair section because this is often the first category customers compare before they book."
  },
  {
    slug: "skin",
    title: "Skin Care",
    image: "/images/skin-care.svg",
    shortDescription:
      "Clean-ups, facials, glow-focused treatments, and skin consultation support.",
    fullDescription:
      "Skin service visitors usually want trust and quick clarity, so this category benefits from strong presentation and visible booking paths."
  },
  {
    slug: "makeup",
    title: "Makeup",
    image: "/images/makeup.svg",
    shortDescription:
      "Party makeup, event styling, and occasion looks prepared with a polished finish.",
    fullDescription:
      "Makeup categories help the website speak to higher-intent users who may be booking for a celebration or event."
  },
  {
    slug: "nails",
    title: "Nail Studio",
    image: "/images/hair-removal.svg",
    shortDescription:
      "Basic nail care, finishing, cleanup, and style support for everyday or occasion prep.",
    fullDescription:
      "A nail services block makes the medium package feel more complete and easier to browse as a full beauty destination."
  },
  {
    slug: "bridal",
    title: "Bridal Styling",
    image: "/images/makeup.svg",
    shortDescription:
      "Bridal makeup, pre-function grooming, and beauty planning for wedding events.",
    fullDescription:
      "Bridal services are a reliable salon website conversion pattern, so this category deserves clear visibility in a medium package."
  }
];

export const highlights = [
  "Mobile-first layout designed for users who discover the salon on search, Instagram, or WhatsApp and want quick booking options.",
  "Clear service, pricing, and team sections inspired by current salon website expectations instead of a simple brochure layout.",
  "Trust-building review and gallery content that helps first-time visitors feel confident before they call or message."
];

export const trustPoints = [
  "Experienced stylists and beauty professionals",
  "Clean, comfortable, and client-friendly salon environment",
  "Clear service categories and pricing guidance",
  "Quick booking through phone, form, or WhatsApp"
];

export const galleryItems = [
  {
    title: "Hair Styling Corner",
    image: "/images/hair-care.svg",
    description: "Popular cuts, styling finishes, and grooming presentation."
  },
  {
    title: "Skin Glow Session",
    image: "/images/skin-care.svg",
    description: "Facial and skincare moments that highlight salon comfort and care."
  },
  {
    title: "Bridal Makeup Setup",
    image: "/images/makeup.svg",
    description: "Occasion-ready work that supports trust for higher-intent bookings."
  },
  {
    title: "Salon Ambience",
    image: "/images/hair-removal.svg",
    description: "Interior and service-space visuals that help new visitors feel familiar."
  }
];

export const teamMembers = [
  {
    name: "Aarti Sharma",
    role: "Senior Hair Stylist",
    experience: "8+ years",
    specialty: "Cuts, smoothening, and event styling"
  },
  {
    name: "Neha Verma",
    role: "Skin Care Expert",
    experience: "6+ years",
    specialty: "Facials, glow routines, and client consultation"
  },
  {
    name: "Rohit Khan",
    role: "Grooming Specialist",
    experience: "7+ years",
    specialty: "Men's styling, finishing, and practical grooming care"
  },
  {
    name: "Priya Soni",
    role: "Makeup Artist",
    experience: "5+ years",
    specialty: "Party makeup, bridal looks, and occasion prep"
  }
];

export const testimonials = [
  {
    name: "Riya S.",
    summary: "Fast booking response and a very clean salon experience.",
    rating: "5.0"
  },
  {
    name: "Ankit P.",
    summary: "Good consultation before service and helpful staff throughout.",
    rating: "4.8"
  },
  {
    name: "Neha T.",
    summary: "Bridal support felt organised, calm, and worth recommending.",
    rating: "5.0"
  }
];

export const bookingSteps = [
  "Choose the service or package you are interested in.",
  "Share your preferred date, time, and staff preference if any.",
  "Receive a confirmation call or WhatsApp response from the salon team."
];

export const faqItems = [
  {
    question: "How can I book an appointment?",
    answer:
      "Customers can call directly, send a WhatsApp message, or use the enquiry form on the booking and contact pages."
  },
  {
    question: "Do you handle bridal or special occasion bookings?",
    answer:
      "Yes. Bridal and event-related services can be discussed in advance so timing, service mix, and preparation are clear."
  },
  {
    question: "Can I ask for pricing before visiting?",
    answer:
      "Yes. The pricing and offers pages are designed to answer common package questions before a visitor contacts the salon."
  }
];

export function buildWhatsappLink(message = contactDetails.whatsappMessage) {
  return `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
