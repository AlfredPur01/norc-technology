import SubServicePage from "@/components/SubServicePage";

export const metadata = { title: "AI Chatbots and Agents | Norc Technology" };

export default function AiChatbotsPage() {
  return (
    <SubServicePage data={{
      tag: "AI",
      tagColor: "text-purple-700 bg-purple-50",
      parentService: "AI and Automation",
      parentHref: "/services",
      title: "AI Chatbots and Agents",
      tagline: "Intelligent assistants that understand context and take meaningful action.",
      description: "We build AI-powered chatbots and autonomous agents that go far beyond scripted responses. Using large language models and a structured engineering approach, we create conversational systems that understand intent, access your data, and take real actions inside your product or business.",
      deliverables: [
        "Customer support chatbots with knowledge base integration",
        "Sales and lead qualification AI assistants",
        "Internal knowledge management and Q&A agents",
        "Multi-step autonomous agents with tool use and function calling",
        "Voice-enabled AI assistants",
        "AI agents integrated into your existing product UI",
        "Escalation paths and human handoff logic",
        "Conversation history, analytics and improvement loops",
        "Fine-tuning and prompt engineering for your specific domain",
        "Safety guardrails, content filtering and compliance controls",
      ],
      whoFor: [
        {
          title: "SaaS companies wanting to embed AI",
          desc: "You want to add an intelligent assistant to your product that understands your data and can help users accomplish tasks without leaving your platform.",
        },
        {
          title: "Customer-facing businesses with high support volume",
          desc: "You are handling repetitive customer queries at scale. An AI assistant can resolve the majority of them instantly while escalating the complex ones.",
        },
        {
          title: "Teams drowning in internal knowledge management",
          desc: "Your team spends too much time searching for information across docs, Notion, Slack and spreadsheets. An internal agent surfaces answers instantly.",
        },
      ],
      approach: [
        { step: "01", title: "Use case definition", desc: "We identify the highest-value conversations to automate and define what good looks like." },
        { step: "02", title: "Data and context design", desc: "We design the knowledge architecture, retrieval strategy and tool access the agent needs." },
        { step: "03", title: "Build and evaluate", desc: "Engineering, prompt development and systematic evaluation against real conversation samples." },
        { step: "04", title: "Deploy and improve", desc: "Production deployment with monitoring, analytics and a structured improvement loop." },
      ],
      price: "From US$10,000",
      priceNote: "Simple knowledge-base chatbots start from US$10,000. Multi-agent systems with complex tool use, custom integrations or fine-tuning requirements are scoped through a discovery sprint to produce an accurate fixed price.",
      relatedServices: [
        { title: "LLM Integration", href: "/services/llm-integration" },
        { title: "Process Automation", href: "/services/process-automation" },
        { title: "Data Analytics", href: "/services/data-analytics" },
        { title: "Web Application Development", href: "/services/web-applications" },
      ],
    }} />
  );
}
