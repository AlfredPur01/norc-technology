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
            Production systems
            <br />
            delivered to spec,
            <br />
            on time.
          </h2>
          <p className="text-[14px] text-gray-500 leading-relaxed mt-5 max-w-sm">
            A sample of the high-complexity engineering work our team has
            shipped, with the architecture decisions and outcomes that matter.
          </p>
          {/* Core stack strip */}
          <div className="mt-8">
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">Core technology stack</p>
            <div className="flex flex-wrap gap-2">
              {[
                "React / Next.js", "Node.js", "Python", "Go",
                "AWS", "GCP", "Kubernetes", "PostgreSQL",
                "OpenAI / Claude", "Terraform",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-semibold text-gray-700 bg-gray-100 rounded-md px-2.5 py-1 border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
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
              A SOC 2-compliant, cloud-native platform for financial operations at scale.
            </h3>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-4">
              We architected a zero-downtime migration from a legacy monolith to a
              microservices platform on AWS, serving 200,000+ transactions daily.
              Includes real-time event processing, role-based access control and a
              full audit trail to satisfy compliance requirements.
            </p>
            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {["AWS ECS", "Node.js", "PostgreSQL", "React", "Stripe"].map((t) => (
                <span
                  key={t}
                  className="text-[10.5px] font-semibold text-green-300 bg-green-900/40 border border-green-800/50 rounded-full px-2.5 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
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
