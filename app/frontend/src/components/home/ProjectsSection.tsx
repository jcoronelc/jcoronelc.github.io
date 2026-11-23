import React, { useMemo, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData } from '../../data/projects';
import { ProjectCaseStudy } from '../../data/types';
import { Section } from '../ui/Section';
import { Disclosure } from '../ui/Disclosure';
import { ExtLink } from '../ui/ExtLink';

/** Only render links that point somewhere specific (not a bare domain or a relative path). */
const isSpecificUrl = (url?: string): url is string => {
  if (!url || !/^https?:\/\//.test(url)) return false;
  try {
    return new URL(url).pathname.length > 1;
  } catch {
    return false;
  }
};

const ProjectEntry: React.FC<{ project: ProjectCaseStudy }> = ({ project }) => {
  const { language, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const panelId = `case-${project.id}`;
  const links = [
    { label: language === 'es' ? 'Artículo' : 'Paper', href: project.links?.paper },
    { label: language === 'es' ? 'Repositorio' : 'Repository', href: project.links?.repo },
    { label: 'Demo', href: project.links?.demo },
  ].filter((l) => isSpecificUrl(l.href));

  const sections = [
    { title: { en: 'Problem', es: 'Problema' }, body: project.problem },
    { title: { en: 'Approach', es: 'Enfoque' }, body: project.approach },
    { title: { en: 'Architecture', es: 'Arquitectura' }, body: project.architectureDescription },
  ];

  return (
    <article className="border-t border-rule py-9 first:border-t-0 first:pt-0">
      <div className="grid gap-x-12 gap-y-4 xl:grid-cols-[minmax(0,1fr)_15rem]">
        <div className="min-w-0">
          <h3 className="text-[1.375rem] leading-snug">{project.title}</h3>
          <p className="mt-1 italic text-ink-muted">{t(project.subtitle)}</p>
          <p className="mt-4 max-w-[68ch]">{t(project.metricsSummary)}</p>
          <p className="ui mt-4 text-[0.8125rem] leading-relaxed text-ink-muted">{project.stack.join(', ')}</p>
        </div>

        <dl className="ui space-y-3 text-[0.8125rem]">
          <div>
            <dt className="text-ink-muted">{language === 'es' ? 'Rol' : 'Role'}</dt>
            <dd>{t(project.role)}</dd>
          </div>
          <div>
            <dt className="text-ink-muted">{language === 'es' ? 'Contexto' : 'Context'}</dt>
            <dd>{project.context}</dd>
          </div>
        </dl>
      </div>

      <div className="ui mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="link"
        >
          {open
            ? language === 'es' ? 'Ocultar caso de estudio' : 'Hide case study'
            : language === 'es' ? 'Leer caso de estudio' : 'Read case study'}
        </button>
        {links.map((l) => (
          <ExtLink key={l.label} href={l.href}>{l.label}</ExtLink>
        ))}
      </div>

      <Disclosure id={panelId} open={open}>
        <div className="mt-8 max-w-[68ch] space-y-7 border-t border-rule pt-8">
          <div>
            <h4 className="text-base">{language === 'es' ? 'Resumen' : 'Overview'}</h4>
            <p className="mt-1.5 text-ink-muted">{t(project.overview)}</p>
          </div>
          {sections.map((s) => (
            <div key={s.title.en}>
              <h4 className="text-base">{t(s.title)}</h4>
              <p className="mt-1.5 text-ink-muted">{t(s.body)}</p>
            </div>
          ))}
          <div>
            <h4 className="text-base">{language === 'es' ? 'Resultados' : 'Results'}</h4>
            <ul className="mt-1.5 list-disc space-y-1.5 pl-5 text-ink-muted marker:text-rule-strong">
              {(project.results[language] || project.results.en).map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </Disclosure>
    </article>
  );
};

export const ProjectsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [category, setCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: { en: 'All', es: 'Todos' } },
    { id: 'research', label: { en: 'Agents and research', es: 'Agentes e investigación' } },
    { id: 'data_systems', label: { en: 'Data systems', es: 'Sistemas de datos' } },
    { id: 'ai_engineering', label: { en: 'Production platforms', es: 'Plataformas en producción' } },
  ];

  const visible = useMemo(
    () => (category === 'all' ? projectsData : projectsData.filter((p) => p.category === category)),
    [category],
  );

  return (
    <Section
      id="projects"
      title={language === 'es' ? 'Proyectos' : 'Projects'}
      intro={
        language === 'es'
          ? 'Sistemas construidos a partir de la investigación, con su contexto y resultados.'
          : 'Systems built from the research, with their context and results.'
      }
    >
      <div role="group" aria-label={language === 'es' ? 'Filtrar por categoría' : 'Filter by category'} className="ui mb-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCategory(c.id)}
            aria-pressed={category === c.id}
            className={`pb-1 transition-colors ${
              category === c.id
                ? 'border-b border-accent text-ink'
                : 'border-b border-transparent text-ink-muted hover:text-ink'
            }`}
          >
            {t(c.label)}
          </button>
        ))}
      </div>

      <div>
        {visible.map((p) => (
          <ProjectEntry key={p.id} project={p} />
        ))}
        {visible.length === 0 && (
          <p className="text-ink-muted">{language === 'es' ? 'No hay proyectos en esta categoría.' : 'No projects in this category.'}</p>
        )}
      </div>
    </Section>
  );
};
