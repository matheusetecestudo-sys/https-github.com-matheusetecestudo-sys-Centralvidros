import React, { useState, useEffect } from 'react';
import { getWhatsAppLink, WHATSAPP_LINK } from '../constants';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    setIsMenuOpen(false);
    onNavigate(id);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { label: 'Início', id: 'home' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-lg' : 'py-4 md:py-8 bg-transparent'
        }`}>
        <div className="container-precision flex justify-between items-center h-12">

          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 md:gap-4 group focus:outline-none"
            aria-label="Ir para a página inicial"
          >
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center text-white font-black text-lg transition-all duration-500 shadow-lg ${scrolled ? 'bg-brand-primary' : 'bg-slate-900 group-hover:bg-brand-primary'}`}>
              D
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-sm md:text-base font-black tracking-tighter text-slate-900 uppercase">Duno ✅</span>
              <span className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest">Vidraçaria Técnica</span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.3em] transition-all relative py-2 group focus:outline-none ${currentPage === item.id ? 'text-brand-accent' : 'text-slate-500 hover:text-brand-accent'
                  }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-brand-accent rounded-full transition-all duration-300 ${currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-1/2'}`} />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={getWhatsAppLink("Navbar", "Orçamento Rápido")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center justify-center px-8 h-12 bg-brand-whatsapp text-white rounded-xl font-bold text-sm btn-interact shadow-xl shadow-brand-whatsapp/10 focus:outline-none whitespace-nowrap"
            >
              Orçamento rápido
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-12 h-12 flex items-center justify-center bg-white rounded-2xl border border-slate-100 shadow-sm z-[110] relative focus:outline-none touch-manipulation"
              aria-expanded={isMenuOpen}
              aria-label="Alternar menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`h-[2px] bg-brand-accent rounded-full transition-all duration-300 transform-gpu ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                <span className={`h-[2px] bg-brand-accent rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`h-[2px] bg-brand-accent rounded-full transition-all duration-300 transform-gpu ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
              </div>
            </button>
          </div>
        </div >
      </header >

      {/* Mobile Menu Drawer - Full Screen UX */}
      < div className={`fixed inset-0 bg-slate-950/20 backdrop-blur-sm z-[95] md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} />

      < div className={`fixed top-0 right-0 h-screen w-full sm:w-[400px] bg-white z-[100] md:hidden transition-transform duration-500 ease-in-out transform-gpu shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="h-full flex flex-col pt-32 pb-12 px-10">
          <p className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase mb-8">Navegação</p>

          <div className="flex flex-col gap-4">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-4xl font-black tracking-tighter text-left py-4 transition-all duration-500 touch-manipulation focus:outline-none ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                  } ${currentPage === item.id ? 'text-brand-accent' : 'text-slate-900'}`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-auto space-y-8">
            <div className={`w-full h-[1px] bg-slate-100 transition-all duration-1000 origin-left ${isMenuOpen ? 'scale-x-100' : 'scale-x-0'}`} />

            <div className={`transition-all duration-700 delay-400 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-4">Atendimento Técnico</p>
              <a
                href={getWhatsAppLink("Menu Mobile", "Atendimento Técnico")}
                className="w-full h-16 flex items-center justify-center bg-brand-whatsapp text-white rounded-2xl font-black text-lg btn-interact shadow-2xl shadow-brand-whatsapp/20 whitespace-nowrap"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Navbar;
