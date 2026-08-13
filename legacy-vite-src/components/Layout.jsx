import { motion } from "framer-motion";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { buildWhatsappLink, contactDetails } from "../data/siteContent";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" }
];

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.31.56 3.57.56a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.3 22 2 13.7 2 3a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1c0 1.26.19 2.45.56 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.57 0 .28 5.3.28 11.8c0 2.08.55 4.12 1.58 5.9L0 24l6.5-1.7a11.87 11.87 0 0 0 5.57 1.42h.01c6.5 0 11.8-5.3 11.8-11.8 0-3.15-1.23-6.11-3.36-8.44Zm-8.45 18.23h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.86 1.01 1.03-3.77-.24-.39a9.82 9.82 0 0 1-1.5-5.18c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.98 2.9a9.81 9.81 0 0 1 2.9 6.98c0 5.45-4.44 9.89-9.89 9.89Zm5.43-7.42c-.3-.15-1.75-.87-2.03-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47a8.95 8.95 0 0 1-1.66-2.07c-.17-.3-.02-.46.12-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.57-.49-.49-.66-.49h-.56c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.1c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.75-.72 2-1.42.25-.69.25-1.28.18-1.42-.08-.14-.28-.22-.58-.37Z" />
    </svg>
  );
}

function Layout() {
  const location = useLocation();
  const whatsappLink = buildWhatsappLink();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(184,138,68,0.14),transparent_28%),linear-gradient(to_bottom,rgba(245,247,247,0.92),rgba(255,255,255,1)_15%)]">
      <motion.header
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="sticky top-0 z-40 border-b border-brand-100/80 bg-white/90 backdrop-blur"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="max-w-xs">
            <p className="text-lg font-semibold text-brand-900 sm:text-xl">
              {contactDetails.businessName}
            </p>
            <p className="text-sm text-brand-600">{contactDetails.city}</p>
          </NavLink>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive ? "text-brand-900" : "text-brand-600 hover:text-brand-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <a
            href={`tel:${contactDetails.phoneHref}`}
            className="hidden rounded-full bg-brand-900 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-700 md:inline-flex"
          >
            Call Now
          </a>
        </div>
        <div className="flex gap-4 overflow-x-auto border-t border-brand-100 px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap text-sm font-medium transition ${
                  isActive ? "text-brand-900" : "text-brand-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </motion.header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="border-t border-brand-100 bg-white"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-brand-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-medium text-brand-900">{contactDetails.businessName}</p>
            <p>{contactDetails.address}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${contactDetails.phoneHref}`}
              className="rounded-full border border-brand-200 px-4 py-2 font-medium text-brand-900 transition duration-300 hover:-translate-y-0.5 hover:border-brand-900"
            >
              {contactDetails.phoneDisplay}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#25D366] px-4 py-2 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </motion.footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <motion.a
          href={`tel:${contactDetails.phoneHref}`}
          aria-label="Call now"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.35, ease: "easeOut" }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-900 text-white shadow-soft"
        >
          <PhoneIcon />
        </motion.a>
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.35, ease: "easeOut" }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft"
        >
          <WhatsAppIcon />
        </motion.a>
      </div>
    </div>
  );
}

export default Layout;
