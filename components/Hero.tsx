import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6">
      <div className="w-full max-w-[1400px] relative">
        {/* The Giant Yellow Pill Background */}
        <div className="w-full aspect-[21/9] bg-[#FFFE55] rounded-full flex flex-col items-center justify-center relative overflow-hidden px-10">
          
          {/* Mock Arrows from the photo */}
          <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden md:block">
            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6"><path d="M80 50H20M40 30L20 50L40 70" /></svg>
          </div>
          <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden md:block">
            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6"><path d="M20 50H80M60 30L80 50L60 70" /></svg>
          </div>

          <div className="text-center z-10 max-w-4xl">
            <h1 className="text-6xl md:text-9xl font-black leading-[0.8] mb-10 tracking-tighter uppercase">
              Transformamos <br/> tu ecommerce
            </h1>
            <div className="flex justify-center">
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#1A1A1A] text-white px-12 py-5 rounded-full font-black text-lg uppercase hover:scale-105 transition-all shadow-xl"
              >
                Empieza Ahora
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-center text-2xl font-bold max-w-2xl mx-auto leading-tight">
            Estrategas en Shopify y especialistas en UX/UI con más de 15 años de experiencia diseñando experiencias que convierten.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;