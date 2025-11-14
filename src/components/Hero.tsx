import { ArrowRight, Wallet, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-plixum.png';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Powered by Solana DeFi removed as requested */}
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-black">
              Plixum: The Non-Custodial DeFi Platform Bridging LATAM and US Banking
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Advanced decentralized finance on Solana. True user ownership, multi-protocol yield, seamless onramp/offramp for LATAM, and US virtual accounts with debit cards. Experience secure, transparent, and borderless financial services.
            </p>
            <ul className="mt-6 mb-8 space-y-2 text-lg text-black font-medium">
              <li>• <strong>Non-Custodial Architecture:</strong> You control your keys and funds—always.</li>
              <li>• <strong>Multi-Protocol Integration:</strong> Access Jupiter Lend, MarginFi, Solend, Raydium, Orca, and more.</li>
              <li>• <strong>LATAM On/Off Ramp:</strong> PSE (Colombia), SPEI (Mexico), PIX (Brazil), CVU (Argentina).</li>
              <li>• <strong>US Banking:</strong> Virtual USD accounts, ACH/Wire, and Visa debit cards via Bridge.xyz.</li>
              <li>• <strong>Competitive Yields:</strong> 3–15% APY on stablecoins through DeFi protocols.</li>
              <li>• <strong>Built on Solana:</strong> Fast, low-cost, and scalable blockchain infrastructure.</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                <span className="inline-block align-middle">
                  <svg width="36" height="36" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17,7.81a6.25,6.25,0,0,0,1.28.13,5.64,5.64,0,0,0,4-1.64A5.81,5.81,0,0,0,23.81,1,1,1,0,0,0,23,.19,5.81,5.81,0,0,0,17.7,1.7,5.81,5.81,0,0,0,16.19,7,1,1,0,0,0,17,7.81Zm2.14-4.69a3.66,3.66,0,0,1,2.81-1.05,3.66,3.66,0,0,1-1.05,2.81,3.61,3.61,0,0,1-2.81,1A3.68,3.68,0,0,1,19.12,3.12Z"/>
                    <path d="M28.16,23.28a6,6,0,0,1-.63-10.17,1,1,0,0,0,.41-.68,1,1,0,0,0-.21-.77A11.19,11.19,0,0,0,23.29,8.4a5.59,5.59,0,0,0-4.16,0l-1.79.72a3.62,3.62,0,0,1-2.67,0l-1.8-.72a5.59,5.59,0,0,0-4.16,0A11.08,11.08,0,0,0,2.34,22.12l.35.84a26.81,26.81,0,0,0,3.75,6.5,6.06,6.06,0,0,0,7.75,2.05,4,4,0,0,1,3.62,0,6.06,6.06,0,0,0,7.71-2,27.93,27.93,0,0,0,3.06-4.92A1,1,0,0,0,28.16,23.28ZM23.9,28.35a4.05,4.05,0,0,1-5.19,1.37,6.14,6.14,0,0,0-5.42,0,4.08,4.08,0,0,1-5.23-1.43,25.63,25.63,0,0,1-3.52-6.08l-.32-.78A9.06,9.06,0,0,1,9.46,10.26a3.5,3.5,0,0,1,2.66,0l1.8.72a5.64,5.64,0,0,0,4.16,0l1.8-.72a3.53,3.53,0,0,1,2.67,0,9.18,9.18,0,0,1,3,1.93,8,8,0,0,0,.87,12.34A27.67,27.67,0,0,1,23.9,28.35Z"/>
                  </svg>
                </span>
                <span>Download on iPhone</span>
              </Button>
              <Button variant="heroOutline" size="lg" className="gap-2">
                <span className="inline-block align-middle">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="#12C8C0" xmlns="http://www.w3.org/2000/svg"><path d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z"/></svg>
                </span>
                <span>Download on Android</span>
              </Button>
            </div>
            
            
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="Plixum Digital Wallet Platform" 
              className="relative w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
