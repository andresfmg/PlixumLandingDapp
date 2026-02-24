import { useLanguage } from '@/contexts/LanguageContext';

export const FinityStyleMarkets = () => {
  const { t } = useLanguage();

  const markets = [
    { 
      title: t('market1Title'),
      desc: t('market1Desc'),
    },
    { 
      title: t('market2Title'),
      desc: t('market2Desc'),
    },
    { 
      title: t('market3Title'),
      desc: t('market3Desc'),
    },
    { 
      title: t('market4Title'),
      desc: t('market4Desc'),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-black">
            {t('marketsTitle')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((market, index) => (
            <div key={index} className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-bold text-black mb-2">{market.title}</h3>
              <p className="text-gray-600 text-sm font-light">{market.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
