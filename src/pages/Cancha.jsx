import { Layers, Lightbulb, ShieldCheck, Umbrella, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import cancha from '../assets/cancha.avif';

const beneficios = [
  {
    title: 'Techada',
    description: 'Juega todo el año, sin importar la lluvia o el frío.',
    Icon: Umbrella
  },
  {
    title: 'Pasto Sintético',
    description: 'Superficie profesional para un juego rápido y seguro.',
    Icon: Layers
  },
  {
    title: 'Iluminación LED',
    description: 'Focos de alta potencia para partidos nocturnos.',
    Icon: Lightbulb
  },
  {
    title: 'Comodidad',
    description: 'Camarines disponibles y acceso seguro.',
    Icon: ShieldCheck
  }
];

const Cancha = () => (
  <div className="bg-slate-50 text-slate-900">
    <Navbar />

    <header className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0">
        <img
          src={cancha}
          alt="Cancha techada"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>
      <div className="relative z-10 space-y-4 px-6 text-white">
        <p className="text-xs uppercase tracking-[0.6em] text-white/70">La Cancha</p>
        <h1 className="text-4xl font-black sm:text-5xl">LA CANCHA DE LOS BOMBEROS</h1>
        <p className="max-w-3xl text-lg text-white/90">PASTO SINTÉTICO TECHADO | BABY FÚTBOL 6X6 | EVENTOS</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="-mb-1 block w-full text-white" preserveAspectRatio="none">
          <path d="M0,40 C360,160 720,-40 1440,40 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </header>

    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Instalaciones de Primer Nivel</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Beneficios que hacen la diferencia</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {beneficios.map((beneficio) => (
            <article
              key={beneficio.title}
              className="flex gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-[0_30px_120px_rgba(15,23,42,0.08)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                <beneficio.Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{beneficio.title}</h3>
                <p className="text-sm text-slate-600">{beneficio.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Horarios</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">Disponibilidad</h3>
          <ul className="mt-6 space-y-3 text-lg text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">Lunes a Viernes:</span> 17:00 a 22:00 hrs.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Sábados:</span> 11:00 a 13:00 hrs.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Servicios Extra</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">Opciones para tu evento</h3>
          <ul className="mt-6 space-y-3 text-lg text-slate-700">
            <li>Arriendo de cancha por hora</li>
            <li>Convenios con empresas</li>
            <li>Eventos infantiles y cumpleaños</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-slate-500">Reserva por WhatsApp</p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">¿Listo para el partido? Agenda tu hora ahora</h2>
        <a
          href="https://wa.me/56941247572?text=Hola,%20quisiera%20consultar%20disponibilidad%20para%20arrendar%20la%20cancha"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-[#25D366] px-6 py-4 text-base font-semibold uppercase tracking-[0.3em] text-white shadow-2xl shadow-emerald-500/40 transition hover:bg-[#128C7E] sm:w-auto"
        >
          <Zap className="h-5 w-5" />
          Reservar Cancha al +56 9 4124 7572
        </a>
      </div>
    </section>

    <section className="bg-white pt-16 pb-24 -mb-1 relative z-0">
      <div className="mx-auto max-w-6xl space-y-6 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Ubicación del Recinto</p>
        <h3 className="text-3xl font-semibold text-slate-900">Serrano #1312, Concepción</h3>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <iframe
            title="Ubicación cancha Tercera Compañía"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.045536603321!2d-73.06709018479508!3d-36.82550137901926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968960ddcca1c6ad%3A0x96f89940b66bde4d!2sSerrano%201312%2C%20Concepci%C3%B3n!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
            width="100%"
            height="384"
            className="block h-96 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Cancha;
