import { StartupVenture } from './types';

export const zeroAiVenture: StartupVenture = {
  name: "ZeroAI Data & AI",
  tagline: {
    en: "AI-Native & Data Systems Venture",
    es: "Venture de Sistemas de Datos e IA Nativa"
  },
  description: {
    en: "Applied AI and DataOps initiative developing autonomous, production-ready software solutions for enterprise automation, hospitality intelligence, and personal finance.",
    es: "Iniciativa de IA aplicada y DataOps que desarrolla soluciones de software autónomas y listas para producción en inteligencia hotelera, finanzas y automatización empresarial."
  },
  apps: [
    {
      id: "hotelio",
      name: "Hotelio",
      url: "https://hotelio.lat",
      domain: "hotelio.lat",
      tagline: {
        en: "Hospitality Market Intelligence & Rate Parity",
        es: "Inteligencia de Mercado Hotelero y Paridad de Tarifas"
      },
      description: {
        en: "Automated rate parity monitoring and guest sentiment analytics platform. Daily extraction across 90+ hotels and online travel agencies (OTAs) with real-time revenue management dashboards.",
        es: "Plataforma de monitoreo automatizado de paridad tarifaria y análisis de sentimiento de huéspedes. Extracción diaria en más de 90 hoteles y agencias online (OTAs) con tableros en tiempo real para revenue managers."
      },
      badge: { en: "Live Web App", es: "App en Producción" },
      stack: ["Python", "Apache Airflow", "LLM Sentiment", "React", "Recharts", "PostgreSQL"]
    },
    {
      id: "fink",
      name: "Fink",
      url: "https://fink.lat",
      domain: "fink.lat",
      tagline: {
        en: "Conversational Financial Intelligence via WhatsApp",
        es: "Inteligencia Financiera Conversacional por WhatsApp"
      },
      description: {
        en: "Smart personal finance assistant operating via WhatsApp. Integrates GraphRAG and multi-agent reasoning to categorize expenses, track financial habits, and answer contextual financial queries naturally.",
        es: "Asistente inteligente de finanzas personales que opera vía WhatsApp. Integra GraphRAG y razonamiento multiagente para clasificar gastos, analizar hábitos y responder consultas financieras contextuales de forma natural."
      },
      badge: { en: "Live Web App", es: "App en Producción" },
      stack: ["FastAPI", "Knowledge Graphs", "Agentic RAG", "WhatsApp API", "Neo4j"]
    },
    {
      id: "amara",
      name: "Amara",
      url: "https://amara.lat",
      domain: "amara.lat",
      tagline: {
        en: "Enterprise Data & AI Automation Platform",
        es: "Plataforma de Automatización de Datos e IA Empresarial"
      },
      description: {
        en: "Next-generation data and AI platform designed to transform complex enterprise data workflows into autonomous, verifiable pipelines with auditable guarantees.",
        es: "Plataforma de datos e inteligencia artificial de última generación diseñada para transformar flujos de trabajo de datos complejos en pipelines autónomos y verificables con garantías auditables."
      },
      badge: { en: "Live Web App", es: "App en Producción" },
      stack: ["Python", "Polars", "Multi-Agent Pipelines", "TypeScript", "PostgreSQL"]
    }
  ]
};
