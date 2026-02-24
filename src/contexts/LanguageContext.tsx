import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero - Finity style
    heroTitle: 'One portal. Your entire global operation.',
    heroSubtitle: 'More control. Less friction. Everything in real-time.',
    heroCopy: 'Open virtual accounts in USD and EUR. Receive international payments, convert currencies, transfer funds and manage corporate cards. All in one portal and API.',
    heroCtaPrimary: 'Talk to our team',
    heroCtaSecondary: 'Schedule demo',

    // Nuestras Soluciones / Our Solutions
    featuresTitle: 'Our Solutions',
    feature1Title: 'Multi-currency integrated accounts',
    feature1Desc: 'Receive money in USD, EUR and COP with accounts in your name.',
    feature2Title: 'International payments without friction',
    feature2Desc: 'Transfer global funds with traceability and no downtime.',
    feature3Title: 'Instant currency conversion',
    feature3Desc: 'Change between currencies 24/7 and in seconds, at the best exchange rate.',
    feature4Title: 'Visa cards for your team',
    feature4Desc: 'Spend from your balances in more than 200M merchants.',
    feature5Title: 'Central control panel',
    feature5Desc: 'View balances, movements and reconcile from a single dashboard.',
    
    // Solutions Section Header
    solutionsHeader: 'Our Solutions',
    solutionsSubheader: 'More control. Less friction. Everything in real-time.',

    // Markets - Who uses
    marketsTitle: 'Who uses Plixum',
    market1Title: 'Fintechs',
    market1Desc: 'Companies that move money between countries now do it better.',
    market2Title: 'BPOs and international payroll',
    market2Desc: 'Companies that move money between countries now do it better.',
    market3Title: 'Travel agencies',
    market3Desc: 'Companies that move money between countries now do it better.',
    market4Title: 'Importers / exporters',
    market4Desc: 'Companies that move money between countries now do it better.',
    marketsSubheader: 'Companies that move money between countries now do it better.',

    // API Section
    apiSectionTitle: 'API Integration',
    apiSectionSubtitle: 'This is how international finance operates with Plixum.',
    apiSectionCopy: 'Connect Plixum to your system and automate collections, payments and global treasury.',
    solutionsTitle: 'API Integration',
    solution1Title: 'Global unified API',
    solution1Desc: 'Manage all your international payments with a single integration.',
    solution2Title: 'Savings of up to 73%',
    solution2Desc: 'Reduce your international transaction costs compared to market standard.',
    solution3Title: '24/7 Settlement',
    solution3Desc: 'Convert currencies anytime and receive your funds the same day.',
    
    // API Features Grid
    apiFeature1Title: 'Secure payments',
    apiFeature1Desc: 'Bank-grade security for all transactions.',
    apiFeature2Title: 'Real-time tracking',
    apiFeature2Desc: 'Monitor your transactions as they happen.',
    apiFeature3Title: 'Multi-currency support',
    apiFeature3Desc: 'Work with any currency worldwide.',

    // CTA
    ctaTitle: 'Talk to our world-class team',
    ctaSubtitle: 'Schedule a call',
    ctaButton: 'Contact us',
    ctaLabel: 'Contact us',

    // Additional
    downloadDocs: 'Download documentation',
    headerContact: 'Contact us',
    headerDocs: 'Documentation',
    headerLogin: 'Login',
  },
  es: {
    // Hero - Finity style
    heroTitle: 'Un portal. Toda tu operación global.',
    heroSubtitle: 'Más control. Menos fricción. Todo en tiempo real.',
    heroCopy: 'Abre cuentas virtuales en USD y EUR. Recibe pagos internacionales, convierte divisas, transfiere fondos y gestiona tarjetas corporativas. Todo en un mismo portal y API.',
    heroCtaPrimary: 'Habla con nuestro equipo',
    heroCtaSecondary: 'Agendar demo',

    // Nuestras Soluciones
    featuresTitle: 'Nuestras Soluciones',
    feature1Title: 'Cuentas multi-moneda integradas',
    feature1Desc: 'Recibe dinero en USD, EUR y COP con cuentas a tu nombre.',
    feature2Title: 'Pagos internacionales sin fricción',
    feature2Desc: 'Transfiere fondos globales con trazabilidad y sin tiempos muertos.',
    feature3Title: 'Conversión de divisas instantánea',
    feature3Desc: 'Cambia entre monedas 24/7 y en segundos, al mejor tipo de cambio.',
    feature4Title: 'Tarjetas Visa para tu equipo',
    feature4Desc: 'Gasta desde tus saldos en más de 200M de comercios.',
    feature5Title: 'Panel central de control',
    feature5Desc: 'Visualiza saldos, movimientos y concilia desde un solo dashboard.',

    // Sección Soluciones Header
    solutionsHeader: 'Nuestras Soluciones',
    solutionsSubheader: 'Más control. Menos fricción. Todo en tiempo real.',

    // Quiénes usan Plixum
    marketsTitle: 'Quiénes usan Plixum',
    market1Title: 'Fintechs',
    market1Desc: 'Empresas que mueven dinero entre países, ahora lo hacen mejor.',
    market2Title: 'BPOs y nómina internacional',
    market2Desc: 'Empresas que mueven dinero entre países, ahora lo hacen mejor.',
    market3Title: 'Agencias de viaje',
    market3Desc: 'Empresas que mueven dinero entre países, ahora lo hacen mejor.',
    market4Title: 'Importadores / exportadores',
    market4Desc: 'Empresas que mueven dinero entre países, ahora lo hacen mejor.',
    marketsSubheader: 'Empresas que mueven dinero entre países, ahora lo hacen mejor.',

    // Sección API
    apiSectionTitle: 'Integración API',
    apiSectionSubtitle: 'Así se ve operar finanzas internacionales con Plixum.',
    apiSectionCopy: 'Conecta Plixum a tu sistema y automatiza cobros, pagos y tesorería global.',
    solutionsTitle: 'Integración API',
    solution1Title: 'API global unificada',
    solution1Desc: 'Gestiona todos tus pagos internacionales con una sola integración.',
    solution2Title: 'Ahorro de hasta 73%',
    solution2Desc: 'Reduce tus costos de transacciones internacionales frente al estándar del mercado.',
    solution3Title: 'Liquidación 24/7',
    solution3Desc: 'Convierte divisas en cualquier momento y recibe tus fondos el mismo día.',

    // Características API Grid
    apiFeature1Title: 'Pagos seguros',
    apiFeature1Desc: 'Seguridad de nivel bancario para todas las transacciones.',
    apiFeature2Title: 'Seguimiento en tiempo real',
    apiFeature2Desc: 'Monitorea tus transacciones mientras suceden.',
    apiFeature3Title: 'Soporte multi-moneda',
    apiFeature3Desc: 'Trabaja con cualquier moneda en el mundo.',

    // CTA
    ctaTitle: 'Habla con nuestro equipo de clase mundial',
    ctaSubtitle: 'Agenda una llamada',
    ctaButton: 'Contáctanos',
    ctaLabel: 'Contáctanos',

    // Additional
    downloadDocs: 'Descarga la documentación',
    headerContact: 'Contáctanos',
    headerDocs: 'Documentación',
    headerLogin: 'Acceso',
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
