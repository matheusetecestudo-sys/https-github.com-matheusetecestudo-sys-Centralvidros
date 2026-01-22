import React from 'react';
import { WHATSAPP_LINK, CTA_TEXT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-8 md:pt-24 md:pb-16 bg-slate-50 overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-white skew-x-[-12deg] z-0 pointer-events-none hidden md:block" />

      <div className="container-precision relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center">

          <div className="lg:col-span-7 reveal active text-left">
            <div className="flex items-center gap-4 mb-10 overflow-hidden">
              <span className="w-12 h-[2px] bg-brand-accent rounded-full"></span>
              <span className="text-[9px] md:text-[11px] font-black text-brand-accent uppercase tracking-[0.5em] whitespace-nowrap">Vidraçaria Técnica Especializada</span>
            </div>

            <h1 className="text-4xl md:text-7xl lg:text-[92px] font-black text-slate-900 leading-[0.95] md:leading-[0.85] mb-12 tracking-tight">
              A Engenharia do <br className="hidden md:block" />
              <span className="text-slate-400 font-medium">Vidro Moderno.</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mb-16">
              Projetos sob medida em vidros e espelhos com instalação técnica imediata e acabamento padrão arquitetura de alto luxo.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-10">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-20 flex items-center justify-center px-8 sm:px-12 bg-brand-whatsapp text-white rounded-[2rem] font-black text-xl btn-interact shadow-2xl shadow-brand-whatsapp/30 whitespace-nowrap"
              >
                Solicitar orçamento
              </a>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[6px] border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm">
                      <div className="w-full h-full bg-slate-200" />
                    </div>
                  ))}
                </div>
                <div className="leading-tight">
                  <p className="text-base md:text-xl font-black text-slate-900 leading-none">4.500+</p>
                  <p className="text-[9px] md:text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none mt-1">Clientes Satisfeitos</p>
                </div>
              </div>
            </div>

            <div className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 py-8 md:py-12 border-t border-slate-200/60">
              {[
                { v: "20+", l: "Anos de Mercado" },
                { v: "48h", l: "Prazo Recorde" },
                { v: "SP/REG", l: "Atendimento Full" },
                { v: "100%", l: "Precisão Técnica" }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <p className="text-2xl md:text-3xl font-black text-slate-900 leading-none tracking-tighter">{item.v}</p>
                  <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none">{item.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative reveal active hidden lg:block">
            <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl border-[12px] border-white">
              <img src="/images/fachada-principal.jpg" alt="Vidraçaria Premium" className="w-full h-full object-cover scale-105" />
              <div className="absolute inset-x-8 bottom-8 p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-brand-accent uppercase tracking-widest mb-1">Certificado de Segurança</p>
                  <p className="text-lg font-black text-slate-900 leading-none">Instalação Garantida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;