
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
      { href: '/terms-of-service', label: 'Términos y Condiciones' },
      { href: '/privacy', label: 'Privacidad' },
      { href: '/policy-sagrilaft', label: 'Política SAGRILAFT' },
    ],
  };
  return (
    <footer className="border-t border-border/40 bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img src={plixumLogo} alt="Plixum Logo" className="w-8 h-8 cursor-pointer" />
              <span className="text-xl font-bold text-foreground cursor-pointer">Plixum</span>
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-muted-foreground text-center">
              © 2025 Plixum. All rights reserved. Built on Solana.
            </p>
            <div className="flex gap-4 text-sm">
              {links[language].map((link, idx) => (
                <a key={idx} href={link.href} className="text-[#27A3FE] hover:underline">{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
