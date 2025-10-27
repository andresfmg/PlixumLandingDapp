import { TrendingUp, DollarSign, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

export const Yields = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: DollarSign,
      text: t('yieldsFeature1'),
    },
    {
      icon: TrendingUp,
      text: t('yieldsFeature2'),
    },
    {
      icon: Clock,
      text: t('yieldsFeature3'),
    },
    {
      icon: Shield,
      text: t('yieldsFeature4'),
    },
  ];

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-black">
                {t('yieldsTitle')}
              </h2>
              
              <p className="text-xl text-muted-foreground">
                {t('yieldsSubtitle')}
              </p>
              
              <p className="text-lg text-muted-foreground">
                {t('yieldsDesc')}
              </p>
              
              <Button variant="hero" size="lg" className="gap-2">
                {t('heroCtaPrimary')}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            
            <Card className="bg-card/80 backdrop-blur border-2 border-primary/30 shadow-glow">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">{t('yieldsSubtitle')}</p>
                  <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {t('yieldsApy')}
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t border-border">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-foreground font-medium">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
