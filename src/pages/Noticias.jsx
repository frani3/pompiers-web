import { Facebook, Instagram } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import pompiers from '../assets/pompiers.avif';

const placeholderCards = [1, 2, 3];

const Noticias = () => (
  <div className="bg-slate-50 text-slate-900">
    <Navbar />

    <header className="relative min-h-[60vh] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img
          src={pompiers}
          alt="Bomberos en acción nocturna"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/90 via-slate-900/80 to-slate-900/90" />
      </div>
      <div className="relative z-10 flex min-h-[60vh] w-full flex-col items-center justify-center gap-4 px-6 text-center text-white">
        <p className="text-xs uppercase tracking-[0.5em] text-white/70">Actualidad</p>
        <h1 className="text-4xl font-black uppercase tracking-[0.25em] sm:text-5xl">Actualidad en Tiempo Real</h1>
        <p className="max-w-3xl text-lg font-medium uppercase tracking-[0.25em] text-white/90">
          Sigue nuestro día a día en @pompefranceconcepcion
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full -mb-1 leading-none">
        <svg className="w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,40 C360,160 720,-40 1440,40 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </header>

    <div className="bg-white px-6 py-12">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
            <a
              href="https://www.instagram.com/pompefranceconcepcion"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-400 px-8 py-4 text-base font-semibold uppercase tracking-[0.3em] text-white shadow-2xl shadow-rose-500/40 transition hover:translate-y-0.5"
            >
              <Instagram className="h-5 w-5" />
              Síguenos en Instagram
            </a>
            <a
              href="https://www.facebook.com/pompefranceconce"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold uppercase tracking-[0.3em] text-white shadow-2xl shadow-blue-900/40 transition hover:bg-blue-500"
            >
              <Facebook className="h-5 w-5" />
              Visita nuestro Fanpage
            </a>
          </div>
        </div>


    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl space-y-12 px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Muro Social</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Cargando actividad reciente...</h2>
        </div>

        <div
          id="social-wall-container"
          className="space-y-10"
        >
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div class="elfsight-app-87e6817d-2b0e-4b62-b57e-ec9ef18f4439" data-elfsight-app-lazy></div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Noticias;
