const Footer = () => (
  <footer className="bg-[#050812] px-6 py-10 text-sm text-gray-300">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Contacto</p>
        <p>Av. O'Higgins 1230, Concepción</p>
        <p>+56 9 6123 132 · contacto@tercerabomberos.cl</p>
      </div>
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Redes Sociales</p>
        <div className="flex flex-wrap gap-3 text-white">
          <a href="https://www.facebook.com" className="transition hover:text-red-600">
            Facebook
          </a>
          <a href="https://www.instagram.com" className="transition hover:text-red-600">
            Instagram
          </a>
          <a href="https://www.youtube.com" className="transition hover:text-red-600">
            YouTube
          </a>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Accesos rápidos</p>
        <div className="flex flex-col gap-2 text-white/80">
          <a href="#inicio" className="hover:text-white">
            Inicio
          </a>
          <a href="#alianza" className="hover:text-white">
            Alianza
          </a>
          <a href="#noticias" className="hover:text-white">
            Noticias
          </a>
          <a href="#cancha" className="hover:text-white">
            Cancha
          </a>
          <a href="#contacto" className="hover:text-white">
            Contacto
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;