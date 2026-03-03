import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import plixumLogo from '@/assets/plixum-logo.png';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Header = () => {
  const { t } = useLanguage();
  return (
    <header className="sticky top-0 z-50 w-full bg-black border-b border-white/10" style={{ height: '80px' }}>
      <div className="w-full h-full">
        <div className="finity-container h-full flex items-center justify-between">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-end gap-2 no-underline flex-shrink-0">
            <img src={plixumLogo} alt="Plixum Logo" className="w-8 h-8 cursor-pointer hover:opacity-80 transition" />
            <span className="text-white font-bold hover:text-gray-300 transition" style={{ fontSize: '16px' }}>
              Plixum
            </span>
          </Link>

          {/* Menu + Language + Login */}
          <div className="hidden md:flex items-center gap-8">
            {/* Menu items */}
            <div className="flex items-center gap-8">
              <a href="#contact" className="text-white hover:text-cyan-400 transition no-underline" style={{ fontSize: '16px', fontWeight: 500 }}>
                {t('headerContact')}
              </a>
              <a href="#" target="_blank" className="text-white hover:text-cyan-400 transition no-underline" style={{ fontSize: '16px', fontWeight: 500 }}>
                {t('headerDocs')}
              </a>
            </div>

            {/* Language switcher + Theme switcher */}
            <div className="flex items-center gap-3">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>

            {/* Login button - gradient */}
            <a 
              href="https://app.plixum.com/" 
              target="_blank" 
              className="z-5 flex gap-2 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex-none justify-center items-center px-4 py-2 no-underline relative overflow-hidden flex-shrink-0"
            >
              <p className="text-black font-semibold" style={{ fontSize: '14px', lineHeight: '1' }}>
                {t('headerLogin')}
              </p>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};
