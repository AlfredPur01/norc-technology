"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Custom Software Development",
    description: "Web and mobile applications tailored to your business goals.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "AI & Automation Solutions",
    description: "Integrate AI into your workflows to increase efficiency and create new value.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    title: "Product Design & Engineering",
    description: "End-to-end product development from discovery and design to deployment and scale.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    title: "Cloud & Infrastructure",
    description: "Secure, scalable, and cost-efficient cloud solutions for modern businesses.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function Services() {
  return (
    <section id="services" className="py-20 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        <div>
          <p className="section-label mb-5">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            End-to-end technology
            <br />
            solutions for real-world impact.
          </h2>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            From product strategy to engineering and AI integration, we help you
            turn complex ideas into scalable, high-performance solutions.
          </p>
          <a href="#" className="text-sm font-semibold text-gray-900 flex items-center gap-1 hover:gap-2 transition-all">
            View All Services <span>→</span>
          </a>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="group p-6 border border-gray-100 rounded-2xl cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-green-800 flex items-center justify-center mb-4">
              {svc.icon}
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">{svc.title}</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-5">{svc.description}</p>
            <a href="#" className="text-[13px] font-semibold text-gray-900 flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn More <span>→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
