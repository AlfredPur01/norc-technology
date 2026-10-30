"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/* ─── Shared animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ─── Data ─── */
const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Engineering Excellence",
    description:
      "Senior technical involvement at every stage, from architecture to delivery. We do not hand off to juniors after the sale.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    title: "Transparent Partnership",
    description:
      "Clear scoping, honest timelines, regular demos and proactive communication. No surprises mid-project.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Secure by Default",
    description:
      "Code review, automated testing, security controls and formal change management are built into every engagement.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Measurable Outcomes",
    description:
      "Our success is tied to yours. We orient every project around business outcomes, not just deliverables.",
  },
];

const services = [
  {
    label: "Custom Software & SaaS",
    desc: "Web platforms, internal tools, integrations and scalable applications built for growth.",
  },
  {
    label: "Applied AI Engineering",
    desc: "AI-powered workflows, assistants, document intelligence and operational integrations.",
  },
  {
    label: "Technical Discovery",
    desc: "Requirements definition, feasibility analysis, implementation roadmaps and engineering advisory.",
  },
  {
    label: "Ongoing Engineering Support",
    desc: "Maintenance, optimization and defined-capacity retainers that keep your product healthy after launch.",
  },
];

const engagements = [
  {
    step: "01",
    title: "Paid Discovery Sprint",
    price: "From US$2,500",
    description:
      "A focused engagement to define requirements, assess feasibility and produce a clear implementation roadmap. No ambiguity before we build.",
    color: "bg-[#f0fdf4]",
    border: "border-green-200",
  },
  {
    step: "02",
    title: "Fixed-Scope Implementation",
    price: "US$15,000 – $50,000+",
    description:
      "Custom software and SaaS projects scoped to your exact needs, delivered through milestone payments and regular demonstrations.",
    color: "bg-white",
    border: "border-gray-200",
  },
  {
    step: "03",
    title: "AI Engagements",
    price: "US$10,000 – $75,000+",
    description:
      "End-to-end AI engineering: from workflow automation and intelligent assistants to document intelligence and production integrations.",
    color: "bg-white",
    border: "border-gray-200",
  },
  {
    step: "04",
    title: "Ongoing Retainer Support",
    price: "Monthly / defined capacity",
    description:
      "Post-launch engineering capacity for maintenance, feature additions and optimization, structured to scale with your needs.",
    color: "bg-[#0c1810]",
    border: "border-green-900",
    dark: true,
  },
];

const stats = [
  { value: "50+",  label: "Clients worldwide" },
  { value: "200+", label: "Projects delivered" },
  { value: "98%",  label: "Client satisfaction" },
  { value: "5+",   label: "Years of experience" },
];

const team = [
  {
    name: "James Harrington",
    role: "Founder and CEO",
    bio: "Operator and strategist with a background in enterprise software and digital transformation. James founded Norc to close the gap between technical craft and commercial outcome.",
    initials: "JH",
    accent: "bg-[#1a5c35] text-white",
  },
  {
    name: "Ade Williams",
    role: "Chief Technology Officer",
    bio: "Full-stack engineer with 12 years across SaaS, fintech and logistics platforms. Ade sets engineering standards, leads architecture decisions and ensures senior involvement on every build.",
    initials: "AW",
    accent: "bg-[#0e1a11] text-white",
  },
  {
    name: "Priya Nair",
    role: "Head of Product and Design",
    bio: "Product designer and researcher who has shipped software used by millions. Priya leads user experience strategy and ensures our products are as intuitive as they are robust.",
    initials: "PN",
    accent: "bg-purple-700 text-white",
  },
  {
    name: "Callum Foster",
    role: "Lead Engineer",
    bio: "Backend and infrastructure specialist focused on performance, security and reliability. Callum oversees DevOps practices, cloud architecture and technical delivery quality.",
    initials: "CF",
    accent: "bg-blue-700 text-white",
  },
  {
    name: "Sarah Chen",
    role: "AI and Automation Engineer",
    bio: "Machine learning and LLM integration specialist. Sarah leads AI engineering engagements, from chatbot systems and RAG pipelines to end-to-end process automation.",
    initials: "SC",
    accent: "bg-[#1a5c35] text-white",
  },
  {
    name: "Marcus Osei",
    role: "Head of Client Success",
    bio: "Client relationship and delivery manager with a background in management consulting. Marcus ensures projects land on time, stay on scope and generate measurable outcomes.",
    initials: "MO",
    accent: "bg-[#0e1a11] text-white",
  },
];

