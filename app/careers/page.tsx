"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const values = [
  {
    title: "Senior by default",
    desc: "We work with experienced professionals who take ownership. Junior roles exist on a growth track, never on client-facing delivery.",
  },
  {
    title: "Async-first, outcome-focused",
    desc: "We measure contribution by outcomes, not hours. We trust people to manage their time and deliver on their commitments.",
  },
  {
    title: "Real work, real clients",
    desc: "Every project has a real business context and a real client. We do not do toy projects or internal maintenance work for its own sake.",
  },
  {
    title: "Growth that makes sense",
    desc: "Hiring is tied to signed work. We grow deliberately, not to look impressive. Every role added makes the company stronger.",
  },
];

const roles = [
  {
    id: "sr-fullstack",
    title: "Senior Full-Stack Engineer",
    type: "Contract / Project-based",
    location: "Remote",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    desc: "We are looking for senior full-stack engineers to work on client projects ranging from SaaS platforms to internal tooling. You will work directly with our technical leads and clients, own your delivery and contribute to architecture decisions.",
    requirements: [
      "5 or more years of professional software engineering experience",
      "Strong proficiency in React, TypeScript and Node.js",
      "Experience shipping production web applications",
      "Excellent written communication in English",
      "Comfortable working directly with client stakeholders",
    ],
  },
  {
    id: "ai-engineer",
    title: "AI / ML Engineer",
    type: "Contract / Project-based",
    location: "Remote",
    tags: ["Python", "LLMs", "RAG", "FastAPI"],
    desc: "We are building AI-powered products and workflows for clients across multiple industries. We need engineers who can take an LLM integration from concept to production, including prompt engineering, RAG systems, evaluation and deployment.",
    requirements: [
      "Strong Python engineering skills",
      "Hands-on experience with LLMs in production (OpenAI, Anthropic, open-source)",
      "Familiarity with RAG architectures, vector databases and embedding pipelines",
      "Ability to scope and estimate AI engineering work",
      "Good documentation and communication habits",
    ],
  },
  {
    id: "delivery-lead",
    title: "Technical Delivery Lead",
    type: "Contract / Part-time",
    location: "Remote",
    tags: ["Project Management", "Scoping", "Client Comms"],
    desc: "This is a hybrid technical and delivery role. You will help scope projects, manage milestones, facilitate client communication and ensure our engineers have everything they need to deliver on time. Technical background required.",
    requirements: [
      "Background in software engineering or product management",
      "Experience managing delivery in an agency or consultancy setting",
      "Confident communicator with senior stakeholders",
      "Comfortable writing statements of work, managing milestones and escalating risks",
      "Organised, proactive and calm under pressure",
    ],
  },
];

function RoleCard({ role }: { role: typeof roles[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a5c35] bg-[#e6f9ee] px-2.5 py-1 rounded-full">
              {role.type}
            </span>
            <span className="text-[10px] font-semibold text-gray-500">{role.location}</span>
          </div>
          <h3 className="text-[15px] font-bold text-gray-900 mb-2">{role.title}</h3>
          <div className="flex flex-wrap gap-1.5">
            {role.tags.map((tag) => (
              <span key={tag} className="text-[11px] text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400 shrink-0 mt-1"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-gray-100"
          >
            <div className="px-6 py-6 bg-gray-50 space-y-5">
              <p className="text-[13.5px] text-gray-600 leading-relaxed">{role.desc}</p>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">What we are looking for</p>
                <ul className="space-y-2">
                  {role.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-[13px] text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1a5c35] shrink-0 mt-1.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={`mailto:careers@norctech.io?subject=Application: ${role.title}`}
                className="inline-flex items-center gap-2 bg-[#1a5c35] text-white text-[13px] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#145228] transition-colors"
              >
                Apply for this role
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-[#f0fdf4] py-20 border-b border-green-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-xl">
              <motion.p variants={fadeUp} className="section-label mb-6">Careers</motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-5"
                style={{ fontSize: "clamp(36px, 4.5vw, 54px)" }}
              >
                Build great things
                <br />
                <span className="text-[#1a5c35]">with a serious team.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[15px] text-gray-500 leading-relaxed">
                We are a lean, senior-led engineering practice. Every person we bring on
                has a direct impact on the quality of our work and the experience of our clients.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* How we work */}
        <section className="py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mb-14"
            >
              <p className="section-label mb-5">How We Work</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                What it means to
                <br />
                be part of Norc.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100"
                >
                  <span className="text-[11px] font-bold text-[#1a5c35] tracking-widest block mb-3">0{i + 1}</span>
                  <h3 className="text-[14px] font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open roles */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
            >
              <div>
                <p className="section-label mb-4">Open Roles</p>
                <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                  Current opportunities.
                </h2>
              </div>
              <p className="text-[13px] text-gray-500 max-w-xs">
                All roles are remote and project-based. We hire to signed work.
              </p>
            </motion.div>

            <div className="space-y-4">
              {roles.map((role, i) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <RoleCard role={role} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open application */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0c1810] rounded-3xl px-8 sm:px-14 py-14 text-center"
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-green-400 mb-4">
                Do not see a match?
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Send an open application.
              </h2>
              <p className="text-[14px] text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
                We keep strong profiles on file and reach out when the right project lands.
                If you are exceptional at what you do, we want to know about you.
              </p>
              <motion.a
                href="mailto:careers@norctech.io?subject=Open Application"
                className="inline-flex items-center gap-2 bg-[#1a5c35] text-white text-sm font-semibold px-7 py-3.5 rounded-xl"
                whileHover={{ scale: 1.04, backgroundColor: "#145228" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
              >
                Send open application
              </motion.a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
