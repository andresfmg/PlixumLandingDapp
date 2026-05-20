import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

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
        { heading: '6. Servicios y Operaciones', body: `Plixum facilita servicios de infraestructura financiera que incluyen: a) Recaudo de pagos globales mediante cuentas virtuales y rails bancarios regulados; b) Conversión y settlement entre monedas fiat y activos digitales a través de proveedores especializados; c) Payouts y transferencias a terceros; d) Automatización de flujos de tesorería. Plixum actúa como capa tecnológica de orquestación y no como banco, exchange, custodio financiero ni contraparte directa en las operaciones.` },
        { heading: '7. Naturaleza del Servicio', body: `Plixum opera como plataforma de infraestructura financiera y orquestación de pagos. Los fondos del Usuario son procesados por proveedores financieros regulados integrados a la plataforma. Plixum no capta, custodia ni administra fondos como entidad financiera propia. Los balances corresponden al Usuario y son gestionados a través de infraestructura de terceros regulados.` },
        { heading: '8. Comisiones y Tarifas', body: `Las comisiones y tarifas de los Servicios se detallan en nuestros canales de comunicación y se actualizan periódicamente. Plixum cobra únicamente fees por servicios tecnológicos, orquestación, automatización e integración financiera. Los fondos del Usuario no son reconocidos como ingresos de Plixum.` },
        { heading: '9. Obligaciones Tributarias y Cambiarias', body: `El Usuario es responsable de cumplir con sus obligaciones tributarias, contables y cambiarias derivadas del uso de los Servicios. Plixum proporciona soporte documental (extractos, historial transaccional, reportes exportables) para facilitar la conciliación y auditoría del Usuario, pero no brinda asesoría contable ni legal.` },
        { heading: '10. Condiciones de Uso', body: `Eres responsable de la privacidad y seguridad de tu usuario y contraseña. Todas las operaciones financieras son finales y no reembolsables. Plixum puede suspender o cancelar tu cuenta ante incumplimientos.` },
        { heading: '11. Cancelación de Cuentas', body: `Puedes solicitar la cancelación de tu cuenta en cualquier momento, siempre que no existan obligaciones pendientes ni saldos positivos. Plixum validará la solicitud y podrá retener activos hasta saldar obligaciones.` },
        { heading: '12. Propiedad Intelectual', body: `Todo el contenido de Plixum (software, textos, gráficos, logos, signos distintivos, animaciones, sonidos) es propiedad exclusiva de Solutek Soluciones Integrales S.A.S. Está prohibida la reproducción, ingeniería inversa o manipulación sin autorización.` },
        { heading: '13. Información Confidencial', body: `La información técnica, financiera, legal, comercial, know-how, clientes, socios y operaciones de Plixum es confidencial. Debes respetar la confidencialidad y evitar divulgaciones no autorizadas.` },
        { heading: '14. Riesgos y Limitación de Responsabilidad', body: `Reconoces que Plixum opera como infraestructura tecnológica y depende de proveedores financieros regulados de terceros. Plixum no se hace responsable por fallas, interrupciones o pérdidas originadas en dichos proveedores o en las redes blockchain subyacentes. El Usuario asume los riesgos operativos, de tipo de cambio, de liquidez y regulatorios propios de las operaciones financieras globales. Las transacciones confirmadas en blockchain no son reversibles.` },
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
        { heading: '6. Services and Operations', body: `Plixum facilitates financial infrastructure services including: a) Global payment collection via regulated virtual accounts and banking rails; b) Conversion and settlement between fiat currencies and digital assets through specialized providers; c) Cross-border payouts and third-party transfers; d) Treasury workflow automation. Plixum acts as a technology orchestration layer and not as a bank, exchange, financial custodian, or direct counterpart in transactions.` },
        { heading: '7. Nature of Service', body: `Plixum operates as a financial infrastructure and payment orchestration platform. User funds are processed by regulated financial providers integrated into the platform. Plixum does not collect, custody, or manage funds as a financial entity in its own right. Balances belong to the User and are managed through regulated third-party infrastructure.` },
        { heading: '8. Fees and Charges', body: `Service fees and charges are detailed in our communication channels and updated periodically. Plixum charges fees exclusively for technology services, orchestration, automation, and financial integration. User funds are not recognized as Plixum income.` },
        { heading: '9. Tax and Regulatory Obligations', body: `The User is responsible for complying with their tax, accounting, and exchange obligations derived from use of the Services. Plixum provides documentary support (statements, transaction history, exportable reports) to facilitate User reconciliation and auditing, but does not provide accounting or legal advice.` },
        { heading: '10. Terms of Use', body: `You are responsible for the privacy and security of your username and password. All financial operations are final and non-refundable. Plixum may suspend or cancel your account in case of breaches.` },
        { heading: '11. Account Cancellation', body: `You may request account cancellation at any time, provided there are no pending obligations or positive balances. Plixum will validate the request and may retain assets until obligations are settled.` },
        { heading: '12. Intellectual Property', body: `All Plixum content (software, texts, graphics, logos, trademarks, animations, sounds) is the exclusive property of Solutek Soluciones Integrales S.A.S. Reproduction, reverse engineering, or manipulation without authorization is prohibited.` },
        { heading: '13. Confidential Information', body: `Technical, financial, legal, commercial, know-how, client, partner, and operational information of Plixum is confidential. You must respect confidentiality and avoid unauthorized disclosures.` },
        { heading: '14. Risks and Limitation of Liability', body: `You acknowledge that Plixum operates as a technology infrastructure layer and depends on regulated third-party financial providers. Plixum is not responsible for failures, interruptions, or losses originating from such providers or the underlying blockchain networks. The User assumes operational, foreign exchange, liquidity, and regulatory risks inherent to global financial operations. Transactions confirmed on blockchain are not reversible.` },
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
      <footer className="border-t border-white/10 bg-black py-8 mt-8">
        <div className="container mx-auto px-4 max-w-3xl flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40" style={{ fontSize: '14px' }}>© 2026 Plixum. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/40 hover:text-cyan-400 transition-colors no-underline" style={{ fontSize: '14px' }}>{language === 'es' ? 'Política de privacidad' : 'Privacy Policy'}</Link>
            <Link to="/faq" className="text-white/40 hover:text-cyan-400 transition-colors no-underline" style={{ fontSize: '14px' }}>FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
