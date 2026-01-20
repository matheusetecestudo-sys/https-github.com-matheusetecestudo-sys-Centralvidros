import React from 'react';
import { CLIENT_CONFIG, CTA_TEXT, WHATSAPP_LINK } from '../constants.ts';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal active">
            <span className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-4 block">Sobre Nós</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
              Engenharia e <br/><span className="text-emerald-600">Precisão em Vidros.</span>
            </h1>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                A <strong>{CLIENT_CONFIG.name}</strong> é referência em soluções sob medida. Atendemos desde pequenos reparos residenciais até grandes fachadas comerciais em toda a região de {CLIENT_CONFIG.city}.
              </p>
              <p>
                Nosso diferencial é o atendimento direto via WhatsApp, onde você fala com quem entende do assunto, garantindo rapidez no orçamento e segurança na instalação. Trabalhamos apenas com vidros temperados certificados e ferragens de alta durabilidade.
              </p>
              <div className="mt-10">
                <a 
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center justify-center px-10 py-5 bg-emerald-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:bg-emerald-700 transition-all"
                >
                  {CTA_TEXT}
                </a>
              </div>
            </div>
          </div>
          
          <div className="reveal active">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 aspect-[4/5]">
              <img 
                src="/images/Fachadas de vidro.png" 
                alt="Projetos Cristal Glass" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;