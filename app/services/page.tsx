"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const services = [
  {
    id: "custom-software",
    tag: "BUILD",
    tagColor: "text-[#1a5c35] bg-[#e6f9ee]",
    number: "01",
    title: "Custom Software and SaaS Engineering",
    summary: "Web platforms, internal tools, integrations and scalable applications built around your exact business goals.",
    description: "We design and engineer software that fits the way your business actually works. From customer-facing web products to internal operations tools, API integrations and multi-tenant SaaS platforms, every engagement starts with a clear understanding of your users, your workflows and your growth ambitions.",
    deliverables: [
      "Web application development (React, Next.js, Vue)",
      "Mobile application development (iOS, Android, React Native)",
      "SaaS platform architecture and engineering",
      "Internal tools and operations dashboards",
      "API design, development and third-party integrations",
      "E-commerce platforms and marketplace products",
    ],
    price: "From US$15,000",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    accent: "bg-[#f0fdf4]",
  },
  {
    id: "ai-automation",
    tag: "AI",
    tagColor: "text-purple-700 bg-purple-50",
    number: "02",
    title: "Applied AI Engineering and Automation",
    summary: "AI-powered workflows, intelligent assistants, document intelligence and operational integrations that create measurable business value.",
    description: "We build practical AI systems grounded in your real operational context, not proof-of-concept demos. Whether you need an intelligent assistant embedded in your product, automated document processing, or a complete AI-powered workflow layer, we scope, build and integrate it with the same engineering rigour we apply to all our software work.",
    deliverables: [
      "AI-powered chatbots and conversational assistants",
      "Large language model (LLM) integration and fine-tuning",
      "Document intelligence and automated data extraction",
      "Workflow automation with AI decision layers",
      "Retrieval-augmented generation (RAG) systems",
      "AI analytics and prediction pipelines",
    ],
    price: "From US$10,000",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    accent: "bg-purple-50/40",
  },
  {
    id: "technical-discovery",
    tag: "DISCOVER",
    tagColor: "text-orange-700 bg-orange-50",
    number: "03",
    title: "Technical Discovery and Architecture",
    summary: "Requirements definition, feasibility analysis, implementation roadmaps and engineering advisory before you commit to building.",
    description: "Before writing a single line of production code, we help you get the foundations right. Our discovery sprints surface the real requirements, validate technical feasibility, identify risks early and produce a clear implementation roadmap with effort estimates. Clients who complete discovery with us go into build with confidence.",
    deliverables: [
      "Stakeholder workshops and requirements definition",
      "Technical feasibility and risk assessment",
      "System architecture design and documentation",
      "Implementation roadmap with phased milestones",
      "Vendor and technology evaluation",
      "Engineering advisory and code review",
    ],
    price: "US$2,500 to US$5,000",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    accent: "bg-orange-50/40",
  },
  {
    id: "engineering-support",
    tag: "SUPPORT",
    tagColor: "text-blue-700 bg-blue-50",
    number: "04",
    title: "Ongoing Engineering Support",
    summary: "Post-launch maintenance, optimization and defined-capacity retainers that keep your product healthy and evolving.",
    description: "Shipping is the beginning, not the end. We offer structured post-launch support through defined monthly retainers, giving you access to a reliable engineering team without the overhead of hiring. We handle bug fixes, performance improvements, security updates, new feature delivery and anything else your product needs to stay competitive.",
    deliverables: [
      "Bug fixes and performance optimization",
      "Security patches and dependency updates",
      "Feature additions and iterative improvements",
      "Infrastructure monitoring and scaling",
      "Monthly reporting and priority planning",
      "Defined response SLAs and capacity commitments",
    ],
    price: "Monthly retainer",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    accent: "bg-blue-50/30",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We define scope, surface risks and produce a clear roadmap." },
  { step: "02", title: "Design", desc: "Architecture, UX and system design signed off before build begins." },
  { step: "03", title: "Build", desc: "Milestone-based delivery with regular demonstrations and code review." },
  { step: "04", title: "Launch", desc: "Tested, secured and deployed with formal handover documentation." },
  { step: "05", title: "Support", desc: "Ongoing retainer for maintenance, updates and new features." },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-[#f0fdf4] py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl">
              <motion.p variants={fadeUp} className="section-label mb-6">Our Services</motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-6"
                style={{ fontSize: "clamp(38px, 4.5vw, 56px)" }}
              >
                End-to-end technology
                <br />
                <span className="text-[#1a5c35]">solutions for real-world impact.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[15px] text-gray-500 leading-relaxed mb-8">
                From product strategy to engineering and AI integration, we help ambitious organisations
                turn complex ideas into scalable, high-performance digital products.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Link
                  href="/start"
                  className="inline-flex items-center gap-2 bg-[#1a5c35] text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#145228] transition-colors"
                >
                  Start a Project
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-gray-300 text-gray-800 text-sm font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Talk to an Expert
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Service cards */}
        <section className="py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 space-y-8">
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                id={svc.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className={`rounded-3xl border border-gray-100 overflow-hidden ${svc.accent}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left */}
                  <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200/60">
                    <div className="flex items-start justify-between mb-5">
                      <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${svc.tagColor}`}>
                        {svc.tag}
                      </span>
                      <span className="text-[11px] font-bold text-gray-400 tracking-widest">{svc.number}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#1a5c35]/10 text-[#1a5c35] flex items-center justify-center mb-5">
                      {svc.icon}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{svc.title}</h2>
                    <p className="text-[14px] text-gray-500 leading-relaxed mb-6">{svc.description}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        href="/start"
                        className="inline-flex items-center gap-1.5 bg-[#1a5c35] text-white text-[13px] font-semibold px-4 py-2 rounded-lg hover:bg-[#145228] transition-colors"
                      >
                        Start with this service
                      </Link>
                      <span className="text-[12px] font-semibold text-[#1a5c35] bg-[#e6f9ee] px-3 py-1.5 rounded-full">
                        {svc.price}
                      </span>
                    </div>
                  </div>

                  {/* Right - deliverables */}
                  <div className="p-8 lg:p-10">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-5">What is included</p>
                    <ul className="space-y-3">
                      {svc.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-[13.5px] text-gray-700">
                          <span className="w-5 h-5 rounded-full bg-[#1a5c35]/10 text-[#1a5c35] flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Delivery process */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mb-14"
            >
              <p className="section-label mb-5">How We Deliver</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                A proven process,
                <br />
                applied to every project.
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100"
                >
                  <span className="text-[11px] font-bold text-[#1a5c35] tracking-widest block mb-3">{p.step}</span>
                  <h3 className="text-[14px] font-bold text-gray-900 mb-1.5">{p.title}</h3>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0c1810] rounded-3xl px-8 sm:px-14 py-14 text-center"
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-green-400 mb-4">Ready to build?</p>
              <h2 className="text-3xl font-bold text-white mb-4">Not sure which service you need?</h2>
              <p className="text-[14px] text-gray-400 max-w-md mx-auto mb-8">
                Start with a discovery sprint. We will scope the right approach for your goals in a focused, time-boxed engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/start" className="bg-[#1a5c35] text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#145228] transition-colors">
                  Start a Project
                </Link>
                <Link href="/contact" className="border border-white/25 bg-white/5 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:border-white/45 transition-colors">
                  Talk to an Expert
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
