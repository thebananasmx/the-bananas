import React from 'react';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md py-5">
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Left Side Navigation */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => scrollTo('clientes')} 
            className="border-[1.5px] border-black rounded-full px-6 py-2 text-base font-medium lowercase tracking-tight hover:bg-black hover:text-white transition-all"
          >
            proyectos
          </button>
          <button 
            onClick={() => scrollTo('contacto')} 
            className="border-[1.5px] border-black rounded-full px-6 py-2 text-base font-medium lowercase tracking-tight hover:bg-black hover:text-white transition-all"
          >
            contacto
          </button>
        </div>

        {/* Centered Brand Identity */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-black tracking-tighter lowercase hover:opacity-70 transition-opacity"
          >
            thebananas
          </button>
        </div>

        {/* Right Side CTA */}
        <div className="flex items-center">
          <button 
            onClick={() => scrollTo('contacto')}
            className="bg-black text-white px-8 py-3 rounded-full text-base font-medium lowercase tracking-tight hover:bg-zinc-800 transition-all shadow-sm"
          >
            cotiza ahora
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;