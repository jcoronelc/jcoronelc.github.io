import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { academicReferences, awardsData, certificationsData, educationData } from '../../data/education';
import { Section } from '../ui/Section';

const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="mb-6 mt-16 text-xl first:mt-0">{children}</h3>
);

export const EducationSection: React.FC = () => {
  const { language, t } = useLanguage();
  const awards = [...awardsData].sort((a, b) => b.year - a.year);

  return (
    <Section id="education" title={language === 'es' ? 'Formación' : 'Education'}>
      <SubHeading>{language === 'es' ? 'Títulos y estudios' : 'Degrees'}</SubHeading>
      {educationData.map((edu) => (
        <article key={edu.id} className="border-t border-rule py-7 first:border-t-0 first:pt-0">
          <h4 className="text-[1.125rem] leading-snug">{t(edu.degree)}</h4>
          <p className="mt-1 text-ink-muted">
            {edu.institution}, {edu.location}. <span className="figures">{edu.period}</span>
          </p>
          <dl className="ui mt-4 space-y-1.5 text-sm">
            {edu.honors && (
              <div className="grid gap-x-6 sm:grid-cols-[8rem_minmax(0,1fr)]">
                <dt className="text-ink-muted">{language === 'es' ? 'Distinción' : 'Distinction'}</dt>
                <dd>{t(edu.honors)}</dd>
              </div>
            )}
            {edu.gpa && (
              <div className="grid gap-x-6 sm:grid-cols-[8rem_minmax(0,1fr)]">
                <dt className="text-ink-muted">{language === 'es' ? 'Promedio' : 'GPA'}</dt>
                <dd className="figures">{edu.gpa}</dd>
              </div>
            )}
            {edu.thesis && (
              <div className="grid gap-x-6 sm:grid-cols-[8rem_minmax(0,1fr)]">
                <dt className="text-ink-muted">{language === 'es' ? 'Tesis' : 'Thesis'}</dt>
                <dd className="italic">{t(edu.thesis)}</dd>
              </div>
            )}
          </dl>
          {edu.highlights && (
            <ul className="mt-4 max-w-[68ch] list-disc space-y-1.5 pl-5 text-ink-muted marker:text-rule-strong">
              {(edu.highlights[language] || edu.highlights.en).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
        </article>
      ))}

      <SubHeading>{language === 'es' ? 'Premios y reconocimientos' : 'Awards'}</SubHeading>
      <ul>
        {awards.map((a) => (
          <li key={a.id} className="grid gap-x-8 gap-y-1 border-t border-rule py-5 first:border-t-0 first:pt-0 sm:grid-cols-[4rem_minmax(0,1fr)]">
            <span className="ui figures text-sm text-ink-muted sm:pt-1">{a.year}</span>
            <div>
              <p className="font-semibold">{t(a.title)}</p>
              <p className="text-ink-muted">{a.event}</p>
              <p className="mt-1 max-w-[68ch] text-ink-muted">{t(a.description)}</p>
            </div>
          </li>
        ))}
      </ul>

      <SubHeading>{language === 'es' ? 'Certificaciones' : 'Certifications'}</SubHeading>
      <ul>
        {certificationsData.map((c) => (
          <li key={c.id} className="grid gap-x-8 border-t border-rule py-3 first:border-t-0 first:pt-0 sm:grid-cols-[4rem_minmax(0,1fr)]">
            <span className="ui figures text-sm text-ink-muted sm:pt-0.5">{c.year}</span>
            <span>
              {c.title}. <span className="text-ink-muted">{c.issuer}</span>
            </span>
          </li>
        ))}
      </ul>

      <SubHeading>{language === 'es' ? 'Referencias académicas' : 'Academic references'}</SubHeading>
      <ul className="grid gap-x-12 gap-y-8 md:grid-cols-2">
        {academicReferences.map((r) => (
          <li key={r.name} className="min-w-0 border-t border-rule pt-5">
            <p className="font-semibold">{r.name}</p>
            <p className="mt-1 text-[0.9375rem] text-ink-muted">{t(r.title)}</p>
            <p className="mt-1 text-[0.9375rem] text-ink-muted">{r.credentials}</p>
            <p className="ui mt-2 break-words text-sm">
              <a className="link" href={`mailto:${r.email}`}>{r.email}</a>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
