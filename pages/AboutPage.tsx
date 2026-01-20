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
              Sua Vidraçaria de <br/><span className="text-emerald-600">Confiança.</span>
            </h1>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                A <strong>{CLIENT_CONFIG.name}</strong> trabalha com foco em qualidade e agilidade. Somos especialistas em vidros temperados e laminados, atendendo projetos de todos os tamanhos.
              </p>
              <p>
                Trabalhamos apenas com materiais certificados e ferragens de alta durabilidade, garantindo que seu projeto seja seguro e bonito por muito tempo.
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
                src="/images/sobre-nos.jpg" 
                alt="Nossa Equipe" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;