import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const TermsOfService = () => {
  const { language } = useLanguage();
  const content = {
    es: {
      title: 'Términos y Condiciones de Plixum',
      intro: `<b>Solutek Soluciones Integrales S.A.S.</b> (NIT: 900524319-8), en adelante "Plixum", te da la bienvenida. Antes de cualquier relación con nosotros, te invitamos a leer y aceptar nuestros Términos y Condiciones ("T&C"). Este documento regula el uso de nuestros servicios digitales y la página web <b>plixum.com</b>. Al acceder, registrarte, navegar, contratar nuestros servicios o disfrutar de nuestra plataforma, manifiestas tu adhesión libre y voluntaria a las condiciones aquí presentadas.`,
      sections: [
        { heading: '1. Ámbito de Aplicación', body: `<b>Plixum</b> ofrece sus servicios digitales, productos, plataformas, software, APIs y demás funcionalidades bajo el término "Servicios". Estos servicios son ofrecidos por <b>Solutek Soluciones Integrales S.A.S.</b>, sociedad legalmente constituida en Colombia, con sede principal en Medellín y NIT 900524319-8.` },
        { heading: '2. Aceptación y Responsabilidad del Usuario', body: `Al utilizar nuestros Servicios, asumes la responsabilidad de cumplir con estos T&C. Al aceptar este documento, autorizas a Plixum para el tratamiento de tus datos personales conforme a nuestra Política de Tratamiento de Datos Personales y Aviso de Privacidad.` },
        { heading: '3. Modificaciones', body: `Plixum podrá modificar estos T&C en cualquier momento, de manera unilateral y sin previo aviso. Si no estás de acuerdo con las modificaciones, deberás interrumpir el uso y comunicarte con nosotros.` },
        { heading: '4. Registro y Verificación', body: `Para acceder a los Servicios, deberás crear una cuenta de usuario y verificar tu identidad. Solicitaremos información personal (nombre, domicilio, documentos de identidad, información financiera) y realizaremos procesos de verificación KYC/KYT.` },
        { heading: '5. Declaraciones y Garantías', body: `La información que proporciones debe ser exacta y veraz. Te comprometes a mantenerla actualizada. Confirmas que tienes la capacidad legal y las autorizaciones necesarias. No debes usar medios automatizados para acceder a los Servicios sin consentimiento expreso.` },
        { heading: '6. Servicios y Transacciones', body: `Podrás realizar compras, ventas y transferencias de activos digitales: a) Comprar/vender activos digitales a Plixum; b) Operaciones a través de Mandato; c) Transferencias a terceros. Plixum actúa como facilitador y no asume responsabilidad por pérdidas de activos custodiados por terceros.` },
        { heading: '7. Mandato', body: `Al aceptar estos T&C, otorgas a Plixum el mandato para realizar gestiones necesarias en tu nombre y representación, incluyendo la compra/venta y custodia de activos digitales, conforme a tus instrucciones.` },
        { heading: '8. Comisiones y Tarifas', body: `Las comisiones y tarifas de los Servicios se detallan en nuestros canales de comunicación y se actualizan periódicamente. Plixum podrá cobrar por servicios específicos como retiros o transferencias.` },
        { heading: '9. Impuestos y Obligaciones Cambiarias', body: `El Usuario es responsable de cumplir con sus obligaciones tributarias y cambiarias relacionadas con la compra/venta de activos digitales. Plixum no brinda asesoría contable o legal sobre estas transacciones.` },
        { heading: '10. Condiciones de Uso', body: `Eres responsable de la privacidad y seguridad de tu usuario y contraseña. Todas las operaciones financieras son finales y no reembolsables. Plixum puede suspender o cancelar tu cuenta ante incumplimientos.` },
        { heading: '11. Cancelación de Cuentas', body: `Puedes solicitar la cancelación de tu cuenta en cualquier momento, siempre que no existan obligaciones pendientes ni saldos positivos. Plixum validará la solicitud y podrá retener activos hasta saldar obligaciones.` },
        { heading: '12. Propiedad Intelectual', body: `Todo el contenido de Plixum (software, textos, gráficos, logos, signos distintivos, animaciones, sonidos) es propiedad exclusiva de Solutek Soluciones Integrales S.A.S. Está prohibida la reproducción, ingeniería inversa o manipulación sin autorización.` },
        { heading: '13. Información Confidencial', body: `La información técnica, financiera, legal, comercial, know-how, clientes, socios y operaciones de Plixum es confidencial. Debes respetar la confidencialidad y evitar divulgaciones no autorizadas.` },
        { heading: '14. Riesgos y Limitación de Responsabilidad', body: `Reconoces los riesgos inherentes a las operaciones con activos digitales. Plixum no se hace responsable de pérdidas, volatilidad, ni de la seguridad de activos custodiados por terceros. Las transacciones no son reversibles.` },
        { heading: '15. Cumplimiento y SAGRILAFT', body: `Plixum opera bajo altos estándares de cumplimiento normativo, ajustándose a la legislación colombiana y lineamientos internacionales. Implementamos el Sistema de Administración y Gestión de Lavado de Activos, Financiación del Terrorismo y Financiamiento de la Proliferación de Armas de Destrucción Masiva (SAGRILAFT).` },
        { heading: '16. Legislación Aplicable', body: `Estos T&C se rigen por las leyes de la República de Colombia. Cualquier controversia será resuelta por los tribunales competentes de Colombia.` },
        { heading: '17. Solución de Conflictos', body: `Las partes buscarán una solución amistosa ante cualquier conflicto. Si no se logra, la controversia se someterá a la jurisdicción de los jueces de Medellín.` },
        { heading: '18. Vigencia', body: `Estos T&C están vigentes desde el 01 de enero de 2024 y aplican a todos los Servicios realizados desde su publicación. Plixum podrá ajustarlos periódicamente.` },
        { heading: '19. Contacto', body: `Para consultas, contáctanos en <b>info@plixum.com</b>.` },
      ],
      updated: 'Última actualización: Octubre 2025',
    },
    en: {
      title: 'Plixum Terms and Conditions',
      intro: `<b>Solutek Soluciones Integrales S.A.S.</b> (NIT: 900524319-8), hereinafter "Plixum", welcomes you. Before any relationship with us, please read and accept our Terms and Conditions ("T&C"). This document governs the use of our digital services and the website <b>plixum.com</b>. By accessing, registering, browsing, contracting our services, or using our platform, you freely and voluntarily adhere to the conditions presented here.`,
      sections: [
        { heading: '1. Scope of Application', body: `<b>Plixum</b> offers its digital services, products, platforms, software, APIs, and other functionalities under the term "Services". These services are provided by <b>Solutek Soluciones Integrales S.A.S.</b>, a legally established company in Colombia, headquartered in Medellín, NIT 900524319-8.` },
        { heading: '2. Acceptance and User Responsibility', body: `By using our Services, you assume the responsibility to comply with these T&C. By accepting this document, you authorize Plixum to process your personal data in accordance with our Personal Data Processing Policy and Privacy Notice.` },
        { heading: '3. Modifications', body: `Plixum may modify these T&C at any time, unilaterally and without prior notice. If you disagree with the modifications, you must stop using the platform and contact us.` },
        { heading: '4. Registration and Verification', body: `To access the Services, you must create a user account and verify your identity. We will request personal information (name, address, identity documents, financial information) and conduct KYC/KYT verification processes.` },
        { heading: '5. Declarations and Warranties', body: `The information you provide must be accurate and truthful. You commit to keeping it updated. You confirm that you have the legal capacity and necessary authorizations. You must not use automated means to access the Services without express consent.` },
        { heading: '6. Services and Transactions', body: `You may make purchases, sales, and transfers of digital assets: a) Buy/sell digital assets to Plixum; b) Operations through Mandate; c) Transfers to third parties. Plixum acts as a facilitator and does not assume responsibility for losses of assets held by third parties.` },
        { heading: '7. Mandate', body: `By accepting these T&C, you grant Plixum the mandate to carry out necessary actions on your behalf and representation, including the purchase/sale and custody of digital assets, according to your instructions.` },
        { heading: '8. Fees and Charges', body: `Service fees and charges are detailed in our communication channels and updated periodically. Plixum may charge for specific services such as withdrawals or transfers.` },
        { heading: '9. Taxes and Exchange Obligations', body: `The User is responsible for complying with their tax and exchange obligations related to the purchase/sale of digital assets. Plixum does not provide accounting or legal advice on these transactions.` },
        { heading: '10. Terms of Use', body: `You are responsible for the privacy and security of your username and password. All financial operations are final and non-refundable. Plixum may suspend or cancel your account in case of breaches.` },
        { heading: '11. Account Cancellation', body: `You may request account cancellation at any time, provided there are no pending obligations or positive balances. Plixum will validate the request and may retain assets until obligations are settled.` },
        { heading: '12. Intellectual Property', body: `All Plixum content (software, texts, graphics, logos, trademarks, animations, sounds) is the exclusive property of Solutek Soluciones Integrales S.A.S. Reproduction, reverse engineering, or manipulation without authorization is prohibited.` },
        { heading: '13. Confidential Information', body: `Technical, financial, legal, commercial, know-how, client, partner, and operational information of Plixum is confidential. You must respect confidentiality and avoid unauthorized disclosures.` },
        { heading: '14. Risks and Limitation of Liability', body: `You acknowledge the inherent risks of digital asset operations. Plixum is not responsible for losses, volatility, or the security of assets held by third parties. Transactions are not reversible.` },
        { heading: '15. Compliance and SAGRILAFT', body: `Plixum operates under high standards of regulatory compliance, adhering to Colombian law and international guidelines. We implement the System for the Administration and Management of Money Laundering, Terrorism Financing, and Financing of the Proliferation of Weapons of Mass Destruction (SAGRILAFT).` },
        { heading: '16. Applicable Law', body: `These T&C are governed by the laws of the Republic of Colombia. Any dispute will be resolved by the competent courts of Colombia.` },
        { heading: '17. Dispute Resolution', body: `The parties will seek an amicable solution to any conflict. If not achieved, the dispute will be submitted to the jurisdiction of the courts of Medellín.` },
        { heading: '18. Validity', body: `These T&C are effective as of January 1, 2024 and apply to all Services performed since their publication. Plixum may adjust them periodically.` },
        { heading: '19. Contact', body: `For inquiries, contact us at <b>info@plixum.com</b>.` },
      ],
      updated: 'Last updated: October 2025',
    },
  };
  const lang = content[language];
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-8 text-black">{lang.title}</h1>
            <p className="mb-4 text-lg text-foreground" dangerouslySetInnerHTML={{ __html: lang.intro }} />
            {lang.sections.map((section, idx) => (
              <React.Fragment key={idx}>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-black">{section.heading}</h2>
                <p className="mb-4 text-foreground" dangerouslySetInnerHTML={{ __html: section.body }} />
              </React.Fragment>
            ))}
            <p className="mt-8 text-muted-foreground text-sm">{lang.updated}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
};

export default TermsOfService;
