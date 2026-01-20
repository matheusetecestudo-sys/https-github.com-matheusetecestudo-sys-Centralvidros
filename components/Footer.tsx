import React from 'react';
import { WHATSAPP_LINK, CLIENT_CONFIG, ALL_SERVICES, getServiceWhatsAppLink } from '../constants';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  
  // Dividindo os 15 serviços (8 em uma coluna, 7 na outra)
  const col1 = ALL_SERVICES.slice(0, 8);
  const col2 = ALL_SERVICES.slice(8);

  return (
    <footer className="bg-[#020617] text-slate-400 pt-24 pb-8 relative overflow-hidden border-t border-slate-900">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          <div className="lg:col-span-4 space-y-8">
            <button 
              onClick={() => onNavigate?.('home')}
              className="flex items-center gap-3 group text-left"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-[0_10px_20px_rgba(5,150,105,0.2)] transition-transform group-hover:scale-110">
                <span className="text-white font-black text-2xl italic">C</span>
              </div>
              <div>
                <span className="text-xl font-black text-white block tracking-tighter uppercase leading-none">CRISTAL GLASS</span>
                <span className="text-emerald-500 font-bold text-[9px] tracking-[0.4em] uppercase">Engenharia em Vidros</span>
              </div>
            </button>
            
            <div className="space-y-6">
              <p className="text-sm leading-relaxed font-medium text-slate-500 max-w-sm">
                A referência em {CLIENT_CONFIG.city}. Unimos o preço direto de usina com o acabamento milimétrico e suporte técnico especializado.
              </p>
              
              <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-[2rem] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">4.9/5 Google Reviews</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-10">
            <div>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-8 border-l-2 border-emerald-500 pl-4">Soluções Principais</h4>
              <ul className="space-y-4">
                {col1.map((s) => (
                  <li key={s.id}>
                    <a 
                      href={getServiceWhatsAppLink(s.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] md:text-[11px] font-bold text-slate-500 hover:text-emerald-400 transition-colors text-left leading-tight group flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-slate-800 rounded-full group-hover:bg-emerald-500 group-hover:scale-150 transition-all"></span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.4em] mb-8 border-l-2 border-emerald-500 pl-4">Linha Complementar</h4>
              <ul className="space-y-4">
                {col2.map((s) => (
                  <li key={s.id}>
                    <a 
                      href={getServiceWhatsAppLink(s.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] md:text-[11px] font-bold text-slate-500 hover:text-emerald-400 transition-colors text-left leading-tight group flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-slate-800 rounded-full group-hover:bg-emerald-500 group-hover:scale-150 transition-all"></span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl relative group overflow-hidden">
              <h4 className="text-white font-black text-lg leading-tight mb-4">
                Precisa de <br/> <span className="text-emerald-500 italic">preço hoje?</span>
              </h4>
              
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-[10px] text-center uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-lg shadow-emerald-900/20 active:scale-95 px-4"
              >
                Peça seu orçamento no WhatsApp
              </a>
              
              <div className="mt-8 space-y-3">
                 <div className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none">Certificação NBR ABNT</p>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none">Garantia Técnica 12 Meses</p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-700">
              © {currentYear} {CLIENT_CONFIG.name.toUpperCase()} • {CLIENT_CONFIG.city.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;