import React from 'react';
import { getWhatsAppLink } from '../constants';
import { MessageSquare, Ruler, CheckCircle } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Consultoria",
      desc: "Entendimento total das necessidades estéticas e técnicas do seu projeto.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      num: "02",
      title: "Logística",
      desc: "Medição técnica a laser e agendamento imediato da produção.",
      icon: <Ruler className="w-6 h-6" />
    },
    {
      num: "03",
      title: "Instalação",
      desc: "Execução limpa e segura com equipe própria e certificada.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-950 relative overflow-hidden">
      <div className="container-precision relative z-10">
        <header className="mb-16 reveal active">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-brand-accent"></span>
            <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest text-[clamp(8px,2vw,10px)]">Metodologia Cristal Glass</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1] mb-8">
            Do Projeto à <br />
            <span className="text-slate-500 italic">Entrega Final.</span>
          </h2>
          <p className="text-slate-400 max-w-lg font-medium text-lg leading-relaxed">
            Eficiência técnica para garantir que seu projeto seja executado sem erros e com acabamento impecável.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 items-baseline">
          {steps.map((step, index) => (
            <div key={index} className="reveal active group flex flex-col">
              <div className="flex items-center gap-6 mb-10">
                <span className="text-5xl font-black text-white/60 group-hover:text-brand-accent transition-all duration-500 italic leading-none">
                  {step.num}
                </span>
                <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-brand-accent/40 transition-all duration-500"></div>
                <div className="text-brand-accent transform group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest leading-tight">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed text-base font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 reveal active border-t border-white/5 pt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <p className="text-white text-2xl font-black mb-2 tracking-tight leading-none">Pronto para começar?</p>
              <p className="text-slate-500 font-medium">Fale agora com nosso time técnico.</p>
            </div>
            <a
              href={getWhatsAppLink("Início", "Seção Processo/Metodologia")}
              target="_blank"
              rel="noopener noreferrer"
              className="h-16 w-full sm:w-auto flex items-center justify-center px-10 bg-brand-whatsapp text-white rounded-xl font-bold text-base btn-interact shadow-lg shadow-brand-whatsapp/20 whitespace-nowrap"
            >
              Consultar especialista agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;