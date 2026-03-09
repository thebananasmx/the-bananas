import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import StyleGuide from './pages/StyleGuide';
import MaintenanceLanding from './components/MaintenanceLanding';

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
      <main>
        <MaintenanceLanding />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
