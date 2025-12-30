import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleLocationChange = () => {
      const sectionId = window.location.pathname.replace('/', '');
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-[#FFE000] selection:text-black relative">
      {/* Mejora visual: Grid sutil y gradiente de profundidad */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#111_0%,#000_100%)]"></div>
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <SocialProof />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;