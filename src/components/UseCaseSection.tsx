import React, { useState } from 'react';

export const UseCaseSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      title: '1. Duda con un botón confuso',
      desc: 'La plataforma muestra las opciones "Radicar solicitud" y "Consultar estado". Su familiar consulta a Teguío cuál debe presionar.',
      badgeBg: 'bg-surface-container text-primary',
      icon: 'help',
      screenPreview: 'Opciones en pantalla:\n[ Radicar solicitud ]   [ Consultar estado ]\n¿Qué significa "Radicar"?',
    },
    {
      step: 2,
      title: '2. Explicación simple',
      desc: 'Teguío le explica en una frase: "Radicar significa enviar la foto de su orden médica por primera vez. Elija esa opción".',
      badgeBg: 'bg-secondary-container text-secondary',
      icon: 'chat',
      screenPreview: 'Teguío:\n"Radicar significa registrarla por primera vez. Toque el botón azul \'Radicar solicitud\'."',
    },
    {
      step: 3,
      title: '3. Acción directa',
      desc: 'Su familiar selecciona el botón por su propia cuenta, adjunta la foto solicitada y avanza sin tropiezos.',
      badgeBg: 'bg-surface-container text-primary',
      icon: 'touch_app',
      screenPreview: 'Acción del usuario:\n✓ Toca "Radicar solicitud"\n✓ Adjunta foto de orden\n✓ Presiona enviar',
    },
    {
      step: 4,
      title: '4. Proceso finalizado',
      desc: 'Obtiene el número de radicado exitosamente, sintiéndose seguro y capaz de repetirlo el próximo mes.',
      badgeBg: 'bg-primary-fixed text-primary',
      icon: 'task_alt',
      screenPreview: 'Resultado:\nSolicitud exitosa #ORD-98231\n"¡Lo logré yo mismo!"',
    },
  ];

  return (
    <section id="caso-de-uso" className="w-full bg-surface py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <span className="font-bold text-sm uppercase tracking-wider text-secondary">
            Ejemplo práctico
          </span>
          <h2 className="text-headline-lg text-primary font-bold mt-2">
            Por ejemplo: cuando aparece un bloqueo en un trámite importante
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-3 leading-relaxed">
            Caso real: Solicitud o renovación digital de una orden médica en la plataforma de su entidad
            prestadora de salud (EPS).
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              id={`usecase-step-${item.step}`}
              onClick={() => setActiveStep(item.step)}
              className={`bg-surface-container-lowest p-6 rounded-2xl border transition-all cursor-pointer flex flex-col gap-3 ${
                activeStep === item.step
                  ? 'border-secondary ring-2 ring-secondary/20 shadow-md -translate-y-1'
                  : 'border-outline-variant/30 shadow-xs hover:border-outline-variant'
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-10 h-10 rounded-full ${item.badgeBg} flex items-center justify-center font-bold text-base`}
                >
                  {item.step}
                </div>
                <span className="material-symbols-outlined text-outline text-[20px]">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-label-lg font-bold text-primary leading-snug">{item.title}</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Step Detail Interactive Display */}
        <div
          id="usecase-interactive-preview"
          className="mt-6 p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-[24px]">terminal</span>
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                Detalle del paso {activeStep}
              </span>
              <p className="text-sm font-mono text-on-surface whitespace-pre-line mt-0.5">
                {steps[activeStep - 1].screenPreview}
              </p>
            </div>
          </div>
          <div className="flex gap-2 self-end sm:self-auto">
            {steps.map((s) => (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStep(s.step)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                  activeStep === s.step
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {s.step}
              </button>
            ))}
          </div>
        </div>

        {/* Aviso de Alcance Médico */}
        <div
          id="medical-disclaimer-notice"
          className="mt-8 p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex items-center gap-3.5"
        >
          <span className="material-symbols-outlined text-secondary text-[24px] shrink-0">info</span>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            <strong className="text-primary">Aviso de alcance:</strong> Teguío únicamente orienta sobre la
            navegación del proceso digital. No diagnostica, no formula tratamientos ni prescribe
            medicamentos.
          </p>
        </div>
      </div>
    </section>
  );
};
