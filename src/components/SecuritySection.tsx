import React, { useState } from 'react';

export const SecuritySection: React.FC = () => {
  const [showMaskDemo, setShowMaskDemo] = useState(false);

  return (
    <section
      id="seguridad"
      className="w-full bg-surface-container-low py-16 lg:py-24 border-y border-outline-variant/30"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-sm border border-outline-variant/40">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-secondary-container text-secondary flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-[32px]">shield</span>
            </div>
            <div>
              <span className="text-[12px] font-bold text-secondary uppercase tracking-wider">
                Privacidad y Protección
              </span>
              <h2 className="text-headline-lg text-primary font-bold">
                Orientar también significa proteger.
              </h2>
            </div>
          </div>

          <p className="text-body-lg text-on-surface-variant max-w-3xl mb-10 leading-relaxed">
            La seguridad de su familiar es nuestra máxima prioridad. Teguío está diseñado con límites
            estrictos para prevenir riesgos de ciberseguridad y proteger los datos personales.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pilar 1 */}
            <div
              id="security-pillar-1"
              className="p-6 rounded-2xl bg-surface-container-low flex flex-col gap-3 border border-outline-variant/30"
            >
              <div className="flex items-center gap-2.5 text-error">
                <span className="material-symbols-outlined text-[24px]">block</span>
                <span className="text-label-lg font-bold">Lo que NUNCA pediremos</span>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Teguío jamás solicitará contraseñas, claves bancarias, números PIN, códigos SMS de
                verificación (OTP) ni datos sensibles innecesarios.
              </p>
            </div>

            {/* Pilar 2 */}
            <div
              id="security-pillar-2"
              className="p-6 rounded-2xl bg-surface-container-low flex flex-col gap-3 border border-outline-variant/30"
            >
              <div className="flex items-center gap-2.5 text-secondary">
                <span className="material-symbols-outlined text-[24px]">visibility_off</span>
                <span className="text-label-lg font-bold">Protección en capturas</span>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Antes de enviar una captura de pantalla, el sistema orienta activamente al usuario para
                tapar u ocultar cualquier información personal confidencial.
              </p>
              <button
                type="button"
                onClick={() => setShowMaskDemo(!showMaskDemo)}
                className="mt-2 text-[13px] font-bold text-secondary hover:underline flex items-center gap-1 w-fit"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {showMaskDemo ? 'expand_less' : 'visibility'}
                </span>
                <span>{showMaskDemo ? 'Ocultar demostración' : 'Ver ejemplo de protección'}</span>
              </button>
            </div>

            {/* Pilar 3 */}
            <div
              id="security-pillar-3"
              className="p-6 rounded-2xl bg-surface-container-low flex flex-col gap-3 border border-outline-variant/30"
            >
              <div className="flex items-center gap-2.5 text-primary">
                <span className="material-symbols-outlined text-[24px]">balance</span>
                <span className="text-label-lg font-bold">Límites éticos claros</span>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                No tomamos decisiones médicas, financieras ni legales, ni realizamos transacciones o pagos
                en nombre de la persona.
              </p>
            </div>
          </div>

          {/* Interactive Screenshot Privacy Demonstration Drawer */}
          {showMaskDemo && (
            <div
              id="screenshot-protection-demo"
              className="mt-8 p-6 bg-surface-container rounded-2xl border border-secondary/30 animate-in fade-in duration-200"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 text-secondary font-bold text-sm">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                  <span>Demostración de Enmascaramiento Preventivo</span>
                </div>
                <span className="text-xs text-on-surface-variant bg-surface-container-lowest px-3 py-1 rounded-full border border-outline-variant/40">
                  Teguío le avisa antes de enviar
                </span>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 text-sm grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-red-50/50 rounded-lg border border-red-200">
                  <span className="text-red-700 font-bold block mb-1">
                    ⚠️ Pantalla original con datos personales:
                  </span>
                  <div className="text-xs font-mono text-gray-700 bg-white p-2.5 rounded border border-gray-200 space-y-1">
                    <div>Titular: María Elena Gómez</div>
                    <div>Cédula: 41.890.321</div>
                    <div className="text-red-600 font-bold bg-red-100 p-0.5 rounded">
                      Saldo disponible: $2.450.000 (Dato sensible)
                    </div>
                    <div>Botón a consultar: [Descargar Extracto]</div>
                  </div>
                </div>
                <div className="p-3 bg-teal-50/50 rounded-lg border border-teal-200">
                  <span className="text-secondary font-bold block mb-1">
                    ✓ Como Teguío le pide compartirla:
                  </span>
                  <div className="text-xs font-mono text-gray-700 bg-white p-2.5 rounded border border-gray-200 space-y-1">
                    <div>Titular: María Elena Gómez</div>
                    <div>Cédula: •••••••••• (Oculto)</div>
                    <div className="text-teal-700 font-bold bg-secondary-container/40 p-0.5 rounded">
                      Saldo: [TAPE ESTA ZONA CON EL DEDO]
                    </div>
                    <div className="border-2 border-secondary p-0.5 rounded font-bold text-primary">
                      Botón a consultar: [Descargar Extracto] ← Solo necesitamos ver esto
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
