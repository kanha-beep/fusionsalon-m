export const contactDetails = {
  businessName: "Fusion Unisex Salon & Hair Replacement Centre",
  city: "Bhopal",
  address:
    "MF-25, Maansarovar Complex, Near Block C, Zone 2, M P Nagar, Hoshangabad Road, Bhopal - 462011",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsappNumber: "919876543210",
  whatsappMessage:
    "Hello Fusion Unisex Salon, I would like to know more about your services and book an appointment.",
  rating: "4.6",
  reviews: "124+",
  founded: "2011",
  hours: [
    "Monday to Saturday: 9:30 AM to 10:30 PM",
    "Sunday: 10:00 AM to 10:30 PM"
  ]
};

export const services = [
  {
    title: "Hair Care",
    image: "/images/hair-care.svg",
    description:
      "Professional haircuts, hair spa, styling, hair weaving, kids haircuts, and hair patch support for a polished everyday look."
  },
  {
    title: "Skin Care",
    image: "/images/skin-care.svg",
    description:
      "Clean-ups, facials, skin care support, and refreshing treatments delivered in a neat and comfortable salon environment."
  },
  {
    title: "Hair Removal",
    image: "/images/hair-removal.svg",
    description:
      "Waxing and routine grooming services designed for comfort, hygiene, and reliable results."
  },
  {
    title: "Makeup",
    image: "/images/makeup.svg",
    description:
      "Basic makeup and bridal package services for events, family functions, and special celebrations."
  }
];

export const highlights = [
  "Professional unisex salon services in a clean and welcoming setup.",
  "Convenient location on Hoshangabad Road with easy access for local clients.",
  "A trusted salon experience focused on personal care, quality work, and friendly service."
];

export const overviewText = [
  "Fusion Unisex Salon & Hair Replacement Centre in Hoshangabad Road, Bhopal is known for quality salon services, attentive care, and a comfortable client experience.",
  "Whether you are looking for a routine haircut, skin care support, hair removal, or a special occasion makeover, the salon offers a practical range of grooming and beauty services under one roof."
];

export const aboutText = [
  "Established in 2011, Fusion Unisex Salon & Hair Replacement Centre has grown into a familiar name for clients looking for dependable grooming and beauty services in Bhopal.",
  "The salon focuses on simple, professional service with attention to comfort, hygiene, and customer satisfaction. The team works to make each visit smooth, relaxed, and worthwhile."
];

export function buildWhatsappLink() {
  const { whatsappNumber, whatsappMessage } = contactDetails;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}
