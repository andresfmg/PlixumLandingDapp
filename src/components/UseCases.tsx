import { ShoppingCart, Globe2, Briefcase, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const UseCases = () => {
  const { t } = useLanguage();

  const useCases = [
    {
      icon: ShoppingCart,
      title: t('useCase1Title'),
      description: t('useCase1Desc'),
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe2,
      title: t('useCase2Title'),
      description: t('useCase2Desc'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Briefcase,
      title: t('useCase3Title'),
      description: t('useCase3Desc'),
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Send,
      title: t('useCase4Title'),
      description: t('useCase4Desc'),
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-black">
              {t('useCasesTitle')}
            </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 border-2 border-border/50 hover:border-primary/50 bg-card overflow-hidden"
            >
              <CardContent className="p-8 space-y-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{useCase.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
