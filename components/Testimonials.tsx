
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-emerald-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Feedback de quem contratou</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">
            Transparência e <span className="text-emerald-600 italic">Resultados Reais.</span>
          </h2>

          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="flex items-center gap-4 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-slate-900 leading-none">4.9</span>
              <div className="flex flex-col items-start leading-none">
                <div className="flex gap-0.5 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Empresa Verificada no Google</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="reveal bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-500 group flex flex-col relative"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-6 right-8 flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                <svg className="w-3 h-3 text-emerald-600 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Venda Real</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-slate-50 shadow-sm shrink-0">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-black text-slate-900 text-base">{testimonial.name}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{testimonial.role}</div>
                </div>
              </div>

              <div className="flex gap-0.5 text-amber-400 mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>

              <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow text-[15px] italic">
                "{testimonial.text}"
              </p>

              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{testimonial.date}</span>
                <div className="flex items-center gap-1 text-emerald-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[10px] font-black uppercase tracking-widest">Medição Conferida</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <div className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-full shadow-2xl">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <p className="text-xs font-black uppercase tracking-widest">Mais de 2.500 instalações com 100% de aprovação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
