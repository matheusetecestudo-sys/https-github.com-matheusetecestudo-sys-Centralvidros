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
        <section className="py-20 bg-slate-950 overflow-hidden relative border-t border-white/5">
            {/* Glow decorativo de fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-accent/5 blur-[120px] pointer-events-none" />

            <div className="container-precision relative z-10">
                <div className="text-center mb-12 reveal active">
                    <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-3">Qualidade Certificada</p>
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">Utilizamos as <span className="text-brand-accent italic opacity-90">marcas líderes</span> do mercado.</h3>
                </div>

                {/* Marquee/Slider de Marcas */}
                <div className="relative mt-16 group">
                    {/* Gradientes de desfoque nas laterais para efeito premium */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

                    <div className="flex overflow-hidden select-none">
                        <div className="flex flex-nowrap gap-12 md:gap-24 items-center animate-scroll py-8">
                            {[...brands, ...brands].map((brand, i) => (
                                <div key={i} className="flex-shrink-0">
                                    <span className="text-3xl md:text-6xl font-black text-white hover:text-brand-accent transition-all duration-500 cursor-default whitespace-nowrap tracking-tighter hover:scale-110 block transform translate-z-0 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                                        {brand}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(calc(-50% - 12px)); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                    width: max-content;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default Partners;
