import React, { useEffect } from 'react';
import { ALL_SERVICES, getServiceWhatsAppLink } from '../constants';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-inter">
      <main className="pt-32 pb-24">
        <header className="py-20 bg-slate-50 border-b border-slate-100 mb-20">
          <div className="container-precision">
            <div className="max-w-3xl reveal active">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-brand-accent"></span>
                <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Portfólio Completo</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1] mb-8 tracking-tight">
                Soluções para <br />
                <span className="text-slate-400 font-medium">Cada Detalhe.</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                Vidraçaria técnica com foco em segurança, durabilidade e acabamento premium para projetos residenciais e comerciais.
              </p>
            </div>
          </div>
        </header>

        <section className="container-precision">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {ALL_SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="reveal active group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-500"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight">{service.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-10 flex-grow text-base opacity-80">
                    {service.description}
                  </p>
                  <a
                    href={getServiceWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-16 flex items-center justify-center w-full bg-brand-whatsapp text-white rounded-xl font-bold text-base btn-interact shadow-lg shadow-brand-whatsapp/10 whitespace-nowrap"
                  >
                    Solicitar orçamento agora
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 reveal active">
            <div className="bg-slate-950 rounded-[3.5rem] p-12 md:p-24 overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-accent/5 skew-x-[-15deg] pointer-events-none" />

              <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="w-10 h-[2px] bg-brand-accent"></span>
                    <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Divisão Corporativa</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1] tracking-tight">
                    Projetos em <br /> <span className="text-slate-500 italic">Alta Escala.</span>
                  </h2>
                  <p className="text-slate-400 font-medium text-lg md:text-xl mb-12 leading-relaxed max-w-xl">
                    Atendemos construtoras, escritórios e condomínios com logística própria e preços competitivos de fábrica.
                  </p>
                  <a
                    href={getServiceWhatsAppLink("Projetos Corporativos")}
                    target="_blank"
                    className="h-14 flex items-center justify-center px-12 bg-white text-slate-900 rounded-xl font-bold text-sm btn-interact shadow-xl inline-flex sm:w-auto whitespace-nowrap"
                  >
                    Falar com o departamento comercial
                  </a>
                </div>
                <div className="lg:col-span-4 hidden lg:block">
                  <div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
                    <div className="w-40 h-40 border border-white/5 rounded-full flex items-center justify-center">
                      <span className="text-white/20 font-black text-4xl italic">C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;