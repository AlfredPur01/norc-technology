import SubServicePage from "@/components/SubServicePage";

export const metadata = { title: "Cloud Migration and Infrastructure | Norc Technology" };

export default function CloudMigrationPage() {
  return (
    <SubServicePage data={{
      tag: "SCALE",
      tagColor: "text-blue-700 bg-blue-50",
      parentService: "Infrastructure and Scale",
      parentHref: "/services",
      title: "Cloud Migration and Infrastructure",
      tagline: "Move to the cloud and build the infrastructure your growth demands.",
      description: "We plan and execute cloud migrations that minimise downtime and risk, and we design the cloud infrastructure that allows your product to scale confidently. From lift-and-shift migrations to full cloud-native re-architecture, we have the experience to do it properly.",
      deliverables: [
        "Cloud readiness assessment and migration strategy",
        "AWS, Google Cloud and Azure infrastructure design",
        "Lift-and-shift and re-architecture migration execution",
        "Infrastructure as Code (Terraform, Pulumi, CDK)",
        "Container orchestration with Kubernetes and ECS",
        "Serverless architecture design and implementation",
        "Database migration and replication strategy",
        "Multi-region and high-availability architecture",
        "Cloud cost optimisation analysis and implementation",
        "Disaster recovery planning and implementation",
      ],
      whoFor: [
        {
          title: "Businesses moving off on-premise infrastructure",
          desc: "Your servers are aging, your costs are unpredictable and you are not getting the reliability or scalability you need. Cloud is the right move and we make it safe.",
        },
        {
          title: "Startups that have outgrown their initial setup",
          desc: "You launched quickly on a basic setup and it is now struggling under load. We redesign your infrastructure to scale with your growth.",
        },
        {
          title: "Engineering teams needing cloud expertise",
          desc: "Your team builds great product but cloud infrastructure is not their core strength. We bring specialist expertise so your engineers can stay focused.",
        },
      ],
      approach: [
        { step: "01", title: "Assessment and strategy", desc: "We audit your current infrastructure, identify dependencies and design a migration strategy that minimises risk and downtime." },
        { step: "02", title: "Infrastructure design", desc: "Target architecture design in your cloud provider of choice, with security, cost and scalability built in from the start." },
        { step: "03", title: "Migration execution", desc: "Phased migration with thorough testing at each stage, rollback plans and zero or minimal downtime for your users." },
        { step: "04", title: "Optimise and hand over", desc: "Cost optimisation, monitoring setup, runbooks and knowledge transfer to your team." },
      ],
      price: "From US$15,000",
      priceNote: "Simple migration projects for small workloads start from US$15,000. Complex multi-application migrations or full cloud-native re-architecture are scoped through a detailed assessment to give you an accurate fixed price.",
      relatedServices: [
        { title: "DevOps and CI/CD", href: "/services/devops-cicd" },
        { title: "Security and Compliance", href: "/services/security-compliance" },
        { title: "Web Application Development", href: "/services/web-applications" },
        { title: "Data Analytics", href: "/services/data-analytics" },
      ],
    }} />
  );
}
