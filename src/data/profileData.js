/**
 * Centralized Profile & Portfolio Data Module
 * Mined and verified from Profile.pdf for Jhon Fernando Rios Galindez
 */

// Anti-Bot obfuscated email
const EMAIL_ENCODED = 'ci5qaG9uZkBnbWFpbC5jb20=';
export const getDecodedEmail = () => {
  if (typeof atob === 'function') {
    try {
      return atob(EMAIL_ENCODED);
    } catch {
      // Fallback
    }
  }
  return ['r.jhonf', 'gmail.com'].join('@');
};

export const profile = {
  name: 'Jhon Fernando Rios Galindez',
  title_es: 'Desarrollador de Software & Desarrollador Web Full Stack | Especialista en IA',
  title_en: 'Software Developer & Full Stack Web Developer | AI Specialist',
  location: 'Colombia',
  get email() {
    return getDecodedEmail();
  },
  email_obfuscated: EMAIL_ENCODED,
  linkedin: 'https://www.linkedin.com/in/jhon-rios-galindez/',
  github: 'https://github.com/jhonriosgalindez',
  portfolio: 'https://jhonriosportfolio.vercel.app/',
  bio_es:
    'Desarrollador de Software y Desarrollador Web Full Stack con más de 5 años de trayectoria en el diseño, desarrollo y despliegue de aplicaciones web de alto rendimiento y arquitecturas escalables. Poseo un sólido dominio técnico en tecnologías Frontend y Backend, incluyendo React.js, Next.js, Node.js, PHP, PostgreSQL, MySQL y ecosistemas como WordPress, garantizando siempre optimización de velocidad (+40%), código limpio y experiencias de usuario excepcionales. De manera complementaria y secundaria, cuento con formación como Especialista en Inteligencia Artificial, lo que me capacita para integrar modelos de Machine Learning, pipelines de datos y arquitecturas de búsqueda semántica (RAG con LLMs) en plataformas digitales cuando el producto lo requiere, manteniendo la ingeniería de software y el desarrollo web en el centro de mi propuesta de valor.',
  bio_en:
    'Software Developer and Full Stack Web Developer with 5+ years of experience engineering high-performance web applications, scalable architectures, and clean digital solutions. Proficient in Frontend and Backend technologies including React.js, Next.js, Node.js, PHP, PostgreSQL, MySQL, and WordPress, with a rigorous commitment to speed optimization (+40%), maintainability, and UX. As a complementary and secondary specialization, I hold expertise in Artificial Intelligence, enabling seamless integration of Machine Learning pipelines and RAG/LLM semantic architectures into web systems while keeping software and web engineering at the core.',
};

