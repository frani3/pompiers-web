import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const honorariosDirectorio = ['Carlos Melo', 'Alejandro Pinto', 'Pablo Sánchez'];
const honorariosCuerpo = ['Eduardo Brito', 'Reinaldo González', 'Mateos Ríos'];
const honorariosCompania = ['Jorge Zuñiga', 'María Seismil', 'Luis Becerra'];
const voluntariosActivos = ['Alexis Alarcón', 'Natalia Muñoz', 'Daniela Naranjo', 'Ricardo Meza', 'Camila Ponce'];

const Organizacion = () => (
  <div className="bg-white text-[#0B1120]">
    <Navbar />

    <header className="relative min-h-[60vh] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1400&q=80"
          alt="Formación de bomberos"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>
      <div className="relative z-10 flex min-h-[60vh] w-full flex-col items-center justify-center gap-4 px-6 text-center text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">Organización Institucional</p>
        <h1 className="text-4xl font-black uppercase tracking-[0.25em] sm:text-5xl">Nuestra Organización</h1>
        <p className="max-w-3xl text-lg font-medium uppercase tracking-[0.25em] text-white/90">
          Estructura de Mando y Cuerpo de Bomberos de Concepción
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full -mb-1 leading-none">
        <svg className="w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,40 C360,160 720,-40 1440,40 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </header>

    <main>
      <section className="bg-slate-50 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-red-600">Oficiales Generales</p>
            <h2 className="text-3xl font-bold text-[#0B1120]">Cuerpo de Bomberos</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Superintendente', name: 'Werner Hohf Cartes' },
              { title: 'Vice-Superintendente', name: 'Wilfred Cox Contreras' },
              { title: 'Secretario Gral', name: 'Carlos Perez Jara' },
              { title: 'Tesorero Gral', name: 'Bernhard Rossner Campos' },
              { title: 'Comandante', name: 'Cristian Cárdenas Aquevedo' },
              { title: '2° Comandante', name: 'Pedro Alvarado' },
              { title: '3° Comandante', name: 'Raúl Bustos' },
              { title: '4° Comandante', name: 'Ignacio Pineda' },
              { title: 'Pro-Secretario', name: 'Felipe Maturana' }
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm border-l-4 border-red-600"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-red-600">{item.title}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#0B1120]">{item.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-red-600">Liderazgo</p>
          <h2 className="text-3xl font-bold text-[#0B1120]">Oficialidad Tercera Compañía</h2>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <article className="flex flex-col items-center gap-4 rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_25px_90px_rgba(15,23,42,0.08)] text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-red-600">Director</p>
            <h3 className="text-2xl font-bold text-[#0B1120]">Jorge Barra Silva</h3>
            <p className="text-sm text-slate-600">Director Honorario: Jorge Alvarado Riquelme</p>
          </article>
          <article className="flex flex-col items-center gap-4 rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_25px_90px_rgba(15,23,42,0.08)] text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-red-600">Capitán</p>
            <h3 className="text-2xl font-bold text-[#0B1120]">Pablo Bastidas Cofre</h3>
            <p className="text-sm text-slate-600">Capitanes Honorarios: Jean-Louis Chadrou y Françoise Colomes</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-red-600">Oficiales Ejecutivos</p>
          <h2 className="text-3xl font-bold text-[#0B1120]">Administrativos y Ejecutivos</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[{ label: 'Secretario', name: 'Carlos Quilape' }, { label: 'Tesorera', name: 'Marjorie Arroyo' }].map((officer) => (
            <article key={officer.label} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-red-600">{officer.label}</p>
              <h4 className="mt-2 text-xl font-semibold text-[#0B1120]">{officer.name}</h4>
            </article>
          ))}
          {[
            { label: 'Tte 1°', name: 'Herman Hold Cruzat' },
            { label: 'Tte 2°', name: 'Braulio Sobarzo Brañas' },
            { label: 'Tte 3°', name: 'Carlos Navarrete Parra' },
            { label: 'Tte 4°', name: 'Matias Mondaca Campos' }
          ].map((officer) => (
            <article key={officer.label} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-red-600">{officer.label}</p>
              <h4 className="mt-2 text-xl font-semibold text-[#0B1120]">{officer.name}</h4>
            </article>
          ))}
          <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-red-600">Ayudante</p>
            <h4 className="mt-2 text-xl font-semibold text-[#0B1120]">Eliseo Cid Saez</h4>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-red-600">Nuestro Capital Humano</p>
          <h2 className="text-3xl font-bold text-[#0B1120]">Grupos Honorarios y Voluntarios</h2>
        </div>
        <div className="mt-10 columns-1 gap-8 md:columns-2 lg:columns-3">
          <div className="mb-6">
            <p className="text-sm font-semibold text-[#0B1120]">Honorarios del Directorio General</p>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-600">
              {honorariosDirectorio.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-sm font-semibold text-[#0B1120]">Honorarios del Cuerpo</p>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-600">
              {honorariosCuerpo.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-sm font-semibold text-[#0B1120]">Honorarios de Compañía</p>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-600">
              {honorariosCompania.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-sm font-semibold text-[#0B1120]">Voluntarios Activos</p>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-600">
              {voluntariosActivos.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="flex flex-col gap-6 rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_25px_90px_rgba(15,23,42,0.08)] text-center">
          <h3 className="text-xl font-semibold text-[#0B1120]">Roles Especiales</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm uppercase tracking-[0.35em] text-red-600">
            <div>
              <p className="text-xs text-slate-500">Relaciones Exteriores</p>
              <p className="text-lg font-bold text-[#0B1120]">Jorge Peña Vera</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Enlace G.R.I.M.P.</p>
              <p className="text-lg font-bold text-[#0B1120]">Gerson González Vásquez</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Organizacion;
