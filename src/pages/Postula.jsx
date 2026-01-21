import { CheckCircle2, Smartphone } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import pompiers2 from '../assets/pompiers2.avif';

const requisitos = [
  '18 años (o 17 con autorización notarial)',
  'Salud compatible con la función bomberil',
  'Antecedentes penales limpios',
  'Actualmente estudiando o trabajando',
  'Residencia en Concepción'
];

const Postula = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ocupacion, setOcupacion] = useState('');

  const handlePostulacion = (event) => {
    event.preventDefault();
    const mensaje = `Hola, mi nombre es ${nombre || '_____'}; tengo ${edad || '____'} años. Vivo en ${direccion || '_____'} y soy ${ocupacion || '_____'}; quisiera postular a la Tercera Compañía.`;
    const whatsappNumber = '569XXXXXXXX'; // reemplaza XXXXXXXXX con el número real de contacto
    const encoded = encodeURIComponent(mensaje);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank', 'noreferrer');
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />

      <header className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0">
          <img
            src={pompiers2}
            alt="Bomberos en formación"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative z-10 space-y-4 px-6 text-white">
          <p className="text-xs uppercase tracking-[0.6em] text-white/70">Postula</p>
          <h1 className="text-4xl font-black sm:text-5xl">ÚNETE A LA TERCERA</h1>
          <p className="max-w-3xl text-lg text-white/80">130 AÑOS DE HISTORIA TE ESPERAN</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="-mb-1 block w-full text-white" preserveAspectRatio="none">
            <path d="M0,40 C360,160 720,-40 1440,40 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>
      </header>

      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/khBIJWeljn8"
                title="Video motivacional Tercera Compañía"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.5em] text-slate-500">Requisitos básicos</p>
              <h2 className="text-3xl font-semibold text-slate-900">¿Tienes lo necesario para servir?</h2>
              <p className="text-lg text-slate-600">
                Prepara tu postulación con honestidad y compromiso. La Tercera busca personas que estén dispuestas a entrenar, aprender y responder cuando la comunidad los necesita.
              </p>
            </div>
            <div className="grid gap-6 rounded-3xl bg-white p-8 shadow-lg">
              {requisitos.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 text-sky-600" />
                  <p className="text-base font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6">
          <div className="space-y-2 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-slate-500">Formulario generador de WhatsApp</p>
            <h2 className="text-3xl font-semibold text-slate-900">Envía tu postulación en segundos</h2>
          </div>
          <form
            onSubmit={handlePostulacion}
            className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col text-sm font-semibold text-slate-600">
                Nombre completo
                <input
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                  type="text"
                  placeholder="Ej. María Valdés"
                  className="mt-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </label>
              <label className="flex flex-col text-sm font-semibold text-slate-600">
                Edad
                <input
                  value={edad}
                  onChange={(event) => setEdad(event.target.value)}
                  type="number"
                  placeholder="Ej. 21"
                  className="mt-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
              </label>
            </div>
            <label className="flex flex-col text-sm font-semibold text-slate-600">
              Dirección / Sector de residencia
              <input
                value={direccion}
                onChange={(event) => setDireccion(event.target.value)}
                type="text"
                placeholder="Ej. Barrio Concepción"
                className="mt-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </label>
            <label className="flex flex-col text-sm font-semibold text-slate-600">
              Ocupación
              <input
                value={ocupacion}
                onChange={(event) => setOcupacion(event.target.value)}
                type="text"
                placeholder="Ej. Estudiante/Técnico"
                className="mt-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 rounded-3xl bg-[#25D366] px-6 py-4 text-base font-semibold uppercase tracking-[0.3em] text-white shadow-2xl shadow-emerald-500/40 transition hover:bg-[#128C7E]"
            >
              <Smartphone className="h-5 w-5" />
              Enviar Postulación por WhatsApp
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Postula;
