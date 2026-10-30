"use client";

import { motion } from "framer-motion";

const articles = [
  {
    date: "Oct 12, 2026",
    title: "How AI is reshaping business operations in 2026",
    excerpt: "Key trends and opportunities for forward-thinking companies.",
    tag: "AI",
  },
  {
    date: "Sep 29, 2026",
    title: "Building scalable products for global markets",
    excerpt: "Lessons from real-world product development.",
    tag: "Product",
  },
  {
    date: "Sep 15, 2026",
    title: "The future of work: human + AI collaboration",
    excerpt: "How businesses can leverage AI to empower their teams.",
    tag: "Future",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function Insights() {
  return (
    <section id="insights" className="py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="section-label mb-4">Insights</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Ideas, trends, and
              <br />
              perspectives on technology.
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-gray-900 flex items-center gap-1 hover:gap-2 transition-all self-end">
            View All Insights <span>→</span>
          </a>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="group cursor-pointer"
            >
              {/* Image placeholder */}
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-[16/9] mb-4">
                <div className="w-full h-full bg-gradient-to-br from-green-900/80 to-gray-900 flex items-center justify-center">
                  <span className="text-gray-600 text-xs">{article.tag}</span>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 font-medium mb-2">{article.date}</p>
              <h3 className="text-sm font-bold text-gray-900 mb-1.5 group-hover:text-green-800 transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-[13px] text-gray-500 mb-3">{article.excerpt}</p>
              <a href="#" className="text-[13px] font-semibold text-gray-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Article <span>→</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
