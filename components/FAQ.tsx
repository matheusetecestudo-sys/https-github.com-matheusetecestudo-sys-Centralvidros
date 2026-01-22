import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-8 md:py-10 bg-slate-50 font-inter">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 reveal active">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-brand-accent"></span>
            <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest text-center">Tire suas dúvidas</span>
            <span className="w-10 h-[1px] bg-brand-accent"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
            Suporte e <br />
            <span className="text-slate-400 font-medium">Esclarecimentos.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="reveal active bg-white rounded-[2rem] border border-slate-100 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-10 text-left group"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openIndex === index ? 'text-brand-accent' : 'text-slate-900 group-hover:text-brand-accent'}`}>
                  {item.question}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-brand-primary text-white rotate-180 shadow-lg' : 'bg-slate-50 text-slate-300'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </button>

              <div className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className="p-6 md:p-10 pt-0 text-slate-500 text-lg font-medium leading-relaxed border-t border-slate-50/50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
