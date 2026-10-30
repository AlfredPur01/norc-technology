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
      price: "From US$20,000",
      priceNote: "Mobile projects vary significantly in scope. Cross-platform apps with a clear scope start from US$20,000. Native dual-platform builds or apps with complex features are scoped through a discovery sprint first.",
      relatedServices: [
        { title: "Web Application Development", href: "/services/web-applications" },
        { title: "API Development", href: "/services/api-development" },
        { title: "Product Design", href: "/services/product-design" },
        { title: "Ongoing Engineering Support", href: "/services" },
      ],
    }} />
  );
}
