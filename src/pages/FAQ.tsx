import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const FAQContent = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => setOpenIndex(openIndex === key ? null : key);

  const content: { title: string; intro: string; sections: FAQSection[] } = language === 'es'
    ? {
        title: 'Preguntas Frecuentes',
        intro: 'Respuestas a las principales preguntas sobre cómo opera Plixum desde una perspectiva regulatoria, legal, operativa y contable.',
        sections: [
          {
            title: 'Sobre Plixum',
            items: [
              {
                question: '¿Qué es Plixum?',
                answer: 'Plixum es una plataforma de infraestructura financiera programable que conecta servicios financieros de terceros para permitir a empresas operar pagos globales, balances multi-moneda y activos digitales desde una única interfaz. Actúa como capa tecnológica y de orquestación financiera entre usuarios, proveedores financieros regulados, contratos inteligentes y rails de pago.',
              },
              {
                question: '¿Plixum es un banco?',
                answer: 'No. Plixum no opera como banco ni como entidad financiera tradicional. La plataforma actúa como infraestructura tecnológica y de orquestación financiera que integra servicios de terceros regulados. Los servicios bancarios y rails financieros son operados por proveedores especializados y entidades reguladas.',
              },
              {
                question: '¿Cómo se posiciona Plixum regulatoriamente?',
                answer: 'Plixum se posiciona como infraestructura financiera, plataforma tecnológica, capa de orquestación financiera, payment orchestration platform y embedded financial infrastructure. No debe presentarse como banco, entidad captadora, exchange tradicional, custodio financiero, plataforma de inversión ni plataforma de rendimientos.',
              },
            ],
          },
          {
            title: 'Fondos y Custodia',
            items: [
              {
                question: '¿Plixum custodia el dinero de los clientes?',
                answer: 'La arquitectura de Plixum está diseñada para minimizar la custodia directa. Los fondos permanecen en proveedores regulados, se mantienen en cuentas virtuales segregadas o se administran mediante wallets o contratos inteligentes asociados al usuario. Plixum facilita la interacción tecnológica y la automatización de operaciones.',
              },
              {
                question: '¿Los fondos pertenecen a Plixum?',
                answer: 'No. Los fondos pertenecen al usuario o empresa titular. Plixum únicamente cobra tarifas por orquestación, infraestructura, automatización, integración financiera, conversión y settlement.',
              },
              {
                question: '¿Existe riesgo de captación?',
                answer: 'Para mitigar este riesgo, los fondos permanecen segregados, no se mezclan recursos de clientes, Plixum no utiliza fondos de clientes para operaciones propias y los usuarios mantienen titularidad sobre sus balances y wallets.',
              },
            ],
          },
          {
            title: 'Compliance y Regulación',
            items: [
              {
                question: '¿Plixum cumple procesos AML/KYC?',
                answer: 'Sí. Plixum integra proveedores especializados de compliance y verificación para KYC, KYB, screening, AML, monitoreo transaccional y prevención de fraude. Además, la plataforma mantiene políticas AML internas, trazabilidad transaccional, soporte documental y monitoreo de riesgo.',
              },
              {
                question: '¿Plixum requiere licencia bancaria?',
                answer: 'Plixum no opera como banco ni entidad captadora. El modelo está estructurado sobre embedded finance, payment orchestration, infraestructura financiera de terceros y servicios tecnológicos. El crecimiento futuro de ciertas funcionalidades podría requerir análisis regulatorios adicionales dependiendo de la jurisdicción.',
              },
              {
                question: '¿Cómo deben verse las operaciones de Plixum frente a auditorías?',
                answer: 'Las operaciones deben ser trazables, conciliables, auditables, documentadas y asociadas a propósito económico claro. Cada flujo debería poder relacionarse con facturas, contratos, servicios, nómina, treasury o pagos empresariales.',
              },
            ],
          },
          {
            title: 'Contabilidad y Reportes',
            items: [
              {
                question: '¿Las empresas pueden contabilizar operaciones realizadas mediante Plixum?',
                answer: 'Sí. Las empresas pueden registrar contablemente ingresos, pagos, cuentas por cobrar, cuentas por pagar, diferencias en cambio, fees operativos y gastos financieros. Plixum proporciona soporte documental suficiente para conciliación y auditoría.',
              },
              {
                question: '¿Qué soporte documental genera Plixum?',
                answer: 'La plataforma genera extractos, historial transaccional, confirmaciones de pago, IDs de settlement, reportes descargables, soporte de fees, historial de conversiones y exportaciones contables. Idealmente compatible con herramientas como QuickBooks, Xero, Siigo, Alegra y SAP.',
              },
              {
                question: '¿Cómo se registran contablemente los ingresos de Plixum?',
                answer: 'Los fondos de usuarios no se reconocen como ingresos de Plixum. La plataforma únicamente reconoce fees operativos, fees tecnológicos, comisiones de orquestación, servicios SaaS, comisiones de swaps y revenue por servicios financieros integrados. Por ejemplo: un movimiento de USD 100,000 con 1% de fee genera un ingreso reconocido de USD 1,000 para Plixum.',
              },
            ],
          },
          {
            title: 'Arquitectura Técnica',
            items: [
              {
                question: '¿Qué proveedores integra Plixum?',
                answer: 'Plixum integra proveedores externos para virtual accounts, ACH, Wire, SEPA, Faster Payments, PIX y SPEI. El proveedor bancario principal es Bridge.xyz. Para settlement en blockchain utiliza principalmente la red Solana, y para swaps y liquidez descentralizada integra Jupiter Exchange.',
              },
              {
                question: '¿Cómo funciona el flujo de on-ramp?',
                answer: 'El usuario recibe una virtual account de un proveedor regulado. Su contraparte realiza una transferencia fiat por rails tradicionales (ACH, SEPA, Wire, PIX, SPEI). El proveedor regulado procesa el ingreso y convierte el fiat a liquidez digital. Los fondos se envían al smart contract o wallet del usuario, quien mantiene control operativo sobre sus balances.',
              },
              {
                question: '¿La complejidad blockchain es visible para los usuarios?',
                answer: 'No. La estrategia de Plixum consiste en mantener la complejidad blockchain y crypto invisible para los usuarios empresariales. La propuesta de valor visible se enfoca en pagos globales, treasury, settlement, balances multi-moneda e infraestructura financiera, no en DeFi, yield, arbitraje o wallets crypto complejas.',
              },
            ],
          },
        ],
      }
    : {
        title: 'Frequently Asked Questions',
        intro: 'Answers to the main questions about how Plixum operates from a regulatory, legal, operational, and accounting perspective.',
        sections: [
          {
            title: 'About Plixum',
            items: [
              {
                question: 'What is Plixum?',
                answer: 'Plixum is a programmable financial infrastructure platform that connects third-party financial services to allow companies to operate global payments, multi-currency balances, and digital assets from a single interface. It acts as a technology and financial orchestration layer between users, regulated financial providers, smart contracts, and payment rails.',
              },
              {
                question: 'Is Plixum a bank?',
                answer: 'No. Plixum does not operate as a bank or traditional financial entity. The platform acts as a technology and financial orchestration infrastructure that integrates regulated third-party services. Banking services and financial rails are operated by specialized providers and regulated entities.',
              },
              {
                question: 'How is Plixum positioned regulatorily?',
                answer: 'Plixum positions itself as financial infrastructure, a technology platform, a financial orchestration layer, a payment orchestration platform, and embedded financial infrastructure. It should not be presented as a bank, deposit-taking entity, traditional exchange, financial custodian, investment platform, or yield platform.',
              },
            ],
          },
          {
            title: 'Funds and Custody',
            items: [
              {
                question: 'Does Plixum custody client funds?',
                answer: "Plixum's architecture is designed to minimize direct custody. Funds remain with regulated providers, are held in segregated virtual accounts, or are managed through wallets or smart contracts associated with the user. Plixum facilitates the technological interaction and automation of operations.",
              },
              {
                question: 'Do the funds belong to Plixum?',
                answer: 'No. Funds belong to the user or owning company. Plixum only charges fees for orchestration, infrastructure, automation, financial integration, conversion, and settlement.',
              },
              {
                question: 'Is there a risk of being classified as a deposit-taking entity?',
                answer: 'To mitigate this risk, funds remain segregated, client resources are not mixed, Plixum does not use client funds for its own operations, and users maintain ownership over their balances and wallets.',
              },
            ],
          },
          {
            title: 'Compliance and Regulation',
            items: [
              {
                question: 'Does Plixum comply with AML/KYC processes?',
                answer: 'Yes. Plixum integrates specialized compliance and verification providers for KYC, KYB, screening, AML, transaction monitoring, and fraud prevention. The platform also maintains internal AML policies, transaction traceability, documentary support, and risk monitoring.',
              },
              {
                question: 'Does Plixum require a banking license?',
                answer: 'Plixum does not operate as a bank or deposit-taking entity. The model is structured around embedded finance, payment orchestration, third-party financial infrastructure, and technology services. Future growth of certain functionalities may require additional regulatory analysis depending on jurisdiction.',
              },
              {
                question: 'How should Plixum operations look in audits?',
                answer: 'Operations must be traceable, reconcilable, auditable, documented, and associated with a clear economic purpose. Each flow should be linkable to invoices, contracts, services, payroll, treasury, or business payments.',
              },
            ],
          },
          {
            title: 'Accounting and Reporting',
            items: [
              {
                question: 'Can companies account for operations carried out through Plixum?',
                answer: 'Yes. Companies can record income, payments, accounts receivable, accounts payable, foreign exchange differences, operational fees, and financial expenses. Plixum provides sufficient documentary support for reconciliation and auditing.',
              },
              {
                question: 'What documentary support does Plixum generate?',
                answer: 'The platform generates statements, transaction history, payment confirmations, settlement IDs, downloadable reports, fee documentation, conversion history, and accounting exports. Ideally compatible with tools such as QuickBooks, Xero, Siigo, Alegra, and SAP.',
              },
              {
                question: "How is Plixum's income recorded?",
                answer: "User funds are not recognized as Plixum's income. The platform only recognizes operational fees, technology fees, orchestration commissions, SaaS services, swap commissions, and revenue from integrated financial services. For example: a USD 100,000 transaction with a 1% fee generates a recognized income of USD 1,000 for Plixum.",
              },
            ],
          },
          {
            title: 'Technical Architecture',
            items: [
              {
                question: 'What providers does Plixum integrate?',
                answer: 'Plixum integrates external providers for virtual accounts, ACH, Wire, SEPA, Faster Payments, PIX, and SPEI. The primary banking provider is Bridge.xyz. For blockchain settlement it primarily uses the Solana network, and for decentralized swaps and liquidity it integrates Jupiter Exchange.',
              },
              {
                question: 'How does the on-ramp flow work?',
                answer: 'The user receives a virtual account from a regulated provider. Their counterpart makes a fiat transfer via traditional rails (ACH, SEPA, Wire, PIX, SPEI). The regulated provider processes the inflow and converts fiat to digital liquidity. Funds are sent to the user\'s smart contract or wallet, who maintains operational control over their balances.',
              },
              {
                question: 'Is blockchain complexity visible to users?',
                answer: "No. Plixum's strategy is to keep blockchain and crypto complexity invisible to business users. The visible value proposition focuses on global payments, treasury, settlement, multi-currency balances, and financial infrastructure — not DeFi, yield, arbitrage, or complex crypto wallets.",
              },
            ],
          },
        ],
      };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-1">
        <div className="w-full max-w-4xl mx-auto px-6 py-20">
          {/* Page header */}
          <div className="mb-16">
            <p className="text-sm tracking-widest uppercase font-semibold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-4" style={{ letterSpacing: '0.2em' }}>
              FAQ
            </p>
            <h1 className="text-white font-bold mb-6" style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: '1.2' }}>
              {content.title}
            </h1>
            <p className="text-white/60" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              {content.intro}
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="flex flex-col gap-16">
            {content.sections.map((section, sIdx) => (
              <div key={sIdx}>
                <h2 className="font-bold mb-8 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent" style={{ fontSize: '20px', letterSpacing: '0.05em' }}>
                  {section.title}
                </h2>
                <div className="flex flex-col gap-2">
                  {section.items.map((item, iIdx) => {
                    const key = `${sIdx}-${iIdx}`;
                    const isOpen = openIndex === key;
                    return (
                      <div
                        key={iIdx}
                        className="border border-white/10 rounded-xl overflow-hidden transition-colors hover:border-white/20"
                        style={{ background: 'rgba(255,255,255,0.04)' }}
                      >
                        <button
                          className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 focus:outline-none"
                          onClick={() => toggle(key)}
                        >
                          <span className="text-white font-semibold" style={{ fontSize: '16px', lineHeight: '1.4' }}>
                            {item.question}
                          </span>
                          <span
                            className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-white/20 text-white transition-transform duration-300"
                            style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                          >
                            +
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5">
                            <div className="border-t border-white/10 pt-4">
                              <p className="text-white/70" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const FAQ = () => (
  <LanguageProvider>
    <FAQContent />
  </LanguageProvider>
);

export default FAQ;
