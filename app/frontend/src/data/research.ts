import { ResearchPillar } from './types';

export const researchPillars: ResearchPillar[] = [
  {
    id: "multi-agent-systems",
    title: {
      en: "Multi-Agent Systems & Agentic Architectures",
      es: "Sistemas Multiagente y Arquitecturas Agénticas"
    },
    scope: {
      en: "Orchestration of cooperative and hierarchical agent teams (CrewAI, LangGraph, ADK, Microsoft Agent Framework). Dynamic context engineering, episodic/semantic memory, deterministic tool-calling, and Model Context Protocol (MCP) in enterprise systems.",
      es: "Orquestación de agentes cooperativos y jerárquicos (CrewAI, LangGraph, ADK, Microsoft Agent Framework). Ingeniería de contexto dinámico, memoria episódica/semántica, uso determinista de herramientas y Protocolo de Contexto de Modelos (MCP) empresarial."
    },
    keyQuestions: {
      en: [
        "How can autonomous multi-agent teams maintain architectural invariants across long-horizon code synthesis?",
        "What verification boundaries guarantee zero-hallucination tool execution in critical domains?"
      ],
      es: [
        "¿Cómo pueden los equipos multiagente mantener invariantes arquitectónicos durante la síntesis de software?",
        "¿Qué límites de verificación garantizan cero alucinaciones en la ejecución de herramientas en entornos críticos?"
      ]
    },
    relatedKeywords: ["Multi-Agent Orchestration", "MCP", "Hierarchical Swarms", "Deterministic Tool Calling", "LangGraph"]
  },
  {
    id: "spec-driven-development",
    title: {
      en: "Agentic Software Engineering (Spec-Driven Development)",
      es: "Ingeniería de Software Asistida por IA (Spec-Driven Development)"
    },
    scope: {
      en: "Specification-Driven Development (SDD) where formal requirements, architectural designs, and behavioral contracts strictly precede agentic code generation. Continuous bidirectional traceability: Requirement ↔ Specification ↔ Implementation ↔ Tests.",
      es: "Desarrollo guiado por especificaciones ejecutables donde el diseño y los contratos preceden al código. Trazabilidad bidireccional continua: Requisito ↔ Especificación ↔ Implementación ↔ Pruebas unitarias/QA."
    },
    keyQuestions: {
      en: [
        "Can formal specifications constrain LLM code synthesis to achieve 100% QA test reproducibility?",
        "How to automate bidirectional sync between legacy repositories and verifiable architectural specs?"
      ],
      es: [
        "¿Pueden las especificaciones formales restringir la síntesis de código para lograr 100% de reproducibilidad QA?",
        "¿Cómo automatizar la sincronización bidireccional entre repositorios heredados y especificaciones arquitectónicas?"
      ]
    },
    relatedKeywords: ["Trace2Spec", "V-Bounce Cycle", "Formal Traceability", "Harness Engineering", "Executable Specs"]
  },
  {
    id: "dataops-knowledge-graphs",
    title: {
      en: "DataOps Automation & Knowledge Graphs (GraphRAG)",
      es: "Automatización de Ingeniería de Datos y Grafos de Conocimiento"
    },
    scope: {
      en: "Autonomous dimensional modeling and schema harmonization for heterogeneous databases into AI-ready lakehouse formats. Combining GraphRAG with hybrid vector-graph indexing for grounded contextual retrieval.",
      es: "Generación autónoma de modelos dimensionales y armonización de esquemas relacionales complejos hacia formatos AI-ready. Integración de GraphRAG y recuperación híbrida vectorial-grafo para razonamiento contextual."
    },
    keyQuestions: {
      en: [
        "How to automate multi-table relational schema audits with sub-second mathematical verification?",
        "What graph topology best preserves entity semantics for real-time conversational reasoning?"
      ],
      es: [
        "¿Cómo automatizar auditorías de esquemas relacionales con verificación matemática en subsegundos?",
        "¿Qué topología de grafo preserva mejor la semántica de entidades para razonamiento conversacional en tiempo real?"
      ]
    },
    relatedKeywords: ["Data2Model", "GraphRAG", "DataOps", "Dimensional Modeling", "PostgreSQL", "Polars", "dbt"]
  },
  {
    id: "llm-as-a-judge",
    title: {
      en: "Trustworthy LLM Evaluation (LLM-as-a-Judge)",
      es: "Evaluación Confiable de Modelos (LLM-as-a-Judge)"
    },
    scope: {
      en: "Automated semantic evaluation of unstructured academic and institutional corpora using adaptive weighting schemes. Stratified cross-validation between proprietary models and local open-weight LLMs (Ollama/Llama 3/Mistral).",
      es: "Evaluación semántica automatizada de corpus no estructurados con ponderaciones adaptativas y validación cruzada estratificada entre modelos propietarios y LLMs locales de código abierto."
    },
    keyQuestions: {
      en: [
        "How to eliminate judge bias when aligning large-scale university syllabi to international frameworks?",
        "Can local quantized models achieve evaluation parity with frontier models on domain-specific rubrics?"
      ],
      es: [
        "¿Cómo eliminar el sesgo de evaluación al alinear sílabos universitarios con marcos internacionales?",
        "¿Pueden los modelos locales cuantizados alcanzar paridad evaluativa con modelos frontera en rúbricas especializadas?"
      ]
    },
    relatedKeywords: ["LLM-as-a-Judge", "Semantic Rubrics", "Local LLMs", "Ollama", "Cross-Validation"]
  },
  {
    id: "multi-agent-automl",
    title: {
      en: "Multi-Agent AutoML & Auditable Pipelines",
      es: "AutoML Multiagente y Pipelines Auditables"
    },
    scope: {
      en: "Autonomous generation of auditable and explainable machine learning workflows. Combining exploratory neural/statistical agents with deterministic formal checkers for regulated and high-stakes decision systems.",
      es: "Generación autónoma de flujos de aprendizaje automático auditables y explicables. Combinación de agentes exploratorios con verificadores formales para entornos regulados y de alta precisión."
    },
    keyQuestions: {
      en: [
        "How to guarantee provenance and auditability in autonomously generated predictive models?",
        "What collaboration protocol prevents cascading optimization errors in multi-agent pipelines?"
      ],
      es: [
        "¿Cómo garantizar la trazabilidad y auditabilidad en modelos predictivos generados autónomamente?",
        "¿Qué protocolo de colaboración previene errores de optimización en cascada en pipelines multiagente?"
      ]
    },
    relatedKeywords: ["AutoML", "Explainable AI (XAI)", "Deterministic Verification", "Surrogate ML", "Auditability"]
  }
];
