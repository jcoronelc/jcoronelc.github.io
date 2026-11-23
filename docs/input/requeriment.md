Juan José
Coronel
Especificación de producto, contenido, diseño y arquitectura
Building intelligent systems at the intersection of AI research, software engineering and data.

Decisión	Definición
Propósito	Construir una presencia profesional y académica internacional que muestre investigación, ingeniería, proyectos e impacto.
Audiencias	Investigadores, potenciales supervisores de doctorado, universidades, centros de investigación, empresas tecnológicas y colaboradores.
Idioma	Inglés como idioma predeterminado y español como versión alternativa.
Despliegue	GitHub Pages, mediante sitio estático y despliegue automatizado desde GitHub Actions.
Frontend	Mantener el stack React 19 + Vite 8 + TanStack Router y el ecosistema existente indicado en este documento.
Dominio	Usar inicialmente la URL de GitHub Pages; evaluar un dominio propio más adelante, si aporta valor.


 1. Visión y posicionamiento
La web no debe parecer una plantilla genérica de portafolio de desarrollador. Debe funcionar como una plataforma de identidad profesional que combine un perfil académico, un portafolio de ingeniería y un registro verificable de investigación.
Concepto
Academic meets Technology: una presencia editorial, sobria y contemporánea que comunica a una persona que investiga, diseña y construye sistemas inteligentes.
Mensaje principal
Building intelligent systems at the intersection of AI research, software engineering and data.
Título profesional recomendado: AI Researcher & Engineer. La descripción debe ser concreta y evitar afirmaciones infladas o títulos que no correspondan a responsabilidades verificables.
Objetivos
•	Comunicar con claridad la identidad, las líneas de investigación y la dirección profesional.
•	Presentar publicaciones y su estado real: publicado, aceptado, enviado o en preparación.
•	Mostrar proyectos mediante casos de estudio con problema, método, arquitectura, resultados y evidencias.
•	Facilitar que un investigador o reclutador encuentre el CV, ORCID, GitHub, LinkedIn y contacto.
•	Mantener el contenido en inglés y español sin duplicar innecesariamente la lógica de la aplicación.
2. Arquitectura de información
Ruta / sección	Contenido y propósito
/	Home en inglés: propuesta de valor, presentación breve, áreas de trabajo y selección de publicaciones/proyectos.
/about	Trayectoria, formación, enfoque profesional, intereses y breve narrativa personal.
/research	Líneas de investigación, preguntas de interés, publicaciones y colaboraciones.
/projects	Índice de proyectos seleccionados; filtros ligeros por investigación, AI engineering y data.
/projects/:slug	Caso de estudio individual con contexto, problema, enfoque, arquitectura, resultados y enlaces.
/experience	Experiencia profesional y académica en orden cronológico.
/contact	Correo profesional y enlaces externos; CV descargable.
/es/*	Versiones equivalentes en español. Mantener rutas y contenido alineados con la versión inglesa.

Navegación recomendada: Home · About · Research · Projects · Experience · Contact. El CV debe estar visible como enlace destacado, sin convertirse en una sección de navegación adicional.
3. Home: estructura y contenido
La portada debe responder en pocos segundos: quién eres, qué investigas/construyes y dónde consultar evidencia de tu trabajo.
Bloque	Especificación
Header	Nombre o wordmark tipográfico; navegación compacta; selector EN / ES; tema claro/oscuro.
Hero	Titular principal, rol, párrafo de 2–3 líneas, ubicación general y enlaces a Research, Projects y CV.
Research areas	Tres a cinco áreas con nombres claros; no usar barras de porcentaje de habilidades.
Selected work	Dos o tres proyectos con una frase de impacto y acceso al caso de estudio.
Selected publications	Dos o tres publicaciones relevantes con venue, año y estado verificable.
Footer	GitHub, LinkedIn, ORCID, correo y copyright.

Texto base del hero (inglés)
Building intelligent systems for a more capable future.
AI Researcher & Engineer
I work at the intersection of artificial intelligence, software engineering and data, exploring how intelligent systems can become more reliable, context-aware and useful in real-world environments.
Texto base del hero (español)
Construyo sistemas inteligentes para resolver problemas del mundo real.
Investigador e ingeniero en Inteligencia Artificial
Trabajo en la intersección de la inteligencia artificial, la ingeniería de software y los datos, explorando cómo construir sistemas inteligentes más confiables, contextuales y útiles.
4. Perfil y biografía
La sección About debe narrar una trayectoria en evolución. Evitar copiar el CV completo. Incluir formación, trabajo actual, motivación investigadora y dirección a medio plazo.
Biografía base (inglés)
I am a Computer Science Engineer focused on the intersection of artificial intelligence, software engineering and data science. My work explores how intelligent systems can move beyond isolated models towards reliable, context-aware and collaborative architectures for real-world applications. I am particularly interested in large language models, AI agents, knowledge graphs and agentic software engineering.
Datos que deben validarse antes de publicar
•	Denominación oficial del título de grado y universidad.
•	Nombre oficial del programa de maestría y estado académico actual.
•	Cargo exacto, unidad institucional y fechas de la experiencia en DTIC.
•	Premios, ranking de graduación y cifras de impacto que puedan respaldarse.
•	Fotografía profesional y permiso/decisión expresa de publicarla.
5. Research: líneas de investigación
Área	Alcance sugerido
LLMs & AI Agents	Modelos de lenguaje, sistemas multiagente, planificación, orquestación, uso de herramientas y evaluación.
Knowledge Graphs & GraphRAG	Representación del conocimiento, recuperación híbrida, razonamiento y sistemas basados en grafos.
Context Engineering	Retrieval, memoria, contexto, herramientas y mecanismos para mejorar fiabilidad y trazabilidad.
Agentic Software Engineering	Harness engineering, specification-driven development, generación y reparación de software asistida por agentes.
Data & AI Systems	Ingeniería de datos, analítica inteligente, arquitectura de datos y sistemas de soporte a decisiones.

Cada línea debe incluir una descripción breve y, cuando sea posible, preguntas de investigación, trabajos relacionados y proyectos/publicaciones vinculados.
6. Publications: política editorial
Las publicaciones son evidencia académica. El estado debe mostrarse de forma explícita y consistente; nunca presentar un manuscrito enviado como aceptado o publicado.
Estado	Etiqueta visible	Regla
Publicado	Published	Incluir venue, año, DOI/enlace y metadatos completos.
Aceptado	Accepted	Indicar conferencia/revista y que el trabajo fue aceptado; no afirmar que ya está publicado si aún no lo está.
Enviado	Under review / Submitted	Indicar que fue enviado, si se desea hacerlo público, sin atribuir aceptación.
Preprint	Preprint	Enlazar repositorio o servidor de preprints y fecha.
En preparación	In preparation	Incluir solo si aporta valor y no expone información confidencial.

Ficha recomendada: título, autores, venue, año, estado, resumen de una o dos frases, DOI/URL, PDF cuando los derechos lo permitan, y código/datos si son públicos.
Registro inicial conocido: Trace2Spec — Accepted at CIMPS (verificar año, título definitivo, autores y enlace antes de publicar). Data2Model — Submitted (no presentarlo como aceptado ni publicado).
7. Projects: casos de estudio
Seleccionar pocos proyectos representativos. Cada caso de estudio debe demostrar razonamiento, decisiones de ingeniería y resultados, no solo enumerar tecnologías.
Proyecto candidato	Enfoque de presentación
Trace2Spec	Método de ingeniería de software agéntica; comprensión de sistemas existentes, especificación, trazabilidad y validación.
GraphRAG & Knowledge Systems	Representación del conocimiento, recuperación y navegación de información mediante grafos.
AI Engineering Ecosystem	Herramientas y sistemas que integran agentes, MCP y flujos de trabajo de ingeniería.
Hotellytics	Analítica de reputación y revenue management con señales de plataformas de viajes y reseñas.
Data2Model	Enfoque de transformación/modelado de datos; indicar estado de publicación correctamente.

Plantilla de cada caso de estudio
1.	Overview: qué es y cuál fue tu responsabilidad.
2.	Problem: necesidad, limitaciones y usuarios afectados.
3.	Approach: hipótesis, método y decisiones de diseño.
4.	Architecture: diagrama legible, componentes y flujo de datos.
5.	Implementation: tecnologías relevantes y por qué se eligieron.
6.	Evaluation & impact: métricas, resultados y limitaciones; distinguir resultados medidos de objetivos.
7.	Evidence: paper, demo, repositorio, documentación o capturas autorizadas.
8.	Credits: colaboradores y contribuciones individuales.
8. Experience & Education
Presentar una línea de tiempo inversa, breve y verificable. Cada entrada debe contener institución, rol/programa, fechas, ubicación opcional y entre dos y cuatro resultados o responsabilidades.
Evitar duplicar la sección About. El detalle completo se mantiene en el CV descargable.
9. Contacto e identidad académica
•	LinkedIn: perfil profesional.
•	GitHub: repositorios y contribuciones públicas.
•	ORCID: 0009-0009-7461-1473.
•	Google Scholar: añadir cuando el perfil esté configurado y depurado.
•	Correo profesional: publicar solo la dirección elegida para contacto público.
•	CV: PDF actualizado, con nombre de archivo estable y fecha/versión.
10. Dirección visual y sistema de diseño
Dirección: editorial, minimalista, académica y tecnológica. Debe sentirse como el sitio de un investigador/ingeniero, no como una landing comercial de una startup ni como una plantilla genérica.
Token	Valor recomendado	Uso
Background	#FAFAF8	Fondo principal claro.
Foreground	#171717	Texto principal.
Muted	#777777	Metadatos y texto secundario.
Accent	#246B55	Acentos discretos, enlaces y estados.
Deep	#17324D	Títulos secundarios y elementos de énfasis.
Border	#E7E7E2	Divisores y bordes sutiles.

Elemento	Recomendación
Tipografía	Inter para lectura y Space Grotesk para titulares; revisar legibilidad y carga de fuentes.
Composición	Grid editorial, márgenes generosos, jerarquía tipográfica y ancho de lectura controlado.
Fotografía	Retrato profesional opcional, natural y de tamaño moderado; no usar avatar generado como sustituto.
Imágenes	Diagramas propios de arquitectura, capturas de proyectos y fotografías con derechos/permiso.
Movimiento	Transiciones sutiles; respetar prefers-reduced-motion.
Responsive	Diseño mobile-first, navegación accesible y contenido legible en pantallas pequeñas.

Evitar
•	Degradados morados/neón y estética cliché de “AI portfolio”.
•	Animaciones excesivas, cursores personalizados invasivos o fondos pesados.
•	Barras de progreso de habilidades y porcentajes arbitrarios.
•	Tarjetas para absolutamente todo y listas interminables de tecnologías.
•	Contadores de impacto sin fuente o métricas verificables.
11. Arquitectura frontend: stack confirmado
Se conserva el stack proporcionado por el propietario del proyecto. La web será una SPA/experiencia React estática desplegada en GitHub Pages. Las dependencias y versiones exactas se validan contra el package.json real del repositorio; este documento registra las versiones declaradas por el usuario.
Capa	Tecnología / versión declarada	Responsabilidad
Framework	React 19 (^19.2.8), StrictMode	UI y componentes.
Build	Vite 8 (^8.2.0) + @vitejs/plugin-react-swc (^4.3.3)	Desarrollo y compilación.
Routing	TanStack Router (^1.170.18)	Rutas y route tree generado.
Server state	TanStack Query v5 (^5.101.4) + Devtools	Datos remotos si se incorporan APIs.
UI primitives	Radix UI; lucide-react (^1.28.0); react-icons (^5.7.0)	Accesibilidad, iconografía y componentes.
Styling	Tailwind CSS v4 (^4.2.1) + @tailwindcss/vite (^4.3.3), tailwind-merge, clsx	Estilos y composición de clases.
Forms	React Hook Form (^7.84.0) + Zod (^4.4.3) + resolvers (^5.7.1)	Formularios y validación, si se requiere.
HTTP	Axios 1.18.0	Consumo de servicios externos/API.
API generation	@hey-api/openapi-ts 0.97.3	Generación de cliente desde OpenAPI; opcional para el sitio.
Charts	Recharts 3 (ADR-013)	Visualización de datos; incluir alternativa tabular accesible.
Dashboard inputs	react-day-picker, date-fns, cmdk, Radix Popover, @dnd-kit	Componentes reutilizables; no son necesarios para el alcance inicial salvo que haya visualizaciones interactivas.
Notifications	Sonner (^2.0.7)	Feedback de acciones, si existen formularios/interacciones.
Quality	Biome (^2.5.6)	Linting y formatting.
E2E	Playwright 1.62.1	Pruebas de navegación y comportamiento.
Types	TypeScript (^6.0.3), strict	Seguridad estática.
Theme	vite-ui-theme + localStorage	Tema claro/oscuro/sistema.

Nota de alcance: aunque el stack completo se mantiene como estándar del proyecto, una web personal mayoritariamente estática no necesita activar todas las dependencias desde el primer día. No añadir backend ni servicios innecesarios. TanStack Query, Axios, OpenAPI client, charts, formularios complejos y drag-and-drop solo se usarán cuando exista un caso de uso real.
12. GitHub Pages: despliegue y decisiones técnicas
GitHub Pages es adecuado para esta web si se mantiene estática: no ejecuta un servidor Node.js, no aloja APIs privadas ni procesa formularios en backend. Vite compila los recursos a archivos estáticos que GitHub Pages puede servir.
Base path de Vite
Si el sitio se publica en https://<usuario>.github.io/<repositorio>/, configurar base: '/<repositorio>/' en vite.config.ts. Si se publica como sitio de usuario/organización en https://<usuario>.github.io/ o con dominio propio, normalmente usar base: '/'.
TanStack Router y rutas directas
GitHub Pages no ofrece por defecto un fallback SPA universal a index.html para rutas profundas. Para evitar errores 404 al recargar /research o /projects/trace2spec, escoger y probar una estrategia explícita:
•	Preferida si se desea URL limpia: configurar TanStack Router con estrategia de rutas compatible y añadir un fallback 404.html que redirija a la aplicación, junto con recuperación de la ruta original. Verificar la estrategia en GitHub Pages con refresh, enlaces directos y navegación atrás/adelante.
•	Alternativa sencilla: usar hash-based routing, si la configuración de TanStack Router y los requisitos SEO lo permiten; reduce problemas de fallback, pero produce URLs con #.
•	No asumir que basta con desplegar el dist: validar rutas profundas en el entorno publicado.
Automatización
•	Mantener el código fuente en GitHub y configurar GitHub Actions para instalar dependencias, ejecutar Biome, typecheck, tests y build.
•	Publicar el directorio dist como artifact de GitHub Pages usando el flujo oficial de Actions.
•	Configurar en Settings → Pages la fuente GitHub Actions.
•	Usar bun/npm según el lockfile real del proyecto; no mezclar gestores ni regenerar lockfiles sin necesidad.
•	Añadir un archivo .nojekyll si la estructura de assets o archivos generados lo requiere.
•	Probar enlaces, assets, fuentes, rutas y descarga del CV en la URL final.
Limitaciones y formularios
Un formulario de contacto no puede enviar correo por sí solo desde GitHub Pages. Opciones: enlazar mailto:, usar un proveedor de formularios externo con protección antispam, o integrar una función serverless externa. Para la primera versión se recomienda mostrar el correo y enlaces profesionales, evitando un backend.
No incluir secretos, tokens privados ni credenciales en variables VITE_*: esas variables se incorporan al bundle público. Cualquier dato publicado en el repositorio o en el sitio debe considerarse público.
13. Organización de contenido y código
Área	Convención sugerida
Rutas	Definir rutas mediante TanStack Router; mantener la generación de routeTree según la configuración existente.
Componentes	Separar layout, navegación, contenido editorial, publicaciones y proyectos.
Contenido	Mantener publicaciones, proyectos y experiencia en módulos tipados o MD/MDX si se integra un pipeline compatible.
Internacionalización	Diccionarios o módulos de contenido EN/ES con claves tipadas; evitar duplicar componentes.
Assets	Usar rutas relativas a base de Vite o importaciones gestionadas por el bundler; no hardcodear rutas absolutas que rompan en Pages.
SEO	Títulos y descripciones por ruta, canonical/hreflang cuando corresponda, Open Graph, sitemap y robots.txt.

Estructura conceptual (adaptar a la convención real del repositorio):
app/frontend/src/
  components/
    layout/        # Header, Footer, Navigation, ThemeProvider
    common/        # Typography, links, badges, containers
    research/      # PublicationItem, ResearchArea
    projects/      # ProjectCard, CaseStudySection
  routes/
    __root.tsx
    index.tsx
    about.tsx
    research.tsx
    projects/
    experience.tsx
    contact.tsx
  content/
    en/
    es/
  data/
    publications.ts
    projects.ts
    experience.ts
  styles/
  main.tsx

14. Accesibilidad, rendimiento y SEO
•	Usar HTML semántico, landmarks, jerarquía correcta de encabezados y enlaces con texto descriptivo.
•	Garantizar navegación completa por teclado, foco visible y contraste WCAG AA.
•	Respetar prefers-reduced-motion y no comunicar estados solo mediante color.
•	Proporcionar texto alternativo útil para imágenes informativas; usar alt vacío en decoración.
•	Optimizar imágenes (WebP/AVIF), tamaños responsivos, lazy loading y fuentes.
•	Evitar JavaScript innecesario; la portada y contenido principal deben ser rápidos incluso en conexiones móviles.
•	Añadir metadata por página, Open Graph, favicon, sitemap.xml, robots.txt y datos estructurados Person cuando proceda.
•	Configurar idioma correcto por página y enlaces alternativos hreflang para EN/ES.
•	Proporcionar alternativa en tabla accesible para cada gráfico Recharts.
15. Alcance por fases
Fase	Entregables	Criterio de salida
0. Preparación	Confirmar nombre público, biografía, cargo, formación, enlaces, CV y lista de proyectos/publicaciones.	Contenido factual validado; estados editoriales definidos.
1. Fundación	Vite build, routing, layout, design tokens, navegación responsive, theme provider y despliegue inicial en Pages.	Build reproducible y URL pública funcionando.
2. Contenido principal	Home, About, Research, Publications, Projects, Experience y Contact en inglés.	Todas las secciones completas y enlaces verificados.
3. Internacionalización	Versión española, selector de idioma, metadata y alternancia de rutas.	Paridad de contenido EN/ES y navegación correcta.
4. Calidad	Biome, TypeScript strict, Playwright, accesibilidad, SEO y rendimiento.	CI verde; pruebas de rutas, enlaces y responsive aprobadas.
5. Pulido	Diagramas propios, fotografía opcional, casos de estudio detallados y dominio propio opcional.	Presentación coherente y evidencia suficiente.

16. Criterios de aceptación
•	La propuesta profesional se entiende en la primera pantalla.
•	El sitio está disponible en inglés y español, con inglés como predeterminado.
•	Todas las secciones principales son accesibles desde navegación y enlaces directos.
•	Las rutas funcionan al recargar la página en GitHub Pages.
•	El sitio es responsive, accesible por teclado y legible con tema claro/oscuro/sistema.
•	Publicaciones y proyectos muestran estados, contribuciones y enlaces verificables.
•	CV, ORCID, GitHub, LinkedIn y contacto funcionan correctamente.
•	No existen métricas, logros, publicaciones, afiliaciones o cargos inventados.
•	El build y las pruebas se ejecutan automáticamente antes del despliegue.
•	No hay secretos ni información privada en el bundle o repositorio público.
17. Decisiones pendientes antes de implementar
•	Nombre exacto que aparecerá en el encabezado: Juan José Coronel o Juan Coronel.
•	URL del repositorio y nombre definitivo del repositorio para calcular el base path de GitHub Pages.
•	Dominio propio ahora o más adelante.
•	Fotografía profesional: incluir / no incluir.
•	Correo público de contacto.
•	CV público definitivo y versión en inglés.
•	Datos bibliográficos definitivos de Trace2Spec y estado/enlace de Data2Model.
•	Confirmación de los nombres oficiales de cargos, instituciones y programas académicos.
18. Referencias técnicas oficiales
•	GitHub Pages: https://docs.github.com/en/pages
•	GitHub Pages con GitHub Actions: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
•	Vite — configuración de base: https://vite.dev/config/shared-options.html#base
•	TanStack Router: https://tanstack.com/router/latest
•	React: https://react.dev/
•	Tailwind CSS: https://tailwindcss.com/
•	Playwright: https://playwright.dev/
