# Especificación de Arquitectura UX/UI y Sistema de Componentes
## Portafolio Profesional de Jhon Fernando Rios Galindez
### Full Stack Developer & Especialista en Inteligencia Artificial

---

## 1. Visión General y Principios de Diseño

### 1.1 Objetivo del Producto
Diseñar y estructurar la experiencia de usuario (UX) e interfaz visual (UI) para el portafolio profesional web de **Jhon Fernando Rios Galindez**. La plataforma debe comunicar de manera inmediata y contundente su perfil híbrido de alto valor: **Desarrollador Full Stack con sólida experiencia en aplicaciones web de alto rendimiento y Especialista en Inteligencia Artificial (LLMs, RAG, MLOps y pipelines de datos)**.

### 1.2 Principios Rectores de UX/UI
1. **Impacto Inmediato y Claridad de Perfil (Zero Confusion)**: En los primeros 5 segundos el usuario comprende quién es, qué hace, su especialidad técnica dual (Full Stack + IA) y sus canales de contacto.
2. **Interactividad Fluida y Dinamismo sin Fricción**: Transiciones suaves al cambiar de tema (Modo Claro / Modo Oscuro), filtros instantáneos en habilidades y proyectos sin saltos de página ni recargas.
3. **Mobile-First y Responsividad Extrema**: Arquitectura diseñada para teléfonos móviles, tablets y monitores de alta resolución con navegación optimizada para pulgares y gestos táctiles.
4. **Accesibilidad Universal (WCAG 2.1 AA)**: Ratios de contraste adecuados en ambos temas (mínimo 4.5:1 para texto normal), soporte total de navegación por teclado, roles ARIA y compatibilidad con lectores de pantalla.
5. **Robustez y Testabilidad Nativa**: Cada componente interactivo cuenta con atributos `data-testid` normalizados para garantizar el 100% de cobertura en la suite de pruebas automatizadas de QA (R4).

---

## 2. Sistema de Diseño (Design Tokens)

### 2.1 Paleta de Color y Tematización (Light / Dark Mode)

El diseño utiliza tokens semánticos basados en CSS Variables / clases de Tailwind CSS, permitiendo una transición suave mediante `class="dark"` en el elemento raíz `<html>`.

| Token Semántico | Modo Oscuro (Default) | Modo Claro | Uso Principal |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#0b0f19` (Deep Slate / Navy Black) | `#f8fafc` (Slate 50 / Pure Crisp) | Fondo principal de la página |
| `--bg-secondary` | `#111827` (Gray 900 / Slate 900) | `#ffffff` (Blanco puro) | Fondo de tarjetas, modales y barras |
| `--bg-tertiary` | `#1f2937` (Gray 800 / Slate 800) | `#f1f5f9` (Slate 100) | Fondo de badges, inputs y elementos hover |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | `#e2e8f0` (Slate 200) | Bordes de tarjetas y divisores |
| `--border-hover` | `rgba(6, 182, 212, 0.4)` (Cyan Accent) | `#94a3b8` (Slate 400) | Bordes en estado focus o hover |
| `--text-primary` | `#f9fafb` (Gray 50) | `#0f172a` (Slate 900) | Títulos principales y texto de alto contraste |
| `--text-secondary` | `#9ca3af` (Gray 400) | `#475569` (Slate 600) | Párrafos, descripciones y metadatos |
| `--text-muted` | `#6b7280` (Gray 500) | `#94a3b8` (Slate 400) | Etiquetas secundarias, contadores y pie |
| `--accent-cyan` | `#06b6d4` (Cyan 500 - Neon Tech) | `#0284c7` (Sky 600 - High Contrast) | Acento primario, botones CTA, glows |
| `--accent-indigo` | `#6366f1` (Indigo 500 - AI Core) | `#4f46e5` (Indigo 600) | Acento secundario para IA y ML |
| `--accent-gradient` | `linear-gradient(135deg, #06b6d4, #6366f1)` | `linear-gradient(135deg, #0284c7, #4f46e5)` | Títulos destacados y botones principales |
| `--state-success` | `#10b981` (Emerald 500) | `#059669` (Emerald 600) | Mensajes de éxito y estado disponible |
| `--state-error` | `#ef4444` (Red 500) | `#dc2626` (Red 600) | Errores de validación y alertas |
| `--state-warning` | `#f59e0b` (Amber 500) | `#d97706` (Amber 600) | Advertencias y notas de atención |

### 2.2 Tipografía
- **Fuente Principal (Sans)**: `Plus Jakarta Sans` o `Inter`, con fallback a `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`.
  - Excelente legibilidad en pantallas de alta densidad y renderizado nítido en pesos finos y gruesos.
- **Fuente Técnica / Código (Mono)**: `JetBrains Mono` o `Fira Code`, con fallback a `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`.
  - Utilizada para etiquetas de tecnologías, snippets, badges de comandos y métricas numéricas.
- **Escala Modular**:
  - `Display / Hero Title`: `clamp(2.5rem, 5vw, 4.25rem)` / Weight 800 (Extrabold)
  - `Heading 1 (H2 Sección)`: `clamp(1.875rem, 3.5vw, 2.5rem)` / Weight 700 (Bold)
  - `Heading 2 (H3 Tarjeta)`: `1.25rem` a `1.5rem` / Weight 600 (Semibold)
  - `Body Regular`: `1rem` (16px) / Line-height 1.6 / Weight 400 (Regular)
  - `Body Small / Metadata`: `0.875rem` (14px) / Weight 500 (Medium)
  - `Badge / Pill Text`: `0.75rem` (12px) / Tracking wide / Weight 600

