// Catálogo de servicios de FlujoDigital

export interface ServicioPrincipal {
  icon: string;
  titulo: string;
  descripcion: string;
  features: string[];
  precio_desde?: number;
  modalidad: "pago_unico" | "suscripcion";
  slug: string;
}

export const SERVICIOS_PRINCIPALES: ServicioPrincipal[] = [
  {
    icon: "🌐",
    titulo: "Páginas Web",
    descripcion: "Diseños modernos y profesionales. 100% responsivas, optimizadas para SEO, rápidas y seguras.",
    features: ["Diseño moderno", "100% responsivo", "SEO optimizado", "Rápido y seguro"],
    precio_desde: 400,
    modalidad: "pago_unico",
    slug: "paginas-web",
  },
  {
    icon: "📱",
    titulo: "Aplicaciones Móviles",
    descripcion: "Apps nativas para Android e iOS. Rendimiento premium, diseño intuitivo, escalables y seguras.",
    features: ["Android e iOS", "Rendimiento premium", "Diseño intuitivo", "Escalable"],
    precio_desde: 800,
    modalidad: "pago_unico",
    slug: "apps-moviles",
  },
  {
    icon: "🤖",
    titulo: "Bot de WhatsApp con IA",
    descripcion: "Atiende 24/7, responde al instante, genera y convierte ventas. Pasarela de pagos segura incluida.",
    features: ["24/7", "Respuesta instantánea", "Pasarela de pagos", "Reportes y estadísticas"],
    precio_desde: 150,
    modalidad: "suscripcion",
    slug: "bot-whatsapp",
  },
  {
    icon: "⚙️",
    titulo: "Automatización con IA",
    descripcion: "Automatización de procesos repetitivos. Integración con tus herramientas. Flujos inteligentes a medida.",
    features: ["Procesos repetitivos", "Integración total", "Ahorro de tiempo", "Flujos a medida"],
    precio_desde: 150,
    modalidad: "suscripcion",
    slug: "automatizacion",
  },
  {
    icon: "🧠",
    titulo: "RAG Privado",
    descripcion: "Tu propio ChatGPT sin internet. Lee tus documentos privados y responde al instante. Tus datos jamás salen de tu oficina.",
    features: ["Sin internet", "100% privado", "Búsqueda instantánea", "Cita documentos exactos"],
    precio_desde: 200,
    modalidad: "suscripcion",
    slug: "rag-privado",
  },
  {
    icon: "📊",
    titulo: "Dashboards IA",
    descripcion: "Visualiza ventas, gastos y métricas en tiempo real. Alertas inteligentes para tomar decisiones.",
    features: ["Tiempo real", "Alertas inteligentes", "Métricas visuales", "Reportes automáticos"],
    precio_desde: 200,
    modalidad: "suscripcion",
    slug: "dashboards",
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
  { id: "landing", nombre: "Landing Page", categoria: "Básico", descripcion: "1 página con enfoque en conversión. Perfecta para campañas de ads.", precio_desde: 150, dias_estimados: 2 },
  { id: "one-page-premium", nombre: "Sitio One Page Premium", categoria: "Básico", descripcion: "1 página con secciones: hero, servicios, testimonios, contacto, FAQ.", precio_desde: 250, dias_estimados: 3 },
  { id: "sitio-personal", nombre: "Sitio Web Personal", categoria: "Básico", descripcion: "Tu marca personal: bio, blog, portafolio, contacto.", precio_desde: 200, dias_estimados: 3 },
  { id: "portafolio", nombre: "Portafolio Profesional", categoria: "Básico", descripcion: "Muestra tu trabajo con galería, casos de estudio y formulario.", precio_desde: 200, dias_estimados: 3 },
  { id: "blog", nombre: "Blog Profesional", categoria: "Básico", descripcion: "Blog con CMS, categorías, SEO y newsletter integrado.", precio_desde: 300, dias_estimados: 4 },
  { id: "restaurante", nombre: "Página para Restaurante", categoria: "Nicho", descripcion: "Menú digital, reservas online, galería de platos, ubicación.", precio_desde: 400, dias_estimados: 4 },
  { id: "hotel", nombre: "Página para Hotel", categoria: "Nicho", descripcion: "Reservas, galería de habitaciones, integración con Booking.", precio_desde: 500, dias_estimados: 5 },
  { id: "clinica", nombre: "Página para Clínica", categoria: "Nicho", descripcion: "Citas médicas online, servicios, doctores, resultados.", precio_desde: 500, dias_estimados: 5 },
  { id: "abogado", nombre: "Página para Abogado", categoria: "Nicho", descripcion: "Áreas de práctica, casos resueltos, consultas, testimonios.", precio_desde: 400, dias_estimados: 4 },
  { id: "directorio-inmobiliario", nombre: "Directorio Inmobiliario", categoria: "Nicho", descripcion: "Listado de propiedades, filtros, mapa, contacto directo.", precio_desde: 600, dias_estimados: 6 },
  { id: "constructora", nombre: "Página para Constructora", categoria: "Nicho", descripcion: "Proyectos, catálogo, especificaciones, formulario de cotización.", precio_desde: 500, dias_estimados: 5 },
  { id: "colegio", nombre: "Página para Colegio", categoria: "Nicho", descripcion: "Información académica, admisiones, eventos, portal de padres.", precio_desde: 600, dias_estimados: 6 },
  { id: "universidad", nombre: "Página para Universidad", categoria: "Nicho", descripcion: "Programas, admisiones, campus virtual, investigación.", precio_desde: 800, dias_estimados: 7 },
  { id: "corporativo-basico", nombre: "Sitio Corporativo Básico", categoria: "Corporativo", descripcion: "Inicio, servicios, sobre nosotros, contacto. 4-6 páginas.", precio_desde: 400, dias_estimados: 4 },
  { id: "corporativo-premium", nombre: "Sitio Corporativo Premium", categoria: "Corporativo", descripcion: "Corporativo completo con blog, casos, equipo, i18n, multi-idioma.", precio_desde: 700, dias_estimados: 7 },
  { id: "directorio-empresarial", nombre: "Directorio Empresarial", categoria: "Corporativo", descripcion: "Listado de empresas, categorías, búsqueda, perfiles.", precio_desde: 600, dias_estimados: 6 },
  { id: "portal-noticias", nombre: "Portal de Noticias", categoria: "Contenido", descripcion: "CMS de noticias, categorías, autor, comentarios, SEO premium.", precio_desde: 600, dias_estimados: 6 },
  { id: "revista-digital", nombre: "Revista Digital", categoria: "Contenido", descripcion: "Publicaciones, ediciones, suscripciones, paywall opcional.", precio_desde: 700, dias_estimados: 7 },
  { id: "foro", nombre: "Foro o Comunidad", categoria: "Contenido", descripcion: "Foro con hilos, votos, moderación, perfiles de usuario.", precio_desde: 800, dias_estimados: 8 },
  { id: "lms", nombre: "Plataforma Educativa (LMS)", categoria: "Plataforma", descripcion: "Cursos, videos, exámenes, certificados, pagos, progreso.", precio_desde: 1000, dias_estimados: 10 },
  { id: "reservas", nombre: "Plataforma de Reservas", categoria: "Plataforma", descripcion: "Calendario, disponibilidad, pagos, confirmaciones, recordatorios.", precio_desde: 800, dias_estimados: 8 },
  { id: "citas-medicas", nombre: "Plataforma de Citas Médicas", categoria: "Plataforma", descripcion: "Agenda, doctores, especialidades, recordatorios WhatsApp.", precio_desde: 900, dias_estimados: 9 },
  { id: "tienda-basica", nombre: "Tienda Virtual Básica", categoria: "E-commerce", descripcion: "Catálogo, carrito, pasarela de pagos, hasta 50 productos.", precio_desde: 500, dias_estimados: 5 },
  { id: "tienda-pro", nombre: "Tienda Virtual Profesional", categoria: "E-commerce", descripcion: "Inventario, variantes, cupones, pasarelas múltiples, SEO.", precio_desde: 800, dias_estimados: 7 },
  { id: "tienda-multi", nombre: "Tienda Multi-vendedor", categoria: "E-commerce", descripcion: "Marketplace con vendedores independientes, comisiones, payouts.", precio_desde: 1200, dias_estimados: 10 },
  { id: "marketplace-ml", nombre: "Marketplace Tipo Mercado Libre", categoria: "E-commerce", descripcion: "Marketplace completo: búsqueda, filtros, reseñas, mensajería, escrow.", precio_desde: 2000, dias_estimados: 15 },
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

// =============================================================================
// CÓMO TRABAJAMOS
// =============================================================================
export const PASOS_TRABAJO = [
  { num: "1️⃣", titulo: "Charlamos (10 min)", descripcion: "Nos cuentas tu negocio y tus dolores. Sin tecnicismos. Te escuchamos." },
  { num: "2️⃣", titulo: "Diseñamos", descripcion: "Te entregamos propuesta clara: qué, cuánto, cuándo. Sin sorpresas." },
  { num: "3️⃣", titulo: "Construimos", descripcion: "Desarrollamos rápido. Te mostramos avances. Tú apruebas." },
  { num: "4️⃣", titulo: "Crecemos", descripcion: "Medimos resultados, optimizamos. Tu éxito mantiene esto andando." },
];

// =============================================================================
// NICHOS DE VENTA
// =============================================================================
export interface Nicho {
  icon: string;
  titulo: string;
  target: string;
  dolor: string;
  solucion: string;
  pitch: string;
  roi: string;
}

export const NICHOS: Nicho[] = [
  {
    icon: "⚖️",
    titulo: "Abogados y Bufetes",
    target: "Bufetes de 2-10 abogados. Manejan expedientes, códigos, jurisprudencia.",
    dolor: "Pierden horas buscando jurisprudencia, releyendo expedientes de 200 páginas. Un asistente jurídico cuesta $500 USD/mes.",
    solucion: "RAG Privado: una IA que lee TODOS los expedientes, códigos (CGP, Penal, Civil, Laboral) y jurisprudencia. El abogado pregunta y la IA responde en segundos, citando el documento exacto.",
    pitch: "Doctor, ¿cuánto tiempo pierde buscando jurisprudencia o releyendo expedientes? Con nuestro sistema, usted le hace una pregunta a la IA y le responde en segundos. Es como tener un asistente jurídico que nunca duerme y que se sabe TODOS sus casos de memoria.",
    roi: "Asistente jurídico: $500 USD/mes → RAG Pro: $350 USD/mes. Ahorro $150/mes + 15-20 horas/semana recuperadas. ROI: 757%.",
  },
  {
    icon: "🏥",
    titulo: "Médicos y Clínicas",
    target: "Clínicas pequeñas (2-5 médicos), especialistas, centros de salud.",
    dolor: "Los médicos pasan más tiempo llenando historias clínicas que atendiendo pacientes. Consultar guías del Ministerio toma tiempo. Un administrativo cuesta $600 USD/mes.",
    solucion: "RAG Privado con todas las RIAS, guías clínicas e historias clínicas digitalizadas. + ChatBot WhatsApp para agendar citas automáticamente 24/7.",
    pitch: "Doctor/a, ¿cuánto tiempo pierde consultando guías del Ministerio? Con nuestro sistema, la IA conoce TODAS las guías clínicas y responde en segundos. Y un bot de WhatsApp agenda las citas 24/7 sin que nadie conteste el teléfono.",
    roi: "Recepcionista: $600 USD/mes → ChatBot + RAG: $350 USD/mes. Ahorro $250/mes + 10 horas/semana recuperadas. ROI: 328%.",
  },
  {
    icon: "🛍️",
    titulo: "Tiendas y Comercio",
    target: "Tiendas de ropa, boutiques, almacenes que venden por WhatsApp e Instagram.",
    dolor: "50 veces al día preguntan '¿tienen esto en talla M?' por WhatsApp. Los clientes se cansan de esperar y compran en otro lado. Pierden ventas fuera de horario.",
    solucion: "ChatBot IA 24/7 que responde consultas de inventario, tallas, precios, horarios. Toma el pedido y notifica al dueño. + Dashboard de ventas en tiempo real.",
    pitch: "¿Qué pasa cuando un cliente escribe a las 11 PM? Si no responden en 5 minutos, se van a otra tienda. Con nuestro ChatBot: responde al instante, consulta el inventario real, toma el pedido. Vende a media noche, en Semana Santa. Nunca duerme.",
    roi: "Vendedor adicional: $380 USD/mes → ChatBot: $150 USD/mes. Ahorro $230/mes + ventas nocturnas recuperadas. ROI: 3,100%.",
  },
  {
    icon: "🏗️",
    titulo: "Constructoras e Inmobiliarias",
    target: "Constructoras pequeñas-medianas, inmobiliarias, arquitectos con proyectos.",
    dolor: "Manejan cientos de documentos: planos, especificaciones, normas NSR-10, presupuestos. Buscar una especificación toma horas. Presupuestos se descontrolan.",
    solucion: "RAG Privado + Dashboard: IA que carga todos los planos, especificaciones, normas NSR-10 y presupuestos. + Dashboard con alertas cuando el presupuesto se descontrola.",
    pitch: "Don [Nombre], en una obra cada minuto cuenta. Cuando un maestro le pregunta algo, usted necesita la respuesta YA. Con nuestro sistema: le pregunta a la IA y le responde en segundos con la norma, el plano o el presupuesto exacto.",
    roi: "Residente adicional: $880 USD/mes → RAG + Dashboard: $500 USD/mes. Ahorro $380/mes + un error de especificación evitado = $2,000-$10,000 USD. ROI: 1,000%+.",
  },
  {
    icon: "🧾",
    titulo: "Contadores y Despachos",
    target: "Contadores públicos, firmas de auditoría, despachos contables con múltiples clientes.",
    dolor: "La normatividad tributaria cambia constantemente. Buscar la norma aplicable toma tiempo. Los clientes preguntan lo mismo 20 veces. Errores generan sanciones.",
    solucion: "RAG Privado con toda la normatividad DIAN, estatuto tributario y archivos de cada cliente. + ChatBot WhatsApp que atiende a los clientes automáticamente.",
    pitch: "Don [Nombre], ¿cuánto tiempo pierde buscando normatividad DIAN o respondiendo a clientes? Con nuestro sistema: usted le pregunta a la IA sobre cualquier norma y le responde en segundos. Y sus clientes reciben respuestas automáticas por WhatsApp 24/7.",
    roi: "Asistente contable: $380 USD/mes → RAG + ChatBot: $350 USD/mes. Ahorro $30/mes + 15 horas/semana recuperadas + evita sanciones DIAN. ROI: 500%+.",
  },
  {
    icon: "✈️",
    titulo: "Agencias de Viajes",
    target: "Agencias de viajes locales, operadores turísticos, hoteles pequeños.",
    dolor: "Los clientes preguntan por WhatsApp a toda hora: '¿cuánto cuesta un paquete a Cartagena?'. Una agencia pequeña no puede responder 24/7. Los tours se pierden.",
    solucion: "ChatBot IA 24/7 que describe tours, muestra precios, recomienda paquetes según presupuesto, agenda reservas y procesa pagos. + Recordatorios automáticos de viajes.",
    pitch: "¿Qué pasa cuando un cliente escribe a las 11 PM preguntando por un paquete? Si no responden, se van a Booking. Con nuestro ChatBot: describe los tours, toma la reserva y procesa el pago. Vende a media noche, en Navidad. Nunca duerme.",
    roi: "Agente adicional: $380 USD/mes → ChatBot: $150 USD/mes. Ahorro $230/mes + 8 reservas/semana extra a $50 USD = $1,600 USD/mes. ROI: 1,100%.",
  },
];

// =============================================================================
// COMPARACIÓN VS COMPETENCIA
// =============================================================================
export const COMPARACION = [
  { feature: "RAG Privado local", flujo: "✅ Sí", agencia: "❌ Raro", diy: "❌ Muy difícil" },
  { feature: "Datos 100% privados", flujo: "✅ Sin internet", agencia: "❌ Usan nube", diy: "❌ Complejo" },
  { feature: "ChatBot WhatsApp", flujo: "✅ Incluido", agencia: "✅ $500+ USD", diy: "❌ Difícil" },
  { feature: "Automatización n8n", flujo: "✅ Incluido", agencia: "❌ Cobran aparte", diy: "❌ Curva de aprendizaje" },
  { feature: "Soporte local (Pereira)", flujo: "✅ Presencial", agencia: "✅ Sí", diy: "❌ N/A" },
  { feature: "Setup rápido", flujo: "✅ 3-7 días", agencia: "❌ 2-4 semanas", diy: "❌ Meses" },
  { feature: "Garantía 30 días", flujo: "✅ Sí", agencia: "❌ Raro", diy: "❌ N/A" },
];

// =============================================================================
// PREGUNTAS FRECUENTES (OBJECIONES)
// =============================================================================
export const FAQS = [
  {
    q: "¿Es muy caro?",
    a: "¿Cuánto le cuesta el problema actual? Si pierde 15 horas/semana buscando documentos, a $50 USD/hora son $3,000 USD/mes. Nuestro sistema cuesta $200-$350. Es como pagar $200 para recuperar $3,000.",
  },
  {
    q: "No confío en la IA",
    a: "La IA no toma decisiones por usted. Es un buscador ultra-rápido de SUS documentos. Le muestra exactamente lo que dice el documento, con la página y la referencia. Usted decide.",
  },
  {
    q: "¿Y si dejo de pagar?",
    a: "El setup inicial queda instalado. Si deja de pagar el soporte mensual, el sistema sigue funcionando. Solo pierde actualizaciones y soporte. No es un secuestro.",
  },
  {
    q: "¿Puedo probarlo antes?",
    a: "Sí. Le hacemos una demo de 15 minutos con documentos de ejemplo. Si después no le convence, no avanzamos. Sin compromiso. La garantía de 30 días también aplica.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Por eso es RAG PRIVADO. No usa internet. No usa la nube. Todo se instala en SU computador. Sus datos jamás salen de su oficina. Es más seguro que mandar un email.",
  },
  {
    q: "¿La IA puede dar información equivocada?",
    a: "La IA no inventa. Le muestra EXACTAMENTE lo que dicen sus propios documentos y protocolos, con la referencia exacta. La decisión siempre es suya. La IA solo le encuentra la información en segundos.",
  },
  {
    q: "Mi sobrino sabe de computadores",
    a: "Excelente. Cuando su sobrino consiga un sistema que lee sus documentos, responde en segundos, funciona sin internet y se instala en 3 días, llámelo. Mientras tanto, nosotros ya lo tenemos funcionando.",
  },
];

// =============================================================================
// PORTAFOLIO
// =============================================================================
export const PROYECTOS = [
  {
    nombre: "ElectriPro (El Inge Smart Grids)",
    descripcion: "Plataforma SaaS para ingenieros eléctricos. Calculadoras técnicas NTC 2050/RETIE, dashboard solar, certificación RETIE.",
    stack: "Next.js 16 · FastAPI · PostgreSQL · Docker",
    url: "https://elingesmartgrids.cloud",
    tags: ["SaaS", "Ingeniería", "Calculadoras"],
  },
  {
    nombre: "CertiRed",
    descripcion: "SaaS para certificación RETIE, NTC 2050 y trámites eléctricos. Gestión de expedientes, generación de documentos y verificación.",
    stack: "Next.js 14 · FastAPI · PostgreSQL · Dokploy",
    url: "#",
    tags: ["SaaS", "Eléctrico", "RETIE"],
  },
  {
    nombre: "FlujoDigital",
    descripcion: "Agencia de automatización e IA. RAG Privado, ChatBots WhatsApp, automatizaciones con n8n y dashboards inteligentes.",
    stack: "Next.js 16 · Tailwind CSS 4 · Docker",
    url: "#",
    tags: ["Agencia", "IA", "Automatización"],
  },
];