/* ─── Page ─── */
export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>

        {/* ══════════════════════════════════
            HERO
        ══════════════════════════════════ */}
        <section className="bg-[#f0fdf4] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px] gap-10">

              {/* Left - staggered text */}
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="flex flex-col justify-center py-16"
              >
                <motion.p variants={fadeUp} className="section-label mb-6">
                  About Norc Technology
                </motion.p>
                <motion.h1
                  variants={fadeUp}
                  className="font-extrabold leading-[1.05] tracking-tight text-gray-900 mb-6"
                  style={{ fontSize: "clamp(38px, 4.5vw, 58px)" }}
                >
                  A premium engineering
                  <br />
                  partner for the world&apos;s
                  <br />
                  <span className="text-[#1a5c35]">most ambitious teams.</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  className="text-[15px] text-gray-500 leading-relaxed max-w-[430px] mb-8"
                >
                  Norc Technology is an international software development and
                  AI engineering agency. We help organisations in the United States,
                  United Kingdom, Canada and beyond design, build, integrate and
                  maintain dependable digital products.
                </motion.p>
                {/* Playful floating badges */}
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                  {["AI-Powered", "98% Satisfaction", "50+ Clients", "Senior Engineers"].map((badge, i) => (
                    <motion.span
                      key={badge}
                      className="inline-flex items-center gap-1.5 text-[12px] font-semibold bg-white border border-green-200 text-[#1a5c35] rounded-full px-3 py-1.5 shadow-sm"
                      initial={{ opacity: 0, scale: 0.7, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.5 + i * 0.1 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-[#1a5c35] inline-block"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                      />
                      {badge}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right - image with floating cards */}
              <div className="relative h-[340px] sm:h-[420px] lg:h-auto">

                {/* Decorative mint card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="absolute top-[10%] left-[12%] right-0 bottom-[4%] bg-[#c4f0d4] rounded-3xl z-0"
                />

                {/* Hero image */}
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.85, delay: 0.15 }}
                  className="absolute top-[3%] left-0 right-[18%] bottom-[4%] rounded-2xl overflow-hidden z-10"
                >
                  <Image
                    src="/images/hero.png"
                    alt="Norc Technology team"
                    fill
                    sizes="(max-width: 1024px) 80vw, 40vw"
                    className="object-cover object-center"
                    priority
                  />
                </motion.div>

                {/* Floating badge - top right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.8 }}
                  className="absolute top-[8%] right-[2%] z-20"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white rounded-2xl shadow-xl p-3 w-[140px]"
                  >
                    <p className="text-[10px] font-bold text-[#1a5c35] uppercase tracking-widest mb-1">Premium Partner</p>
                    <p className="text-[12px] font-semibold text-gray-800 leading-snug">Senior engineers on every project</p>
                  </motion.div>
                </motion.div>

                {/* Floating badge - bottom left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: 8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 1.0 }}
                  className="hidden sm:block absolute bottom-[10%] left-[2%] z-20"
                >
                  <motion.div
                    animate={{ y: [0, 7, 0], rotate: [0, -1.5, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="bg-[#0e1a11] rounded-2xl shadow-2xl px-4 py-3 w-[180px]"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <motion.span
                        className="w-2 h-2 rounded-full bg-green-400 inline-block"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-[10px] text-gray-400 font-medium">Global reach</span>
                    </div>
                    <p className="text-[12px] font-bold text-white">US · UK · Canada</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">and beyond</p>
                  </motion.div>
                </motion.div>

                {/* Dot grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="hidden lg:block absolute top-4 right-0 w-28 h-24 pointer-events-none z-0"
                  style={{
                    backgroundImage: "radial-gradient(circle, #4ade80 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100"
              >
                {stats.map((s) => (
                  <motion.div
                    key={s.label}
                    variants={fadeUp}
                    className="py-8 px-6 first:pl-0"
                  >
                    <p className="text-[34px] font-extrabold text-gray-900 leading-none mb-1">{s.value}</p>
                    <p className="text-[13px] text-gray-500">{s.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            WHO WE ARE
        ══════════════════════════════════ */}
        <section className="py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                <p className="section-label mb-5">Who We Are</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  Engineering expertise
                  <br />
                  with commercial clarity.
                </h2>
                <div className="space-y-4 text-[15px] text-gray-500 leading-relaxed">
                  <p>
                    Norc Technology was founded on a simple belief: great software
                    should be the result of deep engineering practice combined with
                    a genuine understanding of business context. Too many agencies
                    deliver working code that does not actually move the business forward.
                    We are determined to do both.
                  </p>
                  <p>
                    We operate as a globally oriented technology partner, working
                    with startups and established companies that need specialist
                    engineering capacity: whether to launch a product, modernize
                    existing systems, or introduce AI-powered workflows.
                  </p>
                  <p>
                    Our positioning is premium and value-led. We are not the lowest-cost
                    option, and we do not pretend to be. We compete on senior technical
                    involvement, disciplined delivery and a track record of measurable
                    client outcomes.
                  </p>
                </div>
              </motion.div>

              {/* Right - image */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="relative rounded-3xl overflow-hidden bg-[#c4f0d4] aspect-[4/3]"
              >
                <Image
                  src="/images/why-norc.png"
                  alt="Norc Technology team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Overlay card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
                  <p className="text-[11px] font-bold text-[#1a5c35] uppercase tracking-widest mb-1">
                    Our mission
                  </p>
                  <p className="text-[14px] font-semibold text-gray-900 leading-snug">
                    To become the most trusted engineering partner for companies
                    building high-stakes digital products.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            CORE VALUES
        ══════════════════════════════════ */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mb-14"
            >
              <p className="section-label mb-5">What We Stand For</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Principles that govern
                <br />
                every project we take on.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(0,0,0,0.07)" }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1a5c35]/10 text-[#1a5c35] flex items-center justify-center mb-4">
                    {v.icon}
                  </div>
                  <h3 className="text-[14px] font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            SERVICES OVERVIEW
        ══════════════════════════════════ */}
        <section className="py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                className="sticky top-24"
              >
                <p className="section-label mb-5">What We Do</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  Four service lines.
                  <br />
                  One standard of delivery.
                </h2>
                <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
                  From product strategy to production AI, every service we offer
                  is underpinned by the same engineering rigour and commercial
                  accountability.
                </p>
                <motion.a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-[#1a5c35] text-white text-sm font-semibold px-6 py-3 rounded-lg"
                  whileHover={{ scale: 1.04, backgroundColor: "#145228" }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                >
                  Explore all services →
                </motion.a>
              </motion.div>

              {/* Right */}
              <div className="space-y-4">
                {services.map((svc, i) => (
                  <motion.div
                    key={svc.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white group hover:border-green-200 hover:bg-[#f0fdf4] transition-colors"
                  >
                    <span className="text-[11px] font-bold text-[#1a5c35] bg-[#e6f9ee] rounded-full px-2.5 py-1 shrink-0 mt-0.5">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-[14px] font-bold text-gray-900 mb-1">{svc.label}</h3>
                      <p className="text-[13px] text-gray-500 leading-relaxed">{svc.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            HOW WE ENGAGE
        ══════════════════════════════════ */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
            >
              <div>
                <p className="section-label mb-5">How We Engage</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Four ways to
                  <br />
                  work with Norc.
                </h2>
              </div>
              <p className="text-[13px] text-gray-500 max-w-xs leading-relaxed">
                All pricing is a commercial hypothesis. Final figures follow
                technical discovery, effort estimates and risk assessment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {engagements.map((eng, i) => (
                <motion.div
                  key={eng.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl border p-6 flex flex-col gap-4 cursor-default ${eng.color} ${eng.border}`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-bold tracking-widest ${
                        eng.dark ? "text-green-400" : "text-[#1a5c35]"
                      }`}
                    >
                      {eng.step}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                        eng.dark
                          ? "text-green-300 bg-green-900/40"
                          : "text-[#1a5c35] bg-[#e6f9ee]"
                      }`}
                    >
                      {eng.price}
                    </span>
                  </div>
                  <div>
                    <h3
                      className={`text-[15px] font-bold mb-2 ${
                        eng.dark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {eng.title}
                    </h3>
                    <p
                      className={`text-[13px] leading-relaxed ${
                        eng.dark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {eng.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            STRATEGIC VISION
        ══════════════════════════════════ */}
        <section className="py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

              {/* Left - dark card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-[#0c1810] rounded-3xl p-10 text-white"
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-green-400 mb-6">
                  Our Long-Term Vision
                </p>
                <h2 className="text-3xl font-bold leading-tight mb-6">
                  A respected international
                  engineering practice.
                </h2>
                <div className="space-y-4 text-[14px] text-gray-400 leading-relaxed">
                  <p>
                    Our long-term ambition is to build a genuinely respected
                    international engineering practice, with repeatable client
                    acquisition, dependable delivery, and recurring support revenue.
                  </p>
                  <p>
                    As we grow, we will pursue local representation and corporate
                    presence in the markets we serve, on a timeline driven by
                    commercial justification rather than aspiration.
                  </p>
                  <p>
                    We are also exploring proprietary software products that
                    leverage the IP and workflows developed through client work,
                    without distracting from our core agency model.
                  </p>
                </div>
              </motion.div>

              {/* Right - milestones */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 }}
              >
                <p className="section-label mb-5">Near-Term Milestones</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-8">
                  The first 90 days,
                  <br />
                  and beyond.
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      period: "Days 1–30",
                      text: "Finalize governance and roles. Launch a professional website, capability deck and verified proof assets.",
                    },
                    {
                      period: "Days 31–60",
                      text: "Conduct buyer interviews. Build a qualified prospect list. Begin targeted outreach, content distribution and referral development.",
                    },
                    {
                      period: "Days 61–90",
                      text: "Convert opportunities into paid discovery or implementation contracts. Execute with documented quality controls. Capture client feedback.",
                    },
                    {
                      period: "Year 1 goal",
                      text: "Win and deliver a first significant international contract, creating a credible reference and a repeatable delivery process.",
                      highlight: true,
                    },
                  ].map((m, i) => (
                    <motion.div
                      key={m.period}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.1 }}
                      className={`flex gap-4 ${m.highlight ? "p-5 rounded-2xl bg-[#f0fdf4] border border-green-200" : ""}`}
                    >
                      <div className="flex flex-col items-center gap-1 shrink-0 pt-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#1a5c35] shrink-0" />
                        {i < 3 && <span className="w-px flex-1 bg-gray-200 min-h-[32px]" />}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-[#1a5c35] uppercase tracking-widest mb-1">
                          {m.period}
                        </p>
                        <p className="text-[14px] text-gray-600 leading-relaxed">{m.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            THE PEOPLE
        ══════════════════════════════════ */}
        <section className="py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">

            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
            >
              <div>
                <p className="section-label mb-5">The People</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  Minds that make
                  <br />
                  it happen.
                </h2>
              </div>
              <p className="text-[14px] text-gray-500 max-w-xs leading-relaxed">
                A small, senior team where every person on a project is someone
                who has done this before and does it exceptionally well.
              </p>
            </motion.div>

            {/* Team grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,0,0,0.07)" }}
                  className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4 cursor-default"
                >
                  {/* Avatar + name row */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-[16px] font-bold shrink-0 ${member.accent}`}
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    >
                      {member.initials}
                    </motion.div>
                    <div>
                      <p className="text-[14px] font-bold text-gray-900 leading-tight">{member.name}</p>
                      <p className="text-[12px] text-[#1a5c35] font-semibold mt-0.5">{member.role}</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-[13px] text-gray-500 leading-relaxed">{member.bio}</p>

                  {/* Decorative bottom strip */}
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-1.5">
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-[#1a5c35] inline-block"
                      animate={{ scale: [1, 1.6, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                    />
                    <span className="text-[11px] text-gray-400 font-medium">Norc Technology</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footnote */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center text-[13px] text-gray-400 mt-10"
            >
              Our team grows through referral and reputation, not job boards.{" "}
              <a href="/careers" className="text-[#1a5c35] font-semibold hover:underline">
                See open roles
              </a>
            </motion.p>
          </div>
        </section>

        {/* ══════════════════════════════════
            CTA
        ══════════════════════════════════ */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative bg-[#0c1810] rounded-3xl overflow-hidden px-8 sm:px-14 py-16 text-white text-center"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 max-w-xl mx-auto">
                <p className="text-[11px] font-bold uppercase tracking-widest text-green-400 mb-4">
                  Work with us
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  Ready to build something
                  that matters?
                </h2>
                <p className="text-[14px] text-gray-400 leading-relaxed mb-8">
                  Start with a paid discovery sprint. We&apos;ll define the scope,
                  surface the risks and hand you a clear roadmap, whether we
                  build it together or not.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <motion.a
                    href="#start"
                    className="flex items-center gap-1.5 bg-[#1a5c35] text-white text-sm font-semibold px-6 py-3 rounded-lg"
                    whileHover={{ scale: 1.04, backgroundColor: "#145228" }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  >
                    Start a Project →
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="flex items-center gap-1.5 border border-white/25 bg-white/5 text-white text-sm font-semibold px-6 py-3 rounded-lg"
                    whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,0.45)" }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  >
                    Talk to an Expert
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
