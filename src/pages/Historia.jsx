import { Activity, Award, Flag, Scroll } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import pompiers4 from '../assets/pompiers4.avif';
import heroHistoria from '../assets/antg.jpg';
import cuartel from '../assets/cuartel_ant.png';
import pompiers10 from '../assets/pompiers10.jpg';
import fundadorPortrait from '../assets/fun_guillermo_paschen_wernick.avif';
import fotoCapitanVilchez from '../assets/cap_manuel_vilches_vasquez.avif';
import fotoCapitanCarcamo from '../assets/cap_enrique_carcamo.avif';

const timelineSections = [
  {
    id: 'fundacion',
    title: 'La Fundación (1888)',
    year: '1888',
    text:
      'Tras el incendio que destruyó varios barrios de Concepción, Guillermo Paschen Wernick convocó a la juventud en el Café La Bolsa y publicó un llamado en El Sur. La necesidad de defender hogares y comercios se concretó dos días después con la "Compañía de Salvadores y Guardia de Propiedad".',
    detail:
      'Paschen, voluntario con experiencia en Santiago, reunió a más de veinte vecinos dispuestos a patrullar la ciudad con disciplina, formación militar y profundo sentido del deber. Fueron los primeros salvadores que combinaron coraje con técnicas rudimentarias de rescate.',
    Icon: Scroll,
    portrait: fundadorPortrait,
    portraitCaption: 'Fundador Guillermo Paschen Wernick'
  },
  {
    id: 'renacer',
    title: 'Crisis y Renacer (1904)',
    year: '1904',
    text:
      'La compañía se disolvió temporalmente en 1890 por falta de recursos, pero el 6 de diciembre de 1904 se reorganizó bajo el lema Constancia y Disciplina.',
    detail:
      'Eugene Castaing impulsó la sección sanitaria y protocolos de primeros auxilios. Gracias a él se incorporaron técnicas modernas y se consolidó una ética de servicio centrada en la protección de vidas.',
    Icon: Award,
    image: cuartel
  },
  {
    id: 'herencia',
    title: 'La Herencia Francesa (Sapeurs-Pompiers)',
    year: '1910s',
    text:
      'Llegaron carros Berliet y Renault, fruto de los lazos con Francia, y José Reyes Bustos asumió la gestión técnica.',
    detail:
      'El hermanamiento (Jumelage) con el SDIS 24 consolidó la identidad Sapeurs-Pompiers Concepción au Chili. Cada curso reforzó especialidades verticales y de rescate urbano, y la compañía adoptó una tradición bicultural de excelencia.',
    Icon: Flag,
    image: pompiers4
  }
];

const martyrs = [
  {
    name: 'Capitán Manuel Vilchez Vásquez',
    year: '1937',
    description:
      'Primer mártir del Cuerpo de Bomberos de Concepción. Falleció en acto de servicio tras una colisión del carro bomba en Las Heras con Caupolicán, mientras regresaba de una emergencia.',
    photo: fotoCapitanVilchez
  },
  {
    name: 'Capitán Enrique Cárcamo Contreras',
    year: '1949',
    description:
      'Murió heroicamente en el incendio de Modas Laco y el Colegio de los Padres Franceses, intentando rescatar al dueño del local que volvió a entrar entre las llamas.',
    photo: fotoCapitanCarcamo
  }
];

