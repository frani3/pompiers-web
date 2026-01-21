import { useEffect, useState } from 'react';
import {
  BookOpen,
  ChevronDown,
  Flame,
  Lock,
  Menu,
  Phone,
  Users,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const menuItems = [
  { label: 'Alianza', to: '/alianza' },
  { label: 'Noticias', to: '/noticias' },
  { label: 'Postula', to: '/postula' },
  { label: 'Ayúdanos', to: '/ayudanos' },
  { label: 'Cancha', to: '/cancha' },
  { label: 'Contacto', to: '/contacto' }
];

const flyoutItems = [
  { label: 'Historia', to: '/historia', Icon: BookOpen },
  { label: 'Especialidades', to: '/especialidades', Icon: Flame },
  { label: 'Organización', to: '/organizacion', Icon: Users }
];

const desktopLinkClasses =
  'text-white hover:text-red-500 text-sm font-medium uppercase tracking-wide transition-colors flex items-center gap-1 cursor-pointer';
const mobileTextClasses =
  'block px-3 py-2 text-base font-medium text-gray-300 transition-colors hover:text-white';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNosotrosOpen, setIsMobileNosotrosOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 20);
    update();
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setIsMobileNosotrosOpen(false);
    }
  }, [isOpen]);

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
          <Link to="/" className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-1">
            <img
              src={logo}
              alt="Solapamiento logo"
              className="h-full w-full object-contain"
            />
          </Link>
        </div>

        <div className="hidden flex-1 justify-center xl:flex">
          <div className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.25em] text-white/90">
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                type="button"
                className={desktopLinkClasses}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Nosotros
                <ChevronDown className="h-4 w-4 text-white/60" />
              </button>
              <div
                className={`absolute left-0 top-full z-50 mt-0 w-64 rounded-2xl ring-1 ring-white/10 shadow-2xl bg-[#0B1120] pt-4 transition-all duration-200 ${
                  isDropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                } group-hover:opacity-100 group-hover:translate-y-0`}
              >
                <div className="space-y-2 px-4 pb-3">
                  {flyoutItems.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="group relative flex items-center gap-x-4 rounded-lg px-4 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white transition-colors group-hover:bg-red-600/20 group-hover:text-red-500">
                        <link.Icon className="h-5 w-5" />
                      </span>
                      <span className="flex-1 text-left">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {menuItems.map((item) =>
              item.to ? (
                <Link key={item.label} to={item.to} className={desktopLinkClasses}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className={desktopLinkClasses}>
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex md:ml-auto md:mr-4">
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
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white/80 transition hover:bg-white/10 xl:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B1120]/95 backdrop-blur-md xl:hidden">
          <div className="space-y-1 px-5 pb-6 pt-4">
            <button
              type="button"
              onClick={() => setIsMobileNosotrosOpen((prev) => !prev)}
              className={`flex items-center justify-between ${mobileTextClasses}`}
              aria-controls="nosotros-menu"
              aria-expanded={isMobileNosotrosOpen}
            >
              <span>Nosotros</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${isMobileNosotrosOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              id="nosotros-menu"
              className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0B1120]/80 transition-[max-height] duration-200 ${
                isMobileNosotrosOpen ? 'max-h-72 px-3 py-2' : 'max-h-0 px-3'
              }`}
            >
              <div className="flex flex-col gap-1 py-2">
                {flyoutItems.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="px-4 py-2 pl-8 text-left text-sm font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:text-white"
                    onClick={() => {
                      setIsOpen(false);
                      setIsMobileNosotrosOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            {menuItems.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className={mobileTextClasses}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={mobileTextClasses}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
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
