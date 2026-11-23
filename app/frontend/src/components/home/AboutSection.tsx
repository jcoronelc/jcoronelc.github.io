import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { profileData } from '../../data/profile';
import { Section } from '../ui/Section';

const principles = [
  {
    title: { en: 'Specifications before code', es: 'Especificaciones antes que código' },
    body: {
      en: 'Agents drift without formal boundaries. I design systems in which behavioral specifications and contracts precede code synthesis.',
      es: 'Los agentes se desvían sin límites formales. Diseño sistemas en los que las especificaciones de comportamiento y los contratos preceden a la síntesis de código.',
    },
  },
  {
    title: { en: 'Deterministic verification', es: 'Verificación determinista' },
    body: {
      en: 'Probabilistic models are bounded by deterministic checks. Each pipeline is built so that its output can be audited against the source data.',
      es: 'Los modelos probabilísticos se acotan con verificaciones deterministas. Cada pipeline se construye de modo que su resultado pueda auditarse contra los datos de origen.',
    },
  },
  {
    title: { en: 'From the lab to production', es: 'Del laboratorio a producción' },
    body: {
      en: 'The frameworks I research are deployed for institutional engineering teams and tens of thousands of users.',
      es: 'Los marcos que investigo se despliegan para equipos de ingeniería institucionales y decenas de miles de usuarios.',
    },
  },
];

export const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <Section id="about" title={language === 'es' ? 'Perfil' : 'About'}>
      <div className="max-w-[68ch] space-y-5">
        {(profileData.narrativeBio[language] || profileData.narrativeBio.en).map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <p>
          {language === 'es'
            ? 'En el DTIC opero además un clúster privado de tres nodos con GPU para inferencia local, expuesto mediante Ollama y un gateway MCP.'
            : 'At DTIC I also operate a private three-node GPU cluster for local inference, served through Ollama and an MCP gateway.'}
        </p>
      </div>

      <h3 className="mb-2 mt-14 text-xl">{language === 'es' ? 'Principios de trabajo' : 'Working principles'}</h3>
      <ul className="max-w-[68ch]">
        {principles.map((p) => (
          <li key={p.title.en} className="border-t border-rule py-5 first:mt-4">
            <h4 className="text-base">{t(p.title)}</h4>
            <p className="mt-1.5 text-ink-muted">{t(p.body)}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};
