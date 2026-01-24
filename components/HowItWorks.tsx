import React from 'react';

const HowItWorks: React.FC = () => {
    const steps = [
        {
            number: "01",
            title: "Meça o local",
            description: "Tire as medidas aproximadas (largura e altura). Não precisa ser exato, nossa equipe fará a conferência técnica final.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m14.5 12.5 2-2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m11.5 9.5 2-2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8.5 6.5 2-2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5.5 3.5 2-2" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Tire uma foto",
            description: "Uma foto ou vídeo rápido do ambiente ajuda nossos técnicos a entenderem os detalhes da instalação e ferragens.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            )
        },
        {
            number: "03",
            title: "Envie no WhatsApp",
            description: "Clique no botão e envie os dados. Em poucos minutos, um especialista técnico enviará seu orçamento personalizado.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            )
        }
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden border-t border-slate-50">
            <div className="container-precision">
                <div className="text-center mb-16 reveal active">
                    <h2 className="text-3xl md:text-5xl font-black !text-brand-accent mb-6 tracking-tight">
                        Orçamento em <span className="text-slate-400 font-medium italic">3 passos simples.</span>
                    </h2>
                    <p className="text-slate-500 font-medium max-w-lg mx-auto">Praticidade e rapidez para você tirar o seu projeto do papel hoje mesmo.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
                    {/* Linha conectora no desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 -translate-y-1/2 z-0" />

                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center bg-white p-6 rounded-3xl group">
                            <div className="w-20 h-20 bg-brand-accent text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-brand-accent/20 group-hover:scale-110 transition-transform duration-500 relative">
                                {step.icon}
                                <span className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 border-4 border-white text-white rounded-full text-[10px] font-black flex items-center justify-center">
                                    {step.number}
                                </span>
                            </div>
                            <h3 className="text-xl font-black !text-brand-accent mb-4 tracking-tight">{step.title}</h3>
                            <p className="!text-slate-500 font-medium leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
