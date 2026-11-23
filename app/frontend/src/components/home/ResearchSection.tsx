import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { researchPillars } from '../../data/research';
import { Section } from '../ui/Section';

export const ResearchSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <Section
      id="research"
      title={language === 'es' ? 'Líneas de investigación' : 'Research'}
      intro={
        language === 'es'
          ? 'Tres líneas activas, cada una con las preguntas abiertas que la guían.'
          : 'Three active lines of work, each with the open questions that drive it.'
      }
    >
      <div>
        {researchPillars.map((pillar) => (
          <article key={pillar.id} className="grid gap-x-12 gap-y-6 border-t border-rule py-9 first:border-t-0 first:pt-0 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
            <div>
              <h3 className="text-xl leading-snug">{t(pillar.title)}</h3>
              <p className="mt-3 text-ink-muted">{t(pillar.scope)}</p>
              <p className="ui mt-4 text-[0.8125rem] leading-relaxed text-ink-muted">
                <span className="sr-only">{language === 'es' ? 'Palabras clave: ' : 'Keywords: '}</span>
                {pillar.relatedKeywords.join(' · ')}
              </p>
            </div>

            {pillar.keyQuestions && (
              <div className="xl:border-l xl:border-rule xl:pl-8">
                <h4 className="ui text-sm font-semibold">{language === 'es' ? 'Preguntas abiertas' : 'Open questions'}</h4>
                <ul className="mt-3 space-y-3">
                  {(pillar.keyQuestions[language] || pillar.keyQuestions.en).map((q) => (
                    <li key={q} className="italic text-ink-muted">{q}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
};
