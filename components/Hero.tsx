
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#FFE000_0%,transparent_50%)] opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-tighter mb-12">
            transformamos tu <br/>
            <span className="text-bananas italic">ecommerce</span> en una <br/>
            máquina de ventas.
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-zinc-400 font-bold mb-12 leading-tight">
              estrategas en shopify y especialistas en ux/ui con más de 15 años de experiencia escalando marcas globales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="bg-bananas text-black px-12 py-5 rounded-sm font-black text-xl hover:scale-105 transition-all shadow-xl shadow-bananas/20">
                empieza ahora
              </a>
              <a href="#servicios" className="border-2 border-white text-white px-12 py-5 rounded-sm font-black text-xl hover:bg-white hover:text-black transition-all">
                nuestro método
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
