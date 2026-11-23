import React, { useMemo, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { publicationsData } from '../../data/publications';
import { PublicationItem } from '../../data/types';
import { Section } from '../ui/Section';
import { Disclosure } from '../ui/Disclosure';
import { ExtLink } from '../ui/ExtLink';
import { useCopy } from '../ui/useCopy';

const AUTHOR_MATCH = 'Juan Coronel';

const PublicationEntry: React.FC<{ pub: PublicationItem; index: number }> = ({ pub, index }) => {
  const { language, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const { copied, copy } = useCopy();
  const panelId = `bibtex-${pub.id}`;

  return (
    <article className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-2 border-t border-rule py-8 first:border-t-0 first:pt-0">
      <span className="ui figures pt-1 text-sm text-ink-muted" aria-hidden="true">
        [{index + 1}]
      </span>
      <div className="min-w-0">
        <h3 className="text-[1.25rem] leading-snug">{pub.title}</h3>

        <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">
          {pub.authors.map((author, i) => (
            <React.Fragment key={author}>
              <span className={author.includes(AUTHOR_MATCH) ? 'font-semibold text-ink' : ''}>{author}</span>
              {i < pub.authors.length - 1 && ', '}
            </React.Fragment>
          ))}
        </p>

        <p className="mt-1 text-[0.9375rem] italic text-ink-muted">
          {pub.venue}
          {pub.venue.includes(String(pub.year)) ? '.' : <>, <span className="figures">{pub.year}</span>.</>}
        </p>

        <p className="ui mt-3 text-[0.8125rem]">
          <span className="font-medium">{t(pub.statusLabel)}</span>
          {pub.award && <span className="text-accent"> · {t(pub.award)}</span>}
        </p>

        <p className="mt-3 max-w-[68ch] text-ink-muted">{t(pub.summary)}</p>

        <div className="ui mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="link"
          >
            {open ? (language === 'es' ? 'Ocultar BibTeX' : 'Hide BibTeX') : 'BibTeX'}
          </button>
          {pub.doiUrl && <ExtLink href={pub.doiUrl}>DOI</ExtLink>}
          {pub.pdfUrl && <ExtLink href={pub.pdfUrl}>PDF</ExtLink>}
          {pub.codeUrl && <ExtLink href={pub.codeUrl}>{language === 'es' ? 'Código' : 'Code'}</ExtLink>}
        </div>

        <Disclosure id={panelId} open={open}>
          <div className="mt-4 border border-rule bg-paper-sunk">
            <div className="ui flex items-center justify-between border-b border-rule px-4 py-2 text-xs text-ink-muted">
              <span>{language === 'es' ? 'Entrada BibTeX' : 'BibTeX entry'}</span>
              <button type="button" onClick={() => copy(pub.bibtex, pub.id)} className="link text-ink">
                {copied === pub.id ? (language === 'es' ? 'Copiado' : 'Copied') : language === 'es' ? 'Copiar' : 'Copy'}
              </button>
            </div>
            <pre className="overflow-x-auto p-4 text-[0.78rem] leading-relaxed">{pub.bibtex}</pre>
            <span className="sr-only" role="status" aria-live="polite">
              {copied === pub.id ? (language === 'es' ? 'BibTeX copiado' : 'BibTeX copied') : ''}
            </span>
          </div>
        </Disclosure>
      </div>
    </article>
  );
};

export const PublicationsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [status, setStatus] = useState<string>('all');

  const filters = useMemo(() => {
    const defs: { id: string; label: { en: string; es: string } }[] = [
      { id: 'all', label: { en: 'All', es: 'Todas' } },
      { id: 'published', label: { en: 'Published', es: 'Publicadas' } },
      { id: 'accepted', label: { en: 'Accepted', es: 'Aceptadas' } },
      { id: 'preprint', label: { en: 'Preprints', es: 'Preprints' } },
      { id: 'under_review', label: { en: 'Under review', es: 'En revisión' } },
    ];
    return defs
      .map((d) => ({
        ...d,
        count: d.id === 'all' ? publicationsData.length : publicationsData.filter((p) => p.status === d.id).length,
      }))
      .filter((d) => d.count > 0);
  }, []);

  const visible = publicationsData.filter((p) => status === 'all' || p.status === status);

  return (
    <Section
      id="publications"
      title={language === 'es' ? 'Publicaciones' : 'Publications'}
      intro={
        language === 'es'
          ? 'Estado editorial de cada trabajo, con DOI y cita en BibTeX.'
          : 'Editorial status of each work, with DOI and BibTeX citation.'
      }
    >
      <div role="group" aria-label={language === 'es' ? 'Filtrar por estado' : 'Filter by status'} className="ui mb-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setStatus(f.id)}
            aria-pressed={status === f.id}
            className={`pb-1 transition-colors ${
              status === f.id
                ? 'border-b border-accent text-ink'
                : 'border-b border-transparent text-ink-muted hover:text-ink'
            }`}
          >
            {t(f.label)} <span className="figures text-ink-muted">({f.count})</span>
          </button>
        ))}
      </div>

      <div>
        {visible.map((pub) => (
          <PublicationEntry key={pub.id} pub={pub} index={publicationsData.indexOf(pub)} />
        ))}
      </div>
    </Section>
  );
};
