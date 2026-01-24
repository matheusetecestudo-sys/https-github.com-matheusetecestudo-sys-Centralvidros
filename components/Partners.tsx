import React from 'react';

const Partners: React.FC = () => {
    const brands = [
        "Cebrace",
        "Blindex",
        "Guardian",
        "Belmetal",
        "Saint-Gobain",
        "Alcoa"
    ];

    return (
        <section className="py-12 bg-slate-950 border-y border-white/5 overflow-hidden">
            <div className="container-precision">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
                    <div className="flex-shrink-0 text-center lg:text-left">
                        <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.3em] mb-2">Padrão Indústria</p>
                        <h3 className="text-xl font-black text-white tracking-tight">Utilizamos as <br /> <span className="text-slate-500 font-medium italic">melhores marcas.</span></h3>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-12 lg:gap-16 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all duration-700 max-w-4xl">
                        {brands.map((brand, i) => (
                            <span key={i} className="text-xl md:text-3xl font-black text-slate-600 tracking-tighter hover:text-brand-accent transition-colors cursor-default whitespace-nowrap">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
