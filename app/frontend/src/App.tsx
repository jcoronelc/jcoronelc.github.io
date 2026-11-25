import React, { useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { AboutSection } from './components/home/AboutSection';
import { ResearchSection } from './components/home/ResearchSection';
import { PublicationsSection } from './components/home/PublicationsSection';
import { ProjectsSection } from './components/home/ProjectsSection';
import { VenturesSection } from './components/home/VenturesSection';
import { ExperienceSection } from './components/home/ExperienceSection';
import { EducationSection } from './components/home/EducationSection';
import { SkillsSection } from './components/home/SkillsSection';
import { ContactSection } from './components/home/ContactSection';

const SECTION_IDS = [
  'home',
  'glance',
  'about',
  'education',
  'research',
  'publications',
  'projects',
  'experience',
  'ventures',
  'skills',
  'contact',
];

/** Tracks which section crosses the upper third of the viewport, for the nav's current-location state. */
function useActiveSection(): string {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(visible[visible.length - 1].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

export const AppContent: React.FC = () => {
  const activeSection = useActiveSection();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#about"
        className="ui sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <Navbar activeSection={activeSection} />

      <main className="flex-1">
        <Hero />
        <AboutSection />
        <EducationSection />
        <ResearchSection />
        <PublicationsSection />
        <ProjectsSection />
        <ExperienceSection />
        <VenturesSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

import { Language } from './data/types';

export function App({ initialLanguage }: { initialLanguage?: Language } = {}) {
  return (
    <ThemeProvider>
      <LanguageProvider initialLanguage={initialLanguage}>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
