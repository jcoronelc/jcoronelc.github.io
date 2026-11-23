import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { zeroAiVenture } from '../../data/ventures';
import { Section } from '../ui/Section';
import { ExtLink } from '../ui/ExtLink';

export const VenturesSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <Section
      id="ventures"
      title={language === 'es' ? 'Emprendimiento' : 'Ventures'}
      intro={zeroAiVenture.name}
    >
      <p className="max-w-[68ch]">{t(zeroAiVenture.description)}</p>

      <div className="mt-10">
        {zeroAiVenture.apps.map((app) => (
          <article
            key={app.id}
            className="grid gap-x-12 gap-y-3 border-t border-rule py-8 xl:grid-cols-[minmax(0,1fr)_15rem]"
          >
            <div className="min-w-0">
              <h3 className="text-[1.375rem] leading-snug">{app.name}</h3>
              <p className="mt-1 italic text-ink-muted">{t(app.tagline)}</p>
              <p className="mt-3 max-w-[68ch] text-ink-muted">{t(app.description)}</p>
              <p className="ui mt-4 text-[0.8125rem] leading-relaxed text-ink-muted">{app.stack.join(', ')}</p>
            </div>
            <p className="ui text-sm xl:pt-1.5">
              <ExtLink href={app.url}>{app.domain}</ExtLink>
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
};
