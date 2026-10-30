import SubServicePage from "@/components/SubServicePage";

export const metadata = { title: "Mobile App Development | Norc Technology" };

export default function MobileAppsPage() {
  return (
    <SubServicePage data={{
      tag: "BUILD",
      tagColor: "text-[#1a5c35] bg-[#e6f9ee]",
      parentService: "Custom Software",
      parentHref: "/services",
      title: "Mobile App Development",
      tagline: "iOS and Android apps engineered for performance and retention.",
      description: "We build mobile applications that users actually want to use. From cross-platform React Native products to platform-specific native builds, we focus on performance, reliability and the kind of polished experience that earns strong app store ratings and high retention.",
      deliverables: [
        "Cross-platform mobile development with React Native",
        "Native iOS development (Swift, SwiftUI)",
        "Native Android development (Kotlin, Jetpack Compose)",
        "Offline-capable apps with local data sync",
        "Push notifications, deep linking and in-app messaging",
        "Biometric authentication and device security integration",
        "App Store and Google Play submission and optimisation",
        "Backend API design and integration for mobile",
        "Analytics, crash reporting and performance monitoring",
        "Ongoing maintenance and OS update compatibility",
      ],
      whoFor: [
        {
          title: "Founders building a mobile-first product",
          desc: "Your product lives on the phone. We help you ship a polished, performant app without the overhead of building an in-house mobile team from scratch.",
        },
        {
          title: "Web businesses expanding to mobile",
          desc: "You have a web product and your users are asking for a native app. We build a mobile experience that complements your existing platform.",
        },
        {
          title: "Enterprises needing internal mobile tools",
          desc: "Field teams, logistics operations, warehouse management or internal comms tools that need to work reliably on mobile devices in demanding conditions.",
        },
      ],
      approach: [
        { step: "01", title: "Platform strategy", desc: "We help you decide between cross-platform and native based on your users, budget and timeline." },
        { step: "02", title: "UX and prototyping", desc: "User flows, wireframes and interactive prototypes before any engineering begins." },
        { step: "03", title: "Build and test", desc: "Iterative development with device testing across iOS and Android throughout." },
        { step: "04", title: "Ship and support", desc: "App store submission, release management and optional post-launch retainer." },
      ],
      price: "From US$40,000",
      priceNote: "Agency rates in the US, UK and Canada run US$100 to US$250+ per hour (£80 to £180+ in the UK). All projects are quoted as fixed-price contracts so you always know the total cost before we start.",
      pricingTiers: [
        {
          name: "MVP / Simple App",
          range: "US$40,000 – $80,000",
          timeline: "2 – 4 months",
          desc: "Cross-platform codebase (React Native or Flutter) covering both iOS and Android. 5 – 10 screens, simple authentication, push notifications and a lightweight backend. Equivalent to £30,000 – £60,000 in the UK.",
        },
        {
          name: "Growth Stage App",
          range: "US$80,000 – $200,000",
          timeline: "4 – 8 months",
          desc: "Custom UI/UX design, social login, secure payment integrations (Stripe, Apple Pay, Google Pay), analytics, database logic and third-party API integrations. The sweet spot for funded startups. Equivalent to £60,000 – £150,000 in the UK.",
        },
        {
          name: "Enterprise / Complex App",
          range: "US$200,000 – $500,000+",
          timeline: "6 – 12+ months",
          desc: "Fintech, healthtech or real-time logistics apps with native iOS and Android codebases, complex data structures, multi-layered admin dashboards, HIPAA/GDPR compliance and custom AI features. Equivalent to £150,000 – £400,000+ in the UK.",
        },
      ],
      pricingCaveats: [
        "Cross-platform vs. native: native apps (Swift for iOS, Kotlin for Android) cost 30% – 45% more upfront. Unless you need extreme performance or deep hardware access, cross-platform frameworks are the right choice for most startups.",
        "The hybrid agency model: many agencies keep a local project manager and architect but use offshore engineers, bringing total project cost to US$30,000 – $60,000 while retaining local accountability.",
        "Post-launch costs: budget an additional 15% – 25% of the original build cost annually for maintenance, cloud hosting, API usage, and Apple/Google Developer account subscriptions.",
      ],
      relatedServices: [
        { title: "Web Application Development", href: "/services/web-applications" },
        { title: "API Development", href: "/services/api-development" },
        { title: "Product Design", href: "/services/product-design" },
        { title: "Ongoing Engineering Support", href: "/services" },
      ],
    }} />
  );
}