### 2.3 Espaciado, Retícula y Breakpoints
- **Espaciado Base**: Múltiplos de 4px (4, 8, 12, 16, 24, 32, 48, 64, 96, 128px).
- **Contenedores Centrales**:
  - Máximo de página: `max-w-7xl` (1280px) con padding horizontal `px-4 sm:px-6 lg:px-8`.
  - Secciones de lectura (About, Contact): `max-w-4xl` a `max-w-5xl`.
- **Breakpoints**:
  - `xs`: `< 640px` (Móviles estándar)
  - `sm`: `>= 640px` (Móviles grandes / landscape)
  - `md`: `>= 768px` (Tablets / iPads)
  - `lg`: `>= 1024px` (Laptops y escritorios estándar)
  - `xl`: `>= 1280px` (Monitores amplios)

### 2.4 Efectos Visuales, Sombras y Transiciones
- **Glassmorphism**: `backdrop-blur-md bg-opacity-80` en Header y tarjetas flotantes.
- **Transición Global de Tema**:
  ```css
  html, body, div, section, nav, header, footer, card, input, textarea, button {
    transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
  }
  ```
- **Reducción de Movimiento (`prefers-reduced-motion: reduce`)**:
  - Respeto a las preferencias del sistema operativo desactivando animaciones de traslación o rebotes para usuarios con sensibilidad vestibular.

---

## 3. Jerarquía y Árbol de Componentes de la Aplicación

```text
App (Root & ThemeProvider)
│
├── Header (Sticky Navbar & Mobile Menu)
│   ├── BrandLogo ("JR" Monogram & Name)
│   ├── DesktopNavLinks (Smooth Scroll: Inicio, Sobre Mí, Experiencia, Educación, Habilidades, Proyectos, Contacto)
│   ├── ThemeToggle (Sun/Moon button + localStorage)
│   └── MobileMenuToggle & Drawer (Aria-expanded, focus trap, backdrop)
│
├── Main
│   ├── HeroSection
│   │   ├── StatusBadge ("Disponible para proyectos / Open to Work")
│   │   ├── Headline ("Jhon Fernando Rios Galindez")
│   │   ├── Subtitle ("Full Stack Developer & Especialista en IA")
│   │   ├── BioBrief (Extracto de alto impacto)
│   │   ├── HeroActions (CTA "Ver Proyectos", CTA "Contactar", Enlace CV)
│   │   ├── SocialChannelsBar (LinkedIn, GitHub, Email, Portfolio)
│   │   └── HeroGraphic (Interactive Code/Tech Stack Card)
│   │
│   ├── AboutSection
│   │   ├── SectionHeader (Título, Subtítulo y Decorador)
│   │   ├── NarrativeBio (Trayectoria integral de ingeniería + web + IA)
│   │   ├── StatCounters (5+ Años Exp, 40%+ Rendimiento, 10+ Soluciones, 100% Calidad)
│   │   └── CorePillarsGrid (Full Stack, IA/MLOps, Rendimiento Web, Liderazgo Técnico)
│   │
│   ├── ExperienceSection
│   │   ├── SectionHeader
│   │   └── TimelineContainer
│   │       ├── TimelineItem (ORBIDI - Production Lead, 2025-2026)
│   │       ├── TimelineItem (ORBIDI - Programador Full Stack, 2024-2025)
│   │       └── TimelineItem (Fiverr - Desarrollador Web, 2021-2024)
│   │
│   ├── EducationSection
│   │   ├── SectionHeader
│   │   ├── EducationGrid
│   │   │   ├── DegreeCard (Especialización en IA - Uniminuto)
│   │   │   ├── DegreeCard (Tecnología en Desarrollo de Software - SENA)
│   │   │   ├── DegreeCard (Ingeniería Civil - Univ. del Cauca)
│   │   │   └── LanguageCard (Inglés Profesional - Cambridge)
│   │   └── CertificationsGrid (Google Cloud, AI Intro, Python AI/Data Science, React, DOM)
│   │
│   ├── SkillsSection
│   │   ├── SectionHeader
│   │   ├── FilterTabBar (Todos, Frontend, Backend, IA & ML, Bases de Datos)
│   │   └── SkillsGrid (Badges organizados por nivel y categoría, animados dinámicamente)
│   │
│   ├── ProjectsSection
│   │   ├── SectionHeader
│   │   ├── ProjectFilterTabs (Todos, Frontend, Backend, IA & ML, Bases de Datos)
│   │   └── ProjectsGrid
│   │       ├── ProjectCard 1 (Sistema RAG & Búsqueda Semántica con LLMs)
│   │       ├── ProjectCard 2 (Plataforma E-commerce de Alto Rendimiento)
│   │       ├── ProjectCard 3 (Dashboard de Monitoreo & Workflow Automation)
│   │       ├── ProjectCard 4 (CMS Corporativo & Headless Optimizado)
│   │       └── ProjectCard 5 (Pipeline de Datos & Modelo Predictivo ML)
│   │
│   └── ContactSection
│       ├── SectionHeader
│       ├── ContactContainer (Split 2 Columnas)
│       │   ├── DirectChannelsInfo (Email directo con botón copiar, LinkedIn, GitHub, Ubicación)
│       │   └── InteractiveContactForm
│       │       ├── Field: Name (Validación tiempo real, min/max)
│       │       ├── Field: Email (Regex RFC 5322 compatible)
│       │       ├── Field: Subject (Validación requerida)
│       │       ├── Field: Message (Contador en vivo: X / 1000)
│       │       ├── SubmitButton (Estados: Idle, Validating, Submitting, Success, Error)
│       │       └── FeedbackBanner (Éxito verde con dismiss / Alerta de error)
│
└── Footer
    ├── FooterBrand & Copyright (© 2026 Jhon Fernando Rios Galindez)
    ├── FooterNavLinks
    ├── FooterSocialIcons
    └── BackToTopButton (Smooth scroll al inicio)
```

