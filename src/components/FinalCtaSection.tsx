import React from 'react';

export const FinalCtaSection: React.FC = () => {
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
    <section
      id="cta-final"
      className="w-full bg-surface-container py-16 lg:py-24 text-center border-t border-outline-variant/30"
    >
      <div className="max-w-[800px] mx-auto px-6 flex flex-col items-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md">
          <span className="material-symbols-outlined text-[32px]">favorite</span>
        </div>

        <h2 className="text-headline-xl text-primary font-bold tracking-tight leading-tight">
          Ayúdele a seguir haciéndolo por sí mismo.
        </h2>

        <p className="text-body-xl text-on-surface-variant max-w-xl leading-relaxed">
          Teguío le ofrece orientación cuando aparece un bloqueo, para que su familiar pueda comprender
          el siguiente paso y continuar.
        </p>

        <button
          id="final-cta-btn"
          onClick={scrollToPilot}
          className="inline-flex items-center justify-center min-h-[60px] px-10 bg-primary text-white font-bold text-label-lg rounded-xl shadow-lg hover:bg-primary-container transition-all gap-2 text-center mt-2 active:scale-95"
        >
          <span>Quiero probar Teguío con mi familiar</span>
          <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
        </button>

        <p className="text-headline-sm text-secondary font-bold tracking-tight mt-3 italic">
          “Te orientamos, tú continúas.”
        </p>
      </div>
    </section>
  );
};
