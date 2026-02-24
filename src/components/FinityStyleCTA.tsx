import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const FinityStyleCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
        <h2 className="text-5xl md:text-6xl font-bold text-black">
          {t('ctaTitle')}
        </h2>
        <p className="text-lg text-gray-600 font-light">
          {t('ctaSubtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <Button size="lg" className="px-8 py-4 text-base font-semibold rounded-lg bg-black hover:bg-gray-800 text-white">
            {t('ctaButton')}
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-4 text-base font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-50">
            {t('heroCtaSecondary')}
          </Button>
        </div>
      </div>
    </section>
  );
};
