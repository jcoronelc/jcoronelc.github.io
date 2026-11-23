import { ProjectCaseStudy } from './types';

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "trace2spec",
    slug: "trace2spec",
    title: "Trace2Spec (T2S)",
    subtitle: {
      en: "Specification-Driven Framework for Verifiable Agentic Software Engineering",
      es: "Framework Guiado por Especificaciones para Ingeniería de Software Agéntica Verificable"
    },
    role: {
      en: "Creator & Lead Architect",
      es: "Creador y Arquitecto Principal"
    },
    context: "Dirección de TIC (DTIC), Universidad de Cuenca",
    category: "research",
    featured: true,
    stack: ["Python", "TypeScript", "LangChain", "Ollama", "Git Workflows", "Pytest", "MCP"],
    metricsSummary: {
      en: "98.7% QA pass rate in production (157/159 cases) across 15 developers and 10 repositories.",
      es: "98.7% de aprobación en pruebas QA en producción (157/159 casos) con 15 desarrolladores en 10 repositorios."
    },
    overview: {
      en: "Trace2Spec (T2S) is an agentic software development methodology and tooling ecosystem built on Spec-Driven Development (SDD). It enforces that AI coding agents cannot emit code until requirements, software design documents (SDD), and test criteria are formally synchronized in bidirectional traceability matrices.",
      es: "Trace2Spec (T2S) es una metodología y ecosistema agéntico basado en Spec-Driven Development (SDD). Obliga a que los agentes de IA no puedan emitir código hasta que requerimientos, documentos de diseño (SDD) y criterios de prueba estén formalmente sincronizados en matrices de trazabilidad bidireccionales."
    },
    problem: {
      en: "Autonomous code generation by LLMs suffers from architectural drift, phantom dependencies, and untraceable modifications, leading to high failure rates in enterprise software where auditability and rigor are non-negotiable.",
      es: "La generación autónoma de código por LLMs sufre de deriva arquitectónica, dependencias fantasma y modificaciones no trazables, causando altos índices de fallo en software empresarial donde la auditabilidad es innegociable."
    },
    approach: {
      en: "Introduced the V-Bounce verification cycle: requirements are compiled into formal contracts before coding begins. Each task is partitioned into bounded Development Units (DUs) validated by automated test harnesses before landing on mainline branches.",
      es: "Introdujo el ciclo de verificación V-Bounce: los requerimientos se compilan en contratos formales antes de escribir código. Cada tarea se divide en Unidades de Desarrollo (DUs) delimitadas y validadas por suites de prueba automáticas."
    },
    architectureDescription: {
      en: "Layered architecture: 1) Requirements & Context Intake, 2) Formal Specification Engine, 3) Agent Code Synthesizer bounded by contracts, 4) Continuous Verification Harness (TDD & Static Analysis), 5) Bidirectional Traceability Sync.",
      es: "Arquitectura en capas: 1) Ingesta de requerimientos y contexto, 2) Motor de especificación formal, 3) Sintetizador de código restringido por contratos, 4) Suite de verificación continua (TDD y análisis estático), 5) Sincronización de trazabilidad bidireccional."
    },
    results: {
      en: [
        "Adopted by 15 developers across 10 mission-critical institutional projects.",
        "Production QA approved 157 of 159 test cases (98.7% success rate).",
        "Formal traceability maintained between 94% and 100% across all milestones.",
        "Presented and accepted at the 15th CIMPS 2026 conference."
      ],
      es: [
        "Adoptado por 15 desarrolladores en 10 proyectos institucionales de misión crítica.",
        "QA en producción aprobó 157 de 159 casos de prueba (98.7% de tasa de éxito).",
        "Trazabilidad formal mantenida entre 94% y 100% a lo largo de todos los hitos.",
        "Presentado y aceptado en la conferencia internacional CIMPS 2026."
      ]
    },
    links: {
      paper: "https://doi.org",
      docs: "docs/design"
    }
  },
  {
    id: "data2model",
    slug: "data2model",
    title: "Data2Model (D2M)",
    subtitle: {
      en: "Autonomous Multi-Agent Framework for End-to-End Data Mart Generation",
      es: "Framework Multiagente Autónomo para Generación Integral de Data Marts"
    },
    role: {
      en: "Creator & Co-author",
      es: "Creador y Coautor"
    },
    context: "Dirección de TIC (DTIC), Universidad de Cuenca",
    category: "data_systems",
    featured: true,
    stack: ["Python", "Polars", "PostgreSQL", "Apache Spark", "Oracle Banner", "dbt", "SQL"],
    metricsSummary: {
      en: "99.9% acceleration: compressed 8–10 weeks of manual database audit into 2.5 seconds with 100% mathematical parity.",
      es: "Aceleración del 99.9%: comprimió 8–10 semanas de auditoría manual de base de datos a 2.5 segundos con 100% de paridad matemática."
    },
    overview: {
      en: "Data2Model combines LLM reasoning with deterministic data verification engines to automate dimensional modeling, schema harmonization, and data integrity audits during massive relational database migrations.",
      es: "Data2Model combina el razonamiento de LLMs con motores de verificación determinista para automatizar el modelado dimensional, la armonización de esquemas y las auditorías de integridad durante migraciones masivas de bases de datos relacionales."
    },
    problem: {
      en: "Migrating legacy institutional ERPs (such as Oracle Banner to open PostgreSQL architectures) requires verifying thousands of course prerequisites, curricular meshes, and relational constraints, taking teams months of error-prone manual SQL audits.",
      es: "Migrar ERPs institucionales heredados (como Oracle Banner a arquitecturas abiertas en PostgreSQL) requiere verificar miles de prerrequisitos, mallas curriculares y restricciones relacionales, tomando meses de auditorías SQL manuales propensas a errores."
    },
    approach: {
      en: "Decoupled architecture: language model agents formulate candidate dimensional mappings and schema transformations, while ultra-fast vectorized routines (Polars) execute exhaustive mathematical proofs against source data.",
      es: "Arquitectura desacoplada: agentes de lenguaje formulan mapeos dimensionales candidatos y transformaciones, mientras rutinas vectorizadas ultra-rápidas (Polars) ejecutan demostraciones matemáticas exhaustivas contra los datos fuente."
    },
    architectureDescription: {
      en: "Source Extraction Layer (Oracle/Postgres) -> Agentic Schema Profiler -> Deterministic Validation Engine (Polars/dbt) -> Target Data Mart Generator with instant parity report.",
      es: "Capa de extracción de fuentes -> Perfilador agéntico de esquemas -> Motor de validación determinista (Polars/dbt) -> Generador de data marts destino con reporte instantáneo de paridad."
    },
    results: {
      en: [
        "Audited 32 academic degree programs, 5,287 subjects, and 25,017 dependency relations.",
        "Execution time reduced from 8–10 human weeks to 2.5 seconds.",
        "Achieved 100% mathematical parity between source and target structures with zero manual errors.",
        "Full scientific paper currently under review in an indexed journal."
      ],
      es: [
        "Auditó 32 carreras universitarias, 5.287 asignaturas y 25.017 relaciones de dependencia.",
        "Tiempo de ejecución reducido de 8–10 semanas humanas a 2.5 segundos.",
        "100% de paridad matemática entre estructuras fuente y destino sin errores manuales.",
        "Artículo científico completo actualmente en revisión en revista indexada."
      ]
    }
  },
  {
    id: "admitto",
    slug: "admitto",
    title: "Admitto — Admissions Platform",
    subtitle: {
      en: "High-Concurrency University Admissions & Seat Allocation System",
      es: "Sistema de Admisión y Asignación de Cupos de Alta Concurrencia"
    },
    role: {
      en: "Lead Full-Stack & Systems Engineer",
      es: "Ingeniero Líder Full-Stack y de Sistemas"
    },
    context: "Universidad de Cuenca",
    category: "ai_engineering",
    featured: true,
    stack: ["Java (Spring Boot 3)", "Angular 21", "PostgreSQL", "Docker", "DINARP & SENESCYT APIs", "Redis"],
    metricsSummary: {
      en: "Processed 16,573 applicants under peak concurrent load with 100% uptime and digital certificate verification.",
      es: "Procesó a 16.573 postulantes bajo pico de alta concurrencia con 100% de disponibilidad y certificados digitales con código de verificación."
    },
    overview: {
      en: "Admitto is the core digital platform governing undergraduate admissions at Universidad de Cuenca. It orchestrates applicant enrollment, multi-round merit-based quota allocations, identity verification against national registries, and automated student creation.",
      es: "Admitto es la plataforma central que gobierna la admisión a pregrado en la Universidad de Cuenca. Orquesta la postulación, asignación meritocrática de cupos por rondas, validación de identidad con registros nacionales y matriculación automática."
    },
    problem: {
      en: "University admissions windows generate massive traffic spikes with thousands of candidates competing for limited academic seats simultaneously, demanding strict transactional guarantees, sub-second response times, and bulletproof validation.",
      es: "Las fases de postulación generan picos masivos de tráfico con miles de aspirantes compitiendo por cupos simultáneamente, exigiendo garantías transaccionales estrictas, respuestas en subsegundos y validación blindada."
    },
    approach: {
      en: "Engineered using Hexagonal Architecture (Ports and Adapters) with aggressive caching, asynchronous queuing for certificate PDF generation, and idempotent database procedures.",
      es: "Diseñado con Arquitectura Hexagonal con caché agresivo, colas asíncronas para generación de comprobantes digitales y procedimientos de base de datos idempotentes."
    },
    architectureDescription: {
      en: "Domain Core -> Application Services -> Infrastructure Adapters (PostgreSQL, Government DINARP REST APIs, PDF Generator, Mail Gateway). Containerized with Docker.",
      es: "Núcleo de Dominio -> Servicios de Aplicación -> Adaptadores de Infraestructura (PostgreSQL, APIs gubernamentales DINARP, Generador PDF, Pasarela de Correo). Contenerizado con Docker."
    },
    results: {
      en: [
        "16,573 applicants successfully processed across admission rounds.",
        "Zero downtime during peak allocation deadlines.",
        "Real-time validation against national civil registry databases.",
        "Seamless consolidation into institutional ERP upon student acceptance."
      ],
      es: [
        "16.573 postulantes procesados con éxito a través de las rondas de admisión.",
        "Cero caídas durante los momentos pico de cierre de cupos.",
        "Validación en tiempo real contra registros civiles nacionales.",
        "Consolidación automática en el ERP institucional tras la aceptación del estudiante."
      ]
    }
  },
  {
    id: "nexo-banking-agent",
    slug: "nexo",
    title: "NEXO — Multi-Agent Banking Intelligence",
    subtitle: {
      en: "Context-Aware Agent Swarm with Neo4j Knowledge Graph Memory",
      es: "Enjambre de Agentes Financieros con Memoria en Grafo Neo4j"
    },
    role: {
      en: "Core AI Engineer",
      es: "Ingeniero Principal de IA"
    },
    context: "Hackathon Banco Guayaquil (Finalist)",
    category: "research",
    featured: false,
    stack: ["Microsoft Agent Framework", "Azure AI Foundry", "Neo4j / Graphiti", "MCP", "FastAPI", "React", "PostgreSQL"],
    metricsSummary: {
      en: "Multi-agent swarm with temporal knowledge graph memory and deterministic human-in-the-loop safeguards.",
      es: "Enjambre multiagente con memoria en grafo de conocimiento temporal y salvaguardas humanas deterministas."
    },
    overview: {
      en: "NEXO is an intelligent banking assistant powered by a swarm of specialized agent personas (Accounts, Transfers, Financial Advisor, Credit Analysis) coordinated via Model Context Protocol (MCP) and temporal graph memory.",
      es: "NEXO es un asistente bancario inteligente impulsado por un enjambre de agentes especializados (Cuentas, Transferencias, Asesor Financiero, Crédito) coordinados mediante MCP y memoria temporal en grafos."
    },
    problem: {
      en: "Conversational banking bots typically lack long-term contextual memory, perform risky operations autonomously, and struggle to explain financial recommendations.",
      es: "Los bots bancarios conversacionales carecen de memoria contextual a largo plazo, realizan operaciones riesgosas de forma no supervisada y no explican sus recomendaciones."
    },
    approach: {
      en: "Connected LLM agents to Neo4j knowledge graphs to track customer financial context over time. All transactional actions require deterministic calculations and explicit human confirmation before execution.",
      es: "Conectó agentes LLM a grafos de conocimiento Neo4j para rastrear el contexto financiero del cliente. Todas las transacciones requieren cálculos deterministas y confirmación humana explícita."
    },
    architectureDescription: {
      en: "User -> React Frontend -> FastAPI Gateway -> Orchestrator Agent -> Specialized Worker Agents -> Neo4j Graphiti Knowledge Memory + Banking Core APIs.",
      es: "Usuario -> Frontend React -> Gateway FastAPI -> Agente Orquestador -> Agentes Especializados -> Memoria en Grafo Neo4j + APIs del Core Bancario."
    },
    results: {
      en: [
        "Created an explainable financial advisory engine with 0% unverified transactions.",
        "Sub-second agent routing utilizing lightweight local MCP protocols.",
        "Recognized by judges for innovative combination of Knowledge Graphs and Agent Harnesses."
      ],
      es: [
        "Motor de asesoría financiera explicable con 0% de transacciones no verificadas.",
        "Enrutamiento de agentes en subsegundos mediante protocolos MCP ligeros.",
        "Reconocido por el jurado por la innovadora combinación de grafos de conocimiento y harness de agentes."
      ]
    }
  },
  {
    id: "fluya-sabu",
    slug: "fluya-sabu",
    title: "Fluya & SABU — Institutional AI Platforms",
    subtitle: {
      en: "Public Procurement & Student Scholarships Automation Systems",
      es: "Sistemas de Contratación Pública y Becas Estudiantiles con IA"
    },
    role: {
      en: "Lead Developer & AI Integrator",
      es: "Desarrollador Líder e Integrador de IA"
    },
    context: "Universidad de Cuenca",
    category: "ai_engineering",
    featured: false,
    stack: ["Spring Boot 3", "Angular 20", "PostgreSQL", "Ollama (Local LLMs)", "ADFS SSO"],
    metricsSummary: {
      en: "Automates institutional procurement workflows and student scholarship allocations across 20,000+ university community.",
      es: "Automatiza flujos de contratación pública y adjudicación de becas para una comunidad universitaria de más de 20.000 miembros."
    },
    overview: {
      en: "Fluya manages university procurement and bureaucratic workflows via finite state machines and local AI assistants that classify purchasing legal modalities. SABU manages scholarship applications, socioeconomic scoring, and benefit disbursements.",
      es: "Fluya gestiona la contratación pública y trámites universitarios con máquinas de estado finito y un asistente inteligente que clasifica la modalidad de compra pública según la ley ecuatoriana (LOSNCP). SABU gestiona becas y ayudas económicas estudiantiles."
    },
    problem: {
      en: "Public procurement law is dense and prone to administrative bottlenecks, causing delays in university operations and purchasing audits.",
      es: "La ley de contratación pública es compleja y propensa a cuellos de botella administrativos, retrasando adquisiciones y auditorías institucionales."
    },
    approach: {
      en: "Integrated localized LLMs via Ollama to parse procurement descriptions and recommend compliant legal categories, paired with deterministic approval state graphs.",
      es: "Integró LLMs locales mediante Ollama para clasificar descripciones de compra y recomendar categorías legales, vinculado a grafos de estado deterministas."
    },
    architectureDescription: {
      en: "Angular Client -> Spring Boot Backend -> PostgreSQL -> Local Ollama GPU Cluster for private legal document classification.",
      es: "Cliente Angular -> Backend Spring Boot -> PostgreSQL -> Clúster GPU Ollama local para clasificación privada de documentos."
    },
    results: {
      en: [
        "Reduced initial procurement validation times by over 60%.",
        "Zero data leaked outside university infrastructure by running local LLM inference.",
        "Continuous tracking of thousands of student economic aid grants."
      ],
      es: [
        "Redujo los tiempos iniciales de validación de compras en más del 60%.",
        "Cero filtración de datos fuera de la universidad mediante inferencia con LLMs locales.",
        "Seguimiento continuo de miles de becas y ayudas económicas estudiantiles."
      ]
    }
  },
  {
    id: "hotellytics",
    slug: "hotellytics",
    title: "Hotellytics — Hospitality Market Intelligence",
    subtitle: {
      en: "Automated Rate Parity & Review Sentiment Platform",
      es: "Plataforma de Paridad Tarifaria y Sentimiento de Reseñas Hoteleras"
    },
    role: {
      en: "Data & Machine Learning Engineer",
      es: "Ingeniero de Datos y Machine Learning"
    },
    context: "Commercial Client / Hospitality",
    category: "data_systems",
    featured: false,
    stack: ["Apache Airflow", "Python", "LLMs", "React", "Recharts", "PostgreSQL", "Docker"],
    metricsSummary: {
      en: "Scrapes and audits rates for 92 hotels daily; sentiment analysis across 2,200+ multi-platform guest reviews.",
      es: "Scraping y auditoría diaria de tarifas para 92 hoteles; análisis de sentimiento en más de 2.200 reseñas de huéspedes."
    },
    overview: {
      en: "Hotellytics is an intelligence dashboard for revenue managers, orchestrating daily extraction of Online Travel Agency (OTA) pricing, room availability, and guest sentiment analytics.",
      es: "Hotellytics es un tablero de inteligencia para revenue managers que orquesta la extracción diaria de precios en agencias de viaje online (OTAs), disponibilidad de habitaciones y análisis de sentimiento."
    },
    problem: {
      en: "Hotels lose significant revenue due to undetected OTA rate disparities and slow reaction to negative guest feedback across fragmented booking channels.",
      es: "Los hoteles pierden ingresos significativos por disparidades de tarifas no detectadas en OTAs y lenta reacción a reseñas negativas en canales fragmentados."
    },
    approach: {
      en: "Built resilient Airflow DAGs with proxy rotation for daily rate extraction, feeding structured price indices and LLM-powered review aspect extraction into interactive Recharts visualizations.",
      es: "Construyó DAGs de Airflow resilientes con rotación de proxies para extracción diaria, alimentando índices de precios y extracción de aspectos con LLMs en visualizaciones interactivas."
    },
    architectureDescription: {
      en: "Airflow Scrapers -> Raw Lake -> Clean Transformation -> Sentiment & Entity LLM Pipeline -> PostgreSQL -> React Dashboard.",
      es: "Scrapers en Airflow -> Raw Lake -> Transformación -> Pipeline LLM de sentimiento y entidades -> PostgreSQL -> Dashboard React."
    },
    results: {
      en: [
        "Monitors 92 competing hotels daily with 99.5% scraping pipeline reliability.",
        "Parsed 2,200+ reviews categorized into clean operational action items.",
        "Delivered instant visibility into OTA contract price violations."
      ],
      es: [
        "Monitorea 92 hoteles competidores diariamente con 99.5% de confiabilidad de pipeline.",
        "Procesó más de 2.200 reseñas clasificadas en puntos de acción operativa.",
        "Visibilidad instantánea de violaciones de paridad de precios en contratos con OTAs."
      ]
    }
  }
];
