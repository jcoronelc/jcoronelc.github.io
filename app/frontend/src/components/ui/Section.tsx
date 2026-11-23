import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}

/** Ruled section: title and framing in a left column, content in the reading column. */
export const Section: React.FC<SectionProps> = ({ id, title, intro, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="border-t border-rule">
    <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <h2 id={`${id}-title`} className="text-[1.75rem] sm:text-[2rem]">
          {title}
        </h2>
        {intro && (
          <p className="ui mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">{intro}</p>
        )}
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  </section>
);
