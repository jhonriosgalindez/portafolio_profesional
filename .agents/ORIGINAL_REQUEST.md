# Original User Request

## 2026-09-18T15:25:55Z

Requested team: Equipo de 4 agentes: Manager (planificación, arquitectura y coordinación, sin modificar código), Desarrollador Frontend (interfaz de usuario, diseño y componentes), Desarrollador Backend (lógica funcional, APIs y datos), y QA / Tester (diseño y ejecución de pruebas automatizadas con criterio estricto de aprobación).

Desarrollar un portafolio web moderno, interactivo y de alto impacto para Jhon Fernando Rios Galindez basado en su perfil profesional (Full Stack Developer & Especialista en IA), con tema oscuro/claro, filtrado de habilidades y proyectos, formulario de contacto interactivo y suite de pruebas automatizada validada al 100% por QA.

Working directory: C:\Users\Personal\desktop\portafolio
Integrity mode: development

## Requirements

### R1. Interfaz de Usuario y Experiencia Visual (UI/UX)
Diseñar e implementar una interfaz web moderna, responsiva (mobile-first) y accesible. Debe contar con cambio dinámico de tema (Modo Claro / Modo Oscuro) con persistencia local y transiciones visuales cuidadas.

### R2. Presentación del Perfil Profesional y Proyectos
Presentar el contenido profesional extraído de su CV (trayectoria en ORBIDI y Fiverr, educación en Inteligencia Artificial, SENA e Ingeniería, habilidades técnicas y certificaciones). Debe incluir un sistema interactivo para filtrar proyectos y tecnologías por categorías (Frontend, Backend, IA & Machine Learning, Bases de Datos).

### R3. Lógica Funcional y Módulo de Contacto
Proveer un formulario de contacto funcional con validación de entradas en tiempo real (correo válido, campos requeridos, límites de caracteres) y retroalimentación visual de estado (éxito, error o carga), además de enlaces directos a sus canales de contacto oficiales (LinkedIn, GitHub, Correo).

### R4. Calidad y Suite de Pruebas Automatizadas
Implementar una suite de pruebas automatizadas (tests unitarios y de componentes) que evalúe el renderizado de secciones críticas, la interacción del switch de modo oscuro/claro, el filtrado de proyectos y la validación del formulario de contacto.

## Acceptance Criteria

### UI & Experiencia de Usuario
- [ ] La aplicación se visualiza de forma fluida y responsiva en resoluciones móviles, tablets y escritorio.
- [ ] El selector de tema Claro/Oscuro conmuta de manera inmediata y persiste la preferencia del usuario en el navegador.
- [ ] No se presentan errores en la consola del navegador al navegar e interactuar con el sitio.

### Contenido & Filtrado
- [ ] Se muestran todas las secciones clave del perfil: Acerca de mí, Experiencia laboral, Educación, Habilidades técnicas y Proyectos.
- [ ] Los filtros por categoría de proyectos y tecnologías actualizan la lista de elementos en pantalla de manera instantánea y precisa.

### Funcionalidad de Contacto
- [ ] El formulario valida campos vacíos o correos con formato inválido mostrando mensajes de error contextuales.
- [ ] Un envío con datos válidos muestra un mensaje de confirmación de éxito.

### Verificación de QA y Criterio de Aceptación
- [ ] El agente QA / Tester ejecuta la suite de pruebas automatizadas y verifica que el 100% de los tests pasen exitosamente (cero fallos permitidos para la aceptación).
- [ ] El agente Manager confirma que todos los requerimientos funcionales y de diseño fueron cubiertos antes de dar por finalizado el proyecto.
