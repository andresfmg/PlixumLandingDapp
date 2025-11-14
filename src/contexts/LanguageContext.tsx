import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    heroTitle: 'Plixum: Non-Custodial DeFi for LATAM & US',
    heroSubtitle: 'Advanced decentralized finance on Solana. True user ownership, multi-protocol yield, seamless onramp/offramp for LATAM, and US virtual accounts with debit cards. Experience secure, transparent, and borderless financial services.',
    heroCtaPrimary: 'Download on iPhone',
    heroCtaSecondary: 'Download on Android',

    // Features
    featuresTitle: 'Why Plixum Stands Out',
    feature1Title: 'Non-Custodial Architecture',
    feature1Desc: 'You control your keys and funds—always. No centralized risk, no third-party custody.',
    feature2Title: 'Multi-Protocol Integration',
    feature2Desc: 'Access Jupiter Lend, MarginFi, Solend, Raydium, Orca, Kamino, Jito, and more from one dashboard.',
    feature3Title: 'LATAM On/Off Ramp',
    feature3Desc: 'Deposit and withdraw via PSE (Colombia), SPEI (Mexico), PIX (Brazil), CVU (Argentina).',
    feature4Title: 'US Banking & Cards',
    feature4Desc: 'Virtual USD accounts, ACH/Wire, and Visa debit cards via Bridge.xyz. Use your crypto globally.',

    // Markets
    marketsTitle: 'Who Is Plixum For?',
    market1Title: 'LATAM Individuals & Businesses',
    market1Desc: 'Seamless access to DeFi, stablecoins, and US banking for users and companies in Latin America.',
    market2Title: 'Freelancers & Remote Workers',
    market2Desc: 'Receive payments in USD, convert to crypto, and spend globally with a Visa card.',
    market3Title: 'Crypto-Native Users',
    market3Desc: 'Maximize yield, diversify risk, and manage assets across top Solana protocols.',
    market4Title: 'Remittance & Commerce',
    market4Desc: 'Send, receive, and convert funds instantly with low fees and no borders.',

    // Solutions
    solutionsTitle: 'Plixum Core Solutions',
    solution1Title: 'PDA Smart Contracts',
    solution1Desc: 'Each user gets a unique, non-custodial smart contract on Solana for secure, automated DeFi.',
    solution2Title: 'Unified DeFi Dashboard',
    solution2Desc: 'Manage lending, swaps, yield, and more across integrated protocols in one place.',
    solution3Title: 'Fiat On/Off Ramp',
    solution3Desc: 'Move between crypto and local currency with regulated partners and instant settlement.',

    // CTA
    ctaTitle: 'Ready to Experience True DeFi?',
    ctaSubtitle: 'Join Plixum and bridge the gap between traditional and decentralized finance. Secure, borderless, and built for you.',
    ctaButton: 'Contact Plixum',

    // Stats
    stat1: 'No Custody Risk',
    stat2: 'Multi-Protocol Access',
    stat3: 'LATAM & US Banking',

    // Business Accounts
    businessTitle: 'Business & Personal Accounts',
    businessSubtitle: 'All you need to manage digital assets, earn yield, and access global banking.',
    business1Title: 'Multi-Currency & Stablecoins',
    business1Desc: 'Accept and hold USDC, USDT, and more. Instant conversion and on-chain transparency.',
    business2Title: 'Earn up to 6% APY',
    business2Desc: 'Competitive yields on your deposits via top DeFi protocols. Withdraw anytime.',
    business3Title: 'Mass Payouts & Remittances',
    business3Desc: 'Send payments to suppliers, contractors, and employees worldwide with minimal fees.',
    business4Title: 'API & Automation',
    business4Desc: 'Integrate Plixum with your business systems for seamless operations.',
    business5Title: 'Unified Analytics',
    business5Desc: 'Track balances, yields, and transactions in real time across all services.',
    business6Title: 'Priority Support',
    business6Desc: 'Get expert help and compliance guidance for your business or personal needs.',

    // How It Works
    howItWorksTitle: 'How Plixum Works',
    step1Title: 'Create Your Wallet',
    step1Desc: 'Sign up and get a unique, non-custodial smart contract wallet on Solana.',
    step2Title: 'Deposit or Onramp',
    step2Desc: 'Fund your wallet with crypto or local currency via supported payment rails.',
    step3Title: 'Access DeFi & Banking',
    step3Desc: 'Lend, swap, earn yield, or open a US virtual account and get a Visa card.',
    step4Title: 'Withdraw or Spend',
    step4Desc: 'Move funds to your bank, spend with your card, or deploy to DeFi—all in one place.',

    // Use Cases
    useCasesTitle: 'Real-World Use Cases',
    useCase1Title: 'LATAM E-commerce',
    useCase1Desc: 'Accept crypto and stablecoin payments, settle in local currency, and access global markets.',
    useCase2Title: 'Freelance & Remote Work',
    useCase2Desc: 'Get paid in USD, convert to crypto, and spend instantly with a Visa card.',
    useCase3Title: 'Yield Generation',
    useCase3Desc: 'Put your assets to work with automated, multi-protocol DeFi strategies.',
    useCase4Title: 'Remittances',
    useCase4Desc: 'Send money across borders instantly and affordably, with no banks or intermediaries.',

    // Yields
    yieldsTitle: 'Earn Competitive Yields',
    yieldsSubtitle: 'Your deposits, your yield—no lockups, no custody.',
    yieldsDesc: 'Generate up to 6% APY on stablecoins via secure, audited DeFi protocols. Withdraw anytime.',
    yieldsApy: 'Up to 6% APY',
    yieldsFeature1: 'No minimum deposit',
    yieldsFeature2: 'Daily compounding',
    yieldsFeature3: 'Withdraw anytime',
    yieldsFeature4: 'Audited protocols',
  },
  es: {
    // Hero
    heroTitle: 'Plixum: DeFi No Custodiado para LATAM y USA',
    heroSubtitle: 'Finanzas descentralizadas avanzadas sobre Solana. Propiedad real del usuario, rendimiento multi-protocolo, onramp/offramp para LATAM y cuentas virtuales en USA con tarjetas. Servicios financieros seguros, transparentes y sin fronteras.',
    heroCtaPrimary: 'Descargar en iPhone',
    heroCtaSecondary: 'Descargar en Android',

    // Features
    featuresTitle: '¿Por qué Plixum es diferente?',
    feature1Title: 'Arquitectura No Custodiada',
    feature1Desc: 'Tú controlas tus llaves y fondos. Sin riesgo centralizado, sin custodia de terceros.',
    feature2Title: 'Integración Multi-Protocolo',
    feature2Desc: 'Accede a Jupiter Lend, MarginFi, Solend, Raydium, Orca, Kamino, Jito y más desde un solo panel.',
    feature3Title: 'On/Off Ramp LATAM',
    feature3Desc: 'Deposita y retira vía PSE (Colombia), SPEI (México), PIX (Brasil), CVU (Argentina).',
    feature4Title: 'Banca y Tarjetas USA',
    feature4Desc: 'Cuentas virtuales USD, ACH/Wire y tarjetas Visa vía Bridge.xyz. Usa tu cripto globalmente.',

    // Markets
    marketsTitle: '¿Para quién es Plixum?',
    market1Title: 'Personas y Empresas LATAM',
    market1Desc: 'Acceso sencillo a DeFi, stablecoins y banca USA para usuarios y compañías en Latinoamérica.',
    market2Title: 'Freelancers y Remotos',
    market2Desc: 'Recibe pagos en USD, convierte a cripto y gasta globalmente con tarjeta Visa.',
    market3Title: 'Usuarios Cripto-Nativos',
    market3Desc: 'Maximiza rendimiento, diversifica riesgo y gestiona activos en los mejores protocolos de Solana.',
    market4Title: 'Remesas y Comercio',
    market4Desc: 'Envía, recibe y convierte fondos al instante, con bajas comisiones y sin fronteras.',

    // Solutions
    solutionsTitle: 'Soluciones Core de Plixum',
    solution1Title: 'Smart Contracts PDA',
    solution1Desc: 'Cada usuario obtiene un smart contract único y no custodiado en Solana para DeFi seguro y automatizado.',
    solution2Title: 'Dashboard DeFi Unificado',
    solution2Desc: 'Gestiona préstamos, swaps, rendimiento y más en protocolos integrados desde un solo lugar.',
    solution3Title: 'On/Off Ramp Fiat',
    solution3Desc: 'Mueve fondos entre cripto y moneda local con partners regulados y liquidación instantánea.',

    // CTA
    ctaTitle: '¿Listo para vivir el verdadero DeFi?',
    ctaSubtitle: 'Únete a Plixum y conecta el mundo financiero tradicional con el descentralizado. Seguro, sin fronteras y hecho para ti.',
    ctaButton: 'Contactar a Plixum',

    // Stats
    stat1: 'Sin riesgo de custodia',
    stat2: 'Acceso multi-protocolo',
    stat3: 'Banca LATAM y USA',

    // Business Accounts
    businessTitle: 'Cuentas Personales y Empresariales',
    businessSubtitle: 'Todo para gestionar activos digitales, ganar rendimiento y acceder a banca global.',
    business1Title: 'Multi-moneda y Stablecoins',
    business1Desc: 'Acepta y guarda USDC, USDT y más. Conversión instantánea y transparencia on-chain.',
    business2Title: 'Gana hasta 6% APY',
    business2Desc: 'Rendimientos competitivos en tus depósitos vía los mejores protocolos DeFi. Retira cuando quieras.',
    business3Title: 'Pagos Masivos y Remesas',
    business3Desc: 'Envía pagos a proveedores, contratistas y empleados globalmente con bajas comisiones.',
    business4Title: 'API y Automatización',
    business4Desc: 'Integra Plixum con tus sistemas para operaciones sin fricción.',
    business5Title: 'Analítica Unificada',
    business5Desc: 'Monitorea saldos, rendimientos y transacciones en tiempo real en todos los servicios.',
    business6Title: 'Soporte Prioritario',
    business6Desc: 'Recibe ayuda experta y guía de compliance para tu empresa o uso personal.',

    // How It Works
    howItWorksTitle: 'Cómo Funciona Plixum',
    step1Title: 'Crea tu Wallet',
    step1Desc: 'Regístrate y obtén un smart contract wallet único y no custodiado en Solana.',
    step2Title: 'Deposita o Haz Onramp',
    step2Desc: 'Fondea tu wallet con cripto o moneda local usando los métodos soportados.',
    step3Title: 'Accede a DeFi y Banca',
    step3Desc: 'Haz lending, swaps, gana rendimiento o abre cuenta virtual USA y obtén tarjeta Visa.',
    step4Title: 'Retira o Gasta',
    step4Desc: 'Mueve fondos a tu banco, gasta con tu tarjeta o usa en DeFi, todo desde un solo lugar.',

    // Use Cases
    useCasesTitle: 'Casos de Uso Reales',
    useCase1Title: 'E-commerce LATAM',
    useCase1Desc: 'Acepta pagos en cripto y stablecoins, liquida en moneda local y accede a mercados globales.',
    useCase2Title: 'Freelance y Trabajo Remoto',
    useCase2Desc: 'Recibe pagos en USD, convierte a cripto y gasta al instante con tarjeta Visa.',
    useCase3Title: 'Generación de Rendimiento',
    useCase3Desc: 'Pon tus activos a trabajar con estrategias DeFi automatizadas y multi-protocolo.',
    useCase4Title: 'Remesas',
    useCase4Desc: 'Envía dinero entre países al instante y a bajo costo, sin bancos ni intermediarios.',

    // Yields
    yieldsTitle: 'Gana Rendimientos Competitivos',
    yieldsSubtitle: 'Tus depósitos, tu rendimiento—sin bloqueos ni custodia.',
    yieldsDesc: 'Genera hasta 6% APY en stablecoins vía protocolos DeFi auditados y seguros. Retira cuando quieras.',
    yieldsApy: 'Hasta 6% APY',
    yieldsFeature1: 'Sin depósito mínimo',
    yieldsFeature2: 'Capitalización diaria',
    yieldsFeature3: 'Retira cuando quieras',
    yieldsFeature4: 'Protocolos auditados',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
