// Catálogo de servicios de FlujoDigital

export interface ServicioPrincipal {
  icon: string;
  titulo: string;
  descripcion: string;
  features: string[];
  precio_desde?: number;
  modalidad: "pago_unico" | "suscripcion";
}

export const SERVICIOS_PRINCIPALES: ServicioPrincipal[] = [
  {
    icon: "🌐",
    titulo: "Páginas Web",
    descripcion: "Diseños modernos y profesionales. 100% responsivas, optimizadas para SEO, rápidas y seguras.",
    features: ["Diseño moderno", "100% responsivo", "SEO optimizado", "Rápido y seguro"],
    precio_desde: 400,
    modalidad: "pago_unico",
  },
  {
    icon: "📱",
    titulo: "Aplicaciones Móviles",
    descripcion: "Apps nativas para Android e iOS. Rendimiento premium, diseño intuitivo, escalables y seguras.",
    features: ["Android e iOS", "Rendimiento premium", "Diseño intuitivo", "Escalable"],
    precio_desde: 800,
    modalidad: "pago_unico",
  },
  {
    icon: "🤖",
    titulo: "Bot de WhatsApp con IA",
    descripcion: "Atiende 24/7, responde al instante, genera y convierte ventas. Pasarela de pagos segura incluida.",
    features: ["24/7", "Respuesta instantánea", "Pasarela de pagos", "Reportes y estadísticas"],
    precio_desde: 150,
    modalidad: "suscripcion",
  },
  {
    icon: "⚙️",
    titulo: "Automatización con IA",
    descripcion: "Automatización de procesos repetitivos. Integración con tus herramientas. Flujos inteligentes a medida.",
    features: ["Procesos repetitivos", "Integración total", "Ahorro de tiempo", "Flujos a medida"],
    precio_desde: 150,
    modalidad: "suscripcion",
  },
  {
    icon: "🧠",
    titulo: "RAG Privado",
    descripcion: "Tu propio ChatGPT sin internet. Lee tus documentos privados y responde al instante. Tus datos jamás salen de tu oficina.",
    features: ["Sin internet", "100% privado", "Búsqueda instantánea", "Cita documentos exactos"],
    precio_desde: 200,
    modalidad: "suscripcion",
  },
  {
    icon: "📊",
    titulo: "Dashboards IA",
    descripcion: "Visualiza ventas, gastos y métricas en tiempo real. Alertas inteligentes para tomar decisiones.",
    features: ["Tiempo real", "Alertas inteligentes", "Métricas visuales", "Reportes automáticos"],
    precio_desde: 200,
    modalidad: "suscripcion",
  },
];

export interface TipoSitio {
  id: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio_desde: number;
  dias_estimados: number;
}

