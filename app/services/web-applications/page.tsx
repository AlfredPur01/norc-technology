import SubServicePage from "@/components/SubServicePage";

export const metadata = { title: "Web Application Development | Norc Technology" };

export default function WebApplicationsPage() {
  return (
    <SubServicePage data={{
      tag: "BUILD",
      tagColor: "text-[#1a5c35] bg-[#e6f9ee]",
      parentService: "Custom Software",
      parentHref: "/services",
      title: "Web Application Development",
      tagline: "Production-grade web applications built to perform at scale.",
      description: "We design and engineer web applications that are fast, secure and built to grow with your business. From customer-facing SaaS products to complex internal platforms, we use modern frameworks and proven engineering practices to deliver software that works in the real world.",
      deliverables: [
        "Full-stack web application development (React, Next.js, Vue, Node.js)",
        "Single-page applications (SPA) and server-side rendered (SSR) products",
        "Progressive web apps (PWA) with offline capability",
        "Admin dashboards and internal operations platforms",
        "Real-time features using WebSockets and event-driven architecture",
        "Authentication, authorisation and role-based access control",
        "Third-party API and service integrations",
        "Performance optimisation, accessibility (WCAG) and SEO",
        "Comprehensive testing: unit, integration and end-to-end",
        "CI/CD pipeline setup and production deployment",
      ],
      whoFor: [
        {
          title: "Startups launching their first product",
          desc: "You have validated your idea and need a production-ready web application built by engineers who understand how to scope and ship without wasting runway.",
        },
        {
          title: "Companies replacing legacy systems",
          desc: "Your existing platform is slowing you down. We help you migrate to a modern stack without disrupting the business while you transition.",
        },
        {
          title: "Teams that need surge capacity",
          desc: "You have an in-house team but need experienced engineers to accelerate a specific product initiative or fill a capability gap.",
        },
      ],
      approach: [
        { step: "01", title: "Discovery", desc: "We map your users, workflows and technical requirements before writing any code." },
        { step: "02", title: "Architecture", desc: "We design the right stack and system architecture for your scale and budget." },
        { step: "03", title: "Build", desc: "Milestone-based delivery with weekly demos, code review and automated testing throughout." },
        { step: "04", title: "Launch", desc: "Production deployment, handover documentation and an optional support retainer." },
      ],
      price: "From US$15,000",
      priceNote: "Agency rates in the US, UK and Canada run US$100 to US$250+ per hour (£70 to £160+ in the UK). All projects are quoted as fixed-price contracts with milestone-based payments. No hourly surprises.",
      pricingTiers: [
        {
          name: "Marketing Website",
          range: "US$10,000 – $35,000",
          timeline: "4 – 8 weeks",
          desc: "5 to 15 pages, modern CMS (WordPress or Webflow), contact forms, performance optimisation and SEO setup. Equivalent to £8,000 – £25,000 in the UK.",
        },
        {
          name: "MVP Web Application",
          range: "US$15,000 – $50,000",
          timeline: "6 – 16 weeks",
          desc: "Basic interactive SaaS product, simple client dashboard, one user role and standard third-party API integrations. The typical starting point for early-stage startups. Equivalent to £12,000 – £40,000 in the UK.",
        },
        {
          name: "Full-Scale Web Application",
          range: "US$60,000 – $250,000+",
          timeline: "4 – 12+ months",
          desc: "Multi-sided platforms, complex custom backends, AI or data pipelines, extensive security hardening and multi-role access. Enterprise-grade builds for funded teams. Equivalent to £50,000 – £200,000+ in the UK.",
        },
      ],
      pricingCaveats: [
        "Tech stack choice matters: a custom React/Next.js build starts from US$15,000+, while a Webflow or low-code approach can be as low as US$3,000 – $10,000 for a marketing site.",
        "Post-launch maintenance: budget US$500 – $2,500/month (roughly 15% – 25% of the original build cost annually) for hosting, updates and bug fixes.",
        "Accessibility and compliance: building to WCAG 2.2 AA or adding financial/healthcare compliance controls typically adds a 5% – 10% premium to the estimate.",
        "Custom e-commerce and marketplace builds sit in their own range: US$30,000 – $80,000+ (£25,000 – £65,000+) depending on product complexity and payment integration needs.",
      ],
      relatedServices: [
        { title: "Mobile App Development", href: "/services/mobile-apps" },
        { title: "API Development", href: "/services/api-development" },
        { title: "Product Design", href: "/services/product-design" },
        { title: "Cloud and Infrastructure", href: "/services/cloud-migration" },
      ],
    }} />
  );
}
