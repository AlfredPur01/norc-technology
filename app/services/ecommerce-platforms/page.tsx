import SubServicePage from "@/components/SubServicePage";

export const metadata = { title: "E-commerce Platform Development | Norc Technology" };

export default function EcommercePlatformsPage() {
  return (
    <SubServicePage data={{
      tag: "BUILD",
      tagColor: "text-[#1a5c35] bg-[#e6f9ee]",
      parentService: "Custom Software",
      parentHref: "/services",
      title: "E-commerce Platform Development",
      tagline: "Online selling experiences built to convert and scale.",
      description: "We build e-commerce platforms and marketplaces that are fast, conversion-optimised and capable of handling real commercial volume. Whether you need a headless storefront, a custom marketplace or a B2B ordering system, we engineer the right solution for your business model.",
      deliverables: [
        "Custom e-commerce web applications with modern storefronts",
        "Headless commerce builds (Shopify headless, custom backends)",
        "Multi-vendor marketplace development",
        "B2B ordering portals with tiered pricing and approval workflows",
        "Payment gateway integration (Stripe, Paystack, Flutterwave and others)",
        "Inventory management and warehouse system integration",
        "Order management and fulfilment workflow automation",
        "Product catalogue, search and filtering systems",
        "Subscription and recurring billing infrastructure",
        "Performance optimisation for high-traffic sale events",
      ],
      whoFor: [
        {
          title: "Brands outgrowing template storefronts",
          desc: "You are hitting the ceiling of Shopify or WooCommerce templates and need a custom experience that reflects your brand and scales with your volume.",
        },
        {
          title: "Businesses building marketplace models",
          desc: "You are connecting buyers and sellers and need a custom marketplace platform with vendor management, commissions and transaction infrastructure.",
        },
        {
          title: "B2B companies with complex ordering needs",
          desc: "Your sales process involves custom pricing, approval workflows, bulk ordering or account-based access that off-the-shelf tools cannot support cleanly.",
        },
      ],
      approach: [
        { step: "01", title: "Commerce strategy", desc: "We map your buying journey, business model and integration requirements before choosing a technical approach." },
        { step: "02", title: "UX and conversion design", desc: "Storefront design focused on conversion, trust and brand, validated with prototypes." },
        { step: "03", title: "Platform build", desc: "Engineering with payment integration, inventory, order management and third-party connections." },
        { step: "04", title: "Launch and scale", desc: "Load testing, performance optimisation and a post-launch support plan." },
      ],
      price: "From US$18,000",
      priceNote: "Custom storefront builds start from US$18,000. Marketplace platforms with vendor management and complex transaction logic are scoped through discovery. All projects include payment integration and essential commerce infrastructure.",
      relatedServices: [
        { title: "Web Application Development", href: "/services/web-applications" },
        { title: "API Development and Integration", href: "/services/api-development" },
        { title: "Product Design", href: "/services/product-design" },
        { title: "Cloud and Infrastructure", href: "/services/cloud-migration" },
      ],
    }} />
  );
}
