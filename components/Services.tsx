import React from 'react';
import { FEATURED_SERVICES, getServiceWhatsAppLink, CTA_TEXT } from '../constants';

const Services: React.FC<{ onNavigate?: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12 reveal active">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Serviços <span className="text-emerald-600">Principais</span></h2>
          <p className="text-slate-500 mt-4 font-medium">Os serviços mais pedidos pelos nossos clientes.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {FEATURED_SERVICES.map((service) => (
            <div key={service.id} className="reveal active bg-white rounded-[2rem] overflow-hidden shadow-md border border-slate-100 group hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {service.tag && (
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                      {service.tag}
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">{service.description}</p>
                  <a 
                    href={getServiceWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-4 bg-emerald-600 text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg hover:bg-emerald-700 transition-all active:scale-95"
                  >
                    {CTA_TEXT}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal active">
           <button 
             onClick={() => onNavigate?.('servicos')}
             className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-700 transition-colors border-b-2 border-emerald-600 pb-1"
           >
             Ver lista completa de serviços
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
           </button>
        </div>
      </div>
    </section>
  );
};

export default Services;