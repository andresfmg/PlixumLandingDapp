import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const PolicySagrilaft = () => {
  const { language } = useLanguage();
    const content = {
      es: {
        title: 'Política SAGRILAFT de Plixum',
        intro: `<b>Solutek Soluciones Integrales S.A.S.</b> (NIT: 900524319-8), en adelante "Plixum", cumple con la normativa colombiana e internacional en materia de prevención de lavado de activos, financiación del terrorismo y financiamiento de la proliferación de armas de destrucción masiva. Esta política describe de manera íntegra los lineamientos, procedimientos y controles implementados por Plixum para garantizar el cumplimiento de SAGRILAFT.`,
        sections: [
          { heading: '1. Marco Normativo', body: `Plixum se rige por la legislación colombiana y los estándares internacionales en materia de prevención de lavado de activos, financiación del terrorismo y financiamiento de la proliferación de armas de destrucción masiva. Cumplimos con la Circular Básica Jurídica de la Superintendencia de Sociedades y demás normas aplicables.` },
          { heading: '2. Sistema de Administración', body: `Plixum ha implementado el Sistema de Administración y Gestión de Riesgos de Lavado de Activos, Financiación del Terrorismo y Financiamiento de la Proliferación de Armas de Destrucción Masiva (SAGRILAFT), que incluye políticas, procedimientos, controles internos, monitoreo y reporte de operaciones.` },
          { heading: '3. Debida Diligencia', body: `Realizamos procesos de conocimiento del cliente (KYC/KYT), verificación de listas restrictivas, monitoreo de operaciones, análisis de riesgos y actualización periódica de información. Exigimos la debida diligencia a nuestros aliados y proveedores.` },
          { heading: '4. Reporte de Operaciones Sospechosas', body: `Plixum reporta operaciones sospechosas a las autoridades competentes, colabora con investigaciones judiciales y mantiene registros de los reportes realizados. Garantizamos la confidencialidad y protección de la información.` },
          { heading: '5. Capacitación y Cultura de Cumplimiento', body: `Capacitamos a nuestro personal en prevención de lavado de activos, financiación del terrorismo y ética empresarial. Promovemos una cultura de cumplimiento y transparencia.` },
          { heading: '6. Actualización y Mejoras', body: `La política SAGRILAFT se actualiza periódicamente para adaptarse a cambios normativos, mejores prácticas y recomendaciones de las autoridades. Publicamos las actualizaciones en <b>plixum.com</b>.` },
          { heading: '7. Auditoría y Supervisión', body: `Realizamos auditorías internas y externas para verificar el cumplimiento de la política SAGRILAFT y mejorar continuamente nuestros controles.` },
          { heading: '8. Contacto', body: `Para consultas sobre SAGRILAFT, contáctanos en <b>info@plixum.com</b>.` },
        ],
        updated: 'Última actualización: Octubre 2025',
      },
      en: {
        title: 'Plixum SAGRILAFT Policy',
        intro: `<b>Solutek Soluciones Integrales S.A.S.</b> (NIT: 900524319-8), hereinafter "Plixum", complies with Colombian and international regulations regarding the prevention of money laundering, terrorism financing, and financing of the proliferation of weapons of mass destruction. This policy fully describes the guidelines, procedures, and controls implemented by Plixum to ensure SAGRILAFT compliance.`,
        sections: [
          { heading: '1. Regulatory Framework', body: `Plixum is governed by Colombian law and international standards regarding the prevention of money laundering, terrorism financing, and financing of the proliferation of weapons of mass destruction. We comply with the Basic Legal Circular of the Superintendence of Companies and other applicable regulations.` },
          { heading: '2. Administration System', body: `Plixum has implemented the System for the Administration and Management of Risks of Money Laundering, Terrorism Financing, and Financing of the Proliferation of Weapons of Mass Destruction (SAGRILAFT), which includes policies, procedures, internal controls, monitoring, and reporting of operations.` },
          { heading: '3. Due Diligence', body: `We conduct customer knowledge (KYC/KYT) processes, verification of restrictive lists, monitoring of operations, risk analysis, and periodic updating of information. We require due diligence from our partners and providers.` },
          { heading: '4. Reporting Suspicious Operations', body: `Plixum reports suspicious operations to the competent authorities, collaborates with judicial investigations, and keeps records of reports made. We guarantee confidentiality and protection of information.` },
          { heading: '5. Training and Compliance Culture', body: `We train our staff in money laundering prevention, terrorism financing, and business ethics. We promote a culture of compliance and transparency.` },
          { heading: '6. Updates and Improvements', body: `The SAGRILAFT policy is updated periodically to adapt to regulatory changes, best practices, and recommendations from authorities. Updates are published on <b>plixum.com</b>.` },
          { heading: '7. Audit and Supervision', body: `We conduct internal and external audits to verify compliance with the SAGRILAFT policy and continuously improve our controls.` },
          { heading: '8. Contact', body: `For inquiries about SAGRILAFT, contact us at <b>info@plixum.com</b>.` },
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

export default PolicySagrilaft;
