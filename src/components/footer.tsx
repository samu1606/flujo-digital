import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="font-bold text-lg">FlujoDigital</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Agencia de desarrollo web, apps, bots de WhatsApp con IA y automatizaciones. Tecnología que genera ingresos.
            </p>
            <p className="text-slate-500 text-xs">
              📍 Pereira, Eje Cafetero, Colombia
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/#servicios" className="hover:text-purple-400 transition">Páginas Web</a></li>
              <li><a href="/#servicios" className="hover:text-purple-400 transition">Apps Móviles</a></li>
              <li><a href="/#servicios" className="hover:text-purple-400 transition">Bots de WhatsApp</a></li>
              <li><a href="/#servicios" className="hover:text-purple-400 transition">RAG Privado</a></li>
              <li><a href="/#servicios" className="hover:text-purple-400 transition">Automatizaciones</a></li>
            </ul>
          </div>

          {/* Catálogo */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/#catalogo" className="hover:text-purple-400 transition">Catálogo Web</a></li>
              <li><a href="/#precios" className="hover:text-purple-400 transition">Planes RAG + IA</a></li>
              <li><a href="/#portafolio" className="hover:text-purple-400 transition">Portafolio</a></li>
              <li><a href="/blog" className="hover:text-purple-400 transition">Blog</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="https://wa.me/573106055920"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-green-400 transition"
                >
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contacto@flujodigital.com" className="hover:text-purple-400 transition">
                  ✉️ contacto@flujodigital.com
                </a>
              </li>
              <li>
                <a
                  href="https://wasapeapro.com"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-[#FF6B00] transition"
                >
                  🧠 WASAPEA PRO CRM
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} FlujoDigital. Todos los derechos reservados.</p>
          <p>Construido con ❤️ en Pereira, Colombia</p>
        </div>
      </div>
    </footer>
  );
}
