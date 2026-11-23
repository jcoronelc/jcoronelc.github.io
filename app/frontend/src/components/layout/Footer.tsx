import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { ExtLink } from '../ui/ExtLink';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { socials } = profileData;

  return (
    <footer className="border-t border-rule">
      <div className="ui mx-auto grid max-w-6xl gap-8 px-5 py-12 text-sm text-ink-muted sm:px-8 md:grid-cols-[1fr_auto]">
        <div className="space-y-1">
          <p className="font-serif text-base font-semibold text-ink">{profileData.name}</p>
          {profileData.currentRoles[language].map((role) => (
            <p key={role}>{role}</p>
          ))}
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
          <li><ExtLink href={socials.google_scholar}>Google Scholar</ExtLink></li>
          <li><ExtLink href={socials.orcid}>ORCID</ExtLink></li>
          <li><ExtLink href={socials.github}>GitHub</ExtLink></li>
          <li><ExtLink href={socials.linkedin}>LinkedIn</ExtLink></li>
        </ul>
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-rule pt-6 text-xs md:col-span-2">
          <p>
            © {new Date().getFullYear()} {profileData.name}.
          </p>
          <a href="#home" className="link">{language === 'es' ? 'Volver al inicio' : 'Back to top'}</a>
        </div>
      </div>
    </footer>
  );
};
