import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { LottiePlayer } from './LottiePlayer';

export const Solutions = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileCarouselIndex, setMobileCarouselIndex] = useState(0);

  const solutions = [
    {
      title: t('feature1Title'),
      description: t('feature1Desc'),
      animation: 'https://cdn.prod.website-files.com/6840945247cd2c16f5379c44/6849e5b932a981aef7dff98d_8d9533c8eeb4192b097b9a95176f721e_Cuentas%20multimoneda%2003.json',
    },
    {
      title: t('feature2Title'),
      description: t('feature2Desc'),
      animation: 'https://cdn.prod.website-files.com/6840945247cd2c16f5379c44/6849e5b944b39c17689a1d7c_8973dd144ef36e0defe81396c4db6968_Pagos%20internacionales-02.json',
    },
    {
      title: t('feature3Title'),
      description: t('feature3Desc'),
      animation: 'https://cdn.prod.website-files.com/6840945247cd2c16f5379c44/68497f74e84a3ca4f5147ef7_96842374f0fd21e6a127b9a99d2cfc4f_Conversor%20de%20divisas.json',
    },
    {
      title: t('feature4Title'),
      description: t('feature4Desc'),
      animation: 'https://cdn.prod.website-files.com/6840945247cd2c16f5379c44/68497f746019b3de4e302fa2_58a5414f1b12ce2eb7c25b982a8bd788_Tarjeta%20Finity.json',
    },
    {
      title: t('feature5Title'),
      description: t('feature5Desc'),
      animation: 'https://cdn.prod.website-files.com/6840945247cd2c16f5379c44/68519b14cc3d304549fd6841_7f3b109cf4c52bb37cce664cc3136782_Panel-de-control-central-Desktop.json',
    },
  ];

  // Detect scroll in this section to change active index (desktop)
  useEffect(() => {
    let lastWheelTime = 0;
    
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime < 800) return; // Debounce
      lastWheelTime = now;

      // Check if scroll is within solutions section
      const target = e.target as HTMLElement;
      const solutionsSection = document.querySelector('[data-solutions-section]');
      
      if (solutionsSection && solutionsSection.contains(target)) {
        if (e.deltaY > 0) {
          // Scroll down
          setActiveIndex((prev) => (prev + 1) % solutions.length);
        } else {
          // Scroll up
          setActiveIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [solutions.length]);

  // Handle mobile carousel navigation
  const handleMobileSwipe = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setMobileCarouselIndex((prev) => (prev + 1) % solutions.length);
    } else {
      setMobileCarouselIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
    }
  };

  return (
    <>
      {/* DESKTOP VERSION - Scroll-based Solutions */}
      <section className="hidden md:block relative w-full bg-black text-white overflow-hidden" data-solutions-section>
        {/* Header */}
        <div className="relative z-10 w-full flex flex-col items-center gap-16" style={{ paddingTop: 'var(--padding-section-y)', paddingBottom: 'var(--gap-large)' }}>
          <div className="finity-container w-full">
            <div className="flex flex-col items-center" style={{ gap: 'var(--gap-small)' }}>
              <p className="text-sm tracking-widest uppercase font-semibold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent" style={{ fontSize: 'var(--subheading)', fontWeight: 600, letterSpacing: '0.2em' }}>
                {t('solutionsHeader')}
              </p>
              <h2 className="text-center font-bold leading-tight max-w-3xl" style={{ fontSize: 'var(--h3)', lineHeight: '130%' }}>
                {t('solutionsSubheader')}
              </h2>
            </div>
          </div>
        </div>

        {/* Solutions section - Desktop: Text LEFT + Animation RIGHT (like Finity) */}
        <section className="relative z-5 flex items-center justify-center" style={{ minHeight: '100vh', paddingBottom: 'var(--padding-section-y)' }}>
          <div className="w-full flex items-center finity-container" style={{ gap: '0', position: 'relative' }}>
            {/* LEFT: Text content with huge vertical margin (like Finity's 30vh) */}
            <div className="flex-shrink-0 flex flex-col gap-10" style={{ 
              width: '40%',
              paddingTop: 'var(--margin-viewport-vertical)',
              paddingBottom: 'var(--margin-viewport-vertical)',
              paddingLeft: 'var(--margin-section-horizontal-lg)',
              paddingRight: '3em',
              position: 'relative'
            }}>
              {/* Step indicators on the left */}
              <div className="flex flex-col gap-2 absolute" style={{ left: 'var(--margin-section-horizontal-lg)', height: '280px', top: '50%', transform: 'translateY(-50%)' }}>
                {[0, 1, 2, 3, 4].map((_, i) => (
                  <div 
                    key={i}
                    className={`transition-all ${
                      i === activeIndex 
                        ? 'bg-gradient-to-b from-cyan-400 to-green-400' 
                        : 'bg-white'
                    }`}
                    style={{
                      width: '2px',
                      height: i === activeIndex ? '78px' : '19px',
                    }}
                  ></div>
                ))}
              </div>

              {/* Text content - animated transition */}
              <div className="transition-all duration-500" style={{ opacity: 1, paddingLeft: '20px' }}>
                <h3 className="text-white font-bold leading-tight mb-6" style={{ fontSize: 'var(--h3)', lineHeight: '130%' }}>
                  {solutions[activeIndex].title}
                </h3>
                <p className="text-white font-semibold leading-tight" style={{ fontSize: '22px', lineHeight: '130%' }}>
                  {solutions[activeIndex].description}
                </p>
              </div>
            </div>

            {/* RIGHT: Animation with sticky positioning (like Finity's .home-scroll_visual) */}
            <div className="flex-1 flex items-center justify-center" style={{ 
              height: '100vh',
              width: '60%',
              paddingTop: 'var(--margin-section-vertical-md)',
              paddingBottom: 'var(--margin-section-vertical-md)',
              paddingLeft: '3em',
              paddingRight: 'var(--margin-section-horizontal-md)',
              position: 'sticky',
              top: '0',
            }}>
              <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: '700px' }}>
                <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: '700px' }}>
                  <div style={{ position: 'relative', width: '600px', height: '400px', background: 'url(/src/assets/hero-plixum.png) no-repeat', backgroundSize: 'contain', borderRadius: '18px' }}>
                    <div className="highlight sol1" style={{ position: 'absolute', top: '120px', left: '180px', width: '120px', height: '120px', borderRadius: '50%', pointerEvents: 'none', background: 'rgba(128,128,128,0)', border: '2px solid transparent', animation: 'focusEffect 3s infinite 0s' }}></div>
                    <div className="highlight sol2" style={{ position: 'absolute', top: '170px', left: '300px', width: '120px', height: '120px', borderRadius: '50%', pointerEvents: 'none', background: 'rgba(128,128,128,0)', border: '2px solid transparent', animation: 'focusEffect 3s infinite 1s' }}></div>
                    <div className="highlight sol3" style={{ position: 'absolute', top: '220px', left: '420px', width: '120px', height: '120px', borderRadius: '50%', pointerEvents: 'none', background: 'rgba(128,128,128,0)', border: '2px solid transparent', animation: 'focusEffect 3s infinite 2s' }}></div>
                    <style>{`
                      @keyframes focusEffect {
                        0%, 33% {
                          opacity: 1;
                          transform: scale(1.04);
                          background: rgba(128,128,128,0.12);
                          box-shadow: 0 0 12px 2px #fff;
                          filter: brightness(1.10);
                        }
                        33.1%, 100% {
                          opacity: 0;
                          transform: scale(1);
                          background: rgba(128,128,128,0);
                          border: 2px solid transparent;
                          box-shadow: none;
                          filter: brightness(1);
                        }
                      }
                    `}</style>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* MOBILE VERSION - Carousel Solutions */}
      <section className="md:hidden relative w-full bg-black text-white overflow-hidden" style={{ paddingTop: 'var(--padding-section-y)', paddingBottom: 'var(--padding-section-y)' }}>
        <div className="finity-container">
          {/* Header */}
          <div className="flex flex-col items-center mb-12" style={{ gap: 'var(--gap-small)' }}>
            <p className="text-sm tracking-widest uppercase font-semibold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent" style={{ fontSize: 'var(--subheading)', fontWeight: 600, letterSpacing: '0.2em' }}>
              {t('solutionsHeader')}
            </p>
            <h2 className="text-center font-bold leading-tight" style={{ fontSize: 'var(--h3)', lineHeight: '130%' }}>
              {t('solutionsSubheader')}
            </h2>
          </div>

          {/* Mobile Carousel */}
          <div className="flex flex-col" style={{ gap: 'var(--gap-large)' }}>
            {/* Current solution card */}
            <div className="flex flex-col" style={{ gap: 'var(--gap-medium)' }}>
              {/* Animation - Bigger on mobile */}
              <div className="w-full rounded-lg overflow-hidden backdrop-blur-sm" style={{ 
                background: 'rgba(215, 215, 215, 0.15)',
                backdropFilter: 'blur(25px)',
                borderRadius: '18.45px',
                height: 'clamp(300px, 70vh, 500px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', background: 'url(/src/assets/hero-plixum.png) no-repeat', backgroundSize: 'contain', borderRadius: '18px' }}>
                  <div className="highlight sol1" style={{ position: 'absolute', top: '25%', left: '29%', width: '22vw', height: '22vw', minWidth: '80px', minHeight: '80px', maxWidth: '120px', maxHeight: '120px', borderRadius: '50%', pointerEvents: 'none', background: 'rgba(128,128,128,0)', border: '2px solid transparent', animation: 'focusEffect 3s infinite 0s' }}></div>
                  <div className="highlight sol2" style={{ position: 'absolute', top: '38%', left: '48%', width: '22vw', height: '22vw', minWidth: '80px', minHeight: '80px', maxWidth: '120px', maxHeight: '120px', borderRadius: '50%', pointerEvents: 'none', background: 'rgba(128,128,128,0)', border: '2px solid transparent', animation: 'focusEffect 3s infinite 1s' }}></div>
                  <div className="highlight sol3" style={{ position: 'absolute', top: '51%', left: '67%', width: '22vw', height: '22vw', minWidth: '80px', minHeight: '80px', maxWidth: '120px', maxHeight: '120px', borderRadius: '50%', pointerEvents: 'none', background: 'rgba(128,128,128,0)', border: '2px solid transparent', animation: 'focusEffect 3s infinite 2s' }}></div>
                  <style>{`
                    @keyframes focusEffect {
                      0%, 33% {
                        opacity: 1;
                        transform: scale(1.04);
                        background: rgba(128,128,128,0.12);
                        border: 2px solid #fff;
                        box-shadow: 0 0 12px 2px #fff;
                        filter: brightness(1.10);
                      }
                      33.1%, 100% {
                        opacity: 0;
                        transform: scale(1);
                        background: rgba(128,128,128,0);
                        border: 2px solid transparent;
                        box-shadow: none;
                        filter: brightness(1);
                      }
                    }
                  `}</style>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col" style={{ gap: 'var(--gap-small)' }}>
                <h3 className="text-white font-bold leading-tight" style={{ fontSize: 'clamp(18px, 4vw, 28px)', lineHeight: '130%' }}>
                  {solutions[mobileCarouselIndex].title}
                </h3>
                <p className="text-white/80 leading-tight" style={{ fontSize: 'var(--paragraph)', lineHeight: '128%' }}>
                  {solutions[mobileCarouselIndex].description}
                </p>
              </div>
            </div>

            {/* Carousel indicators - Progress bar style */}
            <div className="flex flex-col" style={{ gap: '8px' }}>
              <div className="flex gap-1">
                {solutions.map((_, idx) => (
                  <div 
                    key={idx}
                    className="flex-1 h-1 rounded-full transition-all"
                    style={{
                      background: idx === mobileCarouselIndex 
                        ? 'linear-gradient(90deg, #2cdbff 0%, #6ceac7 100%)'
                        : 'rgba(255, 255, 255, 0.2)',
                      cursor: 'pointer'
                    }}
                    onClick={() => setMobileCarouselIndex(idx)}
                  ></div>
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-3 justify-center mt-4">
                <button
                  onClick={() => handleMobileSwipe('prev')}
                  className="px-6 py-2 rounded-full border border-white/20 hover:border-cyan-400/50 text-white transition-colors"
                  style={{ fontSize: 'var(--button-medium)', fontWeight: 600 }}
                >
                  ← Anterior
                </button>
                <button
                  onClick={() => handleMobileSwipe('next')}
                  className="px-6 py-2 rounded-full border border-white/20 hover:border-cyan-400/50 text-white transition-colors"
                  style={{ fontSize: 'var(--button-medium)', fontWeight: 600 }}
                >
                  Siguiente →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
