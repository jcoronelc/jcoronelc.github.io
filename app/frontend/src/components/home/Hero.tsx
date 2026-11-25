import React, { useState } from 'react';
import portrait from '../../assets/profile.jpg';
import portraitWebp from '../../assets/profile.webp';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { ExtLink } from '../ui/ExtLink';
import { Section } from '../ui/Section';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const { socials } = profileData;
  const [imageFailed, setImageFailed] = useState(false);

  const links = [
    { label: 'Google Scholar', href: socials.google_scholar },
    { label: 'ORCID', href: socials.orcid },
    { label: 'GitHub', href: socials.github },
    { label: 'LinkedIn', href: socials.linkedin },
    ...(socials.certificates_drive
      ? [{ label: language === 'es' ? 'CV y certificados' : 'CV and certificates', href: socials.certificates_drive }]
      : []),
  ];

  return (
    <>
    <section id="home" aria-labelledby="home-title">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-20">
        <div>
          <h1
            id="home-title"
            className="settle text-[clamp(2.5rem,6.2vw,4.25rem)] font-medium leading-[1.04] tracking-[-0.022em]"
            style={{ '--i': 0 } as React.CSSProperties}
          >
            {profileData.name}
          </h1>

          <p
            className="settle mt-5 font-serif text-xl italic text-ink-muted sm:text-2xl"
            style={{ '--i': 1 } as React.CSSProperties}
          >
            {t(profileData.headline)}
          </p>

          <ul
            className="settle ui mt-6 space-y-1 text-[0.9375rem] text-ink-muted"
            style={{ '--i': 2 } as React.CSSProperties}
          >
            {profileData.currentRoles[language].map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>

          <p
            className="settle mt-9 max-w-[62ch] text-[1.1875rem] leading-[1.6]"
            style={{ '--i': 3 } as React.CSSProperties}
          >
            {t(profileData.shortBio)}
          </p>

          <ul
            className="settle ui mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm"
            style={{ '--i': 4 } as React.CSSProperties}
          >
            {links.map((l) => (
              <li key={l.label}>
                <ExtLink href={l.href}>{l.label}</ExtLink>
              </li>
            ))}
            <li>
              <a className="link" href={`mailto:${socials.email}`}>
                {language === 'es' ? 'Correo' : 'Email'}
              </a>
            </li>
          </ul>
        </div>

        <figure className="settle max-w-[17rem] lg:max-w-none" style={{ '--i': 2 } as React.CSSProperties}>
          {imageFailed ? (
            <div
              role="img"
              aria-label={profileData.name}
              className="flex aspect-[4/5] w-full items-center justify-center rounded-lg border border-rule bg-paper-sunk font-serif text-6xl text-ink-muted"
            >
              JC
            </div>
          ) : (
            <picture>
              <source srcSet={portraitWebp} type="image/webp" />
              <img
                src={portrait}
                width={576}
                height={576}
                alt={language === 'es' ? `Retrato de ${profileData.name}` : `Portrait of ${profileData.name}`}
                fetchPriority="high"
                decoding="async"
                onError={() => setImageFailed(true)}
                className="aspect-[4/5] w-full rounded-lg border border-rule object-cover object-top"
              />
            </picture>
          )}
          <figcaption className="ui mt-3 text-xs leading-relaxed text-ink-muted">
            {profileData.location}
            <br />
            ORCID <span className="figures">0009-0009-7461-1473</span>
          </figcaption>
        </figure>
      </div>

    </section>
    <Section id="glance" title={language === 'es' ? 'Resumen' : 'At a glance'}>
      <dl className="ui min-w-0">
        {profileData.metrics.map((m) => (
          <div
            key={m.id}
            className="grid gap-x-8 gap-y-1 border-b border-rule py-3.5 first:pt-0 last:border-0 sm:grid-cols-[13rem_minmax(0,1fr)]"
          >
            <dt className="text-sm text-ink-muted">{t(m.label)}</dt>
            <dd className="text-[0.9375rem]">
              <span className="figures font-semibold">{m.value}</span>
              <span className="text-ink-muted">. {t(m.detail)}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
    </>
  );
};
