export function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-neutral-900 text-neutral-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-neutral-900 pb-10">
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-orange-500 filter drop-shadow-[0_0_8px_rgba(249,115,22,0.45)]"
            >
              <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
            </svg>
            <span className="font-extrabold text-xl text-white tracking-tight">
              Flujo<span className="text-orange-500">Digital</span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-xs sm:text-sm font-semibold">
            <a href="#servicios" className="hover:text-white transition">
              Servicios
            </a>
            <a href="#catalogo" className="hover:text-white transition">
              Catálogo
            </a>
            <a href="#nichos" className="hover:text-white transition">
              Nichos
            </a>
            <a href="#contacto" className="hover:text-white transition">
              Contacto
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} FlujoDigital. Todos los derechos reservados.</p>
          <p>
            <a href="https://wasapeapro.com" target="_blank" rel="noopener" className="hover:text-white transition">
              WASAPEA PRO CRM
            </a>
            {" · "}Pereira, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
