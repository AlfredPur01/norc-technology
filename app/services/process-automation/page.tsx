import SubServicePage from "@/components/SubServicePage";

export const metadata = { title: "Process Automation | Norc Technology" };

export default function ProcessAutomationPage() {
  return (
    <SubServicePage data={{
      tag: "AI",
      tagColor: "text-purple-700 bg-purple-50",
      parentService: "AI and Automation",
      parentHref: "/services",
      title: "Process Automation",
      tagline: "Eliminate repetitive work and let your team focus on what actually matters.",
      description: "We analyse your business workflows and build automation that removes manual, error-prone tasks from your operations. From document processing and approval workflows to system-to-system data synchronisation, we design and implement automations that run reliably at scale.",
      deliverables: [
        "Business process analysis and automation opportunity mapping",
        "Document processing and data extraction automation",
        "Approval workflow and routing automation",
        "System-to-system data synchronisation pipelines",
        "Scheduled reporting and alert automation",
        "Email and communication workflow automation",
        "RPA (Robotic Process Automation) for legacy system interaction",
        "AI-enhanced document classification and routing",
        "Error handling, retry logic and audit trail design",
        "Monitoring dashboards for automation health and throughput",
      ],
      whoFor: [
        {
          title: "Operations teams buried in manual work",
          desc: "Your team spends significant time on tasks that follow consistent rules: data entry, approvals, report generation or system updates. That time can be reclaimed.",
        },
        {
          title: "Businesses processing high volumes of documents",
          desc: "Invoices, contracts, applications or forms that need to be read, classified and routed can be handled automatically at any volume.",
        },
        {
          title: "Companies connecting disconnected systems",
          desc: "Data that should flow automatically between your CRM, ERP, billing and other systems instead requires manual export and import. We close that gap.",
        },
      ],
      approach: [
        { step: "01", title: "Process mapping", desc: "We document your current workflows in detail, identify the highest-value automation targets and quantify the impact." },
        { step: "02", title: "Automation design", desc: "We design the automation architecture, data flows and error handling before any build begins." },
        { step: "03", title: "Build and test", desc: "Engineering with thorough testing against real data samples, including edge cases and failure scenarios." },
        { step: "04", title: "Handover and monitor", desc: "Documentation, team training and a monitoring setup so you can see exactly what the automation is doing." },
      ],
      price: "From US$8,000",
      priceNote: "Single-process automations start from US$8,000. Enterprise-scale automation programmes with multiple workflows and integrations are scoped through discovery to produce an accurate fixed price.",
      relatedServices: [
        { title: "AI Chatbots and Agents", href: "/services/ai-chatbots" },
        { title: "LLM Integration", href: "/services/llm-integration" },
        { title: "API Development and Integration", href: "/services/api-development" },
        { title: "Data Analytics", href: "/services/data-analytics" },
      ],
    }} />
  );
}
