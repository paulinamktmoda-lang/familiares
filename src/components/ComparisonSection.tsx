import React from 'react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparativa" className="w-full bg-surface py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <span className="font-bold text-sm uppercase tracking-wider text-secondary">
            El dilema del acompañamiento
          </span>
          <h2 className="text-headline-lg text-primary font-bold mt-2">
            Usted quiere ayudar. Pero también quiere que siga siendo independiente.
          </h2>
          <p className="text-body-xl text-on-surface-variant mt-3 leading-relaxed">
            Ayudar resolviendo cada trámite puede solucionar el problema inmediato, pero también puede
            aumentar la dependencia. Hay otra posibilidad: orientarle para que pueda continuar por sí
            mismo.
          </p>
        </div>

        {/* 2-Column Visual Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Column HOY */}
          <div
            id="comparison-column-today"
            className="bg-surface-container-low rounded-3xl p-7 lg:p-9 flex flex-col justify-between border border-outline-variant/40 relative shadow-xs"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-highest text-on-surface-variant mb-6 font-bold text-xs uppercase tracking-wide">
                <span className="material-symbols-outlined text-[18px]">history</span>
                <span>El ciclo actual</span>
              </div>
              <h3 className="text-headline-md text-primary font-bold mb-6">
                Hoy: Resolución por sustitución
              </h3>

              {/* Flow steps */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                  <span className="material-symbols-outlined text-outline">error</span>
                  <span className="text-[15px] font-semibold text-on-surface">
                    Se bloquea en la pantalla
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">arrow_downward</span>
                </div>
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                  <span className="material-symbols-outlined text-outline">phone_in_talk</span>
                  <span className="text-[15px] font-semibold text-on-surface">
                    Llama al familiar con urgencia
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">arrow_downward</span>
                </div>
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                  <span className="material-symbols-outlined text-outline">desktop_access_disabled</span>
                  <span className="text-[15px] font-semibold text-on-surface">
                    El familiar hace el trámite por él
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline">arrow_downward</span>
                </div>
                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary-fixed-dim/40 shadow-xs">
                  <span className="material-symbols-outlined text-tertiary-container text-[24px]">
                    sync_problem
                  </span>
                  <span className="text-[15px] font-bold">
                    El adulto mayor depende nuevamente la próxima vez
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-outline-variant/30">
              <p className="text-[14px] text-on-surface-variant">
                <strong>Resultado:</strong> Frustración en ambas partes, pérdida gradual de confianza
                tecnológica del adulto mayor.
              </p>
            </div>
          </div>

          {/* Column CON TEGUÍO */}
          <div
            id="comparison-column-teguio"
            className="bg-secondary-container/20 rounded-3xl p-7 lg:p-9 flex flex-col justify-between border-2 border-secondary/30 relative shadow-md"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary text-white mb-6 font-bold text-xs uppercase tracking-wide shadow-xs">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>El camino Teguío</span>
              </div>
              <h3 className="text-headline-md text-primary font-bold mb-6">
                Con Teguío: Orientación para la autonomía
              </h3>

              {/* Flow steps */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-container-lowest shadow-xs border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary">help_center</span>
                  <span className="text-[15px] font-semibold text-primary">
                    Se bloquea en la pantalla
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary font-bold">
                    arrow_downward
                  </span>
                </div>
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-container-lowest shadow-xs border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary">question_answer</span>
                  <span className="text-[15px] font-semibold text-primary">
                    Pide orientación fácil a Teguío
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary font-bold">
                    arrow_downward
                  </span>
                </div>
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-container-lowest shadow-xs border border-secondary/20">
                  <span className="material-symbols-outlined text-secondary">lightbulb</span>
                  <span className="text-[15px] font-semibold text-primary">
                    Comprende con claridad el siguiente paso
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary font-bold">
                    arrow_downward
                  </span>
                </div>
                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-secondary text-white shadow-md">
                  <span className="material-symbols-outlined text-white text-[24px]">
                    check_circle
                  </span>
                  <span className="text-[15px] font-bold">
                    Continúa y concluye por sí mismo
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-secondary/20">
              <p className="text-[14px] text-on-secondary-container font-semibold">
                <strong>Resultado:</strong> Tranquilidad para la familia y fortalecimiento genuino de la
                confianza digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
