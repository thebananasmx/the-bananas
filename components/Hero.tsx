import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#FFE000]/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black leading-[0.9] mb-8 uppercase">
            Transformamos tu <span className="text-[#FFE000]">ecommerce</span> en una máquina de ventas
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-tight max-w-2xl">
                Estrategas en Shopify y especialistas en UX/UI con más de 15 años de experiencia diseñando experiencias que convierten.
              </p>
            </div>
            
            <div className="md:col-span-4 flex flex-col space-y-4">
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#FFE000] text-black px-10 py-5 rounded-md font-black text-xl uppercase hover:scale-105 transition-all text-center"
              >
                Empieza Ahora
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-[2px] h-12 bg-zinc-800 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#FFE000]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;