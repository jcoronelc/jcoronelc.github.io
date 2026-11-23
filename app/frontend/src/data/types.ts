export type Language = 'en' | 'es';

export interface SocialLinks {
  github: string;
  linkedin: string;
  google_scholar: string;
  orcid: string;
  email: string;
  personal_email: string;
  phone: string;
  certificates_drive?: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: { en: string; es: string };
  detail: { en: string; es: string };
  iconName: string;
}

export interface ProfileData {
  name: string;
  headline: {
    en: string;
    es: string;
  };
  currentRoles: {
    en: string[];
    es: string[];
  };
  location: string;
  socials: SocialLinks;
  tagline: {
    en: string;
    es: string;
  };
  shortBio: {
    en: string;
    es: string;
  };
  narrativeBio: {
    en: string[];
    es: string[];
  };
  metrics: MetricItem[];
}

export interface ResearchPillar {
  id: string;
  title: { en: string; es: string };
  scope: { en: string; es: string };
  keyQuestions?: { en: string[]; es: string[] };
  relatedKeywords: string[];
}

export type PublicationStatus = 'published' | 'accepted' | 'under_review' | 'preprint' | 'in_preparation';

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status: PublicationStatus;
  statusLabel: { en: string; es: string };
  doi?: string;
  doiUrl?: string;
  pdfUrl?: string;
  codeUrl?: string;
  award?: { en: string; es: string };
  summary: { en: string; es: string };
  bibtex: string;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: { en: string; es: string };
  role: { en: string; es: string };
  context: string;
  category: 'research' | 'ai_engineering' | 'data_systems';
  featured: boolean;
  stack: string[];
  metricsSummary: { en: string; es: string };
  overview: { en: string; es: string };
  problem: { en: string; es: string };
  approach: { en: string; es: string };
  architectureDescription: { en: string; es: string };
  architectureDiagramSvg?: string;
  results: { en: string[]; es: string[] };
  links?: {
    paper?: string;
    repo?: string;
    demo?: string;
    docs?: string;
  };
}

export interface VentureApp {
  id: string;
  name: string;
  url: string;
  domain: string;
  tagline: { en: string; es: string };
  description: { en: string; es: string };
  badge: { en: string; es: string };
  stack: string[];
}

export interface StartupVenture {
  name: string;
  tagline: { en: string; es: string };
  description: { en: string; es: string };
  apps: VentureApp[];
}

export interface ExperienceItem {
  id: string;
  role: { en: string; es: string };
  organization: string;
  period: { en: string; es: string };
  location: string;
  type: 'full-time' | 'research' | 'consulting';
  achievements: { en: string[]; es: string[] };
  stack?: string[];
}

export interface EducationItem {
  id: string;
  degree: { en: string; es: string };
  institution: string;
  location: string;
  period: string;
  honors?: { en: string; es: string };
  gpa?: string;
  thesis?: { en: string; es: string };
  highlights?: { en: string[]; es: string[] };
}

export interface AwardItem {
  id: string;
  title: { en: string; es: string };
  event: string;
  rank: string;
  year: number;
  description: { en: string; es: string };
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: number;
}

export interface AcademicReference {
  name: string;
  title: { en: string; es: string };
  institution: string;
  credentials: string;
  email: string;
}

export interface SkillCategory {
  category: { en: string; es: string };
  items: string[];
}
