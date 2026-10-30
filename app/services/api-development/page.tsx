import SubServicePage from "@/components/SubServicePage";

export const metadata = { title: "API Development and Integration | Norc Technology" };

export default function ApiDevelopmentPage() {
  return (
    <SubServicePage data={{
      tag: "BUILD",
      tagColor: "text-[#1a5c35] bg-[#e6f9ee]",
      parentService: "Custom Software",
      parentHref: "/services",
      title: "API Development and Integration",
      tagline: "APIs that are reliable, well-documented and built to last.",
      description: "A well-designed API is one of the highest-leverage things an engineering team can produce. We design and build REST and GraphQL APIs that are secure, consistent and a pleasure to work with, and we integrate the third-party services your product depends on without creating technical debt.",
      deliverables: [
        "RESTful API design and development",
        "GraphQL API design and implementation",
        "Third-party API integration (payments, CRMs, ERPs, data providers)",
        "Webhook systems and event-driven integrations",
        "API authentication and authorisation (OAuth 2.0, JWT, API keys)",
        "Rate limiting, throttling and abuse protection",
        "OpenAPI/Swagger documentation generation",
        "API versioning strategy and backward compatibility",
        "Automated API testing and contract testing",
        "API gateway setup and management",
      ],
      whoFor: [
        {
          title: "Teams building platform products",
          desc: "Your product exposes APIs to third-party developers or partners. We help you design APIs that are intuitive, consistent and well-documented.",
        },
        {
          title: "Companies integrating disparate systems",
          desc: "You have multiple tools and systems that do not talk to each other. We build the integration layer that connects them reliably.",
        },
        {
          title: "Products with complex third-party dependencies",
          desc: "You rely on multiple external services (payments, communications, data). We build resilient integration layers that handle failures gracefully.",
        },
      ],
      approach: [
        { step: "01", title: "API design", desc: "We design your API contract first, review it with your team, and agree on conventions before any implementation begins." },
        { step: "02", title: "Security review", desc: "Authentication strategy, authorisation model and data exposure risks are assessed before build." },
        { step: "03", title: "Build and document", desc: "Implementation with automated documentation generation and comprehensive test coverage." },
        { step: "04", title: "Integration testing", desc: "End-to-end testing across all consumers and integrations before production release." },
      ],
      price: "From US$8,000",
      priceNote: "Simple API builds or single integrations start from US$8,000. Complex platform APIs with multiple consumers and integrations are scoped through a discovery sprint to give you an accurate fixed price.",
      relatedServices: [
        { title: "Web Application Development", href: "/services/web-applications" },
        { title: "Mobile App Development", href: "/services/mobile-apps" },
        { title: "Cloud and Infrastructure", href: "/services/cloud-migration" },
        { title: "Security and Compliance", href: "/services/security-compliance" },
      ],
    }} />
  );
}
