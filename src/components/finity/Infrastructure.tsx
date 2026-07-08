import { useLanguage } from '@/contexts/LanguageContext';

const providers = [
  {
    nameKey: 'infra1Name',
    roleKey: 'infra1Role',
    capabilitiesKey: 'infra1Caps',
    badge: 'Banking Rails',
    color: '#2cdbff',
    rails: ['ACH', 'Wire', 'SEPA', 'PIX', 'SPEI', 'Faster Payments'],
  },
  {
    nameKey: 'infra2Name',
    roleKey: 'infra2Role',
    capabilitiesKey: 'infra2Caps',
    badge: 'Blockchain',
    color: '#9945ff',
    rails: ['Settlement', 'Smart Contracts', 'Conversión', 'Liquidez Digital'],
  },
  {
    nameKey: 'infra3Name',
    roleKey: 'infra3Role',
    capabilitiesKey: 'infra3Caps',
    badge: 'Digital Liquidity',
    color: '#6ceac7',
    rails: ['Asset Swaps', 'Optimal Routing', 'Digital Liquidity'],
  },
];

export const Infrastructure = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-black text-white overflow-hidden" style={{ paddingTop: 'var(--padding-section-y)', paddingBottom: 'var(--padding-section-y)' }}>
      <div className="finity-container">
        {/* Header */}
        <div className="flex flex-col items-center mb-20" style={{ gap: 'var(--gap-small)' }}>
          <p className="text-sm tracking-widest uppercase font-semibold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent" style={{ fontSize: 'var(--subheading)', fontWeight: 600, letterSpacing: '0.2em' }}>
            {t('infraHeader')}
          </p>
          <h2 className="text-center font-bold max-w-3xl" style={{ fontSize: 'var(--h3)', lineHeight: '130%' }}>
            {t('infraSubheader')}
          </h2>
          <p className="text-center text-white/60 max-w-2xl" style={{ fontSize: 'var(--paragraph)', lineHeight: '1.6' }}>
            {t('infraCopy')}
          </p>
        </div>

        {/* Providers */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--gap-medium)' }}>
          {providers.map((provider, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-xl border border-white/10 hover:border-white/25 transition-all"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(10px)',
                padding: '32px',
                gap: '20px',
              }}
            >
              {/* Badge */}
              <span
                className="self-start rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background: `${provider.color}18`,
                  border: `1px solid ${provider.color}40`,
                  color: provider.color,
                  letterSpacing: '0.1em',
                }}
              >
                {provider.badge}
              </span>

              {/* Provider name */}
              <div>
                <h3 className="text-white font-bold" style={{ fontSize: '22px', lineHeight: '1.2', marginBottom: '6px' }}>
                  {t(provider.nameKey)}
                </h3>
                <p className="text-white/50" style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em' }}>
                  {t(provider.roleKey)}
                </p>
              </div>

              {/* Description */}
              <p className="text-white/60" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                {t(provider.capabilitiesKey)}
              </p>

              {/* Rails/capabilities tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                {provider.rails.map((rail, rIdx) => (
                  <span
                    key={rIdx}
                    className="rounded-md px-2 py-1 text-white/50"
                    style={{ fontSize: '11px', fontWeight: 500, background: 'rgba(255,255,255,0.06)', letterSpacing: '0.05em' }}
                  >
                    {rail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/30 mt-12" style={{ fontSize: '13px', lineHeight: '1.6' }}>
          {t('infraNote')}
        </p>
      </div>
    </section>
  );
};
