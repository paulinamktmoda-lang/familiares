import React from 'react';

interface PrivacyModalProps {
  type: 'privacidad' | 'terminos' | 'seguridad' | null;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacidad: {
      title: 'Compromiso de Privacidad y Tratamiento de Datos',
      text: `En Teguío, la privacidad de los adultos mayores y sus familias es un principio fundacional.
1. No solicitamos contraseñas, tokens bancarios, claves dinámicas ni códigos SMS (OTP).
2. Recomendamos y asistimos activamente al usuario para tapar u ocultar nombres completos, números de cédula, saldos o información confidencial antes de enviar cualquier captura de pantalla.
3. Las comunicaciones se emplean exclusivamente con fines de orientación pedagógica en tiempo real y no se comercializan ni comparten con terceros no autorizados.
4. Cualquier dato recopilado durante la etapa de prueba piloto está sujeto al consentimiento explícito y puede ser revocado en cualquier momento por el usuario o su familia.`,
    },
    terminos: {
      title: 'Términos de la Iniciativa y Validación Piloto',
      text: `1. Alcance: Teguío es una solución de orientación y acompañamiento en usabilidad de interfaces digitales. No realiza gestiones, pagos, suscripciones ni trámites oficiales en sustitución del usuario.
2. Responsabilidad: El usuario conserva en todo momento el control físico y lógico de sus cuentas y dispositivos.
3. Validación Voluntaria: La fase piloto es de acceso libre y gratuito para las familias seleccionadas, sin cobros ocultos ni compromisos de permanencia.
4. Alcance médico y legal: Teguío no prescribe tratamientos médicos, no diagnostica ni asesora jurídicamente; únicamente asiste en la comprensión de los botones y pasos en las pantallas.`,
    },
    seguridad: {
      title: 'Decálogo de Seguridad y Buenas Prácticas',
      text: `• Jamás revelar credenciales: Ni Teguío ni ninguna entidad legítima le solicitará su clave secreta.
• Verificación de canales: Teguío siempre se identifica a través de los canales oficiales comunicados directamente a las familias participantes.
• Anonimización activa: Los orientadores están entrenados para recordar al usuario no exponer información sensible en notas de voz o capturas.
• Fomento del aprendizaje: Nuestro objetivo es que el adulto mayor toque el botón correcto por sí mismo, reforzando su autonomía y seguridad mental.`,
    },
  };

  const current = contentMap[type];

  return (
    <div
      id="privacy-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="privacy-modal-card"
        className="bg-surface-container-lowest text-on-surface w-full max-w-lg rounded-3xl p-7 sm:p-9 shadow-2xl border border-outline-variant/40 relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-secondary-container text-secondary flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">verified_user</span>
          </div>
          <h3 className="text-headline-sm text-primary font-bold">{current.title}</h3>
        </div>

        <div className="text-body-md text-on-surface-variant whitespace-pre-line leading-relaxed my-4 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/30 text-sm">
          {current.text}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full min-h-[46px] bg-primary text-white font-bold rounded-xl hover:bg-primary-container transition-colors"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
