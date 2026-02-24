import { useLanguage } from '@/contexts/LanguageContext';

export const FinityStyleSolutions = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      title: t('feature1Title'),
      description: t('feature1Desc'),
    },
    {
      title: t('feature2Title'),
      description: t('feature2Desc'),
    },
    {
      title: t('feature3Title'),
      description: t('feature3Desc'),
    },
    {
      title: t('feature4Title'),
      description: t('feature4Desc'),
    },
    {
      title: t('feature5Title'),
      description: t('feature5Desc'),
    },
    {
      title: t('feature6Title'),
      description: t('feature6Desc'),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-5xl md:text-6xl font-bold text-black">
            {t('featuresTitle')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl" />
              <h3 className="text-xl font-bold text-black leading-tight">{solution.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed font-light">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
