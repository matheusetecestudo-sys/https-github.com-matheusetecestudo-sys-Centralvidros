import React from 'react';
import { WHATSAPP_LINK, CTA_TEXT } from '../constants';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Análise Técnica",
      desc: "Análise do local e medidas iniciais via fotos enviadas por você.",
      icon: "message-square"
    },
    {
      num: "02",
      title: "Medição a Laser",
      desc: "Vamos até o local para tirar as medidas milimétricas finais.",
      icon: "ruler"
    },
    {
      num: "03",
      title: "Instalação Limpa",
      desc: "Equipe especializada para instalação rápida, segura e organizada.",
      icon: "check-circle"
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal active">
          <span className="text-emerald-400 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Como Trabalhamos</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">Do Orçamento à Instalação</h2>
          <p className="text-slate-400 max-w-xl mx-auto font-medium text-lg">Processo simples e direto para você não perder tempo.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 reveal active text-center group">
              <div className="bg-slate-900 border border-emerald-500/20 w-20 h-20 rounded-2xl flex items-center justify-center text-emerald-400 mb-8 mx-auto transition-all group-hover:bg-emerald-600 group-hover:text-white">
                <span className="text-2xl font-black">{step.num}</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-medium">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal active">
           <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 px-12 py-6 bg-emerald-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-xl active:scale-95">
              {CTA_TEXT}
           </a>
        </div>
      </div>
    </section>
  );
};

export default Process;