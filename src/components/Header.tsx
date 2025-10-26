import { LanguageSwitcher } from './LanguageSwitcher';
import plixumLogo from '@/assets/plixum-logo.png';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={plixumLogo} alt="Plixum Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold text-foreground">
              PLIXUM
            </span>
          </div>
          
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
