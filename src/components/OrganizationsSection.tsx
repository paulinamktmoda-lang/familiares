import React, { useState } from 'react';
import { AllianceModal } from './AllianceModal';

export const OrganizationsSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="alianzas" className="w-full bg-surface py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            id="organization-card"
            className="p-8 lg:p-10 rounded-3xl bg-surface-container border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="max-w-2xl">
              <span className="font-bold text-xs uppercase tracking-wider text-secondary">
                Inclusión institucional
              </span>
              <h2 className="text-headline-md text-primary font-bold mt-1.5">
                ¿Su organización atiende adultos mayores?
              </h2>
              <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">
                Estamos explorando cómo Teguío puede ayudar a entidades de salud (EPS), bancos, cajas de
                compensación y empresas de servicios a reducir puntos de bloqueo y promover la inclusión
                digital autónoma.
              </p>
            </div>
            <button
              id="org-alliance-button"
              type="button"
              onClick={() => setModalOpen(true)}
              className="min-h-[48px] px-6 rounded-xl bg-surface-container-lowest text-primary font-semibold text-sm hover:bg-surface-container-high transition-colors inline-flex items-center justify-center gap-2 shrink-0 border border-outline-variant/40 shadow-xs active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px] text-secondary">handshake</span>
              <span>Conversemos sobre una alianza</span>
            </button>
          </div>
        </div>
      </section>

      <AllianceModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
