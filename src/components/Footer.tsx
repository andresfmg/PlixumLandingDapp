import plixumLogo from '@/assets/plixum-logo.png';

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src={plixumLogo} alt="Plixum Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-foreground">Plixum</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Plixum. All rights reserved. Built on Solana.
          </p>
        </div>
      </div>
    </footer>
  );
};
