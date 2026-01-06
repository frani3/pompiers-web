from pathlib import Path

content = """import { useEffect, useState } from 'react';
import { Lock, Newspaper, Mail, Globe, Shield, FireExtinguisher, Activity } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import pompiers1 from '../assets/pompiers.avif';
import pompiers2 from '../assets/pompiers2.avif';
import pompiers3 from '../assets/pompiers3.avif';
import cancha from '../assets/cancha.avif';

const quickLinks = [
  { label: 'Noticias', icon: Newspaper, href: '#noticias' },
  { label: 'Intranet', icon: Lock, href: '#intranet' },
  { label: 'Contacto', icon: Mail, href: '#contacto' },
  { label: 'Alianza Francia', icon: Globe, href: '#alianza' }
];

const cards = [
  {
    title: 'Incendios Estructurales',
    body:
      'Desde nuestra fundación cumplimos la labor de salvataje de víctimas y bienes. Hoy aplicamos ventilación y entrada forzada en más de 500 emergencias anuales.',
    icon: Shield
  },
  {
    title: 'Rescate Vehicular',
    body:
      'Atención pre-hospitalaria de trauma y extricación. Especialistas en inmovilización, estabilización y liberación de pacientes en colisiones de alta energía.',
    icon: Activity
  },
  {
    title: 'Especialidad GRIMP',
    body:
      'Pioneros en Chile. Operadores certificados bajo norma francesa (IMP-2/IMP-3) para intervención en medios peligrosos y verticales. Lazos directos con el CNF de Francia.',
    icon: FireExtinguisher
  }
];

const heroSlides = [
  { id: 1, image: pompiers1 },
  { id: 2, image: pompiers2 },
  { id: 3, image: pompiers3 }
];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = heroSlides.length;

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slideCount), 4500);
    return () => clearInterval(timer);
  }, [slideCount]);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <Navbar />

      <section
        className="relative flex min-h-[80vh] max-h-[900px] w-full items-center justify-center overflow-hidden"
        aria-label="Hero"
      >
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-hidden="true"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712]/90 via-[#0B1120]/70 to-[#0B1120]/95" />
        <div className="relative z-20 flex w-full flex-col items-center gap-4 px-6 text-center text-white">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/60">Sauveteur et Gardien de la Propriété</p>
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/60">Salvadora y Guardia de Propiedad</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Más de 130 años de tradición franco-chilena
          </h1>
          <p className="max-w-2xl text-base text-white/80 sm:text-lg">
            Fundada el 29 de Enero de 1888. Combinamos historia, disciplina y la técnica moderna del GRIMP y Rescate.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#postula"
              className="rounded-full bg-red-600 px-10 py-3 text-xs font-semibold uppercase tracking-[0.4em] transition hover:bg-red-500"
            >
              Postula
            </a>
            <a
              href="#donar"
              className="rounded-full border border-white/60 px-10 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:border-red-500"
            >
              Donar / Apoyar
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden">
          <svg className="h-24 w-full text-gray-50" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,40 C360,160 720,-40 1440,40 L1440,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      <section className="relative z-10 -mt-16 flex justify-center w-full px-4 pb-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end gap-4 rounded-[30px] bg-white/90 p-6 shadow-[0_35px_120px_rgba(15,23,42,0.25)] backdrop-blur">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-900 transition hover:border-red-500 hover:shadow-[0_20px_60px_rgba(15,23,42,0.15)] sm:w-auto"
              >
                <Icon className="h-5 w-5 text-red-600" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4 pb-16 pt-8 sm:px-6">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Especialidades</p>
          <h2 className="text-3xl font-semibold text-slate-900">Nuestro servicio activo</h2>
          <p className="max-w-3xl text-base text-slate-600">
            Cada bloque refleja labores reales de la Tercera Compañía, desde incendios hasta rescates verticales apoyados por la alianza transatlántica.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="flex h-full flex-col gap-5 rounded-[28px] border border-slate-100 bg-white p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.2)]"
              >
                <div className="flex items-center gap-3 text-red-600">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-slate-600">{card.body}</p>
                <button className="inline-flex w-fit items-center justify-center rounded-full border border-red-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-red-600 transition hover:bg-red-50">
                  Ver más
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl space-y-4 rounded-[30px] border border-slate-200 bg-white/60 px-6 py-8 text-slate-900 shadow-[0_25px_90px_rgba(15,23,42,0.15)] sm:px-10"
        id="alianza"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Alianza Francia</p>
        <h2 className="text-3xl font-semibold">Hermanamiento Internacional (Jumelage)</h2>
        <p className="text-base text-slate-600">
          Desde 2007 mantenemos una alianza oficial con el SDIS 24 (Dordogne, Francia). Esta capacitación fue fundamental para nuestras operaciones de rescate urbano en el edificio Alto Río durante el terremoto del 27F de 2010.
        </p>
      </section>

      <section
        className="relative mx-4 mb-16 mt-10 flex min-h-[340px] items-center overflow-hidden rounded-[38px] bg-[#0B1120] px-6 py-10 text-white sm:mx-6"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(5, 9, 20, 0.9), rgba(11, 17, 32, 0.8)), url(${cancha})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/60 to-[#0B1120]/90" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-white/60">Cancha Techada</p>
          <h3 className="text-3xl font-semibold sm:text-4xl">Cancha de Entrenamiento Techada</h3>
          <p className="text-sm text-white/80">
            Pasto sintético, disponible para la comunidad (Baby Fútbol 6x6). Reserva tu hora y apoya a la compañía.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#cancha"
              className="rounded-full bg-red-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] transition hover:bg-red-500"
            >
              Reservar al 41-2229112
            </a>
            <span className="text-xs uppercase tracking-[0.4em] text-white/70">Calle Serrano #1312, Concepción</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
"""
Path('src/components/LandingPage.jsx').write_text(content, encoding='utf-8')