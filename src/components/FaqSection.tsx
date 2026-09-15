import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('todas');

  const toggleFaq = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === 'todas' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="faq"
      className="w-full bg-surface-container-low py-16 lg:py-24 border-y border-outline-variant/30"
    >
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-bold text-sm uppercase tracking-wider text-secondary">
            Claridad total
          </span>
          <h2 className="text-headline-lg text-primary font-bold mt-2">
            Preguntas frecuentes
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-3 leading-relaxed">
            Resolvemos sus principales dudas sobre el servicio y nuestra forma de orientar.
          </p>

          {/* Search Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tema (ej. contraseñas, EPS, costo...)"
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
            />
            <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-outline text-[20px]">
              search
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-outline hover:text-primary text-xs"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {[
              { id: 'todas', label: 'Todas las preguntas' },
              { id: 'general', label: 'General' },
              { id: 'uso', label: 'Uso y dinámica' },
              { id: 'seguridad', label: 'Seguridad' },
              { id: 'piloto', label: 'Prueba piloto' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5" id="faqAccordion">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  id={faq.id}
                  className="bg-surface-container-lowest rounded-2xl shadow-xs border border-outline-variant/30 overflow-hidden transition-all duration-200"
                >
                  <button
                    id={`btn-${faq.id}`}
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4 hover:bg-surface-container-low/40 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-headline-sm text-primary font-semibold leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined text-primary text-[26px] transform transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-secondary' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-on-surface-variant border-t border-outline-variant/20 pt-4 animate-in fade-in duration-150">
                      <p className="text-body-md leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 bg-surface-container-lowest rounded-2xl p-6">
              <span className="material-symbols-outlined text-outline text-[32px] mb-2">
                sentiment_dissatisfied
              </span>
              <p className="text-body-md text-on-surface-variant">
                No encontramos preguntas para "<strong>{searchQuery}</strong>".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('todas');
                }}
                className="mt-3 text-secondary font-bold text-sm underline"
              >
                Ver todas las preguntas
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
