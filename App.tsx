import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import SocialProof from './components/SocialProof.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';

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
    <div className="bg-[#000000] text-white min-h-screen selection:bg-[#FFE000] selection:text-black relative">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
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