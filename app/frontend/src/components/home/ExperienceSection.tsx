import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { experienceData } from '../../data/experience';
import { Section } from '../ui/Section';

export const ExperienceSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <Section
      id="experience"
      title={language === 'es' ? 'Experiencia' : 'Experience'}
      intro={
        language === 'es'
          ? 'Cargos profesionales y de investigación, del más reciente al más antiguo.'
          : 'Professional and research positions, most recent first.'
      }
    >
      <div>
        {experienceData.map((exp) => (
          <article
            key={exp.id}
            className="grid gap-x-10 gap-y-3 border-t border-rule py-9 first:border-t-0 first:pt-0 md:grid-cols-[10rem_minmax(0,1fr)]"
          >
            <p className="ui figures text-sm text-ink-muted md:pt-1.5">{t(exp.period)}</p>
            <div className="min-w-0">
              <h3 className="text-[1.25rem] leading-snug">{t(exp.role)}</h3>
              <p className="mt-1 text-ink-muted">
                {exp.organization}, {exp.location}
              </p>
              <ul className="mt-4 max-w-[68ch] list-disc space-y-2 pl-5 marker:text-rule-strong">
                {(exp.achievements[language] || exp.achievements.en).map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              {exp.stack && (
                <p className="ui mt-4 text-[0.8125rem] leading-relaxed text-ink-muted">{exp.stack.join(', ')}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};
