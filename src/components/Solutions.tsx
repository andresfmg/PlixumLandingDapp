import { Wallet, Code2, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
            <div
              className="absolute animate-pulse"
              style={{
                left: highlight.left,
                top: highlight.top,
                width: highlight.width,
                height: highlight.height,
                pointerEvents: 'none',
                zIndex: 2,
                borderRadius: '24px',
                boxShadow: '0 0 60px 30px rgba(34, 197, 94, 0.45), 0 0 120px 60px rgba(34, 197, 94, 0.25)',
                background: 'transparent',
                border: 'none',
                filter: 'blur(2px)',
                opacity: 0.85,
              }}
            />
      title: t('solution2Title'),
      description: t('solution2Desc'),
    },
    {
      icon: TrendingUp,
      title: t('solution3Title'),
      description: t('solution3Desc'),
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{background: 'transparent'}}>
      {/* Fondo degradado eliminado para asegurar transparencia total */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            {t('solutionsTitle')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl transition-all duration-300 relative overflow-visible"
              style={{
                background: 'transparent',
                border: 'none',
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  zIndex: 0,
                  boxShadow: '0 0 40px 10px rgba(34, 197, 94, 0.45), 0 0 80px 30px rgba(34, 197, 94, 0.25)',
                }}
              />
              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                <p className="text-muted-foreground text-lg">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
