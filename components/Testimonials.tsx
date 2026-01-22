import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-10 md:py-12 bg-white relative font-inter border-t border-slate-50">
      <div className="container-precision">

        <header className="mb-10 reveal active max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-brand-accent"></span>
            <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest text-center">Opinião de quem contratou</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Excelência aprovada por <br />
            <span className="text-slate-400 font-medium italic">nossos clientes.</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="reveal active flex flex-col p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 text-amber-400 mb-6 scale-90 origin-left">
                {[...Array(t.stars)].map((_, starI) => (
                  <svg key={starI} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>

              <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-200/50">
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-sm">{t.name}</span>
                  <span className="text-[10px] uppercase font-bold text-brand-accent tracking-widest">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