---

## 4. Especificación Detallada de Componentes

### 4.1 Header & Sticky Navigation
- **Ubicación & Comportamiento**:
  - Fijado en la parte superior (`sticky top-0 z-50`), con fondo translúcido con efecto blur (`bg-slate-900/80 dark:bg-[#0b0f19]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10`).
  - Detección de scroll: agrega sombra sutil al desplazarse más de 20px.
- **Elementos**:
  1. **Brand**: Monograma circular con gradiente cian-índigo `JR`, seguido del texto "Jhon Rios" y un badge discreto `Full Stack & AI`. Clickeable, scroll a `#inicio`.
  2. **Enlaces de Navegación**:
     - Inicio (`#inicio`)
     - Sobre Mí (`#sobre-mi`)
     - Experiencia (`#experiencia`)
     - Educación (`#educacion`)
     - Habilidades (`#habilidades`)
     - Proyectos (`#proyectos`)
     - Contacto (`#contacto`)
     - *Interacción*: Indicador de enlace activo (`active-spy`) que resalta la sección visible mediante `IntersectionObserver`. Hover con subrayado animado.
  3. **Selector de Tema (ThemeToggle)**:
     - Botón circular accesible (`aria-label="Cambiar tema claro u oscuro"`).
     - Iconos animados: Icono de Sol (`Sun`) en modo oscuro, Icono de Luna (`Moon`) en modo claro con rotación y desvanecimiento suave (`transform rotate-0 scale-100 transition-all`).
     - Atributo de prueba: `data-testid="theme-toggle-btn"`.
  4. **Menú Móvil (Hamburger Drawer)**:
     - Botón accesible con icono `Menu` / `X` (`aria-expanded="false"`, `data-testid="mobile-menu-btn"`).
     - Menú desplegable animado con backdrop oscuro que bloquea el scroll de fondo mientras está abierto.
     - Cierre automático al presionar una opción, al presionar la tecla `Escape` o al hacer clic fuera.

### 4.2 Hero Section (Sección Principal de Entrada)
- **Objetivo**: Capturar la atención de reclutadores técnicos, líderes de ingeniería y clientes.
- **Elementos Clave**:
  1. **Status Badge**:
     - Pastilla flotante interactiva: `● Disponible para nuevos proyectos e innovación técnica`.
     - Punto verde con animación pulsante (`animate-ping` sutil).
  2. **Titular y Subtitular de Alto Impacto**:
     - Titular H1: `Jhon Fernando Rios Galindez`.
     - Subtítulo estilizado: `Desarrollador Full Stack | Especialista en Inteligencia Artificial`.
     - Gradiente de texto en palabras clave ("Full Stack" y "Inteligencia Artificial").
  3. **Elevator Pitch / Bio Resumen**:
     > "Arquitecto de soluciones web de extremo a extremo y sistemas basados en datos. Domino el ecosistema Frontend y Backend moderno (React, Node, PHP, SQL) integrando modelos predictivos, LLMs, RAG y prácticas MLOps con foco obsesivo en rendimiento, escalabilidad y excelencia de usuario."
  4. **Llamadas a la Acción (CTAs)**:
     - **Botón Primario**: "Explorar Proyectos" (`data-testid="hero-cta-projects"`) con icono de flecha hacia la derecha/abajo, scroll suave a `#proyectos`.
     - **Botón Secundario**: "Contactar Ahora" (`data-testid="hero-cta-contact"`) con icono de mensaje, scroll suave a `#contacto`.
     - **Botón Complementario**: "Descargar CV / Perfil" (abre o descarga `Profile.pdf` en nueva pestaña).
  5. **Barra de Redes y Enlaces de Contacto Inmediatos**:
     - LinkedIn (`https://www.linkedin.com/in/jhon-rios-galindez`)
     - GitHub
     - Correo electrónico (`mailto:r.jhonf@gmail.com`)
     - Web de portafolio actual (`https://jhonriosportfolio.vercel.app/`)
  6. **Elemento Gráfico Destacado (Hero Graphic Card)**:
     - Tarjeta con estética de terminal / IDE moderno que visualiza el stack en ejecución:
       ```json
       {
         "developer": "Jhon Fernando Rios Galindez",
         "role": "Full Stack & AI Specialist",
         "core_stack": ["React.js", "Node.js", "Python", "PostgreSQL"],
         "ai_expertise": ["LLMs", "RAG", "MLOps", "TensorFlow"],
         "status": "Ready for high-impact challenges"
       }
       ```

