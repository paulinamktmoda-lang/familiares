import React from 'react';

export const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="w-full bg-surface py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-bold text-sm uppercase tracking-wider text-secondary">
            Valor compartido
          </span>
          <h2 className="text-headline-lg text-primary font-bold mt-2">
            Un beneficio mutuo para toda la familia.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bloque 1: Adulto Mayor */}
          <div
            id="beneficios-adulto-mayor"
            className="bg-surface-container-low p-8 lg:p-10 rounded-3xl border border-outline-variant/40 flex flex-col justify-between shadow-xs hover:border-secondary/30 transition-colors"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary text-white flex items-center justify-center shadow-xs">
                  <span className="material-symbols-outlined text-[30px]">accessibility_new</span>
                </div>
                <div>
                  <span className="text-[12px] font-bold text-secondary uppercase tracking-wider">
                    Para el Adulto Mayor
                  </span>
                  <h3 className="text-headline-md text-primary font-bold">
                    Más autonomía para su familiar
                  </h3>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span className="text-body-md text-on-surface">
                    <strong>Mayor confianza:</strong> Supera el temor a dañar el teléfono o los programas.
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span className="text-body-md text-on-surface">
                    <strong>Más claridad:</strong> Respuestas breves, respetuosas y sin vocabulario confuso.
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span className="text-body-md text-on-surface">
                    <strong>Menos frustración:</strong> Sin la sensación de ser una carga para otros.
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span className="text-body-md text-on-surface">
                    <strong>Menos desplazamientos:</strong> Resuelve desde casa trámites que antes requerían ir a oficinas.
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span className="text-body-md text-on-surface">
                    <strong>Aprendizaje duradero:</strong> Capacidad real para seguir haciéndolo por sí mismo.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bloque 2: Familia */}
          <div
            id="beneficios-familia"
            className="bg-surface-container-low p-8 lg:p-10 rounded-3xl border border-outline-variant/40 flex flex-col justify-between shadow-xs hover:border-primary/30 transition-colors"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xs">
                  <span className="material-symbols-outlined text-[30px]">family_restroom</span>
                </div>
                <div>
                  <span className="text-[12px] font-bold text-primary uppercase tracking-wider">
                    Para la Familia
                  </span>
                  <h3 className="text-headline-md text-primary font-bold">
                    Más tranquilidad para usted
                  </h3>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-primary text-[22px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span className="text-body-md text-on-surface">
                    <strong>Menos interrupciones:</strong> Menor frecuencia de llamadas de emergencia en horario laboral.
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-primary text-[22px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span className="text-body-md text-on-surface">
                    <strong>Sin sustitución:</strong> Evita la necesidad de hacerse cargo del trámite por completo.
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-primary text-[22px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span className="text-body-md text-on-surface">
                    <strong>Disponibilidad continua:</strong> Tranquilidad sabiendo que tienen orientación cuando usted no está libre.
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-primary text-[22px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span className="text-body-md text-on-surface">
                    <strong>Acompañamiento positivo:</strong> Fomenta la dignidad, autoestima y alegría de su ser querido.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cita Destacada */}
        <div
          id="quote-acompanar"
          className="mt-12 p-8 bg-surface-container rounded-3xl text-center max-w-3xl mx-auto border border-outline-variant/30"
        >
          <span className="material-symbols-outlined text-secondary text-[40px] mb-2 inline-block">
            format_quote
          </span>
          <blockquote className="text-headline-md text-primary italic font-semibold leading-snug">
            “Acompañar también puede significar ayudarle a seguir haciéndolo por sí mismo.”
          </blockquote>
        </div>
      </div>
    </section>
  );
};
