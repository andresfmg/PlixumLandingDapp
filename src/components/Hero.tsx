import { ArrowRight, Wallet, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-plixum.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Powered by Solana DeFi</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t('heroTitle')}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              {t('heroSubtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                {t('heroCtaPrimary')}
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="heroOutline" size="lg">
                {t('heroCtaSecondary')}
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <p className="text-2xl font-bold text-foreground">70%</p>
                </div>
                <p className="text-sm text-muted-foreground">{t('stat1')}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-accent" />
                  <p className="text-2xl font-bold text-foreground">$310B</p>
                </div>
                <p className="text-sm text-muted-foreground">{t('stat2')}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <p className="text-2xl font-bold text-foreground">$157B</p>
                </div>
                <p className="text-sm text-muted-foreground">{t('stat3')}</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="Plixum Digital Wallet Platform" 
              className="relative rounded-2xl shadow-card w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
