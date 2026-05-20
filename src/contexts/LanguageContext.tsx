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
    heroTitle: 'Move Money Globally. Automate Your Treasury. Scale Without Limits.',
    heroSubtitle: 'Virtual Accounts • Multi-currency Treasury • Global Settlement',
    heroCopy: 'Plixum is a financial infrastructure platform that gives companies access to global payments, treasury, and settlement through regulated providers, international banking rails, and blockchain-based infrastructure.',
    heroCtaPrimary: 'Get Started',
    heroCtaSecondary: 'Talk to Sales',

    // Nuestras Soluciones / Our Solutions
    featuresTitle: 'Financial Infrastructure Modules',
    feature1Title: 'Global Collection Accounts',
    feature1Desc: 'Receive funds through regulated virtual accounts and international banking rails like ACH, Wire, SEPA, PIX, and SPEI.',
    feature2Title: 'Multi-currency Treasury',
    feature2Desc: 'Manage operational balances across fiat and stablecoins from a single treasury layer built for global operations.',
    feature3Title: 'On-ramp, Off-ramp, and FX Routing',
    feature3Desc: 'Convert, route, and settle funds efficiently using integrated providers and digital liquidity paths.',
    feature4Title: 'Global Payout Orchestration',
    feature4Desc: 'Execute cross-border disbursements with automated routing, partner rails, and settlement visibility.',
    feature5Title: 'Financial Workflow Automation',
    feature5Desc: 'Automate recurring payment flows, treasury rules, and operational approvals for faster finance operations.',
    
    // Solutions Section Header
    solutionsHeader: 'Embedded Infrastructure',
    solutionsSubheader: 'A programmable financial layer to operate global payments, treasury, and settlement at scale.',
    mobilePrev: 'Previous',
    mobileNext: 'Next',

    // Markets - Who uses
    marketsTitle: 'Who builds with Plixum',
    market1Title: 'B2B Platforms',
    market1Desc: 'Embed collections, payouts, and treasury controls for merchants, suppliers, and business users.',
    market2Title: 'Vertical Marketplaces',
    market2Desc: 'Orchestrate multi-party payment flows, reconciliation, and settlement in specialized marketplaces.',
    market3Title: 'Exporters and Global Sellers',
    market3Desc: 'Collect in local rails, hold multi-currency balances, and settle operations across borders.',
    market4Title: 'Logistics and Supply Chain Networks',
    market4Desc: 'Coordinate regional collections and cross-border disbursements with operational traceability.',
    market5Title: 'Contractor and Workforce Ecosystems',
    market5Desc: 'Automate mass payouts and currency conversions for distributed teams and partners.',
    market6Title: 'ERP and Treasury Integrations',
    market6Desc: 'Connect programmable settlement and reporting capabilities directly into financial workflows.',
    marketsSubheader: 'Infrastructure for the next generation of global economic networks.',

    // API Section
    apiSectionTitle: 'Platform Integration',
    apiSectionSubtitle: 'Build financial operations on top of regulated and programmable rails.',
    apiSectionCopy: 'Use Plixum APIs to orchestrate KYC/KYB onboarding, payment rails, stablecoin settlement, and treasury automation without exposing infrastructure complexity to end users.',
    solutionsTitle: 'Developer Integration',
    solution1Title: 'Unified Orchestration API',
    solution1Desc: 'Connect providers, accounts, rails, and payouts through one programmable integration layer.',
    solution2Title: 'Compliance and Operational Controls',
    solution2Desc: 'Integrate KYC/KYB processes, transaction controls, and auditable flow management.',
    solution3Title: 'Programmable Settlement and Reporting',
    solution3Desc: 'Automate settlement flows and generate operational records for reconciliation and finance teams.',
    
    // API Features Grid
    apiFeature1Title: 'Bank-Grade Security',
    apiFeature1Desc: 'Fully audited infrastructure and regulated banking partners.',
    apiFeature2Title: 'Real-time Webhooks',
    apiFeature2Desc: 'Get notified instantly on deposits, payouts, FX conversions, and settlement events.',
    apiFeature3Title: 'Global Network',
    apiFeature3Desc: 'Operate across major international payment networks securely.',

    // CTA
    ctaTitle: 'Ready to deploy modern financial infrastructure?',
    ctaSubtitle: 'Request access',
    ctaFormSubtitle: 'Tell us about your operation and we will help you design the right setup.',
    ctaButton: 'Request access',
    ctaLabel: 'Request access',
    contactTitle: 'Contact us',
    contactEmailLabel: 'Email us',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms and Conditions',
    footerRights: 'All rights reserved.',

    // How It Works
    howHeader: 'How It Works',
    howSubheader: 'From registration to global settlement in one unified flow.',
    howStep1Title: 'Register and complete KYC/KYB',
    howStep1Desc: 'Onboard your company through our integrated identity verification process with regulated KYC/KYB providers.',
    howStep2Title: 'Receive a virtual account',
    howStep2Desc: 'Get a regulated virtual account through Bridge.xyz to collect international payments via ACH, Wire, SEPA, PIX, and SPEI.',
    howStep3Title: 'Receive fiat payments',
    howStep3Desc: 'Your clients transfer funds via local banking rails. The regulated provider processes the inflow on your behalf.',
    howStep4Title: 'On-ramp and settlement',
    howStep4Desc: 'Incoming fiat is converted to digital liquidity or stablecoins. Funds are credited to your smart contract or wallet.',
    howStep5Title: 'Manage balances and payouts',
    howStep5Desc: 'Convert currencies, execute cross-border payouts, manage multi-currency treasury, and automate financial flows.',
    howStep6Title: 'Pay only for what you use',
    howStep6Desc: 'Plixum charges a fee only for the orchestration and technology services used. Your funds always remain under your control.',

    // Infrastructure
    infraHeader: 'Regulated Infrastructure',
    infraSubheader: 'Built on trusted and regulated financial providers.',
    infraCopy: 'Plixum does not operate its own financial infrastructure. It integrates specialized and regulated providers so your operations run on proven, compliant rails.',
    infra1Name: 'Bridge.xyz',
    infra1Role: 'Banking rails and virtual accounts',
    infra1Caps: 'Provides regulated virtual accounts and processes fiat inflows through international banking networks. Manages custody of fiat funds and regulatory compliance.',
    infra2Name: 'Solana',
    infra2Role: 'Blockchain settlement layer',
    infra2Caps: 'High-speed, low-cost blockchain used for settlement, currency conversion, digital liquidity management, and smart contract execution.',
    infra3Name: 'Jupiter Exchange',
    infra3Role: 'Decentralized liquidity protocol',
    infra3Caps: 'Optimizes stablecoin swap routing and ensures efficient liquidity conversion across digital asset pools.',
    infraNote: 'Plixum operates as a technology orchestration layer on top of these regulated providers. Fiat funds are held by licensed third parties, not by Plixum.',

    // Trust Section
    trustHeader: 'Regulatory Clarity',
    trustSubheader: 'Understand exactly what Plixum is and what it is not.',
    trustCopy: 'Plixum is designed for businesses that require clear regulatory and operational boundaries. This transparency is built into the architecture.',
    trustIsTitle: 'Plixum IS',
    trustIs1: 'A programmable financial infrastructure platform',
    trustIs2: 'A payment orchestration and settlement layer',
    trustIs3: 'A technology integrator of regulated providers',
    trustIs4: 'An embedded financial infrastructure for B2B platforms',
    trustIs5: 'A treasury and global payments automation tool',
    trustIsNotTitle: 'Plixum is NOT',
    trustIsNot1: 'A bank or deposit-taking entity',
    trustIsNot2: 'A financial custodian of your funds',
    trustIsNot3: 'A traditional exchange or trading platform',
    trustIsNot4: 'An investment or yield platform',
    trustIsNot5: 'A money transmission company',
    trustIsNot6: 'A DeFi or speculative crypto product',

    // Additional
    downloadDocs: 'Read Documentation',
    headerContact: 'Contact',
    headerDocs: 'Developers',
    headerLogin: 'Login',
  },
  es: {
    // Hero - Finity style
    heroTitle: 'Mueve dinero globalmente. Automatiza tu tesorería. Escala sin límites.',
    heroSubtitle: 'Cuentas Virtuales • Tesorería Multi-moneda • Settlement Global',
    heroCopy: 'Plixum es una plataforma de infraestructura financiera que permite a empresas acceder a pagos globales, treasury y settlement mediante proveedores regulados, rails bancarios internacionales e infraestructura basada en blockchain.',
    heroCtaPrimary: 'Comenzar',
    heroCtaSecondary: 'Hablar con ventas',

    // Nuestras Soluciones
    featuresTitle: 'Módulos de Infraestructura Financiera',
    feature1Title: 'Cuentas Globales de Recaudo',
    feature1Desc: 'Recibe fondos mediante cuentas virtuales reguladas y rails bancarios internacionales como ACH, Wire, SEPA, PIX y SPEI.',
    feature2Title: 'Tesorería Multi-moneda',
    feature2Desc: 'Gestiona balances operativos entre fiat y stablecoins desde una sola capa de tesorería.',
    feature3Title: 'On-ramp, Off-ramp y Ruteo de Conversión',
    feature3Desc: 'Convierte, enruta y liquida fondos de forma eficiente con proveedores integrados y rutas de liquidez digital.',
    feature4Title: 'Orquestación de Payouts Globales',
    feature4Desc: 'Ejecuta desembolsos transfronterizos con ruteo automatizado, rails de terceros y visibilidad de settlement.',
    feature5Title: 'Automatización de Flujos Financieros',
    feature5Desc: 'Automatiza pagos recurrentes, reglas de tesorería y aprobaciones operativas para una operación más eficiente.',

    // Sección Soluciones Header
    solutionsHeader: 'Infraestructura Embebida',
    solutionsSubheader: 'Una capa financiera programable para operar pagos globales, tesorería y settlement a escala.',
    mobilePrev: 'Anterior',
    mobileNext: 'Siguiente',

    // Quiénes usan Plixum
    marketsTitle: 'Quién construye con Plixum',
    market1Title: 'Plataformas B2B',
    market1Desc: 'Integran recaudo, payouts y controles de tesorería para comercios, proveedores y usuarios empresariales.',
    market2Title: 'Marketplaces Verticales',
    market2Desc: 'Orquestan flujos de pago multiparte, conciliación y settlement en mercados especializados.',
    market3Title: 'Exportadores y Vendedores Globales',
    market3Desc: 'Cobran en rails locales, administran balances multi-moneda y liquidan operaciones transfronterizas.',
    market4Title: 'Redes Logísticas y de Supply Chain',
    market4Desc: 'Coordinan recaudo regional y desembolsos globales con trazabilidad operativa.',
    market5Title: 'Ecosistemas de Contratistas',
    market5Desc: 'Automatizan payouts masivos y conversiones para equipos distribuidos y aliados.',
    market6Title: 'Integraciones ERP y Tesorería',
    market6Desc: 'Conectan settlement programable y reportes directamente en sus flujos financieros.',
    marketsSubheader: 'Infraestructura para la nueva generación de redes económicas globales.',

    // Sección API
    apiSectionTitle: 'Integración para Plataformas',
    apiSectionSubtitle: 'Construye operaciones financieras sobre rails regulados y programables.',
    apiSectionCopy: 'Usa las APIs de Plixum para orquestar onboarding KYC/KYB, rails de pago, settlement con stablecoins y automatización de tesorería sin exponer complejidad de infraestructura a los usuarios finales.',
    solutionsTitle: 'Integración para Developers',
    solution1Title: 'API Unificada de Orquestación',
    solution1Desc: 'Conecta proveedores, cuentas, rails y payouts mediante una sola capa programable.',
    solution2Title: 'Controles de Compliance y Operación',
    solution2Desc: 'Integra procesos KYC/KYB, controles transaccionales y gestión auditable de flujos.',
    solution3Title: 'Settlement Programable y Reportería',
    solution3Desc: 'Automatiza liquidaciones y genera registros operativos para conciliación y equipos financieros.',

    // Características API Grid
    apiFeature1Title: 'Seguridad Bancaria',
    apiFeature1Desc: 'Infraestructura auditada y partners bancarios regulados.',
    apiFeature2Title: 'Webhooks en Tiempo Real',
    apiFeature2Desc: 'Notificaciones instantáneas de depósitos, payouts, conversiones FX y eventos de settlement.',
    apiFeature3Title: 'Red Global',
    apiFeature3Desc: 'Opera a través de las principales redes de pago internacionales de forma segura.',

    // CTA
    ctaTitle: '¿Listo para desplegar infraestructura financiera moderna?',
    ctaSubtitle: 'Solicitar acceso',
    ctaFormSubtitle: 'Cuéntanos sobre tu operación y te ayudamos a diseñar la configuración ideal.',
    ctaButton: 'Solicitar acceso',
    ctaLabel: 'Solicitar acceso',
    contactTitle: 'Contáctanos',
    contactEmailLabel: 'Escríbenos',
    footerPrivacy: 'Política de privacidad',
    footerTerms: 'Términos y condiciones',
    footerRights: 'Todos los derechos reservados.',

    // Cómo Funciona
    howHeader: 'Cómo Funciona',
    howSubheader: 'Desde el registro hasta el settlement global en un flujo unificado.',
    howStep1Title: 'Registro y verificación KYC/KYB',
    howStep1Desc: 'Incorpora tu empresa a través de nuestro proceso integrado de verificación de identidad con proveedores regulados de KYC/KYB.',
    howStep2Title: 'Recibe una cuenta virtual',
    howStep2Desc: 'Obtienes una cuenta virtual regulada a través de Bridge.xyz para recibir pagos internacionales por ACH, Wire, SEPA, PIX y SPEI.',
    howStep3Title: 'Recibe pagos fiat',
    howStep3Desc: 'Tus clientes transfieren fondos por rails bancarios locales. El proveedor regulado procesa el ingreso en tu nombre.',
    howStep4Title: 'On-ramp y settlement',
    howStep4Desc: 'El fiat recibido se convierte a liquidez digital o stablecoins. Los fondos se acreditan a tu smart contract o wallet.',
    howStep5Title: 'Administra balances y payouts',
    howStep5Desc: 'Convierte divisas, ejecuta payouts transfronterizos, gestiona tesorería multi-moneda y automatiza flujos financieros.',
    howStep6Title: 'Paga solo por lo que usas',
    howStep6Desc: 'Plixum cobra un fee únicamente por los servicios de orquestación y tecnología utilizados. Tus fondos siempre permanecen bajo tu control.',

    // Infraestructura
    infraHeader: 'Infraestructura Regulada',
    infraSubheader: 'Construido sobre proveedores financieros regulados y de confianza.',
    infraCopy: 'Plixum no opera su propia infraestructura financiera. Integra proveedores especializados y regulados para que tus operaciones corran sobre rails probados y en cumplimiento normativo.',
    infra1Name: 'Bridge.xyz',
    infra1Role: 'Rails bancarios y cuentas virtuales',
    infra1Caps: 'Provee cuentas virtuales reguladas y procesa ingresos fiat a través de redes bancarias internacionales. Gestiona la custodia de fondos fiat y el cumplimiento regulatorio.',
    infra2Name: 'Solana',
    infra2Role: 'Capa de settlement blockchain',
    infra2Caps: 'Blockchain de alta velocidad y bajo costo utilizado para settlement, conversión de divisas, gestión de liquidez digital y ejecución de smart contracts.',
    infra3Name: 'Jupiter Exchange',
    infra3Role: 'Protocolo de liquidez descentralizada',
    infra3Caps: 'Optimiza el ruteo de swaps entre stablecoins y asegura conversión eficiente de liquidez entre pools de activos digitales.',
    infraNote: 'Plixum opera como capa tecnológica de orquestación sobre estos proveedores regulados. Los fondos fiat son custodiados por terceros con licencia, no por Plixum.',

    // Sección de Transparencia
    trustHeader: 'Claridad Regulatoria',
    trustSubheader: 'Entiende exactamente qué es Plixum y qué no es.',
    trustCopy: 'Plixum está diseñado para empresas que requieren límites regulatorios y operativos claros. Esta transparencia está integrada en la arquitectura.',
    trustIsTitle: 'Plixum SÍ ES',
    trustIs1: 'Una plataforma de infraestructura financiera programable',
    trustIs2: 'Una capa de orquestación de pagos y settlement',
    trustIs3: 'Un integrador tecnológico de proveedores regulados',
    trustIs4: 'Infraestructura financiera embebida para plataformas B2B',
    trustIs5: 'Una herramienta de automatización de tesorería y pagos globales',
    trustIsNotTitle: 'Plixum NO ES',
    trustIsNot1: 'Un banco o entidad captadora de recursos',
    trustIsNot2: 'Un custodio financiero de tus fondos',
    trustIsNot3: 'Un exchange o plataforma de trading tradicional',
    trustIsNot4: 'Una plataforma de inversión o rendimientos',
    trustIsNot5: 'Una empresa de transmisión de dinero',
    trustIsNot6: 'Un producto crypto especulativo o DeFi',

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