### 4.3 About Me & Highlights (Sobre Mí y Logros)
- **Estructura**:
  1. **Narrativa Profesional**:
     - Origen analítico: Ingeniero Civil de la Universidad del Cauca, lo que confiere una rigurosa capacidad para resolución de problemas complejos, modelado de estructuras y lógica cuantitativa.
     - Transición y especialización técnica: Tecnólogo en Desarrollo de Software (SENA) y Especialista en Inteligencia Artificial (Uniminuto).
     - Trayectoria en liderazgo y producción digital en empresas dinámicas como ORBIDI y proyectos internacionales en Fiverr.
  2. **Métricas de Impacto (Stat Counters / KPI Cards)**:
     - `5+`: Años de Trayectoria en Desarrollo Web y Producción Tecnológica.
     - `+40%`: Optimización Comprobada en Tiempos de Carga y Rendimiento Web.
     - `10+`: Proyectos End-to-End Entregados (Full Stack, IA, RAG, CMS y E-commerce).
     - `100%`: Enfoque en Calidad, Pruebas Automatizadas y Mejores Prácticas MLOps.
  3. **Pilares de Competencia (Cards interactivas)**:
     - *Desarrollo Full Stack*: Arquitectura limpia, interfaces reactivas modernas y APIs REST robustas.
     - *Inteligencia Artificial Aplicada*: Sistemas de búsqueda semántica (RAG), integración de LLMs y pipelines de entrenamiento.
     - *Rendimiento & Optimización*: Auditorías Core Web Vitals, optimización de queries SQL, lazy loading y sistemas de caché.
     - *Liderazgo & Calidad*: Coordinación de operaciones, root cause analysis (RCA), compliance y pruebas sistemáticas.

### 4.4 Experience Timeline (Línea de Tiempo Interactiva)
- **Disposición**: Línea de tiempo vertical interactiva con nodos luminosos y tarjetas de elevación suave.
- **Datos Verificados de Experiencia**:
  1. **ORBIDI — Production Lead**
     - Periodo: Septiembre 2025 – Mayo 2026 (9 meses)
     - Ubicación: Colombia
     - Logros y Responsabilidades:
       - Coordinación de operaciones técnicas y seguimiento de tareas bajo estándares de calidad, eficiencia y compliance normativo.
       - Detección proactiva de cuellos de botella y oportunidades de optimización en los flujos de entrega del equipo.
       - Impulso a la adopción de herramientas basadas en Inteligencia Artificial y mejores prácticas de monitoreo operativo para la automatización de flujos de trabajo.
       - Traducción ágil de requerimientos de negocio complejos en tareas tácticas con criterios estrictos de aceptación.
     - Badges de Tecnología y Gestión: `Liderazgo Técnico`, `Compliance`, `Inteligencia Artificial`, `Workflow Automation`, `Productividad Operativa`.
  2. **ORBIDI — Programador Full Stack**
     - Periodo: Septiembre 2024 – Agosto 2025 (1 año)
     - Ubicación: Colombia
     - Logros y Responsabilidades:
       - Desarrollo de aplicaciones web de principio a fin (end-to-end) con React.js, PHP y JavaScript moderno.
       - Configuración, administración y mantenimiento de CMS WordPress y bases de datos MySQL, optimizando esquemas de datos.
       - Ejecución de pruebas funcionales y de calidad rigurosas, garantizando compatibilidad entre navegadores (cross-browser) y diseño responsivo.
       - Optimización de velocidad, tiempos de respuesta de base de datos y consumo de recursos.
       - Análisis de causa raíz (RCA) para resolución de incidentes técnicos y soporte de alto nivel.
       - Colaboración en diseño UI/UX orientado a la conversión y experiencia del usuario.
     - Badges: `React.js`, `PHP`, `JavaScript`, `WordPress`, `MySQL`, `QA Testing`, `Optimización Web`, `UI/UX`.
  3. **Fiverr — Desarrollador Web**
     - Periodo: Mayo 2021 – Agosto 2024 (3 años 4 meses)
     - Logros y Responsabilidades:
       - Creación y despliegue de sitios web personalizados para clientes internacionales (portafolios, e-commerce, sitios corporativos).
       - Implementación de mejores prácticas de SEO técnico y arquitectura web rápida.
       - Incremento comprobado del ~40% en velocidad y rendimiento mediante optimización de recursos, caché y lazy loading.
     - Badges: `Desarrollo Web`, `E-commerce`, `SEO Técnico`, `WordPress`, `Performance Tuning`, `Freelance Global`.

### 4.5 Education & Certifications (Educación y Certificaciones)
- **Organización**: Grid de dos columnas balanceadas (Educación Formal vs. Certificaciones Especializadas).
- **Educación Formal**:
  - **Corporación Universitaria Minuto de Dios**:
    - *Título*: Especialista en Inteligencia Artificial (Artificial Intelligence)
    - *Periodo*: Marzo 2025 – Abril 2026
    - *Enfoque*: Modelos de lenguaje grande (LLMs), arquitecturas RAG, redes neuronales profundas y MLOps.
  - **Servicio Nacional de Aprendizaje (SENA)**:
    - *Título*: Tecnólogo en Análisis y Desarrollo de Software (Computer Software Engineering)
    - *Periodo*: Abril 2024 – Julio 2026
    - *Enfoque*: Ingeniería de software, bases de datos relacionales, patrones de diseño y desarrollo web.
  - **Universidad del Cauca**:
    - *Título*: Ingeniero Civil (Civil Engineering)
    - *Periodo*: Febrero 2008 – Septiembre 2014
    - *Aporte distintivo*: Pensamiento analítico estructural, cálculo avanzado y disciplina de ingeniería.
  - **Cambridge Language Centres**:
    - *Formación*: Inglés Profesional (Professional Working Proficiency)
    - *Periodo*: Enero 2023 – Noviembre 2023
