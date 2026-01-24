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
            <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest text-[clamp(8px,2vw,10px)]">Metodologia Duno</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1] mb-8">
            Do Projeto à <br />
            <span className="text-slate-500 italic">Entrega Final.</span>
          </h2>
          <p className="!text-slate-200 max-w-lg font-medium text-lg leading-relaxed">
            Eficiência técnica para garantir que seu projeto seja executado sem erros e com acabamento impecável.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 items-baseline">
          {steps.map((step, index) => (
            <div key={index} className="reveal active group flex flex-col">
              <div className="flex items-center gap-6 mb-10">
                <span className="text-5xl font-black text-white group-hover:text-brand-accent transition-all duration-500 italic leading-none">
                  {step.num}
                </span>
                <div className="h-[1px] flex-1 bg-white/20 group-hover:bg-brand-accent/40 transition-all duration-500"></div>
                <div className="text-brand-accent transform group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold !text-white mb-6 uppercase tracking-widest leading-tight">{step.title}</h3>
              <p className="!text-slate-200 leading-relaxed text-base font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 reveal active border-t border-white/5 pt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <p className="!text-white text-2xl font-black mb-2 tracking-tight leading-none">Pronto para começar?</p>
              <p className="!text-slate-200 font-medium">Fale agora com nosso time técnico profissional.</p>
            </div>
            <a
              href={getWhatsAppLink("Início", "Seção Processo/Metodologia")}
              target="_blank"
              rel="noopener noreferrer"
              className="h-16 w-full sm:w-auto flex items-center justify-center gap-3 px-10 bg-brand-whatsapp hover:bg-[#128C7E] text-white rounded-xl font-bold text-base btn-interact shadow-lg shadow-brand-whatsapp/20 hover:shadow-xl hover:shadow-brand-whatsapp/30 hover:scale-[1.05] transition-all duration-300 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Consultar especialista agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;