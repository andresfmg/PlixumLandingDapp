import { useLanguage } from '@/contexts/LanguageContext';

export const TrustSection = () => {
  const { t } = useLanguage();

  const rows = [
    { feature: t('cmpFeature1'), traditional: t('cmpTrad1'), plixum: t('cmpPlx1') },
    { feature: t('cmpFeature2'), traditional: t('cmpTrad2'), plixum: t('cmpPlx2') },
    { feature: t('cmpFeature3'), traditional: t('cmpTrad3'), plixum: t('cmpPlx3') },
    { feature: t('cmpFeature4'), traditional: t('cmpTrad4'), plixum: t('cmpPlx4') },
    { feature: t('cmpFeature5'), traditional: t('cmpTrad5'), plixum: t('cmpPlx5') },
    { feature: t('cmpFeature6'), traditional: t('cmpTrad6'), plixum: t('cmpPlx6') },
  ];

  return (
    <section className="force-dark relative w-full bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center mb-14 gap-4">
          <p className="text-xs tracking-widest uppercase font-semibold text-cyan-400">
            {t('cmpLabel')}
          </p>
          <h2 className="text-center font-bold text-3xl md:text-4xl text-white max-w-2xl leading-tight">
            {t('cmpTitle')}
          </h2>
        </div>

        {/* Comparison table */}
        <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>

          {/* Plixum column highlight — absolute positioned behind rows */}
          <div
            className="absolute top-0 right-0 bottom-0 pointer-events-none"
            style={{
              width: 'calc(100% / 3)',
              background: 'linear-gradient(180deg, #0f1728 0%, #0a1020 100%)',
              borderLeft: '1px solid rgba(44,219,255,0.25)',
            }}
          />

          {/* Column headers */}
          <div className="relative grid grid-cols-3 px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
            <div />
            <div className="text-center text-white/40 text-xs uppercase tracking-widest font-semibold">
              {t('cmpColTrad')}
            </div>
            <div className="text-center text-xs uppercase tracking-widest font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              {t('cmpColPlixum')}
            </div>
          </div>

          {/* Feature rows */}
          {rows.map((row, idx) => (
            <div
              key={idx}
              className="relative grid grid-cols-3 px-6 py-5 items-center"
              style={{ borderBottom: idx < rows.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
            >
              {/* Feature */}
              <div className="flex items-center gap-3 pr-4">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(44,219,255,0.15)' }}
                >
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M1 3.5L3.5 6L8 1" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-white text-sm font-medium">{row.feature}</span>
              </div>

              {/* Traditional bank */}
              <div className="flex items-center justify-center gap-2">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(239,68,68,0.12)' }}
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M2 2L6 6M6 2L2 6" stroke="#f87171" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="text-white/35 text-sm text-center">{row.traditional}</span>
              </div>

              {/* Plixum */}
              <div className="flex items-center justify-center gap-2">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(44,219,255,0.2)' }}
                >
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path d="M1 3.5L3.5 6L8 1" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-white text-sm font-semibold text-center">{row.plixum}</span>
              </div>
            </div>
          ))}
        </div>

        {/* IS / IS NOT — kept below as regulatory clarity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="flex flex-col rounded-xl p-7 gap-4" style={{ background: 'rgba(44,219,255,0.05)', border: '1px solid rgba(44,219,255,0.2)' }}>
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-green-400 flex-shrink-0" />
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">{t('trustIsTitle')}</h3>
            </div>
            <ul className="flex flex-col gap-2">
              {[t('trustIs1'), t('trustIs2'), t('trustIs3'), t('trustIs4'), t('trustIs5')].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(44,219,255,0.15)' }}>
                    <svg width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M1 3L2.8 5L6 1" stroke="#22d3ee" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-white/80 text-xs leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-xl p-7 gap-4" style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.18)' }}>
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 rounded-full bg-gradient-to-b from-red-400 to-rose-600 flex-shrink-0" />
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">{t('trustIsNotTitle')}</h3>
            </div>
            <ul className="flex flex-col gap-2">
              {[t('trustIsNot1'), t('trustIsNot2'), t('trustIsNot3'), t('trustIsNot4'), t('trustIsNot5'), t('trustIsNot6')].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.12)' }}>
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none"><path d="M1.5 1.5L5.5 5.5M5.5 1.5L1.5 5.5" stroke="#f87171" strokeWidth="1.6" strokeLinecap="round"/></svg>
                  </span>
                  <span className="text-white/50 text-xs leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