- **Certificaciones Oficiales**:
  1. *Introduction to Artificial Intelligence (AI)* — IBM / Coursera
  2. *Python for Data Science, AI & Development* — IBM
  3. *React.js Course* — Certificación de Especialización Frontend
  4. *DOM Manipulation Course* — Arquitectura Web & JavaScript Avanzado
  5. *Google Cloud Fundamentals: Core Infrastructure en Español* — Google Cloud Training

### 4.6 Interactive Skills Matrix (Matriz Interactiva de Habilidades)
- **Control de Filtros (Tab Bar)**:
  - Botones accesibles con roles `role="tab"` en un contenedor `role="tablist"`:
    - `Todos` (`data-testid="skills-filter-all"`)
    - `Frontend` (`data-testid="skills-filter-frontend"`)
    - `Backend` (`data-testid="skills-filter-backend"`)
    - `IA & Machine Learning` (`data-testid="skills-filter-ai"`)
    - `Bases de Datos` (`data-testid="skills-filter-database"`)
- **Contenido del Catálogo de Habilidades**:

| Categoría | Habilidad / Tecnología | Nivel / Dominio | Badge / Tag |
| :--- | :--- | :--- | :--- |
| **Frontend** | React.js / Next.js | Avanzado / Producción | `React`, `Next.js`, `Hooks`, `Context` |
| **Frontend** | TypeScript / JavaScript (ES6+) | Avanzado | `TypeScript`, `Modern JS` |
| **Frontend** | Tailwind CSS / CSS3 / HTML5 | Avanzado | `Tailwind`, `Responsive`, `A11y` |
| **Frontend** | UI/UX Prototyping & Responsive Design | Especialista | `UI/UX`, `Figma to Code` |
| **Backend** | Node.js / Express | Avanzado | `Node.js`, `REST APIs` |
| **Backend** | PHP & WordPress Headless | Avanzado | `PHP`, `WordPress`, `APIs` |
| **Backend** | Arquitectura de Software & APIs REST | Avanzado | `Clean Architecture`, `Microservicios` |
| **IA & Machine Learning** | Python (Scikit-learn, TensorFlow, Pandas) | Avanzado | `Python`, `Machine Learning` |
| **IA & Machine Learning** | LLMs & Arquitecturas RAG | Especialista | `LLMs`, `RAG`, `LangChain`, `Embeddings` |
| **IA & Machine Learning** | Búsqueda Semántica & Vector Databases | Especialista | `Vector DB`, `pgvector`, `Embeddings` |
| **IA & Machine Learning** | MLOps & Automatización de Flujos | Intermedio / Avanzado | `MLOps`, `Pipelines`, `Model Tracking` |
| **Bases de Datos** | PostgreSQL & pgvector | Avanzado | `PostgreSQL`, `Vector Search`, `SQL` |
| **Bases de Datos** | MySQL & Optimización de Consultas | Avanzado | `MySQL`, `Index Tuning`, `Performance` |
| **Bases de Datos** | Modelado Relacional & Normalización | Avanzado | `Data Modeling`, `ACID`, `ORM` |

- **Micro-interacciones**:
  - Al cambiar de tab: las tarjetas no coincidentes desaparecen con animación `scale-95 opacity-0`, mientras las seleccionadas ingresan con `scale-100 opacity-100` en menos de 200ms.
  - Indicador numérico de habilidades visibles (ej. "Mostrando 14 habilidades").

### 4.7 Interactive Projects Showcase (Muestrario de Proyectos)
- **Sistema de Filtro por Categorías**:
  - Pestañas interactivas sincronizadas: `Todos`, `Frontend`, `Backend`, `IA & Machine Learning`, `Bases de Datos`.
  - Atributos `data-testid="project-filter-all"`, `data-testid="project-filter-frontend"`, etc.
- **Colección de Proyectos Destacados**:

#### Proyecto 1: Sistema RAG & Búsqueda Semántica con LLMs
- **Categorías**: `IA & Machine Learning`, `Backend`, `Bases de Datos`
- **Descripción**: Arquitectura de recuperación aumentada por generación (RAG) para consulta contextual sobre corpus de documentos técnicos. Utiliza embeddings vectoriales, re-ranking dinámico y generación de respuestas fundamentadas evitando alucinaciones.
- **Stack Técnico**: `Python`, `FastAPI`, `PostgreSQL (pgvector)`, `LangChain`, `OpenAI / Claude API`, `Docker`.
- **Métricas / Impacto**: Reducción del 70% en tiempo de búsqueda de información técnica interna; latencia de respuesta sub-segundo en búsqueda semántica.
- **Enlaces**:
  - Botón Demo: `https://github.com/jhonrios` (o enlace funcional de demostración)
  - Botón Código: `https://github.com/jhonrios/rag-semantic-search`

#### Proyecto 2: Plataforma E-commerce de Alto Rendimiento
- **Categorías**: `Frontend`, `Backend`, `Bases de Datos`
- **Descripción**: Aplicación web completa de comercio electrónico con catálogo dinámico reactivo, carrito con persistencia local, filtrado multicriterio y pasarela de pago simulada.
- **Stack Técnico**: `React.js`, `Next.js`, `Tailwind CSS`, `Node.js`, `MySQL`, `REST API`.
- **Métricas / Impacto**: Tiempo de carga interactivo < 1.2s, optimización de imágenes en formato WebP y 98/100 en puntuación de Google Lighthouse.
- **Enlaces**:
  - Botón Demo: Demo en vivo interactiva
  - Botón Código: Repositorio GitHub

