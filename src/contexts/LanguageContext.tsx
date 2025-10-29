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
  heroTitle: 'Smart Capital in Motion',
    heroSubtitle: 'Transform your stablecoin management with cutting-edge DeFi technology. Lower costs, instant liquidity, and accessible credit.',
  heroCtaPrimary: 'Download on iPhone',
  heroCtaSecondary: 'Download on Android',
    
    // Features
    featuresTitle: 'Why Choose Plixum?',
    feature1Title: 'Reduced Operational Costs',
    feature1Desc: 'Save up to 70% on transaction fees compared to traditional payment systems.',
    feature2Title: 'Instant Liquidity',
    feature2Desc: 'Access your funds instantly with guaranteed liquidity through DeFi protocols.',
    feature3Title: 'Crypto-Collateral Loans',
    feature3Desc: 'Get instant credit access using your digital deposits as collateral.',
    feature4Title: 'New Revenue Streams',
    feature4Desc: 'Generate passive income through DeFi yield strategies on your deposits.',
    
    // Markets
    marketsTitle: 'Built For Your Business',
    market1Title: 'Small & Medium Businesses',
    market1Desc: 'Accept stablecoin payments and reduce transaction costs while accessing DeFi benefits.',
    market2Title: 'Exchange & Remittance',
    market2Desc: 'Lower cross-border transaction costs and increase transaction speed for your clients.',
    market3Title: 'Credit Institutions',
    market3Desc: 'Offer innovative crypto-collateral loans with automated risk management.',
    market4Title: 'B2B Platforms',
    market4Desc: 'Streamline cross-border payments with lower fees and faster settlement times.',
    
    // Solutions
    solutionsTitle: 'Comprehensive DeFi Solutions',
    solution1Title: 'Custodial Wallets',
    solution1Desc: 'Secure storage for your stablecoins with flexible custody options.',
    solution2Title: 'Smart Contracts',
    solution2Desc: 'Automated swaps and DeFi integrations for optimal asset management.',
    solution3Title: 'Yield Generation',
    solution3Desc: 'Earn competitive returns on your deposits through secure DeFi protocols.',
    
    // CTA
    ctaTitle: 'Ready to Transform Your Financial Operations?',
    ctaSubtitle: 'Join the future of finance with Plixum. Lower costs, instant access, and innovative solutions.',
    ctaButton: 'Contact Us Today',
    
    // Stats
    stat1: 'Lower Transaction Fees',
    stat2: 'Market Cap Stablecoins',
    stat3: 'Total Value Locked',
    
    // Business Accounts
    businessTitle: 'Business Accounts Built for Growth',
    businessSubtitle: 'Everything your business needs to manage digital assets efficiently',
    business1Title: 'Multi-Currency Support',
    business1Desc: 'Accept payments in USDT, USDC, and other major stablecoins with instant conversion.',
    business2Title: 'Earn Yields on Deposits',
    business2Desc: 'Generate up to 6% annual returns on your business deposits through secure DeFi protocols.',
    business3Title: 'Mass Payouts',
    business3Desc: 'Pay suppliers, contractors, and employees globally with minimal fees and instant settlement.',
    business4Title: 'API Integration',
    business4Desc: 'Seamlessly integrate Plixum into your existing systems with our robust API.',
    business5Title: 'Real-Time Analytics',
    business5Desc: 'Track transactions, monitor balances, and generate reports in real-time.',
    business6Title: 'Dedicated Support',
    business6Desc: 'Get priority assistance from our expert team whenever you need it.',
    
    // How It Works
    howItWorksTitle: 'How Plixum Works',
    step1Title: 'Create Your Account',
    step1Desc: 'Sign up in minutes and verify your business to get started.',
    step2Title: 'Deposit & Earn',
    step2Desc: 'Deposit stablecoins and start earning yields on your balance automatically.',
    step3Title: 'Transact Globally',
    step3Desc: 'Send, receive, and convert with minimal fees and instant settlement.',
    step4Title: 'Access Credit',
    step4Desc: 'Use your deposits as collateral to access instant credit when needed.',
    
    // Use Cases
    useCasesTitle: 'Real Business Solutions',
    useCase1Title: 'E-commerce Platforms',
    useCase1Desc: 'Accept crypto payments with automatic conversion to your preferred stablecoin. Reduce payment gateway fees from 3% to 0.5%.',
    useCase2Title: 'International Businesses',
    useCase2Desc: 'Pay suppliers worldwide instantly. No more waiting 3-5 days for wire transfers or paying 5% in fees.',
    useCase3Title: 'Freelance Platforms',
    useCase3Desc: 'Pay contractors in any country instantly with stablecoins. Automated mass payouts and tax reporting.',
    useCase4Title: 'Remittance Services',
    useCase4Desc: 'Offer your customers faster transfers at 80% lower costs than traditional remittance providers.',
    
    // Yields
    yieldsTitle: 'Earn While You Hold',
    yieldsSubtitle: 'Your business deposits work for you',
    yieldsDesc: 'Generate competitive returns on your stablecoin deposits through secure, audited DeFi protocols. Withdraw anytime, no lock-up periods.',
    yieldsApy: 'Up to 6% APY',
    yieldsFeature1: 'No minimum deposit',
    yieldsFeature2: 'Daily compounding',
    yieldsFeature3: 'Withdraw anytime',
    yieldsFeature4: 'Insured protocols',
  },
  es: {
    // Hero
    heroTitle: 'Soluciones Digitales para un Mundo Globalizado',
    heroSubtitle: 'Transforma tu manejo de monedas estables con tecnología DeFi de vanguardia. Menores costos, liquidez instantánea y crédito accesible.',
  heroCtaPrimary: 'Descargar en iPhone',
  heroCtaSecondary: 'Descargar en Android',
    
    // Features
    featuresTitle: '¿Por Qué Elegir Plixum?',
    feature1Title: 'Costos Operativos Reducidos',
    feature1Desc: 'Ahorra hasta 70% en comisiones comparado con sistemas de pago tradicionales.',
    feature2Title: 'Liquidez Instantánea',
    feature2Desc: 'Accede a tus fondos al instante con liquidez garantizada a través de protocolos DeFi.',
    feature3Title: 'Préstamos con Cripto-Colateral',
    feature3Desc: 'Obtén acceso inmediato a crédito usando tus depósitos digitales como garantía.',
    feature4Title: 'Nuevas Fuentes de Ingreso',
    feature4Desc: 'Genera ingresos pasivos mediante estrategias DeFi sobre tus depósitos.',
    
    // Markets
    marketsTitle: 'Construido Para Tu Negocio',
    market1Title: 'Pequeñas y Medianas Empresas',
    market1Desc: 'Acepta pagos en monedas estables y reduce costos mientras accedes a beneficios DeFi.',
    market2Title: 'Casas de Cambio y Remesas',
    market2Desc: 'Reduce costos de transacciones transfronterizas y aumenta la velocidad para tus clientes.',
    market3Title: 'Instituciones Crediticias',
    market3Desc: 'Ofrece préstamos innovadores con cripto-colateral y gestión de riesgo automatizada.',
    market4Title: 'Plataformas B2B',
    market4Desc: 'Optimiza pagos internacionales con menores comisiones y liquidaciones más rápidas.',
    
    // Solutions
    solutionsTitle: 'Soluciones DeFi Integrales',
    solution1Title: 'Billeteras Custodiadas',
    solution1Desc: 'Almacenamiento seguro para tus monedas estables con opciones flexibles de custodia.',
    solution2Title: 'Contratos Inteligentes',
    solution2Desc: 'Intercambios automáticos e integraciones DeFi para gestión óptima de activos.',
    solution3Title: 'Generación de Rendimientos',
    solution3Desc: 'Obtén retornos competitivos sobre tus depósitos mediante protocolos DeFi seguros.',
    
    // CTA
    ctaTitle: '¿Listo para Transformar tus Operaciones Financieras?',
    ctaSubtitle: 'Únete al futuro de las finanzas con Plixum. Menores costos, acceso instantáneo y soluciones innovadoras.',
    ctaButton: 'Contáctanos Hoy',
    
    // Stats
    stat1: 'Menores Comisiones',
    stat2: 'Cap. Mercado Stablecoins',
    stat3: 'Valor Total Bloqueado',
    
    // Business Accounts
    businessTitle: 'Cuentas Empresariales Diseñadas para Crecer',
    businessSubtitle: 'Todo lo que tu negocio necesita para gestionar activos digitales eficientemente',
    business1Title: 'Soporte Multi-Moneda',
    business1Desc: 'Acepta pagos en USDT, USDC y otras monedas estables con conversión instantánea.',
    business2Title: 'Genera Rendimientos en Depósitos',
    business2Desc: 'Genera hasta 12% de rendimiento anual en tus depósitos mediante protocolos DeFi seguros.',
    business3Title: 'Pagos Masivos',
    business3Desc: 'Paga a proveedores, contratistas y empleados globalmente con tarifas mínimas y liquidación instantánea.',
    business4Title: 'Integración API',
    business4Desc: 'Integra Plixum sin problemas en tus sistemas existentes con nuestra API robusta.',
    business5Title: 'Análisis en Tiempo Real',
    business5Desc: 'Rastrea transacciones, monitorea saldos y genera reportes en tiempo real.',
    business6Title: 'Soporte Dedicado',
    business6Desc: 'Obtén asistencia prioritaria de nuestro equipo experto cuando lo necesites.',
    
    // How It Works
    howItWorksTitle: 'Cómo Funciona Plixum',
    step1Title: 'Crea Tu Cuenta',
    step1Desc: 'Regístrate en minutos y verifica tu negocio para comenzar.',
    step2Title: 'Deposita y Gana',
    step2Desc: 'Deposita monedas estables y comienza a generar rendimientos automáticamente.',
    step3Title: 'Transacciones Globales',
    step3Desc: 'Envía, recibe y convierte con tarifas mínimas y liquidación instantánea.',
    step4Title: 'Accede a Crédito',
    step4Desc: 'Usa tus depósitos como colateral para acceder a crédito instantáneo cuando lo necesites.',
    
    // Use Cases
    useCasesTitle: 'Soluciones Reales para Negocios',
    useCase1Title: 'Plataformas E-commerce',
    useCase1Desc: 'Acepta pagos cripto con conversión automática a tu moneda estable preferida. Reduce comisiones de 3% a 0.5%.',
    useCase2Title: 'Negocios Internacionales',
    useCase2Desc: 'Paga proveedores mundialmente al instante. Sin esperar 3-5 días por transferencias ni pagar 5% en comisiones.',
    useCase3Title: 'Plataformas Freelance',
    useCase3Desc: 'Paga contratistas en cualquier país al instante con monedas estables. Pagos masivos y reportes fiscales automatizados.',
    useCase4Title: 'Servicios de Remesas',
    useCase4Desc: 'Ofrece a tus clientes transferencias más rápidas con 80% menos costos que proveedores tradicionales.',
    
    // Yields
    yieldsTitle: 'Gana Mientras Mantienes',
    yieldsSubtitle: 'Tus depósitos empresariales trabajan para ti',
    yieldsDesc: 'Genera rendimientos competitivos en tus depósitos de monedas estables mediante protocolos DeFi seguros y auditados. Retira en cualquier momento, sin períodos de bloqueo.',
    yieldsApy: 'Hasta 12% TNA',
    yieldsFeature1: 'Sin depósito mínimo',
    yieldsFeature2: 'Capitalización diaria',
    yieldsFeature3: 'Retira cuando quieras',
    yieldsFeature4: 'Protocolos asegurados',
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
