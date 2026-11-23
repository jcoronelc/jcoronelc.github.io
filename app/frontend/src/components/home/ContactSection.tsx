import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { Section } from '../ui/Section';
import { ExtLink } from '../ui/ExtLink';
import { useCopy } from '../ui/useCopy';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const { socials } = profileData;
  const { copied, copy } = useCopy();

  const emails = [
    {
      key: 'institutional',
      label: language === 'es' ? 'Institucional' : 'Institutional',
      note: language === 'es' ? 'Investigación, docencia y proyectos del DTIC.' : 'Research, teaching and DTIC projects.',
      address: socials.email,
    },
    {
      key: 'personal',
      label: language === 'es' ? 'Personal' : 'Personal',
      note: language === 'es' ? 'Consultoría y colaboraciones externas.' : 'Consulting and external collaboration.',
      address: socials.personal_email,
    },
  ];

  const rowClass = 'grid gap-x-8 gap-y-1 border-t border-rule py-5 first:border-t-0 first:pt-0 sm:grid-cols-[11rem_minmax(0,1fr)]';

  return (
    <Section
      id="contact"
      title={language === 'es' ? 'Contacto' : 'Contact'}
      intro={
        language === 'es'
          ? 'Abierto a colaboraciones científicas, estancias de investigación y programas doctorales.'
          : 'Open to scientific collaboration, research visits and doctoral programs.'
      }
    >
      <dl className="ui">
        {emails.map((e) => (
          <div key={e.key} className={rowClass}>
            <dt className="text-sm text-ink-muted">{e.label}</dt>
            <dd>
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                <a className="link break-all text-[1.0625rem]" href={`mailto:${e.address}`}>
                  {e.address}
                </a>
                <button type="button" onClick={() => copy(e.address, e.key)} className="link text-sm text-ink-muted">
                  {copied === e.key ? (language === 'es' ? 'Copiado' : 'Copied') : language === 'es' ? 'Copiar' : 'Copy'}
                </button>
              </div>
              <p className="mt-1 text-sm text-ink-muted">{e.note}</p>
            </dd>
          </div>
        ))}

        <div className={rowClass}>
          <dt className="text-sm text-ink-muted">{language === 'es' ? 'Teléfono' : 'Phone'}</dt>
          <dd>
            <a className="link figures" href={`tel:${socials.phone.replace(/\s/g, '')}`}>
              {socials.phone}
            </a>
          </dd>
        </div>

        <div className={rowClass}>
          <dt className="text-sm text-ink-muted">{language === 'es' ? 'Ubicación' : 'Location'}</dt>
          <dd>{profileData.location}</dd>
        </div>

        <div className={rowClass}>
          <dt className="text-sm text-ink-muted">{language === 'es' ? 'Perfiles' : 'Profiles'}</dt>
          <dd className="flex flex-wrap gap-x-6 gap-y-2">
            <ExtLink href={socials.google_scholar}>Google Scholar</ExtLink>
            <ExtLink href={socials.orcid}>ORCID</ExtLink>
            <ExtLink href={socials.github}>GitHub</ExtLink>
            <ExtLink href={socials.linkedin}>LinkedIn</ExtLink>
            {socials.certificates_drive && (
              <ExtLink href={socials.certificates_drive}>
                {language === 'es' ? 'CV y certificados' : 'CV and certificates'}
              </ExtLink>
            )}
          </dd>
        </div>
      </dl>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? (language === 'es' ? 'Correo copiado' : 'Email copied') : ''}
      </span>
    </Section>
  );
};
