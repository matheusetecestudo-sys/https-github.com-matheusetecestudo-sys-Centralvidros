import React, { useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { t: "Tradição Técnica", d: "Duas décadas entregando precisão milimétrica em cada projeto." },
    { t: "Compromisso Real", d: "Prazos cumpridos à risca com logística própria e eficiente." },
    { t: "Materiais Elite", d: "Trabalhos apenas com vidros certificados e ferragens premium." },
    { t: "Preço Direto", d: "Economia real comprando direto de quem domina a engenharia." }
  ];

  return (
    <div className="bg-white min-h-screen font-inter">
      <main className="pt-20 md:pt-32">
        <header className="py-24 md:py-48 bg-slate-950 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-brand-accent/5 skew-x-[-15deg] pointer-events-none hidden md:block" />

          <div className="container-precision relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-8 reveal active">
                <div className="flex items-center gap-4 mb-10">
                  <span className="w-12 h-[2px] bg-brand-accent"></span>
                  <span className="text-[10px] md:text-xs font-black text-brand-accent uppercase tracking-[0.4em]">Nossa Trajetória Técnica</span>
                </div>
                <h1 className="text-5xl md:text-8xl lg:text-[100px] font-black leading-[0.95] md:leading-[0.85] mb-12 tracking-tighter">
                  Autoridade em <br />
                  <span className="text-slate-500 italic">Engenharia do Vidro.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-3xl opacity-80">
                  Mais que uma vidraçaria, somos especialistas em transformar ambientes com transparência, segurança estrutural e design de alto padrão para os projetos mais exigentes.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="py-24 md:py-40 container-precision">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-32 items-center mb-40">
            <div className="lg:col-span-5 reveal active">
              <div className="relative rounded-[3.5rem] overflow-hidden aspect-square md:aspect-[4/5] shadow-2xl border-[12px] border-slate-50">
                <img src="/images/espelhos-premium.jpg" alt="Equipe Técnica" className="w-full h-full object-cover scale-105" />
                <div className="absolute inset-0 bg-brand-accent/5" />
              </div>
            </div>
            <div className="lg:col-span-7 reveal active space-y-10">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Precisão técnica que <br /> <span className="text-slate-400 font-medium whitespace-nowrap">gera confiança real.</span>
              </h2>
              <div className="space-y-8 text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                <p>
                  A Cristal Glass nasceu da necessidade de um mercado que pedia mais que apenas instalação; pedia inteligência técnica aplicada ao vidro e compromisso com o resultado final.
                </p>
                <p>
                  Hoje, com mais de 4.500 projetos realizados, nossa marca é sinônimo de segurança e acabamento fino para arquitetos e proprietários que não aceitam menos que a perfeição.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 reveal active pt-24 border-t border-slate-100">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col group p-8 bg-slate-50 rounded-[2.5rem] transition-all hover:bg-white hover:shadow-xl border border-transparent hover:border-slate-100">
                <div className="text-brand-accent font-black text-4xl mb-6 italic opacity-20 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight">{v.t}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">{v.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-32 md:py-48 bg-slate-50">
          <div className="container-precision text-center reveal active">
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-tight">
              Pronto para elevar o <br className="hidden md:block" /> <span className="text-slate-400 font-medium">nível do seu projeto?</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 font-medium mb-16 max-w-3xl mx-auto opacity-70">
              Escolha uma empresa que trata cada milímetro do seu projeto com a técnica e o respeito que ele exige.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              className="h-20 flex items-center justify-center px-16 bg-brand-whatsapp text-white rounded-[2rem] font-black text-sm uppercase tracking-widest btn-interact shadow-2xl shadow-brand-whatsapp/20 mx-auto sm:w-auto inline-flex"
            >
              Consultar Especialista Agora
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;