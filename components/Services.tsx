import React from 'react';
import { FEATURED_SERVICES, getServiceWhatsAppLink } from '../constants';

const Services: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <section id="servicos" className="py-10 pb-16 md:py-12 bg-white relative overflow-hidden">
      <div className="container-precision">

        <div className="grid lg:grid-cols-12 gap-8 mb-16 reveal active items-center text-center">
          <div className="lg:col-span-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-brand-accent"></span>
              <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Os mais requisitados</span>
              <span className="w-10 h-[1px] bg-brand-accent"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black !text-brand-accent leading-[1] mb-8 tracking-tight">
              Serviços <br />
              <span className="text-slate-400 font-medium italic">Mais Procurados.</span>
            </h2>
            <p className="!text-slate-400 font-medium text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-8">
              Confira as soluções com maior demanda e excelência técnica garantida para seu ambiente.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => onNavigate?.('servicos')}
                className="group flex items-center gap-4 py-4 px-2 border-b-2 border-slate-100 text-[11px] font-bold text-slate-400 hover:text-brand-accent hover:border-brand-accent transition-all duration-300"
              >
                Ver catálogo completo
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="reveal active group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border-2 border-slate-200 hover:shadow-[0_40px_80px_-16px_rgba(0,0,0,0.15)] transition-all duration-700 btn-interact shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-widest shadow-sm">
                  {service.tag || 'Destaque'}
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col flex-grow items-center text-center">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <span className="text-2xl font-black text-slate-400 group-hover:!text-brand-accent transition-colors italic leading-none">0{index + 1}</span>
                  <h3 className="text-2xl md:text-3xl font-black !text-brand-accent leading-none">{service.title}</h3>
                </div>

                <p className="!text-slate-600 text-lg font-medium leading-relaxed mb-10 flex-grow">
                  {service.description}
                </p>

                <a
                  href={getServiceWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-16 flex items-center justify-center gap-3 px-10 bg-brand-whatsapp hover:bg-[#128C7E] text-white rounded-xl font-bold text-base btn-interact shadow-lg shadow-brand-whatsapp/20 hover:shadow-xl hover:shadow-brand-whatsapp/30 hover:scale-[1.02] transition-all duration-300 whitespace-nowrap"
                >
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
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
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&h=128&auto=format&fit=crop&fm=webp",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&h=128&auto=format&fit=crop&fm=webp",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=128&h=128&auto=format&fit=crop&fm=webp",
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=128&h=128&auto=format&fit=crop&fm=webp"
              ].map((url, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
                  <img src={url} alt="Técnico Certificado" className="w-full h-full object-cover" decoding="async" loading="lazy" />
                </div>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] !text-white">Equipe técnica própria certificada pela ABNT.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;