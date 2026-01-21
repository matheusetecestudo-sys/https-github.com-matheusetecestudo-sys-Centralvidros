import React from 'react';
import { FEATURED_SERVICES, getServiceWhatsAppLink, CTA_TEXT } from '../constants';

const Services: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <section id="servicos" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 reveal active">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-[900] text-slate-900 leading-[0.95] tracking-tighter mb-6">
              Nossas <br />
              <span className="text-emerald-600 italic">Especialidades.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg lg:text-xl leading-relaxed">
              Selecionamos o que há de mais moderno na indústria vidreira para elevar o nível do seu ambiente.
            </p>
          </div>
          <button
            onClick={() => onNavigate?.('servicos')}
            className="group flex items-center gap-4 px-8 py-4 bg-slate-50 rounded-2xl border border-slate-100 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-emerald-600 hover:border-emerald-200 transition-all"
          >
            Explorar Catálogo
            <div className="w-6 h-[2px] bg-slate-200 group-hover:bg-emerald-600 transition-colors"></div>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {FEATURED_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`reveal active group relative bg-slate-50 rounded-[3rem] overflow-hidden transition-all duration-700 hover:-translate-y-4 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 ${index % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                {service.tag && (
                  <div className="absolute top-8 left-8 glass-effect px-6 py-2 rounded-full text-[10px] font-black text-emerald-700 uppercase tracking-widest">
                    {service.tag}
                  </div>
                )}
              </div>

              <div className="p-10 md:p-14">
                <div className="flex items-start justify-between gap-6 mb-6">
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-none">{service.title}</h3>
                  <span className="text-4xl font-black text-slate-200 group-hover:text-emerald-100 transition-colors">0{index + 1}</span>
                </div>

                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 max-w-md">
                  {service.description}
                </p>

                <a
                  href={getServiceWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-6 px-10 py-6 bg-white rounded-2xl border border-slate-200 font-black text-xs uppercase tracking-widest text-slate-900 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-500 group/btn"
                >
                  {CTA_TEXT}
                  <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;