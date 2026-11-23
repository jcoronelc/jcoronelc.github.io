import { ProfileData } from './types';

export const profileData: ProfileData = {
  name: "Juan José Coronel Crespo",
  headline: {
    en: "AI Engineer | Agentic AI & LLM Systems | Data Engineering",
    es: "Ingeniero de IA | IA Agéntica y Sistemas LLM | Ingeniería de Datos"
  },
  currentRoles: {
    en: [
      "AI Leader & Research Engineer @ DTIC, Universidad de Cuenca",
      "M.Sc. Student in Artificial Intelligence @ Yachay Tech University"
    ],
    es: [
      "Líder de IA e Ingeniero de Investigación @ DTIC, Universidad de Cuenca",
      "Estudiante de Maestría en Inteligencia Artificial @ Universidad Yachay Tech"
    ]
  },
  location: "Cuenca, Ecuador",
  socials: {
    github: "https://github.com/jcoronelc",
    linkedin: "https://www.linkedin.com/in/juan-coronelc/",
    google_scholar: "https://scholar.google.com/citations?user=IPXTv_oAAAAJ&hl=es",
    orcid: "https://orcid.org/0009-0009-7461-1473",
    email: "juan.coronel@ucuenca.edu.ec",
    personal_email: "juanchocoronel80@gmail.com",
    phone: "+593 98 397 6533",
    certificates_drive: "https://drive.google.com/drive/folders/1zbs9TE5Z8bKUIsLEU3o6JADHou8F3uD-?usp=drive_link"
  },
  tagline: {
    en: "Building intelligent systems at the intersection of AI research, software engineering, and data.",
    es: "Construyendo sistemas inteligentes en la intersección de la investigación en IA, ingeniería de software y datos."
  },
  shortBio: {
    en: "Computer Science Engineer (1st in class, rank 1/21) & applied AI researcher with 5 scientific publications. Creator of traceable software and DataOps frameworks.",
    es: "Ingeniero en Ciencias de la Computación (1.er puesto de promoción, 1/21) e investigador en IA con 5 trabajos científicos. Creador de marcos de software trazable y de DataOps."
  },
  narrativeBio: {
    en: [
      "I am a Computer Science Engineer graduated first in my class (GPA 88.98/100, rank 1/21) from Universidad de Cuenca, currently pursuing a Master's degree in Artificial Intelligence at Yachay Tech University. My work lives at the intersection of applied AI research and production-grade systems engineering.",
      "As AI Leader & Research Engineer at the ICT Department (DTIC) of Universidad de Cuenca, I lead the development of agentic AI frameworks (Trace2Spec), DataOps orchestration systems (Data2Model), and local AI infrastructure. I have co-authored 5 scientific papers (Springer LNNS, CIMPS 2026, LACLO 2026 3rd Place Award, and preprints).",
      "My mission is to build transparent, auditable, and mathematically verifiable AI systems that bridge academic rigor with real-world institutional impact."
    ],
    es: [
      "Soy Ingeniero en Ciencias de la Computación graduado con el promedio más alto de mi promoción (88.98/100, 1/21) en la Universidad de Cuenca y actual estudiante de la Maestría en Inteligencia Artificial en la Universidad Yachay Tech. Mi trabajo se sitúa en la intersección entre la investigación aplicada en IA y la ingeniería de software de misión crítica.",
      "Como AI Leader & Research Engineer en la Dirección de TIC de la Universidad de Cuenca, diseño e implemento infraestructuras de agentes, marcos de desarrollo asistido por especificaciones (Trace2Spec) y pipelines de automatización de datos (Data2Model). Cuento con 5 artículos científicos (publicados en Springer, CIMPS, LACLO y preprints), incluyendo el 3.er lugar latinoamericano en LACLO 2026.",
      "Mi enfoque busca construir sistemas de IA transparentes, auditables, matemáticamente verificables y capaces de operar en producción a gran escala."
    ]
  },
  metrics: [
    {
      id: "academic-merit",
      value: "1º / 21",
      label: { en: "Class Valedictorian", es: "Mérito Académico" },
      detail: { en: "Highest GPA in Computer Science (88.98 / 100)", es: "Mejor promedio de la promoción (88.98 / 100)" },
      iconName: "GraduationCap"
    },
    {
      id: "publications",
      value: "5",
      label: { en: "Scientific Papers", es: "Publicaciones Científicas" },
      detail: { en: "Springer, CIMPS, LACLO & preprints", es: "Springer, CIMPS, LACLO y preprints" },
      iconName: "BookOpen"
    },
    {
      id: "award",
      value: "3rd Place",
      label: { en: "LACLO 2026 Award", es: "Premio Internacional LACLO" },
      detail: { en: "Latin American Conference on Learning Technologies (Rio de Janeiro)", es: "Conferencia Latinoamericana en Río de Janeiro, Brasil" },
      iconName: "Award"
    },
    {
      id: "users-production",
      value: "16.5k+",
      label: { en: "Users in Production", es: "Usuarios en Producción" },
      detail: { en: "Processed by Admitto university admissions platform", es: "Postulantes procesados en plataforma Admitto" },
      iconName: "Users"
    },
    {
      id: "data-acceleration",
      value: "99.9%",
      label: { en: "DataOps Acceleration", es: "Aceleración de Datos" },
      detail: { en: "Audit reduced from 8-10 weeks to 2.5s (100% parity)", es: "De 8–10 semanas de auditoría a 2.5s (100% paridad)" },
      iconName: "Zap"
    },
    {
      id: "qa-pass-rate",
      value: "98.7%",
      label: { en: "QA Test Pass Rate", es: "Calidad QA en Producción" },
      detail: { en: "157 of 159 QA test cases approved with Trace2Spec", es: "157 de 159 casos QA aprobados con Trace2Spec" },
      iconName: "CheckCircle2"
    }
  ]
};
