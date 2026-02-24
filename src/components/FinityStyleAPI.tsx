import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const FinityStyleAPI = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t('solution1Title'),
      description: t('solution1Desc'),
    },
    {
      title: t('solution2Title'),
      description: t('solution2Desc'),
    },
    {
      title: t('solution3Title'),
      description: t('solution3Desc'),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-5xl md:text-6xl font-bold text-black">
            {t('solutionsTitle')}
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Así se ve operar finanzas internacionales con Plixum.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-3">
              <div className="w-12 h-1 bg-blue-600 rounded-full" />
              <h3 className="text-lg font-bold text-black">{benefit.title}</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-gray-200">
          <Button className="px-6 py-2 text-sm font-semibold rounded-lg bg-black hover:bg-gray-800 text-white">
            {t('downloadDocs')}
          </Button>
        </div>
      </div>
    </section>
  );
};
