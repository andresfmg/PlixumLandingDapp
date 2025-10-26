import { Store, ArrowLeftRight, Building2, Globe2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const Markets = () => {
  const { t } = useLanguage();

  const markets = [
    {
      icon: Store,
      title: t('market1Title'),
      description: t('market1Desc'),
    },
    {
      icon: ArrowLeftRight,
      title: t('market2Title'),
      description: t('market2Desc'),
    },
    {
      icon: Building2,
      title: t('market3Title'),
      description: t('market3Desc'),
    },
    {
      icon: Globe2,
      title: t('market4Title'),
      description: t('market4Desc'),
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            {t('marketsTitle')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {markets.map((market, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 border-2 hover:border-primary/50 bg-card"
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300">
                  <market.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{market.title}</h3>
                <p className="text-muted-foreground text-lg">{market.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
