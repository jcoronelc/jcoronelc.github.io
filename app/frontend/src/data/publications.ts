import { PublicationItem } from './types';

export const publicationsData: PublicationItem[] = [
  {
    id: "springer-csei-2024",
    title: "Disruptive Innovation: A Systematic Review of the Impact of Generative Artificial Intelligence (AI) on Cybersecurity",
    authors: ["Samantha Armijos", "Juan Coronel", "Diego Ulloa", "Juan Veintimilla-Reyes"],
    venue: "Proceedings of the International Conference on Computer Science, Electronics and Industrial Engineering (CSEI), Lecture Notes in Networks and Systems (LNNS), Springer, vol. 181–206, 2026",
    year: 2026,
    status: "published",
    statusLabel: { en: "Published", es: "Publicado" },
    doi: "10.1007/978-3-031-98768-7_11",
    doiUrl: "https://doi.org/10.1007/978-3-031-98768-7_11",
    summary: {
      en: "A systematic literature review exploring disruptive innovations of generative AI and LLMs in both offensive and defensive cybersecurity vectors, proposing automated countermeasures and safety frameworks.",
      es: "Revisión sistemática sobre la innovación disruptiva de la IA generativa y LLMs en la ciberseguridad defensiva y ofensiva, identificando vectores de ataque asistidos por IA y contramedidas automatizadas."
    },
    bibtex: `@inproceedings{armijos2026disruptive,
  author    = {Armijos, Samantha and Coronel, Juan and Ulloa, Diego and Veintimilla-Reyes, Juan},
  title     = {Disruptive Innovation: A Systematic Review of the Impact of Generative Artificial Intelligence (AI) on Cybersecurity},
  booktitle = {Proceedings of the International Conference on Computer Science, Electronics and Industrial Engineering (CSEI 2024)},
  series    = {Lecture Notes in Networks and Systems},
  publisher = {Springer},
  pages     = {181--206},
  year      = {2026},
  doi       = {10.1007/978-3-031-98768-7_11}
}`
  },
  {
    id: "laclo-2026-award",
    title: "A Semantic Evaluation Framework for Digital Competence in University Syllabi using LLMs and Adaptive Weighting",
    authors: ["Juan Coronel", "Diego Ulloa", "Jorge Maldonado", "Víctor Saquicela"],
    venue: "XXI Latin American Conference on Learning Technologies (LACLO 2026), Rio de Janeiro, Brazil",
    year: 2026,
    status: "preprint",
    statusLabel: { en: "Awarded / Preprint", es: "Premiado / Preprint" },
    award: {
      en: "Third Place Award (3.er Lugar Internacional LACLO 2026)",
      es: "Premio al Tercer Lugar Latinoamericano (LACLO 2026)"
    },
    summary: {
      en: "Automated semantic evaluation framework measuring digital competencies across 363 university course syllabi against DigComp 2.2 and 3.0 frameworks. Uses adaptive weighting and stratified cross-validation with three local models across 187 curricula.",
      es: "Marco de evaluación semántica automatizada para medir competencias digitales en 363 sílabos universitarios frente a DigComp 2.2 y 3.0. Utiliza pesos adaptativos y validación cruzada con modelos locales sobre 187 programas."
    },
    bibtex: `@article{coronel2026semantic,
  author    = {Coronel, Juan and Ulloa, Diego and Maldonado, Jorge and Saquicela, V{\\'i}ctor},
  title     = {A Semantic Evaluation Framework for Digital Competence in University Syllabi using LLMs and Adaptive Weighting},
  journal   = {Preprint},
  note      = {Awarded Third Place at XXI Latin American Conference on Learning Technologies (LACLO 2026)},
  year      = {2026}
}`
  },
  {
    id: "cimps-2026-trace2spec",
    title: "Traceable by Design: A Specification-Driven Framework for AI-Assisted Software Development",
    authors: ["Juan Coronel", "Diego Ulloa", "Mauricio Peñafiel", "Víctor Saquicela"],
    venue: "15th International Conference on Software Process Improvement (CIMPS 2026)",
    year: 2026,
    status: "accepted",
    statusLabel: { en: "Accepted / In Press", es: "Aceptado / En Prensa" },
    summary: {
      en: "Introduces the Trace2Spec (T2S) framework and V-Bounce verification cycle, enforcing bidirectional traceability between formal requirements, architecture specifications, agent-generated code, and test suites. Evaluated on 3 production systems with 98.7% QA pass rate.",
      es: "Presenta el framework Trace2Spec (T2S) y el ciclo V-Bounce, garantizando trazabilidad formal entre requerimientos, especificaciones, código de agentes y pruebas. Evaluado en 3 sistemas en producción con 98.7% de pruebas QA aprobadas."
    },
    bibtex: `@inproceedings{coronel2026traceable,
  author    = {Coronel, Juan and Ulloa, Diego and Pe{\\~n}afiel, Mauricio and Saquicela, V{\\'i}ctor},
  title     = {Traceable by Design: A Specification-Driven Framework for AI-Assisted Software Development},
  booktitle = {Proceedings of the 15th International Conference on Software Process Improvement (CIMPS 2026)},
  year      = {2026}
}`
  },
  {
    id: "automl-position-paper-2026",
    title: "Position Paper: Multi-Agent AutoML for Generating Auditable and Explainable Pipelines",
    authors: ["J. Cuzco", "J. Cueva", "Juan Coronel", "Víctor Saquicela"],
    venue: "Preprint, Applied AI Systems Lab",
    year: 2026,
    status: "preprint",
    statusLabel: { en: "Preprint", es: "Preprint" },
    summary: {
      en: "Proposes a multi-agent AutoML architecture where specialized agent personas propose model transformations while deterministic verifiers produce transparent, auditable artifacts for regulated domains.",
      es: "Plantea una arquitectura multiagente para AutoML donde agentes especializados proponen transformaciones de machine learning mientras verificadores deterministas generan artefactos auditables para dominios regulados."
    },
    bibtex: `@article{cuzco2026position,
  author  = {Cuzco, J. and Cueva, J. and Coronel, Juan and Saquicela, V{\\'i}ctor},
  title   = {Position Paper: Multi-Agent AutoML for Generating Auditable and Explainable Pipelines},
  journal = {Preprint},
  year    = {2026}
}`
  },
  {
    id: "data2model-under-review",
    title: "Data2Model: An Autonomous Multi-Agent Framework for End-to-End Data Mart Generation",
    authors: ["Xavier Peña", "Juan Coronel", "Víctor Saquicela"],
    venue: "Indexed Journal (Under Review)",
    year: 2026,
    status: "under_review",
    statusLabel: { en: "Under Review", es: "En Revisión" },
    summary: {
      en: "Autonomous DataOps framework where LLM agents formulate dimensional schemas and deterministic routines perform exhaustive mathematical audits on complex relational data. Reduced migration validation from 8–10 weeks to 2.5 seconds with 100% parity.",
      es: "Framework DataOps autónomo donde agentes LLM generan modelos dimensionales y scripts deterministas validan la integridad de datos. Redujo la auditoría de migración de 8–10 semanas a 2.5 segundos con 100% de paridad."
    },
    bibtex: `@article{pena2026data2model,
  author  = {Pe{\\~n}a, Xavier and Coronel, Juan and Saquicela, V{\\'i}ctor},
  title   = {Data2Model: An Autonomous Multi-Agent Framework for End-to-End Data Mart Generation},
  journal = {Under Review},
  year    = {2026}
}`
  }
];
