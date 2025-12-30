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
    <div className="bg-white text-black min-h-screen selection:bg-[#FFFE55] selection:text-black relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SocialProof />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;