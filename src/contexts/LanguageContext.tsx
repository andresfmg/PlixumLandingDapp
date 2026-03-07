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
    heroTitle: 'Global Business Accounts. Borderless Finance.',
    heroSubtitle: 'Virtual Accounts • Multiple Currencies • Global Investments • Cards',
    heroCopy: 'Seamlessly manage your global finances. Generate local accounts in 60+ countries to receive payments. Funds are instantly available in digital currency for savings, investments, and spending.',
    heroCtaPrimary: 'Open Account',
    heroCtaSecondary: 'Learn More',

    // Nuestras Soluciones / Our Solutions
    featuresTitle: 'Our Ecosystem',
    feature1Title: 'Global Virtual Accounts',
    feature1Desc: 'Collect funds in USD, EUR, GBP via local banking networks (SEPA, ACH, SWIFT).',
    feature2Title: 'Instant Currency Exchange',
    feature2Desc: 'Incoming deposits are automatically converted to digital currency for instant global access.',
    feature3Title: 'Smart Investments & Savings',
    feature3Desc: 'Earn annual returns on your balance and invest in fractional US stocks (Google, Tesla) directly.',
    feature4Title: 'Virtual Visa Card',
    feature4Desc: 'Spend your balance instantly at 100M+ merchants worldwide with our virtual cards.',
    feature5Title: 'Invoicing & Payments',
    feature5Desc: 'Generate professional invoices and payment links for seamless B2B/B2C collections.',
    
    // Solutions Section Header
    solutionsHeader: 'Powerful Features',
    solutionsSubheader: 'The complete financial operating system for modern business.',

    // Markets - Who uses
    marketsTitle: 'Who uses Plixum',
    market1Title: 'Global Tech Companies',
    market1Desc: 'Efficient treasury management for businesses with international revenue streams.',
    market2Title: 'Remote Professionals',
    market2Desc: 'Receive salary in foreign currencies, save efficiently, and invest for the future.',
    market3Title: 'Digital Nomads',
    market3Desc: 'One global account for all your earnings, spending, and investments worldwide.',
    market4Title: 'Cross-border Business',
    market4Desc: 'Collect locally in 60+ countries and settle instantly without banking delays.',
    marketsSubheader: 'Empowering the next generation of global commerce.',

    // API Section
    apiSectionTitle: 'Developer Implementation',
    apiSectionSubtitle: 'Financial infrastructure for your platform.',
    apiSectionCopy: 'Integrate Plixum\'s secure infrastructure to issue accounts, cards, and manage assets via API.',
    solutionsTitle: 'Developer Implementation',
    solution1Title: 'Unified Finance API',
    solution1Desc: 'Manage banking rails and digital asset interactions with a single powerful SDK.',
    solution2Title: 'Automated Compliance',
    solution2Desc: 'Built-in identity verification (KYC/KYB) and AML checks for all your users.',
    solution3Title: 'Instant Settlement',
    solution3Desc: 'Programmatic liquidity for real-time treasury management.',
    
    // API Features Grid
    apiFeature1Title: 'Bank-Grade Security',
    apiFeature1Desc: 'Fully audited infrastructure and regulated banking partners.',
    apiFeature2Title: 'Real-time Webhooks',
    apiFeature2Desc: 'Get notified instantly for deposits, exchanges, and card usage.',
    apiFeature3Title: 'Global Network',
    apiFeature3Desc: 'Operate across major international payment networks securely.',

    // CTA
    ctaTitle: "Ready to modernize your financial operations?",
    ctaSubtitle: 'Create your account',
    ctaFormSubtitle: 'Start your journey with Plixum today.',
    ctaButton: 'Get Started',
    ctaLabel: 'Get Started',

    // Additional
    downloadDocs: 'Read Documentation',
    headerContact: 'Contact',
    headerDocs: 'Developers',
    headerLogin: 'Login',
  },
  es: {
    // Hero - Finity style
    heroTitle: 'Cuentas Globales para Empresas. Finanzas sin Fronteras.',
    heroSubtitle: 'Cuentas Virtuales • Múltiples Divisas • Inversiones Globales • Tarjetas',
    heroCopy: 'Gestiona tus finanzas globales sin fricción. Genera cuentas locales en +60 países para recibir pagos. Los fondos están disponibles al instante en moneda digital para ahorro, inversión y gastos.',
    heroCtaPrimary: 'Abrir Cuenta',
    heroCtaSecondary: 'Saber Más',

    // Nuestras Soluciones
    featuresTitle: 'Nuestro Ecosistema',
    feature1Title: 'Cuentas Virtuales Globales',
    feature1Desc: 'Recibe fondos en USD, EUR, GBP vía redes bancarias locales (SEPA, ACH, SWIFT).',
    feature2Title: 'Cambio de Divisa Instantáneo',
    feature2Desc: 'Los depósitos recibidos se convierten automáticamente a moneda digital para acceso global inmediato.',
    feature3Title: 'Inversiones y Ahorro Inteligente',
    feature3Desc: 'Genera rendimientos anuales sobre tu saldo e invierte en acciones de EE.UU. (Google, Tesla) directamente.',
    feature4Title: 'Tarjeta Visa Virtual',
    feature4Desc: 'Gasta tu saldo al instante en +100M de comercios globalmente con nuestras tarjetas virtuales.',
    feature5Title: 'Facturación y Pagos',
    feature5Desc: 'Genera facturas profesionales y links de pago para cobros B2B/B2C.',

    // Sección Soluciones Header
    solutionsHeader: 'Funcionalidades Potentes',
    solutionsSubheader: 'El sistema operativo financiero completo para la empresa moderna.',

    // Quiénes usan Plixum
    marketsTitle: 'Quiénes usan Plixum',
    market1Title: 'Empresas Tecnológicas',
    market1Desc: 'Gestión de tesorería eficiente para negocios con ingresos internacionales.',
    market2Title: 'Profesionales Remotos',
    market2Desc: 'Recibe salario en divisas extranjeras, ahorra eficientemente e invierte para el futuro.',
    market3Title: 'Nómadas Digitales',
    market3Desc: 'Una cuenta global para todos tus ingresos, gastos e inversiones en cualquier lugar.',
    market4Title: 'Negocios Transfronterizos',
    market4Desc: 'Cobra localmente en +60 países y liquida instantáneamente sin demoras bancarias.',
    marketsSubheader: 'Empoderando la próxima generación del comercio global.',

    // Sección API
    apiSectionTitle: 'Implementación para Developers',
    apiSectionSubtitle: 'Infraestructura financiera para tu plataforma.',
    apiSectionCopy: 'Integra la infraestructura segura de Plixum para emitir cuentas, tarjetas y gestionar activos vía API.',
    solutionsTitle: 'Implementación API',
    solution1Title: 'API Financiera Unificada',
    solution1Desc: 'Gestiona rieles bancarios e interacciones de activos digitales con un solo SDK.',
    solution2Title: 'Compliance Automatizado',
    solution2Desc: 'Verificación de identidad (KYC/KYB) y chequeos AML integrados para todos tus usuarios.',
    solution3Title: 'Liquidación Instantánea',
    solution3Desc: 'Liquidez programable para gestión de tesorería en tiempo real.',

    // Características API Grid
    apiFeature1Title: 'Seguridad Bancaria',
    apiFeature1Desc: 'Infraestructura auditada y partners bancarios regulados.',
    apiFeature2Title: 'Webhooks en Tiempo Real',
    apiFeature2Desc: 'Notificaciones instantáneas de depósitos, cambios y uso de tarjetas.',
    apiFeature3Title: 'Red Global',
    apiFeature3Desc: 'Opera a través de las principales redes de pago internacionales de forma segura.',

    // CTA
    ctaTitle: '¿Listo para modernizar tus operaciones financieras?',
    ctaSubtitle: 'Crear cuenta',
    ctaFormSubtitle: 'Comienza tu viaje con Plixum hoy.',
    ctaButton: 'Comenzar',
    ctaLabel: 'Comenzar',

    // Additional
    downloadDocs: 'Leer Documentación',
    headerContact: 'Contacto',
    headerDocs: 'Developers',
    headerLogin: 'Ingresar',
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
