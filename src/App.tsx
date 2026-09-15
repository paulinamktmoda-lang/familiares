import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { ComparisonSection } from './components/ComparisonSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { InteractiveChatDemo } from './components/InteractiveChatDemo';
import { HelpFormatsSection } from './components/HelpFormatsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { SecuritySection } from './components/SecuritySection';
import { UseCaseSection } from './components/UseCaseSection';
import { PilotFormSection } from './components/PilotFormSection';
import { SeniorSection } from './components/SeniorSection';
import { OrganizationsSection } from './components/OrganizationsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { AllianceModal } from './components/AllianceModal';

export default function App() {
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [allianceModalOpen, setAllianceModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.body.classList.remove('text-scale-lg', 'text-scale-xl');
    if (fontSizeLevel === 'large') {
      document.body.classList.add('text-scale-lg');
    } else if (fontSizeLevel === 'xlarge') {
      document.body.classList.add('text-scale-xl');
    }
  }, [fontSizeLevel]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col font-sans transition-all duration-200">
      {/* Sticky Header with Navigation and Accessibility Controls */}
      <Header fontSizeLevel={fontSizeLevel} setFontSizeLevel={setFontSizeLevel} />

      {/* Main Content Sections */}
      <main className="w-full pt-20 bg-surface flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Identificación del Problema */}
        <ProblemSection />

        {/* 3. Tensión del Familiar & Comparativa Visual */}
        <ComparisonSection />

        {/* 4. Cómo Funciona (3 pasos) */}
        <HowItWorksSection />

        {/* 5. Demostración en Vivo / Experiencia Conversacional (Simulador tipo WhatsApp) */}
        <InteractiveChatDemo />

        {/* 6. Tres Formas de Recibir Ayuda */}
        <HelpFormatsSection />

        {/* 7. Beneficios Duales (Adulto Mayor & Familia) */}
        <BenefitsSection />

        {/* 8. Seguridad Integral */}
        <SecuritySection />

        {/* 9. Caso de Uso Ilustrativo (Orden médica) */}
        <UseCaseSection />

        {/* 10. Prueba y Validación (Formulario Interactivo) */}
        <PilotFormSection />

        {/* 11. Sección Dedicada para el Adulto Mayor */}
        <SeniorSection />

        {/* 12. Sección Organizaciones */}
        <OrganizationsSection />

        {/* 13. Preguntas Frecuentes (FAQ Interactivo) */}
        <FaqSection />

        {/* 14. CTA Final */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer onOpenAlliance={() => setAllianceModalOpen(true)} />

      {/* Alliance Modal (when triggered from footer or menu) */}
      <AllianceModal isOpen={allianceModalOpen} onClose={() => setAllianceModalOpen(false)} />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          id="back-to-top-button"
          type="button"
          onClick={scrollToTop}
          aria-label="Volver al inicio de la página"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary text-white shadow-xl hover:bg-primary-container flex items-center justify-center transition-all animate-in fade-in active:scale-95 border border-white/20"
          title="Volver arriba"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_upward</span>
        </button>
      )}
    </div>
  );
}
