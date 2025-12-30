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
      if (sectionId && sectionId !== 'style-guide') {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    // Listen for custom navigation events
    window.addEventListener('pushstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
    };
  }, []);

  // Helper for internal navigation
  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    window.dispatchEvent(new Event('pushstate'));
    window.scrollTo(0, 0);
  };

  if (currentPath === '/style-guide') {
    return (
      <div className="bg-white text-black min-h-screen selection:bg-[#FFFE55] selection:text-black">
        <StyleGuide onNavigate={navigate} />
        <Footer onNavigate={navigate} />
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen selection:bg-[#FFFE55] selection:text-black relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SocialProof />
        <ContactForm />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;