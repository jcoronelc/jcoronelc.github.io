import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { skillsData } from '../../data/skills';
import { Section } from '../ui/Section';

export const SkillsSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <Section id="skills" title={language === 'es' ? 'Competencias técnicas' : 'Technical skills'}>
      <dl>
        {skillsData.map((group) => (
          <div
            key={group.category.en}
            className="grid gap-x-10 gap-y-1.5 border-t border-rule py-5 first:border-t-0 first:pt-0 md:grid-cols-[13rem_minmax(0,1fr)]"
          >
            <dt className="ui text-sm font-semibold">{t(group.category)}</dt>
            <dd className="text-ink-muted">{group.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};
