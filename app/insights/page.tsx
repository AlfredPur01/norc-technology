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

const categories = ["All", "AI", "Engineering", "Product", "Cloud", "Business"];

const articles = [
  {
    category: "AI",
    date: "Oct 12, 2026",
    readTime: "6 min read",
    title: "How AI is reshaping business operations in 2026",
    excerpt: "The companies seeing the biggest gains from AI are not replacing their teams. They are augmenting them with intelligent systems built around real workflows.",
    featured: true,
  },
  {
    category: "Product",
    date: "Sep 29, 2026",
    readTime: "5 min read",
    title: "Building scalable products for global markets",
    excerpt: "Lessons from real-world product development: what founders and engineering teams consistently get wrong at the architecture stage, and how to avoid it.",
    featured: false,
  },
  {
    category: "AI",
    date: "Sep 15, 2026",
    readTime: "7 min read",
    title: "The future of work: human and AI collaboration",
    excerpt: "How businesses can leverage AI to empower their teams without losing the judgment and creativity that make great work possible.",
    featured: false,
  },
  {
    category: "Engineering",
    date: "Sep 3, 2026",
    readTime: "8 min read",
    title: "Why your discovery phase is where projects go wrong",
    excerpt: "The most expensive bugs in software are not in the code. They are in the requirements. A structured discovery process changes that.",
    featured: false,
  },
  {
    category: "Cloud",
    date: "Aug 22, 2026",
    readTime: "5 min read",
    title: "Cloud cost optimisation for scaling startups",
    excerpt: "Most startups overpay for cloud infrastructure by a significant margin. Here is a practical framework for cutting costs without compromising reliability.",
    featured: false,
  },
  {
    category: "Business",
    date: "Aug 10, 2026",
    readTime: "4 min read",
    title: "When to hire in-house vs. when to use an agency",
    excerpt: "The decision is more nuanced than most founders think. Here is the framework we use when advising clients on team structure and capacity.",
    featured: false,
  },
  {
    category: "Engineering",
    date: "Jul 28, 2026",
    readTime: "6 min read",
    title: "Designing APIs that last: principles and patterns",
    excerpt: "A well-designed API is one of the highest-leverage things an engineering team can produce. Here is how we approach it at Norc.",
    featured: false,
  },
  {
    category: "Product",
    date: "Jul 14, 2026",
    readTime: "5 min read",
    title: "From MVP to production: the gaps most teams miss",
    excerpt: "The jump from a working prototype to a production-ready product is larger than most teams expect. Here is what falls through the cracks.",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  AI: "text-purple-700 bg-purple-50",
  Engineering: "text-blue-700 bg-blue-50",
  Product: "text-orange-700 bg-orange-50",
  Cloud: "text-cyan-700 bg-cyan-50",
  Business: "text-gray-700 bg-gray-100",
};

export default function InsightsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? articles : articles.filter((a) => a.category === active);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-[#f0fdf4] py-20 border-b border-green-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-xl">
              <motion.p variants={fadeUp} className="section-label mb-6">Insights</motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-5"
                style={{ fontSize: "clamp(36px, 4.5vw, 52px)" }}
              >
                Ideas, trends and
                <br />
                <span className="text-[#1a5c35]">perspectives on technology.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[15px] text-gray-500 leading-relaxed">
                Practical thinking from our engineering and product teams on software development, AI, and building durable digital businesses.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Filter tabs + articles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">

            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActive(cat)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`text-[12px] font-semibold px-4 py-1.5 rounded-full border transition-colors ${
                    active === cat
                      ? "bg-[#1a5c35] text-white border-[#1a5c35]"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>

                {/* Featured article */}
                {featured && (
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-gray-100 mb-10 group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-green-900 to-[#0c1810] min-h-[260px] flex items-end p-8">
                      <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${categoryColors[featured.category]}`}>
                        {featured.category}
                      </span>
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[11px] text-gray-400">{featured.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="text-[11px] text-gray-400">{featured.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#1a5c35] transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-[13px] text-gray-500 leading-relaxed mb-5">{featured.excerpt}</p>
                      <span className="text-[13px] font-semibold text-[#1a5c35] flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read article <span>→</span>
                      </span>
                    </div>
                  </motion.article>
                )}

                {/* Article grid */}
                {rest.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rest.map((article, i) => (
                      <motion.article
                        key={article.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        whileHover={{ y: -4 }}
                        className="group cursor-pointer"
                      >
                        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-green-900/80 to-gray-900 aspect-video mb-4 flex items-end p-4">
                          <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full ${categoryColors[article.category]}`}>
                            {article.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[11px] text-gray-400">{article.date}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span className="text-[11px] text-gray-400">{article.readTime}</span>
                        </div>
                        <h3 className="text-[14px] font-bold text-gray-900 mb-1.5 leading-snug group-hover:text-[#1a5c35] transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-[12.5px] text-gray-500 leading-relaxed mb-3">{article.excerpt}</p>
                        <span className="text-[12.5px] font-semibold text-gray-700 flex items-center gap-1 group-hover:gap-2 group-hover:text-[#1a5c35] transition-all">
                          Read article <span>→</span>
                        </span>
                      </motion.article>
                    ))}
                  </div>
                )}

                {filtered.length === 0 && (
                  <div className="py-20 text-center text-gray-400 text-sm">No articles in this category yet.</div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#f0fdf4] border border-green-200 rounded-3xl px-8 sm:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-8"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Stay in the loop</h2>
                <p className="text-[14px] text-gray-500">
                  We publish practical insights on engineering, AI and product. No spam, just useful content.
                </p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 sm:w-64 border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#1a5c35] focus:ring-2 focus:ring-[#1a5c35]/10 bg-white transition"
                />
                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: "#145228" }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#1a5c35] text-white text-sm font-semibold px-5 py-3 rounded-xl whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
