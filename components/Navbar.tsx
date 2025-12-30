
import React from 'react';

const Navbar: React.FC = () => {
  const navigate = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md py-6 border-b border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-3 items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <a 
            href="/servicios" 
            onClick={(e) => navigate(e, '/servicios')}
            className="text-white hover:text-bananas transition-colors text-xs font-black uppercase tracking-widest hidden md:block"
          >
            servicios
          </a>
          <a 
            href="/clientes" 
            onClick={(e) => navigate(e, '/clientes')}
            className="text-white hover:text-bananas transition-colors text-xs font-black uppercase tracking-widest hidden md:block"
          >
            clientes
          </a>
        </div>

        {/* Center Section: Logo */}
        <div className="text-center">
          <a 
            href="/" 
            onClick={(e) => navigate(e, '/')}
            className="text-2xl md:text-3xl font-black tracking-tighter text-bananas"
          >
            thebananas
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-end">
          <a 
            href="/contacto" 
            onClick={(e) => navigate(e, '/contacto')}
            className="bg-bananas text-black px-6 py-2 rounded-sm text-xs font-black hover:scale-105 transition-transform shadow-lg shadow-bananas/10 uppercase tracking-tighter"
          >
            cotizar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
