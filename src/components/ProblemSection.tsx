import React from 'react';
import { EVERYDAY_SITUATIONS } from '../data/content';

export const ProblemSection: React.FC = () => {
  return (
    <section
      id="situaciones-cotidianas"
      className="w-full bg-surface-container-low py-16 border-y border-outline-variant/30"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <span className="font-bold text-sm uppercase tracking-wider text-secondary">
            Situaciones cotidianas
          </span>
          <h2 className="text-headline-lg text-primary font-bold mt-2">
            ¿Le pasa que su familiar lo llama cuando una plataforma cambia?
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-3 leading-relaxed">
            Muchas personas mayores utilizan WhatsApp, bancos, aplicaciones y servicios digitales todos
            los días. El problema aparece cuando algo cambia, surge un registro nuevo o una instrucción no
            es clara.
          </p>
        </div>

        {/* Grid of 6 Situations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVERYDAY_SITUATIONS.map((item, idx) => (
            <div
              key={idx}
              id={`problem-card-${idx + 1}`}
              className="bg-surface-container-lowest p-6 rounded-2xl shadow-xs border border-outline-variant/30 flex flex-col gap-3 transition-all hover:shadow-md hover:border-secondary/30 group"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-secondary-container group-hover:text-secondary transition-colors">
                <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
              </div>
              <h3 className="text-headline-sm text-primary font-semibold">{item.title}</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Banner de Cierre Suave */}
        <div
          id="problem-closing-banner"
          className="mt-10 bg-surface-container p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5 border border-outline-variant/40"
        >
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[26px]">support_agent</span>
          </div>
          <p className="text-headline-sm text-primary font-medium leading-snug">
            En esos momentos, usted termina convirtiéndose en su soporte tecnológico recurrente.
          </p>
        </div>
      </div>
    </section>
  );
};
