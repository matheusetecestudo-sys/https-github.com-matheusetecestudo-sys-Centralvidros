import React, { useEffect } from 'react';
import { getWhatsAppLink, WHATSAPP_LINK } from '../constants';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { t: "Tradição técnica", d: "Duas décadas entregando precisão milimétrica em cada projeto realizado." },
    { t: "Compromisso real", d: "Prazos cumpridos à risca com logística própria e equipe altamente qualificada." },
    { t: "Materiais elite", d: "Trabalhamos apenas com vidros certificados e ferragens de alto padrão." },
    { t: "Preço direto", d: "Economia real comprando direto de quem domina toda a engenharia do vidro." }
  ];

  return (
    <div className="bg-white min-h-screen font-inter">
      <main className="pt-16 md:pt-24">
        {/* Header Section - No Images */}
        <header className="py-16 md:py-24 bg-slate-950 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-brand-accent/5 skew-x-[-15deg] pointer-events-none hidden md:block" />

          <div className="container-precision relative z-10">
            <div className="max-w-4xl mx-auto text-left reveal active">
              <div className="flex items-center justify-start gap-4 mb-10">
                <span className="w-12 h-[2px] bg-brand-accent"></span>
                <span className="text-[10px] md:text-xs font-black text-brand-accent uppercase tracking-[0.4em]">Autoridade técnica</span>
                <span className="w-12 h-[2px] bg-brand-accent"></span>
              </div>
              <h1 className="text-4xl md:text-8xl lg:text-[110px] font-black leading-[0.95] md:leading-[0.85] mb-12 tracking-tighter">
                Engenharia <br />
                <span className="text-slate-500 italic">sem segredos.</span>
              </h1>
              <p className="text-xl md:text-3xl text-slate-400 font-medium leading-relaxed opacity-90 max-w-2xl">
                Mais que uma vidraçaria, somos especialistas em transformar ambientes with transparência, segurança estrutural e design de alto padrão.
              </p>
            </div>
          </div>
        </header>

        {/* Story Section - No Images */}
        <section className="py-16 md:py-24 container-precision">
          <div className="max-w-4xl mx-auto reveal active">
            <div className="text-left mb-16">
              <h2 className="text-3xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-10">
                Precisão técnica que <br /> <span className="text-slate-400 font-medium">gera confiança real.</span>
              </h2>
              <div className="space-y-10 text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                <p>
                  A Cristal Glass nasceu da necessidade de um mercado que pedia mais que apenas instalação; pedia inteligência técnica aplicada ao vidro e compromisso absoluto com o resultado final.
                </p>
                <p>
                  Hoje, com mais de 4.500 projetos realizados, nossa marca é sinônimo de segurança e acabamento fino para arquitetos, construtores e proprietários que buscam a perfeição em cada detalhe.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-16 border-t border-slate-100">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col group p-8 bg-slate-50 rounded-3xl transition-all hover:bg-white hover:shadow-2xl border border-transparent hover:border-slate-100 italic">
                  <div className="text-brand-accent font-black text-4xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">{v.t}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed text-base md:text-lg">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container-precision text-center reveal active">
            <h2 className="text-4xl md:text-8xl font-black text-slate-900 mb-12 tracking-tighter leading-tight">
              Pronto para elevar o <br className="hidden md:block" /> <span className="text-slate-400 font-medium">nível do seu projeto?</span>
            </h2>
            <p className="text-xl md:text-3xl text-slate-500 font-medium mb-16 max-w-3xl mx-auto opacity-80">
              Escolha uma empresa que trata cada milímetro do seu projeto com a técnica e o respeito que ele exige.
            </p>
            <div className="flex justify-center">
              <a
                href={getWhatsAppLink("Sobre", "Botão CTA Final")}
                target="_blank"
                className="group h-16 min-w-[260px] flex items-center justify-center px-10 bg-brand-whatsapp text-white rounded-2xl font-bold text-base btn-interact shadow-2xl shadow-brand-whatsapp/30 whitespace-nowrap"
              >
                Consultar um especialista agora
              </a>
            </div>
          </div>
        </section>
        <div className="h-24 md:hidden"></div>
      </main>
    </div>
  );
};

export default AboutPage;