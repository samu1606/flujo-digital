"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BotWhatsAppLanding() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Disponible 24/7/365",
      description: "Nunca pierdas una venta. Tu bot atiende domingos, festivos y madrugadas. Respuesta instantánea siempre."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "RAG Privado: Tu conocimiento",
      description: "Sube tus PDFs, manuales, precios, FAQs. El bot responde SOLO con TU información. Cero alucinaciones."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Califica leads automáticamente",
      description: "Pregunta lo que necesitas: presupuesto, urgencia, decisión. Solo te llegan leads calientes."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Dashboard en tiempo real",
      description: "Mira conversaciones, leads calificados, métricas de respuesta y satisfacción. Todo en un panel."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1" />
        </svg>
      ),
      title: "Integra con tu CRM",
      description: "Conecta con HubSpot, Pipedrive, Google Sheets, n8n, Make. Los leads caen directo a tu pipeline."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Multi-idioma + voz",
      description: "Habla español, inglés, portugués. Y con WhatsApp Business API: mensajes de voz transcritos al instante."
    }
  ];

  const plans = [
    {
      name: "Básico",
      price: 600000,
      period: "/mes",
      setup: "Sin setup",
      description: "Ideal para negocios que empiezan",
      features: [
        "Hasta 1.000 conversaciones/mes",
        "RAG: 100 documentos",
        "1 usuario dashboard",
        "Integración Webhook básica",
        "Soporte email 24h",
      ],
      cta: "Empezar ahora",
      popular: false,
    },
    {
      name: "Pro",
      price: 1000000,
      period: "/mes",
      setup: "Setup $1.500.000",
      description: "El más popular para escalar",
      features: [
        "Hasta 5.000 conversaciones/mes",
        "RAG: 2.000 documentos",
        "3 usuarios dashboard",
        "Integración CRM completa",
        "Webhooks ilimitados",
        "Soporte prioritario WhatsApp",
        "Reportes semanales automáticos",
      ],
      cta: "Elegir Pro",
      popular: true,
    },
    {
      name: "Empresarial",
      price: 2000000,
      period: "/mes",
      setup: "Setup $3.000.000",
      description: "Para equipos grandes y volumen alto",
      features: [
        "Conversaciones ilimitadas",
        "RAG: Documentos ilimitados",
        "10+ usuarios dashboard",
        "SSO + Roles personalizados",
        "API dedicada + SLA 99.9%",
        "Soporte 24/7 dedicado",
        "Onboarding técnico incluido",
        "Contrato anual con descuento",
      ],
      cta: "Contactar Ventas",
      popular: false,
    },
  ];

  const faqs = [
    {
      q: "¿En cuánto tiempo está listo mi bot?",
      a: "48 horas hábiles después de recibir tu información (PDFs, FAQs, precios, horarios). Te entregamos acceso al dashboard y el bot activo en tu WhatsApp."
    },
    {
      q: "¿Qué necesito para empezar?",
      a: "1) Tu número de WhatsApp Business verificado en Meta, 2) Documentos de tu negocio (PDFs, Word, URLs), 3) Tus precios/servicios/horarios. Nosotros hacemos todo lo técnico."
    },
    {
      q: "¿El bot alucina o inventa respuestas?",
      a: "No. Usamos RAG (Retrieval-Augmented Generation): el bot SOLO responde con TU información subida. Si no sabe, dice 'No tengo esa información, te contacto un humano'. Cero inventos."
    },
    {
      q: "¿Puedo ver las conversaciones en tiempo real?",
      a: "Sí. Dashboard web incluido: ves todas las chats, leads calificados, métricas de respuesta, satisfacción. Y te llegan notificaciones de leads calientes a tu WhatsApp/email."
    },
    {
      q: "¿Hay contrato de permanencia?",
      a: "No. Mes a mes. Cancela cuando quieras. Si pagas año completo: 2 meses gratis (16% descuento). Garantía 30 días: si no te sirve, devolvemos tu dinero."
    },
    {
      q: "¿Funciona con mi CRM actual?",
      a: "Sí. Webhooks nativos para: HubSpot, Pipedrive, Salesforce, Google Sheets, Airtable, n8n, Make, Zapier. Si usas otro, lo integramos en el setup."
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="font-bold text-xl text-slate-900">FlujoDigital</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#caracteristicas" className="text-slate-600 hover:text-emerald-600 font-medium transition">Características</Link>
              <Link href="#precios" className="text-slate-600 hover:text-emerald-600 font-medium transition">Precios</Link>
              <Link href="#faq" className="text-slate-600 hover:text-emerald-600 font-medium transition">FAQ</Link>
              <a href="https://wa.me/573106055920" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:opacity-90 transition shadow-lg shadow-emerald-500/25">Hablar con Ventas</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pb-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(22, 163, 74, 0.08) 0%, rgba(5, 150, 105, 0.04) 50%, transparent 100%)' }}>
        <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%2316a34a%27 fill-opacity=%270.03%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>Nuevo: IA con memoria + RAG privado</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Bot WhatsApp con IA que
              <br />
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 bg-clip-text text-transparent">
                vende, atiende y califica
              </span>
              <br />
              <span className="text-emerald-600">24/7 sin que levantes el teléfono</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Tu negocio responde al instante, conoce a tus clientes y cierra ventas mientras duermes. 
              Desde <strong className="text-emerald-600">{formatPrice(600000)}/mes</strong>. Primera consultoría <span className="text-emerald-600 font-semibold">SIN COSTO</span>.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="https://wa.me/573106055920" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.42.01-.643.078-.223.068-.482.176-.717.372-.252.208-.57.612-.852 1.112-.28.498-.942 1.772-.996 1.998-.053.213-.107.333-.172.43-.172.252-1.123 1.122-2.08 3.367-.638 1.485-1.138 3.067-1.254 3.414-.117.347-.272.77-.372 1.176-.099.403-.198.748-.268 1.01-.07.272-.11.49-.11.716 0 .227.11.516.279.768.17.253.444.588.813 1.005.53.597 1.212 1.27 1.943 1.753.416.273.817.53 1.21.745.39.214.745.392 1.078.53.347.149.712.268 1.105.393.472.15 1.284.252 2.088.252.547 0 1.1-.086 1.563-.253.436-.15.846-.314 1.23-.514.383-.199.717-.453.997-.78.28-.327.504-.72.683-1.176.165-.402.32-.85.466-1.332.146-.467.287-.966.405-1.497.117-.517.196-1.08.196-1.688 0-.597-.08-1.132-.216-1.612-.137-.48-.323-.92-.558-1.312-.24-.397-.53-.766-.875-1.102l-.002-.003z"/></svg>
                Quiero mi Bot
              </a>
              <a href="#demo" className="w-full sm:w-auto bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg hover:border-emerald-500 hover:text-emerald-600 transition flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 15.652l-3.428 3.428A12.062 12.062 0 013.072 12a12.062 12.062 0 0110.344-10.344l3.428 3.428m0 0l-2.12-2.12m2.12 2.12l5.513 5.513" /></svg>
                Ver Demo en Vivo
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex items-center justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /><span>Activo en 48h</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full" /><span>Garantía 30 días</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full" /><span>Soporte incluido</span></div>
            </motion.div>
          </div>
          
          {/* Hero Visual - Chat Demo */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-16 relative" id="demo">
            <div className="max-w-md mx-auto">
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 relative">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-4 text-xs text-slate-400 font-mono">whatsapp-bot-demo</div>
                </div>
                <div className="p-6 h-96 overflow-y-auto space-y-4" style={{ scrollbarWidth: 'none' }}>
                  <div className="flex justify-start">
                    <div className="bg-emerald-100 text-slate-900 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-sm">
                      <p className="text-sm">¡Hola! 👋 Soy el asistente virtual de <strong>Clínica San José</strong>. ¿En qué puedo ayudarte hoy?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-emerald-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-sm">
                      <p className="text-sm">Quiero agendar cita para dermatología</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-emerald-100 text-slate-900 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-sm">
                      <p className="text-sm mb-2">Perfecto. Para agendar tu cita necesito:</p>
                      <ul className="text-sm space-y-1 ml-4 list-disc">
                        <li>Nombre completo</li>
                        <li>Documento de identidad</li>
                        <li>Día y hora preferida</li>
                        <li>EPS o particular</li>
                      </ul>
                      <p className="text-sm mt-2">¿Me das esos datos?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-emerald-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-sm">
                      <p className="text-sm">María González, CC 12345678, mañana 10am, EPS Sura</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-emerald-100 text-slate-900 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-sm">
                      <p className="text-sm">✅ <strong>Cita confirmada</strong></p>
                      <p className="text-sm mt-1">📅 Mañana 10:00 AM<br />👨‍⚕️ Dr. Rodríguez - Dermatología<br />🏥 Clínica San José - Consultorio 304<br />💰 Copago: $15.000 COP</p>
                      <p className="text-sm mt-2 text-emerald-700">¿Te envío el recordatorio por WhatsApp 1 hora antes?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-emerald-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-sm">
                      <p className="text-sm">Sí, perfecto. Gracias!</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-emerald-100 text-slate-900 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-sm">
                      <p className="text-sm">¡Listo! 🎉 Te llegará el recordatorio. Si necesitas cancelar o reprogramar, solo escríbeme. ¡Que tengas excelente día!</p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-slate-800 border-t border-slate-700 flex items-center gap-2">
                  <input type="text" placeholder="Escribe un mensaje..." className="flex-1 bg-slate-700 border-0 rounded-xl px-4 py-2 text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-xl transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-slate-400">
            <div className="flex items-center gap-2"><svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg><span className="font-medium text-slate-600">50+ negocios atendidos</span></div>
            <div className="flex items-center gap-2"><svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg><span className="font-medium text-slate-600">99.9% uptime</span></div>
            <div className="flex items-center gap-2"><svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg><span className="font-medium text-slate-600">Respuesta < 2 seg</span></div>
            <div className="flex items-center gap-2"><svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17