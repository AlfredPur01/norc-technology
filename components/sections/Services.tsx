"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Legacy Migration and API Infrastructure",
    description: "Modernise aging codebases, architect production-grade REST and GraphQL APIs, and migrate to modern stacks without downtime.",
    href: "/services/api-development",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "Applied AI and Intelligent Automation",
    description: "LLM integrations, RAG systems, autonomous agents and process automation that plug into your existing infrastructure.",
    href: "/services/ai-chatbots",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Enterprise Product Design and System Architecture",
    description: "Systems architecture for complex workflows, multi-sided platforms and high-volume applications, designed to scale from day one.",
    href: "/services/product-design",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Security, DevSecOps and Compliance Engineering",
    description: "SOC 2 readiness, security-hardened CI/CD pipelines, penetration testing and cloud infrastructure built to modern compliance standards.",
    href: "/services/security-compliance",
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
          <p className="section-label mb-5">Core Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Specialist domains.
            <br />
            Not a generalist menu.
          </h2>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            We focus on four high-complexity areas where senior engineering
            depth makes a measurable difference to outcome, security and
            long-term maintainability.
          </p>
          <a href="/services" className="text-sm font-semibold text-gray-900 flex items-center gap-1 hover:gap-2 transition-all">
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
            <a href={svc.href} className="text-[13px] font-semibold text-gray-900 flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn More <span>→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
