import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const vite = await createServer({
  root: rootDir,
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

  // 1. Pre-render English root (dist/index.html)
  const enHtml = render('en');
  const enOutput = template.replace('<div id="root"></div>', `<div id="root">${enHtml}</div>`);
  fs.writeFileSync(path.join(distDir, 'index.html'), enOutput, 'utf-8');

  // 2. Pre-render Spanish route (dist/es/index.html)
  const esHtml = render('es');
  const esTitle = 'Juan José Coronel Crespo | Ingeniero de IA y Datos';
  const esDesc =
    'Ingeniero e Investigador en IA (UCuenca, Yachay Tech). Sistemas Multiagente, Trace2Spec y Data2Model. 5 artículos científicos y Premio LACLO 2026.';

  let esOutput = template
    .replace('<html lang="en">', '<html lang="es">')
    .replace(/<title>.*?<\/title>/, `<title>${esTitle}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esDesc}" />`)
    .replace('<link rel="canonical" href="https://jcoronelc.github.io/" />', '<link rel="canonical" href="https://jcoronelc.github.io/es/" />')
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esTitle}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esDesc}" />`)
    .replace('<meta property="og:url" content="https://jcoronelc.github.io/" />', '<meta property="og:url" content="https://jcoronelc.github.io/es/" />')
    .replace('<meta property="og:locale" content="en_US" />', '<meta property="og:locale" content="es_EC" />')
    .replace('<meta property="og:locale:alternate" content="es_EC" />', '<meta property="og:locale:alternate" content="en_US" />')
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${esTitle}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${esDesc}" />`)
    .replace(/(href|src)="\.\/([^"]*)"/g, '$1="../$2"')
    .replace('<div id="root"></div>', `<div id="root">${esHtml}</div>`);

  const esDir = path.join(distDir, 'es');
  fs.mkdirSync(esDir, { recursive: true });
  fs.writeFileSync(path.join(esDir, 'index.html'), esOutput, 'utf-8');

  console.log('Pre-rendered dist/index.html (en) and dist/es/index.html (es)');
} finally {
  await vite.close();
}
