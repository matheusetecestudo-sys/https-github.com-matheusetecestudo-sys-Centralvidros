import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Trust: React.FC = () => {
  const stats = [
    { label: "Obras Realizadas", value: "4.500+" },
    { label: "Atendimento", value: "Grande SP" },
    { label: "Garantia Técnica", value: "12 meses" },
    { label: "Certificação NBR", value: "Aprovado" }
  ];

  return (
    <section id="sobre" className="py-10 md:py-12 bg-white relative font-inter">
      <div className="container-precision">
        <div className="bg-slate-950 rounded-3xl p-6 lg:p-16 overflow-hidden relative reveal active shadow-2xl">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-accent/5 skew-x-[-15deg] pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-[2px] bg-brand-accent"></span>
                <span className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.3em]">Credibilidade Técnica</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-[1] tracking-tight">
                O Padrão <br /> <span className="text-slate-500 italic">de Excelência.</span>
              </h2>
              <p className="text-slate-400 font-medium text-lg md:text-xl mb-12 leading-relaxed max-w-lg">
                Projetos que exigem rigor técnico e acabamento de alto luxo. Unimos o preço direto de usina à precisão de engenharia.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/5 pt-12">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight italic">{stat.value}</div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative bg-slate-900 ring-1 ring-white/10 backdrop-blur-3xl p-6 md:p-8 lg:p-14 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight leading-none mb-1">Análise Técnica</h3>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Consultoria Gratuita</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-10 font-medium text-base leading-relaxed">
                  Enviamos um especialista para avaliar seu projeto sem compromisso. Segurança e economia desde a primeira conversa.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-14 flex items-center justify-center bg-brand-whatsapp text-white rounded-xl font-bold text-base btn-interact shadow-lg shadow-brand-whatsapp/20 whitespace-nowrap"
                >
                  Peça seu orçamento agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
