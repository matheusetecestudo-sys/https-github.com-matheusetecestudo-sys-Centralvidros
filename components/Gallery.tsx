import React from 'react';
import { ALL_SERVICES, getServiceWhatsAppLink } from '../constants';

const Gallery: React.FC = () => {
  const galleryServices = ALL_SERVICES;

  return (
    <section id="solucoes" className="py-8 pb-16 md:py-10 bg-white font-inter">
      <div className="container-precision">
        <div className="text-center mb-8 reveal active">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-brand-accent"></span>
            <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest text-center">Catálogo Completo</span>
            <span className="w-10 h-[1px] bg-brand-accent"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1]">
            Portfólio de <br />
            <span className="text-slate-400 font-medium">Soluções Vidreiras.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {galleryServices.map((service, index) => (
            <a
              key={service.id}
              href={getServiceWhatsAppLink(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal active group relative block aspect-square overflow-hidden rounded-[2rem] bg-slate-100 border border-slate-50 transition-all duration-500 hover:shadow-2xl btn-interact"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 pb-10">
                <p className="text-white font-bold text-[9px] md:text-xs uppercase tracking-[0.2em] leading-tight mb-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-sm">{service.title}</p>
                <div className="inline-flex bg-brand-whatsapp text-white text-[10px] font-bold px-4 py-2.5 rounded-xl transition-all duration-500 opacity-0 group-hover:opacity-100 shadow-xl whitespace-nowrap">
                  Orçar no WhatsApp
                </div>
              </div>
            </a>
          ))}

          <a
            href={getServiceWhatsAppLink("Outros Serviços")}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal active flex flex-col items-center justify-center aspect-square rounded-[2rem] bg-slate-900 p-8 text-center group hover:bg-brand-primary transition-all duration-500 shadow-2xl relative overflow-hidden btn-interact"
          >
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
            </div>
            <p className="text-white font-bold text-[11px] uppercase tracking-[0.2em] leading-relaxed italic">Peça seu orçamento no WhatsApp</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;