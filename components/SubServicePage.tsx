"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export interface SubServiceData {
  tag: string;
  tagColor: string;
  parentService: string;
  parentHref: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  whoFor: { title: string; desc: string }[];
  approach: { step: string; title: string; desc: string }[];
  price: string;
  priceNote: string;
  pricingTiers?: { name: string; range: string; timeline?: string; desc: string }[];
  pricingCaveats?: string[];
  relatedServices: { title: string; href: string }[];
}

export default function SubServicePage({ data }: { data: SubServiceData }) {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-[#f0fdf4] py-16 lg:py-20 border-b border-green-100">
          <div className="max-w-7xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-8">
              <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-gray-600 transition-colors">Services</Link>
              <span>/</span>
              <Link href={data.parentHref} className="hover:text-gray-600 transition-colors">{data.parentService}</Link>
              <span>/</span>
              <span className="text-gray-600">{data.title}</span>
            </nav>

            <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-2xl">
              <motion.span
                variants={fadeUp}
                className={`inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-5 ${data.tagColor}`}
              >
                {data.tag}
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-5"
                style={{ fontSize: "clamp(34px, 4.5vw, 54px)" }}
              >
                {data.title}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[16px] text-[#1a5c35] font-semibold mb-4 leading-snug">
                {data.tagline}
              </motion.p>
              <motion.p variants={fadeUp} className="text-[15px] text-gray-500 leading-relaxed mb-8">
                {data.description}
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

        {/* Deliverables + Who it's for */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

              {/* Deliverables */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="section-label mb-6">What is included</p>
                <ul className="space-y-3">
                  {data.deliverables.map((d, i) => (
                    <motion.li
                      key={d}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="flex items-start gap-3 text-[14px] text-gray-700 py-3 border-b border-gray-100 last:border-0"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#1a5c35]/10 text-[#1a5c35] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      {d}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Who it's for */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="section-label mb-6">Who this is for</p>
                <div className="space-y-4">
                  {data.whoFor.map((w, i) => (
                    <motion.div
                      key={w.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.1 }}
                      whileHover={{ y: -3 }}
                      className="p-5 rounded-2xl border border-gray-100 bg-white group hover:border-green-200 hover:bg-[#f0fdf4] transition-colors"
                    >
                      <h3 className="text-[14px] font-bold text-gray-900 mb-1">{w.title}</h3>
                      <p className="text-[13px] text-gray-500 leading-relaxed">{w.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our approach */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mb-12"
            >
              <p className="section-label mb-5">Our Approach</p>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                How we deliver this service.
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.approach.map((a, i) => (
                <motion.div
                  key={a.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100"
                >
                  <span className="text-[11px] font-bold text-[#1a5c35] tracking-widest block mb-3">{a.step}</span>
                  <h3 className="text-[14px] font-bold text-gray-900 mb-2">{a.title}</h3>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing tiers (optional) */}
        {data.pricingTiers && (
          <section className="py-16 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-xl mb-12"
              >
                <p className="section-label mb-5">Investment</p>
                <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                  What does it cost?
                </h2>
                <p className="text-[14px] text-gray-500 mt-3 leading-relaxed">
                  Agency rates in the US, UK and Canada run {data.price.replace("From ", "")} and above depending on complexity.
                  Here is how projects break down by scope.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                {data.pricingTiers.map((tier, i) => (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className={`bg-white rounded-2xl p-6 border ${i === 1 ? "border-[#1a5c35] ring-1 ring-[#1a5c35]/20" : "border-gray-100"}`}
                  >
                    {i === 1 && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-white bg-[#1a5c35] px-2.5 py-0.5 rounded-full mb-3">
                        Most common
                      </span>
                    )}
                    <h3 className="text-[14px] font-bold text-gray-900 mb-1">{tier.name}</h3>
                    <p className="text-[22px] font-extrabold text-[#1a5c35] leading-tight mb-1">{tier.range}</p>
                    {tier.timeline && (
                      <p className="text-[12px] text-gray-400 mb-3">{tier.timeline}</p>
                    )}
                    <p className="text-[13px] text-gray-500 leading-relaxed">{tier.desc}</p>
                  </motion.div>
                ))}
              </div>

              {data.pricingCaveats && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-gray-100 rounded-2xl p-6"
                >
                  <p className="text-[12px] font-bold uppercase tracking-widest text-gray-400 mb-4">Key cost factors to know</p>
                  <ul className="space-y-3">
                    {data.pricingCaveats.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13.5px] text-gray-600 leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">!</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </section>
        )}

        {/* Pricing note + related */}
        <section className="py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

              {/* Pricing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#f0fdf4] rounded-3xl p-8 border border-green-200"
              >
                <p className="section-label mb-4">Starting point</p>
                <p className="text-3xl font-extrabold text-[#1a5c35] mb-3">{data.price}</p>
                <p className="text-[13.5px] text-gray-500 leading-relaxed mb-6">{data.priceNote}</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/start"
                    className="bg-[#1a5c35] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#145228] transition-colors"
                  >
                    Get a quote
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-gray-300 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-white transition-colors"
                  >
                    Ask a question
                  </Link>
                </div>
              </motion.div>

              {/* Related services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="section-label mb-6">Related services</p>
                <div className="space-y-3">
                  {data.relatedServices.map((r) => (
                    <Link
                      key={r.title}
                      href={r.href}
                      className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-[#f0fdf4] transition-colors group"
                    >
                      <span className="text-[14px] font-semibold text-gray-800 group-hover:text-[#1a5c35] transition-colors">{r.title}</span>
                      <span className="text-gray-400 group-hover:text-[#1a5c35] transition-colors">→</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0c1810] rounded-3xl px-8 sm:px-14 py-14 text-center"
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-green-400 mb-4">Ready to start?</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Let us scope this together.
              </h2>
              <p className="text-[14px] text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
                Start with a paid discovery sprint. We will define the scope, surface the risks
                and hand you a clear roadmap before any build commitment.
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
