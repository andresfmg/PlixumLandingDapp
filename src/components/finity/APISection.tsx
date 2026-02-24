import { useLanguage } from '@/contexts/LanguageContext';
import { LottiePlayer } from './LottiePlayer';
import { useEffect, useRef, useState } from 'react';

export const APISection = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const features = [
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

  // Parallax scroll effect like Finity
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1) when container is in view
      // startsEntering at 80% from top, startsExiting at 30% from top
      const scrollStart = windowHeight * 0.8;
      const scrollEnd = windowHeight * 0.3;
      
      let progress = 0;
      if (rect.top < scrollStart && rect.top > scrollEnd) {
        progress = (scrollStart - rect.top) / (scrollStart - scrollEnd);
        progress = Math.min(1, Math.max(0, progress));
      } else if (rect.top <= scrollEnd) {
        progress = 1;
      }

      setScrollProgress(progress);

      // Apply parallax transform
      // At 30% progress: lottie moves -8% x, -6% y; image moves +8% x, +6% y
      // At 50% progress and beyond: both back to 0
      let moveAmount = 0;
      if (progress <= 0.5) {
        moveAmount = progress * 2 * -8; // Linearly from 0 to -8% at 50%
      } else {
        moveAmount = (1 - progress) * 2 * -8; // Linearly from -8% to 0 from 50% to 100%
      }

      if (lottieRef.current) {
        lottieRef.current.style.transform = `translate(${moveAmount}%, ${moveAmount * 0.75}%)`;
      }
      if (imageRef.current) {
        imageRef.current.style.transform = `translate(${-moveAmount}%, ${-moveAmount * 0.75}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* SECCIÓN 1: INTEGRACIÓN API (con imagen y animación) - Estructura exacta de Finity */}
      <section 
        ref={containerRef}
        className="relative w-full bg-black text-white overflow-hidden" 
        style={{ paddingTop: 'var(--padding-section-y)', paddingBottom: 'var(--padding-section-y)' }}
      >
        <div className="finity-container">
          {/* Titles */}
          <div className="flex flex-col items-center gap-6 w-full max-w-3xl mx-auto mb-12">
            <p className="text-sm tracking-widest uppercase font-semibold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent" style={{ fontSize: 'var(--subheading)', fontWeight: 600, letterSpacing: '0.2em' }}>
              {t('apiSectionTitle')}
            </p>
            <h2 className="text-center text-white font-bold leading-tight" style={{ fontSize: 'var(--h3)', lineHeight: '130%' }}>
              {t('apiSectionSubtitle')}
            </h2>
          </div>

          {/* Description */}
          <p className="text-white text-center max-w-2xl mx-auto mb-8" style={{ fontSize: 'var(--paragraph)', lineHeight: '128%', fontWeight: 400 }}>
            {t('apiSectionCopy')}
          </p>

          {/* Download button */}
          <div className="flex justify-center mb-20">
            <a 
              href="#"
              className="z-5 flex gap-2 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex-none justify-center items-center no-underline"
              style={{ padding: '10px 24px' }}
            >
              <p className="text-black font-semibold" style={{ fontSize: 'var(--button-medium)', lineHeight: '112%' }}>
                {t('downloadDocs')}
              </p>
            </a>
          </div>

          {/* api-frames: flex column relative position like Finity */}
          <div 
            className="relative w-full"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'clamp(450px, 100vh, 800px)',
              gap: '10px'
            }}
          >
            {/* lottie-api: absolute positioned left */}
            <div
              ref={lottieRef}
              className="relative"
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: 'clamp(300px, 90%, 1000px)',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '16px',
                zIndex: 10,
                backdropFilter: 'blur(5px)',
                overflow: 'hidden',
                boxShadow: '0.5px 0.5px 2px rgba(47, 63, 87, 0.3)',
                transition: 'transform 0.5s ease'
              }}
            >
              <LottiePlayer 
                src="https://cdn.prod.website-files.com/6840945247cd2c16f5379c44/68508f9343eb69ed271abf22_API%20Mobile.json"
                loop={true}
                autoplay={true}
              />
            </div>
            
            {/* portal-api: absolute positioned right-bottom */}
            <img 
              ref={imageRef}
              src="/api-home.avif" 
              alt="API Portal"
              style={{
                position: 'absolute',
                bottom: '0',
                right: '-2%',
                width: 'clamp(300px, 90%, 1000px)',
                objectFit: 'fill',
                maxWidth: 'none',
                zIndex: 0,
                transition: 'transform 0.5s ease'
              }}
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: CARACTERÍSTICAS API (3 features separados) */}
      <section className="relative w-full bg-black text-white overflow-hidden" style={{ paddingTop: 'var(--padding-section-y)', paddingBottom: 'var(--padding-section-y)' }}>
        <div className="finity-container">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--gap-medium)', width: '100%' }}>
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col" style={{ gap: 'var(--gap-small)' }}>
                {/* Icon placeholder with gradient line */}
                <div className="bg-gradient-to-b from-cyan-400 to-green-400 flex-shrink-0" style={{ width: '3px', height: '24px' }}></div>
                
                {/* Text */}
                <div className="flex flex-col" style={{ gap: 'var(--gap-xs)' }}>
                  <h3 className="text-white font-semibold leading-tight" style={{ fontSize: '20px', fontWeight: 600, lineHeight: '130%' }}>
                    {feature.title}
                  </h3>
                  <p className="text-white leading-tight" style={{ fontSize: 'var(--paragraph)', fontWeight: 400, lineHeight: '128%' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
