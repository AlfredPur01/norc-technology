import SubServicePage from "@/components/SubServicePage";

export const metadata = { title: "Product Design and UX | Norc Technology" };

export default function ProductDesignPage() {
  return (
    <SubServicePage data={{
      tag: "SCALE",
      tagColor: "text-blue-700 bg-blue-50",
      parentService: "Infrastructure and Scale",
      parentHref: "/services",
      title: "Product Design and UX",
      tagline: "Design that works for users and moves the metrics that matter.",
      description: "We design digital products that are intuitive, well-crafted and grounded in how real users think and behave. From early-stage UX strategy and user research to high-fidelity UI design and design systems, we bring the craft and process that turns complex products into experiences people enjoy using.",
      deliverables: [
        "UX strategy, user research and persona development",
        "Information architecture and user flow mapping",
        "Wireframes and low-fidelity prototypes",
        "High-fidelity UI design for web and mobile",
        "Interactive prototypes for stakeholder review and user testing",
        "Design system creation: components, tokens and documentation",
        "Usability testing and iterative design improvement",
        "Responsive and accessible design (WCAG compliance)",
        "Design-to-development handover with annotated specs",
        "Brand identity integration and visual language development",
      ],
      whoFor: [
        {
          title: "Founders validating a new product",
          desc: "You need to test your idea with real users before committing to full engineering. We design interactive prototypes you can put in front of users this week.",
        },
        {
          title: "Product teams with engineering capacity but no design resource",
          desc: "You have engineers ready to build but the design work is the bottleneck. We integrate with your team and deliver production-ready designs at pace.",
        },
        {
          title: "Companies whose product has grown beyond their original design",
          desc: "Your product has evolved through years of feature additions and it shows. We bring systematic design thinking to rationalise and elevate the experience.",
        },
      ],
      approach: [
        { step: "01", title: "Discover and define", desc: "User research, competitive analysis and alignment on the design principles that will guide the project." },
        { step: "02", title: "Structure and flows", desc: "Information architecture, user flows and wireframes that solve the right problems before any visual design begins." },
        { step: "03", title: "Design and prototype", desc: "High-fidelity UI design with interactive prototypes validated through usability testing." },
        { step: "04", title: "Handover and support", desc: "Developer-ready specs, a design system for ongoing consistency, and design support through the build phase." },
      ],
      price: "From US$10,000",
      priceNote: "Focused design engagements (a single product area or prototype sprint) start from US$10,000. Full product design programmes covering research, end-to-end design and a design system are scoped through a brief and discovery call.",
      relatedServices: [
        { title: "Web Application Development", href: "/services/web-applications" },
        { title: "Mobile App Development", href: "/services/mobile-apps" },
        { title: "E-commerce Platforms", href: "/services/ecommerce-platforms" },
        { title: "AI Chatbots and Agents", href: "/services/ai-chatbots" },
      ],
    }} />
  );
}
