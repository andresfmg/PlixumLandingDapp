import { TrendingDown, Zap, CreditCard, PiggyBank } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: TrendingDown,
      title: t('feature1Title'),
      description: t('feature1Desc'),
    },
    {
      icon: Zap,
      title: t('feature2Title'),
      description: t('feature2Desc'),
    },
    {
      icon: CreditCard,
      title: t('feature3Title'),
      description: t('feature3Desc'),
    },
    {
      icon: PiggyBank,
      title: t('feature4Title'),
      description: t('feature4Desc'),
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('featuresTitle')}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 border-border/50 bg-card/50 backdrop-blur"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
