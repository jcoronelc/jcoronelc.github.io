import { ResearchPillar } from './types';

export const researchPillars: ResearchPillar[] = [
  {
    id: "llms-multi-agent-systems",
    title: {
      en: "LLMs and Multi-Agent Systems",
      es: "LLMs y Sistemas Multiagente"
    },
    scope: {
      en: "Orchestration of cooperative and hierarchical agent teams (CrewAI, LangGraph, ADK, Microsoft Agent Framework), with context engineering, episodic and semantic memory, and the Model Context Protocol (MCP). Applied to agentic software engineering through Specification-Driven Development (SDD), where formal requirements, architectural designs and behavioral contracts strictly precede code generation, with continuous bidirectional traceability: Requirement ↔ Specification ↔ Implementation ↔ Tests.",
      es: "Orquestación de equipos de agentes cooperativos y jerárquicos (CrewAI, LangGraph, ADK, Microsoft Agent Framework), con ingeniería de contexto, memoria episódica y semántica y Protocolo de Contexto de Modelos (MCP). Aplicada a la ingeniería de software agéntica mediante Spec-Driven Development (SDD), donde requisitos formales, diseños arquitectónicos y contratos de comportamiento preceden estrictamente a la generación de código, con trazabilidad bidireccional continua: Requisito ↔ Especificación ↔ Implementación ↔ Pruebas."
    },
    keyQuestions: {
      en: [
        "How can autonomous multi-agent teams maintain architectural invariants across long-horizon code synthesis?",
        "Can formal specifications constrain LLM code synthesis to achieve 100% QA test reproducibility?",
        "How to automate bidirectional sync between legacy repositories and verifiable architectural specs?"
      ],
      es: [
        "¿Cómo pueden los equipos multiagente mantener invariantes arquitectónicos durante la síntesis de software?",
        "¿Pueden las especificaciones formales restringir la síntesis de código para lograr 100% de reproducibilidad QA?",
        "¿Cómo automatizar la sincronización bidireccional entre repositorios heredados y especificaciones arquitectónicas?"
      ]
    },
    relatedKeywords: ["Multi-Agent Orchestration", "MCP", "LangGraph", "Trace2Spec", "V-Bounce Cycle", "Formal Traceability", "Harness Engineering", "Executable Specs"]
  },
  {
    id: "ontology-graphs-dataops",
    title: {
      en: "Ontology, Graphs and DataOps",
      es: "Ontologías, Grafos y DataOps"
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
    id: "false-assurance-llm",
    title: {
      en: "False Assurance in LLMs",
      es: "Falsa Seguridad en LLMs"
    },
    scope: {
      en: "How far the outputs of language models, and the evaluations that vouch for them, can be trusted. Covers LLM-as-a-Judge with adaptive weighting and stratified cross-validation between proprietary and local open-weight models, deterministic verification boundaries around tool execution, and provenance and auditability in autonomously generated machine learning pipelines (multi-agent AutoML with formal checkers).",
      es: "Hasta dónde se puede confiar en las salidas de los modelos de lenguaje y en las evaluaciones que las respaldan. Abarca LLM-as-a-Judge con ponderaciones adaptativas y validación cruzada estratificada entre modelos propietarios y locales de pesos abiertos, límites de verificación determinista en la ejecución de herramientas, y trazabilidad y auditabilidad en pipelines de aprendizaje automático generados de forma autónoma (AutoML multiagente con verificadores formales)."
    },
    keyQuestions: {
      en: [
        "How to eliminate judge bias when aligning large-scale university syllabi to international frameworks?",
        "Can local quantized models achieve evaluation parity with frontier models on domain-specific rubrics?",
        "What verification boundaries guarantee zero-hallucination tool execution in critical domains?",
        "How to guarantee provenance and auditability in autonomously generated predictive models?"
      ],
      es: [
        "¿Cómo eliminar el sesgo de evaluación al alinear sílabos universitarios con marcos internacionales?",
        "¿Pueden los modelos locales cuantizados alcanzar paridad evaluativa con modelos frontera en rúbricas especializadas?",
        "¿Qué límites de verificación garantizan cero alucinaciones en la ejecución de herramientas en entornos críticos?",
        "¿Cómo garantizar la trazabilidad y auditabilidad en modelos predictivos generados autónomamente?"
      ]
    },
    relatedKeywords: ["LLM-as-a-Judge", "Semantic Rubrics", "Cross-Validation", "Local LLMs", "Ollama", "Deterministic Verification", "Auditability", "AutoML"]
  }
];