#### Proyecto 3: Dashboard de Monitoreo & Workflow Automation
- **Categorías**: `Frontend`, `Backend`, `IA & Machine Learning`
- **Descripción**: Panel de control interactivo para seguimiento de métricas operativas, detección de cuellos de botella en producción y automatización de tareas repetitivas mediante modelos predictivos.
- **Stack Técnico**: `React.js`, `TypeScript`, `Node.js`, `Chart.js`, `Python`, `REST API`.
- **Métricas / Impacto**: Inspirado en la experiencia de liderazgo en ORBIDI; permite a supervisores y equipos identificar desviaciones de rendimiento en tiempo real.
- **Enlaces**:
  - Botón Demo: Vista previa interactiva
  - Botón Código: Repositorio GitHub

#### Proyecto 4: CMS Corporativo & Headless Optimizado
- **Categorías**: `Frontend`, `Bases de Datos`
- **Descripción**: Portal corporativo escalable con arquitectura frontend desacoplada, integración con WordPress Headless via REST API, caché avanzado y optimización de carga diferida (lazy loading).
- **Stack Técnico**: `React.js`, `PHP`, `WordPress REST API`, `MySQL`, `Tailwind CSS`.
- **Métricas / Impacto**: +40% de mejora en velocidad respecto a implementaciones tradicionales; compatible con estándares de accesibilidad WCAG y SEO técnico avanzado.
- **Enlaces**:
  - Botón Demo: Demo en vivo
  - Botón Código: Repositorio GitHub

#### Proyecto 5: Data Pipeline & Modelo Predictivo de Clasificación
- **Categorías**: `IA & Machine Learning`, `Bases de Datos`
- **Descripción**: Pipeline automatizado de ingestión, preprocesamiento de datos y entrenamiento de modelos de machine learning para predicción de tendencias operativas y clasificación de clientes.
- **Stack Técnico**: `Python`, `Scikit-learn`, `Pandas`, `TensorFlow`, `PostgreSQL`, `Matplotlib`.
- **Métricas / Impacto**: Precisión de clasificación del 92.4% (F1-score balanceado); pipeline reproducible de datos listo para inferencia continua.
- **Enlaces**:
  - Botón Demo: Notebook / Dashboard interactivo
  - Botón Código: Repositorio GitHub

- **Anatomía de la Tarjeta de Proyecto (`ProjectCard`)**:
  - Insignia de categoría destacada.
  - Título con tipografía gruesa y enlace hover.
  - Párrafo descriptivo claro y enfocado en solución técnica.
  - Fila de pastillas con tecnologías utilizadas.
  - Barra de acciones inferior con dos botones:
    - `Ver Demo` (con icono de enlace externo y `target="_blank"` seguro con `rel="noopener noreferrer"`).
    - `Código en GitHub` (con icono de GitHub).
  - Hover: elevación de 4px (`translate-y-[-4px]`), realce de borde con acento cian y sombra suave.

### 4.8 Functional Contact Module (Módulo de Contacto Funcional)
- **Disposición**: Contenedor dividido en 2 columnas en escritorio (`lg:grid-cols-12`):
  - **Columna Izquierda (5 cols)**: Información de contacto directo, canales oficiales y disponibilidad.
  - **Columna Derecha (7 cols)**: Formulario interactivo con validación instantánea y máquina de estados.

#### 4.8.1 Canales de Contacto Directo
- **Tarjeta de Correo**: `r.jhonf@gmail.com` con botón interactivo de "Copiar Correo" que muestra feedback de "¡Copiado al portapapeles!" por 2 segundos.
- **Tarjeta de LinkedIn**: Enlace directo a `https://www.linkedin.com/in/jhon-rios-galindez` con indicador de perfil verificado.
- **Tarjeta de Portafolio / GitHub**: Enlaces directos oficiales.
- **Ubicación**: Colombia (Disponible para trabajo remoto global y relocalización según proyecto).

#### 4.8.2 Especificación del Formulario y Reglas de Validación

| Campo | Atributo `name` | Tipo | Requerido | Reglas de Validación | Mensaje de Error Contextual |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Nombre Completo** | `name` | `text` | Sí | `min: 3`, `max: 60`, no sólo espacios en blanco | "Por favor ingresa tu nombre completo (mínimo 3 caracteres)." |
| **Correo Electrónico** | `email` | `email` | Sí | Regex: `^[^\s@]+@[^\s@]+\.[^\s@]+$` | "Ingresa una dirección de correo válida (ej. nombre@dominio.com)." |
| **Asunto** | `subject` | `text` | Sí | `min: 4`, `max: 100`, no vacío | "El asunto es requerido (mínimo 4 caracteres)." |
| **Mensaje** | `message` | `textarea`| Sí | `min: 10`, `max: 1000`. Contador en vivo | "El mensaje debe tener entre 10 y 1000 caracteres." |

#### 4.8.3 Contador de Caracteres en Vivo
- El campo `message` muestra dinámicamente:
  `[longitud actual] / 1000 caracteres` (`data-testid="contact-char-counter"`).
  - Normal: texto gris apagado.
  - Al superar 900 caracteres: advertencia en color ámbar.
  - Si alcanza 1000 caracteres: bloquea escritura adicional o resalta en rojo.

