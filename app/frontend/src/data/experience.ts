import { ExperienceItem } from './types';

export const experienceData: ExperienceItem[] = [
  {
    id: "dtic-ai-leader",
    role: {
      en: "AI Leader & Research Engineer",
      es: "Líder de IA e Ingeniero de Investigación"
    },
    organization: "Dirección de Tecnologías de la Información y Comunicación (DTIC), Universidad de Cuenca",
    period: {
      en: "Jan 2026 – Present",
      es: "Ene 2026 – Actualidad"
    },
    location: "Cuenca, Ecuador",
    type: "full-time",
    achievements: {
      en: [
        "Lead institutional artificial intelligence adoption strategy across software engineering teams.",
        "Architected and deployed a private 3-node GPU cluster with Ollama and Model Context Protocol (MCP) gateway serving 30 active internal developers and researchers.",
        "Created the applied research frameworks Trace2Spec (AI software engineering) and Data2Model (DataOps automation).",
        "Lead engineering on core platforms: Admitto (16,573 admissions processed), Fluya (procurement state machine), and SABU (student grants)."
      ],
      es: [
        "Lidero la estrategia de adopción de Inteligencia Artificial para el equipo institucional de desarrollo de software.",
        "Diseñé y desplegué el cluster local de inferencia con Ollama distribuido en 3 nodos con GPU y el gateway MCP para 30 usuarios activos.",
        "Creador de los frameworks de investigación aplicada Trace2Spec (ingeniería de software asistida) y Data2Model (DataOps).",
        "Desarrollo e integración de plataformas institucionales: Admitto (16.573 aspirantes procesados), Fluya (contratación pública) y SABU (becas)."
      ]
    },
    stack: ["Python", "TypeScript", "LangGraph", "Ollama", "MCP", "Spring Boot 3", "Angular", "PostgreSQL", "Docker"]
  },
  {
    id: "erasmus-researcher",
    role: {
      en: "AI Engineer & Applied Researcher",
      es: "Ingeniero de IA e Investigador Aplicado"
    },
    organization: "Dirección de Innovación Educativa (Proyecto Erasmus+ GENIAL), Universidad de Cuenca",
    period: {
      en: "Sep 2025 – Dec 2025",
      es: "Sep 2025 – Dic 2025"
    },
    location: "Cuenca, Ecuador",
    type: "research",
    achievements: {
      en: [
        "Automated semantic evaluation of 363 academic syllabi across 6 faculties against the European DigComp framework using LLM-as-a-Judge and adaptive weighting (Awarded 3rd Place at LACLO 2026).",
        "Built multimodal pipelines using Agentic RAG for large-scale institutional document retrieval.",
        "Conducted stratified cross-validation across three local open-weight LLMs against proprietary baselines."
      ],
      es: [
        "Evaluación semántica de 363 sílabos de 6 facultades frente al marco europeo DigComp utilizando LLM-as-a-Judge y validación cruzada (Ganador del 3.er Lugar en LACLO 2026).",
        "Desarrollo de pipelines multimodales con Agentic RAG para recuperación de información documental a gran escala.",
        "Validación cruzada estratificada con tres modelos locales de código abierto frente a modelos propietarios."
      ]
    },
    stack: ["Python", "LangChain", "LLM-as-a-Judge", "Ollama", "PyTorch", "Pandas", "Scikit-learn"]
  },
  {
    id: "tomebamba-data-engineer",
    role: {
      en: "Data Engineer Jr",
      es: "Ingeniero de Datos Jr"
    },
    organization: "Importadora Tomebamba S.A.",
    period: {
      en: "Jul 2024 – Jul 2025",
      es: "Jul 2024 – Jul 2025"
    },
    location: "Cuenca, Ecuador",
    type: "full-time",
    achievements: {
      en: [
        "Built robust ETL/ELT pipelines using Apache Spark and Apache Airflow; authored dimensional data marts for commercial analytics.",
        "Implemented Machine Learning models for home appliance demand forecasting.",
        "Automated bank reconciliation via Robotic Process Automation (RPA), saving over 60 analyst hours monthly."
      ],
      es: [
        "Construcción de pipelines ETL/ELT con Apache Spark y Apache Airflow; modelado dimensional de data marts para analítica comercial.",
        "Modelos de Machine Learning para pronóstico de demanda de electrodomésticos.",
        "Automatización de conciliación bancaria mediante RPA (ahorro de 60 horas mensuales de analistas)."
      ]
    },
    stack: ["Apache Spark", "Apache Airflow", "Python", "SQL", "PostgreSQL", "Power BI", "RPA"]
  },
  {
    id: "gva-fullstack",
    role: {
      en: "Full-Stack Developer",
      es: "Desarrollador Full-Stack"
    },
    organization: "GVA Studios & App Solutions",
    period: {
      en: "Feb 2024 – May 2024",
      es: "Feb 2024 – May 2024"
    },
    location: "Cuenca, Ecuador",
    type: "full-time",
    achievements: {
      en: [
        "Engineered cloud ERP microservices for optical clinics covering billing, prescription orders, and real-time inventory management.",
        "Integrated secure payment gateways and responsive user interfaces."
      ],
      es: [
        "Desarrollo de ERP en la nube para centros ópticos (módulos de facturación, órdenes e inventario) sobre microservicios RESTful.",
        "Integración de pasarelas de pago seguras e interfaces de usuario responsivas."
      ]
    },
    stack: ["Node.js", "React", "TypeScript", "PostgreSQL", "REST APIs", "Docker"]
  },
  {
    id: "dimigon-data-analyst",
    role: {
      en: "Data Analyst",
      es: "Analista de Datos"
    },
    organization: "Dimigon Cía. Ltda.",
    period: {
      en: "Aug 2023 – Jan 2024",
      es: "Ago 2023 – Ene 2024"
    },
    location: "Cuenca, Ecuador",
    type: "full-time",
    achievements: {
      en: [
        "Designed 8 executive dashboards in Tableau for executive leadership and corporate finance.",
        "Cleaned, harmonized, and modeled relational SQL databases and automated scheduled data extracts using Python."
      ],
      es: [
        "Diseño de 8 tableros ejecutivos en Tableau para Gerencia y Finanzas, con modelado relacional en SQL y Python.",
        "Limpieza y armonización de datos relacionales y automatización de reportes periódicos."
      ]
    },
    stack: ["Tableau", "Python", "SQL", "PostgreSQL", "Excel Advanced"]
  }
];
