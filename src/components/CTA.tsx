
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { ContactForm } from './ContactForm';

export const CTA = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-black">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('ctaSubtitle')}
          </p>
          <Button variant="hero" size="lg" className="gap-2 text-lg px-8 py-6 h-auto" onClick={() => setOpen(true)}>
            {t('ctaButton')}
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-8 relative animate-fade-in">
              <button className="absolute top-4 right-4 text-gray-500 hover:text-black" onClick={() => setOpen(false)} aria-label="Close">
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold mb-6 text-center">Contact Plixum</h3>
              <ContactForm />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
