"use client";

import { motion } from "framer-motion";

export function Partners() {
  return (
    <section className="border-t border-b border-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <p className="section-label mb-4">Trusted by Innovative Companies</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Building with global teams.
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-gray-500 leading-relaxed max-w-md">
              We partner with startups and enterprises across industries to
              design, develop, and scale high-performance products.
            </p>
          </div>
        </div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-between gap-8"
        >
          {/* Google Cloud */}
          <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4285F4"/>
            </svg>
            <span className="text-sm font-semibold text-gray-700">Google Cloud</span>
          </div>

          {/* AWS */}
          <div className="opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-sm font-bold text-gray-700 tracking-tight">aws</span>
          </div>

          {/* Microsoft */}
          <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4" viewBox="0 0 21 21" fill="none">
              <rect x="0" y="0" width="10" height="10" fill="#F25022"/>
              <rect x="11" y="0" width="10" height="10" fill="#7FBA00"/>
              <rect x="0" y="11" width="10" height="10" fill="#00A4EF"/>
              <rect x="11" y="11" width="10" height="10" fill="#FFB900"/>
            </svg>
            <span className="text-sm font-semibold text-gray-700">Microsoft</span>
          </div>

          {/* Vercel */}
          <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <svg className="w-3.5 h-3.5" viewBox="0 0 76 65" fill="none">
              <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#111111"/>
            </svg>
            <span className="text-sm font-semibold text-gray-700">Vercel</span>
          </div>

          {/* OpenAI */}
          <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-800 w-4 h-4">
              <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073z"/>
            </svg>
            <span className="text-sm font-semibold text-gray-700">OpenAI</span>
          </div>

          {/* Meta */}
          <div className="opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-sm font-bold text-gray-700">Meta</span>
          </div>

          {/* Stripe */}
          <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="6" fill="#6772E5"/>
              <path d="M19.5 16c-2.2 0-3.5 1-3.5 2.4 0 1.7 1.6 2.2 3.3 2.7 2.5.7 5.2 1.6 5.2 4.9 0 3-2.4 4.5-5.8 4.5-2 0-4-.6-5.4-1.7l.9-2c1.2 1 2.9 1.6 4.5 1.6 2.1 0 3.5-.9 3.5-2.5 0-1.7-1.6-2.3-3.4-2.8C16 22.5 13.5 21.5 13.5 18.3 13.5 15.5 16 14 19.5 14c1.7 0 3.3.5 4.6 1.3l-.9 2C22 16.4 20.8 16 19.5 16Z" fill="white"/>
            </svg>
            <span className="text-sm font-semibold text-gray-700">stripe</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
