
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-12 reveal active">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
              O que dizem sobre o nosso <br />
              <span className="text-emerald-600 italic">Padrão de Entrega.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className={`reveal active bg-white p-10 md:p-14 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col relative border border-slate-100 ${index % 2 !== 0 ? 'lg:translate-y-8' : ''}`}
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl ring-4 ring-slate-50 shrink-0">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-black text-xl text-slate-900 leading-none mb-2">{testimonial.name}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{testimonial.role}</div>
                </div>
              </div>

              <p className="text-xl text-slate-600 font-medium leading-relaxed italic mb-10">
                "{testimonial.text}"
              </p>

              <div className="mt-auto pt-8 border-t border-slate-50 flex flex-wrap items-center justify-between gap-6">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                  </div>
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Projeto Verificado</span>
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
