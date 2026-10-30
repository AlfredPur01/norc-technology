import SubServicePage from "@/components/SubServicePage";

export const metadata = { title: "LLM Integration | Norc Technology" };

export default function LlmIntegrationPage() {
  return (
    <SubServicePage data={{
      tag: "AI",
      tagColor: "text-purple-700 bg-purple-50",
      parentService: "AI and Automation",
      parentHref: "/services",
      title: "LLM Integration",
      tagline: "Add language model intelligence to your product without building from scratch.",
      description: "We integrate large language models into your existing products and workflows, turning raw AI capabilities into features your users actually need. From prompt engineering and retrieval-augmented generation to fine-tuning and production deployment, we handle the full engineering lifecycle of putting LLMs to work reliably.",
      deliverables: [
        "LLM API integration (OpenAI, Anthropic, Google, open-source models)",
        "Retrieval-augmented generation (RAG) system design and build",
        "Vector database setup and embedding pipeline engineering",
        "Prompt engineering, chaining and structured output design",
        "Fine-tuning pipelines for domain-specific models",
        "Evaluation frameworks and LLM output quality measurement",
        "Streaming responses and real-time UX patterns",
        "Token cost management and caching strategies",
        "Model routing and fallback logic for reliability",
        "Production observability: latency, cost and quality monitoring",
      ],
      whoFor: [
        {
          title: "Product teams adding AI features",
          desc: "You want to add summarisation, content generation, semantic search or classification to your product and need engineers who know how to do it well.",
        },
        {
          title: "Businesses with proprietary knowledge to leverage",
          desc: "You have a large corpus of internal documents, product data or customer history that should power intelligent features. RAG is how you get there.",
        },
        {
          title: "Teams who tried LLMs but hit reliability issues",
          desc: "You experimented with an LLM integration but the outputs are inconsistent, costs are unpredictable, or latency is unacceptable. We fix it properly.",
        },
      ],
      approach: [
        { step: "01", title: "Capability scoping", desc: "We identify the right LLM capability for your use case and define what good output looks like before writing code." },
        { step: "02", title: "Architecture design", desc: "We design the data pipeline, retrieval strategy and prompt architecture before implementation begins." },
        { step: "03", title: "Build and evaluate", desc: "Engineering alongside systematic evaluation to ensure output quality meets your standards." },
        { step: "04", title: "Production hardening", desc: "Monitoring, cost controls, fallback strategies and performance optimisation for production loads." },
      ],
      price: "From US$12,000",
      priceNote: "Straightforward LLM feature integrations start from US$12,000. RAG systems with complex data pipelines, fine-tuning or multi-model architectures are scoped through a discovery sprint to give you an accurate fixed price.",
      relatedServices: [
        { title: "AI Chatbots and Agents", href: "/services/ai-chatbots" },
        { title: "Process Automation", href: "/services/process-automation" },
        { title: "Data Analytics", href: "/services/data-analytics" },
        { title: "API Development and Integration", href: "/services/api-development" },
      ],
    }} />
  );
}
