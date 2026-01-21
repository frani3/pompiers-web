import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import sdis24 from '../assets/sdis24.png';
import grimp from '../assets/grimp.jpg';
import embajada from '../assets/embajada.png';
import SPF from '../assets/Sapeurs_Pompiers_de_France.png';
import pompiers4 from '../assets/pompiers4.avif';
import a1 from '../assets/pompiers10.jpg';

const Alianza = () => (
  <div className="bg-white text-[#0B1120]">
    <Navbar />

    <header className="relative min-h-[60vh] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img
          src={pompiers4}
          alt="Banderas chilena y francesa"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>
      <div className="relative z-10 flex min-h-[60vh] w-full flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">Alianza Internacional</p>
        <h1 className="text-4xl font-black uppercase tracking-[0.25em] text-white sm:text-5xl">Alianza Internacional</h1>
        <p className="max-w-3xl text-lg font-semibold uppercase tracking-[0.25em] text-white/70">
          Hermanamiento con Francia: Jumelage y Cooperación Técnica
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full -mb-1 leading-none">
        <svg className="w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,40 C360,160 720,-40 1440,40 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </header>

    <main>
      <section className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4 text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-blue-600">Jumelage / Hermanamiento (2007)</p>
            <h2 className="text-3xl font-bold text-[#0B1120]">Socios Estratégicos</h2>
            <p className="text-sm text-slate-600">
              El vínculo oficial firmado con el SDIS 24 de Dordogne en 2007 dio paso al intercambio institucional, la llegada de
              voluntarios franceses y visitas técnicas recurrentes a Perigueux. Ese hermanamiento garantizó prácticas compartidas,
              sesiones de entrenamiento conjunto y el refuerzo del espíritu de colaboración franco-chileno.
            </p>
          </div>
          <div className="rounded-[32px] border border-slate-100 bg-white p-4 shadow-[0_25px_65px_rgba(15,23,42,0.12)]">
            <img
              src={a1}
              alt="Firma del acuerdo"
              className="h-80 w-full rounded-[28px] object-cover"
            />
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 rounded-[32px] border border-slate-100 bg-white p-4 shadow-[0_25px_65px_rgba(15,23,42,0.12)] lg:order-1">
            <img
              src={a1}
              alt="Brigada de rescate"
              className="h-80 w-full rounded-[28px] object-cover"
            />
          </div>
          <div className="order-1 space-y-4 text-left lg:order-2">
            <p className="text-xs uppercase tracking-[0.4em] text-blue-600">Formación Técnica y Resultados</p>
            <h2 className="text-3xl font-bold text-[#0B1120]">Operación Alto Río</h2>
            <p className="text-sm text-slate-600">
              A través del CNF GRIMP y SPAI de Lozère, la Compañía Tercera adoptó entrenamientos de Sauvetage Déblaiement y rescate vertical.
              Ese expertise fue clave para el colapso del Edificio Alto Río durante el terremoto del 27F (2010), permitiendo responder con protocolos
              franco-chilenos y salvando numerosas vidas en medio de estructuras inestables.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-red-600">Alianzas</p>
            <h2 className="text-3xl font-bold text-[#0B1120]">Nuestros Aliados Estratégicos</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-0">
            {[
              {
                name: 'Sapeurs-Pompiers 24',
                href: 'https://www.sdis24.fr',
                logo: sdis24
              },
              {
                name: 'GRIMP',
                href: 'https://www.sdis24.fr/nous-connaitre/nos-specialites/',
                logo: grimp
              },
              {
                name: 'Ambassade de France',
                href: 'https://cl.ambafrance.org/',
                logo: embajada
              },
              {
                name: 'Sapeurs-Pompiers de France',
                href: 'https://www.pompiers.fr/',
                logo: SPF
              }
            ].map((ally) => (
              <a
                key={ally.name}
                href={ally.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <img
                  src={ally.logo}
                  alt={ally.name}
                  className="h-20 w-full object-contain transition-transform duration-200 hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);
export default Alianza;