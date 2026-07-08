import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="relative w-full bg-black text-white" style={{ paddingTop: 'var(--padding-section-y)', paddingBottom: '48px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="finity-container">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--gap-large)' }}>
          {/* Logo */}
          <div className="flex flex-col items-start justify-start">
            <div className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text">
              Plixum
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start justify-start">
            <p className="text-white font-semibold mb-4" style={{ fontSize: 'var(--paragraph-small)' }}>
              {t('contactTitle')}
            </p>
            <a
              href="mailto:info@plixum.com"
              className="text-cyan-400 hover:text-cyan-300 no-underline transition-colors"
              style={{ fontSize: 'var(--paragraph)', fontWeight: 400 }}
            >
              {t('contactEmailLabel')}
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start justify-start" style={{ gap: 'var(--gap-xs)' }}>
            <Link to="/privacy" className="text-white hover:text-cyan-400 no-underline transition-colors" style={{ fontSize: 'var(--paragraph-small)', fontWeight: 400 }}>
              {t('footerPrivacy')}
            </Link>
            <Link to="/terms-of-service" className="text-white hover:text-cyan-400 no-underline transition-colors" style={{ fontSize: 'var(--paragraph-small)', fontWeight: 400 }}>
              {t('footerTerms')}
            </Link>
            <Link to="/policy-sagrilaft" className="text-white hover:text-cyan-400 no-underline transition-colors" style={{ fontSize: 'var(--paragraph-small)', fontWeight: 400 }}>
              {language === 'es' ? 'Política SAGRILAFT' : 'SAGRILAFT Policy'}
            </Link>
            <Link to="/faq" className="text-white hover:text-cyan-400 no-underline transition-colors" style={{ fontSize: 'var(--paragraph-small)', fontWeight: 400 }}>
              FAQ
            </Link>
          </div>
        </div>

        {/* Copyright + social */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60" style={{ fontSize: 'var(--paragraph-small)' }}>
            © 2026 Plixum. {t('footerRights')}
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-400 transition-colors">Twitter</a>
          </div>
        </div>

        {/* Regulatory disclaimer */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <p className="text-white/60 text-center" style={{ fontSize: '12px', lineHeight: '1.7' }}>
            {language === 'es'
              ? 'Plixum es un producto de Solutek Soluciones Integrales S.A.S. (NIT: 900524319-8), empresa de tecnología constituida en Colombia. Solutek es un proveedor de tecnología y no presta ni ofrece servicios financieros. Solutek Soluciones Integrales S.A.S. (i) no lleva a cabo ningún tipo de actividad propia de las entidades financieras que requieren autorización para su funcionamiento; (ii) no realiza actividades de captación de dinero conforme con la normativa colombiana; (iii) no está vigilada por la Superintendencia Financiera de Colombia (SFC). Plixum actúa como plataforma tecnológica de orquestación de pagos. Las operaciones fiat son procesadas por Bridge.xyz, entidad regulada en EE.UU. El usuario es responsable de sus obligaciones cambiarias y tributarias.'
              : 'Plixum is a product of Solutek Soluciones Integrales S.A.S. (NIT: 900524319-8), a technology company incorporated in Colombia. Solutek is a technology provider and does not offer financial services. Solutek Soluciones Integrales S.A.S. (i) does not carry out any activity typical of financial entities that require authorization to operate; (ii) does not conduct money deposit-taking activities under Colombian regulations; (iii) is not supervised by the Superintendencia Financiera de Colombia (SFC). Plixum operates as a technology platform for payment orchestration. Fiat operations are processed by Bridge.xyz, a regulated entity in the United States. The user is responsible for their foreign exchange and tax obligations.'}
          </p>
        </div>
      </div>
    </footer>
  );
};
