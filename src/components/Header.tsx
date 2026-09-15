import React, { useState, useEffect } from 'react';
import { BRAND_ASSETS } from '../data/content';

interface HeaderProps {
  fontSizeLevel: 'normal' | 'large' | 'xlarge';
  setFontSizeLevel: (level: 'normal' | 'large' | 'xlarge') => void;
}

export const Header: React.FC<HeaderProps> = ({ fontSizeLevel, setFontSizeLevel }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['como-funciona', 'beneficios', 'seguridad', 'para-quien-es', 'faq'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fcf9f3]/95 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
          : 'bg-[#fcf9f3]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="h-20 max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center">
          <a
            id="brand-logo-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1"
          >
            <img
              id="header-brand-logo"
              alt="Teguío - Te orientamos, tú continúas"
              className="h-12 w-auto object-contain"
              src={BRAND_ASSETS.headerLogo}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav
          id="desktop-navigation"
          aria-label="Navegación principal"
          className="hidden xl:flex items-center gap-2"
        >
          {[
            { id: 'como-funciona', label: 'Cómo funciona' },
            { id: 'beneficios', label: 'Beneficios' },
            { id: 'seguridad', label: 'Seguridad' },
            { id: 'para-quien-es', label: 'Para quién es' },
            { id: 'faq', label: 'Preguntas frecuentes' },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                id={`nav-link-${item.id}`}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`font-semibold text-[15px] py-2 px-3 rounded-lg transition-colors duration-150 ${
                  isActive
                    ? 'bg-primary text-white font-bold shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Header Actions: Font Accessibility + Primary CTA */}
        <div className="flex items-center gap-3">
          {/* Accessibility Font Size Switcher */}
          <div
            id="accessibility-font-controls"
            className="hidden sm:flex items-center bg-surface-container-high p-1 rounded-xl border border-outline-variant/40"
            title="Ajustar tamaño de letra para facilitar la lectura"
          >
            <span className="text-[12px] font-bold text-on-surface-variant px-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">format_size</span>
              <span className="hidden md:inline">Texto:</span>
            </span>
            <button
              id="btn-font-normal"
              onClick={() => setFontSizeLevel('normal')}
              className={`px-2.5 py-1 rounded-lg text-[13px] font-bold transition-all ${
                fontSizeLevel === 'normal'
                  ? 'bg-surface-container-lowest text-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              A
            </button>
            <button
              id="btn-font-large"
              onClick={() => setFontSizeLevel('large')}
              className={`px-2.5 py-1 rounded-lg text-[14px] font-bold transition-all ${
                fontSizeLevel === 'large'
                  ? 'bg-surface-container-lowest text-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              A+
            </button>
            <button
              id="btn-font-xlarge"
              onClick={() => setFontSizeLevel('xlarge')}
              className={`px-2.5 py-1 rounded-lg text-[16px] font-bold transition-all ${
                fontSizeLevel === 'xlarge'
                  ? 'bg-surface-container-lowest text-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              A++
            </button>
          </div>

          {/* Primary CTA */}
          <a
            id="header-cta-button"
            href="#prueba-piloto"
            onClick={(e) => scrollToSection(e, 'prueba-piloto')}
            className="inline-flex items-center justify-center min-h-[44px] px-5 bg-primary text-white font-semibold text-[15px] rounded-xl shadow-xs hover:bg-primary-container transition-all gap-2 active:scale-95"
          >
            <span>Quiero probarlo</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-primary hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="xl:hidden bg-surface-container-lowest border-b border-outline-variant/30 px-6 py-4 shadow-lg animate-in slide-in-from-top duration-200"
        >
          {/* Mobile Font Size Switcher */}
          <div className="flex items-center justify-between pb-4 mb-3 border-b border-surface-container-highest">
            <span className="text-[14px] font-semibold text-primary flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px] text-secondary">format_size</span>
              Tamaño de lectura
            </span>
            <div className="flex items-center bg-surface-container-low p-1 rounded-lg">
              <button
                onClick={() => setFontSizeLevel('normal')}
                className={`px-3 py-1 rounded text-sm font-bold ${
                  fontSizeLevel === 'normal' ? 'bg-primary text-white' : 'text-on-surface'
                }`}
              >
                A
              </button>
              <button
                onClick={() => setFontSizeLevel('large')}
                className={`px-3 py-1 rounded text-sm font-bold ${
                  fontSizeLevel === 'large' ? 'bg-primary text-white' : 'text-on-surface'
                }`}
              >
                A+
              </button>
              <button
                onClick={() => setFontSizeLevel('xlarge')}
                className={`px-3 py-1 rounded text-base font-bold ${
                  fontSizeLevel === 'xlarge' ? 'bg-primary text-white' : 'text-on-surface'
                }`}
              >
                A++
              </button>
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            {[
              { id: 'como-funciona', label: 'Cómo funciona' },
              { id: 'beneficios', label: 'Beneficios' },
              { id: 'seguridad', label: 'Seguridad' },
              { id: 'para-quien-es', label: 'Para quién es' },
              { id: 'faq', label: 'Preguntas frecuentes' },
            ].map((item) => (
              <a
                key={item.id}
                id={`mobile-nav-${item.id}`}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="py-3 px-4 rounded-xl text-[16px] font-medium text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-[20px] text-outline">chevron_right</span>
              </a>
            ))}
            <div className="pt-3">
              <a
                id="mobile-nav-cta"
                href="#prueba-piloto"
                onClick={(e) => scrollToSection(e, 'prueba-piloto')}
                className="w-full min-h-[50px] inline-flex items-center justify-center px-6 bg-primary text-white font-semibold text-[16px] rounded-xl shadow-md gap-2"
              >
                <span>Quiero probar Teguío con mi familiar</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
