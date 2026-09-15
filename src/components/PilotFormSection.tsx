import React, { useState } from 'react';
import { PilotFormData } from '../types';

export const PilotFormSection: React.FC = () => {
  const [formData, setFormData] = useState<PilotFormData>({
    fullName: '',
    contactInfo: '',
    troubleDetails: '',
    userType: 'familiar',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const quickTroubleTags = [
    'Portal EPS y citas médicas',
    'Banca móvil y extractos',
    'Facturas de servicios públicos',
    'WhatsApp y videollamadas',
    'Recuperación de contraseñas',
  ];

  const handleAddTag = (tag: string) => {
    if (formData.troubleDetails.includes(tag)) return;
    setFormData((prev) => ({
      ...prev,
      troubleDetails: prev.troubleDetails ? `${prev.troubleDetails}, ${tag}` : tag,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="prueba-piloto"
      className="w-full bg-primary py-16 lg:py-24 text-white relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container text-white w-fit text-xs font-bold uppercase tracking-wider border border-white/20">
            <span className="material-symbols-outlined text-[18px]">group</span>
            <span>Comunidad pionera</span>
          </div>

          <h2 className="text-headline-xl text-white font-bold tracking-tight leading-tight">
            Estamos construyendo Teguío con familias reales.
          </h2>

          <p className="text-body-xl text-primary-fixed-dim leading-relaxed">
            Teguío se encuentra en etapa de validación. Buscamos familias interesadas en probar una
            primera versión y ayudarnos a entender qué tipo de orientación genera mayor autonomía.
          </p>

          <div className="flex items-start sm:items-center gap-3.5 pt-2">
            <span className="material-symbols-outlined text-secondary-fixed text-[30px] shrink-0">
              volunteer_activism
            </span>
            <p className="text-body-md text-primary-fixed-dim leading-snug">
              Sin compromiso de compra. Participación 100% voluntaria y estrictamente confidencial.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="lg:col-span-6 bg-surface-container-lowest text-on-surface p-7 sm:p-10 rounded-3xl shadow-2xl border border-white/10">
          {!submitted ? (
            <>
              <h3 className="text-headline-sm text-primary font-bold mb-1">
                Únase a la prueba piloto
              </h3>
              <p className="text-body-md text-on-surface-variant mb-6">
                Complete estos breves datos para ponernos en contacto.
              </p>

              <form id="pilotForm" onSubmit={handleSubmit} className="space-y-4">
                {/* User Type Choice */}
                <div>
                  <label className="block text-[14px] font-bold text-primary mb-1.5">
                    ¿Quién se está registrando?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, userType: 'familiar' })}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                        formData.userType === 'familiar'
                          ? 'bg-primary text-white border-primary shadow-xs'
                          : 'bg-surface-container-low text-primary border-outline-variant/40 hover:bg-surface-container-high'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[16px]">family_restroom</span>
                      <span>Familiar o cuidador</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, userType: 'adulto_mayor' })}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                        formData.userType === 'adulto_mayor'
                          ? 'bg-primary text-white border-primary shadow-xs'
                          : 'bg-surface-container-low text-primary border-outline-variant/40 hover:bg-surface-container-high'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[16px]">person</span>
                      <span>Adulto mayor (Personal)</span>
                    </button>
                  </div>
                </div>

                {/* Campo 1 */}
                <div>
                  <label className="block text-label-md text-primary font-bold mb-1.5" htmlFor="fullName">
                    Su nombre y parentesco
                  </label>
                  <input
                    className="w-full min-h-[54px] px-4 rounded-xl bg-surface-container-low text-on-surface text-body-lg focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                    id="fullName"
                    placeholder="Ej. Camila Torres (Hija)"
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                {/* Campo 2 */}
                <div>
                  <label className="block text-label-md text-primary font-bold mb-1.5" htmlFor="contactInfo">
                    Correo electrónico o WhatsApp
                  </label>
                  <input
                    className="w-full min-h-[54px] px-4 rounded-xl bg-surface-container-low text-on-surface text-body-lg focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                    id="contactInfo"
                    placeholder="ejemplo@correo.com o +57 300 000 0000"
                    required
                    type="text"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                  />
                </div>

                {/* Campo 3 */}
                <div>
                  <label className="block text-label-md text-primary font-bold mb-1.5" htmlFor="troubleDetails">
                    ¿Qué trámite suele causarle más dudas a su familiar?{' '}
                    <span className="text-outline font-normal">(Opcional)</span>
                  </label>
                  <textarea
                    className="w-full p-4 rounded-xl bg-surface-container-low text-on-surface text-body-lg focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                    id="troubleDetails"
                    placeholder="Ej. Descarga de facturas, trámites de la EPS, uso de la banca móvil..."
                    rows={2}
                    value={formData.troubleDetails}
                    onChange={(e) => setFormData({ ...formData, troubleDetails: e.target.value })}
                  />

                  {/* Quick Tag Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {quickTroubleTags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleAddTag(tag)}
                        className="text-[11px] font-medium bg-surface-container px-2.5 py-1 rounded-full text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
                      >
                        + {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  id="pilot-submit-button"
                  className="w-full min-h-[56px] px-8 bg-secondary text-white font-bold text-label-lg rounded-xl shadow-md hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                  type="submit"
                  disabled={submitting}
                >
                  <span>{submitting ? 'Registrando...' : 'Quiero participar en la prueba'}</span>
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>
              </form>
            </>
          ) : (
            <div
              id="formSuccess"
              className="p-8 rounded-2xl bg-secondary-container text-on-secondary-container text-center flex flex-col items-center gap-3 animate-in zoom-in-95 duration-200"
            >
              <span className="material-symbols-outlined text-[48px] text-secondary">
                check_circle
              </span>
              <p className="text-headline-sm font-bold text-primary">¡Gracias por sumarse!</p>
              <p className="text-body-md text-on-secondary-container max-w-sm">
                Hemos recibido los datos de <strong>{formData.fullName}</strong>. Nos comunicaremos pronto al contacto registrado (<strong>{formData.contactInfo}</strong>) para coordinar la prueba de validación y entregarle la guía inicial.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: '',
                    contactInfo: '',
                    troubleDetails: '',
                    userType: 'familiar',
                  });
                }}
                className="mt-3 px-5 py-2 rounded-xl bg-surface-container-lowest text-primary font-bold text-sm shadow-xs hover:bg-surface-container transition-colors"
              >
                Registrar a otro familiar o familiar diferente
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
