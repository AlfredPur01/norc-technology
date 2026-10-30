"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

/* ─── Count-up stat ─── */
function StatCounter({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, {
      duration: 1.8,
      delay,
      ease: "easeOut",
    });
    return controls.stop;
  }, [isInView, count, value, delay]);

  return (
    <div ref={ref}>
      <p className="text-[32px] font-extrabold text-gray-900 leading-none mb-1">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </p>
      <p className="text-[13px] text-gray-500">{label}</p>
    </div>
  );
}

const stats = [
  { value: 50,  suffix: "+", label: "Clients worldwide" },
  { value: 200, suffix: "+", label: "Projects delivered" },
  { value: 98,  suffix: "%", label: "Client satisfaction" },
  { value: 5,   suffix: "+", label: "Years of experience" },
];

/* ─── Left-column stagger ─── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Hero() {
  return (
    <section className="bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">

          {/* ──────────────── LEFT COLUMN ──────────────── */}
          <motion.div
            className="flex flex-col justify-center py-10 lg:py-16 pr-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Breadcrumb */}
            <motion.div variants={item} className="flex items-center gap-2 mb-6">
              {/* pulsing dot */}
              <motion.span
                className="w-2 h-2 rounded-full bg-green-600 shrink-0 inline-block"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-[10.5px] font-semibold tracking-[0.12em] text-green-700 uppercase">
                Software Engineering&nbsp;/&nbsp;AI Solutions&nbsp;/&nbsp;Digital Transformation
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-extrabold leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(44px, 5vw, 64px)" }}
            >
              <span className="text-gray-900">Technology</span>
              <br />
              <span className="text-gray-900">that moves</span>
              <br />
              <span className="text-[#1a5c35]">business </span>
              <span className="text-gray-900">forward.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={item}
              className="text-[15px] text-gray-500 leading-relaxed max-w-[430px] mb-9"
            >
              We design, build, and scale software products and AI-powered
              systems that help ambitious companies work smarter, move faster,
              and create lasting impact.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <motion.a
                href="#start"
                className="inline-flex items-center gap-2 bg-[#1a5c35] text-white text-[14px] font-semibold px-6 py-3 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.04, backgroundColor: "#145228" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
              >
                Start a Project <span>→</span>
              </motion.a>
              <motion.a
                href="#work"
                className="text-[14px] font-semibold px-6 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 cursor-pointer"
                whileHover={{ scale: 1.04, backgroundColor: "#f3f4f6" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
              >
                See Our Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ──────────────── RIGHT COLUMN ──────────────── */}
          <div className="relative h-[380px] sm:h-[430px] lg:h-auto mt-6 lg:mt-0">

            {/* Dot grid - desktop only, fades in */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="hidden lg:block absolute top-6 right-2 w-32 h-28 pointer-events-none z-0"
              style={{
                backgroundImage: "radial-gradient(circle, #4ade80 1.5px, transparent 1.5px)",
                backgroundSize: "14px 14px",
              }}
            />

            {/* Light-green decorative card - scales in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="absolute top-[12%] left-[14%] right-0 bottom-[2%] bg-[#c4f0d4] rounded-3xl z-0"
            />

            {/* Hero image - fades + lifts in */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
              className="absolute top-[5%] left-0 right-[20%] bottom-[2%] rounded-2xl overflow-hidden z-10"
            >
              <Image
                src="/images/hero.png"
                alt="Technology professional"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover object-center"
                priority
              />
            </motion.div>

            {/* ── AI Assistant card: slides down, then floats ── */}
            <motion.div
              initial={{ opacity: 0, y: -22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              className="absolute top-[22%] left-0 w-[215px] z-20"
            >
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.8,
                }}
                className="bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[#1c3829] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                  <span className="text-[13px] font-bold text-gray-900">AI Assistant</span>
                </div>
                <p className="text-[12.5px] text-gray-500 leading-relaxed mb-3">
                  Turning ideas<br />into intelligent<br />solutions.
                </p>
                <div className="flex justify-end">
                  <motion.div
                    className="w-7 h-7 rounded-full bg-[#1a5c35] flex items-center justify-center shadow-sm cursor-pointer"
                    whileHover={{ scale: 1.18 }}
                    whileTap={{ scale: 0.88 }}
                  >
                    <span className="text-white text-sm font-bold leading-none">→</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Trending chart: SVG path draw ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.1 }}
              className="hidden lg:block absolute top-[26%] right-[3%] z-20"
            >
              <svg viewBox="0 0 80 56" className="w-[72px] h-[50px]" fill="none">
                <motion.path
                  d="M4 48 Q18 36 30 26 Q44 16 60 6"
                  stroke="#1a5c35"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.3, delay: 1.3, ease: "easeOut" }}
                />
                <motion.path
                  d="M53 3 L63 6 L60 16"
                  stroke="#1a5c35"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.35, delay: 2.4, ease: "easeOut" }}
                />
              </svg>
            </motion.div>

            {/* ── Metrics card: slides in from right, then floats ── */}
            <motion.div
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
              className="absolute top-[45%] right-[1%] z-20"
            >
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.1,
                }}
                className="bg-white rounded-xl shadow-md px-4 py-3 w-[152px]"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-7 h-7 rounded-md bg-[#e6f9ee] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#1a5c35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                  </div>
                  {/* Pulsing green dot */}
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"
                    animate={{ scale: [1, 1.7, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <p className="text-[11px] font-medium text-gray-700 leading-5">Faster operations</p>
                <p className="text-[11px] font-medium text-gray-700 leading-5">Higher productivity</p>
                <p className="text-[11px] font-medium text-gray-700 leading-5">Real business impact</p>
              </motion.div>
            </motion.div>

            {/* ── Code card: slides up, then floats ── */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85, ease: "easeOut" }}
              className="hidden sm:block absolute bottom-[8%] left-[2%] z-20"
            >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.4,
                }}
                className="bg-[#0e1a11] rounded-2xl shadow-2xl p-4 w-[260px]"
              >
                {/* Title bar */}
                <div className="flex items-center gap-2 mb-3">
                  {/* Blinking status dot */}
                  <motion.span
                    className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0 inline-block"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="text-[11px] text-gray-300 font-medium flex-1 tracking-wide">
                    Building...
                  </span>
                  <div className="flex gap-1 opacity-50">
                    <div className="w-1 h-1 rounded-full bg-gray-400" />
                    <div className="w-1 h-1 rounded-full bg-gray-400" />
                    <div className="w-1 h-1 rounded-full bg-gray-400" />
                  </div>
                </div>
                {/* Syntax-highlighted code */}
                <div className="font-mono text-[10.5px] leading-[1.75] select-none">
                  <p className="text-gray-500">// From idea to impact</p>
                  <p>
                    <span className="text-[#79c0ff]">const </span>
                    <span className="text-white">norc</span>
                    <span className="text-gray-400"> = </span>
                    <span className="text-[#ffa657]">build</span>
                    <span className="text-gray-400">{"({"}</span>
                  </p>
                  <p><span className="text-gray-400 pl-4">people: </span><span className="text-[#a5f3c0]">&quot;experts&quot;</span><span className="text-gray-500">,</span></p>
                  <p><span className="text-gray-400 pl-4">technology: </span><span className="text-[#a5f3c0]">&quot;ai&quot;</span><span className="text-gray-500">,</span></p>
                  <p><span className="text-gray-400 pl-4">outcome: </span><span className="text-[#a5f3c0]">&quot;real-world value&quot;</span></p>
                  <p><span className="text-gray-400">{"});"}</span></p>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Handwriting with SVG path-draw underline ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="hidden sm:block absolute bottom-[12%] right-[3%] z-20 text-right"
            >
              <p
                className="text-[#1a5c35] text-[15px] leading-[1.5] font-semibold"
                style={{ fontFamily: "'Georgia','Times New Roman',serif", fontStyle: "italic" }}
              >
                Ideas<br />Products<br />Real Impact.
              </p>
              <svg viewBox="0 0 88 12" className="w-20 mt-1 ml-auto" fill="none">
                <motion.path
                  d="M2 6 Q22 1 44 6 Q66 11 86 6"
                  stroke="#1a5c35"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 1.5, ease: "easeOut" }}
                />
              </svg>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Stats bar - count-up on scroll into view */}
      <div className="mt-6 lg:mt-0 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="py-8 px-6 first:pl-0"
              >
                <StatCounter
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                  delay={i * 0.12}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
