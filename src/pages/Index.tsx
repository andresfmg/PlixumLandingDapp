import { Header } from '@/components/Header';
import { Hero } from '@/components/finity/Hero';
import { Solutions } from '@/components/finity/Solutions';
import { Markets } from '@/components/finity/Markets';
import { APISection } from '@/components/finity/APISection';
import { CTA } from '@/components/finity/CTA';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="bg-black text-white min-h-screen">
        <Header />
        <main>
          <Hero />
          <Solutions />
          <Markets />
          <APISection />
          <CTA />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;
