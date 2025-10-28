import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Privacy = () => {
  const { language } = useLanguage();
  const content = {
      es: {
        title: 'Política de Privacidad de Plixum',
        intro: `<b>Solutek Soluciones Integrales S.A.S.</b> (NIT: 900524319-8), en adelante "Plixum", reconoce la importancia de la privacidad y protección de los datos personales de sus usuarios. Esta Política de Privacidad describe de manera íntegra cómo recopilamos, usamos, almacenamos, transferimos y protegemos tu información al utilizar nuestros servicios digitales y la página web <b>plixum.com</b>.`,
        sections: [
          { heading: '1. Responsable del Tratamiento', body: `El responsable del tratamiento de tus datos personales es <b>Solutek Soluciones Integrales S.A.S.</b> (Plixum), NIT 900524319-8, con domicilio en Medellín, Colombia.` },
          { heading: '2. Datos que Recopilamos', body: `Recopilamos información personal como nombre, apellidos, correo electrónico, dirección, teléfono, documentos de identidad, información financiera, datos de navegación, dirección IP, cookies, y cualquier otro dato necesario para la prestación de nuestros servicios.` },
          { heading: '3. Finalidad del Tratamiento', body: `Tus datos personales serán tratados para: (i) la prestación de servicios contratados; (ii) gestión de cuentas y usuarios; (iii) cumplimiento de obligaciones legales y regulatorias; (iv) análisis estadístico y de comportamiento; (v) envío de comunicaciones, promociones y novedades; (vi) prevención de fraude y lavado de activos; (vii) atención de solicitudes, quejas y reclamos.` },
          { heading: '4. Transferencia y Encargo de Datos', body: `Podemos compartir tus datos con terceros aliados, proveedores, autoridades regulatorias y judiciales, siempre bajo estrictos estándares de seguridad y confidencialidad. La transferencia internacional de datos se realizará conforme a la legislación aplicable.` },
          { heading: '5. Derechos del Titular', body: `Como titular de los datos, tienes derecho a: (i) conocer, actualizar y rectificar tus datos; (ii) solicitar la supresión de tus datos; (iii) revocar la autorización para su tratamiento; (iv) acceder a la información sobre el tratamiento de tus datos.` },
          { heading: '6. Seguridad de la Información', body: `Implementamos medidas técnicas, humanas y administrativas para proteger tus datos contra acceso no autorizado, pérdida, alteración, divulgación o destrucción. Realizamos auditorías periódicas y capacitaciones a nuestro personal.` },
          { heading: '7. Vigencia y Modificaciones', body: `Esta política está vigente desde el 01 de enero de 2024 y puede ser modificada por Plixum en cualquier momento. Las modificaciones serán publicadas en <b>plixum.com</b>.` },
          { heading: '8. Cookies y Tecnologías Similares', body: `Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario, analizar tendencias y administrar la plataforma. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad.` },
          { heading: '9. Contacto', body: `Para ejercer tus derechos o resolver inquietudes, contáctanos en <b>info@plixum.com</b>.` },
        ],
        updated: 'Última actualización: Octubre 2025',
      },
      en: {
        title: 'Plixum Privacy Policy',
        intro: `<b>Solutek Soluciones Integrales S.A.S.</b> (NIT: 900524319-8), hereinafter "Plixum", recognizes the importance of privacy and protection of users' personal data. This Privacy Policy fully describes how we collect, use, store, transfer, and protect your information when using our digital services and the website <b>plixum.com</b>.`,
        sections: [
          { heading: '1. Data Controller', body: `The data controller is <b>Solutek Soluciones Integrales S.A.S.</b> (Plixum), NIT 900524319-8, based in Medellín, Colombia.` },
          { heading: '2. Data We Collect', body: `We collect personal information such as name, surname, email, address, phone, identity documents, financial information, browsing data, IP address, cookies, and any other data necessary for providing our services.` },
          { heading: '3. Purpose of Processing', body: `Your personal data will be processed for: (i) provision of contracted services; (ii) account and user management; (iii) compliance with legal and regulatory obligations; (iv) statistical and behavioral analysis; (v) sending communications, promotions, and news; (vi) fraud and money laundering prevention; (vii) handling requests, complaints, and claims.` },
          { heading: '4. Data Sharing and Processing', body: `We may share your data with allied third parties, providers, regulatory and judicial authorities, always under strict security and confidentiality standards. International data transfers will be carried out in accordance with applicable law.` },
          { heading: '5. Data Subject Rights', body: `As the data subject, you have the right to: (i) know, update, and rectify your data; (ii) request deletion of your data; (iii) revoke authorization for its processing; (iv) access information about the processing of your data.` },
          { heading: '6. Information Security', body: `We implement technical, human, and administrative measures to protect your data against unauthorized access, loss, alteration, disclosure, or destruction. We conduct periodic audits and staff training.` },
          { heading: '7. Validity and Modifications', body: `This policy is effective as of January 1, 2024 and may be modified by Plixum at any time. Modifications will be published on <b>plixum.com</b>.` },
          { heading: '8. Cookies and Similar Technologies', body: `We use cookies and similar technologies to improve user experience, analyze trends, and manage the platform. You can configure your browser to reject cookies, although this may affect functionality.` },
          { heading: '9. Contact', body: `To exercise your rights or resolve concerns, contact us at <b>info@plixum.com</b>.` },
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

export default Privacy;
