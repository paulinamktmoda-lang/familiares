import React, { useState } from 'react';

interface AllianceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AllianceModal: React.FC<AllianceModalProps> = ({ isOpen, onClose }) => {
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [orgType, setOrgType] = useState('Salud / EPS');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div
      id="alliance-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="alliance-modal-content"
        className="bg-surface-container-lowest text-on-surface w-full max-w-lg rounded-3xl p-7 sm:p-9 shadow-2xl border border-outline-variant/40 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="alliance-modal-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {!sent ? (
          <>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-secondary-container text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">handshake</span>
              </div>
              <h3 className="text-headline-sm text-primary font-bold">Alianzas Institucionales</h3>
            </div>
            <p className="text-body-md text-on-surface-variant mb-5 leading-relaxed">
              Exploremos juntos cómo Teguío puede apoyar a su institución a reducir puntos de bloqueo
              en trámites y mejorar la atención de personas mayores.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Nombre de la Organización o Entidad
                </label>
                <input
                  type="text"
                  required
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="Ej. EPS Sanitas, Banco Colpatria, Caja de Compensación..."
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    Persona de Contacto
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Su nombre y cargo"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    Tipo de Entidad
                  </label>
                  <select
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Salud / EPS">Salud / EPS / Clínica</option>
                    <option value="Banca / Financiera">Banca / Financiera</option>
                    <option value="Caja de Compensación">Caja de Compensación</option>
                    <option value="Gobierno / Pública">Entidad Pública / Ciudadana</option>
                    <option value="Otro">Otro sector</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  Correo Electrónico Institucional
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contacto@organizacion.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1">
                  ¿En qué trámites o retos le gustaría colaborar?
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ej. Reducir llamadas a call center por radicación de incapacidades o citas médicas..."
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[50px] px-6 bg-secondary text-white font-bold rounded-xl shadow-sm hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>Enviar propuesta de alianza</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6 flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <h4 className="text-headline-sm text-primary font-bold">Propuesta enviada</h4>
            <p className="text-body-md text-on-surface-variant max-w-sm">
              Gracias por el interés de <strong>{orgName}</strong>. Nuestro equipo de alianzas e
              inclusión se pondrá en contacto al correo <strong>{email}</strong> en un plazo máximo de 24 horas hábiles.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-primary text-white font-bold text-sm rounded-xl"
            >
              Entendido
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
