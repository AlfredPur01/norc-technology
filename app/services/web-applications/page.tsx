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
      priceNote: "Final pricing depends on scope, complexity and integration requirements identified during discovery. We offer fixed-price contracts with milestone-based payments so you always know what you are paying for.",
      relatedServices: [
        { title: "Mobile App Development", href: "/services/mobile-apps" },
        { title: "API Development", href: "/services/api-development" },
        { title: "Product Design", href: "/services/product-design" },
        { title: "Cloud and Infrastructure", href: "/services/cloud-migration" },
      ],
    }} />
  );
}
