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

const serviceTypes = [
  { id: "custom", label: "Custom Software", icon: "⚡", desc: "Web app, mobile app, SaaS platform or internal tool" },
  { id: "ai",     label: "AI and Automation", icon: "🤖", desc: "AI assistants, automation workflows, LLM integration" },
  { id: "discovery", label: "Technical Discovery", icon: "🔍", desc: "Architecture, feasibility and roadmap first" },
  { id: "support", label: "Ongoing Support", icon: "🔄", desc: "Retainer-based engineering for an existing product" },
];

const budgets = [
  "US$2,500 to US$5,000 (Discovery sprint)",
  "US$5,000 to US$15,000",
  "US$15,000 to US$50,000",
  "US$50,000 to US$100,000",
  "US$100,000 or more",
  "Not yet defined",
];

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1 to 3 months",
  "3 to 6 months",
  "Flexible / not yet defined",
];

const STEPS = ["Project type", "Details", "Review"];

export default function StartPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: "",
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const canAdvance = () => {
    if (step === 0) return !!form.service;
    if (step === 1) return !!form.name && !!form.email && !!form.budget && !!form.description;
    return true;
  };

  const next = () => { if (canAdvance()) setStep((s) => Math.min(s + 1, 2)); };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-[#f0fdf4] py-16 border-b border-green-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-xl">
              <motion.p variants={fadeUp} className="section-label mb-5">Start a Project</motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4"
                style={{ fontSize: "clamp(34px, 4vw, 50px)" }}
              >
                Let&apos;s build something
                <span className="text-[#1a5c35]"> that matters.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[15px] text-gray-500 leading-relaxed">
                Answer a few quick questions and we will come back to you within one business day
                with a clear proposal for how to move forward.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Multi-step form */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-6">

            {/* Step indicator */}
            {!submitted && (
              <div className="flex items-center gap-2 mb-10">
                {STEPS.map((label, i) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-colors ${
                      i < step ? "bg-[#1a5c35] text-white" : i === step ? "bg-[#1a5c35] text-white" : "bg-gray-100 text-gray-400"
                    }`}>
                      {i < step ? (
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      ) : i + 1}
                    </div>
                    <span className={`text-[12px] font-medium ${i === step ? "text-gray-900" : "text-gray-400"}`}>{label}</span>
                    {i < STEPS.length - 1 && <span className="w-8 h-px bg-gray-200 mx-1" />}
                  </div>
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl bg-[#f0fdf4] border border-green-200 p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-[#1a5c35] flex items-center justify-center mx-auto mb-6"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </motion.div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Project brief received</h2>
                  <p className="text-[14px] text-gray-500 max-w-xs mx-auto leading-relaxed">
                    We will review your details and respond within one business day with a clear next step.
                  </p>
                </motion.div>

              ) : step === 0 ? (
                <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">What kind of project is this?</h2>
                  <p className="text-[13px] text-gray-500 mb-7">Select the option that best describes what you need.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {serviceTypes.map((s) => (
                      <motion.button
                        key={s.id}
                        onClick={() => setForm({ ...form, service: s.id })}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`text-left p-5 rounded-2xl border-2 transition-all ${
                          form.service === s.id
                            ? "border-[#1a5c35] bg-[#f0fdf4]"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <span className="text-2xl mb-3 block">{s.icon}</span>
                        <p className="text-[14px] font-bold text-gray-900 mb-1">{s.label}</p>
                        <p className="text-[12px] text-gray-500">{s.desc}</p>
                      </motion.button>
                    ))}
                  </div>
                  <motion.button
                    onClick={next}
                    disabled={!canAdvance()}
                    whileHover={canAdvance() ? { scale: 1.02 } : {}}
                    whileTap={canAdvance() ? { scale: 0.98 } : {}}
                    className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-colors ${
                      canAdvance() ? "bg-[#1a5c35] text-white hover:bg-[#145228]" : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Continue
                  </motion.button>
                </motion.div>

              ) : step === 1 ? (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Tell us about the project</h2>
                  <p className="text-[13px] text-gray-500 mb-7">The more context you share, the better prepared we will be for our first conversation.</p>
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Full name <span className="text-red-500">*</span></label>
                        <input
                          type="text" required value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Jane Smith"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#1a5c35] focus:ring-2 focus:ring-[#1a5c35]/10 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Work email <span className="text-red-500">*</span></label>
                        <input
                          type="email" required value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#1a5c35] focus:ring-2 focus:ring-[#1a5c35]/10 transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Company (optional)</label>
                      <input
                        type="text" value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Acme Inc."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#1a5c35] focus:ring-2 focus:ring-[#1a5c35]/10 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Estimated budget <span className="text-red-500">*</span></label>
                      <select
                        required value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#1a5c35] focus:ring-2 focus:ring-[#1a5c35]/10 transition bg-white"
                      >
                        <option value="">Select a range...</option>
                        {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Preferred timeline</label>
                      <select
                        value={form.timeline}
                        onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#1a5c35] focus:ring-2 focus:ring-[#1a5c35]/10 transition bg-white"
                      >
                        <option value="">Select a timeline...</option>
                        {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">Project description <span className="text-red-500">*</span></label>
                      <textarea
                        required rows={5} value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        placeholder="Describe the problem you are solving, the users you are building for, and what success looks like."
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-[#1a5c35] focus:ring-2 focus:ring-[#1a5c35]/10 transition resize-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-7">
                    <button onClick={back} className="px-5 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                      Back
                    </button>
                    <motion.button
                      onClick={next} disabled={!canAdvance()}
                      whileHover={canAdvance() ? { scale: 1.02 } : {}}
                      className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-colors ${canAdvance() ? "bg-[#1a5c35] text-white hover:bg-[#145228]" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
                    >
                      Review submission
                    </motion.button>
                  </div>
                </motion.div>

              ) : (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Review your submission</h2>
                  <p className="text-[13px] text-gray-500 mb-7">Check everything looks right before submitting.</p>
                  <div className="rounded-2xl border border-gray-200 divide-y divide-gray-100 mb-7">
                    {[
                      { label: "Project type", value: serviceTypes.find((s) => s.id === form.service)?.label },
                      { label: "Name", value: form.name },
                      { label: "Email", value: form.email },
                      { label: "Company", value: form.company || "Not provided" },
                      { label: "Budget", value: form.budget },
                      { label: "Timeline", value: form.timeline || "Not specified" },
                      { label: "Description", value: form.description },
                    ].map((row) => (
                      <div key={row.label} className="grid grid-cols-3 gap-4 px-5 py-4">
                        <p className="text-[12px] font-semibold text-gray-500 col-span-1">{row.label}</p>
                        <p className="text-[13px] text-gray-900 col-span-2 leading-relaxed">{row.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button onClick={back} className="px-5 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                      Edit
                    </button>
                    <motion.button
                      onClick={() => setSubmitted(true)}
                      whileHover={{ scale: 1.02, backgroundColor: "#145228" }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 py-3 rounded-xl bg-[#1a5c35] text-white text-sm font-semibold"
                    >
                      Submit project brief
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
