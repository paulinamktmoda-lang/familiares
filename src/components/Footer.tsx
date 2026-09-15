import React, { useState } from 'react';
import { BRAND_ASSETS } from '../data/content';
import { PrivacyModal } from './PrivacyModal';

interface FooterProps {
  onOpenAlliance?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAlliance }) => {
  const [modalType, setModalType] = useState<'privacidad' | 'terminos' | 'seguridad' | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <footer
        id="main-footer"
        className="w-full bg-surface-container-low text-on-surface border-t border-outline-variant/30"
      >
        <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-12">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Col 1 & 2: Brand Information */}
            <div className="lg:col-span-2 flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <img
                  id="footer-brand-logo"
                  alt="Teguío"
                  className="h-12 w-auto object-contain"
                  src={BRAND_ASSETS.footerLogo}
                />
              </div>
              <p className="text-headline-sm text-primary font-bold">
                Te orientamos, tú continúas.
              </p>
              <p className="text-body-md text-on-surface-variant max-w-sm leading-relaxed">
                Acompañamiento digital amigable, accesible y respetuoso para adultos mayores y personas
                que buscan autonomía en sus trámites cotidianos.
              </p>
            </div>

            {/* Col 3: Solución */}
            <div>
              <h3 className="text-label-lg text-primary font-bold mb-3">Solución</h3>
              <ul className="space-y-2 text-body-md">
                <li>
                  <a
                    href="#como-funciona"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('como-funciona');
                    }}
                    className="text-on-surface-variant hover:text-primary transition-colors py-1 inline-block"
                  >
                    Cómo funciona
                  </a>
                </li>
                <li>
                  <a
                    href="#seguridad"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('seguridad');
                    }}
                    className="text-on-surface-variant hover:text-primary transition-colors py-1 inline-block"
                  >
                    Seguridad
                  </a>
                </li>
                <li>
                  <a
                    href="#beneficios"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('beneficios');
                    }}
                    className="text-on-surface-variant hover:text-primary transition-colors py-1 inline-block"
                  >
                    Para familias
                  </a>
                </li>
                <li>
                  <a
                    href="#alianzas"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onOpenAlliance) onOpenAlliance();
                      else scrollTo('alianzas');
                    }}
                    className="text-on-surface-variant hover:text-primary transition-colors py-1 inline-block"
                  >
                    Para organizaciones
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Información */}
            <div>
              <h3 className="text-label-lg text-primary font-bold mb-3">Información</h3>
              <ul className="space-y-2 text-body-md">
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('faq');
                    }}
                    className="text-on-surface-variant hover:text-primary transition-colors py-1 inline-block"
                  >
                    Preguntas frecuentes
                  </a>
                </li>
                <li>
                  <a
                    href="#caso-de-uso"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('caso-de-uso');
                    }}
                    className="text-on-surface-variant hover:text-primary transition-colors py-1 inline-block"
                  >
                    Lo que estamos aprendiendo
                  </a>
                </li>
                <li>
                  <a
                    href="#prueba-piloto"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('prueba-piloto');
                    }}
                    className="text-on-surface-variant hover:text-primary transition-colors py-1 inline-block"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 5: Legal */}
            <div>
              <h3 className="text-label-lg text-primary font-bold mb-3">Legal</h3>
              <ul className="space-y-2 text-body-md">
                <li>
                  <button
                    type="button"
                    onClick={() => setModalType('privacidad')}
                    className="text-on-surface-variant hover:text-primary transition-colors py-1 inline-block text-left"
                  >
                    Privacidad
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setModalType('terminos')}
                    className="text-on-surface-variant hover:text-primary transition-colors py-1 inline-block text-left"
                  >
                    Términos
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setModalType('seguridad')}
                    className="text-on-surface-variant hover:text-primary transition-colors py-1 inline-block text-left"
                  >
                    Compromiso de seguridad
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Validation Notice Banner */}
          <div
            id="footer-disclaimer-banner"
            className="bg-surface-container p-5 rounded-2xl mb-8 flex items-start sm:items-center gap-3.5 border border-outline-variant/30"
          >
            <span className="material-symbols-outlined text-secondary text-[26px] mt-0.5 sm:mt-0 shrink-0">
              info
            </span>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Teguío es una iniciativa en etapa de validación. Buscamos promover la autonomía digital
              sin sustituir a las personas.
            </p>
          </div>

          {/* Bottom Bar */}
          <div
            id="footer-bottom-bar"
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-outline-variant/20"
          >
            <div className="flex items-center gap-3">
              <img
                alt="Teguío"
                className="h-8 w-auto object-contain opacity-90"
                src={BRAND_ASSETS.footerBadge}
              />
              <span className="text-[13px] text-on-surface-variant font-medium">
                © {new Date().getFullYear()} Teguío. Todos los derechos reservados.
              </span>
            </div>

            <div className="flex items-center gap-2 text-on-surface-variant text-[13px] font-semibold bg-surface-container px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-[18px] text-secondary">
                accessibility
              </span>
              <span>Accesibilidad certificada</span>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal type={modalType} onClose={() => setModalType(null)} />
    </>
  );
};
