"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

/* ─── Services mega-dropdown data ─── */
const servicesColumns = [
  {
    tag: "BUILD",
    tagColor: "text-[#1a5c35] bg-[#e6f9ee]",
    heading: "Custom Software Development",
    description: "Web and mobile applications engineered around your business goals and users.",
    links: [
      { label: "Web Applications", href: "/services/web-applications" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "API Development", href: "/services/api-development" },
      { label: "E-commerce Platforms", href: "/services/ecommerce-platforms" },
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    tag: "AI & INTELLIGENCE",
    tagColor: "text-purple-700 bg-purple-50",
    heading: "AI & Automation Solutions",
    description: "Integrate intelligent systems into your workflows to create new value at scale.",
    links: [
      { label: "AI Chatbots & Agents", href: "/services/ai-chatbots" },
      { label: "Process Automation", href: "/services/process-automation" },
      { label: "Data Analytics", href: "/services/data-analytics" },
      { label: "LLM Integration", href: "/services/llm-integration" },
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
  },
  {
    tag: "SCALE",
    tagColor: "text-blue-700 bg-blue-50",
    heading: "Cloud & Infrastructure",
    description: "Secure, scalable, and cost-efficient cloud solutions built for modern businesses.",
    links: [
      { label: "Cloud Migration", href: "/services/cloud-migration" },
      { label: "DevOps & CI/CD", href: "/services/devops-cicd" },
      { label: "Security & Compliance", href: "/services/security-compliance" },
      { label: "Product Design", href: "/services/product-design" },
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Services", href: "/services", dropdown: true },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    transition: { duration: 0.15 },
  },
};

const colVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const colItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 12);
  });

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 bg-white border-b transition-shadow duration-300 ${
        scrolled ? "border-gray-200 shadow-md" : "border-gray-100/80 shadow-none"
      }`}
      animate={{ backdropFilter: scrolled ? "blur(8px)" : "blur(0px)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Norc Technology"
            width={180}
            height={52}
            className="h-11 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              /* Services trigger */
              <div
                key={link.label}
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <button
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1 cursor-pointer"
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                  <motion.svg
                    className="w-3.5 h-3.5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </motion.svg>
                </button>

                {/* Mega dropdown */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      onMouseEnter={openServices}
                      onMouseLeave={closeServices}
                      className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[780px] bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      {/* Top strip */}
                      <div className="px-6 py-3 border-b border-gray-50 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                          What we do
                        </span>
                        <a
                          href="/services"
                          className="text-[12px] font-semibold text-[#1a5c35] flex items-center gap-1 hover:gap-2 transition-all"
                          onClick={() => setServicesOpen(false)}
                        >
                          View all services →
                        </a>
                      </div>

                      {/* Three columns */}
                      <motion.div
                        variants={colVariants}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-3 divide-x divide-gray-100"
                      >
                        {servicesColumns.map((col) => (
                          <motion.div
                            key={col.tag}
                            variants={colItem}
                            className="p-6 group/col hover:bg-gray-50/60 transition-colors"
                          >
                            {/* Tag */}
                            <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full mb-4 ${col.tagColor}`}>
                              {col.tag}
                            </span>

                            {/* Icon + heading */}
                            <div className="flex items-start gap-3 mb-2">
                              <div className="w-9 h-9 rounded-lg bg-[#1a5c35]/10 flex items-center justify-center shrink-0 text-[#1a5c35]">
                                {col.icon}
                              </div>
                              <h3 className="text-[13px] font-bold text-gray-900 leading-snug mt-1">
                                {col.heading}
                              </h3>
                            </div>

                            {/* Description */}
                            <p className="text-[12px] text-gray-500 leading-relaxed mb-5 pl-12">
                              {col.description}
                            </p>

                            {/* Sub-links */}
                            <ul className="pl-12 space-y-2">
                              {col.links.map((lnk) => (
                                <li key={lnk.label}>
                                  <a
                                    href={lnk.href}
                                    className="text-[12px] text-gray-500 hover:text-[#1a5c35] font-medium flex items-center gap-1.5 transition-colors group/link"
                                    onClick={() => setServicesOpen(false)}
                                  >
                                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover/link:bg-[#1a5c35] transition-colors shrink-0" />
                                    {lnk.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Bottom CTA strip */}
                      <div className="px-6 py-3 bg-[#f0fdf4] border-t border-green-100 flex items-center justify-between">
                        <p className="text-[12px] text-gray-600">
                          Not sure where to start?
                        </p>
                        <a
                          href="/contact"
                          className="text-[12px] font-semibold bg-[#1a5c35] text-white px-4 py-1.5 rounded-lg hover:bg-[#145228] transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          Talk to an Expert →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button aria-label="Search" className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </button>
          <motion.a
            href="#contact"
            className="text-sm font-semibold px-5 py-2 rounded-lg border border-gray-300 text-gray-800"
            whileHover={{ scale: 1.03, backgroundColor: "#f9fafb" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            Talk to an Expert
          </motion.a>
          <motion.a
            href="#start"
            className="text-sm font-semibold px-5 py-2 rounded-lg bg-[#1a5c35] text-white flex items-center gap-1.5"
            whileHover={{ scale: 1.03, backgroundColor: "#145228" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            Start a Project <span className="text-base leading-none">→</span>
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-5 h-0.5 bg-current mb-1.5 origin-center"
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-current mb-1.5"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-current origin-center"
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
                <a href="#contact" className="text-sm font-semibold px-4 py-2.5 rounded-lg border border-gray-300 text-center">
                  Talk to an Expert
                </a>
                <a href="#start" className="text-sm font-semibold px-4 py-2.5 rounded-lg bg-[#1a5c35] text-white text-center">
                  Start a Project →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
