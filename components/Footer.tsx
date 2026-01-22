import React from 'react';
import { getWhatsAppLink, WHATSAPP_LINK, CLIENT_CONFIG, ALL_SERVICES, getServiceWhatsAppLink } from '../constants';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const mainServices = ALL_SERVICES.slice(0, 5);

  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 pb-32 md:pb-12 border-t border-white/5 font-inter">
      <div className="container-precision">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">

          {/* Coluna 1: Marca & Bio */}
          <div className="space-y-8">
            <button
              onClick={() => onNavigate?.('home')}
              className="group flex flex-col items-center md:items-start gap-1 focus:outline-none"
            >
              <span className="text-2xl font-black text-white tracking-tighter leading-none">Cristal Glass</span>
              <span className="text-brand-accent font-bold text-[10px] tracking-[0.3em] uppercase">Engenharia do vidro</span>
            </button>
            <p className="text-base leading-relaxed max-w-xs opacity-80 mx-auto md:mx-0">
              Especialistas em engenharia vidreira de alto desempenho. Precisão técnica em box, espelhos e projetos sob medida em {CLIENT_CONFIG.city}.
            </p>
          </div>

          {/* Coluna 2: Serviços Principais */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-sm tracking-tight">Nossas especialidades</h4>
            <ul className="space-y-4">
              {mainServices.map((s) => (
                <li key={s.id}>
                  <a
                    href={getServiceWhatsAppLink(s.title)}
                    target="_blank"
                    className="text-base hover:text-brand-accent transition-colors font-medium opacity-70 hover:opacity-100"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-sm tracking-tight">Empresa</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate?.('sobre')} className="text-base hover:text-brand-accent transition-colors text-left font-medium opacity-70 hover:opacity-100">Nossa história</button></li>
              <li><button onClick={() => onNavigate?.('servicos')} className="text-base hover:text-brand-accent transition-colors text-left font-medium opacity-70 hover:opacity-100">Catálogo de serviços</button></li>
              <li><button onClick={() => onNavigate?.('contato')} className="text-base hover:text-brand-accent transition-colors text-left font-medium opacity-70 hover:opacity-100">Fale com um técnico</button></li>
            </ul>
          </div>

          {/* Coluna 4: Contato Rápido */}
          <div className="space-y-8">
            <h4 className="text-white font-bold text-sm tracking-tight">Atendimento comercial</h4>
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-600 mb-1 tracking-widest">Telefone</span>
                <span className="text-white font-black text-xl">{CLIENT_CONFIG.phoneDisplay}</span>
              </div>
              <div className="flex justify-center md:justify-start">
                <a
                  href={getWhatsAppLink("Rodapé", "Atendimento Comercial")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 flex items-center justify-center px-10 bg-brand-whatsapp text-white rounded-2xl font-bold text-sm btn-interact shadow-2xl shadow-brand-whatsapp/20 whitespace-nowrap"
                >
                  Solicitar orçamento agora
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-medium text-slate-600">
            © {currentYear} Cristal Glass — Engenharia de vidros em {CLIENT_CONFIG.city}. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all items-center">
            <div className="text-[10px] font-black tracking-widest">ABNT NBR</div>
            <div className="text-[10px] font-black tracking-widest">SEGURANÇA CERTIFICADA</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;