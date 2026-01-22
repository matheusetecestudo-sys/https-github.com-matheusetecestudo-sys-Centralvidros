import React from 'react';
import { FEATURED_SERVICES, getServiceWhatsAppLink } from '../constants';

const Services: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <section id="servicos" className="py-10 pb-16 md:py-12 bg-white relative overflow-hidden">
      <div className="container-precision">

        <div className="grid lg:grid-cols-12 gap-8 mb-8 reveal active items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-brand-accent"></span>
              <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Nossas Especialidades</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1] mb-8 tracking-tight">
              Soluções Técnicas <br />
              <span className="text-slate-400 font-medium">em Vidros Modernos.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg md:text-xl leading-relaxed max-w-xl">
              Equilíbrio perfeito entre tecnologia vidreira e sofisticação arquitetônica para seu ambiente.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-end">
            <button
              onClick={() => onNavigate?.('servicos')}
              className="group flex items-center gap-4 py-4 px-2 border-b-2 border-slate-100 text-[11px] font-bold text-slate-400 hover:text-brand-accent hover:border-brand-accent transition-all duration-300"
            >
              Ver catálogo técnico
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {FEATURED_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="reveal active group flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100/50"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-widest shadow-sm">
                  {service.tag || 'Destaque'}
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-black text-slate-500 group-hover:text-brand-accent transition-colors italic leading-none">0{index + 1}</span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-none">{service.title}</h3>
                </div>

                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 flex-grow">
                  {service.description}
                </p>

                <a
                  href={getServiceWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-16 flex items-center justify-center px-10 bg-brand-whatsapp text-white rounded-xl font-bold text-base btn-interact shadow-lg shadow-brand-whatsapp/10 whitespace-nowrap"
                >
                  Consultar orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center reveal active">
          <div className="inline-flex items-center gap-6 px-10 h-16 bg-slate-900 text-white rounded-2xl shadow-2xl">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&h=128&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&h=128&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=128&h=128&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=128&h=128&auto=format&fit=crop"
              ].map((url, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
                  <img src={url} alt="Técnico Certificado" className="w-full h-full object-cover opacity-80" />
                </div>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Equipe técnica própria certificada pela ABNT.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;