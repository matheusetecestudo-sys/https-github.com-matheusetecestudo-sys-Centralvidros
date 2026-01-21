import React from 'react';
import { WHATSAPP_LINK, CTA_TEXT } from '../constants';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Consultoria Técnica",
      desc: "Primeiro contato para entender a viabilidade e estética do seu projeto.",
      icon: "message-square"
    },
    {
      num: "02",
      title: "Engenharia de Precisão",
      desc: "Medição técnica a laser para garantir o encaixe milimétrico obrigatório.",
      icon: "ruler"
    },
    {
      num: "03",
      title: "Execução Elite",
      desc: "Instalação com equipe própria e entrega de certificados de segurança.",
      icon: "check-circle"
    }
  ];

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Detalhe de fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 reveal active">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-8">
            Nossa Metodologia <br />
            <span className="text-emerald-500 italic">de Entrega.</span>
          </h2>
          <p className="text-slate-400 max-w-lg font-medium text-lg leading-relaxed">
            Um processo rigoroso focado na longevidade e na perfeição visual dos seus vidros.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
          {steps.map((step, index) => (
            <div key={index} className="reveal active group">
              <div className="flex items-center gap-6 mb-10">
                <span className="text-6xl font-[900] text-emerald-500/20 group-hover:text-emerald-500 transition-colors duration-700 leading-none tracking-tighter">
                  {step.num}
                </span>
                <div className="h-[2px] w-12 bg-emerald-500/30 group-hover:w-20 transition-all duration-700"></div>
              </div>
              <h3 className="text-2xl font-black text-white mb-6 tracking-tight uppercase">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 reveal active">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-10 px-12 py-7 bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-emerald-500 hover:text-white transition-all duration-500 shadow-2xl">
            Projetar Agora
            <svg className="w-5 h-5 group-hover:translate-x-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;