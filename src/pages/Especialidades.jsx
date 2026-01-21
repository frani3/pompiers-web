import { Activity, Ambulance, Flame, Shield } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import a1 from '../assets/pompiers10.jpg';
import a2 from '../assets/pompiers3.avif';

const zigzagSections = [
  {
    id: 'incendios',
    title: 'Incendios · Salvadores y Guardia de Propiedad',
    text:
      'Respondemos más de 500 emergencias al año. La Comandancia analiza cada “Llamado” mientras la alarma de incendio moviliza a la tripulación. Ventilamos, forzamos entradas y mantenemos la línea directa con la comunidad para controlar estructuras y frentes forestales.',
    icon: Flame,
    imageAlt: 'Bomberos combatiendo un incendio',
    image: a1,
    imageFirst: false
  },
  {
    id: 'rescate',
    title: 'Rescate Vehicular y Técnico',
    text:
      'Extricación e inmovilización tras colisiones, choques o atropellos definen la respuesta inicial. Dominamos maniobras hidráulicas, estabilización y rescate en alturas. El Servicio de Socorro abre pasos en ascensores, pozos y estructuras colapsadas para llegar a víctimas aisladas.',
    icon: Activity,
    imageAlt: 'Equipo de rescate vehicular',
    image: a1,
    imageFirst: true
  },
  {
    id: 'grimp',
    title: 'Especialidad GRIMP · Intervenciones en medios peligrosos',
    text:
      'Tras 30 años en Francia, el SDIS 24 trajo protocolos a Chile en el año 2000. El Comandante Frédéric Robert lideró la transferencia técnica y hoy mantenemos la alianza viva en rescate vertical y control de terrenos peligrosos.',
    icon: Shield,
    imageAlt: 'Equipo GRIMP en acción vertical',
    image: a1,
    imageFirst: false
  }
];

const grimpLevels = [
  { title: 'IMP-1 · Introducción', detail: '3 días · Marco conceptual y seguridad básica' },
  { title: 'IMP-2 · Operador', detail: '10 días · Maniobras hidráulicas y maniobras complejas' },
  { title: 'IMP-3 · Jefe de Unidad', detail: 'Dirección táctica, toma de decisiones y liderazgo' },
  { title: 'IMP-4 · Asesor Técnico', detail: 'Evaluación de escenarios y adaptación de nuevos métodos' }
];

const Especialidades = () => (
  <div className="bg-white text-[#0B1120]">
    <Navbar />

    <header className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img
          src={a2}
          alt="Bomberos en acción"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>
      <div className="relative z-10 w-full max-w-5xl flex flex-col justify-center items-center gap-4 px-6 py-24 text-center text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">Especialidades</p>
        <h1 className="text-4xl font-black uppercase tracking-[0.25em] sm:text-5xl">Nuestras Especialidades Operativas</h1>
        <p className="max-w-2xl text-lg font-medium uppercase tracking-[0.25em] text-white/90">
          Salvadores y Guardianes: Incendios, Rescate y GRIMP
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full -mb-1 leading-none">
        <svg className="w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,40 C360,160 720,-40 1440,40 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </header>

    <main>
      <section className="mx-auto flex max-w-6xl flex-col gap-14 px-4 py-16">
        {zigzagSections.map((section) => {
          const IconComponent = section.icon;
          const textColumn = (
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-red-600">
                <IconComponent className="h-6 w-6" />
                <span className="text-xs uppercase tracking-[0.4em] text-red-600">Operatividad</span>
              </div>
              <h2 className="text-3xl font-bold text-[#0B1120]">{section.title}</h2>
              <p className="text-base leading-relaxed text-slate-600">{section.text}</p>
            </div>
          );
          const imageColumn = (
            <div className="overflow-hidden rounded-[32px] border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <img src={section.image} alt={section.imageAlt} className="h-full w-full object-cover" />
            </div>
          );

          return (
            <article
              key={section.id}
              className="grid gap-10 rounded-[32px] border border-slate-100 bg-white/90 p-8 shadow-[0_25px_90px_rgba(15,23,42,0.12)] md:grid-cols-2"
            >
              {section.imageFirst ? (
                <>
                  {imageColumn}
                  {textColumn}
                </>
              ) : (
                <>
                  {textColumn}
                  {imageColumn}
                </>
              )}
            </article>
          );
        })}
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
          <div className="space-y-3 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-red-600">Formación especializada</p>
            <h3 className="text-3xl font-bold text-[#0B1120]">Niveles de Certificación GRIMP</h3>
            <p className="text-base text-slate-500">
              Cada nivel profundiza capacidades verticales y de riesgo para garantizar intervenciones seguras en medios peligrosos.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {grimpLevels.map((level) => (
              <article
                key={level.title}
                className="flex flex-col gap-3 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h4 className="text-xl font-bold text-[#0B1120]">{level.title}</h4>
                <p className="text-sm leading-relaxed text-slate-600">{level.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Especialidades;
