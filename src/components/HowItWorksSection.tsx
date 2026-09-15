import React from 'react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '1',
      badgeClass: 'bg-primary text-white',
      title: 'Nos muestra dónde se bloqueó',
      description:
        'Puede escribir lo que lee, enviar una nota de voz explicando su duda o simplemente compartir una foto o captura de la pantalla.',
      icon: 'touch_app',
    },
    {
      step: '2',
      badgeClass: 'bg-secondary text-white',
      title: 'Teguío explica qué está pasando',
      description:
        'En lenguaje cálido, sin tecnicismos y con frases cortas, le orientamos exactamente sobre qué significa la pantalla y qué botón pulsar.',
      icon: 'record_voice_over',
    },
    {
      step: '3',
      badgeClass: 'bg-primary-container text-white',
      title: 'Su familiar continúa',
      description:
        'El usuario realiza personalmente la acción en su dispositivo. Mantiene su privacidad, aprende y experimenta la satisfacción de lograrlo.',
      icon: 'task_alt',
    },
  ];

  return (
    <section
      id="como-funciona"
      className="w-full bg-surface-container-low py-16 lg:py-24 border-y border-outline-variant/30"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-bold text-sm uppercase tracking-wider text-secondary">
            Proceso simplificado
          </span>
          <h2 className="text-headline-lg text-primary font-bold mt-2">
            Una orientación justo cuando la necesita.
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-3 leading-relaxed">
            Teguío no hace el trámite por la persona. Le ayuda a entender cómo continuar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              id={`how-it-works-step-${item.step}`}
              className="bg-surface-container-lowest rounded-3xl p-8 shadow-xs border border-outline-variant/30 flex flex-col items-start gap-4 transition-all hover:shadow-md hover:-translate-y-1 duration-200 group"
            >
              <div className="flex items-center justify-between w-full">
                <div
                  className={`w-14 h-14 rounded-2xl ${item.badgeClass} flex items-center justify-center font-bold text-2xl shadow-sm`}
                >
                  {item.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
              </div>

              <span className="font-bold text-xs uppercase tracking-wider text-secondary">
                Paso {item.step}
              </span>
              <h3 className="text-headline-sm text-primary font-bold">{item.title}</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
