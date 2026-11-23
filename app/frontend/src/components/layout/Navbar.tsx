import React, { useState } from 'react';
import { Sun, Moon, Monitor, Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { id: 'about', label: { en: 'About', es: 'Perfil' } },
  { id: 'education', label: { en: 'Education', es: 'Formación' } },
  { id: 'research', label: { en: 'Research', es: 'Investigación' } },
  { id: 'publications', label: { en: 'Publications', es: 'Publicaciones' } },
  { id: 'projects', label: { en: 'Projects', es: 'Proyectos' } },
  { id: 'experience', label: { en: 'Experience', es: 'Experiencia' } },
  { id: 'ventures', label: { en: 'Ventures', es: 'Emprendimiento' } },
  { id: 'contact', label: { en: 'Contact', es: 'Contacto' } },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const themeOptions = [
    { id: 'light' as const, icon: Sun, label: language === 'es' ? 'Tema claro' : 'Light theme' },
    { id: 'dark' as const, icon: Moon, label: language === 'es' ? 'Tema oscuro' : 'Dark theme' },
    { id: 'system' as const, icon: Monitor, label: language === 'es' ? 'Tema del sistema' : 'System theme' },
  ];

  const themeGroup = (
          <div role="group" aria-label={language === 'es' ? 'Apariencia' : 'Appearance'} className="flex rounded-sm border border-rule">
            {themeOptions.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setTheme(id)}
                aria-pressed={theme === id}
                aria-label={label}
                title={label}
                className={`p-1.5 transition-colors ${
                  theme === id ? 'bg-paper-sunk text-ink' : 'text-ink-muted hover:text-ink'
                }`}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
              </button>
            ))}
          </div>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#home" className="whitespace-nowrap font-serif text-[0.95rem] font-semibold tracking-tight text-ink sm:text-[1.05rem]">
          Juan José Coronel Crespo
        </a>

        <nav aria-label={language === 'es' ? 'Secciones' : 'Sections'} className="ui hidden items-center gap-5 xl:flex">
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active ? 'location' : undefined}
                className={`py-1 text-[0.8125rem] underline-offset-[0.55em] transition-colors duration-200 ${
                  active
                    ? 'text-ink underline decoration-accent decoration-1'
                    : 'text-ink-muted no-underline hover:text-ink'
                }`}
              >
                {t(item.label)}
              </a>
            );
          })}
        </nav>

        <div className="ui flex items-center gap-3">
          <div role="group" aria-label={language === 'es' ? 'Idioma' : 'Language'} className="flex text-xs">
            {(['en', 'es'] as const).map((lng, i) => (
              <button
                key={lng}
                type="button"
                onClick={() => setLanguage(lng)}
                aria-pressed={language === lng}
                lang={lng}
                className={`px-2 py-1 font-medium uppercase tracking-wide transition-colors ${
                  i === 0 ? 'border-r border-rule' : ''
                } ${language === lng ? 'text-ink' : 'text-ink-muted hover:text-ink'}`}
              >
                {lng}
              </button>
            ))}
          </div>

          <div className="hidden sm:block">{themeGroup}</div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={language === 'es' ? 'Menú' : 'Menu'}
            className="p-1.5 text-ink xl:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label={language === 'es' ? 'Secciones' : 'Sections'} className="ui border-t border-rule bg-paper xl:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-2 sm:px-8">
            {navItems.map((item) => (
              <li key={item.id} className="border-b border-rule last:border-0">
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeSection === item.id ? 'location' : undefined}
                  className={`block py-3 text-[0.9375rem] no-underline ${
                    activeSection === item.id ? 'text-accent' : 'text-ink'
                  }`}
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-auto flex max-w-6xl items-center justify-between border-t border-rule px-5 py-3 sm:hidden">
            <span className="text-sm text-ink-muted">{language === 'es' ? 'Apariencia' : 'Appearance'}</span>
            {themeGroup}
          </div>
        </nav>
      )}
    </header>
  );
};
