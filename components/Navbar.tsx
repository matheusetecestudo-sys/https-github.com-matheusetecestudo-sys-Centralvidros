
import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK, CLIENT_CONFIG } from '../constants';

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  }, [isMenuOpen]);

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
      <header className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled || isMenuOpen ? 'py-4 bg-white shadow-md' : 'py-6 bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex justify-between items-center h-10">

            {/* Logo perfeitamente alinhada à esquerda */}
            <button onClick={() => handleNav('home')} className="flex items-center gap-3 relative z-[110] group">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-600/30 group-hover:rotate-6 transition-transform">C</div>
              <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">CRISTAL GLASS</span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`text-sm font-bold transition-all relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-emerald-600 after:transition-all ${currentPage === item.id
                    ? 'text-emerald-600 after:w-full'
                    : 'text-slate-500 hover:text-emerald-600 after:w-0 hover:after:w-full'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={WHATSAPP_LINK}
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-7 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                Orçamento
              </a>
            </nav>

            {/* Mobile Toggle perfeitamente alinhado à direita */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-[110] w-12 h-12 flex items-center justify-center bg-slate-50 rounded-2xl border border-slate-100 shadow-sm"
              aria-label="Menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`h-[2.5px] bg-slate-900 rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-[2.5px] bg-slate-900 rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-[2.5px] bg-slate-900 rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Fullscreen Otimizado */}
      <div className={`fixed inset-0 bg-white z-[100] md:hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className="flex-1 flex flex-col justify-center items-center gap-10 px-10 pt-10">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-4xl font-black tracking-tighter transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${currentPage === item.id ? 'text-[var(--emerald-600)]' : 'text-slate-900'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            className={`w-full mt-10 py-6 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-center rounded-[2rem] font-black text-lg uppercase tracking-widest shadow-xl shadow-emerald-900/10 active:scale-95 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            style={{ transitionDelay: '400ms' }}
          >
            Orçamento WhatsApp
          </a>
        </div>
        <div className="p-10 text-center border-t border-slate-50">
          <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.4em]">{CLIENT_CONFIG.city}</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