export const TIPOS_SITIOS: TipoSitio[] = [
  // Básico
  { id: "landing", nombre: "Landing Page", categoria: "Básico", descripcion: "1 página con enfoque en conversión. Perfecta para campañas de ads.", precio_desde: 150, dias_estimados: 2 },
  { id: "one-page-premium", nombre: "Sitio One Page Premium", categoria: "Básico", descripcion: "1 página con secciones: hero, servicios, testimonios, contacto, FAQ.", precio_desde: 250, dias_estimados: 3 },
  { id: "sitio-personal", nombre: "Sitio Web Personal", categoria: "Básico", descripcion: "Tu marca personal: bio, blog, portafolio, contacto.", precio_desde: 200, dias_estimados: 3 },
  { id: "portafolio", nombre: "Portafolio Profesional", categoria: "Básico", descripcion: "Muestra tu trabajo con galería, casos de estudio y formulario.", precio_desde: 200, dias_estimados: 3 },
  { id: "blog", nombre: "Blog Profesional", categoria: "Básico", descripcion: "Blog con CMS, categorías, SEO y newsletter integrado.", precio_desde: 300, dias_estimados: 4 },

  // Nicho
  { id: "restaurante", nombre: "Página para Restaurante", categoria: "Nicho", descripcion: "Menú digital, reservas online, galería de platos, ubicación.", precio_desde: 400, dias_estimados: 4 },
  { id: "hotel", nombre: "Página para Hotel", categoria: "Nicho", descripcion: "Reservas, galería de habitaciones, integración con Booking.", precio_desde: 500, dias_estimados: 5 },
  { id: "clinica", nombre: "Página para Clínica", categoria: "Nicho", descripcion: "Citas médicas online, servicios, doctores, resultados.", precio_desde: 500, dias_estimados: 5 },
  { id: "abogado", nombre: "Página para Abogado", categoria: "Nicho", descripcion: "Áreas de práctica, casos resueltos, consultas, testimonios.", precio_desde: 400, dias_estimados: 4 },
  { id: "directorio-inmobiliario", nombre: "Directorio Inmobiliario", categoria: "Nicho", descripcion: "Listado de propiedades, filtros, mapa, contacto directo.", precio_desde: 600, dias_estimados: 6 },
  { id: "constructora", nombre: "Página para Constructora", categoria: "Nicho", descripcion: "Proyectos, catálogo, especificaciones, formulario de cotización.", precio_desde: 500, dias_estimados: 5 },
  { id: "colegio", nombre: "Página para Colegio", categoria: "Nicho", descripcion: "Información académica, admisiones, eventos, portal de padres.", precio_desde: 600, dias_estimados: 6 },
  { id: "universidad", nombre: "Página para Universidad", categoria: "Nicho", descripcion: "Programas, admisiones, campus virtual, investigación.", precio_desde: 800, dias_estimados: 7 },

  // Corporativo
  { id: "corporativo-basico", nombre: "Sitio Corporativo Básico", categoria: "Corporativo", descripcion: "Inicio, servicios, sobre nosotros, contacto. 4-6 páginas.", precio_desde: 400, dias_estimados: 4 },
  { id: "corporativo-premium", nombre: "Sitio Corporativo Premium", categoria: "Corporativo", descripcion: "Corporativo completo con blog, casos, equipo, i18n, multi-idioma.", precio_desde: 700, dias_estimados: 7 },
  { id: "directorio-empresarial", nombre: "Directorio Empresarial", categoria: "Corporativo", descripcion: "Listado de empresas, categorías, búsqueda, perfiles.", precio_desde: 600, dias_estimados: 6 },

  // Contenido
  { id: "portal-noticias", nombre: "Portal de Noticias", categoria: "Contenido", descripcion: "CMS de noticias, categorías, autor, comentarios, SEO premium.", precio_desde: 600, dias_estimados: 6 },
  { id: "revista-digital", nombre: "Revista Digital", categoria: "Contenido", descripcion: "Publicaciones, ediciones, suscripciones, paywall opcional.", precio_desde: 700, dias_estimados: 7 },
  { id: "foro", nombre: "Foro o Comunidad", categoria: "Contenido", descripcion: "Foro con hilos, votos, moderación, perfiles de usuario.", precio_desde: 800, dias_estimados: 8 },

  // Plataforma
  { id: "lms", nombre: "Plataforma Educativa (LMS)", categoria: "Plataforma", descripcion: "Cursos, videos, exámenes, certificados, pagos, progreso.", precio_desde: 1000, dias_estimados: 10 },
  { id: "reservas", nombre: "Plataforma de Reservas", categoria: "Plataforma", descripcion: "Calendario, disponibilidad, pagos, confirmaciones, recordatorios.", precio_desde: 800, dias_estimados: 8 },
  { id: "citas-medicas", nombre: "Plataforma de Citas Médicas", categoria: "Plataforma", descripcion: "Agenda, doctores, especialidades, recordatorios WhatsApp.", precio_desde: 900, dias_estimados: 9 },

  // E-commerce
  { id: "tienda-basica", nombre: "Tienda Virtual Básica", categoria: "E-commerce", descripcion: "Catálogo, carrito, pasarela de pagos, hasta 50 productos.", precio_desde: 500, dias_estimados: 5 },
  { id: "tienda-pro", nombre: "Tienda Virtual Profesional", categoria: "E-commerce", descripcion: "Inventario, variantes, cupones, pasarelas múltiples, SEO.", precio_desde: 800, dias_estimados: 7 },
  { id: "tienda-multi", nombre: "Tienda Multi-vendedor", categoria: "E-commerce", descripcion: "Marketplace con vendedores independientes, comisiones, payouts.", precio_desde: 1200, dias_estimados: 10 },
  { id: "marketplace-ml", nombre: "Marketplace Tipo Mercado Libre", categoria: "E-commerce", descripcion: "Marketplace completo: busqueda, filtros, reseñas, mensajería, escrow.", precio_desde: 2000, dias_estimados: 15 },

  // Sistemas
  { id: "crm", nombre: "CRM Empresarial", categoria: "Sistemas", descripcion: "Pipeline de ventas, clientes, seguimiento, reportes, automatización.", precio_desde: 1000, dias_estimados: 10 },
  { id: "erp", nombre: "ERP Empresarial", categoria: "Sistemas", descripcion: "Inventario, facturación, RRHH, contabilidad, reportes.", precio_desde: 1500, dias_estimados: 12 },
  { id: "red-social", nombre: "Red Social Privada", categoria: "Sistemas", descripcion: "Perfiles, posts, comentarios, chat, grupos, moderación.", precio_desde: 1500, dias_estimados: 12 },
  { id: "saas", nombre: "Plataforma SaaS", categoria: "Sistemas", descripcion: "Multi-tenant, suscripciones, API, dashboard, billing.", precio_desde: 2000, dias_estimados: 15 },
];

export const CATEGORIAS = ["Básico", "Nicho", "Corporativo", "Contenido", "Plataforma", "E-commerce", "Sistemas"];

export const CARACTERISTICAS_TRANSVERSALES = [
  "Diseño profesional y responsivo",
  "SEO optimizado",
  "Integraciones y automatizaciones",
  "Soporte y mantenimiento",
  "Escalable y seguro",
  "Pagos online y pasarelas",
  "Listo para posicionarte",
];