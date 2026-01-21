import React from 'react';
import { WHATSAPP_LINK, CTA_TEXT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-24 pb-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="reveal active text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100 mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest leading-none">Instalação em até 48h</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
              Soluções em <br />
              Vidros de <br />
              <span className="text-emerald-600 italic">Elite.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Box, espelhos, janelas e manutenção com selo de <br className="hidden md:block" />
              qualidade internacional e atendimento instantâneo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href={WHATSAPP_LINK}
                className="group inline-flex items-center justify-center gap-4 px-12 py-7 text-base font-black text-white bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-3xl shadow-2xl shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:-translate-y-1 transition-all active:scale-95 uppercase tracking-widest"
              >
                {CTA_TEXT}
                <div className="bg-white/20 p-2 rounded-xl group-hover:rotate-12 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </div>
              </a>
            </div>
          </div>

          <div className="reveal active hidden lg:block relative">
            <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl border-8 border-slate-50 rotate-1 group hover:rotate-0 transition-transform duration-700">
              <img
                src="/images/box-banheiro.jpg"
                alt="Box de Banheiro Cristal Glass"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            {/* Trust badge flutuante */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-50 glass-effect">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-slate-900 italic">100%</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Seguro</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;