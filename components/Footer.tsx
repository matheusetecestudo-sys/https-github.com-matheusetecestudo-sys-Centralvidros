import React from 'react';
import { WHATSAPP_LINK, CLIENT_CONFIG, ALL_SERVICES, getServiceWhatsAppLink } from '../constants';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const mainServices = ALL_SERVICES.slice(0, 5);

  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 border-t border-white/5 font-inter">
      <div className="container-precision">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Coluna 1: Marca & Bio */}
          <div className="space-y-6">
            <button
              onClick={() => onNavigate?.('home')}
              className="group flex flex-col items-start gap-1"
            >
              <span className="text-xl font-black text-white tracking-tighter uppercase leading-none">CRISTAL GLASS</span>
              <span className="text-brand-accent font-bold text-[9px] tracking-[0.4em] uppercase">Vidraçaria Técnica</span>
            </button>
            <p className="text-sm leading-relaxed max-w-xs opacity-70">
              Especialistas em engenharia vidreira. Precisão milimétrica em box, espelhos e projetos sob medida em {CLIENT_CONFIG.city}.
            </p>
          </div>

          {/* Coluna 2: Serviços Principais */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Serviços</h4>
            <ul className="space-y-3">
              {mainServices.map((s) => (
                <li key={s.id}>
                  <a
                    href={getServiceWhatsAppLink(s.title)}
                    target="_blank"
                    className="text-sm hover:text-brand-accent transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Empresa</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate?.('sobre')} className="text-sm hover:text-brand-accent transition-colors text-left font-medium">Nossa História</button></li>
              <li><button onClick={() => onNavigate?.('servicos')} className="text-sm hover:text-brand-accent transition-colors text-left font-medium">Catálogo Técnico</button></li>
              <li><button onClick={() => onNavigate?.('contato')} className="text-sm hover:text-brand-accent transition-colors text-left font-medium">Orçamento Direto</button></li>
            </ul>
          </div>

          {/* Coluna 4: Contato Rápido */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Atendimento</h4>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-600 mb-1">Telefone</span>
                <span className="text-white font-bold">{CLIENT_CONFIG.phoneDisplay}</span>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm hover:translate-x-1 transition-transform"
              >
                Solicitar via WhatsApp
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-700">
            © {currentYear} Cristal Glass — Todos os Direitos Reservados
          </p>
          <div className="flex gap-6 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
            <div className="text-[10px] font-black italic">ABNT</div>
            <div className="text-[10px] font-black italic">NBR CERTIFICADO</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;