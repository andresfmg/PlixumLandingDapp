import { useLanguage } from '@/contexts/LanguageContext';
import { RegistrationForm } from './RegistrationForm';

export const CTA = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* SECCIÓN: CONTÁCTANOS - Call to Action */}
      <section id="contact" className="relative w-full bg-black text-white overflow-hidden" style={{ paddingTop: 'var(--padding-section-y)', paddingBottom: 'var(--padding-section-y)' }}>
        {/* Background gradient circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
            style={{ 
              width: '2400px', 
              height: '2400px', 
              background: 'radial-gradient(circle, rgba(108, 234, 199, 0.05) 0%, transparent 70%)', 
              filter: 'blur(40px)', 
              mixBlendMode: 'screen' 
            }}>
          </div>
        </div>

        <div className="finity-container relative z-10">
          {/* Label */}
          <div className="flex flex-col items-center" style={{ gap: 'var(--gap-large)' }}>
            <div className="flex flex-col items-center gap-6 w-full max-w-4xl mx-auto">
              <p className="text-sm tracking-widest uppercase font-semibold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent" style={{ fontSize: 'var(--subheading)', fontWeight: 600, letterSpacing: '0.2em' }}>
                {t('ctaLabel')}
              </p>
              
              {/* Title */}
              <h1 className="text-center text-white font-bold leading-tight" style={{ fontSize: 'var(--h1)', lineHeight: '130%' }}>
                {t('ctaTitle')}
              </h1>
              {/* Optional Subtitle */}
              <h3 className="text-center text-gray-400 font-medium px-4" style={{ fontSize: 'var(--h3)', marginTop: 'var(--gap-small)' }}>
                {t('ctaFormSubtitle')}
              </h3>
            </div>

            {/* Registration Form */}
            <div className="w-full max-w-5xl mx-auto mt-12">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: FOOTER */}
      <footer className="relative w-full bg-black text-white overflow-hidden" style={{ paddingTop: 'var(--padding-section-y)', paddingBottom: 'var(--padding-section-y)', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="finity-container">
          {/* Footer content grid */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--gap-large)' }}>
            {/* Logo section */}
            <div className="flex flex-col items-start justify-start">
              <div className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text">
                Plixum
              </div>
            </div>

            {/* Contact section */}
            <div className="flex flex-col items-start justify-start">
              <p className="text-white font-semibold mb-4" style={{ fontSize: 'var(--paragraph-small)' }}>
                Contáctanos
              </p>
              <a 
                href="mailto:info@plixum.com"
                className="text-cyan-400 hover:text-cyan-300 no-underline transition-colors"
                style={{ fontSize: 'var(--paragraph)', fontWeight: 400 }}
              >
                Email Us
              </a>
            </div>

            {/* Links section */}
            <div className="flex flex-col items-start justify-start" style={{ gap: 'var(--gap-xs)' }}>
              <a 
                href="#"
                className="text-white hover:text-cyan-400 no-underline transition-colors"
                style={{ fontSize: 'var(--paragraph-small)', fontWeight: 400 }}
              >
                Política de privacidad
              </a>
              <a 
                href="#"
                className="text-white hover:text-cyan-400 no-underline transition-colors"
                style={{ fontSize: 'var(--paragraph-small)', fontWeight: 400 }}
              >
                Términos y condiciones
              </a>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60" style={{ fontSize: 'var(--paragraph-small)' }}>
              © 2026 Plixum. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