const Historia = () => (
  <div className="bg-white text-[#0B1120]">
    <Navbar />

    <header className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img
          src={heroHistoria}
          alt="Hero historia"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>
      <div className="relative z-10 w-full max-w-6xl flex flex-col justify-center items-center gap-4 px-6 py-24 text-center text-white">
        <p className="text-xs uppercase tracking-[0.5em] text-white/70">Historia · Tercera Compañía</p>
        <h1 className="text-4xl font-black uppercase tracking-[0.25em] sm:text-5xl">Nuestra Historia</h1>
        <p className="text-lg font-semibold uppercase tracking-[0.3em] text-white/90">131 Años de Tradición</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full -mb-1 leading-none">
        <svg className="-mb-1 w-full h-auto fill-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,40 C360,160 720,-40 1440,40 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </header>

    <main className="bg-white">
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16">
        {timelineSections.map((section, index) => {
          const isReversed = index % 2 === 1;
          const IconComponent = section.Icon;
          const isFounder = section.id === 'fundacion';
          const imageColumnClass = `relative ${isFounder ? 'flex flex-col items-center justify-center gap-5' : ''} ${isReversed ? 'md:order-1' : ''}`.trim();

          return (
            <article
              key={section.id}
              className="grid gap-10 rounded-[32px] border border-slate-100 bg-white/90 p-8 shadow-[0_25px_90px_rgba(15,23,42,0.12)] md:grid-cols-2 md:items-center"
            >
              <div className={`space-y-5 ${isReversed ? 'md:order-2' : ''}`}>
                <div className="flex items-center gap-3 text-red-600">
                  {IconComponent && <IconComponent className="h-5 w-5" />}
                  <span className="text-xs uppercase tracking-[0.4em] text-red-600">{section.year}</span>
                </div>
                <h3 className="text-3xl font-bold text-[#0B1120]">{section.title}</h3>
                <p className="text-base leading-relaxed text-slate-600">{section.text}</p>
                <p className="text-sm leading-relaxed text-slate-500">{section.detail}</p>
              </div>

              <div className={imageColumnClass}>
                {section.portrait ? (
                  isFounder ? (
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div className="max-w-[250px] overflow-hidden rounded-lg border-4 border-white/50 shadow-md">
                        <img
                          src={section.portrait}
                          alt={section.portraitCaption || section.title}
                          className="h-auto w-auto block object-cover"
                        />
                      </div>
                      {section.portraitCaption && (
                        <span className="text-xs uppercase tracking-[0.3em] text-slate-700">
                          {section.portraitCaption}
                        </span>
                      )}
                    </div>
                  ) : (
                    <figure className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-900/5">
                      <img src={section.portrait} alt={section.portraitCaption || section.title} className="h-full w-full object-cover" />
                      {section.portraitCaption && (
                        <figcaption className="bg-white/90 px-4 py-3 text-xs uppercase tracking-[0.3em] text-slate-700">
                          {section.portraitCaption}
                        </figcaption>
                      )}
                    </figure>
                  )
                ) : section.image ? (
                  <div className="overflow-hidden rounded-[32px]">
                    <img src={section.image} alt={section.title} className="h-full w-full object-cover" />
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
          <div className="space-y-2 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-red-600">Honor y memoria</p>
            <h3 className="text-3xl font-bold text-[#0B1120]">Nuestros Héroes y Mártires</h3>
            <p className="text-sm text-slate-500">Recordamos a quienes lo dieron todo en servicio de la comunidad.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {martyrs.map((martyr) => (
              <article
                key={martyr.name}
                className="flex flex-col items-center gap-4 rounded-[28px] bg-white/80 p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
              >
                <div className="h-32 w-32 overflow-hidden rounded-full shadow-lg">
                  <img src={martyr.photo} alt={martyr.name} className="h-full w-full object-cover" />
                </div>
                <p className="text-xs uppercase tracking-[0.4em] text-red-600">{martyr.year}</p>
                <h4 className="text-2xl font-bold text-[#0B1120]">{martyr.name}</h4>
                <p className="text-base leading-relaxed text-slate-600">{martyr.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20">
        <article className="grid gap-8 rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] md:grid-cols-2">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-red-600">
              <Activity className="h-6 w-6" />
              <span className="text-xs uppercase tracking-[0.5em] text-red-600">2010 - presente</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight text-[#0B1120] md:text-4xl">Resiliencia y Futuro</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              El terremoto del 27F derribó el cuartel de Las Heras. El nuevo espacio honra a los caídos y abraza los protocolos franceses en GRIMP y Rescate Vehicular.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              Hoy lideramos rescates en estructuras colapsadas y escenas vehiculares complejas, aplicando disciplina y técnica avanzadas para seguir siendo referencia nacional.
            </p>
          </div>
          <div className="overflow-hidden rounded-[32px]">
            <img src={pompiers10} alt="Rescate moderno" className="h-full w-full object-cover" />
          </div>
        </article>
      </section>
    </main>

    <Footer />
  </div>
);

export default Historia;
