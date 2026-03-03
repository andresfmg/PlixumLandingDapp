import plixumLogo from '@/assets/plixum-logo.png';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { language } = useLanguage();
  const links = {
    en: [
      { href: '/terms-of-service', label: 'Terms and Conditions' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/policy-sagrilaft', label: 'SAGRILAFT Policy' },
    ],
    es: [
      { href: '/terms-of-service', label: 'Términos y condiciones de servicio' },
      { href: '/privacy', label: 'Política de tratamiento de datos personales' },
      { href: '/policy-sagrilaft', label: 'Política SAGRILAFT' },
    ],
  };
  
  return (
    <footer className="relative z-6 border-t border-white/10 bg-black text-white overflow-hidden">
      {/* Gradient circles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-96 left-1/3" style={{ width: '2400px', height: '2400px', background: 'radial-gradient(circle, rgba(108, 234, 199, 0.05) 0%, transparent 70%)', filter: 'blur(40px)', mixBlendMode: 'screen' }}></div>
      </div>

      <div className="relative z-1 flex flex-col items-center w-full" style={{ paddingTop: '96px', paddingBottom: '56px' }}>
        {/* CTA + Contact */}
        <div className="flex flex-col items-center gap-60 w-full max-w-7xl" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
          {/* Main CTA */}
          <div className="flex flex-col items-center gap-8 w-full">
            <h2 className="text-center text-white font-bold leading-tight" style={{ fontSize: '50px', lineHeight: '1.3' }}>
              Habla con nuestro equipo de clase mundial
            </h2>
            
            <a 
              href="/es/contacto"
              className="z-5 flex gap-2 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex-none justify-center items-center no-underline"
              style={{ padding: '10px 24px' }}
            >
              <p className="text-black font-semibold" style={{ fontSize: '16px', lineHeight: '1.12' }}>
                Agenda una llamada
              </p>
            </a>
          </div>

          {/* Footer info */}
          <div className="w-full flex justify-between items-end pt-15 border-t border-white/10">
            {/* Contact info */}
            <div className="flex flex-col gap-4">
              <p className="text-white" style={{ fontSize: '18px', fontWeight: 400 }}>
                Contáctanos
              </p>
              <a 
                href="mailto:info@plixum.com"
                className="text-white hover:text-cyan-400 transition no-underline"
                style={{ fontSize: '18px', fontWeight: 400 }}
              >
                info@plixum.com
              </a>
            </div>

            {/* Footer links and copyright */}
            <div className="flex justify-between items-center flex-1 ml-12">
              {/* Legal links */}
              <div className="flex gap-8">
                {links[language].map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.href}
                    className="text-white hover:text-cyan-400 transition no-underline underline"
                    style={{ fontSize: '16px', fontWeight: 500 }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Copyright */}
              <p className="text-white font-semibold text-right ml-auto" style={{ fontSize: '16px', fontWeight: 600 }}>
                © 2026 Soluciones de Pagos y Recaudos SAS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
