import { useLanguage } from '@/contexts/LanguageContext';

export const TrustSection = () => {
  const { t } = useLanguage();

  const isItems = [
    t('trustIs1'),
    t('trustIs2'),
    t('trustIs3'),
    t('trustIs4'),
    t('trustIs5'),
  ];

  const isNotItems = [
    t('trustIsNot1'),
    t('trustIsNot2'),
    t('trustIsNot3'),
    t('trustIsNot4'),
    t('trustIsNot5'),
    t('trustIsNot6'),
  ];

  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-24">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 gap-4">
          <p className="text-xs tracking-widest uppercase font-semibold text-cyan-400">
            {t('trustHeader')}
          </p>
          <h2 className="text-center font-bold text-3xl md:text-4xl text-white max-w-3xl">
            {t('trustSubheader')}
          </h2>
          <p className="text-center text-gray-400 max-w-2xl text-base leading-relaxed">
            {t('trustCopy')}
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* IS column */}
          <div className="flex flex-col rounded-xl p-9 gap-5" style={{ background: 'rgba(44,219,255,0.06)', border: '1px solid rgba(44,219,255,0.25)' }}>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-cyan-400 to-green-400 flex-shrink-0" />
              <h3 className="text-white font-bold text-lg">
                {t('trustIsTitle')}
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {isItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-cyan-400/20">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-white text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* IS NOT column */}
          <div className="flex flex-col rounded-xl p-9 gap-5" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)' }}>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-red-400 to-rose-600 flex-shrink-0" />
              <h3 className="text-white font-bold text-lg">
                {t('trustIsNotTitle')}
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {isNotItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-red-500/20">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2.5 2.5L7.5 7.5M7.5 2.5L2.5 7.5" stroke="#f87171" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
