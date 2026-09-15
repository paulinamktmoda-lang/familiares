import React from 'react';

export const SeniorSection: React.FC = () => {
  const scrollToPilot = () => {
    const el = document.getElementById('prueba-piloto');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="para-quien-es" className="w-full bg-surface-container-low py-16 border-y border-outline-variant/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          id="senior-callout-card"
          className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-xs border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container text-primary mb-4 border border-outline-variant/30">
              <span className="material-symbols-outlined text-[18px]">smartphone</span>
              <span className="font-bold text-xs uppercase tracking-wider">Uso personal</span>
            </div>
            <h2 className="text-headline-lg text-primary font-bold mb-3">
              ¿Está buscando ayuda para usted?
            </h2>
            <p className="text-body-xl text-on-surface-variant leading-relaxed">
              Si utiliza su celular y normalmente puede realizar sus procesos digitales, pero a veces
              encuentra una pantalla o un paso que no comprende, Teguío busca ayudarle a continuar por
              usted mismo, a su propio ritmo y sin prisas.
            </p>
          </div>
          <button
            id="senior-cta-button"
            onClick={scrollToPilot}
            className="min-h-[56px] px-8 bg-surface-container-highest text-primary font-bold text-label-lg rounded-xl hover:bg-surface-container-high transition-colors inline-flex items-center justify-center gap-2 shrink-0 text-center shadow-xs active:scale-95"
          >
            <span>Quiero probar Teguío</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};
