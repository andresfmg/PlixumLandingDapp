import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef } from 'react';

export const Markets = () => {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const markets = [
    { title: t('market1Title'), desc: t('market1Desc') },
    { title: t('market2Title'), desc: t('market2Desc') },
    { title: t('market3Title'), desc: t('market3Desc') },
    { title: t('market4Title'), desc: t('market4Desc') },
    { title: 'Plataformas digitales', desc: t('market1Desc') },
    { title: 'Empresas que venden o cobran en otros países', desc: t('market1Desc') },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let animationFrameId: number;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative w-full bg-black text-white overflow-hidden" style={{ paddingTop: 'var(--padding-section-y)', paddingBottom: 'var(--padding-section-y)' }}>
      <div className="finity-container">
        {/* Header */}
        <div className="flex flex-col items-center mb-20" style={{ gap: 'var(--gap-small)' }}>
          <p className="text-sm tracking-widest uppercase font-semibold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent" style={{ fontSize: 'var(--subheading)', fontWeight: 600, letterSpacing: '0.2em' }}>
            {t('marketsTitle')}
          </p>
          <h2 className="text-center font-bold max-w-3xl" style={{ fontSize: 'var(--h3)', lineHeight: '130%' }}>
            {t('marketsSubheader')}
          </h2>
        </div>

        {/* Markets Horizontal Scroll - Infinite */}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-hidden scrollbar-hide"
          style={{
            display: 'flex',
            gap: '20px',
            scrollBehavior: 'auto',
          }}
        >
          {/* First set of cards */}
          {markets.map((market, idx) => (
            <div
              key={`card-1-${idx}`}
              className="rounded-lg flex-shrink-0 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all"
              style={{
                background: 'rgba(215, 215, 215, 0.15)',
                backdropFilter: 'blur(25px)',
                borderRadius: '18.45px',
                padding: '28px',
                minHeight: '140px',
                width: 'clamp(320px, 95vw, 480px)',
                minWidth: 'clamp(320px, 95vw, 480px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 4px 25px rgba(0,0,0,0.1), 0.5px 0.5px 2px rgba(47,63,87,0.3), -0.5px -0.5px rgba(255,255,255,0.3)',
              }}
            >
              <h3 className="text-white font-semibold mb-2" style={{ fontSize: '22px', fontWeight: 600, lineHeight: '130%' }}>
                {market.title}
              </h3>
              <p className="text-white/70" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                {market.desc}
              </p>
            </div>
          ))}

          {/* Duplicate set for infinite loop */}
          {markets.map((market, idx) => (
            <div
              key={`card-2-${idx}`}
              className="rounded-lg flex-shrink-0 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all"
              style={{
                background: 'rgba(215, 215, 215, 0.15)',
                backdropFilter: 'blur(25px)',
                borderRadius: '18.45px',
                padding: '28px',
                minHeight: '140px',
                width: 'clamp(320px, 95vw, 480px)',
                minWidth: 'clamp(320px, 95vw, 480px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 4px 25px rgba(0,0,0,0.1), 0.5px 0.5px 2px rgba(47,63,87,0.3), -0.5px -0.5px rgba(255,255,255,0.3)',
              }}
            >
              <h3 className="text-white font-semibold mb-2" style={{ fontSize: '22px', fontWeight: 600, lineHeight: '1.3' }}>
                {market.title}
              </h3>
              <p className="text-white/70" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                {market.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
