import { useLanguage } from '@/contexts/LanguageContext';

export const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    { number: '01', title: t('howStep1Title'), desc: t('howStep1Desc') },
    { number: '02', title: t('howStep2Title'), desc: t('howStep2Desc') },
    { number: '03', title: t('howStep3Title'), desc: t('howStep3Desc') },
    { number: '04', title: t('howStep4Title'), desc: t('howStep4Desc') },
    { number: '05', title: t('howStep5Title'), desc: t('howStep5Desc') },
    { number: '06', title: t('howStep6Title'), desc: t('howStep6Desc') },
  ];

  return (
    <section className="relative w-full bg-black text-white overflow-hidden" style={{ paddingTop: 'var(--padding-section-y)', paddingBottom: 'var(--padding-section-y)' }}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(44, 219, 255, 0.04) 0%, transparent 70%)' }} />

      <div className="finity-container relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-20" style={{ gap: 'var(--gap-small)' }}>
          <p className="text-sm tracking-widest uppercase font-semibold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent" style={{ fontSize: 'var(--subheading)', fontWeight: 600, letterSpacing: '0.2em' }}>
            {t('howHeader')}
          </p>
          <h2 className="text-center font-bold max-w-3xl" style={{ fontSize: 'var(--h3)', lineHeight: '130%' }}>
            {t('howSubheader')}
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--gap-medium)' }}>
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(10px)',
                padding: '32px',
                gap: '16px',
              }}
            >
              {/* Step number */}
              <span
                className="font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent"
                style={{ fontSize: '13px', letterSpacing: '0.15em', fontWeight: 700 }}
              >
                {step.number}
              </span>

              {/* Connector line (not on last item in each row) */}
              <div
                className="absolute hidden lg:block"
                style={{
                  top: '40px',
                  right: '-1px',
                  width: '1px',
                  height: '40px',
                  background: idx % 3 === 2 ? 'transparent' : 'linear-gradient(to bottom, rgba(44,219,255,0.3), transparent)',
                }}
              />

              {/* Title */}
              <h3 className="text-white font-semibold" style={{ fontSize: '18px', lineHeight: '1.3', margin: 0 }}>
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-white/60" style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
