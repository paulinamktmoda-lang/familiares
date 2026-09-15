import React from 'react';
import { BRAND_ASSETS } from '../data/content';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
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
      id="hero-section"
      className="relative w-full overflow-hidden bg-surface py-12 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5">
          {/* Validation Stage Badge */}
          <div
            id="hero-badge"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container font-semibold text-sm shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            <span>Solución en etapa de validación con familias</span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-headline"
            className="text-headline-xl text-primary font-bold tracking-tight leading-tight text-balance"
          >
            Que pedirle ayuda no signifique dejar de hacerlo por sí mismo.
          </h1>

          {/* Subheadline */}
          <p
            id="hero-subheadline"
            className="text-body-xl text-on-surface-variant max-w-xl leading-relaxed"
          >
            Teguío orienta a su familiar cuando se bloquea en un proceso digital, para que pueda
            comprender el siguiente paso y continuar con mayor autonomía.
          </p>

          {/* Slogan Visual Callout */}
          <div
            id="hero-slogan-box"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-container-high border border-outline-variant/30 text-primary shadow-xs"
          >
            <span className="material-symbols-outlined text-secondary text-[24px]">explore</span>
            <span className="text-headline-sm font-bold tracking-tight italic">
              “Te orientamos, tú continúas.”
            </span>
          </div>

          {/* Action CTAs */}
          <div
            id="hero-cta-actions"
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full pt-2"
          >
            <button
              id="hero-cta-pilot"
              onClick={() => scrollTo('prueba-piloto')}
              className="inline-flex items-center justify-center min-h-[56px] px-8 bg-primary text-white font-semibold text-[17px] rounded-xl shadow-md hover:bg-primary-container transition-all gap-2 text-center active:scale-95"
            >
              <span>Quiero probar Teguío con mi familiar</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>

            <button
              id="hero-cta-how-it-works"
              onClick={() => scrollTo('como-funciona')}
              className="inline-flex items-center justify-center min-h-[56px] px-6 bg-surface-container-highest text-primary font-semibold text-[17px] rounded-xl hover:bg-surface-container-high transition-colors gap-2 text-center"
            >
              <span className="material-symbols-outlined text-[22px] text-secondary">play_circle</span>
              <span>Ver cómo funciona</span>
            </button>
          </div>
        </div>

        {/* Image Column with Floating Stat Card */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div
            id="hero-image-container"
            className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container border border-outline-variant/30"
          >
            <img
              id="hero-main-image"
              alt="Mujer adulta mayor sentada cómodamente en su sala, sonriendo con serenidad mientras usa su teléfono móvil de forma independiente"
              className="w-full h-auto object-cover max-h-[540px]"
              src={BRAND_ASSETS.heroImage}
              loading="eager"
            />
          </div>

          {/* Floating Testimonial / Stat Card */}
          <div
            id="hero-stat-card"
            className="absolute -bottom-6 -left-4 sm:left-4 right-4 sm:right-auto sm:max-w-xs bg-surface-container-lowest p-5 rounded-2xl shadow-xl border border-outline-variant/40 flex items-start gap-3.5 backdrop-blur-md"
          >
            <div className="w-11 h-11 rounded-full bg-secondary-container text-secondary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">psychology</span>
            </div>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-wider text-secondary">
                Autonomía verificada
              </p>
              <p className="text-[15px] leading-snug text-on-surface font-semibold mt-1">
                9 de cada 10 adultos mayores prefieren aprender a continuar antes que delegar su trámite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
