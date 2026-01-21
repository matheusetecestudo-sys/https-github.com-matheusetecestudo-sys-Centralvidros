import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 bg-white overflow-hidden">
      {/* Elementos de design sutis (Grid técnico) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="max-w-5xl">
          <div className="reveal active flex items-center gap-4 mb-10">
            <div className="h-[1px] w-12 bg-emerald-600"></div>
            <span className="text-[10px] sm:text-xs font-black text-emerald-600 uppercase tracking-[0.5em]">Vidraçaria de Alta Performance</span>
          </div>

          <h1 className="reveal active text-6xl sm:text-7xl md:text-[8rem] font-black text-slate-900 leading-[0.82] mb-16 tracking-[-0.05em]">
            A Engenharia <br />
            do <span className="text-emerald-600">Vidro.</span>
          </h1>

          <div className="reveal active grid lg:grid-cols-2 gap-16 items-end">
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl text-slate-500 font-medium leading-tight tracking-tight">
                Projetos sob medida que unem <span className="text-slate-900 font-bold">segurança máxima</span> e o ápice do design contemporâneo.
              </p>
              <div className="flex items-center gap-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm">
                      <div className="w-full h-full bg-emerald-600/10"></div>
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-relaxed">
                  Líder em Projetos <br /> Premium em São Paulo
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-10 px-10 py-7 bg-slate-900 text-white rounded-[2rem] hover:bg-emerald-600 hover:-translate-y-2 transition-all duration-700 active:scale-95 shadow-2xl shadow-slate-900/20"
              >
                <span className="font-extrabold text-sm uppercase tracking-[0.3em]">Iniciar Orçamento</span>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-emerald-600 transition-all duration-500 rotate-[-45deg] group-hover:rotate-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </a>
              <p className="text-center md:text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-4">
                Resposta em menos de <span className="text-emerald-600 uppercase italic">15 minutos</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;