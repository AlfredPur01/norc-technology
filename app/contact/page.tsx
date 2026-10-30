"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const expertiseOptions = [
  "Custom Software Development",
  "AI and Automation",
  "Cloud and Infrastructure",
  "Technical Discovery",
  "Ongoing Engineering Support",
  "Not sure yet",
];

const reasons = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "Senior engineers only",
    desc: "You speak directly with the people building your product, not an account manager.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Response within 24 hours",
    desc: "We respond to every qualified inquiry within one business day, no exceptions.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    title: "No pressure, no pitch",
    desc: "Our first call is about understanding your needs. We only propose work that makes sense.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", expertise: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-[#f0fdf4] py-20 lg:py-24 border-b border-green-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl">
              <motion.p variants={fadeUp} className="section-label mb-6">Talk to an Expert</motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-5"
                style={{ fontSize: "clamp(36px, 4.5vw, 54px)" }}
              >
                Tell us what you are
                <br />
                <span className="text-[#1a5c35]">trying to build.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[15px] text-gray-500 leading-relaxed">
                Whether you have a clear brief or just an early idea, our team is happy to
                listen, ask the right questions and help you figure out the best next step.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Form + sidebar */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

              {/* Sidebar */}
              <div className="order-2 lg:order-1 space-y-8">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-5">Why talk to us</p>
                  <div className="space-y-6">
                    {reasons.map((r) => (
                      <motion.div
                        key={r.title}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#1a5c35]/10 text-[#1a5c35] flex items-center justify-center shrink-0">
                          {r.icon}
                        </div>
                        <div>
                          <p className="text-[13px] font-bold text-gray-900 mb-0.5">{r.title}</p>
                          <p className="text-[12.5px] text-gray-500 leading-relaxed">{r.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-[#0c1810] p-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-green-400 mb-3">Prefer email?</p>
                  <p className="text-[13px] text-gray-400 mb-4 leading-relaxed">
                    You can also reach us directly at any time.
                  </p>
                  <a
                    href="mailto:hello@norctech.io"
                    className="text-[13px] font-semibold text-white hover:text-green-300 transition-colors"
                  >
                    hello@norctech.io
                  </a>
                </div>
              </div>

              {/* Form */}
              <div className="order-1 lg:order-2 lg:col-span-2">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-3xl bg-[#f0fdf4] border border-green-200 p-12 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#1a5c35] flex items-center justify-center mx-auto mb-5">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Message received</h2>
                    <p className="text-[14px] text-gray-500 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. A member of our team will be in touch within one business day.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Full name <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Jane Smith"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1a5c35] focus:ring-2 focus:ring-[#1a5c35]/10 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Work email <span className="text-red-500">*</span></label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1a5c35] focus:ring-2 focus:ring-[#1a5c35]/10 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Company / Organisation</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Acme Inc."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1a5c35] focus:ring-2 focus:ring-[#1a5c35]/10 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Area of interest <span className="text-red-500">*</span></label>
                      <select
                        required
                        value={form.expertise}
                        onChange={(e) => setForm({ ...form, expertise: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 focus:outline-none focus:border-[#1a5c35] focus:ring-2 focus:ring-[#1a5c35]/10 transition bg-white"
                      >
                        <option value="">Select a service area...</option>
                        {expertiseOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Tell us about what you need <span className="text-red-500">*</span></label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Describe your project, challenge or question. The more context you share, the better we can prepare for our first conversation."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#1a5c35] focus:ring-2 focus:ring-[#1a5c35]/10 transition resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full sm:w-auto bg-[#1a5c35] text-white text-sm font-semibold px-8 py-3.5 rounded-xl"
                      whileHover={{ scale: 1.03, backgroundColor: "#145228" }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 380, damping: 22 }}
                    >
                      Send message
                    </motion.button>

                    <p className="text-[11.5px] text-gray-400">
                      We respond to every qualified inquiry within one business day.
                    </p>
                  </motion.form>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
