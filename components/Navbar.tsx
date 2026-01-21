
import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';

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
    { label: 'Projetos', id: 'home' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'A Marca', id: 'sobre' },
    { label: 'Atendimento', id: 'contato' }
  ];

  return (
    <>
      <header className={`fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-[100] transition-all duration-700 ${scrolled ? 'glass-effect py-4 px-8 rounded-3xl shadow-2xl shadow-emerald-900/5' : 'py-6 px-4 bg-transparent'
        }`}>
        <div className="flex justify-between items-center">

          <button onClick={() => handleNav('home')} className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-sm transition-transform group-hover:rotate-12">C</div>
            <span className="text-lg font-black tracking-[-0.05em] text-slate-900 uppercase">Cristal Glass</span>
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative py-2 ${currentPage === item.id ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-900'
                  }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 hover:-translate-y-1 transition-all shadow-xl shadow-slate-900/10"
          >
            Orçamento
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-slate-50 rounded-xl border border-slate-100"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`h-[2px] bg-slate-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`h-[2px] bg-slate-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-[2px] bg-slate-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[90] md:hidden transition-all duration-700 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-110'
        }`}>
        <div className="h-full flex flex-col justify-center items-center gap-12 px-10">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-5xl font-black tracking-tight text-slate-900 transition-all duration-700 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            className="mt-8 px-12 py-8 bg-emerald-600 text-white rounded-[2rem] font-black text-xl uppercase tracking-widest shadow-2xl shadow-emerald-600/20"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
