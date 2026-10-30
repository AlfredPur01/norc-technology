import SubServicePage from "@/components/SubServicePage";

export const metadata = { title: "DevOps and CI/CD | Norc Technology" };

export default function DevopsCicdPage() {
  return (
    <SubServicePage data={{
      tag: "SCALE",
      tagColor: "text-blue-700 bg-blue-50",
      parentService: "Infrastructure and Scale",
      parentHref: "/services",
      title: "DevOps and CI/CD",
      tagline: "Ship faster, break less and sleep better.",
      description: "We build the DevOps practices and CI/CD pipelines that let your engineering team deliver software with confidence. From automated testing and deployment pipelines to observability and on-call tooling, we put the infrastructure in place that separates teams who ship well from those who are always fighting fires.",
      deliverables: [
        "CI/CD pipeline design and implementation (GitHub Actions, GitLab CI, CircleCI)",
        "Automated testing integration: unit, integration and end-to-end",
        "Container image build, scan and publish pipelines",
        "Blue-green and canary deployment strategies",
        "Environment management: dev, staging and production parity",
        "Infrastructure as Code pipeline integration",
        "Secrets management and secure credential handling",
        "Observability stack setup: metrics, logging and tracing",
        "Alerting and incident response tooling",
        "SLO definition and error budget tracking",
      ],
      whoFor: [
        {
          title: "Teams deploying manually or infrequently",
          desc: "Deployments take hours, involve multiple people and carry significant risk. Automated pipelines make deployment a non-event, not an occasion.",
        },
        {
          title: "Engineering teams spending too much time on incidents",
          desc: "You are constantly fighting production fires. Good observability and deployment practices dramatically reduce both the frequency and severity of incidents.",
        },
        {
          title: "Fast-growing teams that have outpaced their process",
          desc: "Your team has grown but your release process has not kept up. Inconsistent environments and slow feedback loops are holding your engineers back.",
        },
      ],
      approach: [
        { step: "01", title: "Audit and prioritise", desc: "We review your current deployment and operations practices and identify the highest-impact improvements." },
        { step: "02", title: "Pipeline design", desc: "We design the CI/CD pipeline and deployment strategy that fits your team, stack and release cadence." },
        { step: "03", title: "Build and integrate", desc: "Implementation with your existing tools and workflows, with thorough documentation at every step." },
        { step: "04", title: "Observability and training", desc: "Monitoring setup, runbooks and team training so your engineers can own it confidently." },
      ],
      price: "From US$10,000",
      priceNote: "CI/CD pipeline setup for a single application starts from US$10,000. Comprehensive DevOps programmes covering multiple services, observability and SRE practice are scoped through a detailed audit.",
      relatedServices: [
        { title: "Cloud Migration and Infrastructure", href: "/services/cloud-migration" },
        { title: "Security and Compliance", href: "/services/security-compliance" },
        { title: "Web Application Development", href: "/services/web-applications" },
        { title: "API Development and Integration", href: "/services/api-development" },
      ],
    }} />
  );
}
