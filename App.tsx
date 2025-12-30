
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StyleGuide from './pages/StyleGuide';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      
      const sectionId = window.location.pathname.replace('/', '');
      if (sectionId && sectionId !== 'guia-de-estilo') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const renderContent = () => {
    if (currentPath === '/guia-de-estilo') {
      return <StyleGuide />;
    }

    return (
      <main className="bg-black">
        <Hero />
        <div id="servicios">
          <Services />
        </div>
        <div id="clientes">
          <SocialProof />
        </div>
        <div id="contacto">
          <ContactForm />
        </div>
      </main>
    );
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-bananas selection:text-black">
      <Navbar />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;
