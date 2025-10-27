import { Wallet, Code2, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Solutions = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Wallet,
      title: t('solution1Title'),
      description: t('solution1Desc'),
    },
    {
      icon: Code2,
      title: t('solution2Title'),
      description: t('solution2Desc'),
    },
    {
      icon: TrendingUp,
      title: t('solution3Title'),
      description: t('solution3Desc'),
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            {t('solutionsTitle')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                <p className="text-muted-foreground text-lg">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
