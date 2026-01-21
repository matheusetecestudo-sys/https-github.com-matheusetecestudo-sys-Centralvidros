
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Process from './components/Process.tsx';
import Gallery from './components/Gallery.tsx';
import Trust from './components/Trust.tsx';
import Testimonials from './components/Testimonials.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import AboutPage from './pages/AboutPage.tsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);

  const initLucide = useCallback(() => {
    if ((window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, []);

  const initObserver = useCallback(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Melhora performance: para de observar após animar
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Sync das Rotas
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (hash !== currentPage) {
        setIsNavigating(true);
        requestAnimationFrame(() => {
          setCurrentPage(hash);
          window.scrollTo({ top: 0, behavior: 'instant' });
          // Reduzimos o timeout para 200ms para casar com a variável de transição CSS
          setTimeout(() => setIsNavigating(false), 200);
        });
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, [currentPage]);

  // Re-init recursos visuais
  useEffect(() => {
    if (!isNavigating) {
      initLucide();
      const cleanup = initObserver();
      return cleanup;
    }
  }, [currentPage, isNavigating, initLucide, initObserver]);

  const navigate = (page: string) => {
    if (page === currentPage) return;
    window.location.hash = page;
  };

  const pageContent = useMemo(() => {
    switch (currentPage) {
      case 'servicos': return <ServicesPage />;
      case 'contato': return <ContactPage />;
      case 'sobre': return <AboutPage />;
      default:
        return (
          <div className="flex flex-col">
            <Hero />
            <Services onNavigate={navigate} />
            <Process />
            <Gallery />
            <FAQ />
            <Trust />
            <Testimonials />
          </div>
        );
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white antialiased overflow-x-hidden font-inter">
      {/* Barra de Progresso Superior */}
      <div className={`fixed top-0 left-0 w-full h-[3px] bg-blue-600 z-[250] transition-transform duration-300 origin-left ${isNavigating ? 'scale-x-100' : 'scale-x-0 opacity-0'}`} />

      <Navbar onNavigate={navigate} currentPage={currentPage} />

      <main className={`relative z-10 transition-all duration-200 ${isNavigating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
        {pageContent}
      </main>

      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
