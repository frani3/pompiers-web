import { Check, ClipboardList, Copy, Smartphone } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import pompiers from '../assets/pompiers.avif';

const Ayudanos = () => {
  const [copied, setCopied] = useState({ account: false, rut: false, all: false });

  const datosBancarios = `
Nombre: Tercera Compañía de Bomberos
RUT: 70.123.456-7
Banco: Banco Estado
Tipo de Cuenta: Cuenta Corriente
N° de Cuenta: 123456789
Correo: tesoreria@terceraconcepcion.cl
`.trim();

  const handleCopy = (value, key) => {
    if (!navigator?.clipboard) {
      return;
    }

    navigator.clipboard.writeText(value).then(() => {
      setCopied((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => setCopied((prev) => ({ ...prev, [key]: false })), 2000);
    });
  };

  const whatsappNumber = '569XXXXXXXX';
  const whatsappMessage = encodeURIComponent(
    'Hola, adjunto comprobante de donación para la Tercera.'
  );

  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />

      <header className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0">
          <img
            src={pompiers}
            alt="Bomberos colaborando"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative z-10 space-y-4 px-6 text-white">
          <p className="text-xs uppercase tracking-[0.6em] text-white/70">Donaciones</p>
          <h1 className="text-4xl font-black sm:text-5xl">TU APORTE SALVA VIDAS</h1>
          <p className="max-w-3xl text-lg text-white/80">
            AYÚDANOS A MANTENER NUESTRO SERVICIO Y EQUIPAMIENTO
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="-mb-1 block w-full text-white" preserveAspectRatio="none">
            <path d="M0,40 C360,160 720,-40 1440,40 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>
      </header>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-gray-50 p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-slate-500">Datos bancarios</p>
                <h2 className="text-3xl font-semibold text-slate-900">Copia y dona en un instante</h2>
              </div>
                <button
                  type="button"
                  onClick={() => {
                    if (!navigator?.clipboard) return;
                    navigator.clipboard.writeText(datosBancarios).then(() => {
                      setCopied((prev) => ({ ...prev, all: true }));
                      setTimeout(() => setCopied((prev) => ({ ...prev, all: false })), 2000);
                    });
                  }}
                  className="w-full rounded-2xl bg-slate-900 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-slate-900/30 transition hover:bg-slate-800"
                >
                  <span className="flex items-center justify-center gap-2">
                    <ClipboardList className="h-4 w-4" />
                    {copied.all ? '¡Datos copiados!' : 'Copiar Todos los Datos'}
                  </span>
                </button>
                {copied.all && (
                  <p className="text-xs text-emerald-600">¡Datos copiados! Pégalos en tu App del Banco.</p>
                )}
              <div className="space-y-4 text-slate-700">
                <p className="text-sm text-slate-500">Banco</p>
                <p className="text-lg font-semibold text-slate-900">Banco Estado</p>
                <p className="text-sm text-slate-500">Tipo de cuenta</p>
                <p className="text-lg font-semibold text-slate-900">Cuenta Corriente</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Número</p>
                    <p className="text-xl font-semibold text-slate-900">123456789</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('123456789', 'account')}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 transition hover:border-slate-400"
                  >
                    {copied.account ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-500" />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">RUT</p>
                    <p className="text-xl font-semibold text-slate-900">70.123.456-7</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('70.123.456-7', 'rut')}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 transition hover:border-slate-400"
                  >
                    {copied.rut ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-500" />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="space-y-1 rounded-2xl border border-slate-200 bg-white px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Correo de tesorería</p>
                  <p className="text-lg font-semibold text-slate-900">tesoreria@terceraconcepcion.cl</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-slate-500">¿Ya realizaste la transferencia?</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Envíanos el comprobante por WhatsApp</h2>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-[#25D366] px-8 py-4 text-base font-semibold uppercase tracking-[0.3em] text-white shadow-2xl shadow-emerald-500/40 transition hover:bg-[#128C7E] sm:w-auto"
          >
            <Smartphone className="h-5 w-5" />
            Enviar Comprobante por WhatsApp
          </a>
          <p className="mt-4 text-sm text-slate-500">
            Nos leeremos en unos segundos y te daremos las indicaciones para seguir apoyando al Cuerpo de Bomberos.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ayudanos;
