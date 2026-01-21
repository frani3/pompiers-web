import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="-mt-1 relative z-10 bg-[#050812] px-6 py-10 text-sm text-gray-300">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Contacto</p>
        <p>Serrano 1312, Concepción</p>
        <p>+56 9 6123 132 · contacto@tercerabomberos.cl</p>
      </div>
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Redes Sociales</p>
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com"
            aria-label="Facebook"
            className="text-gray-400 transition-colors duration-300 hover:text-white"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com"
            aria-label="Instagram"
            className="text-gray-400 transition-colors duration-300 hover:text-white"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://www.youtube.com"
            aria-label="YouTube"
            className="text-gray-400 transition-colors duration-300 hover:text-white"
          >
            <Youtube className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/tercerabomberos"
            aria-label="X"
            className="text-gray-400 transition-colors duration-300 hover:text-white"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Accesos rápidos</p>
        <div className="flex flex-col gap-2 text-white/80">
          <Link to="/" className="hover:text-white">
            Inicio
          </Link>
          <Link to="/alianza" className="hover:text-white">
            Alianza
          </Link>
          <Link to="/noticias" className="hover:text-white">
            Noticias
          </Link>
          <Link to="/cancha" className="hover:text-white">
            Cancha
          </Link>
          <Link to="/contacto" className="hover:text-white">
            Contacto
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;