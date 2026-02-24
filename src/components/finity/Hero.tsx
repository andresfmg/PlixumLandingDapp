import { useLanguage } from '@/contexts/LanguageContext';
import { LottiePlayer } from './LottiePlayer';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-black text-white overflow-hidden" style={{ minHeight: '800px' }}>
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-20 right-0" style={{ width: '800px', height: '800px', background: 'radial-gradient(circle, #2bdaff 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="absolute bottom-0 left-0" style={{ width: '800px', height: '800px', background: 'radial-gradient(circle, #6ceac7 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center finity-container" style={{ paddingTop: 'var(--padding-section-y)', paddingBottom: 'var(--padding-section-y)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(24px, 5vw, 72px)', width: '100%', alignItems: 'center' }}>
          {/* Left: Texts and buttons */}
          <div className="flex flex-col" style={{ gap: 'var(--gap-large)' }}>
            {/* Title and description */}
            <div className="flex flex-col" style={{ gap: 'var(--gap-xs)' }}>
              <h1 className="text-white font-bold" style={{ fontSize: 'var(--h1)', lineHeight: '130%', margin: 0 }}>
                {t('heroTitle')}
              </h1>
              <p className="text-white" style={{ fontSize: 'var(--paragraph)', fontWeight: 400, lineHeight: '128%', margin: 0 }}>
                {t('heroCopy')}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              {/* Gradient button */}
              <a 
                href="#" 
                className="bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center no-underline"
                style={{ padding: '10px 24px' }}
              >
                <span className="text-black font-semibold" style={{ fontSize: 'var(--button-medium)' }}>
                  {t('heroCtaPrimary')}
                </span>
              </a>

              {/* Outline button */}
              <a 
                href="#" 
                className="border border-white rounded-full flex items-center justify-center no-underline"
                style={{ padding: '10px 24px' }}
              >
                <span className="text-white font-semibold" style={{ fontSize: 'var(--button-medium)' }}>
                  {t('heroCtaSecondary')}
                </span>
              </a>
            </div>
          </div>

          {/* Right: Animations - Dispositivo + Planeta */}
          <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: 'clamp(400px, 80vh, 600px)', position: 'relative' }}>
            {/* Background animation - Planeta */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 0 }}>
              <LottiePlayer 
                src="https://cdn.prod.website-files.com/6840945247cd2c16f5379c44/684843b18c04ea886b07d06c_a68f2e77518d3d7a3e9cc122679d8910_Planeta-header-02.json"
                className="w-full h-full"
                loop={true}
                autoplay={true}
              />
            </div>

            {/* Foreground animation - Dispositivo */}
            <div className="absolute" style={{ 
              top: '17%', 
              left: '20%', 
              right: 'auto',
              zIndex: 10,
              width: 'clamp(250px, 80vw, 600px)',
              height: 'clamp(250px, 80vw, 600px)'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <div className="canvas" style={{ position: 'relative', width: '900px', height: '600px', background: 'url(/api-home.avif) no-repeat', backgroundSize: 'contain', borderRadius: '15px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                  <div className="highlight usd" style={{ position: 'absolute', top: '340px', left: '205px', width: '170px', height: '90px', borderRadius: '8px', pointerEvents: 'none', background: 'rgba(128,128,128,0)', border: '1.5px solid transparent', animation: 'focusEffect 3s infinite 0s' }}></div>
                  <div className="highlight eur" style={{ position: 'absolute', top: '340px', left: '390px', width: '170px', height: '90px', borderRadius: '8px', pointerEvents: 'none', background: 'rgba(128,128,128,0)', border: '1.5px solid transparent', animation: 'focusEffect 3s infinite 1s' }}></div>
                  <div className="highlight pools" style={{ position: 'absolute', top: '340px', left: '580px', width: '170px', height: '90px', borderRadius: '8px', pointerEvents: 'none', background: 'rgba(128,128,128,0)', border: '1.5px solid transparent', animation: 'focusEffect 3s infinite 2s' }}></div>
                  <style>{`
                    @keyframes focusEffect {
                      0%, 33% {
                        opacity: 1;
                        transform: scale(1.02);
                        background: rgba(128,128,128,0.08);
                        border: 1.5px solid #fff;
                        box-shadow: 0 0 8px 2px #fff;
                        filter: brightness(1.05);
                      }
                      33.1%, 100% {
                        opacity: 0;
                        transform: scale(1);
                        background: rgba(128,128,128,0);
                        border: 1.5px solid transparent;
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
      </div>
    </section>
  );
};
