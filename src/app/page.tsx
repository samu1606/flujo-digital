import { SERVICIOS_PRINCIPALES, TIPOS_SITIOS, CATEGORIAS, CARACTERISTICAS_TRANSVERSALES, PASOS_TRABAJO, NICHOS, COMPARACION, FAQS, PROYECTOS } from "@/lib/services";
import { LeadCapture } from "@/components/lead-capture";

const WHATSAPP = "https://wa.me/573106055920?text=" + encodeURIComponent("Hola Flujodigital, vi su página web y quiero una cotización.");

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050506] text-neutral-200 selection:bg-orange-500 selection:text-white">
      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 bg-[#050506]/85 backdrop-blur-lg border-b border-neutral-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-orange-500 filter drop-shadow-[0_0_8px_rgba(249,115,22,0.45)]">
              <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"/>
            </svg>
            <span className="font-extrabold text-xl text-white tracking-tight">Flujo<span className="text-orange-500">Digital</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-300">
            <a href="#servicios" className="hover:text-orange-500 transition duration-200">Servicios</a>
            <a href="#catalogo" className="hover:text-orange-500 transition duration-200">Catálogo</a>
            <a href="#nichos" className="hover:text-orange-500 transition duration-200">Nichos</a>
            <a href="#precios" className="hover:text-orange-500 transition duration-200">Planes IA</a>
            <a href="#portafolio" className="hover:text-orange-500 transition duration-200">Portafolio</a>
            <a href="#faq" className="hover:text-orange-500 transition duration-200">FAQ</a>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs md:text-sm font-extrabold px-5 py-3 rounded-xl transition duration-200 shadow-lg shadow-orange-500/15 hover:shadow-orange-500/25">
            Quiero mi cotización
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 border-b border-neutral-900/40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full radial-glow opacity-60 pointer-events-none z-0" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] rounded-full radial-glow opacity-30 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column (Copy and Action) */}
            <div className="lg:col-span-7 text-left">
              <span className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
                ⚡ DISEÑA. AUTOMATIZA. ESCALA.
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Tu presencia <br />
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-500 text-glow-orange animate-pulse">
                  digital & inteligente
                </span>
              </h1>
              <p className="mt-6 text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl">
                Páginas web profesionales, aplicaciones a medida, bots de WhatsApp impulsados por IA y flujos de automatización locales. Desarrollamos la tecnología para que vendas más trabajando menos.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#catalogo" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold px-8 py-4 rounded-xl text-sm transition duration-200 shadow-xl shadow-orange-500/20 hover:scale-[1.02] text-center">
                  Ver catálogo de servicios →
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener" className="bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-neutral-700 text-neutral-200 font-extrabold px-8 py-4 rounded-xl text-sm transition duration-200 text-center flex items-center justify-center gap-2">
                  💬 Hablar por WhatsApp
                </a>
              </div>

              {/* Social Trust */}
              <div className="mt-12 pt-8 border-t border-neutral-900/60 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-9 h-9 rounded-full bg-neutral-800 border border-neutral-950 flex items-center justify-center text-xs font-bold">👦</div>
                  <div className="w-9 h-9 rounded-full bg-neutral-800 border border-neutral-950 flex items-center justify-center text-xs font-bold">👩</div>
                  <div className="w-9 h-9 rounded-full bg-neutral-800 border border-neutral-950 flex items-center justify-center text-xs font-bold">🧔</div>
                </div>
                <div className="text-xs text-neutral-500 font-medium">
                  Confianza de agencias, profesionales y comercios locales.
                </div>
              </div>
            </div>

            {/* Right Column (Stat Badges and Glow Graphics) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="absolute w-[350px] h-[350px] rounded-full radial-glow-strong opacity-80 pointer-events-none z-0" />
              
              <div className="relative w-full max-w-[400px] bg-neutral-900/20 backdrop-blur-xl border border-neutral-900/80 p-8 rounded-3xl z-10 flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Métricas de Flujo</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                </div>
                
                {/* Stats cards */}
                <div className="bg-neutral-900/50 border border-neutral-900 p-4 rounded-2xl flex items-center justify-between hover:border-orange-500/10 transition">
                  <div>
                    <span className="text-xs text-neutral-500 font-bold block">VELOCIDAD WEB</span>
                    <span className="text-neutral-400 text-xs">Carga instantánea</span>
                  </div>
                  <span className="text-2xl font-black text-white text-glow-orange">+300%</span>
                </div>
                
                <div className="bg-neutral-900/50 border border-neutral-900 p-4 rounded-2xl flex items-center justify-between hover:border-orange-500/10 transition">
                  <div>
                    <span className="text-xs text-neutral-500 font-bold block">RESPUESTA A CLIENTES</span>
                    <span className="text-neutral-400 text-xs">Bot de WhatsApp con IA</span>
                  </div>
                  <span className="text-2xl font-black text-white text-glow-orange">24/7</span>
                </div>
                
                <div className="bg-neutral-900/50 border border-neutral-900 p-4 rounded-2xl flex items-center justify-between hover:border-orange-500/10 transition">
                  <div>
                    <span className="text-xs text-neutral-500 font-bold block">DATOS SEGUROS</span>
                    <span className="text-neutral-400 text-xs">RAG Privado local</span>
                  </div>
                  <span className="text-2xl font-black text-white text-glow-orange">100%</span>
                </div>

                <div className="bg-neutral-900/50 border border-neutral-900 p-4 rounded-2xl flex items-center justify-between hover:border-orange-500/10 transition">
                  <div>
                    <span className="text-xs text-neutral-500 font-bold block">TRABAJO MANUAL</span>
                    <span className="text-neutral-400 text-xs">Ahorro administrativo</span>
                  </div>
                  <span className="text-2xl font-black text-orange-500 text-glow-orange">-15h/sem</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== SERVICIOS PRINCIPALES ===== */}
      <section id="servicios" className="py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full radial-glow opacity-30 pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Nuestros Servicios</span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Soluciones que <span className="font-serif italic font-normal text-orange-400">generan ingresos</span>
            </h2>
            <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Tecnología confiable y robusta adaptada al mercado nacional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICIOS_PRINCIPALES.map((srv) => (
              <div key={srv.titulo} className="bg-neutral-900/20 backdrop-blur-md border border-neutral-900 rounded-2xl p-6 group border-glow-hover flex flex-col justify-between">
                <div>
                  <div className="text-4xl mb-4 filter drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">{srv.icon}</div>
                  <h3 className="text-lg font-extrabold text-white group-hover:text-orange-400 transition duration-200">{srv.titulo}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-450 leading-relaxed">{srv.descripcion}</p>
                  <ul className="mt-4 space-y-2">
                    {srv.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 filter drop-shadow-[0_0_4px_rgba(249,115,22,0.6)]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-900 flex justify-end">
                  <a href={WHATSAPP} target="_blank" rel="noopener" className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold py-3.5 rounded-xl text-xs transition duration-200 text-center shadow-lg shadow-orange-500/15">
                    Solicitar diagnóstico de flujo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATÁLOGO DE SITIOS WEB ===== */}
      <section id="catalogo" className="py-20 bg-[#070708] relative border-y border-neutral-900/60">
        <div className="absolute top-10 right-0 w-[450px] h-[450px] rounded-full radial-glow opacity-25 pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Catálogo Web</span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              30 tipos de <span className="font-serif italic font-normal text-orange-400">sitios web & tiendas</span>
            </h2>
            <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Explore nuestras capacidades tecnológicas. Cada desarrollo se adapta, diseña y cotiza de forma 100% personalizada tras una breve sesión de consultoría.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TIPOS_SITIOS.map((sitio, idx) => (
              <div key={sitio.id} className="bg-neutral-900/10 border border-neutral-900 rounded-xl p-5 hover:bg-neutral-900/20 border-glow-hover flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{idx + 1}. {sitio.nombre}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">{sitio.descripcion}</p>
                </div>
                <div className="pt-4 border-t border-neutral-900/60 mt-2">
                  <a href={WHATSAPP} target="_blank" rel="noopener" className="block w-full bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-350 hover:text-white font-extrabold py-3.5 rounded-xl text-xs transition duration-200 text-center">
                    Solicitar propuesta a medida
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-neutral-900/20 border border-neutral-900 p-6 rounded-2xl max-w-4xl mx-auto">
            <h4 className="text-xs font-black text-neutral-400 uppercase tracking-widest mb-4 text-center">Todos nuestros sitios web garantizan</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-center">
              {CARACTERISTICAS_TRANSVERSALES.map((c) => (
                <div key={c} className="flex items-center justify-center gap-1.5 text-xs text-neutral-300 font-semibold bg-neutral-900/40 border border-neutral-900/60 py-2 rounded-xl">
                  <span className="text-orange-500">✓</span> {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CÓMO TRABAJAMOS ===== */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Metodología</span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Del problema a la solución en <span className="font-serif italic font-normal text-orange-400">4 pasos</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PASOS_TRABAJO.map((paso) => (
              <div key={paso.titulo} className="bg-neutral-900/10 border border-neutral-900/80 p-6 rounded-2xl hover:border-orange-500/10 transition text-center relative group">
                <div className="text-4xl mb-3">{paso.num}</div>
                <h3 className="text-base font-extrabold text-white group-hover:text-orange-400 transition">
                  {paso.titulo.includes("Charlamos") ? "Charlamos" : paso.titulo}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-450 leading-relaxed">{paso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NICHOS DE VENTA ===== */}
      <section id="nichos" className="py-20 bg-[#070708] relative border-y border-neutral-900/60">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full radial-glow opacity-25 pointer-events-none z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Segmentos</span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Soluciones diseñadas por <span className="font-serif italic font-normal text-orange-400">sector comercial</span>
            </h2>
            <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Cada industria sufre procesos ineficientes diferentes. Diseñamos para automatizar y ahorrar.
            </p>
          </div>

          <div className="space-y-6">
            {NICHOS.map((nicho) => (
              <div key={nicho.titulo} className="bg-neutral-900/10 border border-neutral-900/60 rounded-2xl overflow-hidden p-6 lg:p-8 border-glow-hover">
                <div className="flex items-start gap-4 mb-5">
                  <span className="text-4xl shrink-0 filter drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">{nicho.icon}</span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white">{nicho.titulo}</h3>
                    <p className="text-[11px] text-neutral-400 mt-1 uppercase tracking-wider font-semibold">👥 Enfoque: {nicho.target}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="bg-red-500/[0.02] border border-red-500/10 rounded-xl p-4">
                    <span className="text-[10px] font-black text-red-400 uppercase tracking-wider">💡 EL DOLOR OPERATIVO</span>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-305 leading-relaxed">{nicho.dolor}</p>
                  </div>
                  <div className="bg-emerald-500/[0.02] border border-emerald-500/10 rounded-xl p-4">
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider">🌸 LA AUTOMATIZACIÓN</span>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-305 leading-relaxed">{nicho.solucion}</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <a href={WHATSAPP} target="_blank" rel="noopener" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold px-6 py-3 rounded-xl text-xs transition duration-200 text-center shadow-lg shadow-orange-500/15">
                    Solicitar diagnóstico de flujo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOLUCIÓN A MEDIDA ===== */}
      <section id="precios" className="py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full radial-glow opacity-30 pointer-events-none z-0" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-neutral-900/30 border border-neutral-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border-glow-hover">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full radial-glow opacity-20 pointer-events-none" />
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Soluciones de Valor</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              Automatice su negocio con una <span className="font-serif italic font-normal text-orange-400">solución a medida.</span>
            </h2>
            <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Hablemos de cómo podemos transformar sus procesos manuales en activos digitales eficientes.
            </p>
            <div className="mt-8 flex justify-center">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold px-8 py-4 rounded-xl text-sm transition duration-200 shadow-xl shadow-orange-500/20 hover:scale-[1.02]">
                Agendar consultoría estratégica gratuita
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTAFOLIO ===== */}
      <section id="portafolio" className="py-20 bg-[#070708] border-y border-neutral-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Casos de Éxito</span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Proyectos <span className="font-serif italic font-normal text-orange-400">construidos</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROYECTOS.map((p) => (
              <div key={p.nombre} className="bg-neutral-900/10 border border-neutral-900 rounded-2xl p-6 border-glow-hover flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-white">{p.nombre}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-450 leading-relaxed">{p.descripcion}</p>
                  <p className="mt-3 text-[10px] text-neutral-500 font-mono tracking-wider">{p.stack}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-black bg-orange-500/10 text-orange-500 border border-orange-500/15 px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
                {p.url !== "#" && (
                  <a href={p.url} target="_blank" rel="noopener" className="mt-6 block text-xs font-bold text-orange-500 hover:underline">Ver proyecto activo →</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARACIÓN ===== */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Ventajas</span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              ¿Por qué elegir <span className="font-serif italic font-normal text-orange-400">FlujoDigital</span>?
            </h2>
          </div>
          
          <div className="overflow-x-auto rounded-2xl border border-neutral-900 bg-neutral-900/10 backdrop-blur-xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-neutral-900">
                  <th className="p-4 text-left text-xs font-black text-neutral-400 uppercase tracking-wider">Característica</th>
                  <th className="p-4 text-center text-xs font-black text-orange-500 bg-orange-500/5 uppercase tracking-wider">FlujoDigital</th>
                  <th className="p-4 text-center text-xs font-black text-neutral-500 uppercase tracking-wider">Agencia Tradicional</th>
                  <th className="p-4 text-center text-xs font-black text-neutral-500 uppercase tracking-wider">Desarrollo Propio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900/60">
                {COMPARACION.map((row) => (
                  <tr key={row.feature} className="hover:bg-neutral-900/20 transition">
                    <td className="p-4 text-xs sm:text-sm font-semibold text-neutral-300">{row.feature}</td>
                    <td className="p-4 text-center text-xs sm:text-sm font-black text-orange-500 bg-orange-500/[0.02] filter drop-shadow-[0_0_4px_rgba(249,115,22,0.4)]">{row.flujo}</td>
                    <td className="p-4 text-center text-xs sm:text-sm text-neutral-500">{row.agencia}</td>
                    <td className="p-4 text-center text-xs sm:text-sm text-neutral-500">{row.diy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-20 bg-[#070708] border-y border-neutral-900/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Soporte</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-white tracking-tight">
              Resolvemos tus <span className="font-serif italic font-normal text-orange-400">inquietudes</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group bg-neutral-900/10 border border-neutral-900 rounded-2xl overflow-hidden border-glow-hover">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-extrabold text-white hover:bg-neutral-900/30 transition duration-200">
                  <span className="text-xs sm:text-sm">{faq.q}</span>
                  <span className="text-orange-500 group-open:rotate-180 transition-transform shrink-0 ml-4">▾</span>
                </summary>
                <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-450 leading-relaxed border-t border-neutral-900/30 pt-4 bg-[#050506]/30">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ EXTRA / ADVERTENCIA EXPRES ===== */}

      {/* ===== CTA / LEAD CAPTURE ===== */}
      <section id="contacto" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-orange-500/10 to-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Columna 1 — Texto + CTAs */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                ¿Listo para acelerar tu <span className="font-serif italic font-normal text-orange-400">flujo digital</span>?
              </h2>
              <p className="mt-6 text-neutral-450 text-sm sm:text-base leading-relaxed">
                Agenda tu consultoría diagnóstica gratuita de 10 minutos. Analizamos los cuellos de botella de tu negocio y te cotizamos el plan a medida.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href={WHATSAPP} target="_blank" rel="noopener" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold px-8 py-4 rounded-xl text-sm transition shadow-xl shadow-orange-500/15 text-center flex items-center justify-center gap-2">
                  💬 WhatsApp: +57 310 605 5920
                </a>
                <a href="mailto:hola@fluujodigital.com" className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-neutral-750 text-neutral-300 font-extrabold px-8 py-4 rounded-xl text-sm transition text-center">
                  📧 hola@fluujodigital.com
                </a>
              </div>

              <p className="mt-8 text-neutral-600 text-xs">
                Pereira · Eje Cafetero · Colombia
              </p>
            </div>

            {/* Columna 2 — Formulario de captura */}
            <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Solicitá tu cotización gratis</h3>
              <LeadCapture />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}