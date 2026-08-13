import "./globals.css";
import LayoutShell from "../components/LayoutShell";
import { contactDetails } from "../data/siteContent";
import packageConfig from "../data/packageConfig";

export const metadata = {
  title: {
    default: `${contactDetails.businessName} | ${packageConfig.packageLabel}`,
    template: `%s | ${contactDetails.businessName}`
  },
  description: packageConfig.metaDescription
};

function LocalBusinessSchema() {
  if (!packageConfig.localSeo) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: contactDetails.businessName,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactDetails.address,
      addressLocality: contactDetails.city,
      addressCountry: "IN"
    },
    telephone: contactDetails.phoneDisplay,
    image: "/images/hair-care.svg",
    priceRange: packageConfig.priceRange,
    areaServed: "Bhopal",
    url: "https://example.com"
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessSchema />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
