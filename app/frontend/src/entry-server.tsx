import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { Language } from './data/types';

export function render(lang: Language): string {
  return renderToString(
    <React.StrictMode>
      <App initialLanguage={lang} />
    </React.StrictMode>,
  );
}
