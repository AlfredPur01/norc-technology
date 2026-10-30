import SubServicePage from "@/components/SubServicePage";

export const metadata = { title: "Security and Compliance | Norc Technology" };

export default function SecurityCompliancePage() {
  return (
    <SubServicePage data={{
      tag: "SCALE",
      tagColor: "text-blue-700 bg-blue-50",
      parentService: "Infrastructure and Scale",
      parentHref: "/services",
      title: "Security and Compliance",
      tagline: "Build with security from the start, not as an afterthought.",
      description: "We help technology businesses build secure products and achieve the compliance certifications their customers and partners require. From security architecture reviews and penetration testing to SOC 2 readiness and GDPR compliance programmes, we bring the expertise to protect your product and your business.",
      deliverables: [
        "Security architecture review and threat modelling",
        "Penetration testing and vulnerability assessment",
        "SOC 2 Type I and Type II readiness programmes",
        "GDPR and data privacy compliance implementation",
        "Secure development lifecycle (SDL) practices and training",
        "Identity and access management (IAM) design and review",
        "Secrets management and credential security",
        "API security assessment and hardening",
        "Security monitoring, SIEM and alerting setup",
        "Vendor and third-party security assessment",
      ],
      whoFor: [
        {
          title: "SaaS companies facing enterprise procurement",
          desc: "Your enterprise prospects are asking for SOC 2 reports, security questionnaires and compliance documentation. We help you get there without it consuming your engineering team.",
        },
        {
          title: "Fintech and healthcare businesses with regulatory requirements",
          desc: "Your sector carries specific compliance requirements. We know the landscape and can help you build compliant products and maintain ongoing compliance.",
        },
        {
          title: "Companies that have grown without a security programme",
          desc: "Your product has scaled quickly and security has been reactive. We help you assess your current posture and build the practices that scale with you.",
        },
      ],
      approach: [
        { step: "01", title: "Posture assessment", desc: "We assess your current security posture, identify gaps and prioritise the risks that matter most for your business." },
        { step: "02", title: "Compliance roadmap", desc: "We map the specific requirements of your target frameworks and design a practical programme to achieve them." },
        { step: "03", title: "Implementation", desc: "Technical controls, policy documentation, tooling and process changes, delivered in a structured programme." },
        { step: "04", title: "Audit readiness and ongoing support", desc: "Preparation for formal audits and an optional ongoing security advisory retainer." },
      ],
      price: "From US$15,000",
      priceNote: "Security architecture reviews and penetration testing engagements start from US$15,000. Full compliance programmes (SOC 2, ISO 27001) are scoped based on your current posture and target certification timeline.",
      relatedServices: [
        { title: "Cloud Migration and Infrastructure", href: "/services/cloud-migration" },
        { title: "DevOps and CI/CD", href: "/services/devops-cicd" },
        { title: "API Development and Integration", href: "/services/api-development" },
        { title: "Web Application Development", href: "/services/web-applications" },
      ],
    }} />
  );
}
