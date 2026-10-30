"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CTABanner() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-[#0c1810] rounded-3xl overflow-hidden px-8 sm:px-14 py-16 text-white"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/cta.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
                Ready to build what&apos;s next?
              </h2>
              <p className="text-[14px] text-gray-400 leading-relaxed">
                Let&apos;s discuss how Norc Technology can help you turn your ideas
                into impactful digital products and AI solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <motion.a
                href="#start"
                className="flex items-center gap-1.5 bg-[#1a5c35] text-white text-sm font-semibold px-5 py-2.5 rounded-lg whitespace-nowrap"
                whileHover={{ scale: 1.04, backgroundColor: "#145228" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
              >
                Start a Project <span>→</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="flex items-center gap-1.5 border border-white/25 bg-white/5 text-white text-sm font-semibold px-5 py-2.5 rounded-lg whitespace-nowrap"
                whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,0.5)", backgroundColor: "rgba(255,255,255,0.1)" }}
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
  );
}
