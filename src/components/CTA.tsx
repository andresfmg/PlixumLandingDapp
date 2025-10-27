import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-black">
            {t('ctaTitle')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('ctaSubtitle')}
          </p>
          
          <Button variant="hero" size="lg" className="gap-2 text-lg px-8 py-6 h-auto">
            {t('ctaButton')}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
