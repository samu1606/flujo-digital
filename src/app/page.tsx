import { SERVICIOS_PRINCIPALES, TIPOS_SITIOS, CATEGORIAS, CARACTERISTICAS_TRANSVERSALES, PASOS_TRABAJO, NICHOS, COMPARACION, FAQS, PROYECTOS } from "@/lib/services";

const WHATSAPP = "https://wa.me/573106055920?text=" + encodeURIComponent("Hola Flujodigital, vi su página web y quiero una cotización.");

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-lg text-slate-900">FlujoDigital</span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#servicios" className="hover:text-purple-600 transition">Servicios</a>
            <a href="#catalogo" className="hover:text-purple-600 transition">Catálogo</a>
            <a href="#nichos" className="hover:text-purple-600 transition">Nichos</a>
            <a href="#portafolio" className="hover:text-purple-600 transition">Portafolio</a>
            <a href="#faq" className="hover:text-purple-600 transition">FAQ</a>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold px-4 py-2 rounded-xl transition">
            Quiero mi cotización
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-1.5 rounded-full mb-6">
              🚀 Agencia de Desarrollo + IA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Tu negocio <span className="text-purple-600">digital</span><br />en manos expertas
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              Páginas web, apps móviles, bots de WhatsApp con IA, automatizaciones y dashboards.
              Todo lo que necesitas para <strong>vender más y trabajar menos</strong>.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#catalogo" className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition shadow-lg shadow-purple-600/20">
                Ver catálogo de servicios →
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="bg-white border border-slate-200 hover:border-purple-300 text-slate-700 font-bold px-8 py-3.5 rounded-xl text-sm transition">
                💬 Hablar por WhatsApp
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">✅ Entrega rápida</span>
              <span className="flex items-center gap-1.5">✅ Soporte constante</span>
              <span className="flex items-center gap-1.5">✅ 100% personalizado</span>
              <span className="flex items-center gap-1.5">✅ Soluciones escalables</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS PRINCIPALES ===== */}
      <section id="servicios" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Nuestros Servicios</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">Soluciones que generan ingresos</h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">Tecnología segura y confiable. Enfoque 100% personalizado en tu negocio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICIOS_PRINCIPALES.map((srv) => (
              <div key={srv.titulo} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-purple-200 transition-all group">
                <div className="text-4xl mb-4">{srv.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition">{srv.titulo}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{srv.descripcion}</p>
                <ul className="mt-4 space-y-1.5">
                  {srv.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />{f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-purple-600">Desde ${srv.precio_desde?.toLocaleString('es-CO')} COP</span>
                  <span className="text-xs text-slate-400 font-semibold">{srv.modalidad === "suscripcion" ? "/mes" : "pago único"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATÁLOGO DE SITIOS WEB ===== */}
      <section id="catalogo" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Catálogo Web</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">30 tipos de sitios web y tiendas</h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">Elige el que más se adapte a tu negocio. Todos incluyen diseño profesional, SEO y soporte.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIAS.map((cat) => (
              <span key={cat} className="px-4 py-1.5 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-600">{cat}</span>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIPOS_SITIOS.map((sitio, idx) => (
              <div key={sitio.id} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-purple-200 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs font-bold text-purple-500 uppercase tracking-wider">{sitio.categoria}</span>
                    <h3 className="text-base font-bold text-slate-900 mt-0.5">{idx + 1}. {sitio.nombre}</h3>
                  </div>
                  <span className="text-lg font-extrabold text-purple-600">${sitio.precio_desde.toLocaleString('es-CO')}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{sitio.descripcion}</p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-semibold">⏱ {sitio.dias_estimados} días</span>
                  <a href={WHATSAPP} target="_blank" rel="noopener" className="text-purple-600 font-bold hover:underline">Cotizar →</a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">Todos los sitios incluyen</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {CARACTERISTICAS_TRANSVERSALES.map((c) => (
                <div key={c} className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                  <span className="text-purple-500">✓</span> {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CÓMO TRABAJAMOS ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Cómo trabajamos</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">del problema a la solución en 4 pasos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PASOS_TRABAJO.map((paso) => (
              <div key={paso.titulo} className="text-center">
                <div className="text-5xl mb-4">{paso.num}</div>
                <h3 className="text-base font-bold text-slate-900">{paso.titulo}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{paso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NICHOS DE VENTA ===== */}
      <section id="nichos" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Soluciones por Nicho</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">Sabemos lo que tu negocio necesita</h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">Cada tipo de negocio tiene dolores distintos. Aquí mostramos cómo los resolvemos.</p>
          </div>
          <div className="space-y-6">
            {NICHOS.map((nicho) => (
              <div key={nicho.titulo} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl shrink-0">{nicho.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{nicho.titulo}</h3>
                      <p className="text-xs text-slate-400 mt-1">👥 {nicho.target}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4">
                      <span className="text-xs font-bold text-yellow-700 uppercase">😤 El Dolor</span>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{nicho.dolor}</p>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                      <span className="text-xs font-bold text-emerald-700 uppercase">🧠 La Solución</span>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{nicho.solucion}</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-purple-50 border border-purple-100 rounded-xl p-4">
                    <span className="text-xs font-bold text-purple-700 uppercase">🎯 Pitch</span>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed italic">"{nicho.pitch}"</p>
                  </div>
                  <div className="mt-4 bg-orange-50 border border-orange-100 rounded-xl p-4">
                    <span className="text-xs font-bold text-orange-700 uppercase">💰 ROI</span>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{nicho.roi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRECIOS IA ===== */}
      <section id="precios" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Planes IA</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">RAG Privado + ChatBot IA</h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">Tu propio ChatGPT sin internet. Tus datos jamás salen de tu oficina.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900">🚀 Básico</h3>
              <p className="text-3xl font-extrabold text-purple-600 mt-3">$800.000<span className="text-base font-normal text-slate-400">/mes</span></p>
              <p className="text-xs text-slate-400 mt-1">Setup: $3.200.000 COP</p>
              <ul className="mt-6 space-y-2.5 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-purple-500">✓</span> Hasta 500 documentos</li>
                <li className="flex gap-2"><span className="text-purple-500">✓</span> 1 usuario</li>
                <li className="flex gap-2"><span className="text-purple-500">✓</span> Soporte por WhatsApp</li>
                <li className="flex gap-2"><span className="text-purple-500">✓</span> Garantía 30 días</li>
              </ul>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-8 block text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl text-sm transition">Empezar</a>
            </div>
            <div className="bg-purple-50 border-2 border-purple-500 rounded-2xl p-8 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">MÁS POPULAR</span>
              <h3 className="text-xl font-bold text-slate-900">⚡ Pro</h3>
              <p className="text-3xl font-extrabold text-purple-600 mt-3">$1.400.000<span className="text-base font-normal text-slate-400">/mes</span></p>
              <p className="text-xs text-slate-400 mt-1">Setup: $4.800.000 COP</p>
              <ul className="mt-6 space-y-2.5 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-purple-500">✓</span> Hasta 5,000 documentos</li>
                <li className="flex gap-2"><span className="text-purple-500">✓</span> 5 usuarios</li>
                <li className="flex gap-2"><span className="text-purple-500">✓</span> Soporte prioritario</li>
                <li className="flex gap-2"><span className="text-purple-500">✓</span> Capacitación incluida</li>
                <li className="flex gap-2"><span className="text-purple-500">✓</span> Garantía 30 días</li>
              </ul>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-8 block text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl text-sm transition">Empezar</a>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900">🏢 Empresarial</h3>
              <p className="text-3xl font-extrabold text-purple-600 mt-3">$2.000.000<span className="text-base font-normal text-slate-400">/mes</span></p>
              <p className="text-xs text-slate-400 mt-1">Setup: $6.000.000 COP</p>
              <ul className="mt-6 space-y-2.5 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-purple-500">✓</span> Documentos ilimitados</li>
                <li className="flex gap-2"><span className="text-purple-500">✓</span> 20 usuarios</li>
                <li className="flex gap-2"><span className="text-purple-500">✓</span> Soporte 24/7</li>
                <li className="flex gap-2"><span className="text-purple-500">✓</span> Capacitación incluida</li>
                <li className="flex gap-2"><span className="text-purple-500">✓</span> Garantía 30 días</li>
              </ul>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="mt-8 block text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl text-sm transition">Empezar</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTAFOLIO ===== */}
      <section id="portafolio" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Portafolio</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">Proyectos que hemos construido</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROYECTOS.map((p) => (
              <div key={p.nombre} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-slate-900">{p.nombre}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.descripcion}</p>
                <p className="mt-3 text-xs text-slate-400 font-mono">{p.stack}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-bold bg-purple-100 text-purple-600 px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                {p.url !== "#" && (
                  <a href={p.url} target="_blank" rel="noopener" className="mt-4 block text-sm font-bold text-purple-600 hover:underline">Ver proyecto →</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARACIÓN ===== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Por qué elegirnos</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">FlujoDigital vs. La competencia</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-slate-900 text-white p-4 text-left text-sm font-bold rounded-tl-xl">Característica</th>
                  <th className="bg-purple-600 text-white p-4 text-center text-sm font-bold">FlujoDigital</th>
                  <th className="bg-slate-200 text-slate-600 p-4 text-center text-sm font-bold">Agencia tradicional</th>
                  <th className="bg-slate-200 text-slate-600 p-4 text-center text-sm font-bold rounded-tr-xl">Hacerlo uno mismo</th>
                </tr>
              </thead>
              <tbody>
                {COMPARACION.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-4 text-sm font-semibold text-slate-700">{row.feature}</td>
                    <td className="p-4 text-center text-sm font-bold text-emerald-600">{row.flujo}</td>
                    <td className="p-4 text-center text-sm text-slate-500">{row.agencia}</td>
                    <td className="p-4 text-center text-sm text-slate-500">{row.diy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Preguntas Frecuentes</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">Resolvemos tus dudas</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-white border border-slate-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-bold text-slate-800 hover:bg-slate-50 transition">
                  <span className="text-sm">{faq.q}</span>
                  <span className="text-purple-500 group-open:rotate-180 transition-transform shrink-0 ml-4">▾</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA / CONTACTO ===== */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold">¿Listo para digitalizar tu negocio?</h2>
          <p className="mt-4 text-purple-100 text-lg">Primera consultoría sin costo. Te decimos exactamente qué necesita tu negocio.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="bg-white text-purple-600 font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-purple-50 transition">
              💬 WhatsApp: +57 310 605 5920
            </a>
            <a href="mailto:hola@fluujodigital.com" className="border border-white/30 text-white font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-white/10 transition">
              📧 hola@fluujodigital.com
            </a>
          </div>
          <p className="mt-6 text-purple-200 text-xs">Pereira, Eje Cafetero, Colombia · 2026</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="font-bold text-white text-lg">FlujoDigital</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#servicios" className="hover:text-white transition">Servicios</a>
              <a href="#catalogo" className="hover:text-white transition">Catálogo</a>
              <a href="#precios" className="hover:text-white transition">Precios</a>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="hover:text-white transition">Contacto</a>
            </div>
          </div>
          <p className="mt-6 text-xs text-center">Automatización Inteligente para tu Negocio · Pereira, Colombia · 2026</p>
        </div>
      </footer>
    </div>
  );
}