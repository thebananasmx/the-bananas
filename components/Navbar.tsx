import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md py-5 border-b border-zinc-50">
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          {/* Desktop Left Side Navigation */}
          <div className="hidden md:flex items-center space-x-3">
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
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <button 
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}
              className="text-2xl font-black tracking-tighter lowercase hover:opacity-70 transition-opacity"
            >
              thebananas
            </button>
          </div>

          {/* Right Side - Desktop CTA / Mobile Toggle */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <button 
                onClick={() => scrollTo('contacto')}
                className="bg-black text-white px-8 py-3 rounded-full text-base font-medium lowercase tracking-tight hover:bg-zinc-800 transition-all shadow-sm"
              >
                cotiza ahora
              </button>
            </div>
            
            {/* Mobile Hamburger Button (Only visible when closed) */}
            {!isOpen && (
              <button 
                onClick={toggleMenu}
                className="md:hidden p-2 text-black relative z-[60]"
                aria-label="Open Menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between items-end">
                  <span className="h-[2px] bg-black w-6"></span>
                  <span className="h-[2px] bg-black w-4"></span>
                  <span className="h-[2px] bg-black w-5"></span>
                </div>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Off-canvas Menu */}
      <div className={`fixed inset-0 bg-[#FFFE55] z-[55] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        
        {/* Explicit Close Button (X) */}
        <button 
          onClick={toggleMenu}
          className="absolute top-7 right-6 p-2 text-black hover:opacity-50 transition-opacity"
          aria-label="Close Menu"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-col items-center space-y-10">
          <button 
            onClick={() => scrollTo('clientes')} 
            className="text-5xl font-black lowercase tracking-tighter hover:opacity-50 transition-opacity"
          >
            proyectos
          </button>
          <button 
            onClick={() => scrollTo('contacto')} 
            className="text-5xl font-black lowercase tracking-tighter hover:opacity-50 transition-opacity"
          >
            contacto
          </button>
          <div className="pt-4">
            <button 
              onClick={() => scrollTo('contacto')}
              className="bg-black text-white px-12 py-5 rounded-full text-xl font-medium lowercase tracking-tight shadow-2xl active:scale-95 transition-transform"
            >
              cotiza ahora
            </button>
          </div>
        </div>

        {/* Brand footer in menu */}
        <div className="absolute bottom-12 text-center">
          <span className="text-lg font-black tracking-tighter lowercase opacity-20">thebananas</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;