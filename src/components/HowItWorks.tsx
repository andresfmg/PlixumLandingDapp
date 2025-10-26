import { UserPlus, Wallet, Globe, CreditCard } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: UserPlus,
      title: t('step1Title'),
      description: t('step1Desc'),
      number: '01',
    },
    {
      icon: Wallet,
      title: t('step2Title'),
      description: t('step2Desc'),
      number: '02',
    },
    {
      icon: Globe,
      title: t('step3Title'),
      description: t('step3Desc'),
      number: '03',
    },
    {
      icon: CreditCard,
      title: t('step4Title'),
      description: t('step4Desc'),
      number: '04',
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('howItWorksTitle')}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
