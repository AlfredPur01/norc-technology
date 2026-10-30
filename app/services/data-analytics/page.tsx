import SubServicePage from "@/components/SubServicePage";

export const metadata = { title: "Data Analytics and Intelligence | Norc Technology" };

export default function DataAnalyticsPage() {
  return (
    <SubServicePage data={{
      tag: "AI",
      tagColor: "text-purple-700 bg-purple-50",
      parentService: "AI and Automation",
      parentHref: "/services",
      title: "Data Analytics and Intelligence",
      tagline: "Turn your data into decisions, not just dashboards.",
      description: "We build data infrastructure and analytics systems that help businesses understand what is happening and why. From data warehouse design and ETL pipelines to BI dashboards and predictive models, we create the analytical foundation that turns raw data into operational intelligence.",
      deliverables: [
        "Data warehouse and data lakehouse design and implementation",
        "ETL/ELT pipeline development and orchestration",
        "Business intelligence dashboard development (Metabase, Looker, custom)",
        "Product analytics instrumentation and event tracking",
        "Customer segmentation and cohort analysis systems",
        "Predictive modelling and machine learning model deployment",
        "Real-time streaming analytics pipelines",
        "Data quality monitoring and anomaly detection",
        "Self-serve reporting infrastructure for non-technical teams",
        "Data governance, lineage and documentation",
      ],
      whoFor: [
        {
          title: "Growing businesses making decisions on incomplete data",
          desc: "You know data-driven decisions are better but you are spending hours extracting spreadsheets and you still cannot get a clear picture. We build the infrastructure that changes that.",
        },
        {
          title: "Product teams who need usage intelligence",
          desc: "You want to understand how users engage with your product, where they drop off and what drives retention, with data you can trust.",
        },
        {
          title: "Operators who need real-time visibility",
          desc: "Your business moves fast and you need operational dashboards that reflect what is happening now, not last week's export.",
        },
      ],
      approach: [
        { step: "01", title: "Data audit", desc: "We map your existing data sources, quality and gaps, and agree on the questions you most need answers to." },
        { step: "02", title: "Architecture design", desc: "We design the right data stack for your scale, budget and team's technical capability." },
        { step: "03", title: "Build pipelines and models", desc: "Engineering the data infrastructure, transformations and analytical models." },
        { step: "04", title: "Deliver and enable", desc: "Dashboards, documentation and team training so your people can work with the data independently." },
      ],
      price: "From US$12,000",
      priceNote: "Analytics projects covering a single data source and dashboard set start from US$12,000. Multi-source data warehouse builds with complex modelling requirements are scoped through discovery to give you an accurate fixed price.",
      relatedServices: [
        { title: "LLM Integration", href: "/services/llm-integration" },
        { title: "Process Automation", href: "/services/process-automation" },
        { title: "Cloud and Infrastructure", href: "/services/cloud-migration" },
        { title: "Web Application Development", href: "/services/web-applications" },
      ],
    }} />
  );
}
