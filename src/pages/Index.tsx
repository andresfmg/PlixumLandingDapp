import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { BusinessAccounts } from '@/components/BusinessAccounts';
import { Yields } from '@/components/Yields';
import { HowItWorks } from '@/components/HowItWorks';
import { Markets } from '@/components/Markets';
import { UseCases } from '@/components/UseCases';
import { Solutions } from '@/components/Solutions';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Features />
          <BusinessAccounts />
          <Yields />
          <HowItWorks />
          <Markets />
          <UseCases />
          <Solutions />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
