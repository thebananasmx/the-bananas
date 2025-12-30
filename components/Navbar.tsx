import React from 'react';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/5 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-black tracking-tighter text-[#FFE000]"
          >
            THE BANANAS
          </button>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-10">
          <button onClick={() => scrollTo('servicios')} className="text-sm font-medium hover:text-[#FFE000] transition-colors uppercase tracking-widest">Servicios</button>
          <button onClick={() => scrollTo('clientes')} className="text-sm font-medium hover:text-[#FFE000] transition-colors uppercase tracking-widest">Clientes</button>
          <button onClick={() => scrollTo('contacto')} className="text-sm font-medium hover:text-[#FFE000] transition-colors uppercase tracking-widest">Contacto</button>
        </div>

        {/* CTA */}
        <div className="flex items-center">
          <button 
            onClick={() => scrollTo('contacto')}
            className="bg-[#FFE000] text-black px-6 py-2 rounded-md text-xs font-black uppercase hover:scale-105 active:scale-95 transition-all"
          >
            Cotizar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;