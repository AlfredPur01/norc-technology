"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    description: "Understand your goals, challenges, and opportunities.",
  },
  {
    num: "02",
    title: "Design",
    description: "Create strategic solutions and user-centered designs.",
  },
  {
    num: "03",
    title: "Build",
    description: "Develop, test, and iterate with speed and quality.",
  },
  {
    num: "04",
    title: "Scale",
    description: "Deploy, optimize, and support long-term growth.",
  },
];

export function HowWeWork() {
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="section-label mb-5">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              A clear process
              <br />
              for successful outcomes.
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              We combine technical expertise, product thinking, and a
              collaborative approach to deliver solutions that create measurable
              value.
            </p>
          </div>
        </div>

        {/* Steps timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-5 left-0 right-0 h-px bg-gray-200 hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="relative"
              >
                {/* Circle */}
                <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold mb-4 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">{step.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
