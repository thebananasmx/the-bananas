import React from 'react';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md py-6">
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Left Side Buttons */}
        <div className="flex items-center space-x-3">
          <button className="border-2 border-black rounded-full px-6 py-2 text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
            SHOP
          </button>
          <button onClick={() => scrollTo('servicios')} className="border-2 border-black rounded-full px-6 py-2 text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
            NOSOTROS
          </button>
          <button className="p-2 ml-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>

        {/* Centered Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-black tracking-tighter"
          >
            thebananas
          </button>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-3">
          <button className="p-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </button>
          <button 
            onClick={() => scrollTo('contacto')}
            className="border-2 border-black rounded-full px-6 py-2 text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
          >
            CARRITO 1
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;