#### 4.8.4 Máquina de Estados del Formulario (State Machine)
- **Estados Posibles**:
  1. `IDLE`: Formulario en reposo, listo para escribir.
  2. `TOUCHED`: El usuario interactuó con un campo; la validación ocurre al perder el foco (`onBlur`) o al escribir (`onChange` después de haber tenido error).
  3. `SUBMITTING`: El usuario presionó "Enviar Mensaje". El botón se deshabilita, muestra un spinner giratorio y el texto cambia a "Enviando mensaje...".
  4. `SUCCESS`: Envío simulado o procesado exitosamente (demora simulada de 600-900ms para realismo).
     - Se muestra un banner verde destacado con icono de verificación:
       *"¡Mensaje enviado con éxito! Muchas gracias por ponerte en contacto, Jhon responderá a tu solicitud a la brevedad."*
     - El formulario se resetea a sus valores vacíos originales.
     - Botón para cerrar o descartar el banner de confirmación.
  5. `ERROR`: Si ocurre una falla de validación o fallo de red, se muestra una alerta contextual roja en la parte superior del formulario:
     *"No fue posible enviar el mensaje. Por favor verifica los campos resaltados o escribe directamente a r.jhonf@gmail.com"*.

### 4.9 Footer (Pie de Página)
- **Componentes**:
  - Copyright: `© 2026 Jhon Fernando Rios Galindez. Todos los derechos reservados.`
  - Resumen de rol: `Full Stack Developer & AI Specialist · Colombia`.
  - Navegación rápida con enlaces ancla (Inicio, Proyectos, Habilidades, Contacto).
  - Fila de iconos de redes sociales (LinkedIn, GitHub, Correo, Portfolio Vercel).
  - Botón flotante o integrado `Volver arriba` (`Back to Top`) con icono `ChevronUp` y scroll fluido.
  - Nota de tecnología: `Construido con React, Tailwind CSS y diseño accesible (WCAG 2.1 AA)`.

---

## 5. Flujos de Interacción y Diagramas de Estado

### 5.1 Flujo del Selector de Tema (Theme Switcher Flow)

```text
[Inicio de la App / Carga de Página]
          │
          ▼
¿Existe 'portfolio-theme' en localStorage?
    ├── SÍ ──► Aplicar clase ("dark" o "light") al <html>
    └── NO ──► Consultar window.matchMedia('(prefers-color-scheme: dark)')
                   ├── Si es dark ──► Aplicar clase "dark"
                   └── Si es light ─► Aplicar clase "light"
          │
          ▼
[Usuario hace clic en ThemeToggle Button]
          │
          ▼
Alternar estado (dark <-> light)
          │
          ├── 1. Actualizar clase en document.documentElement.classList
          ├── 2. Guardar nuevo valor en localStorage.setItem('portfolio-theme', nuevoTema)
          └── 3. Animar rotación suave del icono Sun/Moon (CSS transition 250ms)
```

### 5.2 Flujo de Filtrado de Proyectos y Habilidades

```text
[Usuario hace clic en Pestaña de Categoría]
(ej: "IA & Machine Learning")
          │
          ▼
1. Actualizar estado reactivo: activeFilter = "IA & Machine Learning"
2. Actualizar atributo aria-selected="true" en la pestaña activa
3. Filtrar array de elementos:
   - Si activeFilter === "Todos" ──► Mostrar todos los elementos
   - Si no ────────────────────────► Incluir solo items cuya lista de categorías incluya activeFilter
4. Notificar a lectores de pantalla vía aria-live="polite" ("Mostrando X proyectos de categoría IA")
5. Animar entrada de las tarjetas filtradas (CSS fade-in & scale)
```

### 5.3 Flujo de Validación y Envío del Formulario de Contacto

```text
[Usuario ingresa datos en los campos del formulario]
          │
          ├─► onBlur en cada input ──► Ejecutar validador específico
          │                              ├── Válido: Limpiar mensaje de error, borde neutral/verde
          │                              └── Inválido: Mostrar mensaje contextual en rojo, aria-invalid="true"
          ▼
[Usuario presiona el botón "Enviar Mensaje"]
          │
          ▼
Ejecutar validación completa de todo el formulario
          │
    ¿Hay algún error de validación?
          ├── SÍ ──► Detener envío.
          │          Focalizar el primer campo con error.
          │          Mostrar mensajes de error en todos los campos inválidos.
          │
          └── NO ──► Transicionar estado a SUBMITTING (aria-busy="true")
                     Deshabilitar botón de envío y mostrar spinner giratorio.
                     Simular latencia de red / llamada a backend (750ms).
                            │
                            ▼
                     Transicionar a SUCCESS:
                     - Mostrar banner de felicitación / confirmación verde.
                     - Limpiar valores del formulario (reset a strings vacíos).
                     - Desplazar suavemente hacia el banner para visibilidad.
```

---

## 6. Accesibilidad (a11y) y Estándares WCAG 2.1 AA

### 6.1 Ratios de Contraste de Color
- **Texto Normal (16px / 1rem)**: Contraste mínimo de **4.5:1** contra el fondo.
  - Modo Oscuro: Texto `#f9fafb` sobre fondo `#0b0f19` (Ratio **16.8:1** - Supera estándar).
  - Modo Claro: Texto `#0f172a` sobre fondo `#ffffff` (Ratio **15.4:1** - Supera estándar).
- **Acentos y Botones**:
  - Cyan `#06b6d4` con texto oscuro en botones primarios.
  - Indigo `#4f46e5` con texto blanco (Ratio **8.1:1**).

### 6.2 Soporte Completo de Teclado
- Todos los elementos interactivos (enlaces, botones, tabs, inputs) tienen indicadores visibles de foco:
  `focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:outline-none`.