export const skills = [
  // Frontend
  {
    id: 'skill-react',
    name: 'React.js',
    category: 'frontend',
    level: 'Avanzado',
    proficiency: 95,
    tag: 'Core UI',
  },
  {
    id: 'skill-nextjs',
    name: 'Next.js',
    category: 'frontend',
    level: 'Intermedio',
    proficiency: 85,
    tag: 'SSR & Jamstack',
  },
  {
    id: 'skill-javascript',
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 'Avanzado',
    proficiency: 95,
    tag: 'Language',
  },
  {
    id: 'skill-typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 'Intermedio',
    proficiency: 85,
    tag: 'Type Safety',
  },
  {
    id: 'skill-html-css',
    name: 'HTML5 & CSS3',
    category: 'frontend',
    level: 'Avanzado',
    proficiency: 95,
    tag: 'Markup & Styling',
  },
  {
    id: 'skill-tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Avanzado',
    proficiency: 90,
    tag: 'Utility-First',
  },
  {
    id: 'skill-dom',
    name: 'Manipulación del DOM',
    category: 'frontend',
    level: 'Avanzado',
    proficiency: 95,
    tag: 'Certified Skill',
  },
  {
    id: 'skill-ui-ux',
    name: 'Diseño UI/UX & Responsive',
    category: 'frontend',
    level: 'Avanzado',
    proficiency: 90,
    tag: 'Design Systems',
  },
  {
    id: 'skill-web-perf',
    name: 'Optimización Web (+40% Speed)',
    category: 'frontend',
    level: 'Avanzado',
    proficiency: 95,
    tag: 'Core Web Vitals',
  },

  // Backend
  {
    id: 'skill-nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 'Avanzado',
    proficiency: 90,
    tag: 'Runtime & APIs',
  },
  {
    id: 'skill-php',
    name: 'PHP',
    category: 'backend',
    level: 'Avanzado',
    proficiency: 90,
    tag: 'Backend & Server',
  },
  {
    id: 'skill-rest-apis',
    name: 'RESTful APIs',
    category: 'backend',
    level: 'Avanzado',
    proficiency: 95,
    tag: 'Integration',
  },
  {
    id: 'skill-wordpress-core',
    name: 'WordPress Core & Plugins',
    category: 'backend',
    level: 'Avanzado',
    proficiency: 95,
    tag: 'CMS Architecture',
  },
  {
    id: 'skill-software-arch',
    name: 'Arquitectura de Software',
    category: 'backend',
    level: 'Avanzado',
    proficiency: 90,
    tag: 'Clean Design',
  },
  {
    id: 'skill-qa-rca',
    name: 'Pruebas QA & Root Cause Analysis',
    category: 'backend',
    level: 'Avanzado',
    proficiency: 90,
    tag: 'Reliability',
  },
  {
    id: 'skill-workflow-auto',
    name: 'Automatización de Workflows',
    category: 'backend',
    level: 'Intermedio',
    proficiency: 85,
    tag: 'Operations',
  },

  // AI & Machine Learning
  {
    id: 'skill-python',
    name: 'Python',
    category: 'ai',
    level: 'Avanzado',
    proficiency: 95,
    tag: 'AI Language',
  },
  {
    id: 'skill-rag',
    name: 'Arquitecturas RAG & LLMs',
    category: 'ai',
    level: 'Avanzado',
    proficiency: 90,
    tag: 'Generative AI',
  },
  {
    id: 'skill-semantic-search',
    name: 'Búsqueda Semántica & Embeddings',
    category: 'ai',
    level: 'Avanzado',
    proficiency: 90,
    tag: 'Vector Search',
  },
  {
    id: 'skill-ml',
    name: 'Machine Learning Supervisado',
    category: 'ai',
    level: 'Intermedio',
    proficiency: 85,
    tag: 'Predictive Models',
  },
  {
    id: 'skill-scikit',
    name: 'Scikit-learn',
    category: 'ai',
    level: 'Intermedio',
    proficiency: 85,
    tag: 'ML Library',
  },
  {
    id: 'skill-tensorflow',
    name: 'TensorFlow',
    category: 'ai',
    level: 'Intermedio',
    proficiency: 80,
    tag: 'Deep Learning',
  },
  {
    id: 'skill-pandas',
    name: 'Pandas & Análisis de Datos',
    category: 'ai',
    level: 'Avanzado',
    proficiency: 90,
    tag: 'Data Science',
  },
  {
    id: 'skill-mlops',
    name: 'MLOps & Data Pipelines',
    category: 'ai',
    level: 'Intermedio',
    proficiency: 85,
    tag: 'Model Lifecycle',
  },

  // Database
  {
    id: 'skill-postgresql',
    name: 'PostgreSQL',
    category: 'database',
    level: 'Avanzado',
    proficiency: 92,
    tag: 'Relational DB',
  },
  {
    id: 'skill-mysql',
    name: 'MySQL',
    category: 'database',
    level: 'Avanzado',
    proficiency: 92,
    tag: 'Query Optimization',
  },
  {
    id: 'skill-sql-modeling',
    name: 'Modelado Relacional & SQL',
    category: 'database',
    level: 'Avanzado',
    proficiency: 95,
    tag: 'Schema Design',
  },
  {
    id: 'skill-pgvector',
    name: 'pgvector & Bases Vectoriales',
    category: 'database',
    level: 'Avanzado',
    proficiency: 88,
    tag: 'Vector Storage',
  },
  {
    id: 'skill-gcp',
    name: 'Google Cloud Platform (GCP)',
    category: 'database',
    level: 'Intermedio',
    proficiency: 85,
    tag: 'Certified Cloud',
  },
  {
    id: 'skill-data-pipelines',
    name: 'Pipelines & ETL de Datos',
    category: 'database',
    level: 'Intermedio',
    proficiency: 85,
    tag: 'Data Engineering',
  },
];

