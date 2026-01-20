import React, { useEffect } from 'react';
import { ALL_SERVICES, getServiceWhatsAppLink, CTA_TEXT } from '../constants';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 reveal active">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
            Todos os Nossos <span className="text-emerald-600">Serviços</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Atendimento residencial e comercial. Orçamentos rápidos via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="reveal active bg-slate-50 rounded-[2rem] p-6 border border-slate-100 flex flex-col hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-200">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy" 
                />
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed font-medium">
                {service.description}
              </p>
              
              <a 
                href={getServiceWhatsAppLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-emerald-600 text-white rounded-xl font-black text-[11px] text-center uppercase tracking-widest shadow-md hover:bg-emerald-700 transition-all active:scale-95"
              >
                {CTA_TEXT}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-16 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden reveal active">
           <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                Precisa de um projeto <span className="text-emerald-500">especial?</span>
              </h2>
              <p className="text-slate-400 mb-10 max-w-xl mx-auto text-base font-medium">
                Se o que você procura não está na lista, fale conosco agora. Resolvemos qualquer demanda em vidros.
              </p>
              
              <a 
                href={getServiceWhatsAppLink("Projeto Especial")} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-emerald-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:bg-emerald-500 transition-all active:scale-95"
              >
                {CTA_TEXT}
              </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;