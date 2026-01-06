import { useEffect, useState } from 'react';
import { Lock, Menu, Phone, X } from 'lucide-react';
import logo from '../assets/logo.png';

const menuItems = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Alianza', href: '#alianza' },
  { label: 'Noticias', href: '#noticias' },
  { label: 'Postula', href: '#postula' },
  { label: 'Ayúdanos', href: '#ayudanos' },
  { label: 'Cancha', href: '#cancha' },
  { label: 'Contacto', href: '#contacto' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 20);
    update();
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#0B1120]/95 backdrop-blur-md shadow-[0_20px_30px_rgba(0,0,0,0.45)] border-b border-white/10'
          : isOpen
          ? 'bg-[#0B1120]/95 backdrop-blur-md shadow-[0_20px_30px_rgba(0,0,0,0.45)] border-b border-white/10 lg:bg-transparent'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <div className="flex items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-1">
            <img
              src={logo}
              alt="Solapamiento logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="hidden flex-1 justify-center md:flex">
          <div className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.25em] text-white/90">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex md:ml-auto">
          <a
            href="#intranet"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-white"
          >
            <Lock className="h-4 w-4" />
            Intranet
          </a>
          <a
            href="tel:132"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-bold uppercase tracking-[0.4em] text-white shadow-lg shadow-red-900/30 transition hover:bg-red-500"
          >
            <Phone className="h-4 w-4" />
            132
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white/80 transition hover:bg-white/10"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B1120]/95 backdrop-blur-md md:hidden">
          <div className="space-y-1 px-5 pb-6 pt-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <a
                href="#intranet"
                className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white"
                onClick={() => setIsOpen(false)}
              >
                <Lock className="h-4 w-4" />
                Intranet
              </a>
              <a
                href="tel:132"
                className="flex items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-3 text-sm font-bold uppercase tracking-[0.4em] text-white shadow-lg shadow-red-900/30 transition hover:bg-red-500"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-4 w-4" /> 
                132
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