export const projects = [
  {
    id: 'tesla-landing',
    title: 'Tesla: Landing Page Moderna & Microinteracciones',
    title_en: 'Tesla Modern Landing Page & Microinteractions',
    description:
      'Recreación de alta fidelidad de la landing page de Tesla con scroll-snap de pantalla completa, video hero en bucle optimizado y cálculo dinámico de coordenadas para el backdrop del menú.',
    categories: ['frontend'],
    techStack: ['Astro', 'Tailwind CSS', 'JavaScript (ES6+)', 'Intersection Observer', 'WebM', 'AVIF'],
    impact: 'Navegación reactiva con detección automática de contraste de header y experiencia fluida a 60fps con activos AVIF de última generación.',
    liveUrl: 'https://jhonrios-tesla-landing.netlify.app/',
    githubUrl: 'https://github.com/jhonriosgalindez/tesla-landing',
  },
  {
    id: 'horizone-blog',
    title: 'Horizone: Plataforma Editorial de Viajes & Estilo de Vida',
    title_en: 'Horizone - Travel & Lifestyle Editorial Platform',
    description:
      'Plataforma web editorial autogestionada para blogs de viajes y estilo de vida, con panel privado de administración y dashboard de autor para creación y publicación de artículos en Markdown.',
    categories: ['frontend', 'backend', 'database'],
    techStack: ['React 19', 'TypeScript', 'Node.js / Express', 'Firebase', 'Tailwind CSS', 'Motion', 'React Markdown', 'Vite'],
    impact: 'Gestión de contenidos en tiempo real con persistencia en la nube, autenticación segura y renderizado dinámico de artículos con transiciones fluidas.',
    liveUrl: 'https://blog-indol-six-37.vercel.app/',
    githubUrl: 'https://github.com/jhonriosgalindez/blog',
  },
  {
    id: 'dentalcare-platform',
    title: 'DentalCare: Plataforma Clínica & Gestión de Citas Online',
    title_en: 'DentalCare - Clinical Platform & Online Booking',
    description:
      'Plataforma web full-stack para clínica odontológica con agendamiento de citas médicas en tiempo real, catálogo de especialistas, panel administrativo para doctores e integración de asistente inteligente con IA de Google Gemini.',
    categories: ['frontend', 'backend', 'ai', 'database'],
    techStack: ['React 19', 'TypeScript', 'Node.js / Express', 'Firebase', 'Google Gemini AI', 'Tailwind CSS', 'Motion', 'Vite'],
    impact: 'Automatización del flujo de citas médicas, triaje de pacientes asistido por IA generativa y panel de control administrativo protegido con autenticación.',
    liveUrl: 'https://dental-nine-tau.vercel.app/',
    githubUrl: 'https://github.com/jhonriosgalindez/dental',
  },
  {
    id: 'credit-simulator',
    title: 'Simulador de Crédito FinTech & Motor de Amortización',
    title_en: 'FinTech Credit Simulator & Amortization Engine',
    description:
      'Simulador financiero de crédito interactivo con múltiples líneas de financiamiento (libre inversión, vivienda), cálculo de cuotas y tablas de amortización en tiempo real, gráficos financieros dinámicos y exportación a PDF.',
    categories: ['frontend', 'backend', 'ai'],
    techStack: ['React 19', 'TypeScript', 'Recharts', 'jsPDF', 'Google Gemini AI', 'Tailwind CSS', 'Motion', 'Vite'],
    impact: 'Cálculo actuarial instantáneo, visualización interactiva de amortización capital vs. intereses, reportes descargables en PDF y asesor financiero con IA.',
    liveUrl: 'https://credit-simulator-plum.vercel.app/',
    githubUrl: 'https://github.com/jhonriosgalindez/credit-simulator',
  },
  {
    id: 'keras-mnist',
    title: 'Clasificador de Dígitos MNIST con Redes Neuronales & Keras',
    title_en: 'MNIST Handwritten Digit Classifier with Keras & Deep Learning',
    description:
      'Modelo de Deep Learning y visión por computadora entrenado sobre el dataset MNIST para reconocimiento y clasificación de dígitos manuscritos, con preprocesamiento de imágenes, capas convolucionales y análisis de curvas de convergencia.',
    categories: ['ai'],
    techStack: ['Python', 'Keras', 'TensorFlow', 'Deep Learning', 'NumPy', 'Matplotlib'],
    impact: 'Entrenamiento y evaluación de redes neuronales con precisión superior al 98% en validación, matrices de confusión y optimización de hiperparámetros.',
    liveUrl: null,
    githubUrl: 'https://github.com/jhonriosgalindez/keras-mnist',
  },
  {
    id: 'data-analysis',
    title: 'Pipelines de Análisis Exploratorio de Datos & Modelado Estadístico',
    title_en: 'Exploratory Data Analysis & Statistical Modeling Pipelines',
    description:
      'Entorno integral de análisis exploratorio de datos (EDA) y procesamiento estructurado con Python para limpieza, transformación (ETL), detección de anomalías, correlaciones estadísticas y visualizaciones analíticas avanzadas.',
    categories: ['ai', 'database'],
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Scikit-Learn'],
    impact: 'Automatización de pipelines analíticos, extracción de correlaciones clave y generación de reportes cuantitativos para toma de decisiones basada en datos.',
    liveUrl: null,
    githubUrl: 'https://github.com/jhonriosgalindez/data-analysis',
  },
];

export const contactChannels = {
  get email() {
    return getDecodedEmail();
  },
  email_obfuscated: EMAIL_ENCODED,
  linkedin: 'https://www.linkedin.com/in/jhon-rios-galindez/',
  github: 'https://github.com/jhonriosgalindez',
  portfolio: 'https://jhonriosportfolio.vercel.app/',
  location: 'Colombia',
  availability: 'Disponible para nuevos proyectos e innovación técnica',
};

export const categoryLabels = {
  all: 'Todos',
  frontend: 'Frontend',
  backend: 'Backend',
  ai: 'IA & Machine Learning',
  database: 'Bases de Datos',
};
