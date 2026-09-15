import React from 'react';

export const HelpFormatsSection: React.FC = () => {
  const formats = [
    {
      id: 'formato-texto',
      icon: 'edit_note',
      bgIcon: 'bg-secondary-container text-secondary',
      title: 'Por Texto',
      description:
        'Puede escribir qué está pasando con sus propias palabras, sin necesidad de usar tecnicismos.',
      tag: 'Directo y sencillo',
    },
    {
      id: 'formato-voz',
      icon: 'mic',
      bgIcon: 'bg-primary-fixed text-primary',
      title: 'Por Notas de Voz',
      description:
        'Puede contar su dificultad hablando por notas de voz tal como si conversara con un amigo o familiar.',
      tag: 'Ideal para hablar con calma',
    },
    {
      id: 'formato-captura',
      icon: 'screenshot_region',
      bgIcon: 'bg-surface-container-high text-primary',
      title: 'Por Captura de Pantalla',
      description:
        'Puede mostrar una captura de dónde quedó bloqueado para recibir una indicación gráfica y precisa.',
      tag: 'Con protección de datos',
    },
  ];

  return (
    <section
      id="formatos-de-ayuda"
      className="w-full bg-surface-container-low py-16 lg:py-24 border-b border-outline-variant/30"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-bold text-sm uppercase tracking-wider text-secondary">
            Sin barreras de comunicación
          </span>
          <h2 className="text-headline-lg text-primary font-bold mt-2">
            Cada persona puede elegir la forma que le resulte más cómoda.
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-3 leading-relaxed">
            Nos adaptamos a las preferencias sensoriales y motoras de cada usuario, facilitando la
            consulta en cualquier momento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {formats.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="bg-surface-container-lowest p-8 rounded-3xl shadow-xs border border-outline-variant/30 flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1 duration-200"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${card.bgIcon} flex items-center justify-center mb-5 shadow-xs`}
              >
                <span className="material-symbols-outlined text-[36px]">{card.icon}</span>
              </div>
              <span className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-1">
                {card.tag}
              </span>
              <h3 className="text-headline-sm text-primary font-bold mb-2.5">{card.title}</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
