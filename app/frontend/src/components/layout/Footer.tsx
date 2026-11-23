import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { ExtLink } from '../ui/ExtLink';

const sections = [
  { id: 'about', label: { en: 'About', es: 'Perfil' } },
  { id: 'education', label: { en: 'Education', es: 'Formación' } },
  { id: 'research', label: { en: 'Research', es: 'Investigación' } },
  { id: 'publications', label: { en: 'Publications', es: 'Publicaciones' } },
  { id: 'projects', label: { en: 'Projects', es: 'Proyectos' } },
  { id: 'experience', label: { en: 'Experience', es: 'Experiencia' } },
  { id: 'ventures', label: { en: 'Ventures', es: 'Emprendimiento' } },
  { id: 'contact', label: { en: 'Contact', es: 'Contacto' } },
];

const ColumnTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="ui mb-4 text-sm font-semibold text-ink">{children}</h2>
);

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const { socials } = profileData;

  return (
    <footer className="border-t border-rule bg-paper-sunk">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-14">
          <div>
            <p className="font-serif text-2xl font-semibold leading-tight">{profileData.name}</p>
            <p className="mt-2 font-serif text-lg italic text-ink-muted">{t(profileData.headline)}</p>
            <ul className="ui mt-5 space-y-1.5 text-sm leading-relaxed text-ink-muted">
              {profileData.currentRoles[language].map((role) => (
                <li key={role}>{role}</li>
              ))}
              <li>{profileData.location}</li>
            </ul>
          </div>

          <nav aria-label={language === 'es' ? 'Secciones del sitio' : 'Site sections'}>
            <ColumnTitle>{language === 'es' ? 'Secciones' : 'Sections'}</ColumnTitle>
            <ul className="ui grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm md:grid-cols-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="link text-ink-muted">
                    {t(s.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <ColumnTitle>{language === 'es' ? 'Perfiles y contacto' : 'Profiles and contact'}</ColumnTitle>
            <ul className="ui space-y-2.5 text-sm">
              <li><ExtLink href={socials.google_scholar}>Google Scholar</ExtLink></li>
              <li><ExtLink href={socials.orcid}>ORCID</ExtLink></li>
              <li><ExtLink href={socials.github}>GitHub</ExtLink></li>
              <li><ExtLink href={socials.linkedin}>LinkedIn</ExtLink></li>
              <li>
                <a className="link break-all" href={`mailto:${socials.email}`}>{socials.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ui mt-12 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 border-t border-rule pt-6 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} {profileData.name}</p>
          <a href="#home" className="link">{language === 'es' ? 'Volver al inicio' : 'Back to top'}</a>
        </div>
      </div>
    </footer>
  );
};
