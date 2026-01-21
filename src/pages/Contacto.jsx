import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import pompiers2 from '../assets/pompiers2.avif';

const Contacto = () => (
  <div className="bg-slate-50 text-slate-900">
    <Navbar />

    <header className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0">
        <img
          src={pompiers2}
          alt="Bomberos en fachada"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>
      <div className="relative z-10 space-y-4 px-6 text-white">
        <p className="text-xs uppercase tracking-[0.6em] text-white/70">Contacto</p>
        <h1 className="text-4xl font-black sm:text-5xl">CONTÁCTANOS</h1>
        <p className="max-w-3xl text-lg text-white/80">ESTAMOS AL SERVICIO DE LA COMUNIDAD 24/7</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="-mb-1 block w-full text-white" preserveAspectRatio="none">
          <path d="M0,40 C360,160 720,-40 1440,40 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </header>

    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2">
        <article className="space-y-8 rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-[0_35px_90px_rgba(15,23,42,0.08)]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Datos de contacto</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Estamos cerca de ti</h2>
          </div>
          <div className="space-y-6 text-slate-700">
            <div className="flex items-start gap-4">
              <span className="rounded-2xl bg-white p-3 text-slate-900">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Dirección</p>
                <p className="text-lg font-semibold text-slate-900">Calle Serrano 1312, Concepción, Región del Biobío</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="rounded-2xl bg-white p-3 text-slate-900">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Teléfono</p>
                <p className="text-lg font-semibold text-slate-900">+56 9 6123 132 (Secretaría)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="rounded-2xl bg-white p-3 text-slate-900">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Email</p>
                <p className="text-lg font-semibold text-slate-900">contacto@tercerabomberos.cl</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/pompefranceconcepcion"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 transition hover:border-slate-400"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/pompefranceconce"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 transition hover:border-slate-400"
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-[0_35px_90px_rgba(15,23,42,0.08)]">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Escríbenos</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Formulario general</h2>
          <form
            className="mt-6 space-y-4"
            action="mailto:contacto@tercerabomberos.cl"
            method="POST"
            encType="text/plain"
          >
            <input
              type="text"
              name="Nombre"
              placeholder="Nombre completo"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
              required
            />
            <input
              type="text"
              name="Asunto"
              placeholder="Asunto"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
              required
            />
            <textarea
              name="Mensaje"
              placeholder="Mensaje"
              rows={5}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
              required
            />
            <button
              type="submit"
              className="w-full rounded-3xl bg-slate-900 px-6 py-3 text-center text-base font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-slate-900/40 transition hover:bg-slate-800"
            >
              Enviar Mensaje
            </button>
          </form>
        </article>
      </div>
    </section>

    <section className="bg-slate-900 py-16 text-center text-white">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">Nuestra Ubicación</p>
        <h2 className="text-3xl font-semibold">Serrano 1312, Concepción</h2>
        <div className="overflow-hidden rounded-xl shadow-2xl">
          <iframe
            title="Mapa Serrano 1312"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.045536603321!2d-73.06709018479508!3d-36.82550137901926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968960ddcca1c6ad%3A0x96f89940b66bde4d!2sSerrano%201312%2C%20Concepci%C3%B3n!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
            width="100%"
            height="384"
            className="h-96 w-full grayscale transition-all hover:grayscale-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Contacto;
