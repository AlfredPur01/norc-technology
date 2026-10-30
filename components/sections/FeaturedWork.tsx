"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FeaturedWork() {
  return (
    <section id="work" className="py-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <p className="section-label mb-5">Featured Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            From complex
            <br />
            challenges to
            <br />
            measurable results.
          </h2>
        </div>

        {/* Right: case study card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[#0c1810] rounded-2xl overflow-hidden text-white relative"
        >
          {/* Image */}
          <div className="relative w-full h-64">
            <Image
              src="/images/featured-work.png"
              alt="Fintech platform case study"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-60"
            />
            {/* Overlay content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="inline-flex items-center gap-2 bg-green-900/70 border border-green-700/50 rounded-full px-3 py-1 w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-[11px] font-semibold text-green-300">Fintech Platform</span>
              </div>
            </div>
          </div>

          <div className="p-7">
            <h3 className="text-xl font-bold text-white mb-2">
              A scalable platform for smarter financial operations.
            </h3>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-5">
              We built a secure, cloud-native platform that helps financial teams
              automate operations and deliver better customer experiences.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-white/20 rounded-lg px-4 py-2 text-[12px] font-semibold text-white hover:bg-white/10 transition-colors"
            >
              View Case Study <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
