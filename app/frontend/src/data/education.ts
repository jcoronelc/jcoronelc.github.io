import { EducationItem, AwardItem, CertificationItem, AcademicReference } from './types';

export const educationData: EducationItem[] = [
  {
    id: "yachay-msc",
    degree: {
      en: "M.Sc. in Artificial Intelligence",
      es: "Maestría en Inteligencia Artificial (M.Sc.)"
    },
    institution: "Universidad Yachay Tech",
    location: "Urcuquí, Ecuador",
    period: "2026 – Present",
    highlights: {
      en: [
        "Advanced research in Deep Learning, Multi-Agent Coordination, and Knowledge Graphs.",
        "Highlighted Coursework: Foundations of Artificial Intelligence (Prof. Dr. Manuel Morocho-Cayamcela)."
      ],
      es: [
        "Investigación avanzada en Deep Learning, coordinación multiagente y grafos de conocimiento.",
        "Cursos destacados: Fundamentos de Inteligencia Artificial (Prof. Dr. Manuel Morocho-Cayamcela)."
      ]
    }
  },
  {
    id: "ucuenca-bsc",
    degree: {
      en: "B.S. in Computer Science Engineering",
      es: "Ingeniería en Ciencias de la Computación"
    },
    institution: "Universidad de Cuenca",
    location: "Cuenca, Ecuador",
    period: "Graduated: Nov 2025",
    honors: {
      en: "1st Place Valedictorian (Rank 1/21) | Highest Honor Distinction",
      es: "Primer Lugar de la Promoción (1/21) | Mención de Honor: Muy Buena"
    },
    gpa: "88.98 / 100",
    thesis: {
      en: "Multi-agent conversational chatbot based on LLM models and RAG architecture.",
      es: "Chatbot multiagente con IA conversacional basado en modelos LLM y arquitectura RAG."
    },
    highlights: {
      en: [
        "Graduated with the highest cumulative GPA in the entire engineering cohort.",
        "Authored 5 scientific research articles prior to graduation."
      ],
      es: [
        "Graduado con el promedio acumulado más alto de toda la promoción de ingeniería.",
        "Autor/coautor de 5 artículos científicos antes de graduarse."
      ]
    }
  }
];

export const awardsData: AwardItem[] = [
  {
    id: "laclo-2026",
    title: {
      en: "Third Place Award (3.er Lugar Latinoamericano)",
      es: "Premio al Tercer Lugar Latinoamericano"
    },
    event: "XXI Latin American Conference on Learning Technologies (LACLO 2026)",
    rank: "3rd Place",
    year: 2026,
    description: {
      en: "Awarded for research on semantic evaluation of university syllabi using LLMs and adaptive weighting (Rio de Janeiro, Brazil).",
      es: "Otorgado por la investigación sobre evaluación semántica de sílabos con LLMs y pesos adaptativos (Río de Janeiro, Brasil)."
    }
  },
  {
    id: "valedictorian",
    title: {
      en: "Class Valedictorian (1.er Puesto de Graduación)",
      es: "Primer Lugar de la Promoción (1/21)"
    },
    event: "Facultad de Ingeniería, Universidad de Cuenca",
    rank: "Rank 1 / 21",
    year: 2025,
    description: {
      en: "Recognized as the highest-achieving graduate in Computer Science Engineering with a final GPA of 88.98/100.",
      es: "Reconocido como el graduado con más alto rendimiento en Ingeniería en Ciencias de la Computación (88.98/100)."
    }
  },
  {
    id: "develando-oportunidades",
    title: {
      en: "Second Place National Innovation Award",
      es: "Segundo Lugar Nacional Concurso 'Develando Oportunidades'"
    },
    event: "Ministerio de Educación del Ecuador",
    rank: "2nd Place",
    year: 2020,
    description: {
      en: "National tech and innovation contest organized by the Ecuadorian Ministry of Education.",
      es: "Concurso nacional de innovación tecnológica y educativa del Ministerio de Educación del Ecuador."
    }
  },
  {
    id: "edec-ep",
    title: {
      en: "Third Place Innovation & Entrepreneurship Fair",
      es: "Tercer Lugar Feria de Innovación y Emprendimiento"
    },
    event: "EDEC EP",
    rank: "3rd Place",
    year: 2019,
    description: {
      en: "Municipal technology innovation and entrepreneurship showcase in Cuenca, Ecuador.",
      es: "Feria municipal de tecnología, innovación y emprendimiento de Cuenca."
    }
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-data-scientist",
    title: "Data Scientist with Python",
    issuer: "Platzi",
    year: 2024
  },
  {
    id: "cert-data-analyst",
    title: "Data Analyst",
    issuer: "Platzi",
    year: 2024
  },
  {
    id: "cert-data-manipulation",
    title: "Data Analysis & Manipulation with Python",
    issuer: "Platzi",
    year: 2024
  },
  {
    id: "cert-english-b2",
    title: "English B2 Level Certification",
    issuer: "Oxford Britannia Institute",
    year: 2025
  }
];

export const academicReferences: AcademicReference[] = [
  {
    name: "Dr. Víctor Hugo Saquicela Galarza, Ph.D.",
    title: {
      en: "Director of ICT (DTIC), Universidad de Cuenca | Full Professor",
      es: "Director de Tecnologías de la Información y Comunicación (DTIC), Univ. de Cuenca"
    },
    institution: "Universidad de Cuenca",
    credentials: "Ph.D. in Computer Science & AI (Universidad Politécnica de Madrid)",
    email: "victor.saquicela@ucuenca.edu.ec"
  },
  {
    name: "Dr. Jorge Javier Maldonado Mahauad, Ph.D.",
    title: {
      en: "Associate Professor & Senior Researcher | Chair LACLO",
      es: "Profesor Asociado e Investigador Principal | Chair LACLO"
    },
    institution: "Universidad de Cuenca",
    credentials: "Ph.D. in Engineering Sciences (Pontificia Universidad Católica de Chile)",
    email: "jorge.maldonado@ucuenca.edu.ec"
  },
  {
    name: "Dr. Manuel Eugenio Morocho-Cayamcela, Ph.D.",
    title: {
      en: "Research Coordinator, School of Mathematical & Computational Sciences",
      es: "Coordinador de Investigación, Escuela de Ciencias Matemáticas y Computacionales"
    },
    institution: "Universidad Yachay Tech",
    credentials: "Ph.D. in AI (Kumoh National Institute of Technology, South Korea) | M.Sc. Univ. of Birmingham (UK)",
    email: "mmorocho@yachaytech.edu.ec"
  }
];