- Navegación por pestañas lógicas mediante la tecla `Tab`.
- Acceso a tabs de filtros mediante flechas izquierda/derecha o `Enter`/`Space`.
- Cierre de menú móvil con la tecla `Escape`.

### 6.3 Semántica HTML y Atributos ARIA
- Uso riguroso de etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Roles específicos:
  - Selector de pestañas: `role="tablist"` en el contenedor, `role="tab"` en cada botón de filtro, con `aria-selected="true|false"` y `aria-controls="panel-id"`.
  - Mensajes de error en formulario: `aria-invalid="true"` en los inputs con error, asociados al texto de error mediante `aria-describedby="error-[field]"`.
  - Banner de confirmación: `role="alert"` o `aria-live="polite"` para que los lectores de pantalla anuncien el éxito de forma inmediata.

---

## 7. Mapeo de Identificadores para Pruebas Automatizadas (QA Test Matrix)

Para dar cumplimiento estricto al **Requerimiento R4** y garantizar que la suite de pruebas automatizadas alcance el **100% de aprobación**, se definen los siguientes atributos `data-testid` obligatorios en los componentes:

| Componente | Elemento | Atributo `data-testid` | Propósito del Test |
| :--- | :--- | :--- | :--- |
| **Header** | Botón de cambio de tema | `theme-toggle-btn` | Probar toggle light/dark y persistencia en localStorage |
| **Header** | Botón menú móvil | `mobile-menu-btn` | Probar apertura/cierre de navegación en móviles |
| **Header** | Enlaces de navegación | `nav-link-inicio`, `nav-link-sobre-mi`, `nav-link-experiencia`, `nav-link-educacion`, `nav-link-habilidades`, `nav-link-proyectos`, `nav-link-contacto` | Probar presencia y enlaces de ancla |
| **Hero** | Botón CTA Proyectos | `hero-cta-projects` | Probar clic y scroll a sección de proyectos |
| **Hero** | Botón CTA Contacto | `hero-cta-contact` | Probar clic y scroll a sección de contacto |
| **Skills** | Filtro "Todos" | `skills-filter-all` | Probar visualización completa de habilidades |
| **Skills** | Filtro "Frontend" | `skills-filter-frontend` | Probar filtro exclusivo de habilidades frontend |
| **Skills** | Filtro "Backend" | `skills-filter-backend` | Probar filtro exclusivo de habilidades backend |
| **Skills** | Filtro "IA & ML" | `skills-filter-ai` | Probar filtro de habilidades de inteligencia artificial |
| **Skills** | Filtro "Bases de Datos" | `skills-filter-database` | Probar filtro de habilidades de bases de datos |
| **Skills** | Tarjetas de habilidad | `skill-badge-[identificador]` | Verificar renderizado de badges de tecnologías |
| **Projects** | Filtro "Todos" | `project-filter-all` | Probar visualización de todos los proyectos |
| **Projects** | Filtro "Frontend" | `project-filter-frontend`| Probar filtro de proyectos frontend |
| **Projects** | Filtro "Backend" | `project-filter-backend` | Probar filtro de proyectos backend |
| **Projects** | Filtro "IA & ML" | `project-filter-ai` | Probar filtro de proyectos de IA |
| **Projects** | Filtro "Bases de Datos" | `project-filter-database`| Probar filtro de proyectos de bases de datos |
| **Projects** | Tarjeta de proyecto | `project-card-[id]` | Verificar renderizado, tags y links de demo/código |
| **Contact** | Formulario contenedor | `contact-form` | Verificar presencia y eventos submit |
| **Contact** | Input Nombre | `contact-name-input` | Probar validación requerida y longitud mínima |
| **Contact** | Input Correo | `contact-email-input` | Probar validación de formato regex de email |
| **Contact** | Input Asunto | `contact-subject-input` | Probar validación de campo requerido |
| **Contact** | Textarea Mensaje | `contact-message-input` | Probar validación de longitud y campo requerido |
| **Contact** | Contador de caracteres | `contact-char-counter` | Probar actualización en tiempo real de longitud |
| **Contact** | Mensaje error Nombre | `field-error-name` | Verificar visualización de error contextual |
| **Contact** | Mensaje error Correo | `field-error-email` | Verificar visualización de error de correo |
| **Contact** | Mensaje error Asunto | `field-error-subject` | Verificar visualización de error de asunto |
| **Contact** | Mensaje error Mensaje | `field-error-message` | Verificar visualización de error de mensaje |
| **Contact** | Botón Enviar | `contact-submit-btn` | Probar estados (disabled en submitting, envío exitoso) |
| **Contact** | Banner de Éxito | `contact-success-banner`| Verificar aparición tras envío válido y mensaje de éxito |
| **Contact** | Botón Copiar Correo | `copy-email-btn` | Probar copia de r.jhonf@gmail.com al portapapeles |

---

## 8. Resumen de Valor para los Agentes Implementadores

- **Para el Desarrollador Frontend**:
  - Dispone de la jerarquía completa de componentes, clases de estilo, estados reactivos y transiciones visuales.
  - Cuenta con la estructura exacta de datos para las matrices de habilidades, proyectos y experiencia.
- **Para el Desarrollador Backend**:
  - Cuenta con la especificación formal del modelo de datos de contacto, expresiones regulares de validación y simulación/implementación de la API de contacto.
- **Para el Agente QA / Tester**:
  - Tiene a su disposición la tabla unificada de `data-testid` y la especificación detallada de los casos de prueba de aceptación para automatizar los tests unitarios e integrados sin ambigüedades.
