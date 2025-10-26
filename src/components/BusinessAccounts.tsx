import { DollarSign, TrendingUp, Users, Code, BarChart3, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const BusinessAccounts = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: DollarSign,
      title: t('business1Title'),
      description: t('business1Desc'),
    },
    {
      icon: TrendingUp,
      title: t('business2Title'),
      description: t('business2Desc'),
    },
    {
      icon: Users,
      title: t('business3Title'),
      description: t('business3Desc'),
    },
    {
      icon: Code,
      title: t('business4Title'),
      description: t('business4Desc'),
    },
    {
      icon: BarChart3,
      title: t('business5Title'),
      description: t('business5Desc'),
    },
    {
      icon: Headphones,
      title: t('business6Title'),
      description: t('business6Desc'),
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            {t('businessTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('businessSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 border border-border/50 bg-card/80 backdrop-blur"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
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
