import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const FinityStyleHero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20 px-4">
      <div className="container mx-auto max-w-5xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
            {t('heroTitle')}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 font-light">
            {t('heroSubtitle')}
          </h2>
        </div>
        
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
          {t('heroCopy')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <Button size="lg" className="px-8 py-4 text-base font-semibold rounded-lg bg-black hover:bg-gray-800 text-white">
            {t('heroCtaPrimary')}
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-4 text-base font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-50">
            {t('heroCtaSecondary')}
          </Button>
        </div>
      </div>
    </section>
  );
};
