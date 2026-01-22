import React from 'react';
import { getWhatsAppLink, WHATSAPP_LINK, CTA_TEXT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-10 md:pt-40 md:pb-24 bg-slate-50 overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-white skew-x-[-12deg] z-0 pointer-events-none hidden md:block" />

      <div className="container-precision relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center">

          <div className="lg:col-span-12 reveal active text-center flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 overflow-hidden">
              <span className="w-8 h-[2px] bg-brand-accent rounded-full"></span>
              <span className="text-[8px] md:text-[11px] font-black text-brand-accent uppercase tracking-[0.2em] md:tracking-[0.5em] whitespace-nowrap">Vidraçaria Técnica Especializada</span>
              <span className="w-8 h-[2px] bg-brand-accent rounded-full"></span>
            </div>

            <h1 className="text-3xl md:text-7xl lg:text-[92px] font-black text-slate-900 leading-[1.1] md:leading-[0.85] mb-8 tracking-tight">
              A Engenharia do <br className="hidden md:block" />
              <span className="text-slate-400 font-medium whitespace-nowrap">Vidro Moderno.</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mb-16 lg:mx-auto">
              Projetos sob medida em vidros e espelhos com instalação técnica imediata e acabamento padrão arquitetura de alto luxo.
            </p>

            <div className="flex flex-col items-center justify-center gap-8 md:gap-10 w-full">
              <a
                href={getWhatsAppLink("Início", "Botão CTA Principal")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-20 flex items-center justify-center px-8 sm:px-12 bg-brand-whatsapp text-white rounded-[2rem] font-black text-xl btn-interact shadow-2xl shadow-brand-whatsapp/30 whitespace-nowrap"
              >
                Solicitar orçamento
              </a>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=128&h=128&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=128&h=128&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=128&h=128&auto=format&fit=crop"
                  ].map((url, i) => (
                    <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-full border-[6px] border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm relative z-[30]">
                      <img src={url} alt={`Cliente ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="leading-tight text-center">
                  <p className="text-base md:text-xl font-black text-slate-900 leading-none">4.500+</p>
                  <p className="text-[9px] md:text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none mt-1">Clientes Satisfeitos</p>
                </div>
              </div>
            </div>

            <div className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 py-8 md:py-12 border-t border-slate-200/60 w-full max-w-4xl lg:mx-auto">
              {[
                { v: "20+", l: "Anos de Mercado" },
                { v: "48h", l: "Prazo Recorde" },
                { v: "SP/REG", l: "Atendimento Full" },
                { v: "100%", l: "Precisão Técnica" }
              ].map((item, i) => (
                <div key={i} className="space-y-3 text-center">
                  <p className="text-2xl md:text-3xl font-black text-slate-900 leading-none tracking-tighter">{item.v}</p>
                  <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none">{item.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;